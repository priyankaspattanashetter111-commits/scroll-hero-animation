"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(sectionRef.current.querySelectorAll(".feature-card"), { opacity: 1, y: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          sectionRef.current.querySelectorAll(".feature-card"),
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  const featureItems = [
    {
      title: "Choreographed Scrub",
      description:
        "Zero time-based loops. Every pixel of car translation, wheel rotation, and typography ignition is mapped directly to scroll velocity.",
      badge: "Motion",
    },
    {
      title: "Compositor Layers",
      description:
        "Interactive properties animate exclusively on GPU compositor layers via transform and opacity, maintaining 60 FPS without layout thrashing.",
      badge: "Performance",
    },
    {
      title: "Responsive Matrix",
      description:
        "Dynamic matchMedia listeners compute viewport distances on the fly and provide full static fallback for users with reduced motion preferences.",
      badge: "Accessibility",
    },
  ];

  return (
    <section
      ref={sectionRef}
      aria-label="Studio Engineering Principles"
      className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-28 md:py-36"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#ff5a1f] font-semibold mb-3">
          Studio Engineering
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f2efe8]">
          Crafted for High-Impact Digital Experiences
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#a3a099] max-w-2xl leading-relaxed">
          Minimalist architecture combining strict typography, restrained accents,
          and butter-smooth interactive choreography.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {featureItems.map((item, index) => (
          <div
            key={index}
            className="feature-card relative p-6 sm:p-8 bg-[#141311] border border-[#262523] hover:border-[#3d3a35] transition-colors flex flex-col justify-between will-change-transform"
          >
            <div>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#ff5a1f] mb-4">
                {item.badge}
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#f2efe8] mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#b0ada6] leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#1f1e1c] flex items-center justify-between text-xs text-[#8a8780]">
              <span>0{index + 1}</span>
              <span>Production Spec</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
