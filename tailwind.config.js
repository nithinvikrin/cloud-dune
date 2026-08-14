/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-bs-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#335eea',
          hover: '#294bbb',
          light: '#d6dffb',
          subtle: '#d6dffb',
          desat: '#6c8aec',
          dark: '#14265e',
        },
        secondary: {
          DEFAULT: '#506690',
          hover: '#405273',
          subtle: '#dce0e9',
        },
        success: {
          DEFAULT: '#42ba96',
          hover: '#359578',
          subtle: '#d9f1ea',
        },
        info: {
          DEFAULT: '#7c69ef',
          hover: '#6354bf',
          subtle: '#e5e1fc',
        },
        warning: {
          DEFAULT: '#fad776',
          hover: '#fbdb84',
          subtle: '#fef7e4',
        },
        danger: {
          DEFAULT: '#df4759',
          hover: '#b23947',
          subtle: '#f9dade',
        },
        dark: {
          DEFAULT: '#1b2a4e',
          subtle: '#c6d3e6',
        },
        light: {
          DEFAULT: '#f9fbfd',
          subtle: '#fcfdfe',
        },
        black: '#161c2d',
        brandGray: {
          100: '#f9fbfd',
          200: '#f1f4f8',
          300: '#d9e2ef',
          400: '#c6d3e6',
          500: '#abbcd5',
          600: '#869ab8',
          700: '#506690',
          800: '#384c74',
          900: '#1b2a4e',
        },
        slate: {
          850: '#151F32',
          900: '#121D33',
        }
      },
      fontFamily: {
        sans: [
          'HKGroteskPro',
          'HK Grotesk',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      boxShadow: {
        'bs-sm': '0 0.125rem 0.25rem rgba(22, 28, 45, 0.075)',
        'bs': '0 0.5rem 1.5rem rgba(22, 28, 45, 0.1)',
        'bs-lg': '0 1.5rem 4rem rgba(22, 28, 45, 0.1)',
        'lift': '0 1rem 2.5rem rgba(22, 28, 45, 0.1)',
        'lift-hover': '0 1.5rem 3.5rem rgba(22, 28, 45, 0.15)',
        'card': '0 0.75rem 1.5rem rgba(18, 38, 63, 0.03)',
        'card-hover': '0 1.25rem 2.5rem rgba(18, 38, 63, 0.08)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}

