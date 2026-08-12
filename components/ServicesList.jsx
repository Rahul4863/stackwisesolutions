"use client";

import Link from "next/link";
import { SERVICES, SITE_INFO } from "@/data/constants";
import Reveal from "./Reveal";

// Same 8-color accent rotation used on the homepage grid and on each
// service's own detail page — keeps a service's color identity
// consistent everywhere it appears on the site.
const ACCENTS = [
  "--accent-1", "--accent-2", "--accent-3", "--accent-4",
  "--accent-5", "--accent-6", "--accent-7", "--accent-8",
];

function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-4px)`;
}
function resetTilt(e) {
  e.currentTarget.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
}

function ServiceRow({ s, index }) {
  const Icon = s.icon;
  const accentVar = ACCENTS[index % ACCENTS.length];
  const imageLeft = index % 2 === 0;

  const ImageBlock = (
    <div className="relative h-52 sm:h-full min-h-[220px] overflow-hidden img-zoom-wrap">
      <img
        src={s.image}
        alt={`${s.title} — ${s.tagline}`}
        className="img-zoom absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0 mix-blend-multiply opacity-25"
        style={{ background: `rgb(var(${accentVar}))` }}
      />
    </div>
  );

  const ContentBlock = (
    <div className="p-7 sm:p-10 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
          style={{ background: `rgb(var(${accentVar}))` }}
        >
          <Icon size={22} />
        </div>
        <div className="text-xs font-medium tracking-wide" style={{ color: `rgb(var(${accentVar}))` }}>
          {s.tagline}
        </div>
      </div>

      <h2 className="text-2xl font-display font-bold text-[#1a1611]">{s.title}</h2>
      <p className="text-muted mt-3 leading-relaxed">{s.desc}</p>

      <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
        {s.subServices.slice(0, 4).map((sub) => (
          <li key={sub} className="text-muted/90 text-xs flex gap-2 leading-relaxed">
            <span className="mt-0.5" style={{ color: `rgb(var(${accentVar}))` }}>•</span>
            <span>{sub}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-3 mt-6">
        <Link
          href={`/services/${s.slug}`}
          className="px-5 py-2.5 rounded-full bg-gold text-ink text-sm font-semibold hover:bg-goldlight btn-pop transition"
        >
          View Full Details →
        </Link>
        <span className="text-muted text-xs">{s.turnaround}</span>
      </div>
    </div>
  );

  return (
    <div
      style={{ "--card-accent": `var(${accentVar})` }}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
      className="gradient-ring tilt-card bg-panel border border-black/5 rounded-2xl overflow-hidden grid sm:grid-cols-2"
    >
      {imageLeft ? (
        <>
          {ImageBlock}
          {ContentBlock}
        </>
      ) : (
        <>
          <div className="sm:order-2">{ImageBlock}</div>
          <div className="sm:order-1">{ContentBlock}</div>
        </>
      )}
    </div>
  );
}

export default function ServicesList() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 sm:py-20">
      <Reveal className="mb-12 max-w-2xl">
        <div className="text-gold text-sm font-medium mb-2">// all services</div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold">
          Everything We Build, Under One Roof
        </h1>
        <p className="text-muted mt-3">
          From the first line of backend code to the campaign that brings
          people to your product — {SITE_INFO.name} covers the full stack.
          Each service below has its own team focus, tools, and delivery
          timeline. Open one for the full breakdown, FAQs, and process.
        </p>
      </Reveal>

      <div className="flex flex-col gap-6">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 80}>
            <ServiceRow s={s} index={i} />
          </Reveal>
        ))}
      </div>

      {/* Bottom CTA banner */}
      <Reveal className="mt-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-panel to-panel2 border border-gold/20 rounded-2xl p-8 text-center">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#c8a96e 1px, transparent 1px), linear-gradient(90deg, #c8a96e 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative z-10">
            <h3 className="text-[#1a1611] font-display font-bold text-xl mb-2">
              Not sure which service you need?
            </h3>
            <p className="text-muted text-sm mb-6 max-w-md mx-auto">
              Tell us what you're trying to build and we'll tell you exactly
              which of these services (or combination of them) gets you
              there.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight btn-pop transition"
            >
              Talk to Us →
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
