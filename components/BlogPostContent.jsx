"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Eye,
  Share2,
  Copy,
  Check,
  CheckCircle2,
  ThumbsUp,
  Sparkles,
  Globe,
  Smartphone,
  Server,
  TrendingUp,
  Cpu,
  BookOpen,
  Quote,
  Zap,
  Bookmark,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { BLOG_POSTS, CATEGORY_THEMES } from "@/data/blogs";
import { SITE_INFO } from "@/data/constants";
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
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Single FAQ Item Accordion with clear high-contrast styling
function BlogFaqItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
        isOpen
          ? "bg-white border-amber-800/40 shadow-md"
          : "bg-white border-amber-900/15 hover:border-amber-700/30 shadow-2xs"
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
      >
        <span
          className="text-[#1a1611] font-display font-extrabold text-base sm:text-lg leading-snug"
          style={{ opacity: 1, color: "#1a1611" }}
        >
          {q}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 transition-transform duration-200 ${
            isOpen
              ? "bg-amber-800 text-white rotate-45"
              : "bg-amber-100 text-amber-900"
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div
          className="px-5 sm:px-6 pb-6 pt-1 text-[#2b241c] text-sm sm:text-base leading-relaxed font-semibold border-t border-amber-900/10"
          style={{ opacity: 1, color: "#2b241c" }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

// Code Block with 1-click copy feature
function CodeBlock({ code, language = "javascript", filename = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border-2 border-amber-950/25 bg-[#18140e] text-amber-50 shadow-xl">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#251e14] border-b border-amber-900/40 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          {filename && (
            <span className="font-mono text-amber-200 font-bold ml-2">
              {filename}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 font-mono">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-amber-100 text-xs font-bold transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed text-amber-100 font-medium">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Block Renderer for structured article content (High Contrast Dark Text)
function ContentBlock({ block }) {
  if (block.type === "heading") {
    return (
      <div className="group mt-12 mb-5 scroll-mt-28" id={block.id}>
        <div className="flex items-center gap-2">
          <h2
            className="text-[#1a1611] font-display font-extrabold text-2xl sm:text-3xl leading-snug"
            style={{ opacity: 1, color: "#1a1611" }}
          >
            {block.text}
          </h2>
          <a
            href={`#${block.id}`}
            className="opacity-0 group-hover:opacity-100 text-amber-800 transition text-sm font-black"
            title="Link to section"
          >
            #
          </a>
        </div>
      </div>
    );
  }

  if (block.type === "subheading") {
    return (
      <h3
        id={block.id}
        className="text-[#1a1611] font-display font-extrabold text-xl sm:text-2xl mt-8 mb-3 scroll-mt-28"
        style={{ opacity: 1, color: "#1a1611" }}
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <div className="my-6 space-y-3">
        {block.items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3.5 rounded-xl bg-white border-2 border-amber-900/15 shadow-2xs"
          >
            <div className="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span
              className="text-[#1a1611] text-sm sm:text-base leading-relaxed font-bold"
              style={{ opacity: 1, color: "#1a1611" }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "quote") {
    return (
      <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#faf5eb] via-white to-[#f5efe4] border-l-4 border-amber-800 border-y border-r border-amber-900/20 shadow-md">
        <Quote className="w-8 h-8 text-amber-700 mb-2" />
        <p
          className="text-base sm:text-lg font-display font-extrabold text-[#1a1611] italic leading-relaxed"
          style={{ opacity: 1, color: "#1a1611" }}
        >
          &ldquo;{block.text}&rdquo;
        </p>
        {block.author && (
          <div className="mt-3 text-xs font-black text-amber-900">
            — {block.author}
          </div>
        )}
      </div>
    );
  }

  if (block.type === "code") {
    return (
      <CodeBlock
        code={block.code}
        language={block.language}
        filename={block.filename}
      />
    );
  }

  return (
    <p
      className="text-[#2b241c] text-base sm:text-lg leading-relaxed mb-6 font-semibold"
      style={{ opacity: 1, color: "#2b241c" }}
    >
      {block.text}
    </p>
  );
}

export default function BlogPostContent({ slug }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(null);
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const post = BLOG_POSTS[postIndex];
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const current = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      setReadingProgress(Math.min(100, Math.max(0, current)));

      // Active TOC section spy
      const headings = document.querySelectorAll("article h2[id], #faqs-section");
      let currentId = "";
      headings.forEach((h) => {
        const rect = h.getBoundingClientRect();
        if (rect.top <= 150) {
          currentId = h.getAttribute("id");
        }
      });
      if (currentId) setActiveSectionId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SAFETY NET: some global CSS (scroll-reveal / fade-in animation classes,
  // or a skeleton/shimmer loader) can leave text stuck at opacity:0 or a
  // very light color if an IntersectionObserver / class toggle never fires.
  // This forces all text inside the article back to full opacity + intended
  // color after mount, without needing to touch globals.css.
  useEffect(() => {
    const root = document.getElementById("blog-post-root");
    if (!root) return;
    const textEls = root.querySelectorAll(
      "h1, h2, h3, h4, p, span, li, a, button"
    );
    textEls.forEach((el) => {
      el.style.opacity = "1";
      el.classList.remove("opacity-0", "invisible");
    });
  }, [post]);

  if (!post) return null;

  const categoryTheme =
    CATEGORY_THEMES[post.category] || CATEGORY_THEMES["Web Development"];
  const CategoryIcon = CATEGORY_ICONS[post.category] || BookOpen;

  // Table of contents headings
  const tocHeadings = post.content.filter((b) => b.type === "heading");

  // Prev / Next posts
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost =
    postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  // Related posts (same category prioritized, excluding current)
  const relatedPosts = useMemo(() => {
    const others = BLOG_POSTS.filter((p) => p.slug !== post.slug);
    const sameCat = others.filter((p) => p.category === post.category);
    const diffCat = others.filter((p) => p.category !== post.category);
    return [...sameCat, ...diffCat].slice(0, 3);
  }, [post.slug, post.category]);

  const shareUrl = `${SITE_INFO.baseUrl}/blog/${post.slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <>
      {/* Fixed top reading progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-amber-900/15 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 transition-[width] duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div
        id="blog-post-root"
        className="relative min-h-screen pb-24 overflow-hidden bg-base"
      >
        {/* Ambient background glows */}
        <div className="absolute top-10 left-10 w-[35rem] h-[35rem] rounded-full bg-amber-500/5 blur-3xl pointer-events-none float-slow" />
        <div className="absolute top-1/2 right-10 w-[30rem] h-[30rem] rounded-full bg-teal-500/5 blur-3xl pointer-events-none float-slow-delay" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#b07a29 1px, transparent 1px), linear-gradient(to right, #b07a29 1px, transparent 40px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center flex-wrap gap-2 text-xs font-extrabold text-[#594f42] mb-8">
            <Link
              href="/"
              className="hover:text-amber-800 transition flex items-center gap-1 font-extrabold"
            >
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#594f42]/60" />
            <Link
              href="/blogs"
              className="hover:text-amber-800 transition flex items-center gap-1 font-extrabold"
            >
              <span>Blog & Insights</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#594f42]/60" />
            <span className="text-amber-950 font-black truncate max-w-[280px]">
              {post.title}
            </span>
          </nav>

          {/* Hero Header Article Banner */}
          <header className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs sm:text-sm font-extrabold text-[#1a1611] shadow-xs mb-5">
              <CategoryIcon className="w-4 h-4 text-amber-700" />
              <span>{post.category}</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#1a1611] tracking-tight leading-tight sm:leading-tight"
              style={{ opacity: 1, color: "#1a1611" }}
            >
              {post.title}
            </h1>

            <p
              className="text-[#3b3226] text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed font-semibold"
              style={{ opacity: 1, color: "#3b3226" }}
            >
              {post.excerpt}
            </p>

            {/* Author & Meta Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 pt-6 border-t border-amber-900/15 text-xs font-bold text-[#594f42]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-amber-800 text-white font-display font-extrabold flex items-center justify-center text-xs shadow-sm">
                  {post.author.initials}
                </div>
                <div className="text-left">
                  <div className="text-[#1a1611] font-extrabold">
                    {post.author.name}
                  </div>
                  <div className="text-[#594f42] text-[11px] font-bold">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <span className="text-[#594f42]/40 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 text-[#3b3226] font-extrabold">
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>{formatDate(post.date)}</span>
              </div>

              <span className="text-[#594f42]/40 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 text-[#3b3226] font-extrabold">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>{post.readTime}</span>
              </div>

              <span className="text-[#594f42]/40 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 text-[#3b3226] font-extrabold">
                <Eye className="w-4 h-4 text-amber-700" />
                <span>{post.views}</span>
              </div>
            </div>
          </header>

          {/* Featured Hero Banner Image */}
          <div className="relative aspect-[16/9] max-h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-900/20 mb-14">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1611]/80 via-transparent to-transparent opacity-60" />

            {/* Floating Emoji Badge */}
            <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-md border border-amber-300/80 shadow-xl flex items-center justify-center text-3xl float-slow">
              {post.emoji}
            </div>

            {/* Floating Live Badge */}
            <div className="absolute bottom-5 left-5 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300/80 shadow-lg flex items-center gap-2 text-xs font-extrabold text-[#1a1611]">
              <Sparkles className="w-4 h-4 text-amber-700 animate-pulse" />
              <span>Stackwise Engineering Verified</span>
            </div>
          </div>

          {/* 2-Column Main Article Body & Sticky Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column: Article Content */}
            <main className="lg:col-span-8">
              {/* Key Takeaways Box (Executive Summary) */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#faf6ed] via-white to-[#f5efe4] border-2 border-amber-900/25 shadow-lg">
                  <div className="flex items-center gap-2.5 mb-4 text-[#1a1611]">
                    <Sparkles className="w-5 h-5 text-amber-700" />
                    <h3
                      className="font-display font-extrabold text-lg sm:text-xl text-[#1a1611]"
                      style={{ opacity: 1, color: "#1a1611" }}
                    >
                      Key Takeaways & Executive Summary
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {post.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span
                          className="text-[#1a1611] text-sm sm:text-base font-bold leading-relaxed"
                          style={{ opacity: 1, color: "#1a1611" }}
                        >
                          {takeaway}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Article Structured Body */}
              <article className="max-w-none">
                {post.content.map((block, idx) => (
                  <ContentBlock key={idx} block={block} />
                ))}
              </article>

              {/* FREQUENTLY ASKED QUESTIONS (FAQS) ACCORDION SECTION */}
              {post.faqs && post.faqs.length > 0 && (
                <section
                  id="faqs-section"
                  className="mt-14 pt-10 border-t border-amber-900/20 scroll-mt-28"
                >
                  <div className="flex items-center gap-2.5 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-amber-800 text-white flex items-center justify-center shadow-xs">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-amber-900 uppercase tracking-wider">
                        Clear Answers
                      </span>
                      <h3
                        className="font-display font-extrabold text-2xl sm:text-3xl text-[#1a1611]"
                        style={{ opacity: 1, color: "#1a1611" }}
                      >
                        Frequently Asked Questions
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {post.faqs.map((faqItem, fIdx) => (
                      <BlogFaqItem key={fIdx} q={faqItem.q} a={faqItem.a} />
                    ))}
                  </div>
                </section>
              )}

              {/* Tag Cloud */}
              <div className="mt-12 pt-6 border-t border-amber-900/15">
                <div className="text-xs font-black uppercase tracking-wider text-[#3b3226] mb-3">
                  Article Tags & Technologies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-xl bg-white border-2 border-amber-900/15 text-xs font-black text-[#1a1611] shadow-2xs hover:border-amber-700/40 transition cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Engagement / Article Feedback */}
              <div className="my-10 p-6 rounded-2xl bg-white border-2 border-amber-900/15 shadow-sm text-center">
                <h4
                  className="font-display font-extrabold text-base sm:text-lg text-[#1a1611]"
                  style={{ opacity: 1, color: "#1a1611" }}
                >
                  Was this architecture breakdown helpful?
                </h4>
                <p
                  className="text-[#4a4134] text-xs sm:text-sm mt-1 font-semibold"
                  style={{ opacity: 1, color: "#4a4134" }}
                >
                  Your feedback helps us curate more actionable technical
                  playbooks.
                </p>

                {feedbackGiven ? (
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-950 text-xs font-extrabold border border-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Thanks for the feedback! We appreciate you reading.</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <button
                      onClick={() => setFeedbackGiven("helpful")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-panel2 border border-amber-900/15 text-xs font-extrabold text-[#1a1611] hover:bg-amber-800 hover:text-white transition btn-pop"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Yes, highly actionable</span>
                    </button>
                    <button
                      onClick={() => setFeedbackGiven("more")}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-panel2 border border-amber-900/15 text-xs font-extrabold text-[#1a1611] hover:bg-amber-800 hover:text-white transition btn-pop"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>Learned something new</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Author Profile Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-900/15 shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 text-white font-display font-black text-xl flex items-center justify-center shadow-md shrink-0">
                  {post.author.initials}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h4
                        className="font-display font-extrabold text-lg text-[#1a1611]"
                        style={{ opacity: 1, color: "#1a1611" }}
                      >
                        Written by {post.author.name}
                      </h4>
                      <div className="text-xs font-extrabold text-amber-900">
                        {post.author.role} at {SITE_INFO.name}
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-[#3b3226] text-xs sm:text-sm mt-2 leading-relaxed font-semibold"
                    style={{ opacity: 1, color: "#3b3226" }}
                  >
                    {post.author.bio}
                  </p>
                </div>
              </div>

              {/* In-Article Project Consultation CTA */}
              <div className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#faf6ed] via-white to-[#f5efe4] border-2 border-amber-900/25 p-8 sm:p-10 text-center shadow-xl">
                <div className="w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <Zap className="w-6 h-6" />
                </div>
                <h3
                  className="text-2xl font-display font-extrabold text-[#1a1611]"
                  style={{ opacity: 1, color: "#1a1611" }}
                >
                  Ready to build or scale your digital product?
                </h3>
                <p
                  className="text-[#3b3226] text-sm sm:text-base mt-2 max-w-md mx-auto font-semibold leading-relaxed"
                  style={{ opacity: 1, color: "#3b3226" }}
                >
                  Our engineering studio scopes, designs, and builds custom
                  web apps, mobile apps, and enterprise backends.
                </p>
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="mt-6 px-8 py-3.5 rounded-full bg-amber-800 text-white font-extrabold text-sm shadow-lg shadow-amber-800/25 hover:bg-amber-900 btn-pop transition"
                >
                  Schedule Engineering Discovery Call →
                </button>
              </div>

              {/* Previous / Next Article Navigation Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-amber-900/15">
                {prevPost ? (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group p-5 rounded-2xl bg-white border-2 border-amber-900/15 hover:border-amber-700/40 transition shadow-xs flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#594f42] mb-2">
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                      <span>Previous Guide</span>
                    </div>
                    <div className="font-display font-extrabold text-sm text-[#1a1611] group-hover:text-amber-800 transition line-clamp-2">
                      {prevPost.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group p-5 rounded-2xl bg-white border-2 border-amber-900/15 hover:border-amber-700/40 transition shadow-xs flex flex-col justify-between text-right"
                  >
                    <div className="flex items-center justify-end gap-1.5 text-xs font-bold text-[#594f42] mb-2">
                      <span>Next Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="font-display font-extrabold text-sm text-[#1a1611] group-hover:text-amber-800 transition line-clamp-2">
                      {nextPost.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </main>

            {/* Right Column: Smart Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents Widget */}
                {(tocHeadings.length > 0 ||
                  (post.faqs && post.faqs.length > 0)) && (
                  <div className="bg-white border-2 border-amber-900/15 rounded-3xl p-6 shadow-md">
                    <div className="flex items-center gap-2 text-xs font-black text-amber-900 uppercase tracking-wider mb-4">
                      <Bookmark className="w-4 h-4" />
                      <span>Table of Contents</span>
                    </div>
                    <nav className="space-y-2 text-sm">
                      {tocHeadings.map((h, hIdx) => {
                        const isActive = activeSectionId === h.id;
                        return (
                          <a
                            key={hIdx}
                            href={`#${h.id}`}
                            className={`block py-1.5 px-2.5 rounded-lg text-xs transition leading-snug ${
                              isActive
                                ? "bg-amber-800 text-white font-black shadow-xs"
                                : "text-[#2b241c] font-bold hover:text-[#1a1611] hover:bg-panel2"
                            }`}
                            style={
                              !isActive
                                ? { opacity: 1, color: "#2b241c" }
                                : undefined
                            }
                          >
                            {h.text}
                          </a>
                        );
                      })}
                      {post.faqs && post.faqs.length > 0 && (
                        <a
                          href="#faqs-section"
                          className={`block py-1.5 px-2.5 rounded-lg text-xs transition leading-snug ${
                            activeSectionId === "faqs-section"
                              ? "bg-amber-800 text-white font-black shadow-xs"
                              : "text-[#2b241c] font-bold hover:text-[#1a1611] hover:bg-panel2"
                          }`}
                        >
                          ❓ Frequently Asked Questions
                        </a>
                      )}
                    </nav>
                  </div>
                )}

                {/* Share Article Widget */}
                <div className="bg-white border-2 border-amber-900/15 rounded-3xl p-6 shadow-md">
                  <div className="flex items-center gap-2 text-xs font-black text-[#1a1611] uppercase tracking-wider mb-4">
                    <Share2 className="w-4 h-4 text-amber-800" />
                    <span>Share This Guide</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        shareUrl
                      )}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-panel2 border border-amber-900/15 text-xs font-extrabold text-[#1a1611] hover:bg-amber-800 hover:text-white transition"
                    >
                      <span>X / Twitter</span>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        shareUrl
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-panel2 border border-amber-900/15 text-xs font-extrabold text-[#1a1611] hover:bg-amber-800 hover:text-white transition"
                    >
                      <span>LinkedIn</span>
                    </a>
                  </div>

                  <button
                    onClick={handleCopyLink}
                    className="w-full mt-2.5 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-panel2 border border-amber-900/15 text-xs font-extrabold text-[#1a1611] hover:border-amber-800 transition"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-800 font-extrabold">
                          Link Copied!
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-amber-800" />
                        <span>Copy Article URL</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Consultation Widget */}
                <div className="bg-gradient-to-br from-[#faf6ed] via-white to-[#f5efe4] border-2 border-amber-900/25 rounded-3xl p-6 shadow-md text-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-800 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4
                    className="font-display font-extrabold text-base text-[#1a1611]"
                    style={{ opacity: 1, color: "#1a1611" }}
                  >
                    Need custom engineering?
                  </h4>
                  <p
                    className="text-[#3b3226] text-xs mt-1.5 leading-relaxed font-semibold"
                    style={{ opacity: 1, color: "#3b3226" }}
                  >
                    Discuss architecture, budget, and MVP milestones directly
                    with our team.
                  </p>
                  <button
                    onClick={() => setEnquiryOpen(true)}
                    className="w-full mt-4 py-2.5 px-4 rounded-xl bg-amber-800 text-white text-xs font-extrabold shadow-md shadow-amber-800/20 hover:bg-amber-900 transition btn-pop"
                  >
                    Get Free Project Scope
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles Section (3 Cards) */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-amber-900/15">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-amber-900">
                    Recommended Reading
                  </span>
                  <h2
                    className="text-2xl sm:text-3xl font-display font-extrabold text-[#1a1611]"
                    style={{ opacity: 1, color: "#1a1611" }}
                  >
                    More Practical Tech Guides
                  </h2>
                </div>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-amber-900 hover:text-amber-950 underline"
                >
                  <span>Explore All {BLOG_POSTS.length} Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/blog/${rPost.slug}`}
                    className="group bg-white border-2 border-amber-900/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-amber-700/50 transition duration-300 flex flex-col"
                  >
                    <div className="relative h-40 bg-panel2 overflow-hidden img-zoom-wrap">
                      <Image
                        src={rPost.image}
                        alt={rPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="img-zoom object-cover"
                      />
                      <span className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md border border-amber-300/80 shadow-md flex items-center justify-center text-base">
                        {rPost.emoji}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="text-[11px] font-black text-amber-900 uppercase tracking-wide mb-1.5">
                          {rPost.category}
                        </div>
                        <h3 className="font-display font-extrabold text-sm sm:text-base text-[#1a1611] group-hover:text-amber-800 transition line-clamp-2">
                          {rPost.title}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-extrabold text-[#594f42] pt-4 mt-4 border-t border-amber-900/15">
                        <span>{formatDate(rPost.date)}</span>
                        <span>{rPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="mt-14 text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-amber-900/15 text-xs font-black text-[#1a1611] hover:border-amber-800 hover:text-amber-800 transition shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all engineering articles</span>
            </Link>
          </div>
        </div>
      </div>
      {enquiryOpen && (
        <EnquiryModal
          service={{ title: post.title, icon: null }}
          onClose={() => setEnquiryOpen(false)}
        />
      )}
    </>
  );
}