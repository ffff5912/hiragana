import { useState } from 'react';
import StarRating from './StarRating';
import { getStarLabel, getScorePercent } from '../hooks/useScoring';
import type { StrokeScore } from '../lib/scoring';

function generateConfetti(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8A80'][Math.floor(Math.random() * 5)],
    delay: Math.random() * 0.5,
  }));
}

interface CongratsBannerProps {
  score: StrokeScore;
  onRetry: () => void;
  onNext: () => void;
  hasNext: boolean;
}

export default function CongratsBanner({ score, onRetry, onNext, hasNext }: CongratsBannerProps) {
  const [confetti] = useState(() => score.stars >= 2 ? generateConfetti(20) : []);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      animation: 'fadeIn 0.3s ease-out',
    }}>
      {/* Confetti */}
      {confetti.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: -20,
            left: `${p.x}%`,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: p.color,
            animation: `confetti 2s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}

      <div style={{
        background: 'var(--color-bg-card)',
        borderRadius: 'var(--border-radius-lg)',
        padding: '32px 24px',
        textAlign: 'center',
        maxWidth: 320,
        width: '85%',
        boxShadow: 'var(--shadow-lg)',
        animation: 'scaleIn 0.4s ease-out',
      }}>
        <div style={{ marginBottom: 16 }}>
          <StarRating stars={score.stars} size={40} animated />
        </div>

        <p style={{
          fontSize: 22,
          fontWeight: 700,
          marginBottom: 8,
          color: score.stars >= 2 ? 'var(--color-primary)' : 'var(--color-text)',
        }}>
          {getStarLabel(score.stars)}
        </p>

        <p style={{
          fontSize: 16,
          color: 'var(--color-text-light)',
          marginBottom: 24,
        }}>
          スコア: {getScorePercent(score)}%
        </p>

        <div style={{
          display: 'flex',
          gap: 12,
          justifyContent: 'center',
        }}>
          <button
            onClick={onRetry}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--border-radius)',
              background: 'var(--color-border)',
              fontSize: 16,
              fontWeight: 600,
              minHeight: 'var(--touch-target-min)',
            }}
          >
            もういちど
          </button>
          {hasNext && (
            <button
              onClick={onNext}
              style={{
                padding: '12px 24px',
                borderRadius: 'var(--border-radius)',
                background: 'var(--color-primary)',
                color: 'white',
                fontSize: 16,
                fontWeight: 600,
                minHeight: 'var(--touch-target-min)',
              }}
            >
              つぎへ
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
