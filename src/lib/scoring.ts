import type { Point } from '../data/types';
import { distance, angle, angleDifference, resamplePoints } from './geometry';

const SAMPLE_COUNT = 50;

export function discreteFrechetDistance(P: Point[], Q: Point[]): number {
  const n = P.length;
  const m = Q.length;
  if (n === 0 || m === 0) return Infinity;

  const dp: number[][] = Array.from({ length: n }, () => Array(m).fill(-1));

  function compute(i: number, j: number): number {
    if (dp[i][j] !== -1) return dp[i][j];

    const d = distance(P[i], Q[j]);

    if (i === 0 && j === 0) {
      dp[i][j] = d;
    } else if (i === 0) {
      dp[i][j] = Math.max(compute(0, j - 1), d);
    } else if (j === 0) {
      dp[i][j] = Math.max(compute(i - 1, 0), d);
    } else {
      dp[i][j] = Math.max(
        Math.min(compute(i - 1, j), compute(i, j - 1), compute(i - 1, j - 1)),
        d
      );
    }
    return dp[i][j];
  }

  return compute(n - 1, m - 1);
}

export function directionSimilarity(P: Point[], Q: Point[]): number {
  if (P.length < 2 || Q.length < 2) return 0;

  let totalDiff = 0;
  const n = Math.min(P.length, Q.length) - 1;

  for (let i = 0; i < n; i++) {
    const angleP = angle(P[i], P[i + 1]);
    const angleQ = angle(Q[i], Q[i + 1]);
    totalDiff += angleDifference(angleP, angleQ);
  }

  const avgDiff = totalDiff / n;
  return Math.max(0, 1 - avgDiff / Math.PI);
}

export interface StrokeScore {
  frechet: number;
  direction: number;
  combined: number;
  stars: number;
}

export function scoreStroke(
  userPoints: Point[],
  referencePoints: Point[],
  viewBoxSize: number = 109
): StrokeScore {
  if (userPoints.length < 2) {
    return { frechet: 0, direction: 0, combined: 0, stars: 0 };
  }

  const userResampled = resamplePoints(userPoints, SAMPLE_COUNT);
  const refResampled = resamplePoints(referencePoints, SAMPLE_COUNT);

  // Fréchet distance normalized by viewBox diagonal
  const diagonal = viewBoxSize * Math.SQRT2;
  const rawFrechet = discreteFrechetDistance(userResampled, refResampled);
  const normalizedFrechet = Math.min(1, rawFrechet / (diagonal * 0.3));
  const frechetScore = 1 - normalizedFrechet;

  const dirScore = directionSimilarity(userResampled, refResampled);

  const combined = 0.7 * frechetScore + 0.3 * dirScore;

  let stars = 0;
  if (combined >= 0.85) stars = 3;
  else if (combined >= 0.65) stars = 2;
  else if (combined >= 0.40) stars = 1;

  return {
    frechet: frechetScore,
    direction: dirScore,
    combined,
    stars,
  };
}

export function scoreAllStrokes(strokeScores: StrokeScore[]): StrokeScore {
  if (strokeScores.length === 0) {
    return { frechet: 0, direction: 0, combined: 0, stars: 0 };
  }

  const avgFrechet = strokeScores.reduce((s, sc) => s + sc.frechet, 0) / strokeScores.length;
  const avgDirection = strokeScores.reduce((s, sc) => s + sc.direction, 0) / strokeScores.length;
  const combined = 0.7 * avgFrechet + 0.3 * avgDirection;

  let stars = 0;
  if (combined >= 0.85) stars = 3;
  else if (combined >= 0.65) stars = 2;
  else if (combined >= 0.40) stars = 1;

  return {
    frechet: avgFrechet,
    direction: avgDirection,
    combined,
    stars,
  };
}

export function getDistanceColor(dist: number, viewBoxSize: number = 109): string {
  const threshold1 = viewBoxSize * 0.08; // good
  const threshold2 = viewBoxSize * 0.18; // ok

  if (dist <= threshold1) return '#4CAF50';
  if (dist <= threshold2) return '#FFC107';
  return '#F44336';
}
