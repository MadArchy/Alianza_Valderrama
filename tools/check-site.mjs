/**
 * Verifica que las rutas locales referenciadas en index.html y assets/css/main.css existan.
 * Uso: npm test
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const missing = new Set();
const checked = new Set();

function exists(rel) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) missing.add(rel);
  checked.add(rel);
}

function stripQuery(u) {
  return u.split('?')[0].split('#')[0];
}

function checkRel(relRaw) {
  let rel = stripQuery(relRaw);
  if (rel.startsWith('/')) rel = rel.slice(1);
  if (!rel || rel.startsWith('http://') || rel.startsWith('https://') || rel.startsWith('mailto:') || rel.startsWith('tel:')) return;
  if (rel === '/' || rel === '') return;
  exists(rel);
}

// index.html
const indexPath = path.join(root, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');
const attrRe = /(src|href)=["']([^"']+)["']/gi;
let m;
while ((m = attrRe.exec(html))) {
  checkRel(m[2]);
}

// main.css — url(...)
const cssPath = path.join(root, 'assets', 'css', 'main.css');
const cssDir = path.dirname(cssPath);
const css = fs.readFileSync(cssPath, 'utf8');
const urlRe = /url\(\s*['"]?([^'")\s]+)['"]?\s*\)/g;
while ((m = urlRe.exec(css))) {
  let u = m[1].trim();
  if (u.startsWith('data:')) continue;
  const resolved = path.normalize(path.join(cssDir, u));
  const rel = path.relative(root, resolved).replace(/\\/g, '/');
  checkRel(rel);
}

if (missing.size > 0) {
  console.error('Archivos faltantes:');
  for (const r of missing) console.error('  -', r);
  process.exit(1);
}

console.log('OK: rutas locales verificadas (' + checked.size + ' referencias).');
