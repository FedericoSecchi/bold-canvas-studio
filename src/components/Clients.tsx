import { brandsData } from "@/data/brands";

const Clients = () => {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-20" data-animate="fade-up">
          <h2 className="headline-medium mb-4">
            Brands We Work With
          </h2>
          <p className="body-large text-muted-foreground max-w-xl mx-auto">
            A selection of clients, collaborators and real projects we've been involved in.
          </p>
        </div>

        {/* Brands Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto"
          data-animate="stagger"
        >
          {brandsData.map((brand, index) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center p-6 transition-all duration-300 hover:opacity-100 opacity-70"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="text-center">
                  <h3 className="font-display text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <span className="label-text text-muted-foreground text-xs">
                    {brand.category}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
