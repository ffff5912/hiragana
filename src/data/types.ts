export interface StrokeDefinition {
  index: number;
  path: string;
}

export interface CharacterDefinition {
  char: string;
  romaji: string;
  strokeCount: number;
  strokes: StrokeDefinition[];
  viewBox: { width: 109; height: 109 };
}

export interface RowGroup {
  id: string;
  label: string;
  labelRomaji: string;
  characters: string[];
}

export type CharacterType = 'hiragana' | 'katakana';

export interface CharacterProgress {
  bestScore: number;
  stars: number; // 0-3
  attempts: number;
  lastPracticed?: number;
}

export interface ProgressData {
  hiragana: Record<string, CharacterProgress>;
  katakana: Record<string, CharacterProgress>;
  totalStars: number;
  soundEnabled: boolean;
  gamification: GamificationData;
}

export interface Point {
  x: number;
  y: number;
}

export interface UserStroke {
  points: Point[];
}

export type StrokeColor = 'good' | 'ok' | 'bad';

export type MascotStage = 'egg' | 'baby' | 'child' | 'teen' | 'adult' | 'master';

export interface DressUpItem {
  id: string;
  name: string;
  category: 'head' | 'face' | 'body' | 'accessory';
  requiredStars: number;
}

export interface RankDefinition {
  id: string;
  label: string;
  minStars: number;
  color: string;
}

export interface GamificationData {
  equippedItems: string[];
  lastPracticeDate: string | null;
  currentStreak: number;
  longestStreak: number;
  stampHistory: string[];
  previousRankId: string | null;
}
