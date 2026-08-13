"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SiReact,
} from "react-icons/si";
import {
  CheckCircle2,
  Maximize2,
  X,
  Sparkles,
  Layout,
  Sliders,
  Eye,
} from "lucide-react";
import { SITE_INFO } from "@/data/constants";
import EnquiryModal from "@/components/EnquiryModal";
import Reveal from "@/components/Reveal";

function ImageLightbox({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl border border-white/20">
        <img src={src} alt={alt} className="w-full h-full object-contain max-h-[85vh]" />
      </div>
    </div>
  );
}

export default function FrontendDevelopmentPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [activeBtn, setActiveBtn] = useState("primary");
  const [darkMode, setDarkMode] = useState(false);

  const service = {
    title: "UI/UX & Frontend Development",
    tagline: "Modern, fast & responsive UI",
    desc: "Pixel-perfect, responsive interfaces that feel great on every device — built as reusable React components, not one-off pages.",
    deliverables: "React Components · Design Tokens · Figma Translation",
    turnaround: "1 – 3 Weeks",
  };

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition">Services</Link>
          <span>/</span>
          <span className="text-[#1a1611] font-bold">UI/UX Development</span>
        </div>

        {/* Hero */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel via-panel to-panel2 border border-amber-900/15 shadow-2xl p-8 sm:p-12 mb-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <SiReact className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20">
                  Figma-to-Code & Design Systems
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight">
                UI/UX & Frontend Development
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Transform Figma wireframes into interactive, accessible React components with Tailwind CSS. Optimized for smooth animations and fluid responsive layouts.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight btn-pop transition shadow-lg shadow-gold/20"
                >
                  Build Your UI →
                </button>
              </div>
            </div>

            <div
              onClick={() =>
                setLightboxSrc(
                  "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=900&h=650&fit=crop&auto=format&q=80"
                )
              }
              className="lg:col-span-5 relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-amber-900/15 img-zoom-wrap shadow-inner cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=900&h=650&fit=crop&auto=format&q=80"
                alt="UI UX Figma Design"
                className="w-full h-full object-cover img-zoom"
              />
            </div>
          </div>
        </Reveal>

        {/* Unique Figma Component Sandbox */}
        <Reveal delay={100}>
          <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-2xl mb-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-900/10">
              <div>
                <h4 className="text-xl font-bold text-[#1a1611]">Design System Component Sandbox</h4>
                <p className="text-xs text-muted mt-1">Pixel-perfect Figma translations built with Tailwind CSS & React state.</p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-3.5 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-bold border border-gold/20 hover:bg-gold/25 transition"
              >
                Toggle Theme Preview: {darkMode ? "Dark Theme" : "Light Theme"}
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 items-center">
              <div className={`p-5 rounded-2xl border transition-all ${darkMode ? "bg-[#1a1611] text-white border-white/10" : "bg-base text-[#1a1611] border-amber-900/10"}`}>
                <p className="text-[11px] font-bold text-gold uppercase tracking-wider mb-3">Interactive Button Variations</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveBtn("primary")}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                      activeBtn === "primary" ? "bg-gold text-ink shadow-md" : "bg-panel text-[#1a1611] border border-amber-900/15"
                    }`}
                  >
                    Primary Gold
                  </button>
                  <button
                    onClick={() => setActiveBtn("outline")}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                      activeBtn === "outline" ? "border-2 border-gold text-gold" : "bg-panel text-[#1a1611] border border-amber-900/15"
                    }`}
                  >
                    Outline Style
                  </button>
                </div>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${darkMode ? "bg-[#1a1611] text-white border-white/10" : "bg-base text-[#1a1611] border-amber-900/10"}`}>
                <p className="text-[11px] font-bold text-gold uppercase tracking-wider mb-3">Fluid Breakpoint Controls</p>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between font-semibold"><span>Mobile (sm)</span> <span className="text-gold">375px</span></div>
                  <div className="flex justify-between font-semibold"><span>Tablet (md)</span> <span className="text-gold">768px</span></div>
                  <div className="flex justify-between font-semibold"><span>Desktop (lg)</span> <span className="text-gold">1440px</span></div>
                </div>
              </div>

              <div className="relative h-44 rounded-2xl overflow-hidden border border-amber-900/15 img-zoom-wrap cursor-pointer shadow-md">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&h=650&fit=crop&auto=format&q=80" alt="UI Component" className="w-full h-full object-cover img-zoom" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Deliverables Checklist */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                UI/UX Features Delivered
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Pixel-Perfect Responsive UI",
                  "Reusable Component Architecture",
                  "Performance & Lazy Loading",
                  "Tailwind CSS / Bootstrap",
                  "Accessibility & Cross-Browser Testing",
                  "Figma / Adobe XD Handoff",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-panel border border-amber-900/15 rounded-2xl p-4 flex items-start gap-3 border-l-4 border-l-gold shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-[#1a1611] text-sm font-semibold leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-xl lg:sticky lg:top-28 space-y-6">
              <h3 className="text-xl font-display font-bold text-[#1a1611]">
                UI Project Snapshot
              </h3>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="w-full py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight transition btn-pop shadow-lg shadow-gold/20 text-center"
              >
                Enquire Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {enquiryOpen && (
        <EnquiryModal service={service} onClose={() => setEnquiryOpen(false)} />
      )}

      <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
