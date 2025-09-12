/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        border: "var(--color-border)", // light-gray
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // scientific-blue
        background: "var(--color-background)", // clinical-white
        foreground: "var(--color-foreground)", // deep-charcoal
        primary: {
          DEFAULT: "var(--color-primary)", // scientific-blue
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // professional-gray
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // error-red
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // subtle-gray
          foreground: "var(--color-muted-foreground)", // professional-gray
        },
        accent: {
          DEFAULT: "var(--color-accent)", // subtle-gray
          foreground: "var(--color-accent-foreground)", // deep-charcoal
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // deep-charcoal
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // deep-charcoal
        },
        success: {
          DEFAULT: "var(--color-success)", // success-green
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // warning-orange
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // error-red
          foreground: "var(--color-error-foreground)", // white
        },
        conversion: {
          DEFAULT: "var(--color-conversion)", // energetic-orange
          foreground: "var(--color-conversion-foreground)", // white
        },
        trust: {
          DEFAULT: "var(--color-trust)", // medical-green
          foreground: "var(--color-trust-foreground)", // white
        },
        brand: {
          primary: "var(--color-brand-primary)", // scientific-blue
          secondary: "var(--color-brand-secondary)", // professional-gray
          accent: "var(--color-brand-accent)", // energetic-orange
        },
        text: {
          primary: "var(--color-text-primary)", // deep-charcoal
          secondary: "var(--color-text-secondary)", // professional-gray
        },
        surface: "var(--color-surface)", // subtle-gray
      },
      borderRadius: {
        lg: "var(--radius-lg)", // 8px
        md: "var(--radius-md)", // 6px
        sm: "var(--radius-sm)", // 2px
        DEFAULT: "var(--radius)", // 4px
        xl: "var(--radius-xl)", // 12px
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        'xs': 'var(--spacing-xs)', // 4px
        'sm': 'var(--spacing-sm)', // 8px
        'md': 'var(--spacing-md)', // 16px
        'lg': 'var(--spacing-lg)', // 24px
        'xl': 'var(--spacing-xl)', // 32px
        '2xl': 'var(--spacing-2xl)', // 48px
        '3xl': 'var(--spacing-3xl)', // 64px
        '4xl': 'var(--spacing-4xl)', // 96px
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)', // subtle
        'DEFAULT': 'var(--shadow)', // card
        'md': 'var(--shadow-md)', // elevated
        'lg': 'var(--shadow-lg)', // modal
        'xl': 'var(--shadow-xl)', // overlay
        'glow': '0 0 20px rgba(0, 121, 192, 0.3)', // brand-blue-glow
        'glow-conversion': '0 0 20px rgba(0, 121, 192, 0.3)', // brand-blue-glow
        'glow-success': '0 0 20px rgba(0, 121, 192, 0.3)', // brand-blue-glow
      },
      animation: {
        'molecular-rotate': 'molecularRotate 20s linear infinite',
        'pulse-indicator': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'count-up': 'countUp 2.5s ease-out forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        molecularRotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      transitionTimingFunction: {
        'scientific': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'scientific': '300ms',
      },
      backgroundImage: {
        'molecular-gradient': 'radial-gradient(circle at 30% 70%, rgba(0, 121, 192, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(108, 108, 110, 0.1) 0%, transparent 50%)',
        'scientific-grid': 'linear-gradient(rgba(0, 121, 192, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 121, 192, 0.1) 1px, transparent 1px)',
        'text-gradient': 'linear-gradient(135deg, var(--color-primary), var(--color-conversion))',
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}