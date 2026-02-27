import { useState, useCallback, useMemo } from 'react';
import type { ProgressData, CharacterType, MascotStage, DressUpItem, RankDefinition } from '../data/types';
import {
  loadProgress,
  updateCharacterProgress,
  updateStreakData,
  toggleEquippedItem as toggleEquippedItemStorage,
  updatePreviousRank,
  toggleSound as toggleSoundStorage,
} from '../lib/storage';
import { getMascotStage, getRank, DRESS_UP_ITEMS } from '../data/mascot';
import { getRows } from '../data/rows';

export function useGamification() {
  const [progress, setProgress] = useState<ProgressData>(loadProgress);
  const [rankUpEvent, setRankUpEvent] = useState<RankDefinition | null>(null);

  const recordScore = useCallback((type: CharacterType, char: string, score: number, stars: number) => {
    const updated = updateCharacterProgress(type, char, score, stars);
    const withStreak = updateStreakData();
    // Merge: updateCharacterProgress and updateStreakData both load/save independently
    // Use the latest from storage after both operations
    const merged = loadProgress();
    setProgress(merged);

    // Check for rank up
    const prevRankId = merged.gamification.previousRankId;
    const currentRank = getRank(merged.totalStars);
    if (prevRankId !== currentRank.id) {
      if (prevRankId !== null) {
        setRankUpEvent(currentRank);
      }
      const final = updatePreviousRank(currentRank.id);
      setProgress(final);
    }

    return merged;
  }, []);

  const dismissRankUp = useCallback(() => {
    setRankUpEvent(null);
  }, []);

  const toggleSound = useCallback(() => {
    const enabled = toggleSoundStorage();
    setProgress(prev => ({ ...prev, soundEnabled: enabled }));
    return enabled;
  }, []);

  const toggleEquippedItem = useCallback((itemId: string) => {
    const updated = toggleEquippedItemStorage(itemId);
    setProgress(updated);
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

  const mascotStage = useMemo((): { stage: MascotStage; label: string } => {
    return getMascotStage(progress.totalStars);
  }, [progress.totalStars]);

  const currentRank = useMemo((): RankDefinition => {
    return getRank(progress.totalStars);
  }, [progress.totalStars]);

  const unlockedItems = useMemo((): DressUpItem[] => {
    return DRESS_UP_ITEMS.filter(item => progress.totalStars >= item.requiredStars);
  }, [progress.totalStars]);

  const equippedItems = useMemo((): string[] => {
    return progress.gamification.equippedItems;
  }, [progress.gamification.equippedItems]);

  const currentStreak = progress.gamification.currentStreak;
  const stampHistory = progress.gamification.stampHistory;

  return {
    progress,
    recordScore,
    toggleSound,
    toggleEquippedItem,
    isRowUnlocked,
    getCharStars,
    getRowProgress,
    mascotStage,
    currentRank,
    unlockedItems,
    equippedItems,
    currentStreak,
    stampHistory,
    rankUpEvent,
    dismissRankUp,
  };
}
