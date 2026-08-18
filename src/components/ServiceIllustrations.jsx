import React from 'react';
import { motion } from 'framer-motion';

// 1. Cloud Infrastructure (Blue/Purple Palette)
export function CloudInfraIllustration() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 via-purple-200/40 to-indigo-100/60 rounded-full blur-xl transform scale-90" />

      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="cloudGrad" x1="20" y1="20" x2="100" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="serverGrad" x1="30" y1="65" x2="90" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#312E81" />
          </linearGradient>
        </defs>

        {/* Floating Server Rack Base */}
        <g>
          <rect x="30" y="70" width="60" height="14" rx="4" fill="url(#serverGrad)" />
          <rect x="30" y="88" width="60" height="14" rx="4" fill="url(#serverGrad)" />
          
          {/* Server Lights */}
          <motion.circle
            cx="40"
            cy="77"
            r="2.5"
            fill="#34D399"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="48"
            cy="77"
            r="2.5"
            fill="#60A5FA"
            animate={{ opacity: [0.8, 0.3, 0.8] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="40"
            cy="95"
            r="2.5"
            fill="#34D399"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="48"
            cy="95"
            r="2.5"
            fill="#818CF8"
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>

        {/* Floating Main 3D Cloud */}
        <motion.g
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M38 58 C30 58 24 50 26 42 C28 34 36 30 44 32 C48 24 58 20 68 24 C76 20 86 24 90 32 C98 34 102 42 98 50 C100 58 92 64 84 62 L38 62 Z"
            fill="url(#cloudGrad)"
            shadow="drop-shadow(0 4px 6px rgba(59, 130, 246, 0.3))"
          />
          {/* Cloud Highlight */}
          <path
            d="M42 54 C36 54 32 48 33 42 C34 38 38 35 44 36 C47 30 54 26 62 29 C68 26 76 29 79 35 C85 36 88 42 85 48 Z"
            fill="#93C5FD"
            opacity="0.5"
          />
        </motion.g>
      </svg>
    </div>
  );
}

