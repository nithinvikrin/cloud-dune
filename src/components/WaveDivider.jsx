import React from 'react';

export default function WaveDivider({ color = 'text-slate-50', flip = false }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none z-10 ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 2880 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-8 md:h-12 ${color}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
