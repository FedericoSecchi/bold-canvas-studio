import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutAnimations = () => {
  const ctx = gsap.context(() => {
    // ScrollFloat animation is handled by the ScrollFloat component itself
    // This function is kept for potential future animations but currently does nothing
    // to avoid errors from missing elements
  });

  return () => ctx.revert();
};

