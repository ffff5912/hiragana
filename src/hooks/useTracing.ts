import { useState, useCallback, useRef } from 'react';
import type { Point, UserStroke, CharacterDefinition } from '../data/types';
import { distance } from '../lib/geometry';
import { getGlyphDistanceColor, scoreStrokeAgainstGlyph } from '../lib/glyphHitTest';
import type { StrokeScore } from '../lib/scoring';

const MIN_DISTANCE = 4; // minimum SVG units between recorded points

interface TracingState {
  currentStrokeIndex: number;
  userStrokes: UserStroke[];
  strokeScores: StrokeScore[];
  isDrawing: boolean;
  isComplete: boolean;
  finalScore: StrokeScore | null;
  currentPoints: Point[];
  currentColors: string[];
  showStartHint: boolean;
}

function glyphScoreToStrokeScore(score: number): StrokeScore {
  let stars = 0;
  if (score >= 0.85) stars = 3;
  else if (score >= 0.65) stars = 2;
  else if (score >= 0.40) stars = 1;

  return {
    frechet: score,
    direction: score,
    combined: score,
    stars,
  };
}

export function useTracing(character: CharacterDefinition | null) {
  const [state, setState] = useState<TracingState>({
    currentStrokeIndex: 0,
    userStrokes: [],
    strokeScores: [],
    isDrawing: false,
    isComplete: false,
    finalScore: null,
    currentPoints: [],
    currentColors: [],
    showStartHint: false,
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  const initCharacter = useCallback((_char: CharacterDefinition) => {
    setState({
      currentStrokeIndex: 0,
      userStrokes: [],
      strokeScores: [],
      isDrawing: false,
      isComplete: false,
      finalScore: null,
      currentPoints: [],
      currentColors: [],
      showStartHint: false,
    });
  }, []);

  const reset = useCallback(() => {
    if (character) {
      initCharacter(character);
    }
  }, [character, initCharacter]);

  const handlePointerDown = useCallback((point: Point) => {
    const s = stateRef.current;
    if (s.isComplete || !character) return;
    if (s.currentStrokeIndex >= character.strokeCount) return;

    const color = getGlyphDistanceColor(character.char, point);

    setState(prev => ({
      ...prev,
      isDrawing: true,
      currentPoints: [point],
      currentColors: [color],
      showStartHint: false,
    }));
  }, [character]);

  const handlePointerMove = useCallback((point: Point) => {
    const s = stateRef.current;
    if (!s.isDrawing || s.isComplete || !character) return;

    const lastPoint = s.currentPoints[s.currentPoints.length - 1];
    if (lastPoint && distance(point, lastPoint) < MIN_DISTANCE) return;

    const color = getGlyphDistanceColor(character.char, point);

    setState(prev => ({
      ...prev,
      currentPoints: [...prev.currentPoints, point],
      currentColors: [...prev.currentColors, color],
    }));
  }, [character]);

  const handlePointerUp = useCallback((): { strokeComplete: boolean; allComplete: boolean; score: StrokeScore | null } => {
    const s = stateRef.current;
    if (!s.isDrawing || s.isComplete || !character) {
      setState(prev => ({ ...prev, isDrawing: false }));
      return { strokeComplete: false, allComplete: false, score: null };
    }

    if (s.currentPoints.length < 3) {
      setState(prev => ({
        ...prev,
        isDrawing: false,
        currentPoints: [],
        currentColors: [],
      }));
      return { strokeComplete: false, allComplete: false, score: null };
    }

    // Score based on glyph overlap
    const rawScore = scoreStrokeAgainstGlyph(character.char, s.currentPoints);
    const strokeScore = glyphScoreToStrokeScore(rawScore);

    const newUserStrokes = [...s.userStrokes, { points: s.currentPoints }];
    const newScores = [...s.strokeScores, strokeScore];
    const nextIndex = s.currentStrokeIndex + 1;
    const allDone = nextIndex >= character.strokeCount;

    if (allDone) {
      // Average all stroke scores
      const avgScore = newScores.reduce((sum, sc) => sum + sc.combined, 0) / newScores.length;
      const finalScore = glyphScoreToStrokeScore(avgScore);

      setState(prev => ({
        ...prev,
        isDrawing: false,
        userStrokes: newUserStrokes,
        strokeScores: newScores,
        currentStrokeIndex: nextIndex,
        currentPoints: [],
        currentColors: [],
        isComplete: true,
        finalScore,
      }));
      return { strokeComplete: true, allComplete: true, score: finalScore };
    }

    setState(prev => ({
      ...prev,
      isDrawing: false,
      userStrokes: newUserStrokes,
      strokeScores: newScores,
      currentStrokeIndex: nextIndex,
      currentPoints: [],
      currentColors: [],
    }));
    return { strokeComplete: true, allComplete: false, score: strokeScore };
  }, [character]);

  const undoLastStroke = useCallback(() => {
    setState(prev => {
      if (prev.userStrokes.length === 0) return prev;
      const newStrokes = prev.userStrokes.slice(0, -1);
      const newScores = prev.strokeScores.slice(0, -1);
      return {
        ...prev,
        userStrokes: newStrokes,
        strokeScores: newScores,
        currentStrokeIndex: prev.currentStrokeIndex - 1,
        isComplete: false,
        finalScore: null,
        currentPoints: [],
        currentColors: [],
      };
    });
  }, []);

  return {
    ...state,
    initCharacter,
    reset,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    undoLastStroke,
  };
}
