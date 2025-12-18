const processSteps = [
  {
    number: "01",
    title: "Discovery & Alignment",
    description: "Understanding your vision, lifestyle, and the story your space should tell. We listen before we design.",
  },
  {
    number: "02",
    title: "Planning & Design Direction",
    description: "Translating ideas into thoughtful concepts that honor materials, light, and how you live.",
  },
  {
    number: "03",
    title: "Curated Selections",
    description: "Sourcing materials and elements that will age beautifully, not just look good today.",
  },
  {
    number: "04",
    title: "Execution & Styling",
    description: "Bringing the vision to life with precision, craft, and intentional detail.",
  },
];

const Process = () => {
  return (
    <section className="section-padding bg-card" id="process">
      <div className="container-narrow">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-6">
              Our Process
            </p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug">
              A structured approach<br />
              to <em className="font-light">lasting design</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:pt-8">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Our four-phase methodology ensures clarity at every stage—from 
              initial conversation to final styling. No surprises, only considered decisions.
            </p>
          </div>
        </div>

        {/* Process Steps - Horizontal Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-4 left-0 right-0 h-px bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >
                {/* Step Number with dot */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <span className="hidden md:block w-2 h-2 rounded-full bg-foreground" />
                  </div>
                  <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-serif text-lg md:text-xl text-foreground mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
