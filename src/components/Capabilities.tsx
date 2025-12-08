import { useState } from "react";

const capabilities = [
  {
    title: "Branding",
    text: "Visual identities, logo refinements, typography and color systems, and brand guidelines built for real-world use.",
    icon: "✦",
  },
  {
    title: "Websites",
    text: "Modern, responsive sites with clear structure, smooth interactions and fast performance.",
    icon: "◈",
  },
  {
    title: "Content & Motion",
    text: "Layouts for social, short motion pieces, product visuals and campaign assets.",
    icon: "◎",
  },
  {
    title: "Systems & Automations",
    text: "Small automations for forms, email flows and simple workflows that save time every week.",
    icon: "⬡",
  },
];

const Capabilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="capabilities" className="py-32 bg-background">
      <div className="section-container">
        <div className="mb-20" data-animate="fade-up">
          <h2 className="headline-medium">
            What we're
            <br />
            <span className="text-primary">really good at.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Capability list */}
          <div className="space-y-2" data-animate="stagger">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className={`group cursor-pointer border-b border-border transition-all duration-300 ${
                  activeIndex === index ? "pb-8" : "pb-4"
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-2xl transition-transform duration-300 ${
                        activeIndex === index
                          ? "scale-125 text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {cap.icon}
                    </span>
                    <h3
                      className={`font-display text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {cap.title}
                    </h3>
                  </div>
                  <span
                    className={`text-2xl transition-transform duration-300 ${
                      activeIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index
                      ? "max-h-32 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="body-regular text-muted-foreground pl-10">
                    {cap.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual display */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32">
              <div className="relative w-full aspect-square">
                {/* Background shape */}
                <div className="absolute inset-0 bg-muted rounded-3xl" />

                {/* Active capability visual */}
                <div className="absolute inset-8 bg-secondary rounded-2xl flex items-center justify-center overflow-hidden">
                  <span
                    className="text-[180px] text-primary opacity-20 transition-all duration-500"
                    key={activeIndex}
                  >
                    {capabilities[activeIndex].icon}
                  </span>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-display font-bold">
                  0{activeIndex + 1}
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
