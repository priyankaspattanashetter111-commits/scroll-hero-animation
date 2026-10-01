export default function Road({ roadRef, roadDashesRef }) {
  return (
    <div
      ref={roadRef}
      className="relative w-full overflow-hidden pointer-events-none select-none z-10"
    >
      {/* Primary Glowing Road Horizon Line */}
      <div className="relative w-full h-[2px] bg-[#00f0ff] shadow-[0_0_12px_#00f0ff,0_0_28px_#00f0ff]" />

      {/* Road Base Surface & Depth Gradients */}
      <div className="relative w-full h-14 sm:h-20 bg-gradient-to-b from-[#090d20] via-[#050713] to-[#03040a] overflow-hidden">
        {/* Horizontal Speed Dashes */}
        <div
          ref={roadDashesRef}
          className="absolute top-3 left-0 w-[240%] flex gap-10 sm:gap-14 will-change-transform"
        >
          {Array.from({ length: 45 }).map((_, i) => (
            <div
              key={i}
              className="h-[2px] sm:h-[3px] w-10 sm:w-16 bg-cyan-400/70 rounded-full shadow-[0_0_8px_#00f0ff] shrink-0"
            />
          ))}
        </div>

        {/* Perspective Grid Markings */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.06)_1px,transparent_1px)] bg-[size:48px_100%] opacity-50" />

        {/* Bottom Ambient Fade */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#05060f] to-transparent" />
      </div>
    </div>
  );
}
