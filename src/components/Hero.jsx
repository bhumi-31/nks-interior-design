import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Minimalist luxury interior with natural stone and warm textures"
          className="w-full h-full object-cover animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow w-full">
        <div className="max-w-2xl">
          <p className="text-xs md:text-sm tracking-[0.25em] text-muted-foreground uppercase mb-4 fade-up">
            Interior Design Studio
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6 fade-up delay-100">
            Spaces that endure
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed fade-up delay-200">
            Thoughtful design rooted in material intelligence, 
            process clarity, and long-term value.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 fade-up delay-500">
        <div className="w-px h-12 bg-muted-foreground/40 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-foreground animate-pulse" 
               style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
