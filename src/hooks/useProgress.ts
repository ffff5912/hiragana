import { useState, useCallback } from 'react';
import type { ProgressData, CharacterType } from '../data/types';
import { loadProgress, updateCharacterProgress, toggleSound as toggleSoundStorage } from '../lib/storage';
import { getRows } from '../data/rows';

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);

  const recordScore = useCallback((type: CharacterType, char: string, score: number, stars: number) => {
    const updated = updateCharacterProgress(type, char, score, stars);
    setProgress(updated);
    return updated;
  }, []);

  const toggleSound = useCallback(() => {
    const enabled = toggleSoundStorage();
    setProgress(prev => ({ ...prev, soundEnabled: enabled }));
    return enabled;
  }, []);

  const isRowUnlocked = useCallback((type: CharacterType, rowIndex: number): boolean => {
    if (rowIndex === 0) return true;

    const rows = getRows(type);
    const prevRow = rows[rowIndex - 1];
    if (!prevRow) return false;

    return prevRow.characters.every(char => {
      const p = progress[type][char];
      return p && p.stars >= 1;
    });
  }, [progress]);

  const getCharStars = useCallback((type: CharacterType, char: string): number => {
    return progress[type][char]?.stars ?? 0;
  }, [progress]);

  const getRowProgress = useCallback((type: CharacterType, rowIndex: number): { completed: number; total: number } => {
    const rows = getRows(type);
    const row = rows[rowIndex];
    if (!row) return { completed: 0, total: 0 };

    const completed = row.characters.filter(char => {
      const p = progress[type][char];
      return p && p.stars >= 1;
    }).length;

    return { completed, total: row.characters.length };
  }, [progress]);

  return {
    progress,
    recordScore,
    toggleSound,
    isRowUnlocked,
    getCharStars,
    getRowProgress,
  };
}
