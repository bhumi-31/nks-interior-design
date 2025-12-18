const Contact = () => {
  return (
    <section className="section-padding bg-background" id="contact">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left - Main CTA */}
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase mb-6">
              Begin a Conversation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              Ready to create a space<br />
              that <em className="font-light">endures?</em>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mb-10">
              We take on a limited number of projects each year to ensure 
              every client receives our full attention and care. Let's discuss 
              how we might work together.
            </p>
            
            {/* Email CTA - Not loud, elegant */}
            <a
              href="mailto:hello@nks.studio"
              className="inline-flex items-center gap-4 group"
            >
              <span className="font-serif text-xl md:text-2xl text-foreground editorial-link">
                hello@nks.studio
              </span>
              <span className="w-8 h-px bg-foreground transition-all duration-500 group-hover:w-12" />
            </a>
          </div>

          {/* Right - Details */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-12">
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

            <div>
              <h4 className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                Project Types
              </h4>
              <ul className="text-foreground text-sm space-y-2">
                <li>High-end Residential</li>
                <li>Select Commercial</li>
                <li>Material Consultation</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                Follow
              </h4>
              <div className="flex gap-6">
                {["Instagram", "Pinterest"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="editorial-link text-sm text-foreground"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
