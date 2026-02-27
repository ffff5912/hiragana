import type { Point } from '../data/types';
import { glyphPaths } from '../data/glyphPaths';

// Offscreen canvas for hit testing (109x109 to match viewBox)
let hitCanvas: OffscreenCanvas | HTMLCanvasElement | null = null;
let hitCtx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null = null;

function getHitCtx() {
  if (hitCtx) return hitCtx;
  try {
    hitCanvas = new OffscreenCanvas(109, 109);
    hitCtx = hitCanvas.getContext('2d');
  } catch {
    // Fallback for browsers without OffscreenCanvas
    hitCanvas = document.createElement('canvas');
    hitCanvas.width = 109;
    hitCanvas.height = 109;
    hitCtx = hitCanvas.getContext('2d');
  }
  return hitCtx;
}

// Cache Path2D objects per character
const pathCache = new Map<string, Path2D>();

function getPath2D(char: string): Path2D | null {
  if (pathCache.has(char)) return pathCache.get(char)!;

  const pathData = glyphPaths[char];
  if (!pathData) return null;

  const path = new Path2D(pathData);
  pathCache.set(char, path);
  return path;
}

/** Check if a point (in 109x109 viewBox coords) is inside the glyph fill */
export function isPointInGlyph(char: string, point: Point): boolean {
  const ctx = getHitCtx();
  const path = getPath2D(char);
  if (!ctx || !path) return false;

  return ctx.isPointInPath(path, point.x, point.y);
}

/** Get distance color based on whether the point is inside the glyph */
export function getGlyphDistanceColor(char: string, point: Point): string {
  const ctx = getHitCtx();
  const path = getPath2D(char);
  if (!ctx || !path) return '#4CAF50'; // default green

  // Check if point is inside the glyph fill
  if (ctx.isPointInPath(path, point.x, point.y)) {
    return '#4CAF50'; // green: on the character
  }

  // Check slightly expanded area (stroke detection with tolerance)
  // Use isPointInStroke with a thick stroke to detect "near" the character
  ctx.lineWidth = 12; // generous tolerance zone around the character
  if (ctx.isPointInStroke(path, point.x, point.y)) {
    return '#FFC107'; // yellow: close to the character
  }

  return '#F44336'; // red: far from the character
}

/** Score a completed stroke based on how much of it overlaps the glyph */
export function scoreStrokeAgainstGlyph(char: string, points: Point[]): number {
  if (points.length < 2) return 0;

  let insideCount = 0;
  let nearCount = 0;
  const ctx = getHitCtx();
  const path = getPath2D(char);
  if (!ctx || !path) return 0;

  for (const pt of points) {
    if (ctx.isPointInPath(path, pt.x, pt.y)) {
      insideCount++;
    } else {
      ctx.lineWidth = 10;
      if (ctx.isPointInStroke(path, pt.x, pt.y)) {
        nearCount++;
      }
    }
  }

  // Score: inside points count fully, near points count half
  const score = (insideCount + nearCount * 0.5) / points.length;
  return Math.min(1, score);
}
