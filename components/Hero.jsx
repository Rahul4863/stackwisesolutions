"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Globe,
  Smartphone,
  Server,
  TrendingUp,
  Search,
  X,
  RefreshCw,
} from "lucide-react";

import { SITE_INFO } from "@/data/constants";

// 4 Tech Solutions with keywords, text prompts & matched light hero images
const PROMPTS_DATA = [
  {
    id: "web-development",
    keywords: ["web", "react", "next", "ui", "ux", "site", "frontend", "website", "design"],
    fullPrompt: "Build custom Next.js & React web applications with 100/100 Lighthouse performance...",
    serviceName: "Web Applications & UI/UX Studio",
    badge: "💻 Web Engineering & UI/UX Studio",
    headline: "High-Performance Custom Web Applications",
    tagline: "Custom React & Next.js web applications engineered for lightning speed, pixel-perfect UX, and top SEO rankings.",
    image: "/images/hero_light_web_studio.jpg",
    imageAlt: "Web Development & UI/UX Studio",
    floatingBadge1: "🚀 Next.js 15 & React 19",
    floatingBadge2: "⚡ 100/100 Lighthouse Speed",
    bullets: [
      "Custom React & Next.js Web Platforms",
      "Fluid Responsive Layouts & Micro-Animations",
      "SEO-Optimized & Speed-Engineered Codebase",
    ],
    ctaText: "Explore Web Development",
    ctaHref: "/services/web-development",
    stats: [
      { value: "100%", label: "Responsive Layout" },
      { value: "< 1.0s", label: "Page Load Speed" },
      { value: "SEO", label: "Optimized Core" },
    ],
    chipLabel: "✨ Web Development",
    icon: Globe,
  },
  {
    id: "mobile-apps",
    keywords: ["mobile", "app", "ios", "android", "flutter", "react native", "phone", "native"],
    fullPrompt: "Develop native iOS & Android mobile apps with fluid 60 FPS UX and real-time backend sync...",
    serviceName: "Mobile Applications",
    badge: "📱 Native & Cross-Platform Mobile Apps",
    headline: "Next-Gen Mobile Applications Built for Scale",
    tagline: "High-performance iOS and Android mobile apps crafted with intuitive user interfaces, offline sync, and real-time backends.",
    image: "/images/hero_light_app_dev.jpg",
    imageAlt: "Mobile App Development",
    floatingBadge1: "📲 iOS & Android Ready",
    floatingBadge2: "⭐ 4.9 Rating User Experience",
    bullets: [
      "Cross-Platform iOS & Android Solutions",
      "Seamless API Integration & Offline Capability",
      "App Store & Play Store Publishing Support",
    ],
    ctaText: "Explore Mobile Services",
    ctaHref: "/services/app-development",
    stats: [
      { value: "iOS & Android", label: "Dual Compatibility" },
      { value: "60 FPS", label: "Fluid Motion UX" },
      { value: "Real-Time", label: "Cloud Syncing" },
    ],
    chipLabel: "📱 Mobile Apps",
    icon: Smartphone,
  },
  {
    id: "cloud-backends",
    keywords: ["cloud", "api", "backend", "server", "database", "node", "python", "microservice", "infrastructure"],
    fullPrompt: "Deploy enterprise cloud microservices, scalable REST APIs, and bank-grade backend architectures...",
    serviceName: "Cloud APIs & Infrastructure",
    badge: "☁️ Cloud Infrastructure & API Gateways",
    headline: "Scalable Microservices & Custom Backend APIs",
    tagline: "Robust enterprise cloud backends, microservice architectures, and secure REST/GraphQL API integrations built for high concurrency.",
    image: "/images/hero_light_cloud_api.jpg",
    imageAlt: "Cloud Infrastructure & Custom APIs",
    floatingBadge1: "⚡ 99.8% Uptime SLA",
    floatingBadge2: "🛡️ Enterprise Microservices",
    bullets: [
      "High-Concurrency Node.js, Python & Go APIs",
      "Cloud Infrastructure, Docker & Kubernetes Deployment",
      "Bank-Grade Security & End-to-End Encryption",
    ],
    ctaText: "Explore Cloud & APIs",
    ctaHref: "/services/backend-development",
    stats: [
      { value: "99.8%", label: "Guaranteed Uptime" },
      { value: "< 50ms", label: "API Latency" },
      { value: "Bank-Grade", label: "Data Security" },
    ],
    chipLabel: "☁️ Cloud APIs",
    icon: Server,
  },
  {
    id: "digital-growth",
    keywords: ["growth", "seo", "marketing", "digital", "traffic", "analytics", "conversion", "sales", "brand"],
    fullPrompt: "Accelerate revenue & traffic with data-driven SEO strategies, conversion optimization & growth funnels...",
    serviceName: "Digital Growth & Analytics",
    badge: "📈 SEO, Analytics & Brand Growth",
    headline: "Data-Driven Marketing & Digital Growth Engine",
    tagline: "Accelerate user acquisition, boost organic search traffic, and maximize conversion rates with strategic digital marketing.",
    image: "/images/hero_light_digital_growth.jpg",
    imageAlt: "Digital Growth & Analytics",
    floatingBadge1: "📈 +48% Avg Conversion",
    floatingBadge2: "🎯 Data-Driven ROI",
    bullets: [
      "Comprehensive SEO & Content Marketing",
      "Conversion Rate Optimization (CRO) & Funnels",
      "Performance Marketing & Analytics Tracking",
    ],
    ctaText: "Explore Growth Services",
    ctaHref: "/#services",
    stats: [
      { value: "+48%", label: "Conversion Lift" },
      { value: "Top #1", label: "Google Rankings" },
      { value: "3.5x", label: "Average ROI" },
    ],
    chipLabel: "📈 Digital Growth",
    icon: TrendingUp,
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [promptIdx, setPromptIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);

  const inputRef = useRef(null);

  // Clean, leak-free auto-typewriter effect loop
  useEffect(() => {
    if (isUserTyping) return;

    const currentData = PROMPTS_DATA[promptIdx];
    const fullText = currentData.fullPrompt;

    let timer;

    if (!isDeleting) {
      if (typedText.length < fullText.length) {
        timer = setTimeout(() => {
          setTypedText(fullText.substring(0, typedText.length + 1));
        }, 50);
      } else {
        // Full text typed out -> pause for 3 seconds then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3200);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(fullText.substring(0, typedText.length - 1));
        }, 25);
      } else {
        // Fully erased -> switch to next prompt category
        setIsDeleting(false);
        const nextIdx = (promptIdx + 1) % PROMPTS_DATA.length;
        setPromptIdx(nextIdx);
        setActiveIndex(nextIdx);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [typedText, isDeleting, promptIdx, isUserTyping]);

  // User types manually in the input
  const handleUserInputChange = (e) => {
    const text = e.target.value;
    setTypedText(text);
    setIsUserTyping(true);

    if (text.trim() === "") {
      return;
    }

    const lower = text.toLowerCase();
    // Find best keyword match
    let matchedIdx = -1;
    for (let i = 0; i < PROMPTS_DATA.length; i++) {
      if (PROMPTS_DATA[i].keywords.some((kw) => lower.includes(kw))) {
        matchedIdx = i;
        break;
      }
    }

    if (matchedIdx !== -1 && matchedIdx !== activeIndex) {
      setActiveIndex(matchedIdx);
    }
  };

  // Selecting a quick prompt chip
  const handleSelectChip = (index) => {
    setIsUserTyping(true);
    const selectedData = PROMPTS_DATA[index];
    setTypedText(selectedData.fullPrompt);
    setActiveIndex(index);
    setPromptIdx(index);
  };

  // Reset to auto-typing mode
  const handleResetAuto = () => {
    setIsUserTyping(false);
    setIsDeleting(false);
    setTypedText("");
    const nextIdx = (activeIndex + 1) % PROMPTS_DATA.length;
    setPromptIdx(nextIdx);
    setActiveIndex(nextIdx);
  };

  const activeService = PROMPTS_DATA[activeIndex] || PROMPTS_DATA[0];

  const defaultBullets = [
    "Custom React & Next.js Web Platforms",
    "Fluid Responsive Layouts & Micro-Animations",
    "SEO-Optimized & Speed-Engineered Codebase",
  ];

  const displayBullets = activeService?.bullets?.length > 0 ? activeService.bullets : defaultBullets;

  return (
    <section id="hero" className="relative min-h-[92svh] lg:min-h-[96svh] flex items-center overflow-hidden bg-gradient-to-b from-[#faf7f2] via-[#fffdfa] to-[#f5efe4]">
      {/* Light Ambient Background Lights */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full bg-amber-200/40 blur-3xl float-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] rounded-full bg-teal-200/30 blur-3xl float-slow-delay pointer-events-none" />
      <div className="absolute top-[40%] right-[15%] w-72 h-72 rounded-full bg-orange-100/50 blur-3xl float-slow pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#b07a29 1px, transparent 1px), linear-gradient(to right, #b07a29 1px, transparent 40px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10 w-full">
        
        {/* Dynamic Typing Input Box Container */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-400/40 via-amber-600/30 to-amber-700/40 blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative bg-white backdrop-blur-md rounded-2xl border-2 border-amber-900/20 p-3.5 sm:p-4 shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center gap-2.5 px-2">
                <Search className="w-5 h-5 text-amber-800 shrink-0" />
                <span
                  className="text-xs font-bold uppercase tracking-wider hidden md:inline"
                  style={{ color: "#1a1611", opacity: 1 }}
                >
                  Prompt:
                </span>
              </div>

              {/* Dynamic Interactive Input Field (DARK HIGH-CONTRAST TEXT) */}
              <div className="relative flex-1 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={typedText}
                  onChange={handleUserInputChange}
                  placeholder="Type your project requirement (e.g. Next.js Web App, Mobile App, Cloud API)..."
                  className="w-full bg-transparent text-sm sm:text-base font-bold focus:outline-none py-1 pr-6"
                  style={{ color: "#1a1611", opacity: 1 }}
                />
                {!isUserTyping && (
                  <span className="inline-block w-2 h-5 bg-amber-800 ml-0.5 animate-pulse rounded-full pointer-events-none" />
                )}
                {typedText && (
                  <button
                    onClick={handleResetAuto}
                    title="Clear text & resume auto-typing"
                    className="p-1 hover:bg-amber-100 rounded-full text-amber-900 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Live Status Badge */}
              <div className="flex items-center justify-between sm:justify-end gap-2 border-t sm:border-t-0 sm:border-l border-amber-900/15 pt-2 sm:pt-0 sm:pl-3">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-xs font-bold shrink-0 border border-amber-300/60"
                  style={{ color: "#1a1611", opacity: 1 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-700"></span>
                  </span>
                  {isUserTyping ? "✏️ Custom Input" : "⚡ Auto Typing"}
                </span>

                {isUserTyping && (
                  <button
                    onClick={handleResetAuto}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 hover:text-amber-950 underline transition shrink-0"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Auto Mode</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Clickable Quick Suggestion Chips */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-3.5">
            <span className="text-xs font-bold mr-1" style={{ color: "#594f42", opacity: 1 }}>
              Quick Try:
            </span>
            {PROMPTS_DATA.map((item, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectChip(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    isSelected
                      ? "bg-amber-800 text-white shadow-md shadow-amber-800/25 scale-105"
                      : "bg-white border border-amber-900/20 hover:bg-amber-100 hover:text-amber-950 shadow-2xs"
                  }`}
                  style={!isSelected ? { color: "#2b241c", opacity: 1 } : undefined}
                >
                  {item.chipLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Main Content & Synchronized Auto-Changing Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-2 md:py-4">
          
          {/* Left Column: Content Synchronized to Matched Service */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-4 sm:space-y-5">
            
            {/* Category Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs sm:text-sm font-extrabold tracking-wide shadow-xs backdrop-blur-md"
              style={{ color: "#1a1611", opacity: 1 }}
            >
              <Sparkles className="w-4 h-4 text-amber-700 animate-pulse" />
              <span>{activeService.badge}</span>
            </div>

            {/* Headline (DEEP ESPRESSO BOLD TEXT) */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold leading-tight transition-all duration-300"
              style={{ color: "#1a1611", opacity: 1 }}
            >
              {activeService.headline}
            </h1>

            {/* Tagline / Small Description (DARK ESPRESSO BOLD TEXT) */}
            <p
              className="text-base sm:text-lg font-semibold leading-relaxed transition-all duration-300"
              style={{ color: "#1a1611", opacity: 1 }}
            >
              {activeService.tagline}
            </p>

            {/* High-Visibility Feature Bullet Points (DARK BOLD TEXT ON WHITE CARD) */}
            <div className="grid grid-cols-1 gap-2.5 pt-1 w-full">
              {displayBullets.map((bullet, bIdx) => (
                <div
                  key={bIdx}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border-2 border-amber-900/15 shadow-sm hover:shadow-md hover:border-amber-700/40 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4 text-white stroke-[2.5]" />
                  </div>
                  <span
                    className="text-sm sm:text-base font-extrabold"
                    style={{ color: "#1a1611", opacity: 1 }}
                  >
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                href={activeService.ctaHref}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-amber-800 text-white font-bold shadow-lg shadow-amber-800/25 hover:bg-amber-900 btn-pop transition text-sm sm:text-base group"
              >
                <span>{activeService.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-white border-2 border-amber-900/15 font-bold hover:bg-amber-50 hover:border-amber-700/40 shadow-sm btn-pop transition text-sm sm:text-base"
                style={{ color: "#1a1611", opacity: 1 }}
              >
                <span>Get Free Consultation</span>
              </Link>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 border-t border-amber-900/15 w-full max-w-lg mt-2">
              {activeService.stats.map((stat, sIdx) => (
                <div key={sIdx} className="flex flex-col">
                  <span
                    className="text-xl sm:text-2xl font-black font-display"
                    style={{ color: "#1c1509", opacity: 1 }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold" style={{ color: "#594f42", opacity: 1 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Auto-Changing Matched Image Visual */}
          <div className="lg:col-span-6 relative mt-2 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-xl aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white backdrop-blur-md group">
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transform transition-all duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/15 via-transparent to-transparent pointer-events-none" />

              {/* Live Matched Category Indicator Top Left */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-amber-950/85 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Live Preview: {activeService.serviceName}</span>
              </div>

              {/* Floating Badge Top Right */}
              <div
                className="absolute top-4 right-4 px-3.5 py-2 rounded-2xl bg-white/98 backdrop-blur-md border border-amber-300/80 shadow-lg flex items-center gap-2 text-xs font-bold float-slow"
                style={{ color: "#1a1611", opacity: 1 }}
              >
                <Zap className="w-4 h-4 text-amber-600 fill-amber-500/20" />
                <span>{activeService.floatingBadge1}</span>
              </div>

              {/* Floating Badge Bottom Left */}
              <div
                className="absolute bottom-4 left-4 px-3.5 py-2 rounded-2xl bg-white/98 backdrop-blur-md border border-amber-300/80 shadow-lg flex items-center gap-2 text-xs font-bold float-slow-delay"
                style={{ color: "#1a1611", opacity: 1 }}
              >
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>{activeService.floatingBadge2}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}