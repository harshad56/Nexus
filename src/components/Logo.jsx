import React from 'react';

export default function Logo({ size = 38, showText = true, className = '', style = {} }) {
  if (!showText) {
    // Render only the square logo icon
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="-2 3 94 94" 
        width={size} 
        height={size}
        className={className}
        style={{ flexShrink: 0, ...style }}
      >
        <defs>
          <linearGradient id="ngrad-logo-icon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#22D3EE' }}/>
            <stop offset="100%" style={{ stopColor: '#4F46E5' }}/>
          </linearGradient>
          <filter id="glow-logo-icon">
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="dotglow-logo-icon">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Icon background: dark rounded square */}
        <rect x="0" y="5" width="90" height="90" rx="20" fill="#0F0E2A"/>
        {/* Subtle border glow */}
        <rect x="0" y="5" width="90" height="90" rx="20" fill="none" stroke="url(#ngrad-logo-icon)" strokeWidth="1.5" opacity="0.8"/>
        {/* Shadow layer behind */}
        <rect x="4" y="10" width="90" height="90" rx="20" fill="#4F46E5" opacity="0.15"/>

        {/* N letterform inside icon */}
        <rect x="18" y="23" width="13" height="54" rx="3" fill="url(#ngrad-logo-icon)" filter="url(#glow-logo-icon)"/>
        <rect x="59" y="23" width="13" height="54" rx="3" fill="url(#ngrad-logo-icon)" filter="url(#glow-logo-icon)"/>
        <polygon points="18,23 31,23 72,65 72,77 59,77 18,35" fill="url(#ngrad-logo-icon)" filter="url(#glow-logo-icon)"/>

        {/* Cyan accent dot top right */}
        <circle cx="78" cy="19" r="7" fill="#22D3EE" filter="url(#dotglow-logo-icon)" opacity="0.95"/>
      </svg>
    );
  }

  // Render the full horizontal logo (icon + text wordmark)
  const width = size * 4.2;
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 420 100" 
      width={width} 
      height={size}
      className={className}
      style={{ display: 'block', flexShrink: 0, ...style }}
    >
      <defs>
        <linearGradient id="ngrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#22D3EE' }}/>
          <stop offset="100%" style={{ stopColor: '#4F46E5' }}/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="dotglow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Icon background: dark rounded square */}
      <rect x="0" y="5" width="90" height="90" rx="20" fill="#0F0E2A"/>
      {/* Subtle border glow */}
      <rect x="0" y="5" width="90" height="90" rx="20" fill="none" stroke="url(#ngrad)" strokeWidth="1.5" opacity="0.8"/>
      {/* Shadow layer behind */}
      <rect x="4" y="10" width="90" height="90" rx="20" fill="#4F46E5" opacity="0.15"/>

      {/* N letterform inside icon */}
      <rect x="18" y="23" width="13" height="54" rx="3" fill="url(#ngrad)" filter="url(#glow)"/>
      <rect x="59" y="23" width="13" height="54" rx="3" fill="url(#ngrad)" filter="url(#glow)"/>
      <polygon points="18,23 31,23 72,65 72,77 59,77 18,35" fill="url(#ngrad)" filter="url(#glow)"/>

      {/* Cyan accent dot top right */}
      <circle cx="78" cy="19" r="7" fill="#22D3EE" filter="url(#dotglow)" opacity="0.95"/>

      {/* Wordmark: NexusWeb */}
      <text x="106" y="52" fontFamily="'Space Grotesk', 'Trebuchet MS', 'Segoe UI', sans-serif" fontSize="35" fontWeight="700" fill="var(--logo-text)" letterSpacing="-0.5">NexusWeb</text>

      {/* Tagline: Solutions */}
      <text x="108" y="77" fontFamily="'Space Grotesk', 'Trebuchet MS', 'Segoe UI', sans-serif" fontSize="19" fontWeight="700" fill="var(--logo-tagline)" letterSpacing="4.5">SOLUTIONS</text>

      {/* Thin accent line under Solutions */}
      <rect x="108" y="84" width="230" height="2" rx="1" fill="url(#ngrad)" opacity="0.65"/>
    </svg>
  );
}
