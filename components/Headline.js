export default function Headline() {
  const firstWord = ["W", "E", "L", "C", "O", "M", "E"];
  const secondWord = ["I", "T", "Z", "F", "I", "Z", "Z"];

  return (
    <div className="w-full text-center px-3 sm:px-6">
      <h1
        aria-label="WELCOME ITZFIZZ"
        className="font-heading inline-flex flex-wrap items-center justify-center font-black uppercase select-none max-w-full"
        style={{
          fontSize: "clamp(1.15rem, 4.6vw, 4.5rem)",
          letterSpacing: "clamp(0.12em, 1.8vw, 0.35em)",
        }}
      >
        <span className="inline-flex items-center mr-4 sm:mr-8 md:mr-14">
          {firstWord.map((letter, index) => (
            <span
              key={`first-${index}`}
              className="headline-letter relative inline-block mx-[0.06em] sm:mx-[0.12em] md:mx-[0.18em] text-[#383633] will-change-transform"
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              <span className="relative z-10">{letter}</span>
              <span
                className="headline-letter-lit absolute inset-0 text-[#ff5a1f] opacity-0 select-none pointer-events-none"
                aria-hidden="true"
              >
                {letter}
              </span>
            </span>
          ))}
        </span>

        <span className="inline-flex items-center">
          {secondWord.map((letter, index) => (
            <span
              key={`second-${index}`}
              className="headline-letter relative inline-block mx-[0.06em] sm:mx-[0.12em] md:mx-[0.18em] text-[#383633] will-change-transform"
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              <span className="relative z-10">{letter}</span>
              <span
                className="headline-letter-lit absolute inset-0 text-[#ff5a1f] opacity-0 select-none pointer-events-none"
                aria-hidden="true"
              >
                {letter}
              </span>
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
}
