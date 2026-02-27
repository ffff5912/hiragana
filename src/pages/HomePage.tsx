import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import MascotSvg from '../components/mascot/MascotSvg';
import RankBadge from '../components/RankBadge';
import StampCard from '../components/StampCard';
import DressUpPanel from '../components/DressUpPanel';
import RankUpCelebration from '../components/RankUpCelebration';
import { useGamification } from '../hooks/useGamification';
import { useSound } from '../hooks/useSound';

export default function HomePage() {
  const navigate = useNavigate();
  const {
    progress,
    toggleSound,
    toggleEquippedItem,
    mascotStage,
    currentRank,
    equippedItems,
    currentStreak,
    stampHistory,
    rankUpEvent,
    dismissRankUp,
  } = useGamification();
  const { speak } = useSound(progress.soundEnabled);
  const [showDressUp, setShowDressUp] = useState(false);

  return (
    <Layout
      rightAction={
        <button
          onClick={toggleSound}
          style={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            borderRadius: '50%',
          }}
          aria-label={progress.soundEnabled ? '音をオフにする' : '音をオンにする'}
        >
          {progress.soundEnabled ? '🔊' : '🔇'}
        </button>
      }
    >
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        gap: 20,
      }}>
        {/* Mascot */}
        <div style={{ position: 'relative' }}>
          <MascotSvg
            stage={mascotStage.stage}
            mood="idle"
            equippedItems={equippedItems}
            size={120}
          />
          <button
            onClick={() => setShowDressUp(true)}
            style={{
              position: 'absolute',
              bottom: -4,
              right: -8,
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'var(--color-bg-card)',
              boxShadow: 'var(--shadow-sm)',
              fontSize: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="きせかえ"
          >
            👗
          </button>
        </div>

        {/* Title */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: 32,
            fontWeight: 700,
            color: 'var(--color-primary)',
            marginBottom: 4,
          }}>
            もじなぞり
          </h1>
          <p style={{
            fontSize: 14,
            color: 'var(--color-text-light)',
          }}>
            ゆびで なぞって れんしゅうしよう！
          </p>
        </div>

        {/* Star count + Rank */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 18,
            color: 'var(--color-star-gold)',
            fontWeight: 700,
          }}>
            <span style={{ fontSize: 24 }}>★</span>
            <span>{progress.totalStars}</span>
          </div>
          <RankBadge rank={currentRank} />
        </div>

        {/* Stamp Card */}
        <StampCard stampHistory={stampHistory} currentStreak={currentStreak} />

        {/* Main buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          width: '100%',
          maxWidth: 280,
        }}>
          <button
            onClick={() => {
              speak('ひらがな');
              navigate('/grid/hiragana');
            }}
            style={{
              padding: '20px 32px',
              borderRadius: 'var(--border-radius-lg)',
              background: 'var(--color-primary)',
              color: 'white',
              fontSize: 24,
              fontWeight: 700,
              boxShadow: 'var(--shadow-md)',
              transition: 'transform 0.15s',
              minHeight: 64,
            }}
          >
            ひらがな
          </button>

          <button
            onClick={() => {
              speak('カタカナ');
              navigate('/grid/katakana');
            }}
            style={{
              padding: '20px 32px',
              borderRadius: 'var(--border-radius-lg)',
              background: 'var(--color-secondary)',
              color: 'white',
              fontSize: 24,
              fontWeight: 700,
              boxShadow: 'var(--shadow-md)',
              transition: 'transform 0.15s',
              minHeight: 64,
            }}
          >
            カタカナ
          </button>
        </div>

        {/* Progress link */}
        <button
          onClick={() => navigate('/progress')}
          style={{
            padding: '12px 24px',
            fontSize: 14,
            color: 'var(--color-text-light)',
            borderRadius: 'var(--border-radius)',
          }}
        >
          しんちょく をみる →
        </button>
      </div>

      {/* Dress Up Panel */}
      {showDressUp && (
        <DressUpPanel
          totalStars={progress.totalStars}
          equippedItems={equippedItems}
          mascotStage={mascotStage.stage}
          onToggleItem={toggleEquippedItem}
          onClose={() => setShowDressUp(false)}
        />
      )}

      {/* Rank Up Celebration */}
      {rankUpEvent && (
        <RankUpCelebration rank={rankUpEvent} onClose={dismissRankUp} />
      )}
    </Layout>
  );
}
