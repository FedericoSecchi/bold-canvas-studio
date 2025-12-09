import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AboutScrollFloatProps {
  text: string;
  className?: string;
}

export function AboutScrollFloat({ text, className = "" }: AboutScrollFloatProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const chars = container.querySelectorAll<HTMLElement>(".about-float-char");
      if (!chars.length) return;

      gsap.fromTo(
        chars,
        { y: 0 },
        {
          y: -20,
          ease: "power2.out",
          stagger: { amount: 0.35, from: "start" },
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
          }
        }
      );
    }, container);

    return () => {
      ctx.revert();
    };
  }, [text]);

  const characters = Array.from(text);

  return (
    <div ref={containerRef} className={"about-float-text " + className}>
      {characters.map((ch, index) => (
        <span key={index} className="about-float-char">
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </div>
  );
}

