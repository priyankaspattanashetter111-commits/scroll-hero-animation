"use client";

import { useRef } from "react";
import Headline from "./Headline";
import Stats from "./Stats";
import Car from "./Car";
import Road from "./Road";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export default function Hero() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const carRef = useRef(null);
  const roadRef = useRef(null);
  const roadDashesRef = useRef(null);
  const bgRef = useRef(null);

  useHeroAnimation({
    heroRef,
    statsRef,
    carRef,
    roadRef,
    roadDashesRef,
    bgRef,
  });

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#0f0f0e]"
    >
      {/* Background: Solid warm tone with soft vignette */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#161513_0%,#0f0f0e_80%)]" />
        {/* Subtle vignette border gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.35)_100%)] opacity-70" />
      </div>

      {/* Header: Plain wordmark and simple Scroll indicator */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-6 sm:pt-8 flex items-center justify-between text-xs tracking-wider">
        <span className="font-heading font-extrabold text-sm sm:text-base tracking-[0.2em] text-[#f2efe8]">
          ITZFIZZ
        </span>
        <div className="flex items-center gap-1.5 text-xs text-[#8a8780] uppercase tracking-widest select-none">
          <span>Scroll</span>
          <svg
            className="w-3.5 h-3.5 text-[#ff5a1f]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Center Group: Headline and Key Stats */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-8 sm:gap-12 my-auto py-2">
        <Headline />
        <Stats statsRef={statsRef} />
      </div>

      {/* Bottom Area: Sports Car and Road Line */}
      <div className="relative w-full flex flex-col justify-end">
        <Car carRef={carRef} />
        <Road roadRef={roadRef} roadDashesRef={roadDashesRef} />
      </div>
    </section>
  );
}
