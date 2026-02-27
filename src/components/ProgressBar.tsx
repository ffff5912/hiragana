interface ProgressBarProps {
  value: number;
  max: number;
  height?: number;
  color?: string;
}

export default function ProgressBar({ value, max, height = 8, color }: ProgressBarProps) {
  const percent = max > 0 ? (value / max) * 100 : 0;
  const barColor = color || (percent >= 100 ? 'var(--color-success)' : 'var(--color-primary)');

  return (
    <div style={{
      width: '100%',
      height,
      borderRadius: height / 2,
      background: 'var(--color-border)',
      overflow: 'hidden',
    }}>
      <div style={{
        width: `${percent}%`,
        height: '100%',
        borderRadius: height / 2,
        background: barColor,
        transition: 'width 0.4s ease-out',
      }} />
    </div>
  );
}
