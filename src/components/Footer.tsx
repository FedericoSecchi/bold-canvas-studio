const footerLinks = ["Home", "Work", "Capabilities", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="font-display text-3xl font-bold mb-6 block">
              studio<span className="text-primary">.</span>
            </span>
            <p className="body-regular text-background/60 mb-6 max-w-xs">
              Creative Studio — branding, websites and visual content.
            </p>
            <a
              href="mailto:hello@studio.com"
              className="font-display font-semibold text-primary hover:underline"
            >
              hello@studio.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <span className="label-text text-background/40 mb-6 block">
              Navigation
            </span>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-background/80 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Collab */}
          <div>
            <span className="label-text text-background/40 mb-6 block">
              Collaborate
            </span>
            <p className="body-regular text-background/60 mb-4">
              Designers, developers, photographers — send us your portfolio.
            </p>
            <a
              href="mailto:hello@studio.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-body font-medium text-sm hover:scale-105 transition-transform"
            >
              Get in touch
              <svg
                className="w-4 h-4"
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
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © 2025 Creative Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {["Twitter", "Instagram", "Dribbble"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-background/40 hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
