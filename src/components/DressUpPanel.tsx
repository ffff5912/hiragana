import type { MascotStage, DressUpItem } from '../data/types';
import { DRESS_UP_ITEMS } from '../data/mascot';
import MascotSvg from './mascot/MascotSvg';

interface DressUpPanelProps {
  totalStars: number;
  equippedItems: string[];
  mascotStage: MascotStage;
  onToggleItem: (itemId: string) => void;
  onClose: () => void;
}

export default function DressUpPanel({ totalStars, equippedItems, mascotStage, onToggleItem, onClose }: DressUpPanelProps) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 150,
      animation: 'fadeIn 0.3s ease-out',
    }}>
      <div style={{
        background: 'var(--color-bg-card)',
        borderRadius: 'var(--border-radius-lg)',
        padding: '24px 20px',
        maxWidth: 340,
        width: '90%',
        maxHeight: '85vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-lg)',
        animation: 'scaleIn 0.4s ease-out',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>きせかえ</h2>
          <button
            onClick={onClose}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        {/* Preview */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 20,
          padding: 12,
          background: 'var(--color-bg)',
          borderRadius: 'var(--border-radius)',
        }}>
          <MascotSvg
            stage={mascotStage}
            mood="happy"
            equippedItems={equippedItems}
            size={140}
          />
        </div>

        {/* Items grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 8,
        }}>
          {DRESS_UP_ITEMS.map((item: DressUpItem) => {
            const unlocked = totalStars >= item.requiredStars;
            const equipped = equippedItems.includes(item.id);

            return (
              <button
                key={item.id}
                onClick={() => unlocked && onToggleItem(item.id)}
                disabled={!unlocked}
                style={{
                  padding: '10px 6px',
                  borderRadius: 'var(--border-radius)',
                  border: equipped ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
                  background: equipped ? 'rgba(255, 152, 0, 0.1)' : 'var(--color-bg)',
                  opacity: unlocked ? 1 : 0.5,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  cursor: unlocked ? 'pointer' : 'default',
                }}
              >
                {!unlocked && (
                  <span style={{ fontSize: 16 }}>🔒</span>
                )}
                <span style={{ fontSize: 12, fontWeight: 600 }}>
                  {item.name}
                </span>
                {!unlocked && (
                  <span style={{ fontSize: 10, color: 'var(--color-text-muted)' }}>
                    ★{item.requiredStars}
                  </span>
                )}
                {equipped && (
                  <span style={{ fontSize: 10, color: 'var(--color-primary)', fontWeight: 700 }}>
                    そうちゃく
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
