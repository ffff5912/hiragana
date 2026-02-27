import { useNavigate } from 'react-router-dom';
import type { CharacterType } from '../data/types';
import StarRating from './StarRating';

interface CharacterCardProps {
  char: string;
  type: CharacterType;
  stars: number;
  locked: boolean;
}

export default function CharacterCard({ char, type, stars, locked }: CharacterCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        if (!locked) {
          navigate(`/practice/${type}/${encodeURIComponent(char)}`);
        }
      }}
      disabled={locked}
      style={{
        width: 'var(--card-size)',
        height: 'var(--card-size)',
        borderRadius: 'var(--border-radius)',
        background: locked ? '#F0F0F0' : 'var(--color-bg-card)',
        boxShadow: locked ? 'none' : 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        opacity: locked ? 0.5 : 1,
        transition: 'transform 0.15s, box-shadow 0.15s',
        position: 'relative',
      }}
    >
      <span style={{
        fontSize: 28,
        fontWeight: 700,
        color: locked ? 'var(--color-locked)' : 'var(--color-text)',
        lineHeight: 1,
      }}>
        {locked ? '🔒' : char}
      </span>
      {!locked && stars > 0 && (
        <StarRating stars={stars} size={10} />
      )}
    </button>
  );
}
