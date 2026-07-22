"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_ITEMS, CATEGORY_TYPES } from "@/data/constants";
import PortfolioModal from "./PortfolioModal";
import Reveal from "./Reveal";

const FILTERS = Object.values(CATEGORY_TYPES);

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered =
    activeFilter === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.cat === activeFilter);

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
      <section id="portfolio" className="py-24 px-6 sm:px-10 lg:px-16 2xl:px-24">
        <Reveal className="mb-10">
          <div className="text-gold text-sm font-medium mb-2">// 03. portfolio</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Portfolio</h2>
          <p className="text-muted mt-3 max-w-xl">
            Real projects built across web, AI integration, and large-scale
            backend systems.
          </p>
        </Reveal>

        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition
              ${
                activeFilter === f
                  ? "bg-gold text-ink border-gold"
                  : "border-white/15 text-muted hover:border-gold hover:text-gold"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 90}>
              <div
                onClick={() => openItem(item)}
                className="group bg-panel border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-gold/40 hover:-translate-y-1 transition"
              >
                <div className="relative h-40 bg-panel2 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <span className="absolute bottom-3 left-3 w-9 h-9 rounded-full bg-panel/90 border border-white/10 flex items-center justify-center text-lg">
                    {item.emoji}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center text-2xl opacity-0 group-hover:opacity-100 transition">
                    🔍
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-gold text-xs uppercase tracking-wide">{item.cat}</div>
                  <h4 className="text-white font-display font-semibold mt-1">{item.title}</h4>
                  <p className="text-muted text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          onClose={closeModal}
          onPrev={() => navigate(-1)}
          onNext={() => navigate(1)}
        />
      )}
    </>
  );
}
