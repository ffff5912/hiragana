interface StarRatingProps {
  stars: number;
  maxStars?: number;
  size?: number;
  animated?: boolean;
}

export default function StarRating({ stars, maxStars = 3, size = 24, animated = false }: StarRatingProps) {
  return (
    <div style={{ display: 'flex', gap: size * 0.15 }}>
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < stars;
        const color = stars === 3
          ? 'var(--color-star-gold)'
          : stars === 2
            ? 'var(--color-star-silver)'
            : 'var(--color-star-bronze)';

        return (
          <span
            key={i}
            style={{
              fontSize: size,
              lineHeight: 1,
              color: filled ? color : 'var(--color-star-empty)',
              animation: animated && filled
                ? `starPop 0.4s ease-out ${i * 0.15}s both`
                : undefined,
              display: 'inline-block',
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
