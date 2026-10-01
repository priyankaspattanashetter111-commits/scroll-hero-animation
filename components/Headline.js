export default function Headline() {
  const firstWord = ["W", "E", "L", "C", "O", "M", "E"];
  const secondWord = ["I", "T", "Z", "F", "I", "Z", "Z"];

  return (
    <div className="w-full text-center px-4">
      <h1
        aria-label="WELCOME ITZFIZZ"
        className="inline-flex flex-wrap items-center justify-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.25em] md:tracking-[0.4em] uppercase select-none"
      >
        <span className="inline-flex items-center mr-6 sm:mr-10 md:mr-16">
          {firstWord.map((letter, index) => (
            <span
              key={`first-${index}`}
              className="headline-letter relative inline-block mx-1 sm:mx-2 md:mx-3 text-slate-500 will-change-transform"
            >
              <span className="relative z-10">{letter}</span>
              <span
                className="headline-letter-lit absolute inset-0 text-[#00f0ff] opacity-0 select-none pointer-events-none"
                style={{
                  textShadow:
                    "0 0 12px rgba(0, 240, 255, 0.9), 0 0 25px rgba(0, 240, 255, 0.6), 0 0 45px rgba(0, 240, 255, 0.35)",
                }}
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
              className="headline-letter relative inline-block mx-1 sm:mx-2 md:mx-3 text-slate-500 will-change-transform"
            >
              <span className="relative z-10">{letter}</span>
              <span
                className="headline-letter-lit absolute inset-0 text-[#00f0ff] opacity-0 select-none pointer-events-none"
                style={{
                  textShadow:
                    "0 0 12px rgba(0, 240, 255, 0.9), 0 0 25px rgba(0, 240, 255, 0.6), 0 0 45px rgba(0, 240, 255, 0.35)",
                }}
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
