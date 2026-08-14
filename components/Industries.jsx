"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/data/constants";
import Reveal from "./Reveal";

export default function Industries() {
  // Showcase top 6 featured industry verticals on the homepage
  const featured = INDUSTRIES.slice(0, 6);

  return (
    <section id="industries" className="relative py-24 px-4 sm:px-6 lg:px-12 2xl:px-20 overflow-hidden">
      {/* Subtle Ambient Theme Glows */}
      <div className="pointer-events-none absolute top-1/3 -left-20 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl float-slow" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl float-slow-delay" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <Reveal className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05. Industry Verticals &amp; Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight leading-tight">
            Engineered for Your Domain.{" "}
            <span className="text-gold shimmer-text">Tailored for Scale.</span>
          </h2>
          <p className="text-muted text-base sm:text-lg mt-4 leading-relaxed">
            From high-throughput ordering ecosystems to encrypted patient records, we architect software tuned to the compliance, speed, and operational demands of your specific industry.
          </p>

          {/* Quick Domain Trust Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto">
            <div className="bg-panel border border-amber-900/10 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-display font-extrabold text-[#1a1611]">
                9 Verticals
              </div>
              <div className="text-xs text-muted font-medium mt-0.5">Specialized Solutions</div>
            </div>
            <div className="bg-panel border border-amber-900/10 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-display font-extrabold text-gold">
                100%
              </div>
              <div className="text-xs text-muted font-medium mt-0.5">Role-Based Security</div>
            </div>
            <div className="bg-panel border border-amber-900/10 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-display font-extrabold text-[#1a1611]">
                Real-Time
              </div>
              <div className="text-xs text-muted font-medium mt-0.5">Socket &amp; Cloud Sync</div>
            </div>
            <div className="bg-panel border border-amber-900/10 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
              <div className="text-xl sm:text-2xl font-display font-extrabold text-gold">
                &lt; 24h
              </div>
              <div className="text-xs text-muted font-medium mt-0.5">Discovery SLA</div>
            </div>
          </div>
        </Reveal>

        {/* Featured Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/industry/${ind.slug}`}
                  className="group bg-panel border border-amber-900/15 rounded-3xl overflow-hidden flex flex-col h-full shadow-lg shadow-amber-950/5 hover:border-gold/50 hover:shadow-2xl transition-all duration-300 tilt-card"
                >
                  {/* Visual Image Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-ink img-zoom-wrap">
                    <img
                      src={ind.image}
                      alt={`${ind.title} software solutions`}
                      className="w-full h-full object-cover img-zoom transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />

                    {/* Floating Icon Badge */}
                    <div className="absolute top-3.5 right-3.5 w-11 h-11 rounded-2xl bg-gold text-ink flex items-center justify-center shadow-md shadow-gold/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Tagline Pill */}
                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <span className="inline-block px-3 py-1 rounded-xl bg-ink/85 backdrop-blur-md text-gold text-xs font-semibold border border-gold/30 truncate max-w-full">
                        {ind.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#1a1611] group-hover:text-gold transition leading-snug">
                      {ind.title}
                    </h3>

                    <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 mb-4 flex-1 line-clamp-3">
                      {ind.desc}
                    </p>

                    {/* Top Capability Highlights */}
                    {ind.solutions && ind.solutions.length > 0 && (
                      <div className="space-y-1.5 mb-5 pt-3 border-t border-amber-900/10">
                        {ind.solutions.slice(0, 2).map((sol, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#2b241c] font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{sol}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech / Tools Chips */}
                    {ind.tools && ind.tools.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {ind.tools.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2.5 py-0.5 rounded-md bg-base text-[#1a1611] border border-amber-900/10 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                        {ind.tools.length > 3 && (
                          <span className="text-[11px] px-2 py-0.5 rounded-md bg-gold/10 text-gold border border-gold/20 font-semibold">
                            +{ind.tools.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Action Footer */}
                    <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a1611] group-hover:text-gold transition">
                        <span>Explore Solutions</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="w-7 h-7 rounded-full bg-base border border-amber-900/15 flex items-center justify-center text-muted group-hover:bg-gold group-hover:text-ink transition shadow-2xs">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* View All & Custom Request Banner */}
        <Reveal className="mt-14 text-center">
          <div className="bg-gradient-to-r from-panel via-panel2 to-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md shadow-amber-950/5">
            <div className="text-left max-w-xl">
              <h4 className="text-lg font-display font-bold text-[#1a1611]">
                Looking for architecture specific to your business model?
              </h4>
              <p className="text-xs sm:text-sm text-muted mt-1">
                Explore all 9 industry verticals or talk directly with our lead architects to scope your roadmap.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/industries"
                className="px-5 py-2.5 rounded-full bg-gold text-ink text-xs font-bold hover:bg-goldlight transition btn-pop shadow-md shadow-gold/20"
              >
                View All 9 Industries →
              </Link>
              <Link
                href="/#contact"
                className="px-5 py-2.5 rounded-full bg-base border border-amber-900/15 text-[#1a1611] text-xs font-semibold hover:border-gold hover:text-gold transition"
              >
                Talk with an Architect
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
