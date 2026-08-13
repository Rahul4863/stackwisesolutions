"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaClock,
  FaChevronRight,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { SITE_INFO, socials, SERVICES, INDUSTRIES } from "@/data/constants";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Work", href: "/#portfolio", badge: "Case Studies" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const featuredServices = SERVICES.slice(0, 6);
  const featuredIndustries = INDUSTRIES.slice(0, 5);

  // Live IST Clock (Gurugram, India)
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeStr = new Intl.DateTimeFormat("en-US", options).format(new Date());
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) return;
    setSubscribed(true);
    setEmailInput("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-[#f4eee2] text-[#1a1611] border-t border-amber-900/10 overflow-hidden font-sans">
      {/* Decorative Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-600/20 via-amber-600/70 to-amber-600/20" />

      {/* Modern Background Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#b07a29 1px, transparent 1px), linear-gradient(90deg, #b07a29 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative Radial Background Light Blobs */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================================= */}
      {/* PRE-FOOTER CTA BANNER                                                     */}
      {/* ========================================================================= */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 2xl:px-24 pt-12 pb-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#fcf9f2] to-[#f5ebd7] p-8 sm:p-12 lg:p-14 border border-amber-900/10 shadow-xl shadow-amber-900/5">
          {/* Accent Glow inside CTA */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-amber-600/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for New Projects Q3 2026</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#1a1611] tracking-tight leading-tight">
                Ready to elevate your <span className="text-amber-700 underline decoration-amber-400/50 decoration-wavy decoration-2">digital presence?</span>
              </h2>

              <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
                Let&apos;s build something extraordinary together. Custom web apps, mobile solutions, or AI-powered workflows designed to scale.
              </p>
            </div>

            {/* Right Action / Newsletter Widget */}
            <div className="lg:col-span-5 flex flex-col gap-4 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-amber-900/10 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Stay Ahead in Tech</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Get high-impact insights on digital strategy, software engineering, and AI integration.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium animate-fadeIn">
                  <FaCheck className="text-emerald-600 shrink-0" />
                  <span>Thank you! You&apos;re subscribed to our engineering newsletter.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-white border border-amber-900/15 text-sm text-[#1a1611] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600 transition"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1a1611] hover:bg-amber-700 text-white text-sm font-medium transition-all duration-300 shrink-0 shadow-md hover:shadow-lg"
                  >
                    <span>Subscribe</span>
                    <FaPaperPlane size={12} className="text-amber-400" />
                  </button>
                </form>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-amber-900/10 text-xs text-muted">
                <span>Direct Inquiry:</span>
                <Link
                  href="/#contact"
                  className="font-semibold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1 hover:underline"
                >
                  <span>Book Free Discovery Call</span>
                  <FaArrowRight size={10} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN FOOTER NAVIGATION GRID                                               */}
      {/* ========================================================================= */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 2xl:px-24 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* COLUMN 1: Brand Info & Identity (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/footer_stack.png"
                alt={SITE_INFO.name}
                width={190}
                height={60}
                priority
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-muted text-sm leading-relaxed max-w-sm">
              {SITE_INFO.tagline} Empowering businesses worldwide with scalable code, pixel-perfect design, and growth-driven engineering.
            </p>

            {/* Live Location & Clock Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white/80 border border-amber-900/10 text-xs text-stone-700 shadow-sm">
              <div className="flex items-center gap-1.5 text-amber-700 font-medium">
                <FaClock className="animate-spin-slow text-amber-600" size={13} />
                <span>HQ Time:</span>
              </div>
              <span className="font-mono font-semibold text-[#1a1611]">
                {currentTime || "Gurugram, IN"}
              </span>
              <span className="text-stone-400">|</span>
              <span className="text-stone-500 font-medium">IST (UTC+5:30)</span>
            </div>

            {/* Quick Email Copy Box */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-amber-900/15 max-w-sm">
              <div className="pl-2 text-amber-700">
                <FaEnvelope size={14} />
              </div>
              <span className="text-xs font-mono text-stone-700 truncate flex-1">
                {SITE_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold transition flex items-center gap-1.5 shrink-0 border border-amber-200"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <FaCheck size={11} className="text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy size={11} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {socials.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Follow us on ${item.link}`}
                      className="w-10 h-10 rounded-xl bg-white border border-amber-900/10 flex items-center justify-center text-stone-600 hover:text-white hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 shadow-sm hover:scale-110"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-widest border-b border-amber-900/10 pb-2">
              Company
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-stone-600 hover:text-amber-800 font-medium transition-colors duration-200"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-amber-600/40 group-hover:text-amber-700 group-hover:translate-x-1 transition-transform"
                    />
                    <span>{l.label}</span>
                    {l.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-amber-100 text-amber-800 border border-amber-200">
                        {l.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-widest border-b border-amber-900/10 pb-2">
              Core Services
            </h3>
            <ul className="space-y-2.5">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group inline-flex items-center gap-2 text-sm text-stone-600 hover:text-amber-800 font-medium transition-colors duration-200"
                  >
                    <FaChevronRight
                      size={10}
                      className="text-amber-600/40 group-hover:text-amber-700 group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    <span className="truncate">{s.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition group"
                >
                  <span>Explore All Services</span>
                  <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Industries & Contact Info (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-widest border-b border-amber-900/10 pb-2">
                Industries We Serve
              </h3>
              <ul className="space-y-2.5">
                {featuredIndustries.map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      href={`/industry/${ind.slug}`}
                      className="group inline-flex items-center gap-2 text-sm text-stone-600 hover:text-amber-800 font-medium transition-colors duration-200"
                    >
                      <FaChevronRight
                        size={10}
                        className="text-amber-600/40 group-hover:text-amber-700 group-hover:translate-x-1 transition-transform shrink-0"
                      />
                      <span className="truncate">{ind.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2 border-t border-amber-900/10">
              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-start gap-3 p-2.5 rounded-xl bg-white/70 hover:bg-white border border-amber-900/10 text-stone-700 hover:text-amber-800 transition group shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0 group-hover:bg-amber-700 group-hover:text-white transition">
                  <FaEnvelope size={13} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold text-stone-400 uppercase">Email Us</div>
                  <div className="text-xs font-medium text-stone-800 truncate">{SITE_INFO.email}</div>
                </div>
              </a>

              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-3 p-2.5 rounded-xl bg-white/70 hover:bg-white border border-amber-900/10 text-stone-700 hover:text-amber-800 transition group shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0 group-hover:bg-amber-700 group-hover:text-white transition">
                  <FaPhoneAlt size={12} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold text-stone-400 uppercase">Call Directly</div>
                  <div className="text-xs font-medium text-stone-800">{SITE_INFO.phone}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/70 border border-amber-900/10 text-stone-700 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <FaMapMarkerAlt size={13} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold text-stone-400 uppercase">Studio Location</div>
                  <div className="text-xs font-medium text-stone-800 leading-snug">{SITE_INFO.address}</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* LARGE ARCHITECTURAL BRAND WATERMARK BACKDROP                              */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden select-none pointer-events-none py-4 border-t border-b border-amber-900/5 bg-amber-950/[0.02]">
        <div className="whitespace-nowrap font-display font-extrabold text-[4.5rem] sm:text-[7.5rem] lg:text-[10rem] tracking-tighter text-amber-900/[0.04] text-center leading-none uppercase">
          STACKWISE SOLUTIONS
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM LEGAL & COPYRIGHT BAR                                              */}
      {/* ========================================================================= */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 2xl:px-24 py-6 bg-[#ebe3d3] border-t border-amber-900/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>© {new Date().getFullYear()}</span>
            <strong className="text-stone-900 font-semibold">{SITE_INFO.name}</strong>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Crafted with precision for forward-thinking brands</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/#about" className="hover:text-amber-800 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-amber-800 transition">
              Services
            </Link>
            <Link href="/blogs" className="hover:text-amber-800 transition">
              Blog
            </Link>
            <Link href="/#contact" className="hover:text-amber-800 transition">
              Privacy &amp; Terms
            </Link>

            {/* Elevated Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top of page"
              title="Back to top"
              className="w-9 h-9 rounded-xl bg-white border border-amber-900/15 flex items-center justify-center text-stone-700 hover:text-white hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 shadow-sm hover:scale-110 shrink-0"
            >
              <FaArrowUp size={13} />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}