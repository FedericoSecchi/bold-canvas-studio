const Storytelling = () => {
  return (
    <section className="py-32 bg-background" data-animate="fade-up">
      <div className="section-container">
        <div className="max-w-4xl">
          <span className="label-text text-primary mb-6 block">
            About the studio
          </span>

          <h2 className="headline-medium mb-10">
            Emotion-Driven.
            <br />
            <span className="text-stroke">Designer-Made.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12" data-animate="stagger">
            <p className="body-large text-muted-foreground">
              We build brands that connect emotionally and websites that move
              with purpose.
            </p>
            <p className="body-large text-muted-foreground">
              By blending strategy, design and motion, we create visual systems
              that look precise, feel alive and stay consistent across every
              touchpoint.
            </p>
          </div>

          <div className="relative">
            <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <p className="body-regular relative z-10 max-w-2xl">
                No generic templates dropped on top of your logo. Everything is
                designed to fit the way you actually work.
              </p>
              {/* Decorative accent */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 text-[120px] opacity-10">
                ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
