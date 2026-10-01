export default function Car({ carRef }) {
  // Spoke angles in radians for performance wheels
  const spokeAngles = [0, 60, 120, 180, 240, 300].map((deg) => (deg * Math.PI) / 180);
  const spokeRadius = 12.5;

  const rearCenter = { x: 105, y: 90 };
  const frontCenter = { x: 305, y: 90 };

  return (
    <div
      ref={carRef}
      className="absolute bottom-[16px] sm:bottom-[20px] md:bottom-[24px] left-2 sm:left-6 z-30 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[560px] pointer-events-none select-none will-change-transform"
      style={{ opacity: 0, transform: "translateX(-160px)" }}
    >
      <svg
        viewBox="0 0 460 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Studio Charcoal Chassis Gradient */}
          <linearGradient id="studioChassisGrad" x1="40" y1="35" x2="390" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2c2a26" />
            <stop offset="40%" stopColor="#211f1c" />
            <stop offset="85%" stopColor="#171614" />
            <stop offset="100%" stopColor="#11100e" />
          </linearGradient>

          {/* Roof and Window Reflection */}
          <linearGradient id="studioGlassGrad" x1="160" y1="38" x2="270" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3d3a34" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#1a1917" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#121110" />
          </linearGradient>
        </defs>

        {/* Ambient Ground Contact Shadow */}
        <ellipse
          cx="205"
          cy="104"
          rx="160"
          ry="5.5"
          fill="#000000"
          opacity="0.8"
        />

        {/* Rear Wing / Aerodynamic Lip */}
        <path
          d="M 34,56 L 62,57 L 58,61 L 30,60 Z"
          fill="#ff5a1f"
        />
        <path
          d="M 42,60 L 44,67 L 48,67 L 46,60 Z"
          fill="#1c1b18"
        />
        <path
          d="M 52,60 L 53,67 L 57,67 L 56,60 Z"
          fill="#1c1b18"
        />

        {/* Main Car Silhouette */}
        <path
          d="
            M 28,86
            L 26,70
            Q 30,66 46,66
            L 78,66
            Q 128,55 165,39
            L 215,38
            Q 245,45 275,59
            L 345,72
            Q 372,75 386,83
            L 388,89
            L 375,93
            L 330,94
            C 330,76 280,76 280,94
            L 130,94
            C 130,76 80,76 80,94
            L 32,94
            Z
          "
          fill="url(#studioChassisGrad)"
          stroke="#383632"
          strokeWidth="1.2"
        />

        {/* Precision Body Crease Line */}
        <path
          d="M 78,72 Q 150,75 220,73 T 360,80"
          stroke="#423f39"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Rocker Panel Trim */}
        <path
          d="M 135,92 L 275,92"
          stroke="#2d2b27"
          strokeWidth="2"
        />

        {/* Dark Smoked Cabin Glass */}
        <path
          d="
            M 166,43
            L 212,41
            Q 238,48 266,61
            L 220,63
            L 155,63
            Z
          "
          fill="url(#studioGlassGrad)"
          stroke="#47443e"
          strokeWidth="0.8"
        />

        {/* B-Pillar */}
        <line
          x1="216"
          y1="41"
          x2="220"
          y2="63"
          stroke="#171614"
          strokeWidth="3"
        />

        {/* Rear Reflector / Taillight Accent */}
        <path
          d="M 26,70 L 36,70 L 35,74 L 26,74 Z"
          fill="#ff5a1f"
        />

        {/* Front Projector Headlight */}
        <polygon
          points="372,78 386,83 384,85 368,81"
          fill="#f2efe8"
        />

        {/* Lower Front Splitter */}
        <polygon
          points="368,88 384,88 376,93 360,93"
          fill="#11100e"
          stroke="#262523"
          strokeWidth="0.8"
        />

        {/* REAR WHEEL ASSEMBLY */}
        <g className="car-wheel car-wheel-rear">
          {/* Tire */}
          <circle cx={rearCenter.x} cy={rearCenter.y} r="18" fill="#121110" stroke="#24221f" strokeWidth="2" />
          {/* Brake Rotor */}
          <circle cx={rearCenter.x} cy={rearCenter.y} r="11" fill="#1b1a18" stroke="#33312c" strokeWidth="0.6" />
          {/* Orange Accent Caliper */}
          <path
            d={`M ${rearCenter.x - 3} ${rearCenter.y - 12} Q ${rearCenter.x + 8} ${rearCenter.y - 12} ${rearCenter.x + 10} ${rearCenter.y - 5}`}
            stroke="#ff5a1f"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Rim Base */}
          <circle cx={rearCenter.x} cy={rearCenter.y} r="13" fill="none" stroke="#3a3832" strokeWidth="1" />
          {/* Fine Precision Spokes */}
          {spokeAngles.map((angle, idx) => (
            <line
              key={`rear-spoke-${idx}`}
              x1={rearCenter.x}
              y1={rearCenter.y}
              x2={rearCenter.x + spokeRadius * Math.cos(angle)}
              y2={rearCenter.y + spokeRadius * Math.sin(angle)}
              stroke="#8a8780"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ))}
          {/* Hub Cap */}
          <circle cx={rearCenter.x} cy={rearCenter.y} r="3" fill="#171614" stroke="#ff5a1f" strokeWidth="0.8" />
        </g>

        {/* FRONT WHEEL ASSEMBLY */}
        <g className="car-wheel car-wheel-front">
          {/* Tire */}
          <circle cx={frontCenter.x} cy={frontCenter.y} r="18" fill="#121110" stroke="#24221f" strokeWidth="2" />
          {/* Brake Rotor */}
          <circle cx={frontCenter.x} cy={frontCenter.y} r="11" fill="#1b1a18" stroke="#33312c" strokeWidth="0.6" />
          {/* Orange Accent Caliper */}
          <path
            d={`M ${frontCenter.x - 3} ${frontCenter.y - 12} Q ${frontCenter.x + 8} ${frontCenter.y - 12} ${frontCenter.x + 10} ${frontCenter.y - 5}`}
            stroke="#ff5a1f"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Rim Base */}
          <circle cx={frontCenter.x} cy={frontCenter.y} r="13" fill="none" stroke="#3a3832" strokeWidth="1" />
          {/* Fine Precision Spokes */}
          {spokeAngles.map((angle, idx) => (
            <line
              key={`front-spoke-${idx}`}
              x1={frontCenter.x}
              y1={frontCenter.y}
              x2={frontCenter.x + spokeRadius * Math.cos(angle)}
              y2={frontCenter.y + spokeRadius * Math.sin(angle)}
              stroke="#8a8780"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ))}
          {/* Hub Cap */}
          <circle cx={frontCenter.x} cy={frontCenter.y} r="3" fill="#171614" stroke="#ff5a1f" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}
