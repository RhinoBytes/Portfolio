import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-hover': 'var(--color-surface-hover)',
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-subtle': 'var(--color-text-subtle)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          text: 'var(--color-primary-text)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient)',
      },
      boxShadow: {
        'theme': '0 4px 6px -1px var(--shadow), 0 2px 4px -2px var(--shadow)',
        'theme-lg': '0 10px 15px -3px var(--shadow), 0 4px 6px -4px var(--shadow)',
        'theme-xl': '0 20px 25px -5px var(--shadow), 0 8px 10px -6px var(--shadow)',
      },
      borderRadius: {
        'theme-sm': 'var(--radius-sm)',
        'theme-lg': 'var(--radius-lg)',
      },
      transitionDuration: {
        'fast': '150ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
