import heroImage from "../assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Minimalist luxury interior with travertine stone wall and soft linen furnishings"
          className="w-full h-full object-cover"
          style={{
            animation: 'heroScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow w-full pt-32">
        <div className="max-w-xl">
          <div className="overflow-hidden mb-6">
            <p
              className="text-xs tracking-[0.3em] text-muted-foreground uppercase fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              Interior Design Studio
            </p>
          </div>

          <div className="overflow-hidden">
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.05] mb-8 fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              Spaces that<br />
              <em className="font-light">endure</em>
            </h1>
          </div>

          <div className="overflow-hidden">
            <p
              className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-12 fade-up"
              style={{ animationDelay: '0.7s' }}
            >
              Thoughtful design rooted in material intelligence,
              process clarity, and long-term value.
            </p>
          </div>

          {/* Subtle CTA - not loud */}
          <div
            className="fade-up"
            style={{ animationDelay: '0.9s' }}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 text-sm tracking-wider text-foreground group"
            >
              <span className="editorial-link">View Selected Work</span>
              <span className="w-8 h-px bg-foreground transition-all duration-500 group-hover:w-12" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 fade-up"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
          <div className="w-px h-16 bg-border relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-foreground/60"
              style={{
                height: '30%',
                animation: 'scrollIndicator 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroScale {
          from { transform: scale(1.05); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes scrollIndicator {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(300%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
