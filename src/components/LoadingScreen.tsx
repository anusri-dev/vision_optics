import { useEffect, useState } from 'react';
import { brandAssets } from '@/lib/assets';

interface Props {
  onDone: () => void;
}

export function LoadingScreen({ onDone }: Props) {
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onDone();
      return;
    }
    const startTime = performance.now();
    const duration = 700;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      setPct(Math.round(eased * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setLeaving(true);
          setTimeout(onDone, 300);
        }, 100);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #faf7ff 0%, #f3eeff 60%, #ede9fe 100%)',
        transition: 'opacity 0.6s ease-out',
        opacity: leaving ? 0 : 1,
        pointerEvents: leaving ? 'none' : 'all',
      }}
    >
      {/* Logo card with lavender glow */}
      <div
        className="logo-pulse"
        style={{
          background: 'white',
          borderRadius: '24px',
          padding: '32px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid #ddd6fe',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Shimmer sweep across logo */}
        <div className="logo-shimmer" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

        {/* Real Vision Optics logo from visiting card */}
        <div style={{ width: '220px', height: '150px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={brandAssets.logo}
            alt="Vision Optics logo"
            width={220}
            height={150}
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              transform: 'scale(1.45)',
            }}
          />
        </div>

        {/* Brand name */}
        <div style={{ textAlign: 'center', marginTop: '6px' }}>
          <div style={{
            fontFamily: 'Sora, system-ui, sans-serif',
            fontWeight: 800,
            fontSize: '22px',
            letterSpacing: '0.06em',
            color: '#4c1d95',
            lineHeight: 1.1,
          }}>
            VISION OPTICS
          </div>
          <div style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.14em',
            color: '#6d28d9',
            marginTop: '4px',
            textTransform: 'uppercase',
          }}>
            Computerised Eye Testing
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginTop: '40px', width: '220px' }}>
        <div style={{
          background: '#ede9fe',
          borderRadius: '99px',
          height: '5px',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div
            className="shimmer-bar"
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #7c3aed, #a78bfa)',
              borderRadius: '99px',
              width: `${pct}%`,
              transition: 'width 0.1s linear',
              position: 'relative',
              overflow: 'hidden',
            }}
          />
        </div>
        {/* Percentage count */}
        <div style={{
          textAlign: 'center',
          marginTop: '12px',
          fontFamily: 'Sora, system-ui, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          color: '#6d28d9',
          letterSpacing: '0.04em',
        }}>
          {String(pct).padStart(2, '0')}%
        </div>
      </div>
    </div>
  );
}
