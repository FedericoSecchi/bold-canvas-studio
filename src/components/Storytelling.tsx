import { useEffect, useRef } from "react";
import gsap from "gsap";

const mainLines = [
  "We craft brands and digital experiences",
  "built to spark emotion, sharpen identity,",
  "and make people feel “this is it.”",
];

const sideCopy =
  "A studio driven by clarity, bold ideas, and design that actually works.";

const Storytelling = () => {
  const mainLinesRef = useRef<HTMLDivElement>(null);
  const sideNoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-line", {
        opacity: 0,
        y: 50,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.18,
      });

      if (sideNoteRef.current) {
        gsap.from(sideNoteRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.25,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-wrapper min-h-[90vh] flex items-center bg-background">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left: Main editorial statement (80%) */}
          <div
            ref={mainLinesRef}
            className="about-main lg:col-span-4 space-y-3"
          >
            {mainLines.map((line) => (
              <div
                key={line}
                className="about-line font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-[80%]"
              >
                {line}
              </div>
            ))}
          </div>

          {/* Right: Side note (20%) */}
          <div
            ref={sideNoteRef}
            className="about-side lg:col-span-1 pt-2 lg:pt-3"
          >
            <p className="body-regular text-muted-foreground tracking-[0.08em] max-w-xs">
              {sideCopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
