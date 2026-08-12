"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/blogs";
import { SITE_INFO } from "@/data/constants";
import EnquiryModal from "./EnquiryModal";
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
function ContentBlock({ block }) {
  if (block.type === "heading") {
    return (
      <h2
        id={block.id}
        className="text-[#1a1611] font-display font-bold text-xl sm:text-2xl mt-10 mb-4 scroll-mt-28"
      >
        {block.text}
      </h2>
    );
  }
  if (block.type === "list") {
    return (
      <ul className="space-y-2 my-5">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-muted leading-relaxed">
            <span className="text-gold mt-1 shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p className="text-muted leading-relaxed mb-5">{block.text}</p>;
}

export default function BlogPostContent({ slug }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const scrolled = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!post) return null;

  const toc = post.content.filter((b) => b.type === "heading");
  const sortedOthers = BLOG_POSTS.filter((p) => p.slug !== post.slug).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const sameCategory = sortedOthers.filter((p) => p.category === post.category);
  const fillers = sortedOthers.filter((p) => p.category !== post.category);
  const related = [...sameCategory, ...fillers].slice(0, 3);
  const latestPosts = sortedOthers.slice(0, 4);

  const shareUrl = `${SITE_INFO.baseUrl}/blog/${post.slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op, user can still select the URL manually.
    }
  };

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-20 left-0 right-0 h-0.5 bg-white/5 z-30">
        <div
          className="h-full bg-gold transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-gold transition">Blog</Link>
          <span>/</span>
          <span className="text-[#1a1611] font-semibold truncate max-w-[200px]">{post.title}</span>
        </div>

        {/* Header banner */}
        <div className="relative overflow-hidden rounded-3xl border border-white/5 p-8 sm:p-12 mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            priority
            className="object-cover -z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
          <div className="relative z-10">
            <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1611] mt-4 mb-5 max-w-3xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-goldlight text-ink font-display font-bold flex items-center justify-center text-sm shrink-0">
                {post.author.initials}
              </div>
              <div className="text-sm">
                <div className="text-[#1a1611] font-bold">{post.author.name}</div>
                <div className="text-muted text-xs">
                  {formatDate(post.date)} · {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-10">
          {/* Main content */}
          <article className="max-w-none">
            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/5">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full bg-panel border border-white/10 text-muted"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="relative overflow-hidden mt-10 bg-gradient-to-br from-panel to-panel2 border border-gold/20 rounded-2xl p-8 text-center">
              <h3 className="text-[#1a1611] font-display font-bold text-xl mb-2">
                Have a project like this in mind?
              </h3>
              <p className="text-muted text-sm mb-6 max-w-md mx-auto">
                Tell us what you're building and we'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition"
              >
                Enquire Now →
              </button>
            </div>
          </article>

          {/* Sticky sidebar */}
          <div className="space-y-6 h-fit lg:sticky lg:top-24">
            {toc.length > 0 && (
              <div className="bg-panel border border-white/5 rounded-2xl p-5">
                <h3 className="text-[#1a1611] text-sm font-bold mb-3">
                  On this page
                </h3>
                <nav className="space-y-2">
                  {toc.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className="block text-sm text-muted hover:text-gold transition"
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {latestPosts.length > 0 && (
              <div className="bg-panel border border-white/5 rounded-2xl p-5">
                <h3 className="text-[#1a1611] text-sm font-bold mb-4">Latest Posts</h3>
                <div className="space-y-4">
                  {latestPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group flex gap-3 items-start"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-panel2">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[#1a1611] text-sm font-bold leading-snug line-clamp-2 group-hover:text-gold transition">
                          {p.title}
                        </div>
                        <div className="text-muted text-xs mt-1">{formatDate(p.date)}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-panel border border-white/5 rounded-2xl p-5">
              <h3 className="text-[#1a1611] text-sm font-bold mb-3">Share this post</h3>
              <div className="flex gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-3 py-2 rounded-lg bg-panel2 border border-white/10 text-muted text-xs hover:border-gold hover:text-gold transition"
                >
                  X / Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-3 py-2 rounded-lg bg-panel2 border border-white/10 text-muted text-xs hover:border-gold hover:text-gold transition"
                >
                  LinkedIn
                </a>
              </div>
              <button
                onClick={handleCopyLink}
                className="w-full mt-2 px-3 py-2 rounded-lg bg-panel2 border border-white/10 text-muted text-xs hover:border-gold hover:text-gold transition"
              >
                {copied ? "Link copied ✓" : "Copy link"}
              </button>
            </div>

            <div className="bg-gradient-to-br from-panel to-panel2 border border-gold/20 rounded-2xl p-5">
              <h3 className="text-[#1a1611] text-sm font-bold mb-2">
                Need help with this?
              </h3>
              <p className="text-muted text-xs leading-relaxed mb-4">
                Our team can scope, build, and ship it for you.
              </p>
              <button
                onClick={() => setEnquiryOpen(true)}
                className="w-full px-4 py-2.5 rounded-full bg-gold text-ink text-sm font-semibold hover:bg-goldlight transition"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-white/5">
            <h2 className="text-[#1a1611] font-display font-bold text-lg mb-6">
              Related Posts
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-panel border border-white/5 rounded-xl overflow-hidden hover:border-gold/40 hover:-translate-y-0.5 transition"
                >
                  <div className="relative h-28 bg-panel2 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-2 w-7 h-7 rounded-full bg-panel/90 border border-white/10 flex items-center justify-center text-sm">
                      {p.emoji}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="text-[#1a1611] text-sm font-bold mb-1 group-hover:text-gold transition">
                      {p.title}
                    </div>
                    <div className="text-muted text-xs">{formatDate(p.date)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <Link href="/blogs" className="text-gold text-sm font-medium hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </section>

      {enquiryOpen && (
        <EnquiryModal
          service={{ title: "your project", icon: null }}
          onClose={() => setEnquiryOpen(false)}
        />
      )}
    </>
  );
}
