/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // "ink" stays a fixed near-black in both themes — it's used as
        // button text on gold and as small deliberate dark accents, and
        // needs to stay constant for contrast regardless of theme.
        ink: "#0b0d10",
        // Everything below is theme-reactive via CSS variables (see
        // globals.css :root / html.light), so existing utility classes
        // like bg-panel, text-white, border-white/10 adapt automatically.
        base: "rgb(var(--color-base) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        panel2: "rgb(var(--color-panel2) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
        goldlight: "rgb(var(--color-goldlight) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        white: "rgb(var(--color-white) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
