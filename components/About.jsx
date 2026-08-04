import Link from "next/link";
import { SITE_INFO } from "@/data/constants";
import Reveal from "./Reveal";

const VALUES = [
  {
    num: "01",
    title: "Built around your goals",
    desc: "We start every project by understanding what success looks like for your business — not just the feature list.",
  },
  {
    num: "02",
    title: "Production-ready, not just demo-ready",
    desc: "Secure authentication, clean data models, and code that's meant to run in production from day one.",
  },
  {
    num: "03",
    title: "Clear communication, always",
    desc: "You'll always know what's being built, what's next, and when to expect it — no black-box development.",
  },
];

const FACTS = [
  ["📍", "Location", "Gurugram, India"],
  ["🗓", "Founded", SITE_INFO.founded],
  ["⚡", "Response Time", "Within 24 hours"],
  ["✅", "New Projects", "Currently Available"],
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-10 lg:px-16 2xl:px-24 relative overflow-hidden"
    >
      {/* Decorative background rings */}
      <div className="absolute top-10 -right-24 w-72 h-72 rounded-full border border-gold/10 hidden lg:block float-slow" />
      <div className="absolute top-28 -right-8 w-56 h-56 rounded-full border border-gold/10 hidden lg:block float-slow-delay" />

      <Reveal className="mb-12 relative z-10">
        <div className="text-gold text-sm font-medium mb-2">// 01. about</div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          About {SITE_INFO.name}
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start relative z-10">
        {/* Identity card */}
        <Reveal direction="left" className="relative lg:sticky lg:top-24">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 mb-4 img-zoom-wrap">
            {/* Plain <img> (not next/image) since this is an external stock
                URL — avoids needing images.unsplash.com added to
                next.config.js images.remotePatterns. */}
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=640&h=480&fit=crop&auto=format&q=80"
              alt={`${SITE_INFO.name} team workspace`}
              className="absolute inset-0 w-full h-full object-cover img-zoom"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
          </div>

          <div className="bg-gradient-to-br from-panel to-panel2 border border-gold/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-display font-extrabold text-2xl">
                {SITE_INFO.initials}
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 whitespace-nowrap">
                Est. {SITE_INFO.founded}
              </span>
            </div>

            <div className="text-white font-display font-semibold text-lg mb-1">
              {SITE_INFO.name}
            </div>
            <div className="text-muted text-sm mb-6">{SITE_INFO.tagline}</div>

            <div className="space-y-3">
              {FACTS.map(([icon, label, val]) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    {icon}
                  </span>
                  <div>
                    <div className="text-muted text-xs">{label}</div>
                    <div className="text-white font-medium">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-gold/10 -z-10" />
        </Reveal>

        {/* Content */}
        <Reveal direction="right" delay={100}>
          <p className="text-xl sm:text-2xl font-display font-semibold text-white leading-snug mb-6">
            We bring web development, mobile apps, backend architecture,
            design, and digital marketing together under{" "}
            <span className="text-gold">one roof</span>.
          </p>

          <p className="text-muted leading-relaxed">
            {SITE_INFO.name} was started with a simple belief: businesses
            shouldn't have to juggle five different freelancers to get a
            website built, an app shipped, a brand designed, and traffic
            brought in.
          </p>

          <p className="text-muted leading-relaxed mt-4">
            Our team works across PHP, Laravel, Node.js, Express.js, and
            React.js to build RESTful APIs, secure JWT-based authentication,
            and relational and NoSQL databases (MySQL, MongoDB) that hold up
            under real-world traffic — not just in a demo.
          </p>

          {/* Values as numbered rows */}
          <div className="mt-10 divide-y divide-white/5 border-t border-b border-white/5">
            {VALUES.map((v) => (
              <div key={v.num} className="flex gap-5 py-5">
                <span className="text-gold/50 font-display font-bold text-2xl shrink-0 w-10">
                  {v.num}
                </span>
                <div>
                  <div className="text-white font-semibold mb-1">{v.title}</div>
                  <div className="text-muted text-sm leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted leading-relaxed mt-8">
            We measure success the same way you do — by whether the product
            works, holds up under real users, and helps the business it was
            built for grow. That's the standard we hold every project to,
            from a single landing page to a full multi-role platform.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gold text-ink font-semibold hover:bg-goldlight btn-pop transition"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/#portfolio"
              className="px-6 py-3 rounded-full border border-white/15 text-white font-semibold hover:border-gold hover:text-gold transition"
            >
              See Our Work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
