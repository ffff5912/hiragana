import { useEffect, useMemo, useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import TracingCanvas from '../components/TracingCanvas';
import StarRating from '../components/StarRating';
import CongratsBanner from '../components/CongratsBanner';
import { useTracing } from '../hooks/useTracing';
import { useGamification } from '../hooks/useGamification';
import { useSound } from '../hooks/useSound';
import { getScorePercent } from '../hooks/useScoring';
import type { CharacterType, CharacterDefinition } from '../data/types';
import { getRows } from '../data/rows';
import { hiraganaCharacters } from '../data/hiragana';
import { katakanaCharacters } from '../data/katakana';

function getCharacterData(type: CharacterType, char: string): CharacterDefinition | null {
  const map = type === 'hiragana' ? hiraganaCharacters : katakanaCharacters;
  return map[char] || null;
}

function getAdjacentChars(type: CharacterType, char: string): { prev: string | null; next: string | null } {
  const rows = getRows(type);
  const allChars = rows.flatMap(r => r.characters);
  const idx = allChars.indexOf(char);
  return {
    prev: idx > 0 ? allChars[idx - 1] : null,
    next: idx < allChars.length - 1 ? allChars[idx + 1] : null,
  };
}

export default function PracticePage() {
  const { type, char } = useParams<{ type: string; char: string }>();
  const navigate = useNavigate();
  const charType = (type === 'katakana' ? 'katakana' : 'hiragana') as CharacterType;
  const decodedChar = decodeURIComponent(char || '');

  const characterData = useMemo(() => getCharacterData(charType, decodedChar), [charType, decodedChar]);
  const { prev, next } = useMemo(() => getAdjacentChars(charType, decodedChar), [charType, decodedChar]);

  const { progress, recordScore, getCharStars } = useGamification();
  const { playStrokeComplete, playStar1, playStar2, playStar3, playFail, speak } = useSound(progress.soundEnabled);

  const tracing = useTracing(characterData);
  const [showBanner, setShowBanner] = useState(false);
  const [demoPlaying, setDemoPlaying] = useState(false);

  useEffect(() => {
    if (characterData) {
      tracing.initCharacter(characterData);
      setShowBanner(false);
      speak(decodedChar);
    }
  }, [characterData, decodedChar]);

  const handlePointerUp = useCallback(() => {
    const result = tracing.handlePointerUp();
    if (result.strokeComplete && !result.allComplete) {
      playStrokeComplete();
    }
    if (result.allComplete && result.score) {
      recordScore(charType, decodedChar, result.score.combined, result.score.stars);
      if (result.score.stars >= 3) playStar3();
      else if (result.score.stars >= 2) playStar2();
      else if (result.score.stars >= 1) playStar1();
      else playFail();

      setTimeout(() => setShowBanner(true), 300);
    }
  }, [tracing, charType, decodedChar, recordScore, playStrokeComplete, playStar1, playStar2, playStar3, playFail]);

  const handleRetry = useCallback(() => {
    setShowBanner(false);
    tracing.reset();
  }, [tracing]);

  const handleNext = useCallback(() => {
    if (next) {
      const map = charType === 'hiragana' ? hiraganaCharacters : katakanaCharacters;
      if (map[next]) {
        navigate(`/practice/${charType}/${encodeURIComponent(next)}`, { replace: true });
      }
    }
  }, [next, charType, navigate]);

  const playDemo = useCallback(() => {
    if (!characterData || demoPlaying) return;
    setDemoPlaying(true);
    tracing.reset();

    // Simple demo: just show the character briefly
    setTimeout(() => setDemoPlaying(false), 1500);
  }, [characterData, demoPlaying, tracing]);

  if (!characterData) {
    return (
      <Layout title="？" showBack>
        <div style={{ padding: 24, textAlign: 'center' }}>
          <p style={{ fontSize: 18, color: 'var(--color-text-light)' }}>
            この もじの データは まだ ありません
          </p>
          <button
            onClick={() => navigate(-1)}
            style={{
              marginTop: 16,
              padding: '12px 24px',
              borderRadius: 'var(--border-radius)',
              background: 'var(--color-primary)',
              color: 'white',
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            もどる
          </button>
        </div>
      </Layout>
    );
  }

  const currentStars = getCharStars(charType, decodedChar);

  return (
    <Layout
      title={`${decodedChar} (${characterData.romaji})`}
      showBack
      rightAction={
        <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
          {Math.min(tracing.currentStrokeIndex + 1, characterData.strokeCount)}/{characterData.strokeCount}画
        </span>
      }
    >
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* Tracing area */}
        <TracingCanvas
          character={characterData}
          currentStrokeIndex={tracing.currentStrokeIndex}
          completedStrokes={tracing.userStrokes.length}
          userStrokes={tracing.userStrokes}
          currentPoints={tracing.currentPoints}
          currentColors={tracing.currentColors}
          isDrawing={tracing.isDrawing}
          showStartHint={tracing.showStartHint}
          onPointerDown={tracing.handlePointerDown}
          onPointerMove={tracing.handlePointerMove}
          onPointerUp={handlePointerUp}
        />

        {/* Score display */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 16px',
        }}>
          <StarRating stars={currentStars} size={20} />
          {tracing.finalScore && (
            <span style={{
              fontSize: 14,
              color: 'var(--color-text-light)',
            }}>
              スコア: {getScorePercent(tracing.finalScore)}%
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div style={{
          display: 'flex',
          gap: 12,
          padding: '8px 16px 24px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button
            onClick={playDemo}
            disabled={demoPlaying}
            style={{
              padding: '12px 20px',
              borderRadius: 'var(--border-radius)',
              background: 'var(--color-accent)',
              color: 'var(--color-text)',
              fontSize: 15,
              fontWeight: 600,
              minHeight: 'var(--touch-target-min)',
              opacity: demoPlaying ? 0.5 : 1,
            }}
          >
            おてほん
          </button>

          <button
            onClick={tracing.undoLastStroke}
            disabled={tracing.userStrokes.length === 0}
            style={{
              padding: '12px 20px',
              borderRadius: 'var(--border-radius)',
              background: 'var(--color-border)',
              fontSize: 15,
              fontWeight: 600,
              minHeight: 'var(--touch-target-min)',
              opacity: tracing.userStrokes.length === 0 ? 0.4 : 1,
            }}
          >
            もどす
          </button>

          <button
            onClick={handleRetry}
            style={{
              padding: '12px 20px',
              borderRadius: 'var(--border-radius)',
              background: 'var(--color-border)',
              fontSize: 15,
              fontWeight: 600,
              minHeight: 'var(--touch-target-min)',
            }}
          >
            リセット
          </button>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          gap: 16,
          padding: '0 16px 16px',
        }}>
          {prev && (
            <button
              onClick={() => navigate(`/practice/${charType}/${encodeURIComponent(prev)}`, { replace: true })}
              style={{
                padding: '8px 16px',
                fontSize: 14,
                color: 'var(--color-text-light)',
                borderRadius: 'var(--border-radius)',
              }}
            >
              ← {prev}
            </button>
          )}
          {next && (
            <button
              onClick={handleNext}
              style={{
                padding: '8px 16px',
                fontSize: 14,
                color: 'var(--color-text-light)',
                borderRadius: 'var(--border-radius)',
              }}
            >
              {next} →
            </button>
          )}
        </div>
      </div>

      {/* Congratulations overlay */}
      {showBanner && tracing.finalScore && (
        <CongratsBanner
          score={tracing.finalScore}
          onRetry={handleRetry}
          onNext={handleNext}
          hasNext={!!next}
        />
      )}
    </Layout>
  );
}
