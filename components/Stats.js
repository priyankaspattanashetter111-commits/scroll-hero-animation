export default function Stats({ statsRef }) {
  const stats = [
    {
      initial: "0%",
      label: "Client Retention",
      description: "Long-term partnerships across venture-backed engineering teams.",
    },
    {
      initial: "0.0x",
      label: "Production Velocity",
      description: "Rapid agile delivery cycles from initial design to deployment.",
    },
    {
      initial: "0+",
      label: "Projects Shipped",
      description: "Scalable digital products delivered to global audiences.",
    },
    {
      initial: "0%",
      label: "Higher Conversion",
      description: "Engineered interaction flows driving measurable revenue impact.",
    },
  ];

  return (
    <div
      ref={statsRef}
      className="w-full max-w-6xl mx-auto px-4 z-20 will-change-transform"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-[#262523] divide-y divide-[#262523] lg:divide-y-0 lg:divide-x divide-[#262523]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card relative px-4 sm:px-6 py-4 sm:py-6 text-left flex flex-col justify-start will-change-transform"
            style={{ opacity: 0, transform: "translateY(24px)" }}
          >
            {/* Top orange accent indicator revealed as car passes */}
            <div
              className="stat-indicator absolute top-0 left-0 right-0 h-[2px] bg-[#ff5a1f] opacity-0 pointer-events-none"
              aria-hidden="true"
            />
            <div className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f2efe8] tabular-nums">
              <span className="stat-number">{stat.initial}</span>
            </div>
            <div className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#a3a099]">
              {stat.label}
            </div>
            <p className="mt-1 text-xs text-[#8a8780] leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
