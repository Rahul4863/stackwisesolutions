"use client";

import { useEffect, useState } from "react";

/**
 * ThemeToggle
 * Flips the `light` class on <html>. Every color in the app is wired
 * to CSS variables (see globals.css) so this one class swap re-themes
 * the entire site — no per-component dark:/light: classes needed.
 */
export default function ThemeToggle({ className = "" }) {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch (e) {}
  };

  // Avoid a mismatched icon flashing before we know the real theme.
  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className={`w-10 h-10 rounded-full bg-panel2 border border-white/10 ${className}`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className={`relative w-10 h-10 rounded-full bg-panel2 border border-white/10 text-gold flex items-center justify-center overflow-hidden transition hover:border-gold/40 ${className}`}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isLight ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        }`}
      >
        {/* Moon — shown in dark mode */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          isLight ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
        }`}
      >
        {/* Sun — shown in light mode */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  );
}
