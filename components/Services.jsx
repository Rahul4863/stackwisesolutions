"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/constants";
import EnquiryModal from "./EnquiryModal";
import Reveal from "./Reveal";

export default function Services() {
  const [enquiryService, setEnquiryService] = useState(null);

  return (
    <>
      <section id="services" className="relative py-24 px-6 sm:px-10 lg:px-16 2xl:px-24 overflow-hidden">
        {/* Subtle Ambient Background Glows */}
        <div className="pointer-events-none absolute top-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 -left-20 w-80 h-80 bg-teal-900/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <Reveal className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>04. Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#1a1611] tracking-tight leading-tight">
              Our Core <span className="text-gold shimmer-text">Services & Solutions</span>
            </h2>
            <p className="text-muted text-base sm:text-lg mt-4 leading-relaxed">
              End-to-end product engineering, design, and growth solutions tailored to scale your business.
            </p>
          </Reveal>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 90}>
                  <div className="group bg-panel border border-amber-900/15 rounded-3xl overflow-hidden flex flex-col h-full shadow-xl shadow-amber-950/5 hover:border-gold/50 transition-all duration-300 tilt-card">
                    {/* Service Image Banner */}
                    <div className="relative h-56 w-full overflow-hidden img-zoom-wrap">
                      <img
                        src={s.image}
                        alt={`${s.title} — ${s.tagline}`}
                        className="w-full h-full object-cover img-zoom transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-gold text-ink flex items-center justify-center shadow-lg shadow-gold/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                      <h3 className="text-xl font-display font-bold text-[#1a1611] group-hover:text-gold transition">
                        {s.title}
                      </h3>
                      <p className="text-xs font-semibold text-gold mt-1 mb-3">
                        {s.tagline}
                      </p>
                      <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                        {s.desc}
                      </p>

                      {/* Card Action Buttons */}
                      <div className="flex items-center justify-between gap-3 pt-4 border-t border-amber-900/10 mt-auto">
                        <Link
                          href={`/services/${s.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a1611] hover:text-gold transition group/link"
                        >
                          <span>Explore Details</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>

                        <button
                          onClick={() => setEnquiryService(s)}
                          className="px-4 py-2 rounded-full bg-gold text-ink text-xs font-bold hover:bg-goldlight transition btn-pop"
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Integration */}
      {enquiryService && (
        <EnquiryModal service={enquiryService} onClose={() => setEnquiryService(null)} />
      )}
    </>
  );
}


