# Technical Architecture & Interview Notes

This document explains how the scroll-driven hero section is engineered. It uses simple terms and short explanations so you can speak through the code clearly in an interview.

---

## 1. How the Intro Timeline Works

When the page loads, a master GSAP timeline coordinates the entrance sequence so elements arrive in a deliberate hierarchy:

1. **Headline Letters**: Each letter starts 40px down, with 0 opacity and an 8px blur. They stagger in every 0.05 seconds with a `power3.out` easing curve.
2. **Stat Columns**: Before the letters finish, the stat columns fade in one by one with a 0.15-second stagger.
3. **Number Counters**: As each stat column appears, a JavaScript counter object tweens from 0 to its target value (98, 3.5, 120, 40). An `onUpdate` callback formats and writes the number into the DOM on every animation frame.
4. **Sports Car**: The car slides in from `-160px` off-screen left into its resting spot.

The entire intro takes roughly 2.5 seconds and runs only once on initial load.

---

## 2. How Pin and Scrub Work

- **Pinning (`pin: true`)**: When the top of the hero hits the top of the viewport (`start: "top top"`), ScrollTrigger fixes the hero container in place. The user is still scrolling down the webpage, but the hero stays pinned on screen.
- **Pin Duration (`end: "+=300%"` )**: The pin remains active for 3 full viewport heights of scroll distance before unpinning and letting the next section scroll into view.
- **Scrubbing (`scrub: 1`)**: Instead of playing as a timed movie, the animation timeline is tied directly to the scrollbar position (scroll progress from 0% to 100%).
- **Smoothing**: The `1` in `scrub: 1` introduces a 1-second inertia smoothing (lerp). If the user flicks the trackpad or scroll wheel abruptly, the car accelerates and decelerates smoothly rather than jumping rigidly.

---

## 3. How the Car Position is Calculated

The car's travel path is determined by screen width:

1. The code measures the rendered width of the car SVG (`carEl.offsetWidth`).
2. It subtracts the car width and a right margin (64px on desktop, 24px on mobile) from the total window width:
   `travelDistance = window.innerWidth - carWidth - rightMargin`
3. A `gsap.to` tween moves the car from `x: 0` to `x: travelDistance` across the full duration of the scroll timeline.
4. At 50% scroll distance, the car is exactly 50% across the screen.

---

## 4. How Each Letter Knows When the Car Passed It

Each letter in `"W E L C O M E   I T Z F I Z Z"` has a hidden duplicate span (`.headline-letter-lit`) layered directly on top of it, styled with the orange accent color at `opacity: 0`.

- Because the car moves from left to right, we map each of the 14 letters to a step along the timeline:
  `letterStart = 0.08 + index * letterStep`
- When scroll progress advances the timeline to that timestamp, the orange overlay letter fades in to `opacity: 1`.
- Because the timeline is scrubbed, scrolling forward lights each letter up just as the car drives underneath it, and scrolling backward turns the letters back off in reverse.

---

## 5. Why Only Transform and Opacity are Animated

Browsers render web pages in three stages: **Layout** (calculating positions), **Paint** (filling in pixels), and **Composite** (layering pieces on the screen).

- Changing properties like `left`, `top`, `margin`, or `width` triggers full Layout recalculations and Paint cycles on the CPU, causing dropped frames and sluggish scrolling.
- Animating `transform` (`x`, `y`, `rotation`) and `opacity` bypasses Layout and Paint entirely.
- The GPU compositor handles these changes on isolated compositor layers (`will-change: transform`). This keeps the animation locked at a fluid 60+ frames per second even on mobile hardware.

---

## 6. What `useGSAP` and `matchMedia` Do

- **`useGSAP`**: React components can mount and unmount multiple times (especially with Fast Refresh and Strict Mode). The `@gsap/react` hook automatically records all GSAP animations, timelines, and ScrollTriggers created inside it and cleans them up (`revert()`) when the component unmounts. This prevents memory leaks and orphaned scroll listeners.
- **`gsap.matchMedia`**: Acts like CSS media queries for JavaScript animation logic. It allows desktop viewports (`min-width: 768px`) and mobile viewports (`max-width: 767px`) to have different travel distances and margins.
- **Accessibility**: It provides a clean fallback for `prefers-reduced-motion: reduce`. For users sensitive to motion, all pinning and heavy movement are disabled and content is rendered statically.

---

## 7. How Purposeful Stat Reveals Work

Instead of revealing all stats simultaneously, each of the four columns activates in sequence as the sports car drives across the screen:
- Each stat column has an initial unactivated state (`opacity: 0.45`).
- In the scroll timeline, column opacity and top indicator lines (`.stat-indicator`) are triggered at key milestones along the car's horizontal travel (`0.12`, `0.34`, `0.56`, `0.78`).
- When the car reaches a column, that column brightens to full opacity and its top hairline indicator illuminates. If the user scrolls backwards, it dims back down.

---

## 8. How the Progress Bar Works

At the top of the viewport sits a fixed 2px orange line.
- It starts at `transform: scaleX(0)` with `transform-origin: left`.
- In the scroll timeline, it scales from `0` to `1` across the full duration of the pin using `scaleX` only.
- Animating `scaleX` instead of `width` ensures the progress bar is composited entirely on the GPU without triggering layout reflow.

