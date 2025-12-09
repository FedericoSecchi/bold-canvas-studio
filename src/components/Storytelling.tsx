import { useEffect, useRef } from "react";
import gsap from "gsap";

const mainLines = [
  "We craft brands and digital experiences built to spark emotion,",
  "sharpen identity, and make people feel “this is it.”",
];

const sideCopy = "A studio driven by clarity, bold ideas, and design that actually works.";

const Storytelling = () => {
  const mainLinesRef = useRef<HTMLDivElement>(null);
  const sideNoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mainLinesRef.current?.children || [], {
        opacity: 0,
        y: 35,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.15,
      });

      if (sideNoteRef.current) {
        gsap.from(sideNoteRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.9,
          delay: 0.2,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-container min-h-[90vh] flex items-center justify-center relative bg-background">
      <div className="about-main w-[80%] max-w-[900px] mx-auto space-y-3 text-left">
        {mainLines.map((line) => (
          <div
            key={line}
            className="about-line font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
          >
            {line}
          </div>
        ))}
      </div>

      <div
        ref={sideNoteRef}
        className="about-note text-muted-foreground text-sm md:text-base tracking-[0.06em] leading-[1.3] max-w-[250px]"
      >
        {sideCopy}
      </div>
    </section>
  );
};

export default Storytelling;
