"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PORTFOLIO_DETAILS } from "@/data/constants";

export default function PortfolioModal({ item, onClose, onPrev, onNext }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const detail = PORTFOLIO_DETAILS[item.id] || {};
  const emojiSlides = detail.images || [item.emoji];
  const slides = [
    { type: "image", src: item.image, label: "Cover" },
    ...emojiSlides.map((e) => ({ type: "emoji", value: e })),
  ];

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  useEffect(() => setSlideIdx(0), [item.id]);

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-panel rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center z-10"
          onClick={onClose}
        >
          ✕
        </button>
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl z-10"
          onClick={onPrev}
        >
          ‹
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl z-10"
          onClick={onNext}
        >
          ›
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 flex flex-col items-center bg-panel2">
            <div className="relative w-full aspect-square rounded-xl bg-ink overflow-hidden mb-4 flex items-center justify-center text-7xl">
              {slides[slideIdx].type === "image" ? (
                <Image
                  src={slides[slideIdx].src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover"
                />
              ) : (
                slides[slideIdx].value
              )}
            </div>
            <div className="flex gap-2 mb-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIdx(i)}
                  className={`w-2 h-2 rounded-full ${i === slideIdx ? "bg-gold" : "bg-white/20"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIdx(i)}
                  className={`relative w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center text-lg border ${
                    i === slideIdx ? "border-gold bg-gold/10" : "border-white/10"
                  }`}
                >
                  {s.type === "image" ? (
                    <Image src={s.src} alt="" fill sizes="40px" className="object-cover" />
                  ) : (
                    s.value
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="bg-panel2 rounded-xl p-5 mb-6 border border-white/5">
              <h3 className="text-[#1a1611] font-display font-bold mb-3">Project Information</h3>
              <div className="border-t border-white/10 mb-3" />
              {[
                ["Category", item.cat.charAt(0).toUpperCase() + item.cat.slice(1)],
                ["Client", detail.client || "—"],
                ["Project date", detail.date || "—"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm py-1.5">
                  <span className="text-muted">{k}</span>
                  <span className="text-[#1a1611] font-bold">{v}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-display font-bold text-[#1a1611] mb-3">{detail.title}</h2>
            <ul className="space-y-2 mb-4">
              {(Array.isArray(detail.description) ? detail.description : [detail.description]).map(
                (point, i) => (
                  <li key={i} className="text-muted text-sm leading-relaxed flex gap-2">
                    <span className="text-gold mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                )
              )}
            </ul>

            {detail.stack && (
              <div className="flex flex-wrap gap-2 mb-6">
                {detail.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <button className="px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition">
              View Live Project →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
