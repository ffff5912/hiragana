// Analyze the correctly-scaled glyph paths and output M-command positions
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const glyphFile = readFileSync(join(__dirname, '..', 'src', 'data', 'glyphPaths.ts'), 'utf-8');

function getMoveTos(pathStr) {
  const points = [];
  const regex = /M([-\d.]+),([-\d.]+)/g;
  let match;
  while ((match = regex.exec(pathStr)) !== null) {
    points.push({ x: parseFloat(match[1]), y: parseFloat(match[2]) });
  }
  return points;
}

function extractPaths() {
  const paths = {};
  const regex = /'([^']+)': '([^']+)'/g;
  let match;
  while ((match = regex.exec(glyphFile)) !== null) {
    paths[match[1]] = match[2];
  }
  return paths;
}

const paths = extractPaths();
const hiragana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

console.log('=== Glyph sub-path M-commands (in 109x109 viewBox) ===\n');

for (const ch of hiragana + katakana) {
  const path = paths[ch];
  if (!path) continue;
  const moveTos = getMoveTos(path);
  const pts = moveTos.map(pt => `(${pt.x.toFixed(0)},${pt.y.toFixed(0)})`).join(' ');
  console.log(`${ch}: [${moveTos.length}] ${pts}`);
}
