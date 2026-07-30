"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SERVICES, INDUSTRIES, SITE_INFO } from "@/data/constants";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";


export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlog = pathname === "/blogs" || pathname.startsWith("/blog/");
  const isServicePage = pathname.startsWith("/services/");
  const isIndustryPage = pathname === "/industries" || pathname.startsWith("/industry/");
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef(null);

  useEffect(() => {
    if (!isHome) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [isHome]);

  // Close the services dropdown when clicking anywhere outside it
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesOpen(false);
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Toggling one dropdown always closes the other — only one open at a time
  const toggleServices = () => {
    setServicesOpen((o) => !o);
    setIndustriesOpen(false);
  };
  const toggleIndustries = () => {
    setIndustriesOpen((o) => !o);
    setServicesOpen(false);
  };
  const toggleMobileServices = () => {
    setMobileServicesOpen((o) => !o);
    setMobileIndustriesOpen(false);
  };
  const toggleMobileIndustries = () => {
    setMobileIndustriesOpen((o) => !o);
    setMobileServicesOpen(false);
  };
  const linkHref = (id) => (id === "hero" ? "/" : `/#${id}`);
  const isActive = (id) => isHome && activeSection === id;
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-panel/95 backdrop-blur border-b border-white/5">
      <div className="px-6 sm:px-10 lg:px-16 2xl:px-24 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
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

        <nav ref={navRef} className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map(({ id, label }) => {
            if (id === "services") {
              return (
                <div key={id} className="relative">
                  <button
                    onClick={toggleServices}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition ${
                      isActive(id) || isServicePage || servicesOpen
                        ? "bg-gold/10 text-gold"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    {label}
                    <span
                      className={`text-[10px] transition-transform ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[560px] bg-panel border border-white/10 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-1 z-50">
                      {SERVICES.map((s) => {
                        const Icon = s.icon;
                        return (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                          >
                            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                              <Icon size={16} />
                            </div>
                            <div className="overflow-hidden">
                              <div className="text-white text-sm font-medium truncate">
                                {s.title}
                              </div>
                              <div className="text-muted text-xs mt-0.5 truncate">
                                {s.tagline}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                      <Link
                        href="/#services"
                        onClick={() => setServicesOpen(false)}
                        className="col-span-2 mt-1 text-center text-gold text-sm font-medium py-2.5 rounded-xl border border-gold/20 hover:bg-gold/10 transition"
                      >
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            if (id === "industries") {
              return (
                <div key={id} className="relative">
                  <button
                    onClick={toggleIndustries}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition ${
                      isActive(id) || isIndustryPage || industriesOpen
                        ? "bg-gold/10 text-gold"
                        : "text-muted hover:text-white"
                    }`}
                  >
                    {label}
                    <span
                      className={`text-[10px] transition-transform ${
                        industriesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {industriesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[560px] bg-panel border border-white/10 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-1 z-50">
                      {INDUSTRIES.map((ind) => {
                        const Icon = ind.icon;
                        return (
                          <Link
                            key={ind.slug}
                            href={`/industry/${ind.slug}`}
                            onClick={() => setIndustriesOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition"
                          >
                            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                              <Icon size={16} />
                            </div>
                            <div className="overflow-hidden">
                              <div className="text-white text-sm font-medium truncate">
                                {ind.title}
                              </div>
                              <div className="text-muted text-xs mt-0.5 truncate">
                                {ind.tagline}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                      <Link
                        href="/industries"
                        onClick={() => setIndustriesOpen(false)}
                        className="col-span-2 mt-1 text-center text-gold text-sm font-medium py-2.5 rounded-xl border border-gold/20 hover:bg-gold/10 transition"
                      >
                        View All Industries →
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={id}
                href={linkHref(id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  isActive(id) ? "bg-gold/10 text-gold" : "text-muted hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/blogs"
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              isBlog ? "bg-gold/10 text-gold" : "text-muted hover:text-white"
            }`}
          >
            Blog
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="px-5 py-2.5 rounded-full bg-gold text-ink text-sm font-semibold hover:bg-goldlight transition"
          >
            Enquire Now
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="w-10 h-10 rounded-full bg-panel2 border border-white/10 flex items-center justify-center text-gold"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-panel px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {NAV_ITEMS.map(({ id, label }) => {
            if (id === "services") {
              return (
                <div key={id}>
                  <button
                    onClick={toggleMobileServices}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition ${
                      isActive(id) || isServicePage
                        ? "bg-gold/10 text-gold"
                        : "text-muted hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      className={`text-xs transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-3 mt-1 mb-1 flex flex-col gap-0.5 border-l border-white/5 ml-4">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="px-4 py-2 rounded-lg text-sm text-muted hover:text-white hover:bg-white/5 transition"
                        >
                          {s.title}
                        </Link>
                      ))}
                      <Link
                        href="/#services"
                        onClick={() => {
                          setOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="px-4 py-2 rounded-lg text-sm text-gold font-medium"
                      >
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            if (id === "industries") {
              return (
                <div key={id}>
                  <button
                    onClick={toggleMobileIndustries}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition ${
                      isActive(id) || isIndustryPage
                        ? "bg-gold/10 text-gold"
                        : "text-muted hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      className={`text-xs transition-transform ${
                        mobileIndustriesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {mobileIndustriesOpen && (
                    <div className="pl-3 mt-1 mb-1 flex flex-col gap-0.5 border-l border-white/5 ml-4">
                      {INDUSTRIES.map((ind) => (
                        <Link
                          key={ind.slug}
                          href={`/industry/${ind.slug}`}
                          onClick={() => {
                            setOpen(false);
                            setMobileIndustriesOpen(false);
                          }}
                          className="px-4 py-2 rounded-lg text-sm text-muted hover:text-white hover:bg-white/5 transition"
                        >
                          {ind.title}
                        </Link>
                      ))}
                      <Link
                        href="/industries"
                        onClick={() => {
                          setOpen(false);
                          setMobileIndustriesOpen(false);
                        }}
                        className="px-4 py-2 rounded-lg text-sm text-gold font-medium"
                      >
                        View All Industries →
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={id}
                href={linkHref(id)}
                onClick={() => setOpen(false)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm transition ${
                  isActive(id)
                    ? "bg-gold/10 text-gold"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/blogs"
            onClick={() => setOpen(false)}
            className={`text-left px-4 py-2.5 rounded-lg text-sm transition ${
              isBlog ? "bg-gold/10 text-gold" : "text-muted hover:text-white hover:bg-white/5"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 rounded-full bg-gold text-ink text-sm font-semibold text-center"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}