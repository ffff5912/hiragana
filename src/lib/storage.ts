import type { ProgressData, CharacterProgress, GamificationData } from '../data/types';

const STORAGE_KEY = 'moji-nazori-progress';

function getDefaultGamification(): GamificationData {
  return {
    equippedItems: [],
    lastPracticeDate: null,
    currentStreak: 0,
    longestStreak: 0,
    stampHistory: [],
    previousRankId: null,
  };
}

function getDefaultProgress(): ProgressData {
  return {
    hiragana: {},
    katakana: {},
    totalStars: 0,
    soundEnabled: true,
    gamification: getDefaultGamification(),
  };
}

export function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const data = JSON.parse(raw);
    const defaults = getDefaultProgress();
    return {
      ...defaults,
      ...data,
      gamification: {
        ...defaults.gamification,
        ...(data.gamification || {}),
      },
    };
  } catch {
    return getDefaultProgress();
  }
}

export function saveProgress(data: ProgressData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage full or unavailable
  }
}

export function updateCharacterProgress(
  type: 'hiragana' | 'katakana',
  char: string,
  score: number,
  stars: number
): ProgressData {
  const data = loadProgress();
  const existing = data[type][char];

  const updated: CharacterProgress = {
    bestScore: Math.max(existing?.bestScore ?? 0, score),
    stars: Math.max(existing?.stars ?? 0, stars),
    attempts: (existing?.attempts ?? 0) + 1,
    lastPracticed: Date.now(),
  };

  data[type][char] = updated;

  // Recalculate total stars
  let total = 0;
  for (const ch of Object.values(data.hiragana)) total += ch.stars;
  for (const ch of Object.values(data.katakana)) total += ch.stars;
  data.totalStars = total;

  saveProgress(data);
  return data;
}

export function updateStreakData(): ProgressData {
  const data = loadProgress();
  const today = new Date().toISOString().slice(0, 10);
  const g = data.gamification;

  // Already practiced today
  if (g.lastPracticeDate === today) {
    return data;
  }

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  if (g.lastPracticeDate === yesterday) {
    g.currentStreak += 1;
  } else {
    g.currentStreak = 1;
  }

  g.longestStreak = Math.max(g.longestStreak, g.currentStreak);
  g.lastPracticeDate = today;

  if (!g.stampHistory.includes(today)) {
    g.stampHistory.push(today);
  }

  saveProgress(data);
  return data;
}

export function toggleEquippedItem(itemId: string): ProgressData {
  const data = loadProgress();
  const idx = data.gamification.equippedItems.indexOf(itemId);
  if (idx >= 0) {
    data.gamification.equippedItems.splice(idx, 1);
  } else {
    data.gamification.equippedItems.push(itemId);
  }
  saveProgress(data);
  return data;
}

export function updatePreviousRank(rankId: string): ProgressData {
  const data = loadProgress();
  data.gamification.previousRankId = rankId;
  saveProgress(data);
  return data;
}

export function toggleSound(): boolean {
  const data = loadProgress();
  data.soundEnabled = !data.soundEnabled;
  saveProgress(data);
  return data.soundEnabled;
}