// 2. Data & Analytics (Green/Teal Palette)
export function DataAnalyticsIllustration() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/50 via-teal-200/40 to-cyan-100/60 rounded-full blur-xl transform scale-90" />

      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="barGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
          <linearGradient id="barGrad3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>

        {/* Dashboard Grid Line */}
        <line x1="20" y1="95" x2="100" y2="95" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

        {/* 4 Animated Chart Bars */}
        {/* Bar 1 */}
        <motion.rect
          x="28"
          y="65"
          width="12"
          height="30"
          rx="3"
          fill="url(#barGrad1)"
          animate={{ height: [20, 32, 24, 30], y: [75, 63, 71, 65] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Bar 2 */}
        <motion.rect
          x="46"
          y="45"
          width="12"
          height="50"
          rx="3"
          fill="url(#barGrad2)"
          animate={{ height: [40, 56, 45, 50], y: [55, 39, 50, 45] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
        {/* Bar 3 */}
        <motion.rect
          x="64"
          y="30"
          width="12"
          height="65"
          rx="3"
          fill="url(#barGrad1)"
          animate={{ height: [55, 70, 60, 65], y: [40, 25, 35, 30] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
        {/* Bar 4 */}
        <motion.rect
          x="82"
          y="20"
          width="12"
          height="75"
          rx="3"
          fill="url(#barGrad3)"
          animate={{ height: [65, 80, 70, 75], y: [30, 15, 25, 20] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />

        {/* Trend Line with Glowing Dot */}
        <motion.path
          d="M 28 72 L 52 50 L 70 36 L 88 22"
          stroke="#059669"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        <motion.circle
          cx="88"
          cy="22"
          r="4.5"
          fill="#10B981"
          stroke="#FFFFFF"
          strokeWidth="2"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

// 3. AI & Intelligent Apps (Orange/Gold Palette)
export function AIDevIllustration() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/50 via-orange-200/40 to-yellow-100/60 rounded-full blur-xl transform scale-90" />

      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="aiGrad" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>

        {/* Neural Network Connections */}
        <line x1="60" y1="60" x2="35" y2="35" stroke="#FBBF24" strokeWidth="2.5" opacity="0.7" />
        <line x1="60" y1="60" x2="85" y2="35" stroke="#FBBF24" strokeWidth="2.5" opacity="0.7" />
        <line x1="60" y1="60" x2="30" y2="75" stroke="#FBBF24" strokeWidth="2.5" opacity="0.7" />
        <line x1="60" y1="60" x2="90" y2="75" stroke="#FBBF24" strokeWidth="2.5" opacity="0.7" />
        <line x1="60" y1="60" x2="60" y2="95" stroke="#FBBF24" strokeWidth="2.5" opacity="0.7" />

        {/* Central AI Brain Core Node */}
        <motion.circle
          cx="60"
          cy="60"
          r="16"
          fill="url(#aiGrad)"
          animate={{ scale: [0.95, 1.1, 0.95] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="60" cy="60" r="8" fill="#FFFFFF" opacity="0.9" />
        <circle cx="60" cy="60" r="4" fill="#F59E0B" />

        {/* Outer Neural Nodes */}
        <motion.circle
          cx="35"
          cy="35"
          r="7"
          fill="#F59E0B"
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
        />
        <motion.circle
          cx="85"
          cy="35"
          r="7"
          fill="#F97316"
          animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.circle
          cx="30"
          cy="75"
          r="6"
          fill="#EF4444"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.circle
          cx="90"
          cy="75"
          r="6"
          fill="#F59E0B"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        />
        <motion.circle
          cx="60"
          cy="95"
          r="6.5"
          fill="#F97316"
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
      </svg>
    </div>
  );
}

// 4. Application Development (Blue Palette)
export function AppDevIllustration() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/50 via-blue-200/40 to-indigo-100/60 rounded-full blur-xl transform scale-90" />

      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="laptopGrad" x1="20" y1="30" x2="100" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>

        {/* Laptop Screen Body */}
        <motion.g
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Base Keyboard */}
          <rect x="20" y="82" width="80" height="8" rx="2" fill="#1E293B" />
          <rect x="46" y="83" width="28" height="2" rx="1" fill="#475569" />

          {/* Screen Frame */}
          <rect x="26" y="32" width="68" height="48" rx="5" fill="url(#laptopGrad)" />
          <rect x="30" y="36" width="60" height="40" rx="3" fill="#0F172A" />

          {/* Code Window Lines */}
          <line x1="36" y1="44" x2="56" y2="44" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="60" y1="44" x2="72" y2="44" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" />

          <line x1="42" y1="52" x2="76" y2="52" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="42" y1="60" x2="64" y2="60" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="36" y1="68" x2="52" y2="68" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>

        {/* Floating Code Tag Badge < /> */}
        <motion.g
          animate={{ y: [3, -5, 3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="75" y="22" width="30" height="22" rx="6" fill="#2563EB" shadow="drop-shadow(0 4px 6px rgba(37,99,235,0.4))" />
          <text x="90" y="36" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            &lt;/&gt;
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

// 5. Security & Reliability (Pink/Red Palette)
export function SecurityIllustration() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/50 via-rose-200/40 to-red-100/60 rounded-full blur-xl transform scale-90" />

      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="shieldGrad" x1="30" y1="20" x2="90" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="50%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#BE123C" />
          </linearGradient>
        </defs>

        {/* Shield Outer Pulse Halo */}
        <motion.path
          d="M 60 22 L 92 34 V 62 C 92 82 78 98 60 104 C 42 98 28 82 28 62 V 34 Z"
          fill="none"
          stroke="#F43F5E"
          strokeWidth="2"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '60px 60px' }}
        />

        {/* Main 3D Metallic Shield */}
        <motion.path
          d="M 60 25 L 88 36 V 60 C 88 78 76 92 60 98 C 44 92 32 78 32 60 V 36 Z"
          fill="url(#shieldGrad)"
          animate={{ scale: [0.98, 1.03, 0.98] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '60px 60px' }}
        />

        {/* Shield Highlight Facet */}
        <path
          d="M 60 25 L 88 36 V 60 C 88 78 76 92 60 98 Z"
          fill="#FFFFFF"
          opacity="0.18"
        />

        {/* Central Padlock Icon */}
        <g transform="translate(48, 46)">
          <rect x="4" y="10" width="16" height="14" rx="3" fill="#FFFFFF" />
          <path d="M7 10 V6 C7 3.5 9 2 12 2 C15 2 17 3.5 17 6 V10" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="12" cy="17" r="2" fill="#E11D48" />
        </g>
      </svg>
    </div>
  );
}

// 6. DevOps & Automation (Cyan/Teal Palette)
export function DevOpsIllustration() {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/50 via-teal-200/40 to-emerald-100/60 rounded-full blur-xl transform scale-90" />

      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="devOpsGrad" x1="20" y1="40" x2="100" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>

        {/* Slowly Rotating Infinity Loop */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '60px 60px' }}
        >
          {/* Infinity Loop Path */}
          <path
            d="M 60 60 C 45 42 24 42 24 60 C 24 78 45 78 60 60 C 75 42 96 42 96 60 C 96 78 75 78 60 60 Z"
            fill="none"
            stroke="url(#devOpsGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Light Trace along Infinity */}
          <path
            d="M 60 60 C 45 42 24 42 24 60 C 24 78 45 78 60 60 C 75 42 96 42 96 60 C 96 78 75 78 60 60 Z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeDasharray="14 40"
          />
        </motion.g>

        {/* Central Pulse Gear Core */}
        <motion.circle
          cx="60"
          cy="60"
          r="6"
          fill="#06B6D4"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
