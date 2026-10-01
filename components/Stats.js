export default function Stats({ statsRef }) {
  const stats = [
    {
      initial: "0%",
      label: "Client Satisfaction",
      description: "Delivering exceptional digital craft with proven client retention.",
    },
    {
      initial: "0.0x",
      label: "Faster Delivery",
      description: "Optimized modern engineering pipelines for swift iteration.",
    },
    {
      initial: "0+",
      label: "Projects Shipped",
      description: "Production web applications deployed to global audiences.",
    },
    {
      initial: "0%",
      label: "Higher Conversion",
      description: "Interaction design fine-tuned to elevate audience engagement.",
    },
  ];

  return (
    <div
      ref={statsRef}
      className="w-full max-w-6xl mx-auto px-4 z-20 will-change-transform"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card relative overflow-hidden rounded-xl p-4 sm:p-5 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white tabular-nums">
              <span className="stat-number">{stat.initial}</span>
            </div>
            <div className="mt-1 text-xs sm:text-sm font-semibold text-cyan-400 tracking-wide">
              {stat.label}
            </div>
            <p className="mt-1 text-xs text-slate-400 line-clamp-1">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
