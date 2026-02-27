import type { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
  rightAction?: ReactNode;
}

export default function Layout({ children, title, showBack = false, rightAction }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {(title || showBack || rightAction) && (
        <header style={{
          height: 'var(--header-height)',
          minHeight: 'var(--header-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          background: 'var(--color-bg-card)',
          boxShadow: 'var(--shadow-sm)',
          zIndex: 10,
        }}>
          <div style={{ width: 48, display: 'flex', justifyContent: 'flex-start' }}>
            {showBack && !isHome && (
              <button
                onClick={() => navigate(-1)}
                style={{
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  borderRadius: '50%',
                }}
                aria-label="もどる"
              >
                ←
              </button>
            )}
          </div>
          {title && (
            <h1 style={{
              fontSize: 18,
              fontWeight: 700,
              textAlign: 'center',
              flex: 1,
            }}>
              {title}
            </h1>
          )}
          <div style={{ width: 48, display: 'flex', justifyContent: 'flex-end' }}>
            {rightAction}
          </div>
        </header>
      )}
      <main style={{
        flex: 1,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}>
        {children}
      </main>
    </div>
  );
}
