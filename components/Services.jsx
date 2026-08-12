"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/data/constants";
import EnquiryModal from "./EnquiryModal";
import Reveal from "./Reveal";

// Each service gets its own accent color + tilt behaviour so the grid
// doesn't read as eight copies of the same card.
const ACCENTS = [
  "--accent-1", "--accent-2", "--accent-3", "--accent-4",
  "--accent-5", "--accent-6", "--accent-7", "--accent-8",
];

function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-6px)`;
}
function resetTilt(e) {
  e.currentTarget.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
}

function ServiceCard({ s, index, onEnquire }) {
  const Icon = s.icon;
  const accentVar = ACCENTS[index % ACCENTS.length];
  // Alternate two card layouts so neighbouring cards don't feel identical.
  const imageFirst = index % 2 === 0;

  return (
    <div
      style={{ "--card-accent": `var(${accentVar})` }}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
      className="gradient-ring tilt-card bg-panel border border-black/5 rounded-2xl overflow-hidden flex flex-col h-full group"
    >
      {imageFirst && (
        <div className="relative h-36 w-full overflow-hidden img-zoom-wrap">
          {/* Plain <img> here (not next/image) since these are external
              stock URLs — avoids needing every stock host added to
              next.config.js images.remotePatterns. */}
          <img
            src={s.image}
            alt={`${s.title} — ${s.tagline}`}
            className="absolute inset-0 w-full h-full object-cover img-zoom"
            loading="lazy"
          />
          <div
            className="absolute inset-0 mix-blend-multiply opacity-40"
            style={{ background: `rgb(var(${accentVar}))` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/10 to-transparent" />
          <div
            className="absolute -bottom-6 left-5 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg"
            style={{ background: `rgb(var(${accentVar}))` }}
          >
            <Icon size={24} />
          </div>
        </div>
      )}

      <div className={`p-6 flex flex-col flex-1 ${imageFirst ? "pt-9" : ""}`}>
        {!imageFirst && (
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4"
            style={{ background: `rgb(var(${accentVar}))` }}
          >
            <Icon size={24} />
          </div>
        )}

        <h4 className="text-[#1a1611] font-display font-bold text-lg">{s.title}</h4>
        <div
          className="text-xs font-medium mt-1 mb-2"
          style={{ color: `rgb(var(${accentVar}))` }}
        >
          {s.tagline}
        </div>
        <p className="text-muted text-sm">{s.desc}</p>

        <ul className="mt-4 space-y-1.5 flex-1">
          {s.subServices.slice(0, 4).map((sub) => (
            <li key={sub} className="text-muted/90 text-xs flex gap-2 leading-relaxed">
              <span className="mt-0.5" style={{ color: `rgb(var(${accentVar}))` }}>•</span>
              <span>{sub}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 mt-5">
          <Link
            href={`/services/${s.slug}`}
            className="text-sm font-medium hover:underline"
            style={{ color: `rgb(var(${accentVar}))` }}
          >
            View Details →
          </Link>
          <button
            onClick={() => onEnquire(s)}
            className="ml-auto px-4 py-2 rounded-full bg-gold text-ink text-sm font-semibold hover:bg-goldlight btn-pop transition"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {!imageFirst && (
        <div className="relative h-24 w-full overflow-hidden img-zoom-wrap mt-auto">
          <img
            src={s.image2 || s.image}
            alt={`${s.title} sample work`}
            className="absolute inset-0 w-full h-full object-cover img-zoom"
            loading="lazy"
          />
          <div
            className="absolute inset-0 mix-blend-multiply opacity-30"
            style={{ background: `rgb(var(${accentVar}))` }}
          />
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const [enquiryService, setEnquiryService] = useState(null);

  return (
    <>
      <section id="services" className="py-24 px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-end mb-12">
          <Reveal>
            <div className="text-gold text-sm font-medium mb-2">// 04. services</div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">Services</h2>
            <p className="text-muted mt-3 max-w-xl">
              End-to-end product delivery — from API architecture to
              pixel-perfect, production-ready frontends. Each service below
              has its own accent color and imagery so you can tell them apart
              at a glance — open one for full details, or tap Enquire to tell
              us what you need.
            </p>
          </Reveal>

          <Reveal direction="left" delay={100} className="hidden lg:block">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/5 img-zoom-wrap">
              <Image
                src="https://picsum.photos/seed/stackwise-services/640/400"
                alt="Team collaborating on a software project"
                fill
                sizes="360px"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <ServiceCard s={s} index={i} onEnquire={setEnquiryService} />
            </Reveal>
          ))}
        </div>
      </section>

      {enquiryService && (
        <EnquiryModal service={enquiryService} onClose={() => setEnquiryService(null)} />
      )}
    </>
  );
}
