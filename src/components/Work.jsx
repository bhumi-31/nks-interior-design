import bedroomImage from "@/assets/project-bedroom.jpg";
import diningImage from "@/assets/project-dining.jpg";

const projects = [
  {
    image: bedroomImage,
    title: "Private Residence",
    location: "New Delhi",
    category: "Residential",
    description: "Quartzite, wool, brushed bronze",
  },
  {
    image: diningImage,
    title: "The Gathering Space",
    location: "Gurgaon",
    category: "Residential",
    description: "Marble, blackened steel, linen",
  },
];

const Work = () => {
  return (
    <section className="section-padding bg-background" id="work">
      <div className="container-narrow">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Spaces designed to last
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            High-end residential and select commercial projects, 
            each rooted in material honesty.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs tracking-wider text-muted-foreground">
                  <span>{project.category}</span>
                  <span className="w-4 h-px bg-border" />
                  <span>{project.location}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-stone transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground italic">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
