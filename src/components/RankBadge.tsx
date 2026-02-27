import type { RankDefinition } from '../data/types';

interface RankBadgeProps {
  rank: RankDefinition;
  size?: 'small' | 'large';
}

export default function RankBadge({ rank, size = 'small' }: RankBadgeProps) {
  const isLarge = size === 'large';

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: isLarge ? '6px 14px' : '3px 10px',
      borderRadius: 999,
      background: rank.color,
      color: '#fff',
      fontSize: isLarge ? 16 : 12,
      fontWeight: 700,
      textShadow: '0 1px 2px rgba(0,0,0,0.2)',
      whiteSpace: 'nowrap',
    }}>
      {rank.label}
    </span>
  );
}
