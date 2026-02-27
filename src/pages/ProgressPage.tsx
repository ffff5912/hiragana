import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';
import StarRating from '../components/StarRating';
import RankBadge from '../components/RankBadge';
import { useGamification } from '../hooks/useGamification';
import { getRows } from '../data/rows';
import type { CharacterType } from '../data/types';

function TypeSection({ type, label }: { type: CharacterType; label: string }) {
  const { progress, getRowProgress, getCharStars } = useGamification();
  const rows = getRows(type);

  const allChars = rows.flatMap(r => r.characters);
  const totalPossibleStars = allChars.length * 3;
  const earnedStars = allChars.reduce((sum, ch) => sum + getCharStars(type, ch), 0);

  const bestChars = allChars
    .filter(ch => getCharStars(type, ch) >= 2)
    .slice(0, 5);

  const needPractice = allChars
    .filter(ch => {
      const p = progress[type][ch];
      return p && p.stars > 0 && p.stars < 3;
    })
    .slice(0, 5);

  return (
    <div style={{
      background: 'var(--color-bg-card)',
      borderRadius: 'var(--border-radius)',
      padding: 16,
      boxShadow: 'var(--shadow-sm)',
    }}>
      <h2 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 12,
        color: type === 'hiragana' ? 'var(--color-primary)' : 'var(--color-secondary)',
      }}>
        {label}
      </h2>

      {/* Overall progress */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 13, color: 'var(--color-text-light)' }}>ぜんたい</span>
          <span style={{ fontSize: 13, color: 'var(--color-text-light)' }}>
            ★ {earnedStars} / {totalPossibleStars}
          </span>
        </div>
        <ProgressBar value={earnedStars} max={totalPossibleStars} />
      </div>

      {/* Row progress */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rows.map((row, i) => {
          const { completed, total } = getRowProgress(type, i);
          return (
            <div key={row.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 13, width: 40, fontWeight: 600 }}>{row.label}</span>
              <div style={{ flex: 1 }}>
                <ProgressBar value={completed} max={total} height={6} />
              </div>
              <span style={{ fontSize: 11, color: 'var(--color-text-muted)', width: 32 }}>
                {completed}/{total}
              </span>
            </div>
          );
        })}
      </div>

      {/* Best characters */}
      {bestChars.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-light)', marginBottom: 8 }}>
            とくいなもじ
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {bestChars.map(ch => (
              <div key={ch} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                background: 'var(--color-bg)',
                borderRadius: 8,
                padding: '4px 8px',
              }}>
                <span style={{ fontSize: 18, fontWeight: 700 }}>{ch}</span>
                <StarRating stars={getCharStars(type, ch)} size={10} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Need practice */}
      {needPractice.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-light)', marginBottom: 8 }}>
            れんしゅうしよう
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {needPractice.map(ch => (
              <div key={ch} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                background: '#FFF3E0',
                borderRadius: 8,
                padding: '4px 8px',
              }}>
                <span style={{ fontSize: 18, fontWeight: 700 }}>{ch}</span>
                <StarRating stars={getCharStars(type, ch)} size={10} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProgressPage() {
  const { progress, currentRank, currentStreak } = useGamification();

  return (
    <Layout title="しんちょく" showBack>
      <div style={{
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}>
        {/* Total stars + Rank */}
        <div style={{
          textAlign: 'center',
          padding: '16px 0',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 4,
          }}>
            <div style={{
              fontSize: 40,
              color: 'var(--color-star-gold)',
            }}>
              ★ {progress.totalStars}
            </div>
            <RankBadge rank={currentRank} size="large" />
          </div>
          <p style={{
            fontSize: 14,
            color: 'var(--color-text-light)',
          }}>
            あつめた ほし
          </p>
          {currentStreak > 0 && (
            <p style={{
              fontSize: 14,
              fontWeight: 700,
              color: 'var(--color-primary)',
              marginTop: 8,
            }}>
              🔥 {currentStreak}にち れんぞく れんしゅうちゅう！
            </p>
          )}
        </div>

        <TypeSection type="hiragana" label="ひらがな" />
        <TypeSection type="katakana" label="カタカナ" />
      </div>
    </Layout>
  );
}
