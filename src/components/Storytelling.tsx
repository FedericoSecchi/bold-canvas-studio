const mainLine =
  "We design brand identities and websites that clarify positioning and help teams sell with confidence.";

const sideCopy =
  "A small studio focused on clear strategy, strong identity, and practical delivery.";

const Storytelling = () => {
  return (
    <section
      id="about"
      className="about-section min-h-[90vh] relative bg-background overflow-x-clip"
      aria-labelledby="about-intro-heading"
    >
      <div className="about-main-wrapper grid">
        <div className="about-main centered-text w-full max-w-none mx-auto">
          <span className="label-text text-primary mb-4 block text-center">ABOUT</span>
          <div className="about-headline-clip overflow-hidden">
            <h2
              id="about-intro-heading"
              className="font-display font-extrabold leading-[0.95] tracking-[-0.02em] block"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 12rem)",
                lineHeight: "clamp(1.02, 0.92 + 0.3vw, 1.14)",
                width: "100%",
                maxWidth: "100%",
                margin: "0",
                padding: "0",
                textAlign: "center",
                textWrap: "balance",
                hyphens: "auto",
                overflowWrap: "break-word",
                boxSizing: "border-box",
              }}
            >
              {mainLine}
            </h2>
          </div>
        </div>

        <div
          aria-hidden="true"
          style={{ height: "clamp(2.5rem, 6vw, 6rem)" }}
        />

        <div
          className="about-note text-muted-foreground w-full text-center"
          style={{ paddingInline: "clamp(1.25rem, 6vw, 6rem)" }}
        >
          {sideCopy}
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
