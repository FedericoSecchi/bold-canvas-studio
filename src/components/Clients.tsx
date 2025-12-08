import portfolioHotel from "@/assets/portfolio-hotel.jpg";
import portfolioBakery from "@/assets/portfolio-bakery.jpg";
import portfolioWellness from "@/assets/portfolio-wellness.jpg";

const Clients = () => {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-20" data-animate="fade-up">
          <h2 className="headline-medium mb-4">
            Brands we like
            <br />
            working with.
          </h2>
          <p className="body-large text-muted-foreground max-w-xl mx-auto">
            From small teams and local places to boutique hotels and growing
            studios.
          </p>
        </div>

        {/* Client collage row */}
        <div className="relative h-[400px]" data-animate="scale">
          {/* Image 1 */}
          <div
            className="absolute left-0 top-10 w-[35%] h-[70%] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:-translate-y-2 hover:rotate-2"
            style={{ transform: "rotate(-3deg)" }}
          >
            <img
              src={portfolioHotel}
              alt="Client work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div
            className="absolute left-[30%] top-0 w-[30%] h-[60%] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:-translate-y-2"
            style={{ transform: "rotate(2deg)" }}
          >
            <img
              src={portfolioBakery}
              alt="Client work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div
            className="absolute right-10 top-20 w-[30%] h-[65%] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:-translate-y-2 hover:-rotate-2"
            style={{ transform: "rotate(4deg)" }}
          >
            <img
              src={portfolioWellness}
              alt="Client work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-10 left-[50%] transform -translate-x-1/2">
            <div className="flex items-center gap-8">
              {["Hotels", "Studios", "Brands", "Shops"].map((label, i) => (
                <span
                  key={label}
                  className="font-display text-lg font-semibold text-muted-foreground/50"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Floating stickers */}
          <div
            className="absolute top-0 right-[40%] text-4xl animate-float"
            style={{ animationDelay: "0.2s" }}
          >
            💼
          </div>
          <div
            className="absolute bottom-20 right-[20%] text-3xl animate-float"
            style={{ animationDelay: "0.6s" }}
          >
            ⭐
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
