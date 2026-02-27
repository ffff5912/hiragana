interface StampCardProps {
  stampHistory: string[];
  currentStreak: number;
}

function getLast7Days(): string[] {
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    days.push(d.toISOString().slice(0, 10));
  }
  return days;
}

const DAY_LABELS = ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'];

export default function StampCard({ stampHistory, currentStreak }: StampCardProps) {
  const days = getLast7Days();
  const stampSet = new Set(stampHistory);

  return (
    <div style={{
      background: 'var(--color-bg-card)',
      borderRadius: 'var(--border-radius)',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-sm)',
      width: '100%',
      maxWidth: 280,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)' }}>
          スタンプカード
        </span>
        {currentStreak > 0 && (
          <span style={{
            fontSize: 12,
            fontWeight: 700,
            color: 'var(--color-primary)',
          }}>
            {currentStreak}にちれんぞく！
          </span>
        )}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 4,
      }}>
        {days.map((date) => {
          const dayOfWeek = new Date(date + 'T00:00:00').getDay();
          const hasStamp = stampSet.has(date);
          const isToday = date === new Date().toISOString().slice(0, 10);

          return (
            <div key={date} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              flex: 1,
            }}>
              <span style={{
                fontSize: 10,
                color: 'var(--color-text-muted)',
              }}>
                {DAY_LABELS[dayOfWeek]}
              </span>
              <div style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                border: isToday ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
                background: hasStamp ? 'var(--color-primary)' : 'transparent',
                color: hasStamp ? '#fff' : 'var(--color-border)',
                animation: hasStamp ? 'stampIn 0.3s ease-out' : undefined,
              }}>
                {hasStamp ? '★' : ''}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
