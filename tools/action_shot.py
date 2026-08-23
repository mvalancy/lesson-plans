#!/usr/bin/env python3
"""Action-shot capture for game thumbnails.

Drives a real headless Chrome over the DevTools Protocol so we can click
through menus and screenshot games mid-play instead of at their idle
screens. Used by tools/make_thumbs.py for the sites whose landing page is
boring or whose canvas only renders once you interact.

Needs: google-chrome on PATH, `pip install websocket-client pillow`.

Usage:
  python3 tools/action_shot.py <recipe-name> <out.png>
  python3 tools/action_shot.py --list
"""
import json
import subprocess
import sys
import tempfile
import time
import urllib.request
from base64 import b64decode

try:
    import websocket  # websocket-client
except ImportError:
    sys.exit("pip install websocket-client")

VIEWPORT = (1280, 800)


def free_port():
    import socket
    s = socket.socket()
    s.bind(("127.0.0.1", 0))
    port = s.getsockname()[1]
    s.close()
    return port


class Chrome:
    def __init__(self):
        self.profile = tempfile.mkdtemp(prefix="thumbshot-")
        self.port = free_port()
        self.proc = subprocess.Popen([
            "google-chrome", "--headless=new", "--disable-gpu",
            "--enable-unsafe-swiftshader",          # software WebGL for canvas games
            "--remote-debugging-port=%d" % self.port,
            "--user-data-dir=" + self.profile,
            "--window-size=%d,%d" % VIEWPORT,
            "--hide-scrollbars", "--mute-audio", "about:blank",
        ], stdout=subprocess.DEVNULL,
            stderr=open(self.profile + "/chrome.log", "w"))
        for _ in range(60):
            targets = None
            for host in ("127.0.0.1", "[::1]"):
                try:
                    targets = json.load(urllib.request.urlopen(
                        "http://%s:%d/json" % (host, self.port), timeout=1))
                    break
                except Exception:
                    continue
            try:
                if targets is None:
                    raise LookupError("not up yet")
                page = next(t for t in targets if t["type"] == "page")
                self.ws = websocket.create_connection(
                    page["webSocketDebuggerUrl"], timeout=30,
                    suppress_origin=True)
                break
            except Exception:
                time.sleep(0.3)
        else:
            raise RuntimeError("chrome did not come up; log: " + self.profile + "/chrome.log")
        self._id = 0
        self.cmd("Page.enable")
        self.cmd("Runtime.enable")

    def cmd(self, method, **params):
        self._id += 1
        self.ws.send(json.dumps({"id": self._id, "method": method,
                                 "params": params}))
        while True:
            msg = json.loads(self.ws.recv())
            if msg.get("id") == self._id:
                if "error" in msg:
                    raise RuntimeError(method + ": " + str(msg["error"]))
                return msg.get("result", {})

    def goto(self, url, settle=6):
        self.cmd("Page.navigate", url=url)
        time.sleep(settle)

    def click(self, x, y):
        for kind in ("mousePressed", "mouseReleased"):
            self.cmd("Input.dispatchMouseEvent", type=kind, x=x, y=y,
                     button="left", clickCount=1)
        time.sleep(0.4)

    def click_text(self, needle, settle=1.0):
        """Click the centre of the first element whose text contains needle."""
        js = """
        (() => {
          const walk = (root) => {
            for (const el of root.querySelectorAll('*')) {
              if (el.children.length === 0 &&
                  el.textContent.trim().toLowerCase().includes(%s)) {
                const r = el.getBoundingClientRect();
                if (r.width > 0 && r.height > 0)
                  return {x: r.x + r.width / 2, y: r.y + r.height / 2};
              }
            }
            return null;
          };
          const hit = walk(document);
          return hit ? JSON.stringify(hit) : 'null';
        })()
        """ % json.dumps(needle.lower())
        out = self.cmd("Runtime.evaluate", expression=js,
                       returnByValue=True)["result"].get("value")
        if out and out != "null":
            pos = json.loads(out)
            self.click(int(pos["x"]), int(pos["y"]))
            time.sleep(settle)
            return True
        return False

    def type_text(self, text):
        for ch in text:
            self.cmd("Input.dispatchKeyEvent", type="keyDown", text=ch)
            self.cmd("Input.dispatchKeyEvent", type="keyUp", text=ch)
            time.sleep(0.05)

    def key(self, key, code, keyCode):
        self.cmd("Input.dispatchKeyEvent", type="rawKeyDown", key=key,
                 code=code, windowsVirtualKeyCode=keyCode)
        self.cmd("Input.dispatchKeyEvent", type="keyUp", key=key,
                 code=code, windowsVirtualKeyCode=keyCode)

    def js(self, expression):
        return self.cmd("Runtime.evaluate", expression=expression,
                        returnByValue=True)["result"].get("value")

    def shot(self, path):
        data = self.cmd("Page.captureScreenshot", format="png")["data"]
        with open(path, "wb") as f:
            f.write(b64decode(data))

    def close(self):
        try:
            self.ws.close()
        finally:
            self.proc.terminate()


# ---- per-game recipes: get past the menu, play a beat, look alive ---------

def survivalofthebestfit(c):
    c.goto("https://www.survivalofthebestfit.com/game/", settle=12)
    # Intro dialog ("you've secured 1 million dollars") -> START GAME, then
    # advance dialogue beats until the office scene is up.
    c.click_text("start game", settle=4.0)
    c.click_text("let's start hiring", settle=3.0)
    for _ in range(10):
        if not (c.click_text("next", settle=2.0) or
                c.click_text("continue", settle=2.0) or
                c.click_text("ok", settle=2.0) or
                c.click_text("got it", settle=2.0)):
            c.click(640, 500)   # advance canvas dialogue on click
            time.sleep(2.0)
    time.sleep(2)


def paperclips(c):
    c.goto("https://www.decisionproblem.com/paperclips/index2.html", settle=4)
    # Click the button a bunch so every counter is alive, then zoom so the
    # spare text UI fills the frame instead of floating in white space.
    for _ in range(30):
        c.click_text("make paperclip", settle=0.05)
    c.js("document.body.style.zoom='1.8'")
    time.sleep(1)


def semantris(c):
    c.goto("https://research.google.com/semantris/", settle=10)
    c.click_text("play blocks", settle=8)  # straight into block mode
    time.sleep(6)                          # let the first blocks stack up
    c.type_text("music")                   # a guess mid-typing looks alive
    time.sleep(2)


def infinite_craft(c):
    c.goto("https://neal.fun/infinite-craft/", settle=12)
    # If the bot wall let us through, drag a couple of elements to the board.
    c.js("""
      (() => {  /* nudge: the sidebar items are draggable; a click sometimes
                    spawns nothing, so this shot may stay the empty board */
        return document.title;
      })()
    """)
    time.sleep(3)


RECIPES = {
    "survivalofthebestfit-com-game": survivalofthebestfit,
    "decisionproblem-com-paperclips-index2-html": paperclips,
    "research-google-com-semantris": semantris,
    "neal-fun-infinite-craft": infinite_craft,
}


def main():
    if len(sys.argv) == 2 and sys.argv[1] == "--list":
        print("\n".join(sorted(RECIPES)))
        return
    if len(sys.argv) != 3 or sys.argv[1] not in RECIPES:
        sys.exit(__doc__)
    name, out = sys.argv[1], sys.argv[2]
    c = Chrome()
    try:
        RECIPES[name](c)
        c.shot(out)
        print("shot", out)
    finally:
        c.close()


if __name__ == "__main__":
    main()
