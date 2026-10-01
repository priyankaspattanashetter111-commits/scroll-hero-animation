export default function Headline() {
  const firstWord = ["W", "E", "L", "C", "O", "M", "E"];
  const secondWord = ["I", "T", "Z", "F", "I", "Z", "Z"];

  return (
    <div className="w-full text-center px-4">
      <h1
        aria-label="WELCOME ITZFIZZ"
        className="font-heading inline-flex flex-wrap items-center justify-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.25em] md:tracking-[0.4em] uppercase select-none"
      >
        <span className="inline-flex items-center mr-6 sm:mr-10 md:mr-16">
          {firstWord.map((letter, index) => (
            <span
              key={`first-${index}`}
              className="headline-letter relative inline-block mx-1 sm:mx-2 md:mx-3 text-[#383633] will-change-transform"
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
              className="headline-letter relative inline-block mx-1 sm:mx-2 md:mx-3 text-[#383633] will-change-transform"
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
