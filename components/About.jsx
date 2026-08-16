"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import {
  Sparkles,
  Target,
  Rocket,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Zap,
  ShieldCheck,
  Award,
  TrendingUp,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { SITE_INFO } from "@/data/constants";
import Reveal from "./Reveal";

// Swiper Slides Data using local optimized assets + high-res photographic fallbacks
const ABOUT_SLIDES = [
  {
    id: 1,
    image: "/images/hero_light_web_studio.jpg",
    fallback: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=700&fit=crop&auto=format&q=80",
    alt: "Stackwise Solutions Engineering Studio",
    tag: "Engineering Collaboration Studio",
    floatBadge1: "📍 Gurugram, India",
    floatBadge2: "✨ Est. 2023 Studio",
    icon: Sparkles,
  },
  {
    id: 2,
    image: "/images/hero_light_app_dev.jpg",
    fallback: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&h=700&fit=crop&auto=format&q=80",
    alt: "Modern Software Architecture & Mobile Engineering",
    tag: "High-Speed App Architecture",
    floatBadge1: "🚀 100/100 Speed Standard",
    floatBadge2: "🛡️ Zero Tech Debt",
    icon: Zap,
  },
  {
    id: 3,
    image: "/images/hero_light_cloud_api.jpg",
    fallback: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&h=700&fit=crop&auto=format&q=80",
    alt: "Enterprise Cloud Backends & Custom APIs",
    tag: "Production-Grade Reliability",
    floatBadge1: "🔒 Certified Quality",
    floatBadge2: "⚡ < 24h SLA Support",
    icon: ShieldCheck,
  },
  {
    id: 4,
    image: "/images/hero_light_digital_growth.jpg",
    fallback: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&h=700&fit=crop&auto=format&q=80",
    alt: "Agile High-Speed Delivery & Scaling",
    tag: "Agile Sprint Deliveries",
    floatBadge1: "📈 4-Stage Blueprint",
    floatBadge2: "🎯 Direct Senior Devs",
    icon: TrendingUp,
  },
];

const HIGHLIGHTS = [
  "Custom High-Performance Web & Mobile Solutions",
  "100/100 Lighthouse Performance & Speed Standard",
  "Direct Communication with Senior Software Engineers",
  "Guaranteed < 24-Hour SLA Client Support Response",
];

