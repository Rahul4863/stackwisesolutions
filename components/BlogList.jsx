"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  X,
  Sparkles,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  Tag,
  SlidersHorizontal,
  Globe,
  Smartphone,
  Server,
  TrendingUp,
  Cpu,
  Flame,
  LayoutGrid,
  List,
  ArrowUpRight,
} from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES, CATEGORY_THEMES } from "@/data/blogs";
import Reveal from "./Reveal";
import EnquiryModal from "./EnquiryModal";

const CATEGORY_ICONS = {
  "Web Development": Globe,
  "Mobile Development": Smartphone,
  "Backend & APIs": Server,
  "Digital Marketing": TrendingUp,
  "Cloud & AI Architecture": Cpu,
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"
  const [sortBy, setSortBy] = useState("latest"); // "latest" | "popular"
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const searchInputRef = useRef(null);

  // 3D tilt handlers for cards
  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-4px)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  // Filter & Search logic
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query)) ||
        post.author.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.date) - new Date(a.date);
      }
      return parseInt(b.readTime) - parseInt(a.readTime);
    });
  }, [activeCategory, searchQuery, sortBy]);

  // Featured post logic (Spotlight top post if on "all" and no search query)
  const featuredPost = useMemo(() => {
    if (activeCategory === "all" && !searchQuery) {
      return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
    }
    return null;
  }, [activeCategory, searchQuery]);

  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  // Category counters
  const categoryCounts = useMemo(() => {
    const counts = { all: BLOG_POSTS.length };
    Object.values(BLOG_CATEGORIES).forEach((cat) => {
      if (cat !== "all") {
        counts[cat] = BLOG_POSTS.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  return (
    <div className="relative min-h-screen pb-24 overflow-hidden bg-base">
      {/* Ambient background decoration */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-amber-500/5 blur-3xl pointer-events-none float-slow" />
      <div className="absolute top-1/3 right-5 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none float-slow-delay" />

      {/* Grid line overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#b07a29 1px, transparent 1px), linear-gradient(to right, #b07a29 1px, transparent 40px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 relative z-10">
        
        {/* Header Hero Section */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs sm:text-sm font-extrabold text-[#1a1611] shadow-xs mb-4">
              <Sparkles className="w-4 h-4 text-amber-700 animate-pulse" />
              <span>Engineering, Architecture & Growth Journal</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1a1611] tracking-tight leading-tight sm:leading-tight">
              Actionable Guides & Tech Playbooks
            </h1>

            <p className="text-black text-base sm:text-lg mt-4 leading-relaxed font-semibold">
              Battle-tested architectural blueprints, performance breakdowns, and growth frameworks straight from our engineering floor.
            </p>
          </div>
        </Reveal>

        {/* Live Search & Filter Bar */}
        <Reveal delay={100}>
          <div className="bg-panel border-2 border-amber-900/15 rounded-2xl p-4 sm:p-5 shadow-lg shadow-amber-900/5 mb-10">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              
              {/* Search input field */}
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-800 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by topic, keyword, stack (e.g. Next.js, APIs, SEO, Mobile)..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-panel2/60 border border-amber-900/15 text-sm font-bold text-[#1a1611] placeholder:text-[#6b5e4f] focus:outline-none focus:border-amber-700 focus:bg-white transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      searchInputRef.current?.focus();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-panel2 rounded-full text-[#594f42] hover:text-[#1a1611] transition"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* View mode & Sort controls */}
              <div className="flex items-center justify-between lg:justify-end gap-3 shrink-0">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#3b3226]">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-amber-800" />
                  <span>Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-panel2/60 border border-amber-900/15 rounded-lg px-2.5 py-1.5 text-xs font-extrabold text-[#1a1611] focus:outline-none focus:border-amber-700 cursor-pointer"
                  >
                    <option value="latest">Latest First</option>
                    <option value="popular">Longest Reads</option>
                  </select>
                </div>

                {/* Grid vs List toggle */}
                <div className="flex items-center bg-panel2/60 border border-amber-900/15 p-1 rounded-xl">
                  <button
                    onClick={() => setViewMode("grid")}
                    title="Grid Layout"
                    className={`p-1.5 rounded-lg transition ${
                      viewMode === "grid"
                        ? "bg-amber-800 text-white shadow-xs"
                        : "text-[#594f42] hover:text-[#1a1611]"
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    title="Compact Editorial Layout"
                    className={`p-1.5 rounded-lg transition ${
                      viewMode === "list"
                        ? "bg-amber-800 text-white shadow-xs"
                        : "text-[#594f42] hover:text-[#1a1611]"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-amber-900/10 no-scrollbar pb-1">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === "all"
                    ? "bg-amber-800 text-white shadow-md shadow-amber-800/20 scale-[1.02]"
                    : "bg-panel2/70 text-[#2b241c] hover:text-[#1a1611] hover:bg-panel2 border border-amber-900/15"
                }`}
              >
                <span>All Articles</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                    activeCategory === "all"
                      ? "bg-white/20 text-white"
                      : "bg-amber-900/15 text-[#1a1611]"
                  }`}
                >
                  {categoryCounts.all}
                </span>
              </button>

              {Object.values(BLOG_CATEGORIES).map((category) => {
                if (category === "all") return null;
                const isSelected = activeCategory === category;
                const IconComponent = CATEGORY_ICONS[category] || Tag;
                const count = categoryCounts[category] || 0;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                      isSelected
                        ? "bg-amber-800 text-white shadow-md shadow-amber-800/20 scale-[1.02]"
                        : "bg-panel2/70 text-[#2b241c] hover:text-[#1a1611] hover:bg-panel2 border border-amber-900/15"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{category}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-md text-[10px] font-black ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-amber-900/15 text-[#1a1611]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Results Counter / Filter Indicator */}
        {(searchQuery || activeCategory !== "all") && (
          <div className="flex items-center justify-between text-xs font-extrabold text-[#3b3226] mb-6 px-1">
            <div className="flex items-center gap-2">
              <span>
                Found <strong className="text-[#1a1611]">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? "article" : "articles"}
                {activeCategory !== "all" && ` in "${activeCategory}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </span>
            </div>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="text-amber-800 hover:text-amber-950 underline cursor-pointer font-extrabold"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* FEATURED SPOTLIGHT ARTICLE (When on "all" and no search query) */}
        {featuredPost && (
          <Reveal delay={150}>
            <div className="mb-14">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-3">
                <Flame className="w-4 h-4 fill-amber-700 text-amber-700" />
                <span>Featured Deep Dive</span>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className="gradient-ring tilt-card block bg-panel border-2 border-amber-900/15 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left content */}
                  <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-4">
                        <span className="px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-extrabold tracking-wide flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5" />
                          <span>{featuredPost.category}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-[#594f42]">
                          <Clock className="w-3.5 h-3.5 text-amber-700" />
                          <span>{featuredPost.readTime}</span>
                        </span>
                        <span className="text-[#594f42]/40">•</span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-[#594f42]">
                          <Calendar className="w-3.5 h-3.5 text-amber-700" />
                          <span>{formatDate(featuredPost.date)}</span>
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#1a1611] group-hover:text-amber-800 transition duration-300 leading-tight">
                        {featuredPost.title}
                      </h2>

                      <p className="text-black text-base sm:text-lg mt-4 leading-relaxed font-semibold">
                        {featuredPost.excerpt}
                      </p>

                      {/* Key tags */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {featuredPost.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-panel2/80 text-[11px] font-black text-[#1a1611] border border-amber-900/15"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Author & Read CTA */}
                    <div className="flex items-center justify-between gap-4 pt-8 mt-8 border-t border-amber-900/15">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-800 text-white font-display font-extrabold flex items-center justify-center text-xs shadow-sm">
                          {featuredPost.author.initials}
                        </div>
                        <div>
                          <div className="text-xs font-extrabold text-[#1a1611]">
                            {featuredPost.author.name}
                          </div>
                          <div className="text-[11px] font-bold text-[#594f42]">
                            {featuredPost.author.role}
                          </div>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-800 text-white font-extrabold text-xs shadow-md shadow-amber-800/20 group-hover:bg-amber-900 transition btn-pop">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* Right Image Visual */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px] bg-panel2 overflow-hidden img-zoom-wrap">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                      className="img-zoom object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1611]/80 via-[#1a1611]/20 to-transparent lg:bg-gradient-to-r lg:from-panel lg:via-transparent lg:to-transparent" />
                    
                    {/* Floating emoji chip */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-300/80 shadow-lg flex items-center justify-center text-2xl float-slow">
                      {featuredPost.emoji}
                    </div>

                    {/* Views chip */}
                    <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300/80 shadow-md text-xs font-black text-[#1a1611]">
                      🔥 {featuredPost.views}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Reveal>
        )}

        {/* ARTICLES GRID / LIST VIEW */}
        {gridPosts.length > 0 ? (
          viewMode === "grid" ? (
            /* GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {gridPosts.map((post, idx) => {
                const categoryTheme =
                  CATEGORY_THEMES[post.category] || CATEGORY_THEMES["Web Development"];
                const CategoryIcon = CATEGORY_ICONS[post.category] || BookOpen;

                return (
                  <Reveal key={post.slug} delay={idx * 60}>
                    <Link
                      href={`/blog/${post.slug}`}
                      onMouseMove={handleTilt}
                      onMouseLeave={resetTilt}
                      className="tilt-card group bg-panel border-2 border-amber-900/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-700/50 transition-all duration-300 flex flex-col h-full"
                    >
                      {/* Thumbnail with overlay */}
                      <div className="relative h-48 bg-panel2 overflow-hidden img-zoom-wrap">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="img-zoom object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1611]/80 via-transparent to-transparent opacity-80" />

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-extrabold backdrop-blur-md bg-white/95 border ${categoryTheme.badgeBorder} ${categoryTheme.badgeText} flex items-center gap-1.5 shadow-sm`}
                          >
                            <CategoryIcon className="w-3.5 h-3.5" />
                            <span>{post.category}</span>
                          </span>
                        </div>

                        {/* Emoji icon */}
                        <span className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300/80 shadow-md flex items-center justify-center text-lg">
                          {post.emoji}
                        </span>

                        {/* Reading Time */}
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] font-extrabold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-bold text-[#594f42] mb-2">
                            <span>{formatDate(post.date)}</span>
                            <span>•</span>
                            <span>{post.views}</span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#1a1611] group-hover:text-amber-800 transition line-clamp-2 leading-snug">
                            {post.title}
                          </h3>

                          <p className="text-[#3b3226] text-sm mt-2.5 line-clamp-3 leading-relaxed font-semibold">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Tags & Footer */}
                        <div className="pt-5 mt-5 border-t border-amber-900/15">
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-black px-2 py-0.5 rounded-md bg-panel2 text-[#1a1611] border border-amber-900/15"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-amber-800 text-white font-display font-extrabold flex items-center justify-center text-[10px]">
                                {post.author.initials}
                              </div>
                              <span className="text-xs font-extrabold text-[#1a1611] truncate max-w-[130px]">
                                {post.author.name}
                              </span>
                            </div>

                            <span className="text-xs font-extrabold text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              <span>Read</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            /* COMPACT EDITORIAL LIST VIEW */
            <div className="space-y-4">
              {gridPosts.map((post, idx) => {
                const categoryTheme =
                  CATEGORY_THEMES[post.category] || CATEGORY_THEMES["Web Development"];
                const CategoryIcon = CATEGORY_ICONS[post.category] || BookOpen;

                return (
                  <Reveal key={post.slug} delay={idx * 40}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block bg-panel border-2 border-amber-900/15 hover:border-amber-700/50 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                        <div className="sm:col-span-8 lg:col-span-9">
                          <div className="flex flex-wrap items-center gap-2 mb-2.5">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${categoryTheme.badgeBorder} ${categoryTheme.badgeBg} ${categoryTheme.badgeText} flex items-center gap-1`}
                            >
                              <CategoryIcon className="w-3 h-3" />
                              <span>{post.category}</span>
                            </span>
                            <span className="text-xs font-bold text-[#594f42]">
                              {formatDate(post.date)}
                            </span>
                            <span className="text-[#594f42]/40">•</span>
                            <span className="text-xs font-bold text-[#594f42] flex items-center gap-1">
                              <Clock className="w-3 h-3 text-amber-700" />
                              <span>{post.readTime}</span>
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#1a1611] group-hover:text-amber-800 transition">
                            {post.title}
                          </h3>

                          <p className="text-[#3b3226] text-sm mt-1.5 line-clamp-2 font-semibold">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center gap-2 mt-3 text-xs font-extrabold text-[#594f42]">
                            <span>By {post.author.name}</span>
                            <span>•</span>
                            <div className="flex gap-1.5">
                              {post.tags.slice(0, 3).map((t) => (
                                <span key={t} className="text-[#1a1611] font-black">
                                  #{t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-4 lg:col-span-3 flex sm:flex-col sm:items-end justify-between items-center gap-3">
                          <div className="relative w-28 h-20 sm:w-32 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-amber-900/15">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              sizes="128px"
                              className="object-cover group-hover:scale-105 transition duration-300"
                            />
                          </div>

                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 font-extrabold text-xs group-hover:bg-amber-800 group-hover:text-white transition">
                            <span>Read Guide</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          )
        ) : (
          /* NO RESULTS EMPTY STATE */
          <Reveal>
            <div className="bg-panel border-2 border-dashed border-amber-900/20 rounded-3xl p-10 sm:p-16 text-center my-12 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-3xl mx-auto mb-4">
                🔍
              </div>
              <h3 className="text-xl font-display font-extrabold text-[#1a1611]">
                No matching articles found
              </h3>
              <p className="text-[#4a4134] text-sm mt-2 leading-relaxed font-semibold">
                We couldn&apos;t find any articles matching &quot;{searchQuery}&quot; in {activeCategory === "all" ? "any category" : activeCategory}.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-6 px-6 py-2.5 rounded-full bg-amber-800 text-white text-xs font-bold shadow-md hover:bg-amber-900 transition btn-pop"
              >
                Clear Search & Reset All Filters
              </button>
            </div>
          </Reveal>
        )}

        {/* BOTTOM CONSULTATION CARD */}
        <Reveal delay={200}>
          <div className="mt-16 text-center p-8 sm:p-10 rounded-3xl bg-panel border-2 border-amber-900/15 shadow-sm">
            <h4 className="text-xl sm:text-2xl font-display font-extrabold text-[#1a1611]">
              Have a custom web, mobile, or cloud project in mind?
            </h4>
            <p className="text-[#4a4134] text-sm sm:text-base mt-2 max-w-lg mx-auto font-semibold">
              We help founders and growing enterprises architect, build, and deploy high-performance software.
            </p>
            <button
              onClick={() => setEnquiryOpen(true)}
              className="mt-6 px-8 py-3.5 rounded-full bg-amber-800 text-white font-extrabold text-sm shadow-md shadow-amber-800/25 hover:bg-amber-900 btn-pop transition"
            >
              Request Free Consultation →
            </button>
          </div>
        </Reveal>

      </div>

      {enquiryOpen && (
        <EnquiryModal
          service={{ title: "your custom project", icon: null }}
          onClose={() => setEnquiryOpen(false)}
        />
      )}
    </div>
  );
}
