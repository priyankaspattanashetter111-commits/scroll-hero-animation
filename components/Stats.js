export default function Stats({ statsRef }) {
  const stats = [
    {
      initial: "0%",
      label: "Client Retention",
      description: "Long-term partnerships with leading engineering teams.",
    },
    {
      initial: "0.0x",
      label: "Production Velocity",
      description: "Accelerated development cycles without compromise.",
    },
    {
      initial: "0+",
      label: "Projects Shipped",
      description: "Flagship digital products delivered globally.",
    },
    {
      initial: "0%",
      label: "Higher Conversion",
      description: "Engineered interaction flows driving measurable impact.",
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
            className="stat-card px-4 sm:px-6 py-5 sm:py-6 text-left flex flex-col justify-start"
          >
            <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#f2efe8] tabular-nums">
              <span className="stat-number">{stat.initial}</span>
            </div>
            <div className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#8a8780]">
              {stat.label}
            </div>
            <p className="mt-1 text-xs text-[#6e6b65] leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
