import { svgPathProperties } from 'svg-path-properties';
import type { Point } from '../data/types';

export function sampleSvgPath(d: string, numPoints: number = 50): Point[] {
  const props = new svgPathProperties(d);
  const totalLength = props.getTotalLength();
  if (totalLength === 0) return [];

  const points: Point[] = [];
  for (let i = 0; i < numPoints; i++) {
    const t = (i / (numPoints - 1)) * totalLength;
    const pt = props.getPointAtLength(t);
    points.push({ x: pt.x, y: pt.y });
  }
  return points;
}

export function getStrokeStartPoint(d: string): Point {
  const props = new svgPathProperties(d);
  const pt = props.getPointAtLength(0);
  return { x: pt.x, y: pt.y };
}

export function getStrokeEndPoint(d: string): Point {
  const props = new svgPathProperties(d);
  const pt = props.getPointAtLength(props.getTotalLength());
  return { x: pt.x, y: pt.y };
}
