import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container-narrow">
        <ScrollReveal animation="fade-up" threshold={0.3}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start group cursor-default">
              <span className="font-serif text-base tracking-widest text-foreground transition-all duration-300 group-hover:tracking-[0.2em]">
                NIYASHI KAUSHIK
              </span>
              <span className="text-[9px] tracking-[0.3em] text-muted-foreground uppercase">
                Spaces
              </span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
