"use client";
import { useState } from "react";
import Link from "next/link";
import { SERVICES, SITE_INFO, TESTIMONIALS } from "@/data/constants";
import EnquiryModal from "./EnquiryModal";
import Reveal from "./Reveal";
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border rounded-xl overflow-hidden transition ${
        open ? "bg-panel border-gold/30" : "bg-panel border-white/5"
      }`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
      >
        <span className="text-[#1a1611] text-sm font-bold">{q}</span>
        <span
          className={`w-6 h-6 rounded-full bg-gold/10 text-gold text-sm shrink-0 flex items-center justify-center transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-muted text-sm leading-relaxed border-t border-white/5 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

const PROCESS_STEPS = [
  ["Discovery Call", "We understand your goals, timeline, and budget."],
  ["Proposal & Scope", "You get a clear plan, cost, and delivery timeline."],
  ["Build & Review", "We build in milestones and keep you updated."],
  ["Launch & Support", "We deploy, test, and support you after go-live."],
];

// Each service family gets its own gallery "frame" style so a Graphic
// Designing page doesn't look like a re-skinned Backend Development page —
// same component, genuinely different presentation per service.
function getVisualStyle(slug) {
  if (["web-development", "frontend-development"].includes(slug)) return "browser";
  if (["backend-development", "api-integration", "deployment-devops"].includes(slug)) return "terminal";
  if (slug === "mobile-app-development") return "phone";
  if (slug === "graphic-designing") return "polaroid";
  if (slug === "digital-marketing") return "stats";
  return "default";
}

