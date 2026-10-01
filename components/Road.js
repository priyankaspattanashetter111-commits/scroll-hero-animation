export default function Road({ roadRef, roadDashesRef }) {
  return (
    <div
      ref={roadRef}
      className="relative w-full overflow-hidden pointer-events-none select-none z-10"
    >
      {/* Precision Ground Baseline */}
      <div className="relative w-full h-[1px] bg-[#262523]" />

      {/* Road Base Surface */}
      <div className="relative w-full h-12 sm:h-16 bg-[#0f0f0e] overflow-hidden">
        {/* Horizontal Speed Dashes */}
        <div
          ref={roadDashesRef}
          className="absolute top-3 left-0 w-[240%] flex gap-10 sm:gap-14 will-change-transform"
        >
          {Array.from({ length: 45 }).map((_, i) => (
            <div
              key={i}
              className="h-[1.5px] w-8 sm:w-12 bg-[#2d2b27] shrink-0"
            />
          ))}
        </div>

        {/* Bottom subtle edge */}
        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#0f0f0e] to-transparent" />
      </div>
    </div>
  );
}
