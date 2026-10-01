export default function Car({ carRef }) {
  // Spoke angles in radians for 5-spoke performance wheels
  const spokeAngles = [0, 72, 144, 216, 288].map((deg) => (deg * Math.PI) / 180);
  const spokeRadius = 12.5;

  const rearCenter = { x: 105, y: 90 };
  const frontCenter = { x: 305, y: 90 };

  return (
    <div
      ref={carRef}
      className="absolute bottom-[20px] sm:bottom-[26px] left-2 sm:left-6 z-30 w-[240px] sm:w-[320px] md:w-[380px] pointer-events-none select-none will-change-transform"
    >
      <svg
        viewBox="0 0 460 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <defs>
          {/* Chassis body gradient */}
          <linearGradient id="chassisGrad" x1="50" y1="40" x2="380" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="35%" stopColor="#0f172a" />
            <stop offset="70%" stopColor="#080e1e" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Roof and glass reflection */}
          <linearGradient id="glassGrad" x1="160" y1="38" x2="270" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
          </linearGradient>

          {/* Underglow radial gradient */}
          <radialGradient id="underglowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#00f0ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </radialGradient>

          {/* Headlight forward projection beam */}
          <linearGradient id="headlightBeam" x1="380" y1="80" x2="460" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#00f0ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Cyan Underglow beneath chassis */}
        <ellipse
          cx="205"
          cy="104"
          rx="155"
          ry="7"
          fill="url(#underglowGrad)"
        />

        {/* Headlight beam casting forward onto road */}
        <polygon
          points="385,81 460,55 460,105 385,87"
          fill="url(#headlightBeam)"
        />

        {/* Rear Wing / Spoiler */}
        <path
          d="M 36,54 L 64,55 L 60,60 L 32,59 Z"
          fill="#00f0ff"
          opacity="0.9"
        />
        <path
          d="M 44,59 L 46,67 L 50,67 L 48,59 Z"
          fill="#1e293b"
        />
        <path
          d="M 54,59 L 55,67 L 59,67 L 58,59 Z"
          fill="#1e293b"
        />

        {/* Main Car Body Profile */}
        <path
          d="
            M 30,86
            L 28,70
            Q 32,66 48,66
            L 80,66
            Q 130,55 165,39
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
            L 34,94
            Z
          "
          fill="url(#chassisGrad)"
          stroke="#334155"
          strokeWidth="1.2"
        />

        {/* Aerodynamic Side Crease & Neon Accent Line */}
        <path
          d="M 80,72 Q 150,75 220,73 T 360,80"
          stroke="#00f0ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 135,92 L 275,92"
          stroke="#00f0ff"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Cabin Glass / Windshield */}
        <path
          d="
            M 166,43
            L 212,41
            Q 238,48 266,61
            L 220,63
            L 155,63
            Z
          "
          fill="url(#glassGrad)"
          stroke="#38bdf8"
          strokeWidth="0.8"
          strokeOpacity="0.6"
        />

        {/* Window Divider Pillar */}
        <line
          x1="216"
          y1="41"
          x2="220"
          y2="63"
          stroke="#0f172a"
          strokeWidth="2.5"
        />

        {/* Taillight LED Bar */}
        <path
          d="M 28,70 L 40,70 L 38,74 L 28,74 Z"
          fill="#ff0055"
          style={{ filter: "drop-shadow(0 0 6px #ff0055)" }}
        />

        {/* Headlight LED Cluster */}
        <polygon
          points="372,77 386,82 384,85 368,81"
          fill="#00f0ff"
          style={{ filter: "drop-shadow(0 0 8px #00f0ff)" }}
        />

        {/* Front Air Intake Vent */}
        <polygon
          points="368,88 384,88 376,93 360,93"
          fill="#020617"
          stroke="#00f0ff"
          strokeWidth="0.6"
          strokeOpacity="0.5"
        />

        {/* REAR WHEEL ASSEMBLY */}
        <g className="car-wheel car-wheel-rear">
          {/* Tire */}
          <circle cx={rearCenter.x} cy={rearCenter.y} r="18" fill="#090d16" stroke="#1e293b" strokeWidth="2" />
          {/* Rim Base */}
          <circle cx={rearCenter.x} cy={rearCenter.y} r="13" fill="#1e2433" stroke="#334155" strokeWidth="1" />
          {/* Brake Rotor */}
          <circle cx={rearCenter.x} cy={rearCenter.y} r="9" fill="#0f1422" stroke="#475569" strokeWidth="0.5" />
          {/* Spokes */}
          {spokeAngles.map((angle, idx) => (
            <line
              key={`rear-spoke-${idx}`}
              x1={rearCenter.x}
              y1={rearCenter.y}
              x2={rearCenter.x + spokeRadius * Math.cos(angle)}
              y2={rearCenter.y + spokeRadius * Math.sin(angle)}
              stroke="#cbd5e1"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          ))}
          {/* Wheel Hub Center Cap */}
          <circle cx={rearCenter.x} cy={rearCenter.y} r="3" fill="#00f0ff" />
        </g>

        {/* FRONT WHEEL ASSEMBLY */}
        <g className="car-wheel car-wheel-front">
          {/* Tire */}
          <circle cx={frontCenter.x} cy={frontCenter.y} r="18" fill="#090d16" stroke="#1e293b" strokeWidth="2" />
          {/* Rim Base */}
          <circle cx={frontCenter.x} cy={frontCenter.y} r="13" fill="#1e2433" stroke="#334155" strokeWidth="1" />
          {/* Brake Rotor */}
          <circle cx={frontCenter.x} cy={frontCenter.y} r="9" fill="#0f1422" stroke="#475569" strokeWidth="0.5" />
          {/* Spokes */}
          {spokeAngles.map((angle, idx) => (
            <line
              key={`front-spoke-${idx}`}
              x1={frontCenter.x}
              y1={frontCenter.y}
              x2={frontCenter.x + spokeRadius * Math.cos(angle)}
              y2={frontCenter.y + spokeRadius * Math.sin(angle)}
              stroke="#cbd5e1"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          ))}
          {/* Wheel Hub Center Cap */}
          <circle cx={frontCenter.x} cy={frontCenter.y} r="3" fill="#00f0ff" />
        </g>
      </svg>
    </div>
  );
}
