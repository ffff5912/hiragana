import type { StrokeScore } from '../lib/scoring';

export function getStarLabel(stars: number): string {
  switch (stars) {
    case 3: return 'すばらしい！';
    case 2: return 'じょうず！';
    case 1: return 'がんばったね！';
    default: return 'もういちど やってみよう！';
  }
}

export function getScorePercent(score: StrokeScore): number {
  return Math.round(score.combined * 100);
}
