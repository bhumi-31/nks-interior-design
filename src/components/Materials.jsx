import materialsImage from "../assets/materials-palette.jpg";
import ScrollReveal from "./ScrollReveal";
import useTilt from "../hooks/useTilt";

const materials = [
  {
    name: "Natural Stone",
    types: "Marble, Quartzite, Travertine, Limestone",
  },
  {
    name: "Matte Metals",
    types: "Brushed brass, Bronze, Blackened finishes",
  },
  {
    name: "Soft Textiles",
    types: "Linen, Wool blends, Cotton",
  },
];

// Material item with subtle hover animation
const MaterialItem = ({ material, index }) => {
  return (
    <ScrollReveal animation="fade-up" delay={index * 100}>
      <div
        className="border-t border-border pt-6 group cursor-default"
      >
        <h3 className="font-serif text-lg md:text-xl text-foreground mb-2 transition-all duration-300 group-hover:translate-x-2">
          {material.name}
        </h3>
        <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:translate-x-2">
          {material.types}
        </p>
      </div>
    </ScrollReveal>
  );
};

const Materials = () => {
  const imageTilt = useTilt({
    maxTilt: 3,
    scale: 1.01,
    perspective: 1200,
    speed: 600,
  });

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Full-width image with subtle 3D tilt */}
        <ScrollReveal animation="scale">
          <div
            ref={imageTilt.ref}
            style={imageTilt.style}
            onMouseMove={imageTilt.onMouseMove}
            onMouseLeave={imageTilt.onMouseLeave}
            className="relative aspect-[21/9] overflow-hidden mb-16 md:mb-24 cursor-default"
          >
            <img
              src={materialsImage}
              alt="Material palette featuring travertine, limestone, brass hardware and linen fabric"
              className="w-full h-full object-cover object-center transition-transform duration-700"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-up">
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-6">
                Material Language
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-6">
                Timeless, durable,<br />
                and <em className="font-light">honest</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Materials suitable for the Indian climate with a global sensibility.
                Every selection is made for how it will age, not just how it looks today.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-8">
              {materials.map((material, index) => (
                <MaterialItem
                  key={material.name}
                  material={material}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
