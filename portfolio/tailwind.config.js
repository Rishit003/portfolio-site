/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:         '#0a0a0a',
        bg2:        '#0f0f0f',
        bg3:        '#141414',
        border:     '#1e1e1e',
        border2:    '#2a2a2a',
        green:      '#00ff88',
        'green-dim':'#00c86644',
        amber:      '#f0a500',
        text:       '#e4e4e4',
        'text-dim': '#666666',
        'text-mid': '#999999',
      },
      fontFamily: {
        pixel: ['PublicPixel', 'monospace'],
        mono:  ['RobotoMono', 'Courier New', 'monospace'],
        chill: ['Chill', 'sans-serif'],
      },
      fontSize: {
        pixel: '9px',
      },
      animation: {
        pulse2: 'pulse2 2s ease-in-out infinite',
        blink:  'blink 1s step-end infinite',
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.3' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
