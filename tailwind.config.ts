
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Enhanced Primary Color System
        primary: {
          DEFAULT: "hsl(217, 91%, 60%)", // Vibrant blue
          50: "hsl(214, 100%, 97%)",
          100: "hsl(214, 95%, 93%)",
          200: "hsl(213, 97%, 87%)",
          300: "hsl(212, 96%, 78%)",
          400: "hsl(213, 94%, 68%)",
          500: "hsl(217, 91%, 60%)",
          600: "hsl(221, 83%, 53%)",
          700: "hsl(224, 76%, 48%)",
          800: "hsl(226, 71%, 40%)",
          900: "hsl(224, 64%, 33%)",
          950: "hsl(226, 55%, 25%)",
          foreground: "hsl(0, 0%, 100%)",
        },

        // Sophisticated Secondary Colors
        secondary: {
          DEFAULT: "hsl(210, 17%, 95%)",
          50: "hsl(210, 17%, 98%)",
          100: "hsl(210, 17%, 95%)",
          200: "hsl(214, 15%, 91%)",
          300: "hsl(213, 13%, 83%)",
          400: "hsl(215, 14%, 71%)",
          500: "hsl(215, 16%, 47%)", 
          600: "hsl(215, 19%, 35%)",
          700: "hsl(215, 25%, 27%)",
          800: "hsl(217, 33%, 17%)",
          900: "hsl(222, 84%, 5%)",
          950: "hsl(229, 84%, 5%)",
          foreground: "hsl(222, 84%, 5%)",
        },

        // Modern Accent Colors
        accent: {
          DEFAULT: "hsl(200, 98%, 39%)",
          50: "hsl(204, 100%, 97%)",
          100: "hsl(204, 94%, 94%)",
          200: "hsl(201, 94%, 86%)",
          300: "hsl(199, 95%, 74%)",
          400: "hsl(198, 93%, 60%)",
          500: "hsl(200, 98%, 39%)",
          600: "hsl(201, 96%, 32%)",
          700: "hsl(201, 90%, 27%)",
          800: "hsl(201, 77%, 24%)",
          900: "hsl(202, 65%, 22%)",
          950: "hsl(204, 80%, 16%)",
          foreground: "hsl(0, 0%, 100%)",
        },

        // Success with Emerald Tones
        success: {
          DEFAULT: "hsl(160, 84%, 39%)",
          50: "hsl(166, 76%, 97%)",
          100: "hsl(167, 85%, 89%)",
          200: "hsl(165, 93%, 78%)",
          300: "hsl(166, 90%, 65%)",
          400: "hsl(167, 83%, 53%)",
          500: "hsl(160, 84%, 39%)",
          600: "hsl(158, 64%, 52%)",
          700: "hsl(158, 75%, 42%)",
          800: "hsl(158, 75%, 35%)",
          900: "hsl(158, 69%, 30%)",
          950: "hsl(159, 84%, 17%)",
          foreground: "hsl(0, 0%, 100%)",
        },

        // Warning with Sophisticated Amber
        warning: {
          DEFAULT: "hsl(43, 96%, 56%)",
          50: "hsl(55, 92%, 95%)",
          100: "hsl(55, 97%, 88%)",
          200: "hsl(53, 98%, 77%)",
          300: "hsl(50, 97%, 64%)",
          400: "hsl(47, 96%, 53%)",
          500: "hsl(43, 96%, 56%)",
          600: "hsl(37, 92%, 50%)",
          700: "hsl(32, 95%, 44%)",
          800: "hsl(28, 87%, 39%)",
          900: "hsl(24, 79%, 37%)",
          950: "hsl(20, 91%, 24%)",
          foreground: "hsl(20, 14%, 4%)",
        },

        // Coral/Rose Accent
        coral: {
          DEFAULT: "hsl(351, 83%, 61%)",
          50: "hsl(357, 100%, 97%)",
          100: "hsl(357, 96%, 94%)",
          200: "hsl(353, 96%, 87%)",
          300: "hsl(352, 95%, 81%)",
          400: "hsl(351, 90%, 71%)",
          500: "hsl(351, 83%, 61%)",
          600: "hsl(347, 77%, 50%)",
          700: "hsl(343, 75%, 42%)",
          800: "hsl(341, 69%, 36%)",
          900: "hsl(341, 60%, 33%)",
          950: "hsl(343, 73%, 17%)",
          foreground: "hsl(0, 0%, 100%)",
        },

        // Purple Accent
        purple: {
          DEFAULT: "hsl(263, 70%, 50%)",
          50: "hsl(270, 100%, 98%)",
          100: "hsl(269, 100%, 95%)",
          200: "hsl(269, 100%, 92%)",
          300: "hsl(268, 100%, 86%)",
          400: "hsl(270, 95%, 75%)",
          500: "hsl(263, 70%, 50%)",
          600: "hsl(262, 83%, 58%)",
          700: "hsl(263, 69%, 47%)",
          800: "hsl(263, 69%, 42%)",
          900: "hsl(264, 67%, 35%)",
          950: "hsl(262, 80%, 24%)",
          foreground: "hsl(0, 0%, 100%)",
        },

        // Enhanced Neutral System
        muted: {
          DEFAULT: "hsl(215, 14%, 97%)",
          foreground: "hsl(217, 15%, 55%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222, 84%, 5%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 72%, 51%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222, 84%, 5%)",
        },
        sidebar: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222, 84%, 5%)",
          primary: "hsl(222, 84%, 5%)",
          "primary-foreground": "hsl(0, 0%, 100%)",
          accent: "hsl(210, 17%, 95%)",
          "accent-foreground": "hsl(222, 84%, 5%)",
          border: "hsl(214, 15%, 91%)",
          ring: "hsl(217, 91%, 60%)",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
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
      keyframes: {
        // Enhanced animation keyframes
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "shimmer": "shimmer 2s infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "bounce-subtle": "bounce-subtle 2s infinite",
        "pulse-soft": "pulse-soft 2s infinite",
        "float": "float 3s ease-in-out infinite"
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'primary-soft': '0 4px 6px -1px rgba(59, 130, 246, 0.1), 0 2px 4px -1px rgba(59, 130, 246, 0.06)',
        'primary-glow': '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)',
        'accent-soft': '0 4px 6px -1px rgba(6, 182, 212, 0.1), 0 2px 4px -1px rgba(6, 182, 212, 0.06)',
        'accent-glow': '0 10px 15px -3px rgba(6, 182, 212, 0.1), 0 4px 6px -2px rgba(6, 182, 212, 0.05)',
        'success-soft': '0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06)',
        'coral-soft': '0 4px 6px -1px rgba(244, 63, 94, 0.1), 0 2px 4px -1px rgba(244, 63, 94, 0.06)',
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neumorphism': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(221, 83%, 53%) 50%, hsl(224, 76%, 48%) 100%)',
        'gradient-primary-soft': 'linear-gradient(135deg, hsl(214, 100%, 97%) 0%, hsl(214, 95%, 93%) 50%, hsl(213, 97%, 87%) 100%)',
        'gradient-accent': 'linear-gradient(135deg, hsl(200, 98%, 39%) 0%, hsl(201, 96%, 32%) 50%, hsl(201, 90%, 27%) 100%)',
        'gradient-success': 'linear-gradient(135deg, hsl(160, 84%, 39%) 0%, hsl(158, 64%, 52%) 50%, hsl(158, 75%, 42%) 100%)',
        'gradient-coral': 'linear-gradient(135deg, hsl(351, 83%, 61%) 0%, hsl(347, 77%, 50%) 50%, hsl(343, 75%, 42%) 100%)',
        'gradient-purple': 'linear-gradient(135deg, hsl(263, 70%, 50%) 0%, hsl(262, 83%, 58%) 50%, hsl(263, 69%, 47%) 100%)',
        'gradient-hero': 'linear-gradient(135deg, hsl(222, 84%, 5%) 0%, hsl(217, 91%, 60%) 50%, hsl(200, 98%, 39%) 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsl(217, 91%, 60%) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(200, 98%, 39%) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(263, 70%, 50%) 0px, transparent 50%), radial-gradient(at 80% 50%, hsl(351, 83%, 61%) 0px, transparent 50%), radial-gradient(at 0% 100%, hsl(160, 84%, 39%) 0px, transparent 50%), radial-gradient(at 80% 100%, hsl(43, 96%, 56%) 0px, transparent 50%), radial-gradient(at 0% 0%, hsl(263, 70%, 50%) 0px, transparent 50%)'
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
