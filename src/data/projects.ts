import portfolioHotel from "@/assets/portfolio-hotel.jpg";
import portfolioBakery from "@/assets/portfolio-bakery.jpg";
import portfolioOutdoor from "@/assets/portfolio-outdoor.jpg";
import portfolioWellness from "@/assets/portfolio-wellness.jpg";

export interface Project {
  id: string;
  title: string;
  type: string;
  tag: string;
  image: string;
  size: "large" | "medium";
  miniDescription?: string;
  task?: string;
  idea?: string;
  solution?: string;
}

export const projectsData: Project[] = [
  {
    id: "hotel-alpino",
    title: "Hotel Alpino",
    type: "Identity · Website",
    tag: "Hospitality",
    image: portfolioHotel,
    size: "large",
    miniDescription: "A complete brand identity and website redesign for a boutique mountain hotel.",
    task: "Create a brand identity that reflects the alpine experience while appealing to modern travelers seeking authentic mountain escapes.",
    idea: "Combine rustic elegance with contemporary design, using natural textures, refined typography, and a color palette inspired by alpine landscapes.",
    solution: "We developed a comprehensive visual system that works across digital and print, including a custom website, brand guidelines, and marketing materials that capture the essence of mountain hospitality.",
  },
  {
    id: "bakery-studio",
    title: "Bakery Studio",
    type: "Brand refresh · Visual system",
    tag: "Food & Beverage",
    image: portfolioBakery,
    size: "medium",
    miniDescription: "A comprehensive brand refresh for an artisanal bakery with a focus on visual storytelling.",
    task: "Modernize the brand while maintaining its artisanal and authentic feel, making it more appealing to a younger audience.",
    idea: "Create a warm, inviting visual system that celebrates craftsmanship and quality ingredients, using hand-drawn elements and rich photography.",
    solution: "We redesigned the brand identity with a fresh color palette, custom typography, and a visual language that tells the story of traditional baking methods meeting modern tastes.",
  },
  {
    id: "outdoor-gear",
    title: "Outdoor Gear",
    type: "Launch landing · Content kit",
    tag: "Retail",
    image: portfolioOutdoor,
    size: "medium",
    miniDescription: "Launch campaign and landing page for a new outdoor gear brand.",
    task: "Create excitement and trust for a new brand entering a competitive market, establishing credibility from day one.",
    idea: "Develop a bold, adventure-focused visual language with strong photography, clear messaging, and a sense of authenticity that resonates with outdoor enthusiasts.",
    solution: "We created a complete launch package including a high-converting landing page, social media assets, and brand guidelines that positioned the brand as a serious player in the outdoor gear space.",
  },
  {
    id: "wellness-space",
    title: "Wellness Space",
    type: "Webflow site · Social kit",
    tag: "Studios",
    image: portfolioWellness,
    size: "large",
    miniDescription: "A complete digital presence for a wellness studio, including website and social media assets.",
    task: "Create a calming, professional brand that stands out in the wellness industry while conveying trust and expertise.",
    idea: "Design a serene visual system with soft colors, clean typography, and mindful imagery that reflects the studio's approach to wellness and self-care.",
    solution: "We built a beautiful Webflow website with integrated booking, a cohesive social media kit, and brand guidelines that help the studio maintain consistency across all touchpoints.",
  },
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};

