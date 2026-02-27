import type { MascotStage, DressUpItem, RankDefinition } from './types';

export const MASCOT_STAGES: { stage: MascotStage; label: string; minStars: number }[] = [
  { stage: 'egg', label: 'たまご', minStars: 0 },
  { stage: 'baby', label: 'あかちゃん', minStars: 10 },
  { stage: 'child', label: 'こども', minStars: 30 },
  { stage: 'teen', label: 'せいちょうき', minStars: 60 },
  { stage: 'adult', label: 'おとな', minStars: 100 },
  { stage: 'master', label: 'マスター', minStars: 150 },
];

export const DRESS_UP_ITEMS: DressUpItem[] = [
  { id: 'ribbon', name: 'リボン', category: 'head', requiredStars: 5 },
  { id: 'hat', name: 'ぼうし', category: 'head', requiredStars: 15 },
  { id: 'glasses', name: 'めがね', category: 'face', requiredStars: 25 },
  { id: 'scarf', name: 'マフラー', category: 'body', requiredStars: 40 },
  { id: 'cape', name: 'マント', category: 'body', requiredStars: 70 },
  { id: 'crown', name: 'おうかん', category: 'head', requiredStars: 100 },
  { id: 'wand', name: 'まほうのつえ', category: 'accessory', requiredStars: 130 },
  { id: 'wings', name: 'つばさ', category: 'accessory', requiredStars: 150 },
];

export const RANKS: RankDefinition[] = [
  { id: 'beginner', label: 'ビギナー', minStars: 0, color: '#9E9E9E' },
  { id: 'explorer', label: 'たんけんか', minStars: 10, color: '#4CAF50' },
  { id: 'scholar', label: 'がくしゃ', minStars: 30, color: '#2196F3' },
  { id: 'expert', label: 'はかせ', minStars: 60, color: '#9C27B0' },
  { id: 'master', label: 'マスター', minStars: 100, color: '#FF9800' },
  { id: 'legend', label: 'レジェンド', minStars: 150, color: '#FFD700' },
];

export function getMascotStage(totalStars: number): { stage: MascotStage; label: string } {
  for (let i = MASCOT_STAGES.length - 1; i >= 0; i--) {
    if (totalStars >= MASCOT_STAGES[i].minStars) {
      return MASCOT_STAGES[i];
    }
  }
  return MASCOT_STAGES[0];
}

export function getRank(totalStars: number): RankDefinition {
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (totalStars >= RANKS[i].minStars) {
      return RANKS[i];
    }
  }
  return RANKS[0];
}
