import Hero from "@/components/Hero";

export default function Home() {
  const featureCards = [
    {
      title: "Precision Choreography",
      description:
        "Scroll-driven GSAP timeline pinned for 300% viewport scrub, synchronizing letter illumination with car velocity.",
      badge: "Motion Architecture",
    },
    {
      title: "Compositor Acceleration",
      description:
        "GPU-accelerated transforms and opacity modulations ensure fluid 60 FPS playback without triggering document layout reflows.",
      badge: "Performance",
    },
    {
      title: "Responsive Intelligence",
      description:
        "Tailored matchMedia listeners adapt distances dynamically across viewports and honor prefers-reduced-motion preferences.",
      badge: "Accessibility",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f0f0e] text-[#f2efe8] flex flex-col">
      {/* 100vh Pin-driven Hero Section */}
      <Hero />

      {/* Continuation Content Section */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#ff5a1f] font-semibold mb-3">
            Studio Engineering
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f2efe8]">
            Crafted for High-Impact Digital Experiences
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#8a8780] max-w-2xl leading-relaxed">
            Minimalist architecture combining strict typography, restrained accents,
            and butter-smooth interactive choreography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 bg-[#141311] border border-[#262523] hover:border-[#3d3a35] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#ff5a1f] mb-4">
                  {card.badge}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#f2efe8] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8a8780] leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#1f1e1c] flex items-center justify-between text-xs text-[#6e6b65]">
                <span>0{index + 1}</span>
                <span>Production Spec</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Minimal Studio Footer */}
      <footer className="w-full border-t border-[#1f1e1c] py-8 px-6 text-center text-xs text-[#6e6b65]">
        <p>ITZFIZZ &bull; Digital Product Studio</p>
      </footer>
    </main>
  );
}
