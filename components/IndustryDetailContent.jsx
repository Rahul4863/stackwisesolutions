"use client";

import { useState } from "react";
import Link from "next/link";
import {
  INDUSTRIES,
  SERVICES,
  SITE_INFO,
  TESTIMONIALS,
  PORTFOLIO_DETAILS,
} from "@/data/constants";
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
        <span className="text-white text-sm font-medium">{q}</span>
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

export default function IndustryDetailContent({ slug }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) return null;

  const Icon = industry.icon;
  const idx = INDUSTRIES.findIndex((i) => i.slug === slug);
  const prevIndustry = INDUSTRIES[(idx - 1 + INDUSTRIES.length) % INDUSTRIES.length];
  const nextIndustry = INDUSTRIES[(idx + 1) % INDUSTRIES.length];
  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== slug).slice(0, 3);
  const relatedServices = SERVICES.filter((s) => industry.services?.includes(s.slug));
  const testimonial = TESTIMONIALS[idx % TESTIMONIALS.length];
  const casePortfolio = industry.caseHighlight
    ? PORTFOLIO_DETAILS[industry.caseHighlight.portfolioId]
    : null;

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-12 sm:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted mb-6">
          <Link href="/" className="hover:text-gold transition">Home</Link>
          <span>/</span>
          <Link href="/industries" className="hover:text-gold transition">Industries</Link>
          <span>/</span>
          <span className="text-white">{industry.title}</span>
        </div>

        {/* Header banner */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel via-panel to-panel2 border border-white/5 mb-12 grid lg:grid-cols-[1.15fr_0.85fr]">
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
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 text-gold flex items-center justify-center shrink-0">
                  <Icon size={28} />
                </div>
                <div>
                  <div className="text-gold text-sm font-medium mb-1">{industry.tagline}</div>
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
                    {industry.title}
                  </h1>
                </div>
              </div>

              <p className="text-muted leading-relaxed max-w-2xl mb-6">{industry.desc}</p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition"
                >
                  Discuss Your Project →
                </button>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="px-6 py-3 rounded-full border border-white/15 text-white font-semibold hover:border-gold hover:text-gold transition"
                >
                  Email Us
                </a>
              </div>
            </div>

            {industry.image && (
              <div className="relative min-h-[220px] lg:min-h-0 img-zoom-wrap overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="img-zoom absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-panel via-panel/10 to-transparent lg:bg-gradient-to-r lg:from-panel lg:via-transparent lg:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent lg:hidden" />
              </div>
            )}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_320px] gap-10">
          <div>
            {/* Challenges */}
            {industry.challenges && (
              <>
                <h2 className="text-white font-display font-semibold text-lg mb-4">
                  Challenges businesses in {industry.title.toLowerCase()} face
                </h2>
                <div className="divide-y divide-white/5 border-t border-b border-white/5 mb-12">
                  {industry.challenges.map((c, i) => (
                    <div key={c} className="flex gap-5 py-4">
                      <span className="text-gold/50 font-display font-bold text-lg shrink-0 w-8">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-muted text-sm leading-relaxed">{c}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Solutions */}
            {industry.solutions && (
              <>
                <h2 className="text-white font-display font-semibold text-lg mb-4">
                  How {SITE_INFO.shortName} solves this
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 mb-12">
                  {industry.solutions.map((sol) => (
                    <div
                      key={sol}
                      className="bg-panel border border-white/5 rounded-xl p-4 flex gap-3 border-l-2 border-l-gold/50"
                    >
                      <span className="text-gold mt-0.5">✓</span>
                      <span className="text-muted text-sm leading-relaxed">{sol}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Use cases */}
            {industry.useCases && (
              <>
                <h2 className="text-white font-display font-semibold text-lg mb-4">
                  What we build
                </h2>
                <div className="flex flex-wrap gap-2 mb-12">
                  {industry.useCases.map((t) => (
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
            {industry.tools && (
              <>
                <h2 className="text-white font-display font-semibold text-lg mb-4">
                  Tools & Technologies
                </h2>
                <div className="flex flex-wrap gap-2 mb-12">
                  {industry.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Related services */}
            {relatedServices.length > 0 && (
              <>
                <h2 className="text-white font-display font-semibold text-lg mb-4">
                  Services we typically use for this
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {relatedServices.map((s) => {
                    const SIcon = s.icon;
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group bg-panel border border-white/5 rounded-xl p-4 flex gap-3 hover:border-gold/40 transition"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                          <SIcon size={16} />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium group-hover:text-gold transition">
                            {s.title}
                          </div>
                          <div className="text-muted text-xs mt-0.5 leading-relaxed">
                            {s.tagline}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}

            {/* Case highlight */}
            {casePortfolio && (
              <>
                <h2 className="text-white font-display font-semibold text-lg mb-4">
                  Related work
                </h2>
                <div className="bg-panel border border-white/5 rounded-xl p-5 mb-12">
                  <div className="text-white text-sm font-medium mb-1">
                    {industry.caseHighlight.title}
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    {industry.caseHighlight.note}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {casePortfolio.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* FAQs */}
            {industry.faqs && (
              <>
                <h2 className="text-white font-display font-semibold text-lg mb-4">
                  Frequently asked questions
                </h2>
                <div className="space-y-3 mb-12">
                  {industry.faqs.map((f) => (
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
              <p className="text-white text-base leading-relaxed relative z-10">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3 mt-5 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-goldlight text-ink font-display font-bold flex items-center justify-center text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{testimonial.name}</div>
                  <div className="text-muted text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky snapshot card */}
          <div className="bg-gradient-to-br from-panel to-panel2 border border-gold/20 rounded-2xl p-6 h-fit md:sticky md:top-24">
            <h3 className="text-white font-display font-semibold mb-4">
              Why {SITE_INFO.shortName}
            </h3>
            {[
              ["Industry focus", industry.title],
              ["Response time", "Within 24 hours"],
              ["Support", "Post-launch included"],
            ].map(([k, v]) => (
              <div key={k} className="py-3 border-t border-white/10 first:border-t-0 first:pt-0">
                <div className="text-muted text-xs uppercase tracking-wide mb-1">{k}</div>
                <div className="text-white text-sm">{v}</div>
              </div>
            ))}
            <button
              onClick={() => setEnquiryOpen(true)}
              className="w-full mt-5 px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition"
            >
              Discuss Your Project →
            </button>
            <p className="text-muted text-xs text-center mt-3">
              We usually reply within 24 hours.
            </p>
          </div>
        </div>

        {/* Related industries */}
        {otherIndustries.length > 0 && (
          <div className="mt-16 pt-10 border-t border-white/5">
            <h2 className="text-white font-display font-semibold text-lg mb-6">
              Other Industries
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {otherIndustries.map((ind, i) => {
                const OIcon = ind.icon;
                return (
                  <Reveal key={ind.slug} delay={i * 90}>
                    <Link
                      href={`/industry/${ind.slug}`}
                      className="group block bg-panel border border-white/5 rounded-xl overflow-hidden hover:border-gold/40 hover:-translate-y-0.5 transition"
                    >
                      {ind.image && (
                        <div className="h-28 img-zoom-wrap overflow-hidden">
                          <img
                            src={ind.image}
                            alt={ind.title}
                            className="img-zoom w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition">
                          <OIcon size={20} className="text-gold" />
                        </div>
                        <div className="text-white text-sm font-medium mb-1">{ind.title}</div>
                        <div className="text-muted text-xs leading-relaxed">{ind.desc}</div>
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
            href={`/industry/${prevIndustry.slug}`}
            className="text-muted hover:text-gold text-sm truncate"
          >
            ‹ {prevIndustry.title}
          </Link>
          <Link
            href={`/industry/${nextIndustry.slug}`}
            className="text-muted hover:text-gold text-sm truncate text-right"
          >
            {nextIndustry.title} ›
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
            <h3 className="text-white font-display font-bold text-xl mb-2">
              Building something in {industry.title.toLowerCase()}?
            </h3>
            <p className="text-muted text-sm mb-6 max-w-md mx-auto">
              Tell us what you're building and we'll get back to you within 24 hours with next steps.
            </p>
            <button
              onClick={() => setEnquiryOpen(true)}
              className="px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition"
            >
              Discuss Your Project →
            </button>
          </div>
        </div>
      </section>

      {enquiryOpen && (
        <EnquiryModal service={{ title: industry.title, icon: industry.icon }} onClose={() => setEnquiryOpen(false)} />
      )}
    </>
  );
}
