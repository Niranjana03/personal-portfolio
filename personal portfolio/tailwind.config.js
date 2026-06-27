/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0a0a0f",
        surface: "#0f0f1a",
        card: "#13131f",
        border: "#1e1e30",
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        fuchsia: {
          400: "#e879f9",
          500: "#d946ef",
        },
        muted: "#6b7280",
        subtle: "#9ca3af",
        bright: "#f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.15)",
        "glow-sm": "0 0 20px rgba(124, 58, 237, 0.1)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(124,58,237,0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "violet-gradient": "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(168,85,247,0.04) 100%)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        typewriter: "typewriter 2s steps(20) forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
