"use client";

import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { SITE_INFO, socials, SERVICES, INDUSTRIES } from "@/data/constants";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const featuredServices = SERVICES.slice(0, 5);
  const featuredIndustries = INDUSTRIES.slice(0, 5);

  return (
    <footer className="relative bg-panel border-t border-white/5 overflow-hidden">
      {/* thin gold accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* subtle dot-grid backdrop, consistent with the CTA panels elsewhere on the site */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#c8a96e 1px, transparent 1px), linear-gradient(90deg, #c8a96e 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 px-6 sm:px-10 lg:px-16 2xl:px-24 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <Image
      src="/images/stack_dark.png"
      alt={SITE_INFO.name}
      width={180}
      height={56}
      priority
      className="h-14 sm:h-16 w-auto object-contain block [html.light_&]:hidden mix-blend-lighten"
  />
  <Image
    src="/images/stack.png"
    alt={SITE_INFO.name}
    width={180}
    height={56}
    priority
    className="h-14 sm:h-16 w-auto object-contain hidden [html.light_&]:block"
  />
            </Link>
            <p className="text-muted text-sm leading-relaxed mt-4 max-w-xs">
              {SITE_INFO.tagline}
            </p>

            <div className="flex gap-3 mt-6">
              {socials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-gold hover:border-gold transition"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-semibold text-sm mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-muted text-sm hover:text-gold transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-semibold text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {featuredServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-muted text-sm hover:text-gold transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#services"
                  className="text-gold text-sm font-medium hover:text-goldlight transition"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-semibold text-sm mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {featuredIndustries.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/industry/${ind.slug}`}
                    className="text-muted text-sm hover:text-gold transition"
                  >
                    {ind.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-gold text-sm font-medium hover:text-goldlight transition"
                >
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-semibold text-sm mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="flex items-start gap-1 text-muted text-sm hover:text-gold transition group min-w-0"
                >
                  <FaEnvelope size={13} className="mt-0.5 text-gold shrink-0" />
                  <span className="break-words min-w-0 whitespace-nowrap sm:whitespace-normal">
                    {SITE_INFO.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-2.5 text-muted text-sm hover:text-gold transition"
                >
                  <FaPhoneAlt size={12} className="mt-0.5 text-gold shrink-0" />
                  <span>{SITE_INFO.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted text-sm">
                <FaMapMarkerAlt size={13} className="mt-0.5 text-gold shrink-0" />
                <span>{SITE_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-14 pt-6 border-t border-white/5">
          <p className="text-muted text-xs text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <strong className="text-white">{SITE_INFO.name}</strong> · All
            Rights Reserved
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-gold hover:border-gold transition shrink-0"
          >
            <FaArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}