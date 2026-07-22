"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/data/constants";
import EnquiryModal from "./EnquiryModal";
import Reveal from "./Reveal";

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
              pixel-perfect, production-ready frontends. Open a service for
              full details, or tap Enquire to tell us what you need.
            </p>
          </Reveal>

          <Reveal direction="left" delay={100} className="hidden lg:block">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 img-zoom-wrap">
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
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={i} delay={(i % 3) * 90}>
                <div className="bg-panel border border-white/5 rounded-2xl p-6 hover:border-gold/40 hover:-translate-y-1 transition flex flex-col h-full">
                  <Icon size={28} className="text-gold mb-4" />
                  <h4 className="text-white font-display font-semibold">{s.title}</h4>
                  <p className="text-muted text-sm mt-2">{s.desc}</p>

                  <ul className="mt-4 space-y-1.5 flex-1">
                    {s.subServices.map((sub) => (
                      <li key={sub} className="text-muted/90 text-xs flex gap-2 leading-relaxed">
                        <span className="text-gold mt-0.5">•</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 mt-5">
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-gold text-sm font-medium hover:underline"
                    >
                      View Details →
                    </Link>
                    <button
                      onClick={() => setEnquiryService(s)}
                      className="ml-auto px-4 py-2 rounded-full bg-gold text-ink text-sm font-semibold hover:bg-goldlight transition"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {enquiryService && (
        <EnquiryModal service={enquiryService} onClose={() => setEnquiryService(null)} />
      )}
    </>
  );
}
