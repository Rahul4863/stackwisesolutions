"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NAV_ITEMS,
  SERVICES,
  INDUSTRIES,
  SITE_INFO,
} from "@/data/constants";
import Image from "next/image";
import {
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlog = pathname === "/blogs" || pathname.startsWith("/blog/");
  const isServicePage = pathname.startsWith("/services/");
  const isIndustryPage =
    pathname === "/industries" || pathname.startsWith("/industry/");
  const isTechPage = pathname === "/technologies";

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

  // Close dropdowns when clicking anywhere outside
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
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/15 shadow-xs">
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-20 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <Image
            src="/images/updated_stack_lite.png"
            alt={SITE_INFO.name}
            width={180}
            height={56}
            priority
            className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Bar */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-1">
          
          {/* Home */}
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive("hero")
                ? "bg-amber-800 text-white shadow-md shadow-amber-800/20"
                : "text-[#4a3f33] hover:text-amber-950 hover:bg-amber-100/60"
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/#about"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive("about")
                ? "bg-amber-800 text-white shadow-md shadow-amber-800/20"
                : "text-[#4a3f33] hover:text-amber-950 hover:bg-amber-100/60"
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleServices}
              className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                isServicePage || servicesOpen
                  ? "bg-amber-800 text-white shadow-md shadow-amber-800/20"
                  : "text-[#4a3f33] hover:text-amber-950 hover:bg-amber-100/60"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[90vw] max-w-[560px] bg-white/98 backdrop-blur-xl border border-amber-900/15 rounded-3xl shadow-2xl p-4 grid grid-cols-2 gap-1.5 z-50">
                {SERVICES.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-amber-500/10 transition group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300/50 flex items-center justify-center text-amber-800 shrink-0 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                        <Icon size={16} />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[#1a1611] text-sm font-bold truncate group-hover:text-amber-950">
                          {s.title}
                        </div>
                        <div className="text-[#6e6151] text-xs mt-0.5 truncate">
                          {s.tagline}
                        </div>
                      </div>
                    </Link>
                  );
                })}
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="col-span-2 mt-1 text-center text-amber-900 text-xs font-bold py-2.5 rounded-2xl bg-amber-100/80 border border-amber-300/60 hover:bg-amber-800 hover:text-white transition"
                >
                  Explore All Services →
                </Link>
              </div>
            )}
          </div>

          {/* TECHNOLOGIES DIRECT PAGE LINK (NO MEGA MENU) */}
          <Link
            href="/technologies"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
              isTechPage
                ? "bg-amber-800 text-white shadow-md shadow-amber-800/20"
                : "text-[#4a3f33] hover:text-amber-950 hover:bg-amber-100/60"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Technologies</span>
          </Link>

          {/* Industries Dropdown */}
          <div className="relative">
            <button
              onClick={toggleIndustries}
              className={`flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                isIndustryPage || industriesOpen
                  ? "bg-amber-800 text-white shadow-md shadow-amber-800/20"
                  : "text-[#4a3f33] hover:text-amber-950 hover:bg-amber-100/60"
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  industriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {industriesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[90vw] max-w-[560px] bg-white/98 backdrop-blur-xl border border-amber-900/15 rounded-3xl shadow-2xl p-4 grid grid-cols-2 gap-1.5 z-50">
                {INDUSTRIES.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <Link
                      key={ind.slug}
                      href={`/industry/${ind.slug}`}
                      onClick={() => setIndustriesOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-amber-500/10 transition group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300/50 flex items-center justify-center text-amber-800 shrink-0 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                        <Icon size={16} />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[#1a1611] text-sm font-bold truncate group-hover:text-amber-950">
                          {ind.title}
                        </div>
                        <div className="text-[#6e6151] text-xs mt-0.5 truncate">
                          {ind.tagline}
                        </div>
                      </div>
                    </Link>
                  );
                })}
                <Link
                  href="/industries"
                  onClick={() => setIndustriesOpen(false)}
                  className="col-span-2 mt-1 text-center text-amber-900 text-xs font-bold py-2.5 rounded-2xl bg-amber-100/80 border border-amber-300/60 hover:bg-amber-800 hover:text-white transition"
                >
                  Explore All Industries →
                </Link>
              </div>
            )}
          </div>

          {/* Portfolio */}
          <Link
            href="/#portfolio"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive("portfolio")
                ? "bg-amber-800 text-white shadow-md shadow-amber-800/20"
                : "text-[#4a3f33] hover:text-amber-950 hover:bg-amber-100/60"
            }`}
          >
            Portfolio
          </Link>

          {/* Blog */}
          <Link
            href="/blogs"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isBlog
                ? "bg-amber-800 text-white shadow-md shadow-amber-800/20"
                : "text-[#4a3f33] hover:text-amber-950 hover:bg-amber-100/60"
            }`}
          >
            Blog
          </Link>

          {/* Contact */}
          <Link
            href="/#contact"
            className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive("contact")
                ? "bg-amber-800 text-white shadow-md shadow-amber-800/20"
                : "text-[#4a3f33] hover:text-amber-950 hover:bg-amber-100/60"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/#contact"
            className="px-6 py-2.5 rounded-full bg-amber-800 text-white text-sm font-bold shadow-md shadow-amber-800/20 hover:bg-amber-900 btn-pop transition"
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-full bg-amber-100/90 border border-amber-300/60 flex items-center justify-center text-amber-950 font-bold hover:bg-amber-200 transition"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="lg:hidden border-t border-amber-900/15 bg-white/98 backdrop-blur-xl px-6 py-4 flex flex-col gap-1 max-h-[85vh] overflow-y-auto shadow-2xl">
          
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-bold text-[#1a1611] hover:bg-amber-100/60 transition"
          >
            Home
          </Link>

          <Link
            href="/#about"
            onClick={() => setOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-bold text-[#1a1611] hover:bg-amber-100/60 transition"
          >
            About
          </Link>

          {/* Services Mobile */}
          <div>
            <button
              onClick={toggleMobileServices}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#1a1611] hover:bg-amber-100/60 transition"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 mt-1 mb-1 flex flex-col gap-1 border-l-2 border-amber-500/30 ml-3">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-xs font-semibold text-[#524639] hover:text-amber-950 hover:bg-amber-100/40 transition"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Technologies Direct Link Mobile (NO MEGA MENU) */}
          <Link
            href="/technologies"
            onClick={() => setOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-bold text-[#1a1611] hover:bg-amber-100/60 transition flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Technologies</span>
          </Link>

          {/* Industries Mobile */}
          <div>
            <button
              onClick={toggleMobileIndustries}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#1a1611] hover:bg-amber-100/60 transition"
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileIndustriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileIndustriesOpen && (
              <div className="pl-4 mt-1 mb-1 flex flex-col gap-1 border-l-2 border-amber-500/30 ml-3">
                {INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industry/${ind.slug}`}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-xs font-semibold text-[#524639] hover:text-amber-950 hover:bg-amber-100/40 transition"
                  >
                    {ind.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#portfolio"
            onClick={() => setOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-bold text-[#1a1611] hover:bg-amber-100/60 transition"
          >
            Portfolio
          </Link>

          <Link
            href="/blogs"
            onClick={() => setOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-bold text-[#1a1611] hover:bg-amber-100/60 transition"
          >
            Blog
          </Link>

          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-bold text-[#1a1611] hover:bg-amber-100/60 transition"
          >
            Contact
          </Link>

          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-3 px-6 py-3 rounded-full bg-amber-800 text-white font-bold text-center text-sm shadow-md"
          >
            Get Consultation
          </Link>

        </div>
      )}
    </header>
  );
}