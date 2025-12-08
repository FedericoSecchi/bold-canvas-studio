import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Storytelling = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mainTextRef = useRef<HTMLDivElement>(null);
  const sideNoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !mainTextRef.current || !sideNoteRef.current) return;

    // Cinematic fade-up animation for main text
    gsap.fromTo(
      mainTextRef.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Delayed fade-in for side note
    gsap.fromTo(
      sideNoteRef.current,
      {
        opacity: 0,
        y: 40,
        x: -20,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.9,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-[90vh] flex items-center bg-background"
    >
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left side - Main phrase (80% width equivalent) */}
          <div 
            ref={mainTextRef}
            className="lg:col-span-4"
          >
            <h2 className="headline-large mb-0 leading-tight">
              We design bold, intentional brands and websites that feel as good as they look.
            </h2>
          </div>

          {/* Right side - Supporting text (20% width equivalent) */}
          <div 
            ref={sideNoteRef}
            className="lg:col-span-1 pt-2"
          >
            <p className="body-regular text-muted-foreground">
              We combine design, motion and digital systems to help small teams and growing brands look more intentional online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
