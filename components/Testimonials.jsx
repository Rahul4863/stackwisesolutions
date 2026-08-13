"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaCheckCircle,
  FaQuoteLeft,
  FaQuoteRight,
  FaThLarge,
  FaSlidersH,
  FaArrowRight,
} from "react-icons/fa";
import { Sparkles, ShieldCheck, Award } from "lucide-react";
import { TESTIMONIALS } from "@/data/constants";
import Reveal from "./Reveal";

const TRUST_STATS = [
  { value: "4.9 / 5.0", label: "Average Client Rating", icon: FaStar },
  { value: "100%", label: "On-Time Delivery", icon: ShieldCheck },
  { value: "15+", label: "Production Apps Live", icon: Award },
  { value: "98%", label: "Client Retention Rate", icon: FaCheckCircle },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewMode, setViewMode] = useState("spotlight"); // "spotlight" | "grid"
  const [progress, setProgress] = useState(0);

  // Auto-play carousel logic with smooth progress timer
  useEffect(() => {
    if (isPaused || viewMode === "grid") return;

    const stepMs = 50;
    const totalMs = 6000;
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((c) => (c + 1) % TESTIMONIALS.length);
          return 0;
        }
        return prev + (stepMs / totalMs) * 100;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isPaused, viewMode, current]);

  const handleSelect = (index) => {
    setCurrent(index);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setProgress(0);
  };

  const active = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 2xl:px-24 relative overflow-hidden bg-gradient-to-b from-[#f7f3eb] via-[#f4eee2] to-[#f0e8d7] text-[#1a1611] font-sans"
    >
      {/* Decorative Oversized Background Watermark */}
      <div className="absolute -top-10 right-4 text-[180px] sm:text-[280px] font-display text-amber-900/[0.03] leading-none select-none pointer-events-none font-bold">
        “
      </div>

      {/* Decorative Radial Background Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Section Title */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-600/20 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>05. Testimonials &amp; Trust</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1a1611] tracking-tight leading-tight">
            Trusted by Founders &amp; <span className="text-amber-700 underline decoration-amber-400/50 decoration-wavy decoration-2">Engineering Leaders</span>
          </h2>

          <p className="text-muted text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Real feedback from clients, product managers, and technology leaders who built scalable digital products with Stackwise Solutions.
          </p>
        </Reveal>
      </div>

      {/* Trust Stats Strip */}
      <Reveal delay={100} className="relative z-10 max-w-6xl mx-auto mb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-900/10 shadow-sm shadow-amber-900/5">
          {TRUST_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#fcf9f3] border border-amber-900/5 hover:border-amber-600/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100/80 flex items-center justify-center text-amber-700 shrink-0">
                  <Icon className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-display font-bold text-stone-900">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-stone-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* View Switcher Controls (Spotlight vs Grid) */}
      <div className="relative z-10 flex items-center justify-between max-w-6xl mx-auto mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
          <span>Viewing {TESTIMONIALS.length} Verified Reviews</span>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-amber-900/10 shadow-2xs">
          <button
            onClick={() => setViewMode("spotlight")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              viewMode === "spotlight"
                ? "bg-amber-700 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            }`}
          >
            <FaSlidersH size={11} />
            <span>Spotlight</span>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              viewMode === "grid"
                ? "bg-amber-700 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            }`}
          >
            <FaThLarge size={11} />
            <span>All Cards</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MODE 1: SPOTLIGHT INTERACTIVE SHOWCASE                                  */}
      {/* ========================================================================= */}
      {viewMode === "spotlight" && (
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Active Testimonial Card (lg:col-span-7) */}
          <div
            className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-[#fcfaf4] to-[#f6eee0] border border-amber-900/15 shadow-xl shadow-amber-900/5 relative overflow-hidden group min-h-[420px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Accent Gradient Border Glow */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-amber-700 to-amber-500" />
            
            {/* Corner Quote Watermark */}
            <FaQuoteRight className="absolute -bottom-6 -right-6 text-9xl text-amber-900/[0.04] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Header Badges & Rating */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-900/10 pb-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: active.rating || 5 }).map((_, idx) => (
                    <FaStar key={idx} className="w-4 h-4 text-amber-500 drop-shadow-xs" />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-stone-800">5.0 / 5.0</span>
                </div>

                <div className="flex items-center gap-2">
                  {active.project && (
                    <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-200">
                      {active.project}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                    <FaCheckCircle size={11} className="text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>

              {/* Highlight Tag */}
              {active.highlight && (
                <div className="inline-block text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/70">
                  ✨ Key Outcome: &quot;{active.highlight}&quot;
                </div>
              )}

              {/* Quote Text */}
              <div className="relative">
                <FaQuoteLeft className="text-amber-600/30 text-3xl mb-2" />
                <p
                  key={current}
                  className="text-stone-800 text-lg sm:text-xl font-medium leading-relaxed animate-fadeIn"
                >
                  &quot;{active.text}&quot;
                </p>
              </div>
            </div>

            {/* Footer Author Info & Controls */}
            <div className="pt-6 mt-6 border-t border-amber-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-500/30 shadow-sm bg-gradient-to-br from-amber-100 to-amber-200">
                  {active.avatar ? (
                    <Image
                      src={active.avatar}
                      alt={active.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-display font-bold text-amber-900 text-lg">
                      {active.initials}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-stone-900 font-display font-bold text-base sm:text-lg">
                    {active.name}
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    {active.role}
                  </p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
                  aria-label={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
                  className="w-10 h-10 rounded-xl bg-white border border-amber-900/15 flex items-center justify-center text-stone-700 hover:bg-amber-700 hover:text-white transition shadow-2xs"
                >
                  {isPaused ? <FaPlay size={11} /> : <FaPause size={11} />}
                </button>
                <button
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-xl bg-white border border-amber-900/15 flex items-center justify-center text-stone-700 hover:bg-amber-700 hover:text-white transition shadow-2xs"
                >
                  <FaChevronLeft size={12} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-xl bg-white border border-amber-900/15 flex items-center justify-center text-stone-700 hover:bg-amber-700 hover:text-white transition shadow-2xs"
                >
                  <FaChevronRight size={12} />
                </button>
              </div>
            </div>

            {/* Smooth Progress Bar */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-amber-900/10">
              <div
                className="h-full bg-amber-700 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Side Selector List (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
              Select Client Review
            </span>

            <div className="space-y-2.5 flex-1 flex flex-col justify-between">
              {TESTIMONIALS.map((item, idx) => {
                const isSelected = idx === current;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 group ${
                      isSelected
                        ? "bg-white border-amber-600 shadow-md ring-2 ring-amber-600/20 translate-x-1"
                        : "bg-white/60 border-amber-900/10 hover:bg-white hover:border-amber-600/40"
                    }`}
                  >
                    <div
                      className={`relative w-12 h-12 rounded-xl overflow-hidden shrink-0 transition-all duration-300 border ${
                        isSelected
                          ? "border-amber-600 ring-2 ring-amber-500/30 scale-105"
                          : "border-stone-200"
                      }`}
                    >
                      {item.avatar ? (
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-amber-100 flex items-center justify-center font-bold text-amber-900 text-sm">
                          {item.initials}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          className={`text-sm font-bold truncate transition ${
                            isSelected ? "text-amber-800" : "text-stone-900 group-hover:text-amber-800"
                          }`}
                        >
                          {item.name}
                        </h4>
                        <span className="text-[11px] font-semibold text-amber-700 shrink-0">
                          ★★★★★
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 truncate">
                        {item.role}
                      </p>
                      <p className="text-xs text-stone-700 line-clamp-1 italic mt-0.5">
                        &quot;{item.text}&quot;
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: ALL REVIEWS GRID VIEW                                            */}
      {/* ========================================================================= */}
      {viewMode === "grid" && (
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-amber-900/10 shadow-sm hover:shadow-md hover:border-amber-600/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 text-xs gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  {item.project && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-amber-100 text-amber-900 border border-amber-200 truncate max-w-[140px]">
                      {item.project}
                    </span>
                  )}
                </div>

                <p className="text-stone-700 text-sm leading-relaxed italic">
                  &quot;{item.text}&quot;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 mt-6 border-t border-stone-100">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-200">
                  {item.avatar ? (
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-amber-100 flex items-center justify-center font-bold text-amber-900 text-xs">
                      {item.initials}
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-stone-900 truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-stone-500 truncate">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="relative z-10 max-w-4xl mx-auto mt-16 text-center pt-8 border-t border-amber-900/10">
        <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/90 border border-amber-900/10 shadow-sm w-full">
          <div className="text-left">
            <h3 className="text-lg font-display font-bold text-stone-900">
              Want to achieve similar results for your business?
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Let&apos;s discuss your project requirements and build a high-performance solution.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold transition shadow-md shrink-0"
          >
            <span>Start a Conversation</span>
            <FaArrowRight size={11} />
          </Link>
        </div>
      </div>

    </section>
  );
}
