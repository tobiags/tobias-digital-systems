/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f6f3ee',
        'bg-soft': '#f1ede7',
        surface: '#fbf8f4',
        'surface-2': '#ffffff',
        'text-main': '#111111',
        'text-soft': '#4b4b4b',
        'text-muted': '#777777',
        'border-subtle': 'rgba(17,17,17,0.10)',
        'border-strong': 'rgba(17,17,17,0.18)',
        accent: {
          DEFAULT: '#2952ff',
          soft: 'rgba(41,82,255,0.08)',
          line: 'rgba(41,82,255,0.35)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Bodoni Moda', 'serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      keyframes: {
        driftA: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        driftB: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(7px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        driftA: 'driftA 7s ease-in-out infinite',
        driftB: 'driftB 8.5s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both',
        fadeIn: 'fadeIn 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
