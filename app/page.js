import Hero from "@/components/Hero";

export default function Home() {
  const featureCards = [
    {
      title: "Precision Choreography",
      description:
        "Scroll-driven GSAP timeline pinned for 300% viewport scrub, synchronizing letter illumination with car velocity.",
      badge: "GSAP / ScrollTrigger",
    },
    {
      title: "Hardware-Accelerated",
      description:
        "Transforms and opacity animations run on dedicated GPU compositor layers without repainting the document layout.",
      badge: "Performance",
    },
    {
      title: "Adaptive Responsiveness",
      description:
        "Responsive matchMedia configurations handle screen re-sizing seamlessly and respect prefers-reduced-motion.",
      badge: "Accessibility",
    },
  ];

  return (
    <main className="min-h-screen bg-[#05060f] text-slate-100 flex flex-col">
      {/* 100vh Pin-driven Hero Section */}
      <Hero />

      {/* Continuation Content Section */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold mb-3">
            Core Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Built for High-Speed Web Experiences
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl">
            Clean code architecture designed with standard components, zero over-engineering,
            and butter-smooth interactive scroll feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-6 sm:p-8 bg-slate-900/50 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:via-cyan-400/80 transition-all duration-300" />
              <div>
                <span className="inline-block px-2.5 py-1 text-[11px] font-mono font-medium text-cyan-400 bg-cyan-950/60 rounded border border-cyan-800/40 mb-4">
                  {card.badge}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                <span>0{index + 1}</span>
                <span>Active Spec</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="w-full border-t border-slate-900/80 py-8 px-6 text-center text-xs text-slate-400">
        <p>ITZFIZZ &bull; Built with Next.js, GSAP & Tailwind CSS</p>
      </footer>
    </main>
  );
}
