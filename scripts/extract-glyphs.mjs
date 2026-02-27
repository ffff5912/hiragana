// Extract glyph outlines from Zen Maru Gothic font and output SVG path data
// Usage: node scripts/extract-glyphs.mjs

import opentype from 'opentype.js';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fontPath = join(__dirname, '..', 'public', 'fonts', 'ZenMaruGothic-Regular.ttf');

const font = opentype.loadSync(fontPath);

const VIEW_BOX = 109;
const PADDING = 8;
const DRAW_SIZE = VIEW_BOX - PADDING * 2; // 93

function getGlyphSvgPath(char) {
  const glyph = font.charToGlyph(char);
  if (!glyph || glyph.index === 0) return null;

  // Get raw path at a large size for precision
  const fontSize = 1000;
  const path = glyph.getPath(0, 0, fontSize);

  // Collect all points from path commands to compute actual bounding box
  const xs = [];
  const ys = [];
  for (const cmd of path.commands) {
    if (cmd.x !== undefined) { xs.push(cmd.x); ys.push(cmd.y); }
    if (cmd.x1 !== undefined) { xs.push(cmd.x1); ys.push(cmd.y1); }
    if (cmd.x2 !== undefined) { xs.push(cmd.x2); ys.push(cmd.y2); }
  }

  if (xs.length === 0) return null;

  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const w = maxX - minX;
  const h = maxY - minY;

  if (w === 0 || h === 0) return null;

  // Scale to fit in DRAW_SIZE, keeping aspect ratio
  const scale = Math.min(DRAW_SIZE / w, DRAW_SIZE / h);
  const scaledW = w * scale;
  const scaledH = h * scale;

  // Center in viewBox
  const tx = (VIEW_BOX - scaledW) / 2 - minX * scale;
  const ty = (VIEW_BOX - scaledH) / 2 - minY * scale;

  // Transform path commands to SVG within 109x109 viewBox
  let svgPath = '';
  for (const cmd of path.commands) {
    const transformX = (x) => (x * scale + tx).toFixed(1);
    const transformY = (y) => (y * scale + ty).toFixed(1);

    switch (cmd.type) {
      case 'M':
        svgPath += `M${transformX(cmd.x)},${transformY(cmd.y)} `;
        break;
      case 'L':
        svgPath += `L${transformX(cmd.x)},${transformY(cmd.y)} `;
        break;
      case 'Q':
        svgPath += `Q${transformX(cmd.x1)},${transformY(cmd.y1)} ${transformX(cmd.x)},${transformY(cmd.y)} `;
        break;
      case 'C':
        svgPath += `C${transformX(cmd.x1)},${transformY(cmd.y1)} ${transformX(cmd.x2)},${transformY(cmd.y2)} ${transformX(cmd.x)},${transformY(cmd.y)} `;
        break;
      case 'Z':
        svgPath += 'Z ';
        break;
    }
  }

  return svgPath.trim();
}

// All hiragana and katakana
const hiragana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

// Generate the glyph path data file
let output = `// Auto-generated from Zen Maru Gothic font\n`;
output += `// Each character's outline path in 109x109 viewBox\n\n`;
output += `export const glyphPaths: Record<string, string> = {\n`;

let count = 0;
for (const ch of hiragana + katakana) {
  const path = getGlyphSvgPath(ch);
  if (path) {
    output += `  '${ch}': '${path}',\n`;
    count++;
  }
}

output += `};\n`;

const outPath = join(__dirname, '..', 'src', 'data', 'glyphPaths.ts');
writeFileSync(outPath, output, 'utf-8');
console.log(`Wrote ${count} glyph paths to ${outPath}`);

// Verify: parse the output and check all coordinates are within 0-109
const regex = /[MLQC]([-\d.]+),([-\d.]+)/g;
let minCoord = Infinity, maxCoord = -Infinity;
let m;
while ((m = regex.exec(output)) !== null) {
  const x = parseFloat(m[1]);
  const y = parseFloat(m[2]);
  minCoord = Math.min(minCoord, x, y);
  maxCoord = Math.max(maxCoord, x, y);
}
console.log(`Coordinate range: ${minCoord.toFixed(1)} to ${maxCoord.toFixed(1)} (viewBox: 0-${VIEW_BOX})`);
