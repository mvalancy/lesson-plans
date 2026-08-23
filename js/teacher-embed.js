/* teacher-embed.js: pull student content into a teacher page.
 *
 * A teacher page marks the spot with:
 *
 *   <div class="student-embed"
 *        data-embed-src="/intro-ai-tools/lessons/04-spreadsheets-data.html"
 *        data-embed-select="#agenda">
 *     <p class="embed-fallback"><a href="…#agenda">Open the student view</a></p>
 *   </div>
 *
 * This script fetches each student page once (however many placeholders point
 * at it), lifts out the selected sections, and drops them into a labelled
 * "Student facing" frame. It is progressive enhancement: with JavaScript off,
 * or if the fetch fails, the placeholder's own link stays put and the teacher
 * page still works. Dependency-free, no build step.
 */
(function () {
  'use strict';

  var nodes = document.querySelectorAll('.student-embed[data-embed-src]');
  if (!nodes.length) return;
  if (!window.fetch || !window.DOMParser) return;

  var pages = {};   /* src -> Promise<Document>, so each page is fetched once */

  function load(src) {
    if (!pages[src]) {
      pages[src] = fetch(src, { credentials: 'same-origin' })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.text();
        })
        .then(function (html) {
          return new DOMParser().parseFromString(html, 'text/html');
        });
    }
    return pages[src];
  }

  /* Injected copies must not fight the host page: ids would be duplicated,
     and a .reveal class would leave the content permanently invisible because
     lesson-reveal.js set its observer up before this content existed. */
  function clean(el, prefix) {
    el.classList.remove('reveal', 'visible');
    if (el.id) el.id = prefix + el.id;
    var kids = el.querySelectorAll('[id], .reveal');
    for (var i = 0; i < kids.length; i++) {
      kids[i].classList.remove('reveal', 'visible');
      if (kids[i].id) kids[i].id = prefix + kids[i].id;
    }
    /* the student page's canvases belong to its own hero, not to this one */
    var canvases = el.querySelectorAll('canvas');
    for (var c = 0; c < canvases.length; c++) {
      canvases[c].parentNode.removeChild(canvases[c]);
    }
    return el;
  }

  function fill(host, doc) {
    var src = host.getAttribute('data-embed-src');
    var select = host.getAttribute('data-embed-select') || '';
    var wanted = select.split(',');
    var frag = document.createDocumentFragment();
    var found = 0;

    for (var i = 0; i < wanted.length; i++) {
      var sel = wanted[i].trim();
      if (!sel) continue;
      var match;
      try { match = doc.querySelector(sel); } catch (e) { match = null; }
      if (!match) continue;
      frag.appendChild(clean(document.importNode(match, true), 'embed-'));
      found++;
    }
    if (!found) return false;

    var frame = document.createElement('div');
    frame.className = 'embed-frame';

    var head = document.createElement('p');
    head.className = 'embed-head';
    var label = document.createElement('span');
    label.textContent = host.getAttribute('data-embed-label') || 'Student facing';
    head.appendChild(label);

    var link = document.createElement('a');
    link.href = src + (wanted[0] && wanted[0].charAt(0) === '#' ? wanted[0].trim() : '');
    link.textContent = 'Open the student view';
    head.appendChild(link);

    var body = document.createElement('div');
    body.className = 'embed-body';
    body.appendChild(frag);

    frame.appendChild(head);
    frame.appendChild(body);

    host.innerHTML = '';
    host.appendChild(frame);
    return true;
  }

  for (var i = 0; i < nodes.length; i++) {
    (function (host) {
      load(host.getAttribute('data-embed-src'))
        .then(function (doc) { fill(host, doc); })
        .catch(function (err) {
          /* leave the fallback link alone; it is the whole point of it */
          if (window.console) console.warn('teacher-embed:', err);
        });
    })(nodes[i]);
  }
})();
