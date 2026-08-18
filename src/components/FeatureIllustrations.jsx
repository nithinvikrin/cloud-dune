import React from 'react';
import { motion } from 'framer-motion';

// 1. Rapid Prototyping Illustration (Rocket / Lightning Speed)
export function RapidPrototypingIllustration() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/60 via-indigo-200/40 to-sky-100/60 rounded-2xl blur-lg transform scale-90" />

      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="rocketGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="fireGrad" x1="20" y1="70" x2="40" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>

        {/* Speed Streak Lines */}
        <motion.line
          x1="15"
          y1="30"
          x2="35"
          y2="30"
          stroke="#93C5FD"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ x: [-8, 8, -8], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.line
          x1="10"
          y1="48"
          x2="25"
          y2="48"
          stroke="#60A5FA"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ x: [-6, 6, -6], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />

        {/* Floating Rocket Body */}
        <motion.g
          animate={{ y: [-3, 3, -3], x: [2, -2, 2] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Flame Tail */}
          <motion.path
            d="M 28 68 C 22 75 26 84 32 88 C 36 82 42 78 38 68 Z"
            fill="url(#fireGrad)"
            animate={{ scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '32px 78px' }}
          />

          {/* Main Rocket Ship */}
          <path
            d="M 68 18 C 76 26 78 40 70 54 L 42 66 L 30 54 L 42 26 C 56 18 64 16 68 18 Z"
            fill="url(#rocketGrad)"
          />

          {/* Rocket Wing Left */}
          <path d="M 42 54 L 26 62 L 34 46 Z" fill="#1E40AF" />

          {/* Rocket Porthole Window */}
          <circle cx="56" cy="36" r="6" fill="#FFFFFF" />
          <circle cx="56" cy="36" r="3.5" fill="#3B82F6" />
        </motion.g>

        {/* Speed Lightning Spark */}
        <motion.path
          d="M 75 55 L 85 45 L 80 62 L 92 50"
          stroke="#F59E0B"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.95, 1.1, 0.95] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

// 2. Cloud-Native Illustration (Connected Cloud Nodes)
export function CloudNativeIllustration() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/60 via-blue-200/40 to-indigo-100/60 rounded-2xl blur-lg transform scale-90" />

      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="cloudNativeGrad" x1="20" y1="20" x2="80" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>

        {/* Connecting Kubernetes/Docker Network Rays */}
        <line x1="50" y1="45" x2="26" y2="72" stroke="#93C5FD" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="50" y1="45" x2="74" y2="72" stroke="#93C5FD" strokeWidth="2" strokeDasharray="3 3" />

        {/* Main Floating Cloud */}
        <motion.g
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M32 46 C25 46 20 40 22 33 C24 26 31 23 38 25 C42 18 51 15 60 18 C67 15 75 18 78 25 C85 26 89 33 86 40 C88 46 81 51 74 50 L32 50 Z"
            fill="url(#cloudNativeGrad)"
          />
          <path
            d="M36 43 C31 43 27 38 29 33 C30 29 35 27 40 28 C43 23 49 20 56 22 Z"
            fill="#BAE6FD"
            opacity="0.4"
          />
        </motion.g>

        {/* Bottom Network Micro-Nodes */}
        <g>
          <motion.circle
            cx="26"
            cy="72"
            r="6"
            fill="#2563EB"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="26" cy="72" r="3" fill="#FFFFFF" />

          <motion.circle
            cx="74"
            cy="72"
            r="6"
            fill="#0EA5E9"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          />
          <circle cx="74" cy="72" r="3" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}

// 3. AI-First Delivery Illustration (AI Spark Chip)
export function AIFirstIllustration() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/60 via-indigo-200/40 to-pink-100/60 rounded-2xl blur-lg transform scale-90" />

      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="aiChipGrad" x1="25" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Processor Pins */}
        <line x1="38" y1="20" x2="38" y2="28" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="20" x2="50" y2="28" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="62" y1="20" x2="62" y2="28" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />

        <line x1="38" y1="72" x2="38" y2="80" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="72" x2="50" y2="80" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="62" y1="72" x2="62" y2="80" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />

        <line x1="20" y1="38" x2="28" y2="38" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="50" x2="28" y2="50" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="62" x2="28" y2="62" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />

        <line x1="72" y1="38" x2="80" y2="38" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="72" y1="50" x2="80" y2="50" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="72" y1="62" x2="80" y2="62" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />

        {/* AI Chip Main Base */}
        <rect x="28" y="28" width="44" height="44" rx="8" fill="url(#aiChipGrad)" />

        {/* Glowing Center Brain Core */}
        <motion.circle
          cx="50"
          cy="50"
          r="10"
          fill="#FFFFFF"
          animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="50" cy="50" r="5" fill="#8B5CF6" />

        {/* AI Spark Star */}
        <motion.path
          d="M 72 26 Q 77 26 77 21 Q 77 26 82 26 Q 77 26 77 31 Q 77 26 72 26 Z"
          fill="#F59E0B"
          animate={{ scale: [0.8, 1.25, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

// 4. Ongoing Partnership Illustration (Handshake / Trust Shield)
export function PartnershipIllustration() {
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* Background Pastel Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/60 via-teal-200/40 to-cyan-100/60 rounded-2xl blur-lg transform scale-90" />

      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <linearGradient id="partnerGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>

        {/* Trust Outer Ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="#34D399"
          strokeWidth="2"
          strokeDasharray="4 4"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '50px 50px' }}
        />

        {/* Main Trust Badge Shield */}
        <motion.path
          d="M 50 22 L 74 32 V 52 C 74 68 62 80 50 84 C 38 80 26 68 26 52 V 32 Z"
          fill="url(#partnerGrad)"
          animate={{ scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 50px' }}
        />

        {/* Handshake Checkmark Icon */}
        <path
          d="M 40 50 L 47 57 L 62 42"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
