"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BiLinkAlt,
} from "react-icons/bi";
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  X,
  Database,
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
        <img src={src} alt="API Integration Architecture" className="w-full h-full object-contain max-h-[85vh]" />
      </div>
    </div>
  );
}

export default function ApiIntegrationPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const service = {
    title: "API Integration",
    tagline: "Seamless third-party integrations",
    desc: "Connect your product to payment gateways, AI services, and mapping tools — wired up securely with retry logic and signature verification.",
    deliverables: "Integrated Services · Webhooks · Secure API Endpoints",
    turnaround: "1 – 2 Weeks",
  };

  const mainImg = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop&auto=format&q=80";

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition">Services</Link>
          <span>/</span>
          <span className="text-[#1a1611] font-bold">API Integration</span>
        </div>

        {/* Hero */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel via-panel to-panel2 border border-amber-900/15 shadow-2xl p-8 sm:p-12 mb-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <BiLinkAlt className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20">
                  Payments, AI & Third-Party Services
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight">
                API & Service Integration
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Connect your platform with Razorpay, Stripe, OpenAI GPT-4, Google Maps, and automated webhooks with robust error handling and signature security.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight btn-pop transition shadow-lg shadow-gold/20"
                >
                  Integrate APIs →
                </button>
              </div>
            </div>

            <div
              onClick={() => setLightboxSrc(mainImg)}
              className="lg:col-span-5 relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-amber-900/15 img-zoom-wrap shadow-inner cursor-pointer"
            >
              <img src={mainImg} alt="API Integration Network" className="w-full h-full object-cover img-zoom" />
            </div>
          </div>
        </Reveal>

        {/* Unique Microservice Node Network Visualizer */}
        <Reveal delay={100}>
          <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-2xl mb-14">
            <h4 className="text-xl font-bold text-[#1a1611] mb-1">Connected Integration Ecosystem</h4>
            <p className="text-xs text-muted mb-6">Wired up with retry logic, signature verification, and automated event webhooks.</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Razorpay / Stripe", tag: "Payments", status: "Active 200 OK" },
                { name: "OpenAI GPT-4", tag: "AI Features", status: "Active 200 OK" },
                { name: "Google Maps API", tag: "Geolocation", status: "Active 200 OK" },
                { name: "Custom Webhooks", tag: "Automation", status: "Listening..." },
              ].map((node) => (
                <div key={node.name} className="p-4 rounded-2xl bg-base border border-amber-900/15 text-center shadow-xs">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mx-auto mb-2 animate-pulse" />
                  <p className="text-xs font-bold text-[#1a1611]">{node.name}</p>
                  <p className="text-[11px] text-gold font-medium mt-0.5">{node.tag}</p>
                  <p className="text-[10px] text-emerald-600 font-mono mt-1 font-semibold">{node.status}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Deliverables Checklist */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                Integrations Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Payment Gateway Integration (Razorpay, Stripe, PayPal)",
                  "OpenAI GPT-4 / AI Chatbot & Tagging Integration",
                  "Google Maps API & Geolocation Services",
                  "Webhook Setup & Signature Verification",
                  "CRM & Email Marketing Tool Connections",
                  "Custom REST & GraphQL Endpoints",
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
                API Project Snapshot
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
