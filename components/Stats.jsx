"use client";
import {
  Rocket,
  Briefcase,
  Award,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";

const STATS_DATA = [
  {
    num: "3",
    suffix: "+",
    label: "Years of Excellence",
    desc: "Architecting high-performance web & mobile products",
    tag: "⚡ Est. 2023 Studio",
    icon: Rocket,
  },
  {
    num: "15",
    suffix: "+",
    label: "Products Delivered",
    desc: "Production-ready Web, App & Cloud platforms",
    tag: "🚀 100/100 Speed Standard",
    icon: Briefcase,
  },
  {
    num: "99.8",
    suffix: "%",
    label: "Client Satisfaction",
    desc: "Verified reviews, repeat clients & long-term trust",
    tag: "⭐ 4.9/5 Average Rating",
    icon: Award,
  },
  {
    num: "24/7",
    suffix: "",
    label: "Monitoring & SLA Support",
    desc: "Guaranteed sub-24h response & maximum uptime",
    tag: "🛡️ Production Reliability",
    icon: ShieldCheck,
  },
];

function StatCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-amber-900/15 shadow-xl hover:shadow-2xl hover:border-amber-700/40 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-400/20 transition-all duration-500" />

      <div>
        {/* Card Header Badge & Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 stroke-[2.2]" />
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-100/90 text-amber-950 border border-amber-300/60 text-xs font-bold tracking-wide">
            {item.tag}
          </span>
        </div>

        {/* Count Number - 100% Guaranteed Instant High-Contrast Visibility */}
        <div className="text-4xl sm:text-5xl font-display font-black text-[#1a1611] tracking-tight mb-2 flex items-baseline gap-1">
          <span className="text-[#1a1611] font-black text-4xl sm:text-5xl">{item.num}</span>
          {item.suffix && (
            <span className="text-amber-800 font-extrabold text-3xl sm:text-4xl">{item.suffix}</span>
          )}
        </div>

        {/* Label & Description */}
        <h3 className="text-black text-base sm:text-lg mt-4 leading-relaxed font-semibold">
          {item.label}
        </h3>
        <p className="text-xs sm:text-sm text-[#594f42] leading-relaxed font-medium">
          {item.desc}
        </p>
      </div>

      {/* Bottom Progress Bar Strip */}
      <div className="mt-5 pt-4 border-t border-amber-900/10 flex items-center justify-between">
        <div className="w-full bg-amber-900/15 h-2 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-600 to-amber-800 rounded-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-12 2xl:px-20 relative overflow-hidden bg-gradient-to-b from-[#faf7f2] via-[#fffdfa] to-[#f5efe4]"
    >
      {/* Light Ambient Background Lights */}
      <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-amber-200/35 blur-3xl float-slow pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] rounded-full bg-teal-200/25 blur-3xl float-slow-delay pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#b07a29 1px, transparent 1px), linear-gradient(to right, #b07a29 1px, transparent 40px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide shadow-xs backdrop-blur-md mb-3">
            <Sparkles className="w-4 h-4 text-amber-700 animate-pulse" />
            <span>// PROVEN TRACK RECORD & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1a1611] leading-tight">
            Measurable Milestones Driven by <span className="shimmer-text">Engineering Rigor</span>
          </h2>
          <p className="text-black text-base sm:text-lg mt-4 leading-relaxed font-semibold">
            Quantifiable performance metrics achieved across enterprise web applications, mobile platforms, and digital growth campaigns.
          </p>
        </Reveal>

        {/* Unique Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((item, index) => (
            <Reveal key={index} delay={index * 0.1} direction="up">
              <StatCard item={item} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}