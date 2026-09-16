import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ManiStationeryLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'horizontal' | 'badge' | 'official-banner';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightText?: boolean;
}

export function ManiStationeryLogo({
  className = '',
  variant = 'horizontal',
  size = 'md',
  lightText,
}: ManiStationeryLogoProps) {
  // Try using theme context, fallback gracefully if outside provider
  let isDarkMode = false;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const themeContext = useTheme();
    isDarkMode = themeContext.isDark;
  } catch {
    isDarkMode = false;
  }

  // Determine whether text should be light or dark
  const useLightText = lightText !== undefined ? lightText : isDarkMode;

  // Dimensions based on size
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const subSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
    xl: 'text-base',
  };

  // The Exact Authentic Vector Pencil Icon from user's uploaded logo
  const PencilIconSvg = (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-xs"
    >
      {/* Soft rounded brown background tile matching official image #5f3521 */}
      <rect
        width="100"
        height="100"
        rx="22"
        fill="#5f3521"
      />
      
      {/* Golden Outline of the Stationery Pencil */}
      {/* Outer pencil body */}
      <path
        d="M28 28C28 18 36 12 50 12C64 12 72 18 72 28V62C72 65 70 66 67 66C64 66 61 63 58 66C55 69 52 66 50 66C48 66 45 69 42 66C39 63 36 66 33 66C30 66 28 65 28 62V28Z"
        stroke="#e5aa4b"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Two inner vertical flutes */}
      <line
        x1="43"
        y1="16"
        x2="43"
        y2="65"
        stroke="#e5aa4b"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      <line
        x1="57"
        y1="16"
        x2="57"
        y2="65"
        stroke="#e5aa4b"
        strokeWidth="3.8"
        strokeLinecap="round"
      />
      
      {/* Horizontal collar band */}
      <line
        x1="28"
        y1="30"
        x2="72"
        y2="30"
        stroke="#e5aa4b"
        strokeWidth="3.8"
      />

      {/* Sharpened triangular wood cone */}
      <path
        d="M29 67L50 88L71 67"
        stroke="#e5aa4b"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Solid gold lead tip */}
      <polygon
        points="43,80 50,88 57,80"
        fill="#e5aa4b"
      />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`relative inline-block ${iconSizes[size]} shrink-0 ${className}`}>
        {PencilIconSvg}
      </div>
    );
  }

  // Official Banner variant matching the uploaded image (Brown plate with rounded corners)
  if (variant === 'official-banner') {
    return (
      <div className={`inline-flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-[#4e2d1d] border border-[#6f3f29] shadow-xl text-left select-none ${className}`}>
        <div className="w-12 h-12 shrink-0">
          {PencilIconSvg}
        </div>
        <div className="flex flex-col justify-center leading-tight">
          <span 
            className="font-heading text-[#f8ede2] text-2xl uppercase tracking-tight"
            style={{ fontWeight: 900 }}
          >
            MANI
          </span>
          <span 
            className="font-heading text-[#f8ede2] text-lg font-bold tracking-tight -mt-0.5"
          >
            Stationery
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex flex-col items-center justify-center p-4 rounded-2xl bg-[#4e2d1d] border border-[#6f3f29] text-center shadow-xl select-none ${className}`}>
        <div className={iconSizes[size]}>
          {PencilIconSvg}
        </div>
        <div className="mt-2.5">
          <span 
            className="font-heading text-[#f8ede2] text-xl block leading-none uppercase tracking-wide"
            style={{ fontWeight: 900 }}
          >
            MANI
          </span>
          <span className="font-heading font-bold tracking-tight text-[#f8ede2] text-base block mt-1">
            Stationery
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-widest text-indigo-500 font-extrabold mt-2 px-2 py-0.5 rounded-full bg-[#5f3521]">
          Andippatti &bull; Tamil Nadu
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Pencil Badge */}
      <div className={`${iconSizes[size]} shrink-0 shadow-md rounded-xl overflow-hidden`}>
        {PencilIconSvg}
      </div>

      {/* Typography: Super Bold MANI with Stationery */}
      <div className="flex flex-col justify-center leading-none">
        <span 
          className={`font-heading uppercase tracking-wide transition-colors ${
            useLightText ? 'text-[#f8ede2]' : 'text-slate-900 dark:text-white'
          } ${textSizes[size]}`}
          style={{ fontWeight: 900, letterSpacing: '0.04em' }}
        >
          MANI
        </span>
        <span 
          className={`font-heading font-extrabold uppercase tracking-widest transition-colors ${
            useLightText ? 'text-indigo-500' : 'text-indigo-600 dark:text-indigo-400'
          } ${subSizes[size]}`}
          style={{ fontWeight: 800, letterSpacing: '0.08em' }}
        >
          Stationery
        </span>
      </div>
    </div>
  );
}
