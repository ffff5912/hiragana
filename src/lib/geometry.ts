import type { Point } from '../data/types';

export function distance(a: Point, b: Point): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function angle(a: Point, b: Point): number {
  return Math.atan2(b.y - a.y, b.x - a.x);
}

export function angleDifference(a: number, b: number): number {
  let diff = Math.abs(a - b);
  if (diff > Math.PI) diff = 2 * Math.PI - diff;
  return diff;
}

export function lerp(a: Point, b: Point, t: number): Point {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
  };
}

export function pathLength(points: Point[]): number {
  let len = 0;
  for (let i = 1; i < points.length; i++) {
    len += distance(points[i - 1], points[i]);
  }
  return len;
}

export function resamplePoints(points: Point[], n: number): Point[] {
  if (points.length === 0) return [];
  if (points.length === 1) return Array(n).fill(points[0]);
  if (n <= 1) return [points[0]];

  const totalLen = pathLength(points);
  if (totalLen === 0) return Array(n).fill(points[0]);

  const step = totalLen / (n - 1);
  const result: Point[] = [points[0]];
  let accumulated = 0;
  let j = 1;

  for (let i = 1; i < n - 1; i++) {
    const target = i * step;
    while (j < points.length) {
      const seg = distance(points[j - 1], points[j]);
      if (accumulated + seg >= target) {
        const t = (target - accumulated) / seg;
        result.push(lerp(points[j - 1], points[j], t));
        break;
      }
      accumulated += seg;
      j++;
    }
    if (result.length <= i) {
      result.push(points[points.length - 1]);
    }
  }

  result.push(points[points.length - 1]);
  return result;
}

export function pointToSegmentDistance(p: Point, a: Point, b: Point): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return distance(p, a);

  let t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));

  return distance(p, { x: a.x + t * dx, y: a.y + t * dy });
}

export function nearestPointOnPath(p: Point, path: Point[]): { dist: number; index: number } {
  let minDist = Infinity;
  let minIndex = 0;

  for (let i = 0; i < path.length; i++) {
    const d = distance(p, path[i]);
    if (d < minDist) {
      minDist = d;
      minIndex = i;
    }
  }

  return { dist: minDist, index: minIndex };
}
