"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  CheckCircle2,
  Maximize2,
  X,
  Sparkles,
  Code,
  Server,
  Zap,
  ShieldCheck,
  CheckSquare,
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
      <div
        className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt} className="w-full h-full object-contain max-h-[85vh]" />
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        open ? "bg-panel border-gold/50 shadow-md" : "bg-panel border-amber-900/15 hover:border-gold/30"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-4 bg-panel"
      >
        <span className="text-[#1a1611] text-base font-bold leading-snug">{q}</span>
        <span
          className={`w-7 h-7 rounded-full bg-gold/15 text-gold font-bold text-sm shrink-0 flex items-center justify-center transition-transform duration-200 ${
            open ? "rotate-45 bg-gold text-ink" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-[#3a3128] text-sm leading-relaxed border-t border-amber-900/10 pt-4 bg-amber-500/5 font-medium">
          {a}
        </div>
      )}
    </div>
  );
}

export default function WebDevelopmentPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");

  const service = {
    title: "Web Development",
    tagline: "End-to-end scalable web solutions",
    desc: "Custom websites and web apps built to be fast, secure, and easy to manage — from brochure sites to full multi-role web applications.",
    deliverables: "Live Website · Admin Panel · Source Code · Production Deployment",
    turnaround: "2 – 6 Weeks",
  };

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition">Services</Link>
          <span>/</span>
          <span className="text-[#1a1611] font-bold">Web Development</span>
        </div>

        {/* Hero */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel via-panel to-panel2 border border-amber-900/15 shadow-2xl p-8 sm:p-12 mb-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20">
                  Full-Stack Engineering
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight">
                Custom Web Development
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                High-performance, SEO-optimized web applications built with Next.js, React, Node.js, and Laravel. Crafted for speed, security, and effortless scaling.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight btn-pop transition shadow-lg shadow-gold/20"
                >
                  Start Your Build →
                </button>
              </div>
            </div>

            <div
              onClick={() =>
                setLightboxSrc(
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=650&fit=crop&auto=format&q=80"
                )
              }
              className="lg:col-span-5 relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-amber-900/15 img-zoom-wrap shadow-inner cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=650&fit=crop&auto=format&q=80"
                alt="Web Development Code"
                className="w-full h-full object-cover img-zoom"
              />
            </div>
          </div>
        </Reveal>

        {/* Unique Interactive Live Browser & Code Simulator */}
        <Reveal delay={100}>
          <div className="bg-panel border border-amber-900/15 rounded-3xl overflow-hidden shadow-2xl mb-14">
            <div className="flex items-center justify-between px-5 py-3 bg-[#1a1611] text-white border-b border-amber-900/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-3 text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-gold border border-white/10 hidden sm:inline-block">
                  https://stackwise-web-app.com
                </span>
              </div>
              <div className="flex gap-2">
                {["preview", "code", "performance"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition ${
                      activeTab === tab ? "bg-gold text-ink font-bold" : "text-amber-100/70 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {activeTab === "preview" && (
                <div className="grid sm:grid-cols-2 gap-6 items-center">
                  <div className="relative rounded-2xl overflow-hidden border border-amber-900/15 h-64 img-zoom-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=650&fit=crop&auto=format&q=80"
                      alt="Responsive Web Application"
                      className="w-full h-full object-cover img-zoom"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#1a1611]">Full-Stack Web Architecture</h4>
                    <p className="text-xs text-muted leading-relaxed">
                      Clean Next.js / React frontend connected to a robust Node.js or Laravel backend. SEO optimized out of the box with zero runtime layout shifts.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-base border border-amber-900/10 text-center">
                        <p className="text-gold font-bold text-xl">100 / 100</p>
                        <p className="text-[11px] text-muted font-medium mt-0.5">Core Web Vitals</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-base border border-amber-900/10 text-center">
                        <p className="text-gold font-bold text-xl">&lt; 0.4s</p>
                        <p className="text-[11px] text-muted font-medium mt-0.5">Page Load Time</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "code" && (
                <div className="font-mono text-xs bg-[#1a1611] text-emerald-400 p-5 rounded-2xl overflow-x-auto leading-relaxed shadow-inner">
                  <p className="text-muted/60">// Next.js App Router Server Component Strategy</p>
                  <p className="text-gold">export async function <span className="text-white">Page</span>({`{ params }`}) {`{`}</p>
                  <p className="pl-4">const data = await <span className="text-sky-300">fetchProductionData</span>(params.slug);</p>
                  <p className="pl-4">return &lt;<span className="text-pink-400">WebComponent</span> data={`{data}`} /&gt;;</p>
                  <p>{`}`}</p>
                </div>
              )}

              {activeTab === "performance" && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  {[["SEO", "100%"], ["Performance", "99%"], ["Accessibility", "100%"], ["Best Practices", "100%"]].map(
                    ([lbl, val]) => (
                      <div key={lbl} className="p-5 rounded-2xl bg-base border border-amber-900/10">
                        <p className="text-2xl font-bold text-gold">{val}</p>
                        <p className="text-xs text-muted mt-1 font-semibold">{lbl}</p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            ["Turnaround", "2 – 6 Weeks"],
            ["Deliverables", "Source Code & Docs"],
            ["Response SLA", "< 2 Hours"],
            ["Post-Launch", "Support Included"],
          ].map(([label, val], i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="bg-panel border border-amber-900/15 rounded-2xl p-5 text-center shadow-md">
                <p className="text-[#1a1611] text-sm sm:text-base font-bold">{val}</p>
                <p className="text-muted text-xs mt-1 font-medium">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Sub-Services Checklist */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                Web Development Services Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Custom Website Development",
                  "CMS Development (WordPress / Custom)",
                  "E-commerce Web Applications",
                  "MERN & Laravel Web Applications",
                  "Website Speed & SEO Performance Audits",
                  "Responsive Mobile-First UI/UX",
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

            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                <FaqItem
                  q="Do you build with custom code or WordPress?"
                  a="Both. We recommend WordPress for marketing content sites, and custom React / Next.js / Laravel for web applications requiring high performance and custom logic."
                />
                <FaqItem
                  q="Will the website be mobile responsive?"
                  a="Yes, every site we build is thoroughly tested across iOS, Android, tablets, and desktop resolutions."
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-xl lg:sticky lg:top-28 space-y-6">
              <h3 className="text-xl font-display font-bold text-[#1a1611]">
                Web Project Snapshot
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Full source code, production deployment, and direct developer access included.
              </p>
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

      <ImageLightbox
        src={lightboxSrc}
        onClose={() => setLightboxSrc(null)}
      />
    </>
  );
}
