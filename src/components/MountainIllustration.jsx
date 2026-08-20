import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function MountainIllustration() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax
  const springConfig = { damping: 25, stiffness: 120 };
  const moveXBg = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const moveYBg = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);

  const moveXMid = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const moveYMid = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), springConfig);

  const moveXFg = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);
  const moveYFg = useSpring(useTransform(mouseY, [-0.5, 0.5], [-2, 2]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Node coordinates along the path
  const nodes = [
    { cx: 210, cy: 440, label: 'Base' },
    { cx: 265, cy: 345, label: 'Data' },
    { cx: 310, cy: 260, label: 'Cloud' },
    { cx: 345, cy: 165, label: 'AI Engine' },
    { cx: 360, cy: 85, label: 'Peak' },
  ];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[600px] mx-auto flex items-center justify-center select-none"
    >
      <svg
        viewBox="0 0 660 485"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl overflow-visible"
      >
        <defs>
          {/* Sun & Glow Gradients */}
          <radialGradient id="sunGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(530 110) scale(120)">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#93C5FD" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sunCore" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(530 110) scale(40)">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#3B82F6" />
          </radialGradient>

          {/* Main Peak Gradients */}
          <linearGradient id="mainPeakLeft" x1="200" y1="80" x2="360" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="60%" stopColor="#172B55" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="mainPeakRight" x1="360" y1="80" x2="540" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="50%" stopColor="#172B55" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* Mid Peak Gradient */}
          <linearGradient id="midPeakGrad" x1="120" y1="160" x2="420" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="60%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          {/* Back Snowy Peaks Gradient */}
          <linearGradient id="backPeakGrad" x1="380" y1="160" x2="580" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>

          {/* Path Glowing Light Gradient */}
          <linearGradient id="pathGradient" x1="210" y1="440" x2="360" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          
          <linearGradient id="flagGrad" x1="360" y1="42" x2="415" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>

        {/* 1. Sun Glow & Core */}
        <g>
          <motion.circle
            cx="530"
            cy="110"
            r="120"
            fill="url(#sunGlow)"
            animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="530"
            cy="110"
            r="32"
            fill="url(#sunCore)"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>

        {/* 2. Soft Background Clouds */}
        <motion.g style={{ x: moveXBg, y: moveYBg }}>
          {/* Cloud 1 Left */}
          <motion.path
            d="M 60 140 Q 75 120 100 120 Q 120 105 145 120 Q 165 120 175 140 Q 185 155 165 165 L 70 165 Q 50 155 60 140 Z"
            fill="#FFFFFF"
            fillOpacity="0.65"
            animate={{ x: [-15, 15, -15] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Cloud 2 Right */}
          <motion.path
            d="M 430 180 Q 445 165 465 165 Q 480 150 500 165 Q 515 165 525 180 Q 535 195 515 205 L 440 205 Q 420 195 430 180 Z"
            fill="#FFFFFF"
            fillOpacity="0.5"
            animate={{ x: [12, -12, 12] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.g>

        {/* 3. Back Mountain Range (Parallax Far Layer) */}
        <motion.g style={{ x: moveXBg, y: moveYBg }}>
          {/* Far Left Light Mountain */}
          <path d="M 30 480 L 150 240 L 250 480 Z" fill="#DBEAFE" />
          <path d="M 150 240 L 250 480 L 195 480 Z" fill="#BFDBFE" />
          <path d="M 150 240 L 130 280 L 150 295 L 170 280 Z" fill="#FFFFFF" />

          {/* Far Right Mountain */}
          <path d="M 360 480 L 480 180 L 590 480 Z" fill="url(#backPeakGrad)" />
          <path d="M 480 180 L 590 480 L 530 480 Z" fill="#3B82F6" opacity="0.4" />
          <path d="M 480 180 L 450 230 L 480 245 L 510 230 Z" fill="#FFFFFF" />
        </motion.g>

        {/* 4. Midground Mountain Range (Parallax Mid Layer) */}
        <motion.g style={{ x: moveXMid, y: moveYMid }}>
          <path d="M 100 480 L 270 160 L 430 480 Z" fill="url(#midPeakGrad)" />
          <path d="M 270 160 L 430 480 L 350 480 Z" fill="#1D4ED8" />
          <path d="M 270 160 L 235 210 L 270 230 L 305 210 Z" fill="#E0F2FE" />
        </motion.g>

        {/* 5. Main Foreground Mountain Peak (Hero Peak) */}
        <motion.g style={{ x: moveXFg, y: moveYFg }}>
          {/* Main Peak Left Face (Lit side) */}
          <path d="M 150 480 L 360 85 L 360 480 Z" fill="url(#mainPeakLeft)" />
          {/* Main Peak Right Face (Shadow side) */}
          <path d="M 360 85 L 570 480 L 360 480 Z" fill="url(#mainPeakRight)" />
          
          {/* Geometric Ridgeline highlight */}
          <path d="M 360 85 L 360 480" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* Snow Cap on Main Peak */}
          <path d="M 360 85 L 320 155 L 345 145 L 360 170 L 375 145 L 400 155 Z" fill="#FFFFFF" />
          <path d="M 360 85 L 360 170 L 375 145 L 400 155 Z" fill="#E0F2FE" />
        </motion.g>

        {/* 6. Glowing Network Path & Connections */}
        <g>
          {/* Base glow path line */}
          <path
            d="M 210 440 C 240 370, 275 320, 310 260 C 330 220, 345 160, 360 85"
            stroke="#2563EB"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* Animated Light Beam Path */}
          <motion.path
            d="M 210 440 C 240 370, 275 320, 310 260 C 330 220, 345 160, 360 85"
            stroke="url(#pathGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="12 10"
            animate={{ strokeDashoffset: [220, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* Circular Pulsing Nodes along Path */}
          {nodes.map((node, index) => (
            <g key={node.label}>
              {/* Outer Pulsing Halo */}
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r="14"
                fill="#2563EB"
                animate={{ scale: [0.8, 1.8, 0.8], opacity: [0.6, 0, 0.6] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: index * 0.45,
                  ease: 'easeInOut',
                }}
              />
              {/* Inner Glow Circle */}
              <circle cx={node.cx} cy={node.cy} r="6" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" />
              <circle cx={node.cx} cy={node.cy} r="2.5" fill="#2563EB" />
            </g>
          ))}
        </g>

        {/* 7. Blue Peak Flag */}
        <motion.g style={{ x: moveXFg, y: moveYFg }}>
          {/* Flagpole */}
          <line x1="360" y1="85" x2="360" y2="40" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="360" cy="39" r="3" fill="#60A5FA" />

          {/* Waving Flag Banner */}
          <motion.path
            d="M 360 42 C 375 38, 395 48, 415 44 L 415 68 C 395 72, 375 62, 360 66 Z"
            fill="url(#flagGrad)"
            stroke="#1D4ED8"
            strokeWidth="1"
            animate={{
              d: [
                'M 360 42 C 375 38, 395 48, 415 44 L 415 68 C 395 72, 375 62, 360 66 Z',
                'M 360 42 C 380 46, 395 38, 415 42 L 415 66 C 395 62, 380 70, 360 66 Z',
                'M 360 42 C 375 38, 395 48, 415 44 L 415 68 C 395 72, 375 62, 360 66 Z',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
