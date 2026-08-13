"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBullhorn,
} from "react-icons/fa";
import {
  CheckCircle2,
  TrendingUp,
  X,
} from "lucide-react";
import { SITE_INFO } from "@/data/constants";
import EnquiryModal from "@/components/EnquiryModal";
import Reveal from "@/components/Reveal";

function ImageLightbox({ src, onClose }) {
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
        <img src={src} alt="Digital Marketing Campaign" className="w-full h-full object-contain max-h-[85vh]" />
      </div>
    </div>
  );
}

export default function DigitalMarketingPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [monthlyBudget, setMonthlyBudget] = useState(25000);

  const service = {
    title: "Digital Marketing & SEO",
    tagline: "Grow visibility, traffic & conversions",
    desc: "SEO and targeted ad campaigns that bring the right people to your business — measured by real revenue outcomes, not just likes.",
    deliverables: "Technical SEO Audit · Ad Campaigns Setup · Monthly Growth Reports",
    turnaround: "Ongoing / Monthly",
  };

  const mainImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=650&fit=crop&auto=format&q=80";

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition">Services</Link>
          <span>/</span>
          <span className="text-[#1a1611] font-bold">Digital Marketing</span>
        </div>

        {/* Hero */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel via-panel to-panel2 border border-amber-900/15 shadow-2xl p-8 sm:p-12 mb-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <FaBullhorn className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20">
                  SEO & High-ROAS Paid Campaigns
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight">
                Digital Marketing & SEO Growth
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Data-driven search engine optimization, Google Ads, Meta Ads, and social media content strategies to turn visitors into paying customers.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight btn-pop transition shadow-lg shadow-gold/20"
                >
                  Grow Your Business →
                </button>
              </div>
            </div>

            <div
              onClick={() => setLightboxSrc(mainImg)}
              className="lg:col-span-5 relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-amber-900/15 img-zoom-wrap shadow-inner cursor-pointer"
            >
              <img src={mainImg} alt="Digital Marketing Growth" className="w-full h-full object-cover img-zoom" />
            </div>
          </div>
        </Reveal>

        {/* Unique Campaign Growth Analytics & ROAS Estimator */}
        <Reveal delay={100}>
          <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-2xl mb-14">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-amber-900/10">
              <div>
                <h4 className="text-xl font-bold text-[#1a1611]">Campaign Growth Analytics</h4>
                <p className="text-xs text-muted mt-0.5">Data-driven SEO & targeted Meta/Google advertising.</p>
              </div>
              <TrendingUp className="w-7 h-7 text-gold" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8">
              <div className="p-5 rounded-2xl bg-base border border-amber-900/10">
                <p className="text-2xl font-bold text-gold">+240%</p>
                <p className="text-xs text-muted mt-1 font-semibold">Organic Traffic</p>
              </div>
              <div className="p-5 rounded-2xl bg-base border border-amber-900/10">
                <p className="text-2xl font-bold text-gold">3.5x</p>
                <p className="text-xs text-muted mt-1 font-semibold">Conversion Lift</p>
              </div>
              <div className="p-5 rounded-2xl bg-base border border-amber-900/10">
                <p className="text-2xl font-bold text-gold">&lt; $4.20</p>
                <p className="text-xs text-muted mt-1 font-semibold">Cost Per Lead</p>
              </div>
              <div className="p-5 rounded-2xl bg-base border border-amber-900/10">
                <p className="text-2xl font-bold text-gold">#1 Rank</p>
                <p className="text-xs text-muted mt-1 font-semibold">Target Keywords</p>
              </div>
            </div>

            {/* Interactive ROAS Estimator Slider */}
            <div className="bg-base p-6 rounded-2xl border border-amber-900/10 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#1a1611] uppercase tracking-wider">
                  Estimated Ad Budget Simulator:
                </span>
                <span className="text-gold font-bold font-mono text-sm">
                  ₹{monthlyBudget.toLocaleString("en-IN")} / month
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="150000"
                step="5000"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full accent-gold cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted pt-2 border-t border-amber-900/10">
                <div>
                  <span className="block font-bold text-[#1a1611]">Estimated Leads:</span>
                  <span className="text-gold font-bold">{Math.round(monthlyBudget / 250)} - {Math.round(monthlyBudget / 180)} leads</span>
                </div>
                <div className="text-right">
                  <span className="block font-bold text-[#1a1611]">Estimated Revenue Lift:</span>
                  <span className="text-emerald-600 font-bold">3.2x — 4.5x ROAS</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Deliverables Checklist */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                Digital Marketing Services Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "On-Page & Technical SEO Audits",
                  "Google Search & Display Ads Setup",
                  "Meta (Facebook & Instagram) Targeted Ad Campaigns",
                  "Social Media Management & Content Calendars",
                  "Conversion Rate Optimization (CRO)",
                  "Transparent Monthly Analytics Reporting",
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
                Marketing Package
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
