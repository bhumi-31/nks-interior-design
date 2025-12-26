import { useState, useEffect } from "react";
import heroImage from "../assets/hero-interior.jpg";
import MagneticButton from "./MagneticButton";
import TextReveal, { WordReveal, LineReveal } from "./TextReveal";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Delay to allow for page load animation
    const timer = setTimeout(() => setLoaded(true), 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Parallax calculation - subtle movement
  const parallaxOffset = scrollY * 0.3;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Page Load Curtain */}
      <div
        className="fixed inset-0 z-[100] bg-background pointer-events-none"
        style={{
          clipPath: loaded ? 'inset(0 0 100% 0)' : 'inset(0 0 0 0)',
          transition: 'clip-path 1.2s cubic-bezier(0.77, 0, 0.175, 1)',
        }}
      />

      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-[120%] absolute -top-[10%]"
          style={{
            transform: `translateY(${parallaxOffset}px) scale(${loaded ? 1 : 1.1})`,
            opacity: loaded ? 1 : 0,
            transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease',
            willChange: 'transform',
          }}
        >
          <img
            src={heroImage}
            alt="Minimalist luxury interior with travertine stone wall and soft linen furnishings"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow w-full pt-32">
        <div className="max-w-xl">
          {/* Subtitle with line reveal */}
          <LineReveal delay={500} className="mb-6">
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Interior Design Studio
            </p>
          </LineReveal>

          {/* Main headline with character reveal */}
          <div className="overflow-hidden mb-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.05]">
              <LineReveal delay={700}>
                <span className="block">Spaces that</span>
              </LineReveal>
              <LineReveal delay={900}>
                <em className="font-light">endure</em>
              </LineReveal>
            </h1>
          </div>

          {/* Description with word reveal */}
          <LineReveal delay={1100} className="mb-12">
            <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              Thoughtful design rooted in material intelligence,
              process clarity, and long-term value.
            </p>
          </LineReveal>

          {/* Magnetic CTA Button */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.3s',
            }}
          >
            <MagneticButton strength={0.4} radius={120}>
              <a
                href="#work"
                className="inline-flex items-center gap-3 text-sm tracking-wider text-foreground group"
                data-cursor-text="View"
              >
                <span className="editorial-link">View Selected Work</span>
                <span
                  className="w-8 h-px bg-foreground transition-all duration-500 group-hover:w-16"
                  style={{
                    transformOrigin: 'left',
                  }}
                />
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.5s',
        }}
      >
        <MagneticButton strength={0.2} radius={80}>
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
        </MagneticButton>
      </div>

      <style>{`
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
