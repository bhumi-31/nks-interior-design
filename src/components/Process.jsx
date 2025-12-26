import { useState, useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

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
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress through the section
      const startPoint = windowHeight * 0.7;
      const endPoint = -sectionHeight + windowHeight * 0.3;

      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        const totalRange = startPoint - endPoint;
        const currentProgress = (startPoint - sectionTop) / totalRange;
        setProgress(Math.min(Math.max(currentProgress, 0), 1));

        // Calculate active step based on progress
        const stepProgress = currentProgress * processSteps.length;
        setActiveStep(Math.floor(stepProgress));
      } else if (sectionTop > startPoint) {
        setProgress(0);
        setActiveStep(-1);
      } else {
        setProgress(1);
        setActiveStep(processSteps.length - 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-padding bg-card" id="process" ref={sectionRef}>
      <div className="container-narrow">
        {/* Header */}
        <ScrollReveal animation="fade-up">
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
        </ScrollReveal>

        {/* Process Steps - Horizontal Timeline with Animated Progress */}
        <div className="relative">
          {/* Background Line */}
          <div className="hidden md:block absolute top-4 left-0 right-0 h-px bg-border" />

          {/* Animated Progress Line */}
          <div
            className="hidden md:block absolute top-4 left-0 h-px bg-foreground origin-left z-10"
            style={{
              width: '100%',
              transform: `scaleX(${progress})`,
              transition: 'transform 0.1s ease-out',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {processSteps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                animation="fade-up"
                delay={index * 100}
              >
                <div
                  className={`relative transition-all duration-500 ${index <= activeStep ? 'opacity-100' : 'opacity-60'
                    }`}
                >
                  {/* Step Number with animated dot */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      {/* Pulse effect for active step */}
                      {index === activeStep && (
                        <span
                          className="hidden md:block absolute w-4 h-4 rounded-full bg-foreground/20 -left-1 -top-1"
                          style={{
                            animation: 'pulse 2s ease-in-out infinite',
                          }}
                        />
                      )}
                      <span
                        className={`hidden md:block w-2 h-2 rounded-full transition-all duration-500 ${index <= activeStep
                            ? 'bg-foreground scale-100'
                            : 'bg-muted-foreground scale-75'
                          }`}
                      />
                    </div>
                    <span className={`text-xs tracking-[0.2em] font-medium transition-colors duration-500 ${index <= activeStep ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                      {step.number}
                    </span>
                  </div>

                  <h3 className={`font-serif text-lg md:text-xl mb-3 leading-snug transition-colors duration-500 ${index <= activeStep ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Process;
