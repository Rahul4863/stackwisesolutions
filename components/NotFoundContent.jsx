"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Home,
  Compass,
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  ExternalLink,
  Layers,
  ShieldCheck,
  Terminal,
  CornerDownRight,
  Phone,
  Mail,
  FileQuestion,
  AlertCircle,
  Zap,
  Globe,
  Smartphone,
  Server,
  TrendingUp,
  Palette,
  BookOpen,
  Briefcase,
  Code2,
  X,
  Flame,
} from "lucide-react";
import { SITE_INFO, SERVICES, INDUSTRIES } from "@/data/constants";
import { BLOG_POSTS } from "@/data/blogs";

// 6 Core Featured Destination Cards for 404 Recovery
const FEATURED_DESTINATIONS = [
  {
    title: "Web Development",
    subtitle: "Custom React & Next.js Platforms",
    desc: "Lightning-fast websites and web applications built with 100/100 Lighthouse speed and clean architecture.",
    href: "/services/web-development",
    badge: "Core Service",
    icon: Globe,
    accent: "176 122 41", // Brass/Gold
    bgHover: "hover:border-amber-500/40",
  },
  {
    title: "Mobile Applications",
    subtitle: "iOS & Android Solutions",
    desc: "Fluid native and cross-platform apps crafted with real-time syncing, offline support, and 60 FPS motion.",
    href: "/services/mobile-app-development",
    badge: "Mobile Studio",
    icon: Smartphone,
    accent: "43 110 96", // Deep Teal
    bgHover: "hover:border-teal-500/40",
  },
  {
    title: "Backend & Cloud APIs",
    subtitle: "Scalable Microservices",
    desc: "Robust Node.js & Laravel backends, REST/GraphQL gateways, and secure database architectures.",
    href: "/services/backend-development",
    badge: "Infrastructure",
    icon: Server,
    accent: "62 84 138", // Indigo
    bgHover: "hover:border-indigo-500/40",
  },
  {
    title: "UI/UX & Graphic Design",
    subtitle: "High-Converting Interfaces",
    desc: "Visual branding, modern interface systems, and conversion-centered user experiences that captivate.",
    href: "/services/graphic-designing",
    badge: "Creative Studio",
    icon: Palette,
    accent: "141 99 158", // Plum
    bgHover: "hover:border-purple-500/40",
  },
  {
    title: "Client Case Studies",
    subtitle: "Our Verified Portfolio",
    desc: "Explore delivered projects, live SaaS products, and digital growth results engineered for our partners.",
    href: "/#portfolio",
    badge: "Proven Work",
    icon: Briefcase,
    accent: "74 128 86", // Forest
    bgHover: "hover:border-emerald-500/40",
  },
  {
    title: "Engineering Blog",
    subtitle: "Tech Insights & Guides",
    desc: "Deep-dives on modern web architectures, SEO optimizations, Next.js tips, and software scalability.",
    href: "/blogs",
    badge: "Insights",
    icon: BookOpen,
    accent: "176 74 60", // Terracotta
    bgHover: "hover:border-rose-500/40",
  },
];

// Quick suggestions when user clicks trending tags
const QUICK_TRENDS = [
  { label: "Web Development", query: "web" },
  { label: "Mobile Apps", query: "mobile" },
  { label: "Backend APIs", query: "backend" },
  { label: "Portfolio", query: "portfolio" },
  { label: "Blog", query: "blog" },
  { label: "Contact Us", query: "contact" },
];

