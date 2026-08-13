"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MdPhoneIphone,
} from "react-icons/md";
import {
  CheckCircle2,
  Smartphone,
  Zap,
  ShieldCheck,
  X,
  Maximize2,
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
        <img src={src} alt={alt || "Mobile App Screen"} className="w-full h-full object-contain max-h-[85vh]" />
      </div>
    </div>
  );
}

export default function MobileAppDevelopmentPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [activeScreen, setActiveScreen] = useState("screen1");

  const service = {
    title: "Mobile App Development",
    tagline: "Cross-platform mobile apps for Android & iOS",
    desc: "React Native apps for Android & iOS with one shared codebase — so you ship both platforms without doubling your budget or timeline.",
    deliverables: "React Native App · API Integration · Store-Ready Build",
    turnaround: "3 – 6 Weeks",
  };

  const mainImg = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=650&fit=crop&auto=format&q=80";
  const secondImg = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=650&fit=crop&auto=format&q=80";

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition">Services</Link>
          <span>/</span>
          <span className="text-[#1a1611] font-bold">Mobile App Development</span>
        </div>

        {/* Hero */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel via-panel to-panel2 border border-amber-900/15 shadow-2xl p-8 sm:p-12 mb-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <MdPhoneIphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20">
                  iOS & Android React Native
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight">
                Cross-Platform Mobile Apps
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Single codebase delivering native performance on both Apple App Store and Google Play Store. Built with React Native and Expo for fast iterations and easy updates.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight btn-pop transition shadow-lg shadow-gold/20"
                >
                  Build Your Mobile App →
                </button>
              </div>
            </div>

            <div
              onClick={() => setLightboxSrc(mainImg)}
              className="lg:col-span-5 relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-amber-900/15 img-zoom-wrap shadow-inner cursor-pointer"
            >
              <img src={mainImg} alt="Mobile App Development" className="w-full h-full object-cover img-zoom" />
            </div>
          </div>
        </Reveal>

        {/* Unique Dual Phone Mockup Frame */}
        <Reveal delay={100}>
          <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-10 shadow-2xl mb-14">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h4 className="text-2xl font-bold text-[#1a1611]">Cross-Platform React Native Architecture</h4>
              <p className="text-xs text-muted mt-1">One shared codebase shipping natively on both Apple App Store and Google Play Store.</p>
              
              <div className="flex justify-center gap-2 mt-4">
                <button
                  onClick={() => setActiveScreen("screen1")}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    activeScreen === "screen1" ? "bg-gold text-ink" : "bg-base text-muted border border-amber-900/10"
                  }`}
                >
                  App Main Feed
                </button>
                <button
                  onClick={() => setActiveScreen("screen2")}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    activeScreen === "screen2" ? "bg-gold text-ink" : "bg-base text-muted border border-amber-900/10"
                  }`}
                >
                  Checkout Screen
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
              <div
                onClick={() => setLightboxSrc(activeScreen === "screen1" ? mainImg : secondImg)}
                className="relative w-44 sm:w-52 aspect-[9/19] rounded-[2.5rem] border-[6px] border-[#1a1611] shadow-2xl overflow-hidden -rotate-2 hover:rotate-0 transition-transform duration-300 img-zoom-wrap cursor-pointer"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1a1611] rounded-b-xl z-20" />
                <img
                  src={activeScreen === "screen1" ? mainImg : secondImg}
                  alt="iOS App Screen"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>

              <div
                onClick={() => setLightboxSrc(activeScreen === "screen1" ? secondImg : mainImg)}
                className="relative w-48 sm:w-56 aspect-[9/19] rounded-[2.5rem] border-[6px] border-[#1a1611] shadow-2xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-300 img-zoom-wrap cursor-pointer"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1a1611] rounded-b-xl z-20" />
                <img
                  src={activeScreen === "screen1" ? secondImg : mainImg}
                  alt="Android App Screen"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Deliverables Checklist */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                Mobile App Capabilities Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "React Native iOS & Android App",
                  "REST / GraphQL API Backend Integration",
                  "Push Notifications (Firebase Cloud Messaging)",
                  "Offline Caching & Data Sync",
                  "Camera, GPS & Biometrics Integration",
                  "Play Store & App Store Publishing",
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
                Mobile App Package
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
