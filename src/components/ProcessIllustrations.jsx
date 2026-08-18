import React from 'react';
import { motion } from 'framer-motion';

// 1. Discover Illustration (Compass / Target Map)
export function DiscoverIllustration() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center me-0">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/60 via-blue-200/40 to-indigo-100/60 rounded-2xl blur-lg transform scale-90" />

      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="discoverGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>

        {/* Pulsing Radar Circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2"
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 50px' }}
        />

        {/* Compass Outer Frame */}
        <circle cx="50" cy="50" r="30" fill="url(#discoverGrad)" />
        <circle cx="50" cy="50" r="24" fill="#0F172A" />

        {/* Compass North/South Needle */}
        <motion.g
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 50px' }}
        >
          {/* North Point (Light) */}
          <polygon points="50,28 55,50 50,46" fill="#38BDF8" />
          {/* South Point (Dark) */}
          <polygon points="50,72 45,50 50,54" fill="#94A3B8" />
          <circle cx="50" cy="50" r="4" fill="#FFFFFF" />
        </motion.g>
      </svg>
    </div>
  );
}

// 2. Prototype Illustration (UI Canvas & Layout)
export function PrototypeIllustration() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center me-0">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/60 via-purple-200/40 to-blue-100/60 rounded-2xl blur-lg transform scale-90" />

      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="protoGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#4338CA" />
          </linearGradient>
        </defs>

        {/* Floating App Canvas */}
        <motion.g
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="22" y="24" width="56" height="52" rx="6" fill="url(#protoGrad)" />
          <rect x="26" y="32" width="48" height="40" rx="4" fill="#FFFFFF" />

          {/* Wireframe UI Blocks */}
          <rect x="30" y="36" width="40" height="8" rx="2" fill="#E0E7FF" />
          <rect x="30" y="48" width="18" height="18" rx="3" fill="#818CF8" />
          <rect x="52" y="48" width="18" height="6" rx="2" fill="#C7D2FE" />
          <rect x="52" y="58" width="14" height="6" rx="2" fill="#E0E7FF" />
        </motion.g>

        {/* Floating Cursor / Pointer Badge */}
        <motion.path
          d="M 62 62 L 78 78 L 70 79 L 75 88 L 71 90 L 66 81 L 61 85 Z"
          fill="#3B82F6"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          animate={{ x: [0, 4, 0], y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

// 3. Iterate Illustration (Continuous Feedback Loop)
export function IterateIllustration() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center me-0">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/60 via-orange-200/40 to-yellow-100/60 rounded-2xl blur-lg transform scale-90" />

      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="iterateGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Continuous Rotating Loop Arrow */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '50px 50px' }}
        >
          <path
            d="M 50 18 A 32 32 0 1 1 20 48"
            fill="none"
            stroke="url(#iterateGrad)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Arrow Tip */}
          <polygon points="12,42 22,54 28,40" fill="#D97706" />
        </motion.g>

        {/* Center Checkmark Core */}
        <circle cx="50" cy="50" r="16" fill="#F59E0B" />
        <path d="M 43 50 L 48 55 L 58 44" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// 4. Launch & Support Illustration (Rocket Launch & Shield Support)
export function LaunchSupportIllustration() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center me-0">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/60 via-teal-200/40 to-cyan-100/60 rounded-2xl blur-lg transform scale-90" />

      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="launchGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>

        {/* Launch Wave Signal Rings */}
        <motion.circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="#34D399"
          strokeWidth="2"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 50px' }}
        />

        {/* Base Launch Shield */}
        <path d="M 50 18 L 78 30 V 54 C 78 72 66 84 50 88 C 34 84 22 72 22 54 V 30 Z" fill="url(#launchGrad)" />

        {/* Live Launch Rocket / Flag Symbol inside Shield */}
        <path d="M 50 32 L 62 48 L 54 48 L 54 68 L 46 68 L 46 48 L 38 48 Z" fill="#FFFFFF" />
        <circle cx="50" cy="40" r="3" fill="#10B981" />
      </svg>
    </div>
  );
}
