export interface Brand {
  name: string;
  logo?: string; // Path to logo image (SVG/PNG)
  category: string;
}

export const brandsData: Brand[] = [
  {
    name: "Hotel Alpino",
    category: "Hospitality",
    // logo: "/logos/hotel-alpino.svg", // Placeholder path
  },
  {
    name: "Bakery Studio",
    category: "Food & Beverage",
    // logo: "/logos/bakery-studio.svg",
  },
  {
    name: "Outdoor Gear",
    category: "Retail",
    // logo: "/logos/outdoor-gear.svg",
  },
  {
    name: "Wellness Space",
    category: "Studios",
    // logo: "/logos/wellness-space.svg",
  },
  {
    name: "Shawarmaz",
    category: "Food & Beverage",
    // logo: "/logos/shawarmaz.svg",
  },
  {
    name: "Swap Coffee",
    category: "Food & Beverage",
    // logo: "/logos/swap-coffee.svg",
  },
  {
    name: "FMAG",
    category: "Creative",
    // logo: "/logos/fmag.svg",
  },
  {
    name: "Baba Sturite",
    category: "Retail",
    // logo: "/logos/baba-sturite.svg",
  },
];

