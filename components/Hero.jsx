"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SITE_INFO } from "@/data/constants";

const heroImages = [
  "/images/smart.png",
  "/images/web_development.png",
  "/images/app_development.png",
];

function TypedText({ words }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx, words]);
  return (
    <span className="text-gold font-medium">
      {displayed}
      <span className="cursor-blink">|</span>
    </span>
  );
}

function HeroSlide() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] text-center max-w-2xl mx-auto px-4 sm:px-6">
      <div className="text-gold/80 text-xs sm:text-sm font-medium mb-3 sm:mb-4 tracking-wide">
        // Design. Build. Launch.
      </div>
       <h1 className="whitespace-nowrap text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight">
        {SITE_INFO.name.split(" ")[0]}{" "}
        <span className="text-gold">{SITE_INFO.name.split(" ").slice(1).join(" ")}</span>
      </h1>
      <div className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-muted">
        We build{" "}
        <TypedText
          words={[
            "Web Applications",
            "Mobile Apps",
            "Custom APIs & Backends",
            "Brand & Digital Marketing",
            "full Stack Web Development",
          ]}
        />
      </div>
<p className="mt-3 sm:mt-4 text-white/80 max-w-lg mx-auto text-sm sm:text-base px-2" style={{color:"white"}}>
  {SITE_INFO.tagline}
</p>
      <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center">
        <Link
          href="/#portfolio"
          className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight btn-pop transition text-sm sm:text-base"
        >
          View Portfolio
        </Link>
        <Link
          href="/#contact"
          className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight btn-pop transition text-sm sm:text-base"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}

function ImageSlide({ src }) {
  return (
    <div className="relative w-full min-h-[100svh]">
      <Image
        src={src}
        alt="Stackwise Solutions work"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-ink/40" />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-panel to-ink pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#c8a96e 1px, transparent 1px), linear-gradient(90deg, #c8a96e 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Mobile: static hero, no swiper/carousel at all */}
      <div className="block sm:hidden">
        <HeroSlide />
      </div>

      {/* sm and up: full swiper carousel */}
      <div className="hidden sm:block">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: false }}
          // navigation
          loop
          speed={800}
          className="hero-swiper w-full"
        >
          <SwiperSlide>
            <HeroSlide />
          </SwiperSlide>
          {heroImages.map((src) => (
            <SwiperSlide key={src}>
              <ImageSlide src={src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        .hero-swiper .swiper-pagination-bullet {
          background: #c8a96e;
          opacity: 0.4;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: #c8a96e;
        }
        .hero-swiper .swiper-pagination {
          bottom: 16px;
        }
        @media (min-width: 640px) {
          .hero-swiper .swiper-pagination {
            bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
}