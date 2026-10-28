import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { parseHTML } from 'linkedom';
import config from './site.config.mjs';
import { htmlToMarkdown } from './html-markdown.mjs';
const root = path.resolve(import.meta.dirname, '../..');
const read = file => readFile(path.join(root, file), 'utf8');
const files = execFileSync('git', ['ls-files', '-z'], { cwd: root }).toString().split('\0').filter(config.include);

test('every public page is current and discoverable without exposing private material', async () => {
  execFileSync(process.execPath, ['tools/markdown/generate.mjs', '--check'], { cwd: root });
  const index = await read('llms.txt');
  assert.ok(files.length > 30);
  for (const file of files) {
    const target = file.replace(/\.html$/, '.md');
    assert.ok(index.includes(config.origin + '/' + target), file);
    assert.ok((await read(file)).includes(`href="/${target}"`));
    assert.ok((await read(target)).length > 200);
  }
  assert.ok(!index.includes('ignored/') && !index.includes('functions/') && !index.includes('.dev.vars'));
  assert.match(await read('_headers'), /Content-Type: text\/markdown; charset=utf-8/);
  assert.ok((await read('404.html')).includes('Page not found'));
});

test('teacher Markdown contains the selected student sections and follows source changes', async () => {
  const teachers = files.filter(file => file.endsWith('.teacher.html'));
  assert.equal(teachers.length, 8);
  for (const file of teachers) {
    const source = await read(file);
    const { document } = parseHTML(source);
    const md = await read(file.replace(/\.html$/, '.md'));
    for (const host of document.querySelectorAll('.student-embed')) {
      const src = host.getAttribute('data-embed-src').slice(1);
      const student = parseHTML(await read(src)).document;
      for (const selector of host.getAttribute('data-embed-select').split(',')) {
        const heading = student.querySelector(selector.trim()).querySelector('h2,h3')?.textContent.trim();
        if (heading) assert.ok(md.includes(heading), `${file}: ${heading}`);
      }
    }
    const changed = await config.render(file, source, async src => (await read(src)).replace('id="agenda"', 'id="agenda"><p>fresh-student-sentinel</p><div'));
    assert.ok(htmlToMarkdown(changed, file, config.origin).includes('fresh-student-sentinel'));
  }
});

test('converter preserves source content and downloads while omitting runtime code', () => {
  const md = htmlToMarkdown('<html><head><title>Test</title></head><body><h1>Updated lesson</h1><p>Fresh evidence &amp; context</p><a href="file.pdf">Read</a><script>privateRuntime()</script></body></html>', 'intro-ai-tools/index.html', config.origin);
  assert.ok(md.includes('# Updated lesson') && md.includes('Fresh evidence & context'));
  assert.ok(md.includes(config.origin + '/intro-ai-tools/file.pdf'));
  assert.ok(!md.includes('privateRuntime'));
});
