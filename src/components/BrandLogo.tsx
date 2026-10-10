import type { CSSProperties } from 'react';
import { brandAssets } from '@/lib/assets';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
  dark?: boolean;
}

const sizes = {
  sm: { frame: 'h-11 w-14', image: 'w-full', name: 'text-sm', sub: 'text-[8px]' },
  md: { frame: 'h-14 w-[4.5rem]', image: 'w-full', name: 'text-base', sub: 'text-[9px]' },
  lg: { frame: 'h-32 w-40', image: 'w-full', name: 'text-xl', sub: 'text-[10px]' },
};

export function BrandLogo({ size = 'md', showName = true, dark = false }: BrandLogoProps) {
  const current = sizes[size];
  const imageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
  };

  return (
    <span className="inline-flex items-center gap-2.5">
      <span className={`relative block flex-shrink-0 overflow-hidden rounded-xl border ${dark ? 'border-violet-700 bg-violet-900' : 'border-violet-100 bg-white'} ${current.frame}`}>
        <img src={brandAssets.logo} alt="Vision Optics eye and hands logo" width={220} height={150} className="h-full w-full scale-[1.45] object-contain" style={imageStyle} decoding="async" />
      </span>
      {showName && (
        <span className="leading-tight">
          <span className={`block font-display font-bold tracking-[0.08em] ${current.name} ${dark ? 'text-white' : 'text-violet-900'}`}>VISION OPTICS</span>
          <span className={`block font-medium tracking-[0.16em] ${current.sub} ${dark ? 'text-violet-300' : 'text-violet-700'}`}>EYE CARE SPECIALISTS</span>
        </span>
      )}
    </span>
  );
}
