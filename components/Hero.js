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
      className="relative w-full h-screen h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#05060f]"
    >
      {/* Background with deep blue/purple gradient and parallax grid */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        {/* Radial ambient lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#1c1340_0%,#0c0f28_45%,#05060f_90%)]" />

        {/* Ambient cyan glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px]" />

        {/* Subtle cyber background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      {/* Top Bar Navigation / Indicator */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-6 sm:pt-8 flex items-center justify-between text-xs tracking-widest text-slate-400 uppercase">
        <div className="flex items-center gap-2 font-bold text-slate-200">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
          <span>ITZFIZZ</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 font-mono text-[11px] text-slate-400">
          <span>SCROLL TO ACCELERATE</span>
          <span className="text-cyan-400">300% SCRUB</span>
        </div>
      </header>

      {/* Center Group: Headline and Key Stats */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-6 sm:gap-10 my-auto py-2">
        <Headline />
        <Stats statsRef={statsRef} />
      </div>

      {/* Bottom Area: Sports Car and Glowing Road */}
      <div className="relative w-full flex flex-col justify-end">
        <Car carRef={carRef} />
        <Road roadRef={roadRef} roadDashesRef={roadDashesRef} />
      </div>
    </section>
  );
}
