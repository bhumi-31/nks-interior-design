import materialsImage from "../assets/materials-palette.jpg";

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

const Materials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Full-width image */}
        <div className="relative aspect-[21/9] overflow-hidden mb-16 md:mb-24">
          <img
            src={materialsImage}
            alt="Material palette featuring travertine, limestone, brass hardware and linen fabric"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-6">
              Material Language
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-6">
              Timeless, durable,<br />
              and <em className="font-light">honest</em>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Materials suitable for the Indian climate with a global sensibility.
              Every selection is made for how it will age, not just how it looks today.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-8">
              {materials.map((material, index) => (
                <div
                  key={material.name}
                  className="border-t border-border pt-6"
                >
                  <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">
                    {material.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {material.types}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materials;
