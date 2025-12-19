import textureImage from "../assets/texture-stone.jpg";

const Philosophy = () => {
  return (
    <section className="section-padding bg-card" id="about">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image - Asymmetric placement */}
          <div className="lg:col-span-5 lg:col-start-1">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={textureImage}
                alt="Natural limestone texture with soft organic character"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Material study: Limestone
            </p>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-8">
              Philosophy
            </p>

            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-10 leading-snug">
              Luxury is quiet,<br />
              restrained, and<br />
              <em className="font-light">intentional</em>
            </h2>

            <div className="space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                At Niyashi Kaushik Spaces, we believe in design that transcends
                trends—expressed through materials, proportions, and light.
                Spaces that feel considered from the first moment.
              </p>
              <p>
                We work predominantly with natural stones, matte metals, and
                soft tactile fabrics. Materials chosen for their honesty,
                durability, and timeless character.
              </p>
            </div>

            {/* Signature Quote */}
            <div className="mt-16 pt-8 border-t border-border">
              <blockquote className="font-serif text-lg md:text-xl italic text-foreground leading-relaxed">
                "The work is luxury, but not flashy. It's felt in how a space
                functions and ages over time."
              </blockquote>
              <cite className="block mt-4 text-xs tracking-[0.2em] text-muted-foreground uppercase not-italic">
                — Niyashi Kaushik
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
