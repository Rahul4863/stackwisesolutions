"use client";

import { SKILL_CATEGORIES } from "@/data/constants";
import Reveal from "./Reveal";

function SkillCard({ name, icon: Icon }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center transition-all duration-300 hover:border-gold/50 hover:bg-white/10 hover:-translate-y-1">
      <Icon className="text-4xl text-gold transition-transform duration-300 group-hover:scale-110" />
      <span className="text-sm text-white">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-10 lg:px-16 2xl:px-24">
      <Reveal className="mb-16">
        <div className="text-gold text-sm font-medium mb-2">// 02. expertise</div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">Our Expertise</h2>
        <p className="text-muted mt-3 max-w-xl">
          A toolkit refined across PHP, Laravel, MERN, and React Native — from
          API design to production deployment.
        </p>
      </Reveal>

      <div className="space-y-14">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <Reveal key={ci} delay={ci * 100}>
            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">
              {cat.title}
              <span className="h-px flex-1 bg-white/10" />
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {cat.items.map((s, i) => (
                <Reveal key={i} delay={i * 80}>
                  <SkillCard {...s} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}