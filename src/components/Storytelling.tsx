const Storytelling = () => {
  return (
    <section className="py-32 bg-background" data-animate="fade-up">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left side - Main phrase (80% width equivalent) */}
          <div className="lg:col-span-4" data-animate="fade-up">
            <h2 className="headline-large mb-0 leading-tight">
              We design bold, intentional brands and websites that feel as good as they look.
            </h2>
          </div>

          {/* Right side - Supporting text (20% width equivalent) */}
          <div className="lg:col-span-1 pt-2" data-animate="fade-up" style={{ animationDelay: "0.2s" }}>
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
