"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useHeroAnimation({
  heroRef,
  statsRef,
  carRef,
  roadDashesRef,
  bgRef,
}) {
  useGSAP(
    () => {
      if (!heroRef.current) return;

      const mm = gsap.matchMedia();

      // Fallback for users requesting reduced motion
      mm.add("(prefers-reduced-motion: reduce)", () => {
        const letters = heroRef.current.querySelectorAll(".headline-letter");
        const litLetters = heroRef.current.querySelectorAll(".headline-letter-lit");
        const statCards = heroRef.current.querySelectorAll(".stat-card");
        const statNumbers = heroRef.current.querySelectorAll(".stat-number");

        gsap.set(letters, { opacity: 1, y: 0, filter: "none", color: "#e2e8f0" });
        gsap.set(litLetters, { opacity: 0.85 });
        gsap.set(statCards, { opacity: 1, y: 0 });
        if (carRef.current) gsap.set(carRef.current, { opacity: 1, x: 0 });

        const targets = ["98%", "3.5x", "120+", "40%"];
        statNumbers.forEach((el, idx) => {
          if (targets[idx]) el.textContent = targets[idx];
        });
      });

      // Desktop layout animation
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        initHeroAnimations({ isMobile: false });
      });

      // Mobile layout animation
      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        initHeroAnimations({ isMobile: true });
      });

      function initHeroAnimations({ isMobile }) {
        const letters = heroRef.current.querySelectorAll(".headline-letter");
        const litLetters = heroRef.current.querySelectorAll(".headline-letter-lit");
        const statCards = heroRef.current.querySelectorAll(".stat-card");
        const statNumbers = heroRef.current.querySelectorAll(".stat-number");

        // Target values for number counter intro
        const statsTargets = [
          { target: 98, decimals: 0, suffix: "%" },
          { target: 3.5, decimals: 1, suffix: "x" },
          { target: 120, decimals: 0, suffix: "+" },
          { target: 40, decimals: 0, suffix: "%" },
        ];

        // 1. Initial Page Load Animation Timeline (~2.5s total)
        const loadTimeline = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        // Letters stagger in with blur and translateY
        loadTimeline.fromTo(
          letters,
          { opacity: 0, y: 40, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.05, duration: 0.7 }
        );

        // Stats cards fade in
        loadTimeline.fromTo(
          statCards,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.6 },
          "-=0.35"
        );

        // Counter tweens attached alongside stat cards reveal
        statsTargets.forEach((item, index) => {
          const counter = { val: 0 };
          const numEl = statNumbers[index];
          loadTimeline.to(
            counter,
            {
              val: item.target,
              duration: 1.0,
              ease: "power2.out",
              onUpdate: () => {
                if (!numEl) return;
                numEl.textContent =
                  item.decimals === 1
                    ? counter.val.toFixed(1) + item.suffix
                    : Math.round(counter.val) + item.suffix;
              },
            },
            "<"
          );
        });

        // Sports car slides in last from left
        if (carRef.current) {
          loadTimeline.fromTo(
            carRef.current,
            { x: -160, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.4"
          );
        }

        // 2. Scroll-Driven Animation Timeline with ScrollTrigger
        const carEl = carRef.current;
        const carWidth = carEl ? carEl.offsetWidth : (isMobile ? 240 : 380);
        // Calculate travel distance so the car reaches near the right edge
        const travelDistance = Math.max(160, window.innerWidth - carWidth - (isMobile ? 24 : 64));

        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Move car across the screen
        if (carEl) {
          scrollTimeline.to(
            carEl,
            {
              x: travelDistance,
              ease: "none",
              duration: 1,
            },
            0
          );

          // Rotate wheels around their center SVG coordinates
          scrollTimeline.to(
            ".car-wheel-rear",
            {
              rotation: 1080,
              svgOrigin: "105 90",
              ease: "none",
              duration: 1,
            },
            0
          );

          scrollTimeline.to(
            ".car-wheel-front",
            {
              rotation: 1080,
              svgOrigin: "305 90",
              ease: "none",
              duration: 1,
            },
            0
          );
        }

        // Sequential letter lighting as the car drives across
        if (litLetters.length > 0) {
          const letterStep = 0.75 / litLetters.length;
          litLetters.forEach((litSpan, index) => {
            const letterStart = 0.08 + index * letterStep;
            scrollTimeline.to(
              litSpan,
              {
                opacity: 1,
                duration: 0.06,
                ease: "power1.in",
              },
              letterStart
            );
          });
        }

        // Parallax: stats move upward at a slower rate
        if (statsRef.current) {
          scrollTimeline.to(
            statsRef.current,
            {
              y: isMobile ? -36 : -68,
              ease: "none",
              duration: 1,
            },
            0
          );
        }

        // Road speed dashes shift leftward
        if (roadDashesRef.current) {
          scrollTimeline.to(
            roadDashesRef.current,
            {
              x: isMobile ? -160 : -320,
              ease: "none",
              duration: 1,
            },
            0
          );
        }

        // Background subtle parallax shift for depth
        if (bgRef.current) {
          scrollTimeline.to(
            bgRef.current,
            {
              x: isMobile ? -30 : -60,
              y: -24,
              ease: "none",
              duration: 1,
            },
            0
          );
        }
      }
    },
    { scope: heroRef }
  );
}
