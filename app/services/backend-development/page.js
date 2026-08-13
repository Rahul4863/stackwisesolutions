"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaServer,
} from "react-icons/fa";
import {
  CheckCircle2,
  Terminal,
  Database,
  Lock,
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
        <img src={src} alt="Backend Infrastructure" className="w-full h-full object-contain max-h-[85vh]" />
      </div>
    </div>
  );
}

export default function BackendDevelopmentPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [responseStatus, setResponseStatus] = useState("idle");

  const service = {
    title: "Backend Development",
    tagline: "Secure & scalable server-side systems",
    desc: "Robust APIs and databases that keep your product running reliably at scale — designed to handle real production traffic.",
    deliverables: "RESTful APIs · Database Schemas · Swagger / Postman Docs",
    turnaround: "2 – 5 Weeks",
  };

  const handleTestApi = () => {
    setResponseStatus("loading");
    setTimeout(() => {
      setResponseStatus("success");
    }, 600);
  };

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition">Services</Link>
          <span>/</span>
          <span className="text-[#1a1611] font-bold">Backend Development</span>
        </div>

        {/* Hero */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel via-panel to-panel2 border border-amber-900/15 shadow-2xl p-8 sm:p-12 mb-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <FaServer className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20">
                  High-Concurrency APIs & Databases
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight">
                Backend Architecture & APIs
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Secure, high-concurrency Node.js and Laravel backends with JWT authentication, indexed database schemas, and clean Postman / Swagger documentation.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight btn-pop transition shadow-lg shadow-gold/20"
                >
                  Build Your API →
                </button>
              </div>
            </div>

            <div
              onClick={() =>
                setLightboxSrc(
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=650&fit=crop&auto=format&q=80"
                )
              }
              className="lg:col-span-5 relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-amber-900/15 img-zoom-wrap shadow-inner cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=650&fit=crop&auto=format&q=80"
                alt="Backend Server Racks"
                className="w-full h-full object-cover img-zoom"
              />
            </div>
          </div>
        </Reveal>

        {/* Unique Dark Terminal & Auth Log Simulator */}
        <Reveal delay={100}>
          <div className="bg-[#1a1611] text-white rounded-3xl p-6 sm:p-8 shadow-2xl mb-14 border border-amber-900/20">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-gold" />
                <span className="text-xs font-mono font-bold text-gold">API Endpoint Simulator & Auth Logs</span>
              </div>
              <button
                onClick={handleTestApi}
                className="px-3 py-1 rounded-full bg-gold text-ink font-bold text-xs hover:bg-goldlight transition"
              >
                {responseStatus === "loading" ? "Executing..." : "Run POST Test"}
              </button>
            </div>

            <div className="font-mono text-xs space-y-3 leading-relaxed">
              <p className="text-amber-200/70">// POST /api/v1/auth/verify-token</p>
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <p><span className="text-pink-400">Header:</span> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...</p>
                <p><span className="text-sky-300">Payload:</span> {`{ "userId": "usr_9921", "role": "ADMIN", "exp": 17400000 }`}</p>
                <p className="text-emerald-400">
                  {responseStatus === "success"
                    ? "Response: { \"status\": 200, \"authenticated\": true, \"latency\": \"14ms\" }"
                    : "Response: Ready for execution..."}
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 pt-2 text-center text-[11px]">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-gold font-bold text-sm">MySQL / MongoDB</p>
                  <p className="text-zinc-300">Indexed Schemas</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-gold font-bold text-sm">Role-Based Auth</p>
                  <p className="text-zinc-300">JWT Security</p>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <p className="text-gold font-bold text-sm">Swagger / Postman</p>
                  <p className="text-zinc-300">Live Documentation</p>
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
                Backend Features & Sub-Services
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "REST API Development & Architecture",
                  "JWT Authentication & Role-Based Access Control",
                  "Database Design & Query Optimization (MySQL/MongoDB)",
                  "Secure Routing & Validation Rules",
                  "API Documentation (Postman & Swagger)",
                  "Rate Limiting & Server CORS Policies",
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
                Backend Package
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
