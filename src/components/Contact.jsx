import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  return (
    <section className="section-padding bg-background" id="contact">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Main CTA */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-up">
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-6">
                Begin a Conversation
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
                Ready to create a space<br />
                that <em className="font-light">endures?</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mb-10">
                We take on a limited number of projects each year to ensure
                every client receives our full attention and care. Let's discuss
                how we might work together.
              </p>
            </ScrollReveal>

            {/* Email CTA with Magnetic effect */}
            <ScrollReveal animation="fade-up" delay={300}>
              <MagneticButton strength={0.3} radius={150}>
                <a
                  href="mailto:work.niyashi@gmail.com"
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="font-serif text-xl md:text-2xl text-foreground editorial-link">
                    work.niyashi@gmail.com
                  </span>
                  <span className="w-8 h-px bg-foreground transition-all duration-500 group-hover:w-12" />
                </a>
              </MagneticButton>
            </ScrollReveal>
          </div>

          {/* Right - Details */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-12">
            <ScrollReveal animation="fade-left" delay={100}>
              <div>
                <h4 className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                  Studio
                </h4>
                <address className="not-italic text-foreground text-sm leading-relaxed">
                  New Delhi, India
                  <br />
                  <span className="text-muted-foreground">
                    Available for projects nationwide
                  </span>
                </address>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <div>
                <h4 className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                  Project Types
                </h4>
                <ul className="text-foreground text-sm space-y-2">
                  <li className="transition-transform duration-300 hover:translate-x-2">High-end Residential</li>
                  <li className="transition-transform duration-300 hover:translate-x-2">Select Commercial</li>
                  <li className="transition-transform duration-300 hover:translate-x-2">Material Consultation</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={300}>
              <div>
                <h4 className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                  Follow
                </h4>
                <div className="flex gap-6">
                  {["Instagram", "Pinterest"].map((social) => (
                    <MagneticButton key={social} strength={0.2} radius={60}>
                      <a
                        href="#"
                        className="editorial-link text-sm text-foreground"
                      >
                        {social}
                      </a>
                    </MagneticButton>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
