import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import CharacterCard from '../components/CharacterCard';
import ProgressBar from '../components/ProgressBar';
import { useProgress } from '../hooks/useProgress';
import { getRows } from '../data/rows';
import type { CharacterType } from '../data/types';

export default function GridPage() {
  const { type } = useParams<{ type: string }>();
  const charType = (type === 'katakana' ? 'katakana' : 'hiragana') as CharacterType;
  const rows = getRows(charType);
  const { isRowUnlocked, getCharStars, getRowProgress } = useProgress();

  const title = charType === 'hiragana' ? 'ひらがな' : 'カタカナ';

  return (
    <Layout title={title} showBack>
      <div style={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}>
        {rows.map((row, rowIndex) => {
          const unlocked = isRowUnlocked(charType, rowIndex);
          const { completed, total } = getRowProgress(charType, rowIndex);

          return (
            <div key={row.id} style={{
              background: 'var(--color-bg-card)',
              borderRadius: 'var(--border-radius)',
              padding: '12px 16px',
              boxShadow: unlocked ? 'var(--shadow-sm)' : 'none',
              opacity: unlocked ? 1 : 0.6,
            }}>
              {/* Row header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
                <span style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: unlocked ? 'var(--color-text)' : 'var(--color-locked)',
                }}>
                  {row.label}
                  {!unlocked && ' 🔒'}
                </span>
                <span style={{
                  fontSize: 12,
                  color: 'var(--color-text-muted)',
                }}>
                  {completed}/{total}
                </span>
              </div>

              {/* Progress bar */}
              <ProgressBar value={completed} max={total} height={4} />

              {/* Character cards */}
              <div style={{
                display: 'flex',
                gap: 8,
                marginTop: 12,
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
                {row.characters.map(char => (
                  <CharacterCard
                    key={char}
                    char={char}
                    type={charType}
                    stars={getCharStars(charType, char)}
                    locked={!unlocked}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
