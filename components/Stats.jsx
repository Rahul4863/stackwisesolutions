"use client";
import { useState, useEffect, useRef } from "react";
import { STATS } from "@/data/constants";
import Reveal from "./Reveal";
function useCountUp(target, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / 60) || 1;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target]);
  return count;
}
function StatItem({ icon: Icon, num, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(num, visible);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="w-11 h-11 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold">
        <Icon size={20} />
      </div>
      <div className="text-3xl font-display font-bold text-gold mt-2">
        {count}+
      </div>
      <div className="text-muted text-sm mt-1">{label}</div>
    </div>
  );
}
export default function Stats() {
  return (
    <section
      id="stats"
      className="py-14 px-6 sm:px-10 lg:px-16 2xl:px-24 bg-panel/40 border-y border-white/5"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {STATS.map((item, index) => (
          <Reveal key={index} delay={index * 0.08} direction="scale">
            <StatItem {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}