export default function NotFoundContent() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);

  // 3D tilt card handlers
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  // Build searchable index of pages, services, industries, and blogs
  const searchableItems = useMemo(() => {
    const items = [
      {
        title: "Home",
        category: "Main Page",
        desc: "Stackwise Solutions official homepage — Web, App & Digital Growth Studio",
        href: "/",
        icon: Home,
      },
      {
        title: "About Us & Engineering Team",
        category: "About",
        desc: "Learn about our development philosophy, team, and delivery standards",
        href: "/#about",
        icon: ShieldCheck,
      },
      {
        title: "Client Portfolio & Case Studies",
        category: "Work",
        desc: "Explore our delivered platforms, web applications, and customer case studies",
        href: "/#portfolio",
        icon: Briefcase,
      },
      {
        title: "All Services Overview",
        category: "Services",
        desc: "Full suite of web development, mobile apps, DevOps, UI/UX, and marketing",
        href: "/services",
        icon: Layers,
      },
      {
        title: "Technologies & Tech Stack",
        category: "Stack",
        desc: "React, Next.js, Node.js, Laravel, React Native, Tailwind CSS, Docker & MySQL",
        href: "/technologies",
        icon: Code2,
      },
      {
        title: "Industries We Serve",
        category: "Industries",
        desc: "E-commerce, Healthcare, FinTech, Logistics, EdTech, Real Estate, and Dining",
        href: "/industries",
        icon: Globe,
      },
      {
        title: "Contact & Free Consultation",
        category: "Contact",
        desc: "Get in touch with our team for project quotes, proposals, and advisory",
        href: "/#contact",
        icon: Mail,
      },
    ];

    // Add Services
    SERVICES.forEach((s) => {
      items.push({
        title: s.title,
        category: "Service",
        desc: s.desc,
        href: `/services/${s.slug}`,
        icon: Globe,
      });
    });

    // Add Industries
    INDUSTRIES.forEach((ind) => {
      items.push({
        title: ind.title,
        category: "Industry",
        desc: ind.desc,
        href: `/industry/${ind.slug}`,
        icon: Compass,
      });
    });

    // Add Blog Posts
    BLOG_POSTS.forEach((bp) => {
      items.push({
        title: bp.title,
        category: "Blog Article",
        desc: bp.excerpt || bp.metaDescription,
        href: `/blog/${bp.slug}`,
        icon: BookOpen,
      });
    });

    return items;
  }, []);

  // Filter search results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return searchableItems
      .filter((item) => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      })
      .slice(0, 6);
  }, [searchQuery, searchableItems]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-[#faf7f2] via-[#fffdfa] to-[#f5efe4] text-[#1a1611] pt-4 pb-20 px-4 sm:px-6 lg:px-12 2xl:px-20 selection:bg-amber-500/20 selection:text-amber-900">
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-amber-200/35 blur-3xl float-slow pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[32rem] h-[32rem] rounded-full bg-teal-200/25 blur-3xl float-slow-delay pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full bg-orange-200/20 blur-3xl pointer-events-none" />

      {/* Subtle Dot Grid Canvas Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#b07a29 1.2px, transparent 1.2px), linear-gradient(to right, #b07a29 1px, transparent 40px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* TOP HERO SECTION: 404 Visual & Core Messaging */}
        <div className="text-center pt-8 sm:pt-12 pb-10 sm:pb-14">
          
          {/* Animated Error Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-950 text-xs sm:text-sm font-semibold tracking-wide shadow-xs backdrop-blur-md mb-6 hover:bg-amber-500/15 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-600"></span>
            </span>
            <span className="uppercase tracking-widest text-[11px] font-bold text-amber-900">
              Error 404 • Route Undefined
            </span>
          </div>

          {/* Luxury Typographic 404 Centerpiece with Layered Floating Badges */}
          <div className="relative inline-block my-2">
            <div className="text-7xl sm:text-9xl md:text-[11rem] font-display font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#b07a29] via-[#c99846] to-[#784e12] select-none drop-shadow-sm">
              404
            </div>

            {/* Left Floating Interactive Tag (Hidden on small mobile) */}
            <div className="hidden sm:flex items-center gap-2 absolute -left-12 top-1/4 px-3 py-1.5 rounded-xl bg-white/90 border border-amber-900/10 shadow-lg shadow-amber-950/5 text-xs font-semibold text-[#1a1611] backdrop-blur-md float-slow">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>Route Off-Grid</span>
            </div>

            {/* Right Floating Interactive Tag */}
            <div className="hidden sm:flex items-center gap-2 absolute -right-12 bottom-1/4 px-3 py-1.5 rounded-xl bg-white/90 border border-amber-900/10 shadow-lg shadow-amber-950/5 text-xs font-semibold text-[#1a1611] backdrop-blur-md float-slow-delay">
              <Compass className="w-3.5 h-3.5 text-teal-700" />
              <span>Auto-Recovery Active</span>
            </div>
          </div>

          {/* Primary Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#1a1611] tracking-tight mt-2 mb-4 max-w-2xl mx-auto leading-tight">
            Looks Like You&apos;ve Ventured Into Uncharted Code
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
            The page you&apos;re looking for may have been restructured, renamed, or
            is temporarily unavailable. Don&apos;t worry — we&apos;ve mapped out all
            the main pathways below to get you back on track immediately.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gold text-ink text-sm sm:text-base font-bold shadow-md hover:bg-goldlight btn-pop transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="max-w-xl mx-auto relative mb-6">
            <div className="relative flex items-center">
              <div className="absolute left-4 pointer-events-none text-muted">
                <Search className="w-5 h-5 text-amber-700/70" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearching(true)}
                placeholder="Search services, case studies, blogs, or tech..."
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white/90 border border-amber-900/15 shadow-sm text-sm sm:text-base text-[#1a1611] placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 transition-all backdrop-blur-md"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    searchInputRef.current?.focus();
                  }}
                  className="absolute right-3.5 p-1 rounded-full text-muted hover:text-[#1a1611] hover:bg-amber-100/60 transition"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* LIVE INSTANT SEARCH RESULTS DROPDOWN */}
            {searchQuery.trim() !== "" && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg border border-amber-900/15 rounded-2xl shadow-xl shadow-amber-950/10 overflow-hidden z-30 text-left pop-in">
                <div className="px-4 py-2 bg-amber-500/10 border-b border-amber-900/10 flex items-center justify-between text-xs font-semibold text-amber-950">
                  <span>Search Suggestions</span>
                  <span>{searchResults.length} results found</span>
                </div>

                {searchResults.length > 0 ? (
                  <div className="max-h-72 overflow-y-auto divide-y divide-amber-900/5">
                    {searchResults.map((result, idx) => {
                      const ResultIcon = result.icon;
                      return (
                        <Link
                          key={idx}
                          href={result.href}
                          onClick={() => setSearchQuery("")}
                          className="flex items-start gap-3 p-3.5 hover:bg-amber-500/10 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-800 group-hover:bg-amber-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
                            <ResultIcon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-[#1a1611] truncate group-hover:text-amber-800">
                                {result.title}
                              </span>
                              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-amber-900/10 text-amber-900 shrink-0">
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-muted truncate mt-0.5">
                              {result.desc}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted/50 group-hover:text-amber-700 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-6 text-center text-sm text-muted">
                    <p className="font-semibold text-[#1a1611] mb-1">
                      No direct matches for &quot;{searchQuery}&quot;
                    </p>
                    <p className="text-xs">
                      Try searching for &quot;React&quot;, &quot;Web Development&quot;, &quot;Mobile&quot;, or &quot;Contact&quot;.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Quick Trending Keyword Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 text-xs">
              <span className="text-muted font-medium flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-600" /> Popular:
              </span>
              {QUICK_TRENDS.map((trend) => (
                <button
                  key={trend.label}
                  type="button"
                  onClick={() => {
                    setSearchQuery(trend.query);
                    searchInputRef.current?.focus();
                  }}
                  className="px-2.5 py-1 rounded-full bg-white/70 hover:bg-white text-muted hover:text-[#1a1611] border border-amber-900/10 hover:border-amber-900/25 transition-all text-xs font-medium"
                >
                  {trend.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* SECTION 2: POPULAR DESTINATIONS GRID */}
        <div className="pt-6 sm:pt-8 border-t border-amber-900/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
            <div>
              <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Explore Verified Destinations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1a1611]">
                Where Would You Like to Go Next?
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-900 hover:underline shrink-0"
            >
              <span>View All 8 Core Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 6 Grid Cards with 3D Tilt Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {FEATURED_DESTINATIONS.map((dest) => {
              const Icon = dest.icon;
              return (
                <Link
                  key={dest.title}
                  href={dest.href}
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                  className={`tilt-card group relative p-6 rounded-3xl bg-white/80 border border-amber-900/10 hover:shadow-xl hover:shadow-amber-950/5 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between ${dest.bgHover}`}
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `rgb(${dest.accent})` }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className="text-[11px] font-bold px-2.5 py-1 rounded-full border bg-white shadow-2xs"
                        style={{
                          color: `rgb(${dest.accent})`,
                          borderColor: `rgba(${dest.accent}, 0.25)`,
                        }}
                      >
                        {dest.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg font-display font-bold text-[#1a1611] group-hover:text-amber-800 transition-colors">
                      {dest.title}
                    </h3>
                    <p className="text-xs font-semibold text-muted/80 mt-0.5">
                      {dest.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted mt-2.5 leading-relaxed">
                      {dest.desc}
                    </p>
                  </div>

                  {/* Bottom Link Arrow */}
                  <div className="mt-5 pt-4 border-t border-amber-900/5 flex items-center justify-between text-xs font-bold text-[#1a1611] group-hover:text-amber-800">
                    <span>Explore Section</span>
                    <div className="w-7 h-7 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: SYSTEM DIAGNOSTIC & DIRECT CONTACT HELPER */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-white/80 border border-amber-900/10 shadow-sm backdrop-blur-md">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            
            {/* Diagnostic Summary (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-muted">
                  System Diagnostics & Direct Advisory
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1a1611]">
                Need a Custom Solution or Immediate Support?
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                If you were looking for a specific proposal, custom scope, or suspect
                a broken resource, reach out directly to our engineering desk. We respond within 24 hours.
              </p>

              {/* Status Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/5 border border-amber-900/5">
                  <Terminal className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="font-mono text-[11px] text-muted">HTTP: 404 Responded</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-teal-500/5 border border-teal-900/5">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                  <span className="font-mono text-[11px] text-muted">SLA: &lt; 24h Response</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-500/5 border border-indigo-900/5">
                  <Globe className="w-4 h-4 text-indigo-700 shrink-0" />
                  <span className="font-mono text-[11px] text-muted">HQ: Gurugram, IN</span>
                </div>
              </div>
            </div>

            {/* Quick Contact & Copy Bar (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              
              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/25 text-amber-950 text-xs sm:text-sm font-semibold transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="truncate">{SITE_INFO.email}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 bg-white/80 px-2 py-0.5 rounded-md shrink-0">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </>
                  )}
                </span>
              </button>

              {/* Direct Phone Call Link */}
              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white hover:bg-amber-50/50 border border-amber-900/10 hover:border-amber-900/20 text-[#1a1611] text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>{SITE_INFO.phone}</span>
                </div>
                <span className="text-xs text-muted font-normal">Call Studio →</span>
              </a>

              {/* Free Consultation CTA */}
              <Link
                href="/#contact"
                className="w-full text-center px-4 py-3 rounded-2xl bg-gold text-ink text-xs sm:text-sm font-bold shadow-sm hover:bg-goldlight btn-pop transition-all"
              >
                Request Free Consultation
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
