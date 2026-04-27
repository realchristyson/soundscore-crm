import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "meta-blue": "#0866FF",
        "meta-blue-bright": "#1E88FF",
        "money-green": "#00C853",
        "money-green-bright": "#00FF7F",
        "near-black": "#0A0A0A",
        "off-white": "#F5F5F5",
        "gray-text": "#A0A0A0",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-green": "0 0 60px 0 rgba(0,255,127,0.4)",
        "glow-blue": "0 0 60px 0 rgba(8,102,255,0.4)",
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        "drift": "drift 14s ease-in-out infinite",
        "drift-slow": "drift 22s ease-in-out infinite",
        "rise": "rise 18s linear infinite",
        "wave": "wave 1.4s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 0 rgba(0,255,127,0.5), 0 0 60px 0 rgba(0,200,83,0.35)",
          },
          "50%": {
            boxShadow:
              "0 0 0 14px rgba(0,255,127,0), 0 0 100px 8px rgba(0,200,83,0.55)",
          },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(40px,-30px,0) scale(1.08)" },
        },
        rise: {
          "0%": { transform: "translate3d(0,110vh,0)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.6" },
          "100%": { transform: "translate3d(20px,-10vh,0)", opacity: "0" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
