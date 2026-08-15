"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Sparkles,
  Search,
  X,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Layers,
  LayoutGrid,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";
import { PORTFOLIO_ITEMS, CATEGORY_TYPES } from "@/data/constants";
import PortfolioModal from "./PortfolioModal";
import EnquiryModal from "./EnquiryModal";
import Reveal from "./Reveal";

const CATEGORY_LABELS = {
  [CATEGORY_TYPES.ALL]: "All Projects",
  [CATEGORY_TYPES.WEB]: "Web Platforms",
  [CATEGORY_TYPES.AI]: "AI & Full-Stack",
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("showcase"); // 'showcase' | 'grid'
  const [selectedItem, setSelectedItem] = useState(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  // Compute category item counts
  const categoryCounts = useMemo(() => {
    const counts = { all: PORTFOLIO_ITEMS.length };
    Object.values(CATEGORY_TYPES).forEach((cat) => {
      if (cat !== "all") {
        counts[cat] = PORTFOLIO_ITEMS.filter((p) => p.cat === cat).length;
      }
    });
    return counts;
  }, []);

  // Filtered & Searched items
  const filtered = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCat = activeFilter === "all" || item.cat === activeFilter;
      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchTagline = item.tagline?.toLowerCase().includes(q);
      const matchDesc = item.desc?.toLowerCase().includes(q);
      const matchStack = item.stack?.some((t) => t.toLowerCase().includes(q));
      const matchCategory = item.categoryLabel?.toLowerCase().includes(q);

      return matchTitle || matchTagline || matchDesc || matchStack || matchCategory;
    });
  }, [activeFilter, searchQuery]);

  // Featured flagship item for the showcase view
  const featuredItem = useMemo(() => {
    return filtered.find((p) => p.featured) || filtered[0];
  }, [filtered]);

  // Remaining grid items when showcase mode is active
  const gridItems = useMemo(() => {
    if (viewMode === "showcase" && featuredItem && filtered.length > 1) {
      return filtered.filter((p) => p.id !== featuredItem.id);
    }
    return filtered;
  }, [viewMode, featuredItem, filtered]);

  const openItem = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const navigate = (dir) => {
    if (!selectedItem) return;
    const idx = PORTFOLIO_ITEMS.findIndex((p) => p.id === selectedItem.id);
    const next = (idx + dir + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    setSelectedItem(PORTFOLIO_ITEMS[next]);
  };

  return (
    <>
      <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-12 2xl:px-20 overflow-hidden">
        {/* Subtle Ambient Theme Glows */}
        <div className="pointer-events-none absolute top-10 right-0 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl float-slow" />
        <div className="pointer-events-none absolute bottom-1/4 -left-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl float-slow-delay" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03. Featured Work & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight leading-tight">
              Architected for Growth.{" "}
              <span className="text-gold shimmer-text">Crafted for Impact.</span>
            </h2>
            <p className="text-muted text-base sm:text-lg mt-4 leading-relaxed">
              Explore real-world production platforms, AI engines, mobile applications, and enterprise systems engineered with clean code and high performance.
            </p>

            {/* Quick Proof Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 max-w-4xl mx-auto">
              <div className="bg-panel border border-amber-900/10 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-[#1a1611]">
                  15+
                </div>
                <div className="text-xs text-muted font-medium mt-0.5">Shipped Platforms</div>
              </div>
              <div className="bg-panel border border-amber-900/10 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-gold">
                  100/100
                </div>
                <div className="text-xs text-muted font-medium mt-0.5">Core Web Vitals</div>
              </div>
              <div className="bg-panel border border-amber-900/10 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-[#1a1611]">
                  4.9★
                </div>
                <div className="text-xs text-muted font-medium mt-0.5">Client Rating</div>
              </div>
              <div className="bg-panel border border-amber-900/10 rounded-2xl p-3 sm:p-4 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-gold">
                  99.98%
                </div>
                <div className="text-xs text-muted font-medium mt-0.5">Gateway Uptime</div>
              </div>
            </div>
          </Reveal>

          {/* Interactive Filter & Controls Bar */}
          <div className="bg-panel/90 backdrop-blur-md border border-amber-900/15 rounded-3xl p-3 sm:p-4 mb-10 shadow-lg shadow-amber-950/5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full lg:w-auto">
                {Object.values(CATEGORY_TYPES).map((cat) => {
                  const count = categoryCounts[cat] || 0;
                  if (count === 0 && cat !== "all") return null;
                  const isActive = activeFilter === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-gold text-ink border-gold shadow-md shadow-gold/25 scale-105"
                          : "border-amber-900/15 text-muted hover:border-gold hover:text-gold bg-base/50"
                      }`}
                    >
                      <span>{CATEGORY_LABELS[cat] || cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                          isActive
                            ? "bg-ink/20 text-ink"
                            : "bg-amber-900/10 text-muted"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Box & View Mode Toggles */}
              <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
                {/* Search Input */}
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by tech or title..."
                    className="w-full pl-9 pr-8 py-2 rounded-full bg-base border border-amber-900/15 text-xs text-[#1a1611] placeholder:text-muted/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition shadow-inner"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-[#1a1611] transition"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* View Switcher */}
                <div className="flex items-center bg-base border border-amber-900/15 rounded-full p-1 shrink-0">
                  <button
                    onClick={() => setViewMode("showcase")}
                    title="Showcase View"
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                      viewMode === "showcase"
                        ? "bg-gold text-ink shadow-xs"
                        : "text-muted hover:text-[#1a1611]"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Showcase</span>
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    title="Grid View"
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                      viewMode === "grid"
                        ? "bg-gold text-ink shadow-xs"
                        : "text-muted hover:text-[#1a1611]"
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Grid</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Empty Search Results State */}
          {filtered.length === 0 && (
            <div className="bg-panel border border-amber-900/15 rounded-3xl p-12 text-center max-w-xl mx-auto shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-2xl mx-auto mb-4">
                🔍
              </div>
              <h3 className="text-lg font-display font-bold text-[#1a1611] mb-2">
                No matching projects found
              </h3>
              <p className="text-muted text-xs sm:text-sm mb-6">
                No projects matched &ldquo;{searchQuery}&rdquo; in this category. Try adjusting your search term or exploring all projects.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
                className="px-5 py-2.5 rounded-full bg-gold text-ink text-xs font-bold hover:bg-goldlight transition btn-pop cursor-pointer"
              >
                Clear Search & Show All
              </button>
            </div>
          )}

          {/* SPOTLIGHT FLAGSHIP CASE STUDY (Showcase Mode) */}
          {viewMode === "showcase" && featuredItem && filtered.length > 0 && (
            <Reveal className="mb-10">
              <div className="bg-gradient-to-br from-panel via-panel to-panel2/60 border border-amber-900/15 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-amber-950/5 relative overflow-hidden group hover:border-gold/50 transition-all duration-300">
                {/* Background decorative blob */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Column: Interactive Image Preview */}
                  <div
                    onClick={() => openItem(featuredItem)}
                    className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-ink shadow-lg border border-amber-900/10 cursor-pointer img-zoom-wrap group/img"
                  >
                    <Image
                      src={featuredItem.image}
                      alt={featuredItem.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover img-zoom transition-transform duration-700 group-hover/img:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-gold text-ink text-xs font-extrabold shadow-md flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" />
                        <span>Spotlight Project</span>
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-ink/80 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                        {featuredItem.categoryLabel || featuredItem.cat}
                      </span>
                      <span className="inline-flex items-center gap-1 text-gold text-xs font-bold bg-ink/80 px-3 py-1 rounded-full backdrop-blur-md border border-gold/30">
                        <span>Click to explore case study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Right Column: In-Depth Spotlight Narrative */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider mb-2">
                        <span>{featuredItem.clientType || "Production Platform"}</span>
                        <span>•</span>
                        <span>{featuredItem.year || "2024 – 2025"}</span>
                      </div>

                      <h3
                        onClick={() => openItem(featuredItem)}
                        className="text-2xl sm:text-3xl font-display font-extrabold text-[#1a1611] hover:text-gold transition cursor-pointer leading-tight"
                      >
                        {featuredItem.title}
                      </h3>

                      <p className="text-sm font-semibold text-gold mt-1.5 mb-3">
                        {featuredItem.tagline}
                      </p>

                      <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                        {featuredItem.desc}
                      </p>
                      {featuredItem.metrics && (
                        <div className="grid grid-cols-3 gap-2.5 bg-base/80 rounded-2xl p-3.5 border border-amber-900/10 mb-6">
                          {featuredItem.metrics.map((m, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-base sm:text-lg font-display font-extrabold text-gold">
                                {m.value}
                              </div>
                              <div className="text-[11px] text-muted font-medium leading-tight mt-0.5">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {featuredItem.stack?.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1 rounded-full bg-base text-[#1a1611] border border-amber-900/15 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Triggers */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-amber-900/10">
                      <button
                        onClick={() => openItem(featuredItem)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink text-xs sm:text-sm font-bold hover:bg-goldlight transition btn-pop shadow-md shadow-gold/20 cursor-pointer"
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {featuredItem.demoUrl && (
                        <a
                          href={featuredItem.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-base border border-amber-900/15 text-[#1a1611] hover:border-gold hover:text-gold text-xs font-semibold transition cursor-pointer"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* PROJECT CARDS GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gridItems.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 80}>
                <div
                  onClick={() => openItem(item)}
                  className="group bg-panel border border-amber-900/15 rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full shadow-lg shadow-amber-950/5 hover:border-gold/50 hover:shadow-2xl transition-all duration-300 tilt-card"
                >
                  {/* Card Media Preview */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-ink img-zoom-wrap">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover img-zoom transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />

                    {/* Category & Badge */}
                    <div className="absolute top-3.5 left-3.5 flex gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-ink/80 backdrop-blur-md text-gold text-[11px] font-bold border border-gold/30">
                        {item.badge || item.categoryLabel || item.cat}
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-panel/90 backdrop-blur-md border border-amber-900/10 flex items-center justify-center text-sm shadow-xs">
                      {item.emoji || "✨"}
                    </div>

                    {/* Impact Highlight Pill */}
                    {item.impactHighlight && (
                      <div className="absolute bottom-3 left-3.5 right-3.5">
                        <span className="inline-block w-full truncate px-3 py-1.5 rounded-xl bg-ink/85 backdrop-blur-md text-white text-[11px] font-medium border border-white/10 shadow-sm">
                          {item.impactHighlight}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between text-xs text-muted font-medium mb-1.5">
                      <span className="text-gold font-bold uppercase tracking-wider">
                        {item.categoryLabel || item.cat}
                      </span>
                      <span>{item.year || "2024"}</span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-[#1a1611] group-hover:text-gold transition leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs font-semibold text-gold mt-1 mb-2.5 line-clamp-1">
                      {item.tagline}
                    </p>

                    <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                      {item.desc}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.stack?.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-base text-[#1a1611] border border-amber-900/10 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                      {item.stack && item.stack.length > 3 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-gold/10 text-gold border border-gold/20 font-semibold">
                          +{item.stack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Card Action Footer */}
                    <div className="flex items-center justify-between pt-3.5 border-t border-amber-900/10 mt-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openItem(item);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#1a1611] group-hover:text-gold transition cursor-pointer"
                      >
                        <span>Explore Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      {item.demoUrl && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(item.demoUrl, "_blank", "noopener,noreferrer");
                          }}
                          title="Open Live Website"
                          className="w-8 h-8 rounded-full bg-base border border-amber-900/15 text-[#1a1611] hover:bg-gold hover:text-ink flex items-center justify-center transition shadow-2xs cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <Reveal className="mt-16 text-center bg-gradient-to-r from-panel via-panel2 to-panel border border-amber-900/15 rounded-3xl p-8 sm:p-10 shadow-lg shadow-amber-950/5">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#1a1611] mb-2">
                Have a custom product idea or complex engineering challenge?
              </h3>
              {/* <p className="text-[#1a1611] text-sm sm:text-base mb-6">
                From initial architecture design to production launch, we build scalable platforms tailored to your business roadmap.
              </p> */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-6 py-3 rounded-full bg-gold text-ink text-xs sm:text-sm font-bold hover:bg-goldlight transition btn-pop shadow-md shadow-gold/20 cursor-pointer"
                >
                  Start Your Project With Us →
                </button>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-base border border-amber-900/15 text-[#1a1611] text-xs sm:text-sm font-semibold hover:border-gold hover:text-gold transition cursor-pointer"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case Study Full Modal */}
      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          onClose={closeModal}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
          onOpenEnquiry={() => setEnquiryOpen(true)}
        />
      )}

      {/* Enquiry Modal */}
      {enquiryOpen && (
        <EnquiryModal
          service={{ title: "Portfolio Custom Project", slug: "custom-development" }}
          onClose={() => setEnquiryOpen(false)}
        />
      )}
    </>
  );
}
