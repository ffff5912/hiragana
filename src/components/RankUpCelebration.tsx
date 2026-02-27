import { useState } from 'react';
import type { RankDefinition } from '../data/types';
import RankBadge from './RankBadge';

function generateConfetti(rankColor: string) {
  return Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: [rankColor, '#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF'][Math.floor(Math.random() * 5)],
    delay: Math.random() * 0.5,
  }));
}

interface RankUpCelebrationProps {
  rank: RankDefinition;
  onClose: () => void;
}

export default function RankUpCelebration({ rank, onClose }: RankUpCelebrationProps) {
  const [confetti] = useState(() => generateConfetti(rank.color));

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 200,
      animation: 'fadeIn 0.3s ease-out',
    }}>
      {confetti.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: -20,
            left: `${p.x}%`,
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: p.color,
            animation: `confetti 2.5s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}

      <div style={{
        background: 'var(--color-bg-card)',
        borderRadius: 'var(--border-radius-lg)',
        padding: '40px 28px',
        textAlign: 'center',
        maxWidth: 320,
        width: '85%',
        boxShadow: 'var(--shadow-lg)',
        animation: 'scaleIn 0.4s ease-out',
      }}>
        <p style={{
          fontSize: 18,
          color: 'var(--color-text-light)',
          marginBottom: 12,
        }}>
          ランクアップ！
        </p>

        <div style={{
          marginBottom: 20,
          animation: 'rankUp 0.6s ease-out 0.3s both',
        }}>
          <RankBadge rank={rank} size="large" />
        </div>

        <p style={{
          fontSize: 26,
          fontWeight: 700,
          color: rank.color,
          marginBottom: 24,
        }}>
          {rank.label}に なったよ！
        </p>

        <button
          onClick={onClose}
          style={{
            padding: '14px 32px',
            borderRadius: 'var(--border-radius)',
            background: rank.color,
            color: 'white',
            fontSize: 18,
            fontWeight: 700,
            minHeight: 'var(--touch-target-min)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          やったー！
        </button>
      </div>
    </div>
  );
}
