import textureImage from "@/assets/texture-stone.jpg";

const Philosophy = () => {
  return (
    <section className="section-padding bg-background" id="about">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-6">
              Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight text-balance">
              Luxury is quiet, restrained, and intentional
            </h2>
            <div className="space-y-6 text-muted-foreground">
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
            
            {/* Signature */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-serif text-lg italic text-foreground">
                "The work is luxury, but not flashy."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={textureImage}
                alt="Natural limestone texture with soft shadows"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
