import { parseHTML } from 'linkedom';
export default {
  name: 'Lessons by Matthew Valancy',
  origin: 'https://lessons.mattvalancy.com',
  webRoot: '',
  include: file => /^(?:index|resources)\.html$/.test(file) || /^intro-ai-tools\/.*\.html$/.test(file),
  async render(file, html, read) {
    if (!file.endsWith('.teacher.html')) return html;
    const { document } = parseHTML(html);
    for (const host of document.querySelectorAll('.student-embed[data-embed-src]')) {
      const src = host.getAttribute('data-embed-src');
      if (!/^\/intro-ai-tools\/lessons\/[^/]+\.html$/.test(src)) throw new Error(`Unpublished student source: ${src}`);
      const student = parseHTML(await read(src.slice(1))).document;
      const selectors = host.getAttribute('data-embed-select').split(',').map(s => s.trim());
      const sections = selectors.map(selector => {
        const section = student.querySelector(selector);
        if (!section) throw new Error(`Missing student section ${src}${selector}`);
        return section.outerHTML;
      });
      host.innerHTML = '<h3>Student facing</h3>' + sections.join('\n');
    }
    return document.toString();
  },
};
