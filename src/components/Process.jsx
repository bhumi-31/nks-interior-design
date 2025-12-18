const processSteps = [
  {
    number: "01",
    title: "Discovery & Alignment",
    description: "Understanding your vision, lifestyle, and the story your space should tell.",
  },
  {
    number: "02",
    title: "Planning & Design Direction",
    description: "Translating ideas into thoughtful concepts that honor materials and light.",
  },
  {
    number: "03",
    title: "Curated Selections",
    description: "Sourcing materials and elements that will age beautifully over time.",
  },
  {
    number: "04",
    title: "Execution & Styling",
    description: "Bringing the vision to life with precision and intentional detail.",
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-card" id="process">
      <div className="container-narrow">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-6">
            Our Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            A structured approach to lasting design
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-16">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="group border-t border-border pt-8"
            >
              <span className="text-xs tracking-widest text-muted-foreground">
                {step.number}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mt-4 mb-3 group-hover:text-stone transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
