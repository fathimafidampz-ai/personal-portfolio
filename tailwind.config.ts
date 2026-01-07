import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      // 🎨 PROFESSIONAL COLOR PALETTE
      // Sophisticated Slate + Warm Amber (Not typical AI colors!)
      colors: {
        // Primary: Deep sophisticated slate tones
        primary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",  // Main primary
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Accent: Warm amber/gold for premium feel
        accent: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",  // Main accent
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        // Secondary: Subtle teal for tech elements
        secondary: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
      },
      
      // Custom animations
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "slide-left": "slideLeft 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      
      keyframes: {
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  slideUp: {
    "0%": { transform: "translateY(30px)", opacity: "0" },
    "100%": { transform: "translateY(0)", opacity: "1" },
  },
  slideDown: {
    "0%": { transform: "translateY(-30px)", opacity: "0" },
    "100%": { transform: "translateY(0)", opacity: "1" },
  },
  slideLeft: {
    "0%": { transform: "translateX(30px)", opacity: "0" },
    "100%": { transform: "translateX(0)", opacity: "1" },
  },
  slideRight: {
    "0%": { transform: "translateX(-30px)", opacity: "0" },
    "100%": { transform: "translateX(0)", opacity: "1" },
  },
  scaleIn: {
    "0%": { transform: "scale(0.9)", opacity: "0" },
    "100%": { transform: "scale(1)", opacity: "1" },
  },
  glow: {
    "0%": { boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)" },
    "100%": { boxShadow: "0 0 40px rgba(245, 158, 11, 0.6)" },
  },
  float: {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-20px)" },
  },
},
      
      backdropBlur: {
        xs: "2px",
      },
      
      // Professional typography
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  
  plugins: [],
};

export default config;