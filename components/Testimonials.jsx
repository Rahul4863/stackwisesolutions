"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/constants";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (i) => {
    setCurrent(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 9000);
  };

  const t = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="py-24 px-6 sm:px-10 lg:px-16 2xl:px-24 relative overflow-hidden"
    >
      {/* Decorative oversized quote mark in the background */}
      <span className="absolute -top-6 left-2 sm:left-8 text-[160px] sm:text-[240px] font-display text-gold/5 leading-none select-none pointer-events-none">
        “
      </span>

      <Reveal className="mb-12 text-center relative z-10">
        <div className="text-gold text-sm font-medium mb-2">// 05. testimonials</div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">What People Say</h2>
      </Reveal>

      <Reveal direction="scale" delay={100} className="grid lg:grid-cols-[1fr_320px] gap-6 relative z-10">
        {/* Active testimonial */}
        <div className="bg-panel border border-white/5 rounded-2xl p-8 sm:p-12 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-gold text-5xl font-display leading-none">“</div>
              <div className="flex gap-0.5 text-gold text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
            <p
              key={current}
              className="text-white text-xl sm:text-2xl leading-relaxed font-medium animate-[fadeInUp_0.5s_ease-out]"
            >
              {t.text}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
            <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-gradient-to-br from-gold to-goldlight">
              {t.avatar ? (
                <Image src={t.avatar} alt={t.name} fill sizes="56px" className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-ink font-display font-bold text-lg">
                  {t.initials}
                </div>
              )}
            </div>
            <div>
              <h4 className="text-white font-semibold">{t.name}</h4>
              <span className="text-muted text-sm">{t.role}</span>
            </div>
          </div>
        </div>

        {/* Testimonial picker — doubles as navigation */}
        <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`flex items-center gap-3 text-left px-4 py-3 rounded-xl border transition shrink-0 lg:shrink w-56 lg:w-full ${
                i === current
                  ? "bg-gold/10 border-gold/40"
                  : "bg-panel border-white/5 hover:border-white/15"
              }`}
            >
              <div
                className={`relative w-10 h-10 rounded-full overflow-hidden shrink-0 transition ${
                  i === current ? "ring-2 ring-gold" : ""
                }`}
              >
                {item.avatar ? (
                  <Image src={item.avatar} alt={item.name} fill sizes="40px" className="object-cover" />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center font-display font-bold text-sm ${
                      i === current ? "bg-gold text-ink" : "bg-white/10 text-muted"
                    }`}
                  >
                    {item.initials}
                  </div>
                )}
              </div>
              <div className="overflow-hidden">
                <div
                  className={`text-sm font-medium truncate ${
                    i === current ? "text-white" : "text-muted"
                  }`}
                >
                  {item.name}
                </div>
                <div className="text-xs text-muted/70 truncate">{item.role}</div>
              </div>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Autoplay progress indicator */}
      <div className="flex justify-center gap-2 mt-8 relative z-10">
        {TESTIMONIALS.map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-gold" : "w-4 bg-white/15"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