export default function ServiceDetailContent({ slug }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return null;

  const Icon = service.icon;
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const prevService = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const nextService = SERVICES[(idx + 1) % SERVICES.length];
  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const testimonial = TESTIMONIALS[idx % TESTIMONIALS.length];
  // Same accent order as the homepage Services grid, so a service keeps
  // its own color identity when you land on its detail page.
  const ACCENTS = ["--accent-1", "--accent-2", "--accent-3", "--accent-4", "--accent-5", "--accent-6", "--accent-7", "--accent-8"];
  const accentVar = ACCENTS[idx % ACCENTS.length];
  const accent = `rgb(var(${accentVar}))`;
  const visualStyle = getVisualStyle(service.slug);

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-gold transition">Services</Link>
          <span>/</span>
          <span className="text-[#1a1611] font-semibold">{service.title}</span>
        </div>

        {/* Header banner */}
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel via-panel to-panel2 border border-black/5 mb-6 grid lg:grid-cols-[1.15fr_0.85fr]"
            style={{ boxShadow: `inset 0 3px 0 0 ${accent}` }}
          >
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#c8a96e 1px, transparent 1px), linear-gradient(90deg, #c8a96e 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            <div className="relative z-10 p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-start sm:items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl text-white flex items-center justify-center shrink-0 shadow-lg pulse-glow"
                  style={{ background: accent }}
                >
                  <Icon size={28} />
                </div>
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: accent }}>{service.tagline}</div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#1a1611]">
                    {service.title}
                  </h1>
                </div>
              </div>

              <p className="text-muted leading-relaxed max-w-2xl mb-6">{service.desc}</p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight btn-pop transition"
                >
                  Enquire Now →
                </button>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="px-6 py-3 rounded-full border border-white/15 text-white font-semibold hover:border-gold hover:text-gold transition"
                >
                  Email Us
                </a>
              </div>
            </div>

            {service.image && (
              <div className="relative min-h-[220px] lg:min-h-0 img-zoom-wrap overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="img-zoom absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-panel via-panel/10 to-transparent lg:bg-gradient-to-r lg:from-panel lg:via-transparent lg:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent lg:hidden" />
              </div>
            )}
          </div>
        </Reveal>

        {/* Secondary image strip — presentation style depends on the
            service family (browser mockup, terminal, phone frame,
            polaroid gallery, or stat cards), so each service page has
            its own visual identity instead of a generic gallery. */}
        {service.image2 && (
          <Reveal delay={60}>
            {visualStyle === "browser" && (
              <div className="mb-12 rounded-2xl overflow-hidden border border-black/10 shadow-xl">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-panel2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e0605a]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e6b450]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5cb779]" />
                  <span
                    className="ml-3 text-[11px] px-3 py-1 rounded-full bg-panel text-muted truncate max-w-[240px]"
                  >
                    {SITE_INFO.baseUrl?.replace(/^https?:\/\//, "") || "yourproject.com"}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2">
                  <div className="relative h-48 sm:h-64 img-zoom-wrap">
                    <img src={service.image} alt={`${service.title} — desktop view`} className="img-zoom absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="relative h-48 sm:h-64 img-zoom-wrap border-t sm:border-t-0 sm:border-l border-black/10">
                    <img src={service.image2} alt={`${service.title} — responsive view`} className="img-zoom absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            )}

            {visualStyle === "terminal" && (
              <div className="mb-12 rounded-2xl overflow-hidden border border-black/10 shadow-xl bg-[#1a1712]">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#221e17]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e0605a]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e6b450]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5cb779]" />
                  <span className="ml-3 text-[11px] font-mono text-white/50">
                    ~/{service.slug} — deploy.log
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-px bg-black/20">
                  <div className="relative h-44 sm:h-56">
                    <img src={service.image} alt={`${service.title} — system view`} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="relative h-44 sm:h-56">
                    <img src={service.image2} alt={`${service.title} — infrastructure view`} className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  </div>
                </div>
                <div className="px-4 py-3 font-mono text-[11px] text-[#8fd19e]">
                  <span style={{ color: accent }}>$</span> build passed · tests green · deployed to production ✓
                </div>
              </div>
            )}

            {visualStyle === "phone" && (
              <div className="mb-12 flex items-end justify-center gap-6 sm:gap-10 py-4">
                <div className="relative w-[150px] sm:w-[190px] aspect-[9/19] rounded-[2rem] border-[6px] border-black/80 shadow-2xl overflow-hidden -rotate-6 img-zoom-wrap">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/80 rounded-b-xl z-10" />
                  <img src={service.image} alt={`${service.title} — app screen 1`} className="img-zoom absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="relative w-[160px] sm:w-[210px] aspect-[9/19] rounded-[2rem] border-[6px] border-black/80 shadow-2xl overflow-hidden translate-y-3 img-zoom-wrap">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/80 rounded-b-xl z-10" />
                  <img src={service.image2} alt={`${service.title} — app screen 2`} className="img-zoom absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            )}

            {visualStyle === "polaroid" && (
              <div className="mb-16 flex flex-wrap justify-center gap-6 sm:gap-10 py-6">
                <div className="bg-white p-3 pb-8 shadow-2xl -rotate-6 w-48 sm:w-60 img-zoom-wrap">
                  <div className="relative h-40 sm:h-52 overflow-hidden">
                    <img src={service.image} alt={`${service.title} — concept 1`} className="img-zoom absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="text-center text-[11px] text-black/50 font-display mt-2">brand · v1</div>
                </div>
                <div className="bg-white p-3 pb-8 shadow-2xl rotate-3 w-48 sm:w-60 img-zoom-wrap sm:translate-y-4">
                  <div className="relative h-40 sm:h-52 overflow-hidden">
                    <img src={service.image2} alt={`${service.title} — concept 2`} className="img-zoom absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="text-center text-[11px] text-black/50 font-display mt-2">mockup · final</div>
                </div>
              </div>
            )}

            {visualStyle === "stats" && (
              <div className="mb-12 relative">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden img-zoom-wrap border border-black/10">
                    <img src={service.image} alt={`${service.title} — campaign view`} className="img-zoom absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="relative h-48 sm:h-60 rounded-2xl overflow-hidden img-zoom-wrap border border-black/10">
                    <img src={service.image2} alt={`${service.title} — analytics view`} className="img-zoom absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  {[["+180%", "Avg. traffic growth"], ["3.2x", "Lead conversion lift"], ["24/7", "Campaign monitoring"]].map(([num, label]) => (
                    <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-panel border border-black/10 text-sm">
                      <span className="font-display font-bold" style={{ color: accent }}>{num}</span>
                      <span className="text-muted text-xs">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {visualStyle === "default" && (
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <div className="relative h-40 sm:h-52 rounded-2xl overflow-hidden img-zoom-wrap border border-black/10">
                  <img src={service.image} alt={`${service.title} — reference 1`} className="img-zoom absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="relative h-40 sm:h-52 rounded-2xl overflow-hidden img-zoom-wrap border border-black/10">
                  <img src={service.image2} alt={`${service.title} — reference 2`} className="img-zoom absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            )}
          </Reveal>
        )}

        {/* Highlights strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {[
            ["⏱", "Turnaround", service.turnaround.split(" ").slice(0, 3).join(" ")],
            ["📦", "Deliverables", `${service.subServices.length} items`],
            ["💬", "Response Time", "Within 24 hrs"],
            ["🛡", "Support", "Post-launch included"],
          ].map(([icon, label, val], i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="bg-panel border border-white/5 rounded-xl p-4 text-center hover:border-gold/30 hover:-translate-y-0.5 transition">
                <div className="w-9 h-9 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-base mb-2">
                  {icon}
                </div>
                <div className="text-[#1a1611] text-sm font-semibold">{val}</div>
                <div className="text-muted text-xs mt-0.5">{label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-[1fr_320px] gap-10">
          <div>
            {/* Overview — a longer, more detailed explanation of the service */}
            {service.overview && (
              <>
                <h2 className="text-[#1a1611] font-display font-bold text-xl mb-4">
                  How we approach {service.title.toLowerCase()}
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-12">
                  {service.overview}
                </p>
              </>
            )}

            {/* What's included */}
            <h2 className="text-[#1a1611] font-display font-bold text-xl mb-4">
              What's included
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {service.subServices.map((sub) => (
                <div
                  key={sub}
                  className="bg-panel border border-white/5 rounded-xl p-4 flex gap-3 border-l-2 border-l-gold/50"
                >
                  <span className="text-gold mt-0.5">✓</span>
                  <span className="text-muted text-sm leading-relaxed">{sub}</span>
                </div>
              ))}
            </div>

            {/* Why choose us for this service — numbered rows */}
            {service.benefits && (
              <>
                <h2 className="text-[#1a1611] font-display font-bold text-xl mb-4">
                  Why choose {SITE_INFO.shortName} for this
                </h2>
                <div className="divide-y divide-white/5 border-t border-b border-white/5 mb-12">
                  {service.benefits.map((b, i) => (
                    <div key={b} className="flex gap-5 py-4">
                      <span className="text-gold/50 font-display font-bold text-lg shrink-0 w-8">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-muted text-sm leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Ideal for */}
            {service.idealFor && (
              <>
                <h2 className="text-[#1a1611] font-display font-bold text-xl mb-4">
                  Who this is for
                </h2>
                <div className="flex flex-wrap gap-2 mb-12">
                  {service.idealFor.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full bg-panel border border-white/10 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Tools */}
            <h2 className="text-[#1a1611] font-display font-bold text-xl mb-4">
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-2 mb-12">
              {service.tools.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Process — horizontal stepper on desktop, list on mobile */}
            <h2 className="text-[#1a1611] font-display font-bold text-xl mb-6">
              How we work
            </h2>

            <div className="hidden lg:block relative mb-12">
              <div className="absolute top-5 left-0 right-0 h-px bg-white/10" />
              <div className="flex justify-between relative">
                {PROCESS_STEPS.map(([step, desc], i) => (
                  <div key={step} className="relative z-10 px-3 text-center w-1/4">
                    <div className="w-10 h-10 mx-auto rounded-full bg-ink border-2 border-gold text-gold font-display font-semibold flex items-center justify-center mb-3">
                      {i + 1}
                    </div>
                    <div className="text-white text-sm font-medium mb-1">{step}</div>
                    <div className="text-muted text-xs leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <ol className="lg:hidden space-y-4 mb-12">
              {PROCESS_STEPS.map(([step, desc], i) => (
                <li key={step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-semibold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{step}</div>
                    <div className="text-muted text-sm">{desc}</div>
                  </div>
                </li>
              ))}
            </ol>

            {/* What we need from you */}
            {service.kickoffChecklist && (
              <>
                <h2 className="text-[#1a1611] font-display font-bold text-xl mb-4">
                  What we need from you to get started
                </h2>
                <div className="bg-panel border border-white/5 rounded-xl p-5 mb-12">
                  <ul className="space-y-3">
                    {service.kickoffChecklist.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted leading-relaxed">
                        <span className="w-5 h-5 rounded border border-gold/40 flex items-center justify-center text-gold text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* FAQs */}
            {service.faqs && (
              <>
                <h2 className="text-[#1a1611] font-display font-bold text-xl mb-4">
                  Frequently asked questions
                </h2>
                <div className="space-y-3 mb-12">
                  {service.faqs.map((f) => (
                    <FaqItem key={f.q} q={f.q} a={f.a} />
                  ))}
                </div>
              </>
            )}

            {/* Testimonial */}
            <div className="relative bg-panel border border-white/5 rounded-2xl p-6 sm:p-8 overflow-hidden">
              <span className="absolute -top-2 left-4 text-6xl font-display text-gold/10 leading-none select-none">
                "
              </span>
              <div className="flex gap-0.5 text-gold text-xs mb-3 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-[#1a1611] text-base leading-relaxed relative z-10 font-medium">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3 mt-5 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-goldlight text-ink font-display font-bold flex items-center justify-center text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-[#1a1611] text-sm font-bold">{testimonial.name}</div>
                  <div className="text-muted text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky snapshot card */}
          <div className="bg-gradient-to-br from-panel to-panel2 border border-gold/20 rounded-2xl p-6 h-fit md:sticky md:top-24">
            <h3 className="text-[#1a1611] font-display font-bold text-lg mb-4">
              Project Snapshot
            </h3>
            {[
              ["Deliverables", service.deliverables],
              ["Turnaround", service.turnaround],
            ].map(([k, v]) => (
              <div key={k} className="py-3 border-t border-white/10 first:border-t-0 first:pt-0">
                <div className="text-muted text-xs uppercase tracking-wide mb-1">{k}</div>
                <div className="text-[#1a1611] text-sm font-semibold">{v}</div>
              </div>
            ))}
            <button
              onClick={() => setEnquiryOpen(true)}
              className="w-full mt-5 px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition"
            >
              Enquire Now →
            </button>
            <p className="text-muted text-xs text-center mt-3">
              We usually reply within 24 hours.
            </p>
          </div>
        </div>

        {/* Related services */}
        {otherServices.length > 0 && (
          <div className="mt-16 pt-10 border-t border-white/5">
            <h2 className="text-[#1a1611] font-display font-bold text-xl mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {otherServices.map((s, i) => {
                const OIcon = s.icon;
                return (
                  <Reveal key={s.slug} delay={i * 90}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group block bg-panel border border-white/5 rounded-xl overflow-hidden hover:border-gold/40 hover:-translate-y-0.5 transition"
                    >
                      {s.image && (
                        <div className="h-28 img-zoom-wrap overflow-hidden">
                          <img
                            src={s.image}
                            alt={s.title}
                            className="img-zoom w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition">
                          <OIcon size={20} className="text-gold" />
                        </div>
                        <div className="text-[#1a1611] text-sm font-bold mb-1">{s.title}</div>
                        <div className="text-muted text-xs leading-relaxed">{s.desc}</div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        )}

        {/* Prev / Next */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/5 gap-4">
          <Link
            href={`/services/${prevService.slug}`}
            className="text-muted hover:text-gold text-sm truncate"
          >
            ‹ {prevService.title}
          </Link>
          <Link
            href={`/services/${nextService.slug}`}
            className="text-muted hover:text-gold text-sm truncate text-right"
          >
            {nextService.title} ›
          </Link>
        </div>

        {/* Bottom CTA banner */}
        <div className="relative overflow-hidden mt-16 bg-gradient-to-br from-panel to-panel2 border border-gold/20 rounded-2xl p-8 text-center">
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
              Ready to start your {service.title.toLowerCase()} project?
            </h3>
            <p className="text-muted text-sm mb-6 max-w-md mx-auto">
              Tell us what you're building and we'll get back to you within 24 hours with next steps.
            </p>
            <button
              onClick={() => setEnquiryOpen(true)}
              className="px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition"
            >
              Enquire Now →
            </button>
          </div>
        </div>
      </section>

      {enquiryOpen && (
        <EnquiryModal service={service} onClose={() => setEnquiryOpen(false)} />
      )}
    </>
  );
}