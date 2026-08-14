"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Code,
  Terminal,
  Smartphone,
  Layers,
  Cpu,
  Server,
  Palette,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Globe,
  Lock,
  Database,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Play,
  Share2,
  Activity,
  CheckSquare,
  HelpCircle,
  X,
  Maximize2,
  Eye,
  Sliders,
  Layout,
  Award,
} from "lucide-react";
import { SERVICES, SITE_INFO, TESTIMONIALS } from "@/data/constants";
import EnquiryModal from "./EnquiryModal";
import Reveal from "./Reveal";
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

/* =========================================================================
   FAQ ITEM ACCORDION
   ========================================================================= */
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

/* =========================================================================
   1. GRAPHIC DESIGNING SHOWCASE (BRAND IDENTITY, PALETTE & TYPOGRAPHY)
   ========================================================================= */
function GraphicDesignShowcase({ service, onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState("logos");
  const [copiedHex, setCopiedHex] = useState(null);
  const [previewText, setPreviewText] = useState("Stackwise Visual Studio");
  const [logoTheme, setLogoTheme] = useState("dark");

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
      img: service.image || "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=900&h=650&fit=crop&auto=format&q=80",
    },
    {
      title: "Social Media Banner Suite",
      tag: "Instagram / LinkedIn",
      img: service.image2 || "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&h=650&fit=crop&auto=format&q=80",
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
    <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-10 shadow-2xl mb-14">
      {/* Module Title Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-amber-900/10 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold mb-2">
            <Palette className="w-3.5 h-3.5" />
            <span>Interactive Creative Studio Workbench</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1a1611]">
            Custom Graphic & Brand Design System
          </h3>
          <p className="text-xs text-muted mt-1">
            Explore logo concepts, interactive color swatches, typography hierarchy, and design work samples.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
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

      {/* TAB 1: LOGOS & BRAND KIT */}
      {activeTab === "logos" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-base p-4 rounded-2xl border border-amber-900/10">
            <span className="text-xs font-bold text-[#1a1611]">Preview Logo Theme Background:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setLogoTheme("dark")}
                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  logoTheme === "dark" ? "bg-[#1a1611] text-white" : "bg-panel text-muted"
                }`}
              >
                Dark Theme
              </button>
              <button
                onClick={() => setLogoTheme("light")}
                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  logoTheme === "light" ? "bg-white text-ink border border-amber-900/20" : "bg-panel text-muted"
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
                desc: "Modern vector icon suitable for mobile app favicons & social avatars.",
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

      {/* TAB 2: COLOR PALETTE BUILDER */}
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

      {/* TAB 3: TYPOGRAPHY TESTER */}
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

            <div className="p-4 rounded-xl bg-panel border border-amber-900/10">
              <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-wider">
                Developer Code / Tech Specs (JetBrains Mono)
              </span>
              <p className="text-xs font-mono font-semibold text-[#1a1611] truncate mt-1">
                const brand = {`{ name: "${previewText || "Stackwise"}", format: "Vector SVG" }`};
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: GRAPHIC DESIGN GALLERY */}
      {activeTab === "gallery" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {graphicGallery.map((item, i) => (
            <div
              key={i}
              onClick={() => onOpenLightbox(item.img, item.title)}
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
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   2. WEB DEVELOPMENT SHOWCASE (LIVE BROWSER & ARCHITECTURE)
   ========================================================================= */
function WebDevShowcase({ service, onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <div className="bg-panel border border-amber-900/15 rounded-3xl overflow-hidden shadow-2xl mb-14">
      {/* Browser Bar Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#1a1611] text-white border-b border-amber-900/10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500" />
          <span className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="ml-3 text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-gold border border-white/10 hidden sm:inline-block">
            https://production-webapp.stackwisesolutions.com
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

      {/* Content View */}
      <div className="p-6 sm:p-8">
        {activeTab === "preview" && (
          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <div
              onClick={() => onOpenLightbox(service.image, service.title)}
              className="relative rounded-2xl overflow-hidden border border-amber-900/15 h-64 img-zoom-wrap cursor-pointer shadow-lg"
            >
              <img src={service.image} alt={service.title} className="w-full h-full object-cover img-zoom" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold px-3 py-1 rounded-full bg-gold/90 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" /> Responsive Web App Preview
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#1a1611]">Full-Stack Web Architecture</h4>
              <p className="text-xs text-amber-100/70 leading-relaxed">
                Clean Next.js / React frontend connected to a robust Node.js or Laravel backend. SEO optimized out of the box with zero runtime layout shifts.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-base border border-amber-900/10 text-center">
                  <p className="text-gold font-bold text-xl">100 / 100</p>
                  <p className="text-[11px] text-amber-100/70 font-medium mt-0.5">Core Web Vitals</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-base border border-amber-900/10 text-center">
                  <p className="text-gold font-bold text-xl">&lt; 0.4s</p>
                  <p className="text-[11px] text-amber-100/70 font-medium mt-0.5">Page Load Time</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "code" && (
          <div className="font-mono text-xs bg-[#1a1611] text-emerald-400 p-5 rounded-2xl overflow-x-auto leading-relaxed shadow-inner">
            <p className="text-amber-200/70">// Next.js App Router Server Component Strategy</p>
            <p className="text-gold">export async function <span className="text-white">Page</span>({`{ params }`}) {`{`}</p>
            <p className="pl-4">const serviceData = await <span className="text-sky-300">fetchProductionCatalog</span>(params.slug);</p>
            <p className="pl-4">return &lt;<span className="text-pink-400">WebAppLayout</span> data={`{serviceData}`} /&gt;;</p>
            <p>{`}`}</p>
          </div>
        )}

        {activeTab === "performance" && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[["SEO", "100%"], ["Performance", "99%"], ["Accessibility", "100%"], ["Best Practices", "100%"]].map(
              ([lbl, val]) => (
                <div key={lbl} className="p-5 rounded-2xl bg-base border border-amber-900/10">
                  <p className="text-2xl font-bold text-gold">{val}</p>
                  <p className="text-xs text-amber-100/70 mt-1 font-semibold">{lbl}</p>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   3. UI/UX DEVELOPMENT SHOWCASE (FIGMA SANDBOX)
   ========================================================================= */
function FrontendShowcase({ service, onOpenLightbox }) {
  const [activeBtn, setActiveBtn] = useState("primary");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-2xl mb-14">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-900/10">
        <div>
          <h4 className="text-xl font-bold text-[#1a1611]">Design System Component Sandbox</h4>
          <p className="text-xs text-amber-100/70 mt-1">Pixel-perfect Figma translations built with Tailwind CSS & React state.</p>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3.5 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-bold border border-gold/20 hover:bg-gold/25 transition"
        >
          Toggle Component Preview: {darkMode ? "Dark Theme" : "Light Theme"}
        </button>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 items-center">
        {/* Interactive Button Demo */}
        <div className={`p-5 rounded-2xl border transition-all ${darkMode ? "bg-[#1a1611] text-white border-white/10" : "bg-base text-[#1a1611] border-amber-900/10"}`}>
          <p className="text-[11px] font-bold text-gold uppercase tracking-wider mb-3">Interactive Button States</p>
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

        {/* Breakpoints Indicator */}
        <div className={`p-5 rounded-2xl border transition-all ${darkMode ? "bg-[#1a1611] text-white border-white/10" : "bg-base text-[#1a1611] border-amber-900/10"}`}>
          <p className="text-[11px] font-bold text-gold uppercase tracking-wider mb-3">Fluid Breakpoint Controls</p>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between font-semibold"><span>Mobile (sm)</span> <span className="text-gold">375px</span></div>
            <div className="flex justify-between font-semibold"><span>Tablet (md)</span> <span className="text-gold">768px</span></div>
            <div className="flex justify-between font-semibold"><span>Desktop (lg)</span> <span className="text-gold">1440px</span></div>
          </div>
        </div>

        {/* Preview Graphic */}
        <div
          onClick={() => onOpenLightbox(service.image, service.title)}
          className="relative h-44 rounded-2xl overflow-hidden border border-amber-900/15 img-zoom-wrap cursor-pointer shadow-md"
        >
          <img src={service.image} alt={service.title} className="w-full h-full object-cover img-zoom" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. BACKEND DEVELOPMENT SHOWCASE (API TERMINAL & AUTH LOG)
   ========================================================================= */
function BackendShowcase({ service }) {
  const [responseStatus, setResponseStatus] = useState("idle");

  const handleTestApi = () => {
    setResponseStatus("loading");
    setTimeout(() => {
      setResponseStatus("success");
    }, 600);
  };

  return (
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
  );
}

/* =========================================================================
   5. MOBILE APP DEVELOPMENT SHOWCASE (DUAL PHONES)
   ========================================================================= */
function MobileAppShowcase({ service, onOpenLightbox }) {
  const [activeScreen, setActiveScreen] = useState("screen1");

  return (
    <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-10 shadow-2xl mb-14">
      <div className="text-center max-w-xl mx-auto mb-8">
        <h4 className="text-2xl font-bold text-[#1a1611]">Cross-Platform React Native Architecture</h4>
        <p className="text-xs text-amber-100/70 mt-1">One shared codebase shipping natively on both Apple App Store and Google Play Store.</p>
        
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => setActiveScreen("screen1")}
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              activeScreen === "screen1" ? "bg-gold text-ink" : "bg-base text-[#1a1611] border border-amber-900/10"
            }`}
          >
            App Main Feed
          </button>
          <button
            onClick={() => setActiveScreen("screen2")}
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              activeScreen === "screen2" ? "bg-gold text-ink" : "bg-base text-[#1a1611] border border-amber-900/10"
            }`}
          >
            Checkout Screen
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
        {/* Phone Frame 1 */}
        <div
          onClick={() => onOpenLightbox(service.image, "iOS App Frame")}
          className="relative w-44 sm:w-52 aspect-[9/19] rounded-[2.5rem] border-[6px] border-[#1a1611] shadow-2xl overflow-hidden -rotate-2 hover:rotate-0 transition-transform duration-300 img-zoom-wrap cursor-pointer"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1a1611] rounded-b-xl z-20" />
          <img
            src={activeScreen === "screen1" ? service.image : service.image2 || service.image}
            alt="iOS App Screen"
            className="w-full h-full object-cover img-zoom"
          />
        </div>

        {/* Phone Frame 2 */}
        <div
          onClick={() => onOpenLightbox(service.image2 || service.image, "Android App Frame")}
          className="relative w-48 sm:w-56 aspect-[9/19] rounded-[2.5rem] border-[6px] border-[#1a1611] shadow-2xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-300 img-zoom-wrap cursor-pointer"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1a1611] rounded-b-xl z-20" />
          <img
            src={activeScreen === "screen1" ? service.image2 || service.image : service.image}
            alt="Android App Screen"
            className="w-full h-full object-cover img-zoom"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   6. API INTEGRATION SHOWCASE (NODE MAP)
   ========================================================================= */
function ApiIntegrationShowcase({ service }) {
  return (
    <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-2xl mb-14">
      <h4 className="text-xl font-bold text-[#1a1611] mb-1">Connected Integration Ecosystem</h4>
      <p className="text-xs text-amber-100/70 mb-6">Wired up with retry logic, signature verification, and automated event webhooks.</p>

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
  );
}

/* =========================================================================
   7. DEPLOYMENT & DEVOPS SHOWCASE (DOCKER TERMINAL)
   ========================================================================= */
function DevOpsShowcase({ service }) {
  return (
    <div className="bg-[#1a1611] text-white rounded-3xl p-6 sm:p-8 shadow-2xl mb-14 border border-amber-900/20">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Server className="w-5 h-5 text-gold" />
          <span className="text-xs font-mono font-bold text-gold">Production Server & Docker Container Log</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400">99.99% Uptime SLA</span>
      </div>

      <div className="font-mono text-xs space-y-2 leading-relaxed">
        <p className="text-gold">$ docker-compose -f docker-compose.prod.yml up -d --build</p>
        <p className="text-amber-100/90">✔ Container app_frontend  Started</p>
        <p className="text-amber-100/90">✔ Container app_backend   Started</p>
        <p className="text-amber-100/90">✔ Container app_database  Started</p>
        <p className="text-emerald-400 font-semibold">✔ Nginx Reverse Proxy configured with SSL Let's Encrypt auto-renewal ✓</p>
      </div>
    </div>
  );
}

/* =========================================================================
   8. DIGITAL MARKETING SHOWCASE (ANALYTICS)
   ========================================================================= */
function MarketingShowcase({ service }) {
  return (
    <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-2xl mb-14">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-amber-900/10">
        <div>
          <h4 className="text-xl font-bold text-[#1a1611]">Campaign Growth Analytics</h4>
          <p className="text-xs text-muted mt-0.5">Data-driven SEO & targeted Meta/Google advertising.</p>
        </div>
        <TrendingUp className="w-7 h-7 text-gold" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
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
    </div>
  );
}

/* =========================================================================
   HELPER: RENDER SPECIFIC SHOWCASE WIDGET
   ========================================================================= */
function renderUniqueShowcase(service, onOpenLightbox) {
  switch (service.slug) {
    case "graphic-designing":
      return <GraphicDesignShowcase service={service} onOpenLightbox={onOpenLightbox} />;
    case "web-development":
      return <WebDevShowcase service={service} onOpenLightbox={onOpenLightbox} />;
    case "frontend-development":
      return <FrontendShowcase service={service} onOpenLightbox={onOpenLightbox} />;
    case "backend-development":
      return <BackendShowcase service={service} onOpenLightbox={onOpenLightbox} />;
    case "mobile-app-development":
      return <MobileAppShowcase service={service} onOpenLightbox={onOpenLightbox} />;
    case "api-integration":
      return <ApiIntegrationShowcase service={service} />;
    case "deployment-devops":
      return <DevOpsShowcase service={service} />;
    case "digital-marketing":
      return <MarketingShowcase service={service} />;
    default:
      return null;
  }
}

/* =========================================================================
   MAIN SERVICE DETAIL PAGE COMPONENT
   ========================================================================= */
export default function ServiceDetailContent({ slug }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return null;

  const Icon = service.icon;
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const prevService = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const nextService = SERVICES[(idx + 1) % SERVICES.length];
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const testimonial = TESTIMONIALS[idx % TESTIMONIALS.length];

  const handleOpenLightbox = (src, alt) => {
    setLightboxSrc(src);
    setLightboxAlt(alt || service.title);
  };

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition">Services</Link>
          <span>/</span>
          <span className="text-[#1a1611] font-bold">{service.title}</span>
        </div>

        {/* Service Title Hero Header Banner */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-panel border border-amber-900/15 shadow-2xl p-8 sm:p-12 mb-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20">
                  {service.tagline}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight">
                {service.title}
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                {service.desc}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight btn-pop transition shadow-lg shadow-gold/20"
                >
                  Enquire Now →
                </button>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="px-6 py-3.5 rounded-full border border-amber-900/15 text-[#1a1611] font-bold hover:border-gold hover:text-gold transition"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* Service Main Featured Image */}
            <div
              onClick={() => handleOpenLightbox(service.image, service.title)}
              className="lg:col-span-5 relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-amber-900/15 img-zoom-wrap shadow-inner cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* RENDER THE SPECIFIC UNIQUE DESIGN SHOWCASE FOR THIS SERVICE */}
        <Reveal delay={100}>
          {renderUniqueShowcase(service, handleOpenLightbox)}
        </Reveal>

        {/* Quick Service Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            ["Turnaround", service.turnaround],
            ["Deliverables", service.deliverables || "Source Code & Docs"],
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

        {/* Main Content & Sidebar Grid */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            {service.overview && (
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                  How We Approach {service.title}
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  {service.overview}
                </p>
              </div>
            )}

            {/* Sub-Services Checklist */}
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                What's Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.subServices.map((sub) => (
                  <div
                    key={sub}
                    className="bg-panel border border-amber-900/15 rounded-2xl p-4 flex items-start gap-3 border-l-4 border-l-gold shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-[#1a1611] text-sm font-semibold leading-relaxed">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            {service.benefits && (
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                  Key Benefits & Outcomes
                </h2>
                <div className="space-y-3">
                  {service.benefits.map((b, i) => (
                    <div key={b} className="p-4 rounded-2xl bg-panel border border-amber-900/15 flex items-start gap-4 shadow-xs">
                      <span className="w-7 h-7 rounded-full bg-gold/15 text-gold font-bold text-xs flex items-center justify-center shrink-0">
                        0{i + 1}
                      </span>
                      <span className="text-muted text-sm sm:text-base font-medium leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools & Technologies */}
            {service.tools && (
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                  Tools & Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-xl bg-gold/15 text-gold border border-gold/20 text-xs font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {service.faqs && (
              <div className="space-y-4 pt-4">
                <h2 className="text-2xl font-display font-bold text-[#1a1611]">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial Quote */}
            <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-1 text-gold text-sm mb-3">
                {"★★★★★"}
              </div>
              <p className="text-[#1a1611] text-base leading-relaxed font-medium italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-amber-900/10">
                <div className="w-10 h-10 rounded-full bg-gold text-ink font-bold flex items-center justify-center text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-[#1a1611] text-sm font-bold">{testimonial.name}</p>
                  <p className="text-muted text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sticky Project Snapshot Card */}
            <div className="bg-panel border border-amber-900/15 rounded-3xl p-6 sm:p-8 shadow-xl lg:sticky lg:top-28 space-y-6">
              <h3 className="text-xl font-display font-bold text-[#1a1611]">
                Project Snapshot
              </h3>

              <div className="space-y-4 text-xs">
                <div className="pb-3 border-b border-amber-900/10">
                  <p className="text-muted uppercase tracking-wider font-semibold mb-1">Deliverables</p>
                  <p className="text-[#1a1611] font-bold text-sm">{service.deliverables || "Full Source Code & Deployment"}</p>
                </div>
                <div className="pb-3 border-b border-amber-900/10">
                  <p className="text-muted uppercase tracking-wider font-semibold mb-1">Estimated Turnaround</p>
                  <p className="text-[#1a1611] font-bold text-sm">{service.turnaround}</p>
                </div>
                <div>
                  <p className="text-muted uppercase tracking-wider font-semibold mb-1">Direct Developer Support</p>
                  <p className="text-[#1a1611] font-bold text-sm">Yes — Senior Dev Assigned</p>
                </div>
              </div>

              <button
                onClick={() => setEnquiryOpen(true)}
                className="w-full py-3.5 rounded-full bg-gold text-ink font-bold hover:bg-goldlight transition btn-pop shadow-lg shadow-gold/20 text-center"
              >
                Enquire Now →
              </button>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {otherServices.length > 0 && (
          <div className="mt-20 pt-10 border-t border-amber-900/15">
            <h2 className="text-2xl font-display font-bold text-[#1a1611] mb-6">
              Related Engineering Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {otherServices.map((s) => {
                const OIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group bg-panel border border-amber-900/15 rounded-3xl overflow-hidden shadow-lg hover:border-gold/50 transition duration-300 tilt-card p-6"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-4">
                      <OIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-[#1a1611] group-hover:text-gold transition">{s.title}</h4>
                    <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-2">{s.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Navigation Prev / Next */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-amber-900/15">
          <Link
            href={`/services/${prevService.slug}`}
            className="text-sm font-semibold text-[#1a1611] hover:text-gold transition"
          >
            ‹ {prevService.title}
          </Link>
          <Link
            href={`/services/${nextService.slug}`}
            className="text-sm font-semibold text-[#1a1611] hover:text-gold transition"
          >
            {nextService.title} ›
          </Link>
        </div>
      </section>

      {/* Modal */}
      {enquiryOpen && (
        <EnquiryModal service={service} onClose={() => setEnquiryOpen(false)} />
      )}

      {/* Lightbox Modal */}
      <ImageLightbox
        src={lightboxSrc}
        alt={lightboxAlt}
        onClose={() => setLightboxSrc(null)}
      />
    </>
  );
}