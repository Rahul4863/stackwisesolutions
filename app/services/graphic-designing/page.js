"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Palette,
  CheckCircle2,
  Copy,
  Check,
  Maximize2,
  X,
  Sparkles,
  ArrowRight,
  Download,
  Layers,
  Eye,
  CheckSquare,
  HelpCircle,
} from "lucide-react";
import { SITE_INFO, TESTIMONIALS } from "@/data/constants";
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
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
          <p className="text-white text-sm font-semibold">{alt}</p>
        </div>
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

export default function GraphicDesigningPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState("");
  const [activeTab, setActiveTab] = useState("logos");
  const [copiedHex, setCopiedHex] = useState(null);
  const [previewText, setPreviewText] = useState("Stackwise Visual Studio");
  const [logoTheme, setLogoTheme] = useState("dark");

  const service = {
    title: "Graphic Designing & Visual Identity",
    tagline: "Clean, modern visual branding & design assets",
    desc: "Branding and creatives that make your business instantly recognizable — designed to hold up across print, social media, and web platforms.",
    deliverables: "Vector Logo Files (.AI, .EPS, .SVG) · Brand Style Guide · Social Media Templates",
    turnaround: "3 – 7 Days",
  };

  const brandColors = [
    { hex: "#1A1611", name: "Espresso Noir", role: "Primary Background" },
    { hex: "#B07A29", name: "Brass Gold", role: "Brand Accent" },
    { hex: "#F7F3EB", name: "Warm Ivory", role: "Surface Panel" },
    { hex: "#E63946", name: "Crimson Pop", role: "Highlight Accent" },
    { hex: "#2A9D8F", name: "Teal Emerald", role: "Secondary Accent" },
  ];

  const graphicGallery = [
    {
      title: "Logo Mark & Branding Kit",
      tag: "Vector Logo",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&h=650&fit=crop&auto=format&q=80",
    },
    {
      title: "Social Media Banner Suite",
      tag: "Instagram / LinkedIn",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=650&fit=crop&auto=format&q=80",
    },
    {
      title: "Corporate Stationery & Packaging",
      tag: "300 DPI Print Ready",
      img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=900&h=650&fit=crop&auto=format&q=80",
    },
    {
      title: "UI Wireframes & Pitch Decks",
      tag: "Figma Vector Assets",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&h=650&fit=crop&auto=format&q=80",
    },
  ];

  const handleCopyHex = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition">Services</Link>
          <span>/</span>
          <span className="text-[#1a1611] font-bold">Graphic Designing</span>
        </div>

        {/* Dedicated Hero Section */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel via-panel to-panel2 border border-amber-900/15 shadow-2xl p-8 sm:p-12 mb-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20">
                  Creative Studio & Visual Identity
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight">
                Graphic Designing & Branding
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Elevate your brand presence with clean, high-impact graphic design. From vector logos and stationery to marketing banners and social media packages.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight btn-pop transition shadow-lg shadow-gold/20"
                >
                  Request Brand Kit →
                </button>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="px-6 py-3.5 rounded-full border border-amber-900/15 text-[#1a1611] font-bold hover:border-gold hover:text-gold transition"
                >
                  Email Designers
                </a>
              </div>
            </div>

            {/* Featured Image */}
            <div
              onClick={() =>
                setLightboxSrc(
                  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&h=650&fit=crop&auto=format&q=80"
                )
              }
              className="lg:col-span-5 relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-amber-900/15 img-zoom-wrap shadow-inner cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&h=650&fit=crop&auto=format&q=80"
                alt="Graphic Design Studio"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Interactive Bespoke Graphic Design Studio Workbench */}
        <Reveal delay={100}>
          <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-10 shadow-2xl mb-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-amber-900/10 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold mb-2">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Interactive Brand Studio Workbench</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1a1611]">
                  Visual Identity & Graphic Design Suite
                </h3>
                <p className="text-xs text-muted mt-1">
                  Test logo concepts, copy color hex codes, preview custom typography, and view graphic design work samples.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: "logos", label: "Logo & Brand Kit" },
                  { id: "palette", label: "Color Palette" },
                  { id: "typography", label: "Typography" },
                  { id: "gallery", label: "Design Gallery" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                      activeTab === t.id
                        ? "bg-gold text-ink shadow-md shadow-gold/20"
                        : "bg-base border border-amber-900/15 text-[#1a1611] hover:border-gold/40"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB 1: LOGOS */}
            {activeTab === "logos" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-base p-4 rounded-2xl border border-amber-900/10">
                  <span className="text-xs font-bold text-[#1a1611]">Logo Background Theme:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLogoTheme("dark")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        logoTheme === "dark" ? "bg-[#1a1611] text-white" : "bg-panel text-[#1a1611] border border-amber-900/10"
                      }`}
                    >
                      Dark Theme
                    </button>
                    <button
                      onClick={() => setLogoTheme("light")}
                      className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        logoTheme === "light" ? "bg-white text-ink border border-amber-900/20" : "bg-panel text-[#1a1611] border border-amber-900/10"
                      }`}
                    >
                      Light Theme
                    </button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Geometric Monogram",
                      desc: "Modern vector icon suitable for app favicons & social avatars.",
                      symbol: "❖ SS",
                    },
                    {
                      title: "Luxury Wordmark",
                      desc: "Sophisticated typographic logo crafted for corporate branding.",
                      symbol: "STACKWISE",
                    },
                    {
                      title: "Abstract Emblem",
                      desc: "Dynamic geometric mark built for print collateral & merchandise.",
                      symbol: "⟁ SOLUTIONS",
                    },
                  ].map((concept, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between h-56 ${
                        logoTheme === "dark"
                          ? "bg-[#1a1611] text-white border-white/10 shadow-xl"
                          : "bg-white text-[#1a1611] border-amber-900/15 shadow-md"
                      }`}
                    >
                      <div className="text-2xl font-black tracking-widest text-gold font-mono border-b border-gold/20 pb-3">
                        {concept.symbol}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm mb-1">{concept.title}</h4>
                        <p className="text-xs opacity-75 leading-relaxed">{concept.desc}</p>
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-gold font-bold">
                        Vector Scalable (SVG / AI)
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: COLOR PALETTE */}
            {activeTab === "palette" && (
              <div className="space-y-6">
                <p className="text-xs text-muted font-medium">
                  Click any color swatch hex code below to copy it directly to your clipboard for design mockups.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {brandColors.map((color) => (
                    <div
                      key={color.hex}
                      onClick={() => handleCopyHex(color.hex)}
                      className="group relative rounded-2xl p-4 cursor-pointer border border-amber-900/15 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-44"
                      style={{ backgroundColor: color.hex }}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            color.hex === "#F7F3EB" ? "bg-black/10 text-black" : "bg-white/20 text-white"
                          }`}
                        >
                          {color.role}
                        </span>
                        {copiedHex === color.hex ? (
                          <Check className="w-4 h-4 text-emerald-400 font-bold" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition text-white" />
                        )}
                      </div>

                      <div>
                        <p
                          className={`text-xs font-mono font-bold ${
                            color.hex === "#F7F3EB" ? "text-black" : "text-white"
                          }`}
                        >
                          {color.hex}
                        </p>
                        <p
                          className={`text-[11px] font-semibold ${
                            color.hex === "#F7F3EB" ? "text-black/70" : "text-white/80"
                          }`}
                        >
                          {color.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: TYPOGRAPHY */}
            {activeTab === "typography" && (
              <div className="space-y-6 bg-base p-6 rounded-2xl border border-amber-900/10">
                <div>
                  <label className="block text-xs font-bold text-muted mb-2 uppercase tracking-wider">
                    Type custom text to preview typography scale:
                  </label>
                  <input
                    type="text"
                    value={previewText}
                    onChange={(e) => setPreviewText(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-panel border border-amber-900/15 text-[#1a1611] text-sm font-semibold focus:outline-none focus:border-gold"
                    placeholder="Type your company name..."
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-panel border border-amber-900/10">
                    <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-wider">
                      Display Headline Font (Plus Jakarta Sans / Bold)
                    </span>
                    <p className="text-2xl sm:text-3xl font-display font-bold text-[#1a1611] truncate mt-1">
                      {previewText || "Stackwise Solutions"}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-panel border border-amber-900/10">
                    <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-wider">
                      Body & Interface Font (Inter / Medium)
                    </span>
                    <p className="text-base font-sans font-medium text-[#1a1611] truncate mt-1">
                      {previewText || "Stackwise Solutions"} — Crafted with precision for print and web.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: GALLERY */}
            {activeTab === "gallery" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {graphicGallery.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setLightboxSrc(item.img);
                      setLightboxAlt(item.title);
                    }}
                    className="group relative h-48 rounded-2xl overflow-hidden border border-amber-900/15 cursor-pointer img-zoom-wrap shadow-md hover:shadow-xl transition"
                  >
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover img-zoom" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-4 flex flex-col justify-end">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold/90 text-ink self-start mb-1">
                        {item.tag}
                      </span>
                      <h5 className="text-white text-xs font-bold group-hover:text-gold transition">
                        {item.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            ["Turnaround", "3 – 7 Days"],
            ["Vector Source Files", "AI, EPS, SVG, PSD"],
            ["Print Specs", "300 DPI CMYK Ready"],
            ["Revisions", "Unlimited Revisions"],
          ].map(([label, val], i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="bg-panel border border-amber-900/15 rounded-2xl p-5 text-center shadow-md">
                <p className="text-[#1a1611] text-sm sm:text-base font-bold">{val}</p>
                <p className="text-muted text-xs mt-1 font-medium">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Main Grid Content */}
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                What's Included in Graphic Design
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Logo & Brand Identity Kits",
                  "Social Media Creatives & Banners",
                  "Marketing Collateral (Flyers, Brochures)",
                  "UI Mockups & Presentation Decks",
                  "Packaging & Print Design",
                  "Vector Icon Sets & Illustrations",
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

            {/* FAQs */}
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                <FaqItem
                  q="What vector and source file formats will I receive?"
                  a="You get full vector editable source files (.AI, .EPS, .SVG, .PSD, .FIGMA) along with export-ready PNG, transparent SVG, and print-ready 300 DPI PDFs."
                />
                <FaqItem
                  q="How many logo concepts do you present?"
                  a="We present 3 initial distinct logo concept directions, followed by revisions on your preferred design until you are 100% satisfied."
                />
                <FaqItem
                  q="Do you provide brand style guidelines?"
                  a="Yes! Every branding package includes a comprehensive Brand Style Guide detailing logo clear space rules, official color hex codes, and typography pairings."
                />
                <FaqItem
                  q="Can you design ongoing social media creatives for our brand?"
                  a="Absolutely — we offer monthly creative design retainers for businesses that need consistent Instagram, LinkedIn, and Facebook ad creatives and banners."
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-xl lg:sticky lg:top-28 space-y-6">
              <h3 className="text-xl font-display font-bold text-[#1a1611]">
                Graphic Design Package
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Complete visual branding handover for startups, e-commerce stores, and corporate enterprises.
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
        alt={lightboxAlt}
        onClose={() => setLightboxSrc(null)}
      />
    </>
  );
}
