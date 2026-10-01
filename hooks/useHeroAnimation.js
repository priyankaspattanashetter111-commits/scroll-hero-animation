"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Key animation tuning numbers
const INTRO_LETTER_STAGGER = 0.05;
const INTRO_STATS_STAGGER = 0.15;
const PIN_LENGTH = "+=300%";
const SCRUB_VALUE = 1;
const WHEEL_ROTATION = 1080;
const CAR_MARGIN_DESKTOP = 64;
const CAR_MARGIN_MOBILE = 24;
const STATS_PARALLAX_DESKTOP = -68;
const STATS_PARALLAX_MOBILE = -36;
const ROAD_SHIFT_DESKTOP = -320;
const ROAD_SHIFT_MOBILE = -160;
const BG_SHIFT_X_DESKTOP = -60;
const BG_SHIFT_X_MOBILE = -30;
const BG_SHIFT_Y = -24;

export function useHeroAnimation({
  heroRef,
  statsRef,
  carRef,
  roadDashesRef,
  bgRef,
  progressBarRef,
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
        const statIndicators = heroRef.current.querySelectorAll(".stat-indicator");
        const statNumbers = heroRef.current.querySelectorAll(".stat-number");

        gsap.set(letters, { opacity: 1, y: 0, filter: "none" });
        gsap.set(litLetters, { opacity: 1 });
        gsap.set(statCards, { opacity: 1, y: 0 });
        gsap.set(statIndicators, { opacity: 1 });
        if (carRef.current) gsap.set(carRef.current, { opacity: 1, x: 0 });
        if (progressBarRef?.current) gsap.set(progressBarRef.current, { scaleX: 1 });

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
        const statIndicators = heroRef.current.querySelectorAll(".stat-indicator");
        const statNumbers = heroRef.current.querySelectorAll(".stat-number");

        // Target values for number counter intro
        const statsTargets = [
          { target: 98, decimals: 0, suffix: "%" },
          { target: 3.5, decimals: 1, suffix: "x" },
          { target: 120, decimals: 0, suffix: "+" },
          { target: 40, decimals: 0, suffix: "%" },
        ];

        // Ensure clean initial states before timeline starts to eliminate any paint flicker
        gsap.set(letters, { opacity: 0, y: 40, filter: "blur(8px)" });
        gsap.set(statCards, { opacity: 0, y: 24 });
        gsap.set(statIndicators, { opacity: 0 });
        if (carRef.current) gsap.set(carRef.current, { opacity: 0, x: -160 });
        if (progressBarRef?.current) gsap.set(progressBarRef.current, { scaleX: 0 });

        // Sequence initial entrance animations on page load so they play in order.
        const loadTimeline = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        // Stagger in each headline letter with blur and upward movement for a smooth text reveal.
        loadTimeline.to(
          letters,
          { opacity: 1, y: 0, filter: "blur(0px)", stagger: INTRO_LETTER_STAGGER, duration: 0.7 }
        );

        // Fade in each stat column softly in an unactivated state so they are ready for scroll reveal.
        loadTimeline.to(
          statCards,
          { opacity: 0.45, y: 0, stagger: INTRO_STATS_STAGGER, duration: 0.6 },
          "-=0.35"
        );

        // Animate the numbers counting up from zero to their real values during the intro.
        statsTargets.forEach((item, index) => {
          const counter = { val: 0 };
          const numEl = statNumbers[index];
          // Tween a counter object so we can format and write each number to the DOM on each frame.
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

        // Slide the sports car into its starting spot last to complete the intro scene.
        if (carRef.current) {
          loadTimeline.to(
            carRef.current,
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.4"
          );
        }

        // Calculate travel distance once upfront without layout reads inside scroll callbacks.
        const carEl = carRef.current;
        const carWidth = carEl ? carEl.offsetWidth : (isMobile ? 280 : 540);
        const rightMargin = isMobile ? CAR_MARGIN_MOBILE : CAR_MARGIN_DESKTOP;
        const travelDistance = Math.max(160, window.innerWidth - carWidth - rightMargin);

        // Timeline that pins the hero and scrubs all animations in sync with the user's scroll.
        const scrollTimeline = gsap.timeline({
          // Pin the hero section for 300% scroll distance and link all animation progress directly to the scrollbar.
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: PIN_LENGTH,
            pin: true,
            scrub: SCRUB_VALUE,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Advance the top progress bar using hardware-accelerated scaleX transform only.
        if (progressBarRef?.current) {
          scrollTimeline.to(
            progressBarRef.current,
            {
              scaleX: 1,
              ease: "none",
              duration: 1,
            },
            0
          );
        }

        // Move the car from the left edge toward the right edge based on scroll position.
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

          // Rotate the rear wheel around its axle center point as the car moves.
          scrollTimeline.to(
            ".car-wheel-rear",
            {
              rotation: WHEEL_ROTATION,
              svgOrigin: "105 90",
              ease: "none",
              duration: 1,
            },
            0
          );

          // Rotate the front wheel around its axle center point at the exact same rate.
          scrollTimeline.to(
            ".car-wheel-front",
            {
              rotation: WHEEL_ROTATION,
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
            // Fade in the orange color on each letter right as the car drives underneath it.
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

        // Reveal each stat column sequentially as the car drives past it across the screen.
        if (statCards.length > 0) {
          statCards.forEach((card, index) => {
            // Position triggers spaced out across the car journey
            const cardStart = 0.12 + index * 0.22;
            scrollTimeline.to(
              card,
              {
                opacity: 1,
                duration: 0.12,
                ease: "power1.in",
              },
              cardStart
            );

            // Illuminate the top indicator bar on the active stat column
            if (statIndicators[index]) {
              scrollTimeline.to(
                statIndicators[index],
                {
                  opacity: 1,
                  duration: 0.1,
                  ease: "power1.in",
                },
                cardStart
              );
            }
          });
        }

        // Move stats upward at a slower speed to create a subtle vertical parallax effect.
        if (statsRef.current) {
          scrollTimeline.to(
            statsRef.current,
            {
              y: isMobile ? STATS_PARALLAX_MOBILE : STATS_PARALLAX_DESKTOP,
              ease: "none",
              duration: 1,
            },
            0
          );
        }

        // Shift road dashed lines to the left to simulate motion beneath the tires.
        if (roadDashesRef.current) {
          scrollTimeline.to(
            roadDashesRef.current,
            {
              x: isMobile ? ROAD_SHIFT_MOBILE : ROAD_SHIFT_DESKTOP,
              ease: "none",
              duration: 1,
            },
            0
          );
        }

        // Shift the background slightly slower than the road to give depth to the scene.
        if (bgRef.current) {
          scrollTimeline.to(
            bgRef.current,
            {
              x: isMobile ? BG_SHIFT_X_MOBILE : BG_SHIFT_X_DESKTOP,
              y: BG_SHIFT_Y,
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
