"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if element is already inside or near viewport on mount
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
      setVisible(true);
      if (once) return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.05, rootMargin: "60px 0px 0px 0px" }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  const hiddenTransform =
    {
      up: "translate-y-6 sm:translate-y-8",
      down: "-translate-y-6 sm:-translate-y-8",
      left: "translate-x-4 sm:translate-x-8",
      right: "-translate-x-4 sm:-translate-x-8",
      scale: "scale-95",
      none: "",
    }[direction] || "translate-y-6 sm:translate-y-8";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
