"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  Search,
  X,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowLeft,
  Building,
} from "lucide-react";
import { INDUSTRIES, SITE_INFO } from "@/data/constants";
import Reveal from "./Reveal";

export default function IndustriesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredIndustries = useMemo(() => {
    return INDUSTRIES.filter((ind) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        ind.title.toLowerCase().includes(q) ||
        ind.tagline.toLowerCase().includes(q) ||
        ind.desc.toLowerCase().includes(q) ||
        ind.tools?.some((t) => t.toLowerCase().includes(q)) ||
        ind.useCases?.some((u) => u.toLowerCase().includes(q));

      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <>
      {/* Breadcrumb / Page Header */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-12 2xl:px-20 bg-gradient-to-b from-panel2/70 via-base to-base border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-muted">
            <Link href="/" className="hover:text-gold transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#1a1611]">Industries &amp; Verticals</span>
          </nav>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-[#1a1611] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="px-4 sm:px-6 lg:px-12 2xl:px-20 py-12 sm:py-16 relative overflow-hidden">
        {/* Ambient Theme Background Glows */}
        <div className="pointer-events-none absolute top-10 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl float-slow" />
        <div className="pointer-events-none absolute bottom-20 left-0 w-96 h-96 bg-teal-200/15 rounded-full blur-3xl float-slow-delay" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Title Block */}
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Domain Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight leading-tight">
              Domain-Specific Engineering for{" "}
              <span className="text-gold shimmer-text">Modern Businesses</span>
            </h1>
            <p className="text-muted text-base sm:text-lg mt-4 leading-relaxed">
              We design, build, and scale custom web platforms, mobile apps, and backend APIs engineered around the exact compliance, data models, and user workflows of your industry.
            </p>
          </div>

          {/* Filter & Live Search Bar */}
          <div className="bg-panel/90 backdrop-blur-md border border-amber-900/15 rounded-3xl p-4 sm:p-5 mb-10 shadow-lg shadow-amber-950/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Live Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by industry, keyword, or tech..."
                className="w-full pl-9 pr-8 py-2.5 rounded-full bg-base border border-amber-900/15 text-xs text-[#1a1611] placeholder:text-muted/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-[#1a1611] transition"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Stat Pill */}
            <div className="flex items-center gap-3 text-xs font-semibold text-muted">
              <span>Showing:</span>
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 font-bold">
                {filteredIndustries.length} of {INDUSTRIES.length} Industry Verticals
              </span>
            </div>
          </div>

          {/* Empty Search State */}
          {filteredIndustries.length === 0 && (
            <div className="bg-panel border border-amber-900/15 rounded-3xl p-12 text-center max-w-xl mx-auto shadow-sm my-8">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-2xl mx-auto mb-4">
                🔍
              </div>
              <h3 className="text-lg font-display font-bold text-[#1a1611] mb-2">
                No matching industries found
              </h3>
              <p className="text-muted text-xs sm:text-sm mb-6">
                No industry matched &ldquo;{searchQuery}&rdquo;. Try adjusting your search query or reset to view all verticals.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-5 py-2.5 rounded-full bg-gold text-ink text-xs font-bold hover:bg-goldlight transition btn-pop cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Full Grid of Industries */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredIndustries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.slug} delay={(i % 3) * 60}>
                  <Link
                    href={`/industry/${ind.slug}`}
                    className="group bg-panel border border-amber-900/15 rounded-3xl overflow-hidden flex flex-col h-full shadow-lg shadow-amber-950/5 hover:border-gold/50 hover:shadow-2xl transition-all duration-300 tilt-card"
                  >
                    {/* Visual Banner */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-ink img-zoom-wrap">
                      <img
                        src={ind.image}
                        alt={`${ind.title} engineering solutions`}
                        className="w-full h-full object-cover img-zoom transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />

                      {/* Icon Badge */}
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
                      <h2 className="text-xl font-display font-bold text-[#1a1611] group-hover:text-gold transition leading-snug">
                        {ind.title}
                      </h2>

                      <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 mb-4 flex-1 line-clamp-3">
                        {ind.desc}
                      </p>

                      {/* Solutions Bullet Points */}
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

                      {/* Tools & Tech Chips */}
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
                          <span>Explore Full Blueprint</span>
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

          {/* Bottom Consultation Banner */}
          <Reveal className="mt-16 bg-gradient-to-br from-panel via-panel2 to-panel border border-amber-900/15 rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-amber-950/5 relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mx-auto mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1611] mb-3">
                Don&apos;t see your specific industry or model listed?
              </h3>
              <p className="text-muted text-sm sm:text-base mb-8 leading-relaxed">
                We engineer bespoke web applications, APIs, and mobile systems for emerging industries, hybrid business models, and complex SaaS products. Tell us about your operational roadmap.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#contact"
                  className="px-7 py-3.5 rounded-full bg-gold text-ink text-sm font-bold hover:bg-goldlight transition btn-pop shadow-md shadow-gold/25"
                >
                  Schedule an Architecture Call →
                </Link>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="px-7 py-3.5 rounded-full bg-base border border-amber-900/15 text-[#1a1611] text-sm font-semibold hover:border-gold hover:text-gold transition"
                >
                  Email Our Tech Lead
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
