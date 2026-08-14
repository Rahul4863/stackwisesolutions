"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Zap,
  TrendingUp,
  Layers,
  Star,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone,
  MessageSquare,
  Building,
} from "lucide-react";
import {
  INDUSTRIES,
  SERVICES,
  SITE_INFO,
  TESTIMONIALS,
  PORTFOLIO_ITEMS,
  PORTFOLIO_DETAILS,
} from "@/data/constants";
import EnquiryModal from "./EnquiryModal";
import PortfolioModal from "./PortfolioModal";
import Reveal from "./Reveal";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? "bg-panel border-gold/40 shadow-sm"
          : "bg-panel border-amber-900/10 hover:border-gold/30"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 cursor-pointer"
      >
        <span className="text-[#1a1611] text-sm sm:text-base font-display font-bold">
          {q}
        </span>
        <span
          className={`w-7 h-7 rounded-full bg-gold/10 text-gold text-xs shrink-0 flex items-center justify-center transition-transform duration-300 font-bold ${
            open ? "rotate-180 bg-gold text-ink" : ""
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 text-muted text-xs sm:text-sm leading-relaxed border-t border-amber-900/10 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function IndustryDetailContent({ slug }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null);

  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return null;

  const Icon = industry.icon;
  const idx = INDUSTRIES.findIndex((i) => i.slug === slug);
  const prevIndustry = INDUSTRIES[(idx - 1 + INDUSTRIES.length) % INDUSTRIES.length];
  const nextIndustry = INDUSTRIES[(idx + 1) % INDUSTRIES.length];
  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== slug).slice(0, 3);
  const relatedServices = SERVICES.filter((s) => industry.services?.includes(s.slug));
  const testimonial = TESTIMONIALS[idx % TESTIMONIALS.length];

  // Connected Portfolio Highlight
  const highlightedPortfolioItem = industry.caseHighlight
    ? PORTFOLIO_ITEMS.find((p) => p.id === industry.caseHighlight.portfolioId) || PORTFOLIO_ITEMS[0]
    : null;

  return (
    <>
      {/* Breadcrumb Navigation Bar */}
      <section className="pt-32 pb-6 px-4 sm:px-6 lg:px-12 2xl:px-20 bg-gradient-to-b from-panel2/60 via-base to-base border-b border-amber-900/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-muted">
            <Link href="/" className="hover:text-gold transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-gold transition">
              Industries
            </Link>
            <span>/</span>
            <span className="text-[#1a1611]">{industry.title}</span>
          </nav>

          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gold hover:text-[#1a1611] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Industry Verticals</span>
          </Link>
        </div>
      </section>

      {/* Main Section */}
      <section className="px-4 sm:px-6 lg:px-12 2xl:px-20 py-10 sm:py-16 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute top-10 right-0 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl float-slow" />
        <div className="pointer-events-none absolute bottom-1/3 -left-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl float-slow-delay" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Banner Card */}
          <Reveal className="mb-14">
            <div className="bg-gradient-to-br from-panel via-panel to-panel2/70 border border-amber-900/15 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-amber-950/5 relative overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Column: Title, Tagline, & CTAs */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gold text-ink flex items-center justify-center shadow-lg shadow-gold/30 shrink-0">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gold uppercase tracking-wider block">
                        {industry.tagline}
                      </span>
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#1a1611] tracking-tight leading-tight mt-0.5">
                        {industry.title}
                      </h1>
                    </div>
                  </div>

                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                    {industry.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setEnquiryOpen(true)}
                      className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gold text-ink text-xs sm:text-sm font-bold hover:bg-goldlight transition btn-pop shadow-md shadow-gold/25 cursor-pointer flex items-center gap-2"
                    >
                      <span>Schedule Domain Discovery</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="#solutions"
                      className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-base border border-amber-900/15 text-[#1a1611] text-xs sm:text-sm font-semibold hover:border-gold hover:text-gold transition cursor-pointer"
                    >
                      Explore Architecture
                    </a>
                  </div>
                </div>

                {/* Right Column: Hero Visual Showcase */}
                {industry.image && (
                  <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-ink shadow-lg border border-amber-900/10 img-zoom-wrap group">
                    <img
                      src={industry.image}
                      alt={`${industry.title} software development`}
                      className="w-full h-full object-cover img-zoom transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-ink/85 backdrop-blur-md text-white text-xs font-semibold border border-white/10 shadow-sm">
                        ✨ Production-Grade Stack
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-gold/90 text-ink text-xs font-bold shadow-sm">
                        Tailored Architecture
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Strategic Domain Blueprint Facts Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-14">
            <div className="bg-panel border border-amber-900/10 rounded-2xl p-4 shadow-xs">
              <div className="text-xs text-muted font-medium">Domain Vertical</div>
              <div className="text-sm sm:text-base font-display font-bold text-[#1a1611] mt-1 truncate">
                {industry.title}
              </div>
            </div>
            <div className="bg-panel border border-amber-900/10 rounded-2xl p-4 shadow-xs">
              <div className="text-xs text-muted font-medium">Security &amp; Auth</div>
              <div className="text-sm sm:text-base font-display font-bold text-gold mt-1 truncate">
                JWT / Role-Based RBAC
              </div>
            </div>
            <div className="bg-panel border border-amber-900/10 rounded-2xl p-4 shadow-xs">
              <div className="text-xs text-muted font-medium">Architecture</div>
              <div className="text-sm sm:text-base font-display font-bold text-[#1a1611] mt-1 truncate">
                Full-Stack &amp; Real-Time
              </div>
            </div>
            <div className="bg-panel border border-amber-900/10 rounded-2xl p-4 shadow-xs">
              <div className="text-xs text-muted font-medium">Delivery Sprints</div>
              <div className="text-sm sm:text-base font-display font-bold text-gold mt-1 truncate">
                2 – 6 Weeks Agile
              </div>
            </div>
          </div>

          {/* Main Two-Column Content Grid */}
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left Main Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Comparative: Challenges vs Solutions */}
              <div id="solutions" className="scroll-mt-28">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>The Domain Blueprint</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1611] mb-6">
                    Core Challenges &amp; Our Engineered Solutions
                  </h2>
                </Reveal>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Challenges Column */}
                  {industry.challenges && (
                    <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#1a1611] uppercase tracking-wider mb-4 pb-3 border-b border-amber-900/10">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        <span>Industry Bottlenecks</span>
                      </div>
                      <div className="space-y-4">
                        {industry.challenges.map((c, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <span className="text-xs font-mono font-bold text-red-500/80 bg-red-500/10 rounded-md w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                              0{i + 1}
                            </span>
                            <span className="text-xs sm:text-sm text-muted leading-relaxed font-medium">
                              {c}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Solutions Column */}
                  {industry.solutions && (
                    <div className="bg-panel2/80 border border-gold/30 rounded-3xl p-6 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider mb-4 pb-3 border-b border-gold/20">
                        <CheckCircle2 className="w-4 h-4 text-gold" />
                        <span>Our Solution Architecture</span>
                      </div>
                      <div className="space-y-4">
                        {industry.solutions.map((sol, i) => (
                          <div key={i} className="flex gap-3 items-start">
                            <span className="w-5 h-5 rounded-full bg-gold text-ink flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span className="text-xs sm:text-sm text-[#1a1611] leading-relaxed font-semibold">
                              {sol}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* What We Build (Key Deliverables / Modules) */}
              {industry.useCases && (
                <div>
                  <Reveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Specialized Deliverables</span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-[#1a1611] mb-6">
                      What We Build for {industry.title}
                    </h2>
                  </Reveal>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {industry.useCases.map((useCase, idx) => (
                      <div
                        key={idx}
                        className="bg-panel border border-amber-900/15 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs hover:border-gold/50 transition-all duration-300 tilt-card"
                      >
                        <div className="w-8 h-8 rounded-xl bg-gold/10 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          0{idx + 1}
                        </div>
                        <div>
                          <h3 className="text-sm font-display font-bold text-[#1a1611] mb-1">
                            {useCase}
                          </h3>
                          <p className="text-xs text-muted leading-relaxed">
                            Engineered with modular React components, clean database schemas, and robust API endpoints.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Stack & Tooling */}
              {industry.tools && (
                <div>
                  <Reveal>
                    <h2 className="text-xl font-display font-bold text-[#1a1611] mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-gold" />
                      <span>Recommended Technology Stack</span>
                    </h2>
                  </Reveal>
                  <div className="flex flex-wrap gap-2">
                    {industry.tools.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3.5 py-1.5 rounded-full bg-panel text-[#1a1611] border border-amber-900/15 font-semibold shadow-2xs hover:border-gold transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Connected Real Portfolio Case Study */}
              {highlightedPortfolioItem && industry.caseHighlight && (
                <div className="bg-gradient-to-br from-panel via-panel2/60 to-panel border border-gold/30 rounded-3xl p-6 sm:p-8 shadow-lg shadow-amber-950/5 relative overflow-hidden">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Proven Case Study</span>
                    </span>
                    <span className="text-xs font-semibold text-muted">
                      {highlightedPortfolioItem.year || "2024 – 2025"}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1a1611] mb-2">
                    {industry.caseHighlight.title || highlightedPortfolioItem.title}
                  </h3>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-5">
                    {industry.caseHighlight.note || highlightedPortfolioItem.desc}
                  </p>

                  {/* Impact Highlights */}
                  {highlightedPortfolioItem.stack && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {highlightedPortfolioItem.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2.5 py-1 rounded-md bg-gold/10 text-gold border border-gold/20 font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-amber-900/10">
                    <button
                      onClick={() => setSelectedPortfolioItem(highlightedPortfolioItem)}
                      className="px-5 py-2.5 rounded-full bg-gold text-ink text-xs font-bold hover:bg-goldlight transition btn-pop cursor-pointer flex items-center gap-1.5 shadow-sm"
                    >
                      <span>View Full Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      href="/portfolio"
                      className="px-4 py-2.5 rounded-full bg-base border border-amber-900/15 text-[#1a1611] text-xs font-semibold hover:border-gold hover:text-gold transition"
                    >
                      Explore All Projects
                    </Link>
                  </div>
                </div>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div>
                  <Reveal>
                    <h2 className="text-xl font-display font-bold text-[#1a1611] mb-4">
                      Complementary Services
                    </h2>
                  </Reveal>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedServices.map((s) => {
                      const SIcon = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="group bg-panel border border-amber-900/15 rounded-2xl p-4 sm:p-5 flex items-start gap-4 hover:border-gold/50 transition-all duration-300 shadow-xs tilt-card"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-ink transition-colors">
                            <SIcon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-display font-bold text-[#1a1611] group-hover:text-gold transition truncate">
                              {s.title}
                            </h3>
                            <p className="text-xs text-muted leading-relaxed mt-1 line-clamp-2">
                              {s.tagline}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Frequently Asked Questions */}
              {industry.faqs && industry.faqs.length > 0 && (
                <div>
                  <Reveal>
                    <h2 className="text-xl font-display font-bold text-[#1a1611] mb-4">
                      Frequently Asked Questions
                    </h2>
                  </Reveal>
                  <div className="space-y-3">
                    {industry.faqs.map((f, i) => (
                      <FaqItem key={i} q={f.q} a={f.a} />
                    ))}
                  </div>
                </div>
              )}

              {/* Client Testimonial Card */}
              {testimonial && (
                <div className="bg-panel2/80 border border-amber-900/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                  <div className="flex items-center gap-1 text-gold mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#1a1611] italic font-medium leading-relaxed mb-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold text-ink font-display font-bold flex items-center justify-center text-sm shadow-xs">
                      {testimonial.initials || "SS"}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#1a1611]">{testimonial.name}</div>
                      <div className="text-xs text-muted">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Snapshot & Direct Consultation (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-7 shadow-xl shadow-amber-950/5 lg:sticky lg:top-28 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-amber-900/10">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-[#1a1611]">
                      Why {SITE_INFO.shortName}
                    </h3>
                    <span className="text-xs text-muted">Domain Engineering</span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="flex justify-between items-center text-xs py-1 border-b border-amber-900/5">
                    <span className="text-muted">Domain Focus</span>
                    <span className="text-[#1a1611] font-bold text-right truncate ml-2">
                      {industry.title}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-amber-900/5">
                    <span className="text-muted">Response SLA</span>
                    <span className="text-gold font-bold">&lt; 24 Hours</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-amber-900/5">
                    <span className="text-muted">Security Policy</span>
                    <span className="text-[#1a1611] font-bold">Encrypted &amp; Hardened</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-amber-900/5">
                    <span className="text-muted">Post-Launch SLA</span>
                    <span className="text-[#1a1611] font-bold">Included Support</span>
                  </div>
                </div>

                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="w-full px-6 py-3.5 rounded-full bg-gold text-ink text-xs sm:text-sm font-bold hover:bg-goldlight transition btn-pop shadow-md shadow-gold/20 cursor-pointer"
                >
                  Discuss Your Project →
                </button>

                <p className="text-[11px] text-muted text-center">
                  Direct consultation with lead engineers. No junior intermediaries.
                </p>

                <div className="pt-4 border-t border-amber-900/10 space-y-2">
                  <a
                    href={`mailto:${SITE_INFO.email}`}
                    className="flex items-center gap-2 text-xs text-muted hover:text-gold transition truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="truncate">{SITE_INFO.email}</span>
                  </a>
                  <a
                    href={`tel:${SITE_INFO.phone}`}
                    className="flex items-center gap-2 text-xs text-muted hover:text-gold transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{SITE_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Previous / Next Industry Switcher */}
          <div className="mt-16 pt-8 border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href={`/industry/${prevIndustry.slug}`}
              className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-panel border border-amber-900/15 text-xs font-bold text-[#1a1611] hover:border-gold hover:text-gold transition shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-gold" />
              <div className="text-left">
                <span className="text-[10px] text-muted block font-medium">Previous Industry</span>
                <span>{prevIndustry.title}</span>
              </div>
            </Link>

            <Link
              href="/industries"
              className="text-xs font-bold text-gold hover:text-[#1a1611] transition"
            >
              View All 9 Verticals
            </Link>

            <Link
              href={`/industry/${nextIndustry.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-2 px-5 py-3 rounded-2xl bg-panel border border-amber-900/15 text-xs font-bold text-[#1a1611] hover:border-gold hover:text-gold transition shadow-xs"
            >
              <div className="text-right">
                <span className="text-[10px] text-muted block font-medium">Next Industry</span>
                <span>{nextIndustry.title}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          {/* Related Other Industries Grid */}
          {otherIndustries.length > 0 && (
            <div className="mt-16 pt-10 border-t border-amber-900/10">
              <Reveal>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#1a1611]">
                      Explore More Industries
                    </h3>
                    <p className="text-xs text-muted mt-0.5">
                      Tailored architectures for fast-growing business sectors
                    </p>
                  </div>
                  <Link
                    href="/industries"
                    className="text-xs font-bold text-gold hover:text-[#1a1611] transition hidden sm:inline"
                  >
                    View All →
                  </Link>
                </div>
              </Reveal>

              <div className="grid sm:grid-cols-3 gap-6">
                {otherIndustries.map((ind, i) => {
                  const OIcon = ind.icon;
                  return (
                    <Reveal key={ind.slug} delay={i * 80}>
                      <Link
                        href={`/industry/${ind.slug}`}
                        className="group bg-panel border border-amber-900/15 rounded-3xl overflow-hidden block shadow-md hover:border-gold/50 transition-all duration-300 tilt-card"
                      >
                        {ind.image && (
                          <div className="h-36 w-full overflow-hidden bg-ink img-zoom-wrap">
                            <img
                              src={ind.image}
                              alt={ind.title}
                              className="w-full h-full object-cover img-zoom transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-5">
                          <div className="w-9 h-9 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-3 group-hover:bg-gold group-hover:text-ink transition-colors">
                            <OIcon className="w-4 h-4" />
                          </div>
                          <h4 className="text-sm font-display font-bold text-[#1a1611] group-hover:text-gold transition">
                            {ind.title}
                          </h4>
                          <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
                            {ind.desc}
                          </p>
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Conversion CTA Banner */}
          <Reveal className="mt-16 bg-gradient-to-br from-panel via-panel2 to-panel border border-amber-900/15 rounded-3xl p-8 sm:p-12 text-center shadow-xl shadow-amber-950/5 relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1611] mb-3">
                Building a modern product in {industry.title.toLowerCase()}?
              </h3>
              <p className="text-muted text-sm sm:text-base mb-8 leading-relaxed">
                Tell us about your product roadmap, user roles, and compliance requirements. We&apos;ll formulate a detailed architectural scope within 24 hours.
              </p>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="px-8 py-3.5 rounded-full bg-gold text-ink text-sm font-bold hover:bg-goldlight transition btn-pop shadow-md shadow-gold/25 cursor-pointer"
              >
                Start Your Project Discovery →
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enquiry Modal */}
      {enquiryOpen && (
        <EnquiryModal
          service={{ title: `${industry.title} Custom Solution`, slug: industry.slug }}
          onClose={() => setEnquiryOpen(false)}
        />
      )}

      {/* Case Study Modal */}
      {selectedPortfolioItem && (
        <PortfolioModal
          item={selectedPortfolioItem}
          onClose={() => setSelectedPortfolioItem(null)}
          onPrev={() => {}}
          onNext={() => {}}
          onOpenEnquiry={() => {
            setSelectedPortfolioItem(null);
            setEnquiryOpen(true);
          }}
        />
      )}
    </>
  );
}