export default function About() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 2xl:px-20 relative overflow-hidden bg-gradient-to-b from-[#faf7f2] via-[#fffdfa] to-[#f5efe4]"
    >
      {/* Ambient Light Glows */}
      <div className="absolute top-12 -left-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-amber-200/40 blur-3xl float-slow pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-72 sm:w-[30rem] h-72 sm:h-[30rem] rounded-full bg-teal-200/30 blur-3xl float-slow-delay pointer-events-none" />

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
        
        {/* Main 2-Column Section: Left Story Content + Right Swiper Slider */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center mb-10 sm:mb-14">
          
          {/* Left Column (6 Cols): Header & Short Description */}
          <Reveal direction="left" className="lg:col-span-6 space-y-4">
            
            {/* Header Badge */}
            <div
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs sm:text-sm font-semibold tracking-wide shadow-xs backdrop-blur-md text-[#78350f]"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700 animate-pulse shrink-0" />
              <span>// ABOUT {SITE_INFO.name.toUpperCase()}</span>
            </div>

            {/* Title */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold leading-tight text-[#1a1611]"
            >
              Architecting Scalable Digital Products with <span className="shimmer-text">Precision & Integrity</span>
            </h2>

            {/* Short Description of Stackwise Solutions */}
            <p
              className="text-sm sm:text-base md:text-lg font-medium sm:font-semibold leading-relaxed pt-1 text-[#1a1611]"
            >
              Based in Gurugram, India, <strong className="font-extrabold underline decoration-amber-500/50 decoration-2 text-black">{SITE_INFO.name}</strong> is a modern full-stack engineering & digital growth studio dedicated to building high-performance websites, mobile apps, cloud backends, and marketing strategies for growing businesses worldwide.
            </p>

            {/* Core Highlights Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2">
              {HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm font-bold bg-white/95 p-2.5 sm:p-3 rounded-xl border border-amber-900/15 shadow-xs hover:border-amber-700/30 transition duration-300 text-[#1a1611]"
                >
                  <div className="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

          </Reveal>

          {/* Right Column (6 Cols): Swiper Slider */}
          <Reveal direction="right" delay={100} className="lg:col-span-6 relative w-full">
            <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white/95 border border-amber-900/15 shadow-xl sm:shadow-2xl backdrop-blur-md w-full">
              
              {/* Responsive Swiper container with guaranteed heights across all mobile & desktop viewports */}
              <div className="w-full relative rounded-xl sm:rounded-2xl overflow-hidden bg-amber-100/40">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation, EffectFade]}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  speed={750}
                  loop={true}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
                  className="about-swiper w-full rounded-xl sm:rounded-2xl"
                >
                  {ABOUT_SLIDES.map((slide, sIdx) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                      <div className="relative w-full h-full group img-zoom-wrap bg-amber-900/10 overflow-hidden min-h-full">
                        {/* Primary Image with native & responsive sizing */}
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="w-full h-full object-cover object-center img-zoom block transition-transform duration-700 ease-out"
                          loading={sIdx === 0 ? "eager" : "lazy"}
                          decoding="async"
                          onError={(e) => {
                            // Fallback to Unsplash if local file has any loading issue
                            if (e.target.src !== slide.fallback) {
                              e.target.src = slide.fallback;
                            }
                          }}
                        />

                        {/* Top & Bottom Readability Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                        {/* Live Studio Badge Top-Left */}
                        <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/95 backdrop-blur-md border border-amber-200/80 text-amber-950 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 shadow-md z-10">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                          <span>Stackwise Studio</span>
                        </div>

                        {/* Floating Badge Top-Right (Desktop & Tablet) */}
                        <div className="hidden sm:flex absolute top-4 right-4 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-200/80 shadow-lg items-center gap-2 text-xs font-semibold text-amber-900 float-slow z-10">
                          <Zap className="w-4 h-4 text-amber-600 fill-amber-500/20 shrink-0" />
                          <span>{slide.floatBadge1}</span>
                        </div>

                        {/* Floating Badge Bottom-Left (Desktop & Tablet) */}
                        <div className="hidden sm:flex absolute bottom-4 left-4 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-200/80 shadow-lg items-center gap-2 text-xs font-semibold text-amber-900 float-slow-delay z-10">
                          <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                          <span>{slide.floatBadge2}</span>
                        </div>

                        {/* Bottom Tag Label (Mobile & Desktop) */}
                        <div className="absolute bottom-2.5 left-2.5 right-auto sm:left-auto sm:bottom-4 sm:right-4 max-w-[85%] sm:max-w-[70%] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-amber-950/85 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold border border-white/20 shadow-md z-10 truncate">
                          {slide.tag}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Swiper Navigation Bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/95 backdrop-blur-md rounded-xl mt-2 border border-amber-900/10 shadow-xs">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-amber-950">
                  <span className="text-amber-900 font-extrabold text-sm sm:text-base">0{activeSlideIndex + 1}</span>
                  <span className="text-amber-900/40">/</span>
                  <span className="text-amber-950/70">0{ABOUT_SLIDES.length}</span>
                  <span className="hidden md:inline-block text-xs font-semibold text-amber-800/80 ml-2">
                    • {ABOUT_SLIDES[activeSlideIndex]?.tag}
                  </span>
                </div>

                {/* Mobile Active Slide Highlight Pill */}
                <div className="flex sm:hidden items-center gap-1 overflow-hidden px-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-950 border border-amber-500/25 truncate max-w-[130px]">
                    {ABOUT_SLIDES[activeSlideIndex]?.floatBadge1}
                  </span>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous Slide"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-100 hover:bg-amber-800 hover:text-white text-amber-900 flex items-center justify-center transition active:scale-95 shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next Slide"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-100 hover:bg-amber-800 hover:text-white text-amber-900 flex items-center justify-center transition active:scale-95 shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </Reveal>

        </div>

        {/* PROMINENT HIGH-IMPACT MISSION & VISION SECTION */}
        <Reveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            
            {/* PROMINENT MISSION CARD */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-amber-900/15 shadow-lg sm:shadow-xl hover:border-amber-700/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-950 text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700 stroke-[2.5]" />
                  <span>🎯 OUR MISSION</span>
                </div>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-bold shrink-0">
                  01
                </span>
              </div>

              <h3
                className="text-lg sm:text-xl md:text-2xl font-display font-extrabold leading-snug mb-2 sm:mb-3 group-hover:text-amber-950 transition-colors text-[#1a1611]"
              >
                Empowering Businesses with High-Speed, Conversion-Engineered Software
              </h3>

              <p
                className="text-xs sm:text-sm text-[#594f42] leading-relaxed font-medium"
              >
                Our mission is to build resilient, ultra-fast web and mobile applications engineered for 100/100 Lighthouse performance, sub-second load times, and seamless user experiences that convert visitors into loyal repeat customers.
              </p>
            </div>

            {/* PROMINENT VISION CARD */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-amber-900/15 shadow-lg sm:shadow-xl hover:border-amber-700/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-950 text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                  <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-700 stroke-[2.5]" />
                  <span>🚀 OUR VISION</span>
                </div>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center text-xs font-bold shrink-0">
                  02
                </span>
              </div>

              <h3
                className="text-lg sm:text-xl md:text-2xl font-display font-extrabold leading-snug mb-2 sm:mb-3 group-hover:text-teal-950 transition-colors text-[#1a1611]"
              >
                To Be the Most Trusted Studio for Zero-Technical-Debt Architecture
              </h3>

              <p
                className="text-xs sm:text-sm text-[#594f42] leading-relaxed font-medium"
              >
                Our vision is to set the benchmark for software craftsmanship — delivering modular, zero-tech-debt codebases with 100% full source code IP handover, direct senior developer access, and complete operational transparency.
              </p>
            </div>

          </div>
        </Reveal>

      </div>

      {/* Cross-device bulletproof Swiper dimensions */}
      <style jsx global>{`
        .about-swiper {
          width: 100% !important;
          height: 240px !important;
          position: relative;
        }
        @media (min-width: 420px) {
          .about-swiper {
            height: 280px !important;
          }
        }
        @media (min-width: 640px) {
          .about-swiper {
            height: 340px !important;
          }
        }
        @media (min-width: 768px) {
          .about-swiper {
            height: 380px !important;
          }
        }
        @media (min-width: 1024px) {
          .about-swiper {
            height: 420px !important;
          }
        }
        .about-swiper .swiper-wrapper {
          width: 100% !important;
          height: 100% !important;
          display: flex !important;
        }
        .about-swiper .swiper-slide {
          width: 100% !important;
          height: 100% !important;
          flex-shrink: 0 !important;
          overflow: hidden !important;
        }
        .about-swiper .swiper-slide img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
      `}</style>
    </section>
  );
}