"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Star,
  Layers,
  ArrowRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PORTFOLIO_DETAILS } from "@/data/constants";

export default function PortfolioModal({ item, onClose, onPrev, onNext, onOpenEnquiry }) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    setSlideIdx(0);
  }, [item?.id]);

  if (!item) return null;

  const detail = PORTFOLIO_DETAILS[item.id] || {
    id: item.id,
    title: item.title,
    cat: item.cat,
    categoryLabel: item.categoryLabel || item.cat,
    client: item.clientType || "Client Project",
    date: item.year || "2024 – 2025",
    url: item.demoUrl || "https://stackwisesolutions.com",
    github: item.githubUrl || "https://github.com",
    overview: item.desc,
    description: item.desc ? [item.desc] : [],
    gallery: item.image ? [item.image] : [],
    stack: item.stack || [],
    metrics: item.metrics || [],
  };

  const galleryImages =
    detail.gallery && detail.gallery.length > 0
      ? detail.gallery
      : item.image
      ? [item.image]
      : [];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0b0d10]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 lg:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-panel border border-amber-900/15 rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl shadow-black/40 relative my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-30 bg-panel/95 backdrop-blur-md border-b border-amber-900/10 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-lg shrink-0">
              {item.emoji || "✨"}
            </span>
            <div className="min-w-0">
              <span className="text-xs font-bold text-gold uppercase tracking-wider block truncate">
                {detail.categoryLabel || item.cat}
              </span>
              <h2 className="text-lg sm:text-xl font-display font-bold text-[#1a1611] truncate">
                {item.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Quick Prev / Next */}
            <div className="hidden sm:flex items-center bg-base border border-amber-900/15 rounded-full p-1 shadow-xs">
              <button
                onClick={onPrev}
                title="Previous Project (←)"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#1a1611] hover:bg-gold hover:text-ink transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onNext}
                title="Next Project (→)"
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#1a1611] hover:bg-gold hover:text-ink transition cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              title="Close Case Study (Esc)"
              className="w-9 h-9 rounded-full bg-base border border-amber-900/15 text-[#1a1611] hover:bg-gold hover:text-ink flex items-center justify-center transition shadow-xs cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Grid */}
        <div className="grid lg:grid-cols-12 gap-0 flex-1">
          {/* Left Column: Visual Showcase & Key Metrics (5 cols) */}
          <div className="lg:col-span-5 bg-panel2/60 border-b lg:border-b-0 lg:border-r border-amber-900/10 p-6 sm:p-8 flex flex-col">
            {/* Active Big Image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-ink shadow-lg border border-amber-900/10 mb-4 group">
              <Image
                src={galleryImages[slideIdx] || item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Tag Overlays */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-2.5 py-1 rounded-md bg-ink/80 backdrop-blur-md text-gold text-xs font-semibold border border-gold/30">
                  {item.badge || "Featured"}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium truncate drop-shadow-md">
                {item.tagline || item.title}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2.5 mb-6 overflow-x-auto pb-1">
                {galleryImages.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIdx(i)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition shrink-0 cursor-pointer ${
                      i === slideIdx
                        ? "border-gold shadow-md shadow-gold/20 scale-105"
                        : "border-amber-900/15 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="64px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Key Metrics / Highlights Grid */}
            {detail.metrics && detail.metrics.length > 0 && (
              <div className="bg-panel rounded-2xl p-4 border border-amber-900/10 mb-6 shadow-xs">
                <div className="text-xs font-bold text-[#1a1611] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-gold" />
                  <span>Key Impact Metrics</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {detail.metrics.map((m, idx) => (
                    <div key={idx} className="bg-base/70 rounded-xl p-2.5 border border-amber-900/10">
                      <div className="text-base sm:text-lg font-display font-extrabold text-gold">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-muted font-medium mt-0.5 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Live Action Buttons */}
            <div className="space-y-2.5 mt-auto">
              {detail.url && (
                <a
                  href={detail.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold text-ink text-sm font-bold hover:bg-goldlight transition btn-pop shadow-md shadow-gold/20"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {detail.github && (
                <a
                  href={detail.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-base border border-amber-900/15 text-[#1a1611] text-xs font-semibold hover:border-gold hover:text-gold transition"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>Inspect Code Architecture</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Case Study Narrative & Deep Dive (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col space-y-6">
            {/* Meta Information Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-base/60 rounded-2xl p-3.5 border border-amber-900/10">
              <div>
                <span className="text-[11px] text-muted font-medium block">Category</span>
                <span className="text-xs font-bold text-[#1a1611] truncate block mt-0.5">
                  {detail.categoryLabel || item.cat}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-muted font-medium block">Client</span>
                <span className="text-xs font-bold text-[#1a1611] truncate block mt-0.5">
                  {detail.client || "Enterprise Client"}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-muted font-medium block">Timeline</span>
                <span className="text-xs font-bold text-[#1a1611] truncate block mt-0.5">
                  {detail.date || "2024 – 2025"}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-muted font-medium block">Role</span>
                <span className="text-xs font-bold text-gold truncate block mt-0.5">
                  Lead Engineering
                </span>
              </div>
            </div>

            {/* Executive Overview */}
            <div>
              <h3 className="text-base font-display font-bold text-[#1a1611] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Executive Overview</span>
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {detail.overview || item.desc}
              </p>
            </div>

            {/* The Challenge vs The Solution */}
            {(detail.challenge || detail.solution) && (
              <div className="grid sm:grid-cols-2 gap-4">
                {detail.challenge && (
                  <div className="bg-amber-900/5 rounded-2xl p-4 border border-amber-900/10">
                    <div className="text-xs font-bold text-[#1a1611] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-muted text-xs leading-relaxed">
                      {detail.challenge}
                    </p>
                  </div>
                )}
                {detail.solution && (
                  <div className="bg-gold/10 rounded-2xl p-4 border border-gold/20">
                    <div className="text-xs font-bold text-gold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-gold inline-block" />
                      <span>The Engineered Solution</span>
                    </div>
                    <p className="text-[#1a1611] text-xs leading-relaxed font-medium">
                      {detail.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Deliverables & Technical Milestones */}
            {detail.description && (
              <div>
                <h4 className="text-sm font-display font-bold text-[#1a1611] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span>Key Deliverables & Architectural Milestones</span>
                </h4>
                <ul className="space-y-2.5">
                  {(Array.isArray(detail.description) ? detail.description : [detail.description]).map(
                    (point, i) => (
                      <li
                        key={i}
                        className="text-muted text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 bg-panel2/40 p-2.5 rounded-xl border border-amber-900/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-[#2b241c] font-medium">{point}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* Tech Stack Badges */}
            {detail.stack && detail.stack.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-gold" />
                  <span>Technologies & Infrastructure</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {detail.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-base text-[#1a1611] border border-amber-900/15 font-medium shadow-2xs hover:border-gold transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Client Testimonial Box */}
            {detail.testimonial && (
              <div className="bg-panel2/80 rounded-2xl p-4 sm:p-5 border border-amber-900/15 relative">
                <div className="flex items-center gap-1 text-gold mb-2">
                  {[...Array(detail.testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#1a1611] italic font-medium leading-relaxed mb-3">
                  &ldquo;{detail.testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gold text-ink font-bold flex items-center justify-center text-xs">
                    {detail.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1a1611]">
                      {detail.testimonial.author}
                    </div>
                    <div className="text-[11px] text-muted">
                      {detail.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom CTA Banner */}
            <div className="pt-4 border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
              <div>
                <h5 className="text-sm font-bold text-[#1a1611]">
                  Need a similar high-performance build?
                </h5>
                <p className="text-xs text-muted">
                  Let&apos;s engineer your product from architecture to deployment.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  if (onOpenEnquiry) {
                    onOpenEnquiry();
                  } else {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white hover:bg-gold hover:text-ink text-xs font-bold transition shrink-0 btn-pop cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
