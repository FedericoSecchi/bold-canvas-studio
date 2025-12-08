import portfolioHotel from "@/assets/portfolio-hotel.jpg";
import portfolioBakery from "@/assets/portfolio-bakery.jpg";
import portfolioOutdoor from "@/assets/portfolio-outdoor.jpg";
import portfolioWellness from "@/assets/portfolio-wellness.jpg";

const projects = [
  {
    title: "Hotel Alpino",
    type: "Identity · Website",
    tag: "Hospitality",
    image: portfolioHotel,
    size: "large",
  },
  {
    title: "Bakery Studio",
    type: "Brand refresh · Visual system",
    tag: "Food & Beverage",
    image: portfolioBakery,
    size: "medium",
  },
  {
    title: "Outdoor Gear",
    type: "Launch landing · Content kit",
    tag: "Retail",
    image: portfolioOutdoor,
    size: "medium",
  },
  {
    title: "Wellness Space",
    type: "Webflow site · Social kit",
    tag: "Studios",
    image: portfolioWellness,
    size: "large",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-32 bg-secondary text-secondary-foreground">
      <div className="section-container">
        <div className="mb-16" data-animate="fade-up">
          <h2 className="headline-medium mb-4">Selected projects</h2>
          <p className="body-large text-secondary-foreground/60">
            Different industries, same obsession with detail.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-animate="stagger"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                project.size === "large" ? "md:row-span-2" : ""
              }`}
              style={{
                height: project.size === "large" ? "600px" : "280px",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent">
                {/* Tag */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-background/70 mb-2">
                    {project.type}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-background">
                    {project.title}
                  </h3>

                  {/* Arrow indicator */}
                  <div className="mt-4 w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <svg
                      className="w-5 h-5 text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
