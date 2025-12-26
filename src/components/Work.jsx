import bedroomImage from "../assets/project-bedroom.jpg";
import diningImage from "../assets/project-dining.jpg";
import useTilt from "../hooks/useTilt";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    image: bedroomImage,
    title: "Private Residence",
    location: "New Delhi",
    category: "Residential",
    description: "Quartzite, wool, brushed bronze",
    year: "2024",
  },
  {
    image: diningImage,
    title: "The Gathering Space",
    location: "Gurgaon",
    category: "Residential",
    description: "Marble, blackened steel, linen",
    year: "2023",
  },
];

// Individual project card with 3D tilt effect and premium hover
const ProjectCard = ({ project, index }) => {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt({
    maxTilt: 4,
    scale: 1.01,
    perspective: 1000,
    speed: 400,
  });

  return (
    <ScrollReveal
      animation="fade-up"
      delay={index * 200}
      threshold={0.15}
    >
      <article
        ref={ref}
        className="group cursor-pointer relative"
        style={style}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        data-cursor-text="View"
      >
        {/* 3D Card Container */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden mb-6">
            {/* Image with smooth zoom */}
            <img
              src={project.image}
              alt={`${project.title} - ${project.description}`}
              className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110"
            />

            {/* Overlay that appears on hover */}
            <div className="absolute inset-0 bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/20" />

            {/* Project info overlay */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-6 md:p-8"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* This appears on hover */}
            </div>

            {/* View Project indicator */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{
                opacity: 0,
                transform: 'translate(-50%, -50%) scale(0.8)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                className="w-24 h-24 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm bg-white/10 group-hover:opacity-100 group-hover:scale-100"
                style={{
                  opacity: 0,
                  transform: 'scale(0.8)',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                }}
              >
                <span className="text-white text-xs tracking-[0.2em] uppercase font-medium">View</span>
              </div>
            </div>

            {/* Animated corner accents */}
            <div
              className="absolute top-4 left-4 w-8 h-8"
              style={{
                borderLeft: '1px solid rgba(255,255,255,0.5)',
                borderTop: '1px solid rgba(255,255,255,0.5)',
                opacity: 0,
                transform: 'translate(-10px, -10px)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
            <div
              className="absolute bottom-4 right-4 w-8 h-8"
              style={{
                borderRight: '1px solid rgba(255,255,255,0.5)',
                borderBottom: '1px solid rgba(255,255,255,0.5)',
                opacity: 0,
                transform: 'translate(10px, 10px)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </div>

          {/* Project info below image */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs tracking-wider text-muted-foreground">
                <span className="transition-transform duration-300 group-hover:translate-x-1">{project.category}</span>
                <span className="w-4 h-px bg-border transition-all duration-300 group-hover:w-6" />
                <span className="transition-transform duration-300 group-hover:translate-x-1">{project.location}</span>
              </div>
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-foreground transition-all duration-300 group-hover:translate-x-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground italic transition-all duration-300 group-hover:translate-x-2">
              {project.description}
            </p>
          </div>

          {/* Decorative line that expands on hover */}
          <div
            className="absolute -bottom-4 left-0 h-px bg-foreground/20"
            style={{
              width: '0%',
              transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>

        {/* Hover state styles */}
        <style>{`
          .group:hover .absolute.top-4.left-4 {
            opacity: 1 !important;
            transform: translate(0, 0) !important;
          }
          .group:hover .absolute.bottom-4.right-4 {
            opacity: 1 !important;
            transform: translate(0, 0) !important;
          }
          .group:hover .absolute.-bottom-4 {
            width: 100% !important;
          }
          .group:hover .w-24.h-24 {
            opacity: 1 !important;
            transform: scale(1) !important;
          }
        `}</style>
      </article>
    </ScrollReveal>
  );
};

const Work = () => {
  return (
    <section className="section-padding bg-background" id="work">
      <div className="container-narrow">
        {/* Header */}
        <ScrollReveal animation="fade-up">
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
        </ScrollReveal>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
