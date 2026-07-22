"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blogs";

const FILTERS = Object.values(BLOG_CATEGORIES);

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogList() {
  const [activeFilter, setActiveFilter] = useState("all");

  const [featured, ...rest] = BLOG_POSTS;

  const filteredRest =
    activeFilter === "all" ? rest : rest.filter((p) => p.category === activeFilter);

  const showFeatured = activeFilter === "all";

  return (
    <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 sm:py-20">
      <div className="mb-10">
        <div className="text-gold text-sm font-medium mb-2">// insights</div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold">
          Ideas, Guides & Lessons
        </h1>
        <p className="text-muted mt-3 max-w-xl">
          Notes from building and shipping web apps, mobile apps, and
          marketing campaigns — the practical stuff, not the hype.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
              activeFilter === f
                ? "bg-gold text-ink border-gold"
                : "border-white/15 text-muted hover:border-gold hover:text-gold"
            }`}
          >
            {f === "all" ? "All" : f}
          </button>
        ))}
      </div>

      {/* Featured spotlight post */}
      {showFeatured && (
        <Link
          href={`/blog/${featured.slug}`}
          className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-panel via-panel to-panel2 border border-white/5 hover:border-gold/30 transition mb-12"
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#c8a96e 1px, transparent 1px), linear-gradient(90deg, #c8a96e 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="relative z-10 grid md:grid-cols-[1fr_280px] gap-8 p-8 sm:p-12 items-center">
            <div>
              <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                Featured · {featured.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-4 mb-3 group-hover:text-gold transition">
                {featured.title}
              </h2>
              <p className="text-muted leading-relaxed max-w-xl mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span>{formatDate(featured.date)}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
            <div className="hidden md:block relative w-44 h-44 rounded-3xl overflow-hidden border border-gold/20">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="176px"
                className="object-cover"
              />
              <span className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-panel/90 border border-white/10 flex items-center justify-center text-lg">
                {featured.emoji}
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* Post grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-panel border border-white/5 rounded-2xl overflow-hidden hover:border-gold/40 transition flex flex-col"
          >
            <div className="relative h-36 bg-panel2 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute bottom-2 left-3 w-8 h-8 rounded-full bg-panel/90 border border-white/10 flex items-center justify-center text-base">
                {post.emoji}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="text-gold text-xs uppercase tracking-wide">
                {post.category}
              </div>
              <h3 className="text-white font-display font-semibold mt-2 group-hover:text-gold transition">
                {post.title}
              </h3>
              <p className="text-muted text-sm mt-2 flex-1">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-muted/70 mt-4 pt-4 border-t border-white/5">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredRest.length === 0 && !showFeatured && (
        <div className="text-center text-muted py-16">
          No posts in this category yet — check back soon.
        </div>
      )}
    </section>
  );
}
