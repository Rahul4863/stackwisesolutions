import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES } from "@/data/constants";
import Reveal from "./Reveal";

export default function Industries() {
  const featured = INDUSTRIES.slice(0, 6);

  return (
    <section id="industries" className="py-24 px-6 sm:px-10 lg:px-16 2xl:px-24 relative overflow-hidden">
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-gold/10 hidden lg:block float-slow" />

      <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-end mb-12 relative z-10">
        <Reveal>
          <div className="text-gold text-sm font-medium mb-2">// 05. industries</div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Industries We Serve</h2>
          <p className="text-muted mt-3 max-w-xl">
            From ordering platforms to patient portals, we build for the
            specific challenges each industry brings. Open an industry to see
            what we typically build and how we approach it.
          </p>
        </Reveal>

        <Reveal direction="left" delay={100} className="hidden lg:block">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 img-zoom-wrap">
            <Image
              src="https://picsum.photos/seed/stackwise-industries/640/400"
              alt="Industry-specific software solutions"
              fill
              sizes="360px"
              className="object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {featured.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <Reveal key={ind.slug} delay={(i % 3) * 90}>
              <Link
                href={`/industry/${ind.slug}`}
                className="group bg-panel border border-white/5 rounded-2xl p-6 hover:border-gold/40 hover:-translate-y-1 transition flex flex-col h-full"
              >
                <Icon size={26} className="text-gold mb-4" />
                <h4 className="text-[#1a1611] font-display font-bold text-lg group-hover:text-gold transition">
                  {ind.title}
                </h4>
                <p className="text-muted text-sm mt-2 flex-1">{ind.desc}</p>
                <span className="text-gold text-sm font-medium mt-4">
                  Explore →
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="text-center mt-10 relative z-10">
        <Link
          href="/industries"
          className="inline-block px-6 py-3 rounded-full border border-gold/30 text-gold text-sm font-semibold hover:bg-gold/10 transition"
        >
          View All Industries →
        </Link>
      </Reveal>
    </section>
  );
}
