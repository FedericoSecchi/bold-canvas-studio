const items = [
  "Branding",
  "Websites",
  "Content",
  "Strategy",
  "Motion",
  "Identity",
  "Digital",
  "Systems",
];

const Marquee = () => {
  return (
    <section className="py-8 bg-secondary overflow-hidden">
      <div className="flex">
        <div className="marquee-track">
          {[...items, ...items, ...items, ...items].map((item, i) => (
            <span
              key={i}
              className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground/20 flex items-center gap-12"
            >
              {item}
              <span className="text-primary text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
