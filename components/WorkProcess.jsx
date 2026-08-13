"use client";

import { useState } from "react";
import {
  Sparkles,
  Lightbulb,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Idea",
    subtitle: "Discovery & Scope",
    desc: "Understanding your vision, mapping features & architecture.",
    icon: Lightbulb,
    badge: "Stage 01",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "UI/UX & Wireframes",
    desc: "Crafting intuitive, pixel-perfect user interfaces in Figma.",
    icon: Palette,
    badge: "Stage 02",
  },
  {
    number: "03",
    title: "Development",
    subtitle: "High-Speed Sprints",
    desc: "Writing clean frontend code & secure, scalable backend APIs.",
    icon: Code2,
    badge: "Stage 03",
  },
  {
    number: "04",
    title: "Test",
    subtitle: "QA & Performance",
    desc: "Rigorously testing speed, security & cross-device compatibility.",
    icon: ShieldCheck,
    badge: "Stage 04",
  },
  {
    number: "05",
    title: "Go Live",
    subtitle: "Launch & Scale",
    desc: "Deploying to production cloud servers with ongoing support.",
    icon: Rocket,
    badge: "Stage 05",
  },
];

export default function WorkProcess() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="process" className="relative py-24 px-6 sm:px-10 lg:px-16 2xl:px-24 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05. Our Work Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight leading-tight">
            Simple, Transparent <br className="hidden sm:inline" />
            <span className="text-gold shimmer-text">& Battle-Tested</span> Flow
          </h2>
          <p className="text-muted text-base sm:text-lg mt-3 leading-relaxed">
            From initial concept to live production in 5 seamless steps.
          </p>
        </Reveal>

        {/* 5-Step Horizontal Grid Layout */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Connector Ribbon Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20 z-0 pointer-events-none" />

          {PROCESS_STEPS.map((s, index) => {
            const Icon = s.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Reveal key={s.number} delay={index * 80}>
                <div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative bg-panel border rounded-3xl p-6 flex flex-col h-full transition-all duration-300 z-10 tilt-card ${
                    isHovered
                      ? "border-gold shadow-2xl shadow-gold/15 -translate-y-2"
                      : "border-amber-900/15 shadow-xl shadow-amber-950/5"
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-colors duration-300 ${
                        isHovered ? "bg-gold text-ink shadow-lg shadow-gold/30" : "bg-gold/15 text-gold"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-display font-extrabold text-gold/30">
                      {s.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-display font-bold text-[#1a1611]">
                    {s.title}
                  </h3>
                  <p className="text-xs font-semibold text-gold mt-0.5 mb-3">
                    {s.subtitle}
                  </p>

                  {/* Minimal Description */}
                  <p className="text-muted text-xs leading-relaxed flex-1">
                    {s.desc}
                  </p>

                  {/* Bottom Minimal Check Indicator */}
                  <div className="pt-4 mt-4 border-t border-amber-900/10 flex items-center gap-1.5 text-[11px] font-semibold text-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{s.badge}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Action Button */}
        <Reveal className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight transition btn-pop shadow-lg shadow-gold/20 text-sm"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
