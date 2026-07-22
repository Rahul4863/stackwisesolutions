"use client";

import { useState, useEffect, useRef } from "react";
import { SKILLS } from "@/data/constants";
import Reveal from "./Reveal";

function SkillBar({ name, val }) {
  const ref = useRef();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-white">{name}</span>
        <span className="text-gold font-medium">{val}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-gold to-goldlight ${animated ? "skill-fill-animated" : "w-0"}`}
          style={animated ? { width: `${val}%` } : {}}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-10 lg:px-16 2xl:px-24">
      <Reveal className="mb-12">
        <div className="text-gold text-sm font-medium mb-2">// 02. expertise</div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">Our Expertise</h2>
        <p className="text-muted mt-3 max-w-xl">
          A toolkit refined across PHP, Laravel, MERN, and React Native — from
          API design to production deployment.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {SKILLS.map((s, i) => (
          <Reveal key={i} delay={(i % 2) * 100}>
            <SkillBar {...s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
