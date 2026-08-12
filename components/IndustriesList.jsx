import Link from "next/link";
import { INDUSTRIES } from "@/data/constants";

export default function IndustriesList() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 sm:py-20">
      <div className="mb-12">
        <div className="text-gold text-sm font-medium mb-2">// industries</div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold">
          Industries We Serve
        </h1>
        <p className="text-muted mt-3 max-w-2xl">
          We build web, mobile, and API-driven products for businesses across
          these industries — combining the right tech stack with an
          understanding of what actually moves the needle for each one. Open
          an industry to see the challenges we solve and how we solve them.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDUSTRIES.map((ind) => {
          const Icon = ind.icon;
          return (
            <Link
              key={ind.slug}
              href={`/industry/${ind.slug}`}
              className="group bg-panel border border-white/5 rounded-2xl p-6 hover:border-gold/40 hover:-translate-y-0.5 transition flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition">
                <Icon size={22} className="text-gold" />
              </div>
              <h2 className="text-[#1a1611] font-display font-bold text-lg">
                {ind.title}
              </h2>
              <p className="text-gold text-xs font-medium mt-1">{ind.tagline}</p>
              <p className="text-muted text-sm mt-3 flex-1 leading-relaxed">
                {ind.desc}
              </p>
              <span className="text-gold text-sm font-medium mt-5 inline-flex items-center gap-1">
                Explore industry
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          );
        })}
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
            Don't see your industry listed?
          </h3>
          <p className="text-muted text-sm mb-6 max-w-md mx-auto">
            We work with businesses outside these categories too — tell us
            what you're building and we'll show you how we'd approach it.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight transition"
          >
            Talk to Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
