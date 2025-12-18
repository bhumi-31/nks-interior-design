const Footer = () => {
  return (
    <footer className="section-padding bg-background border-t border-border" id="contact">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-widest text-foreground">
                NIYASHI KAUSHIK
              </span>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-0.5">
                Spaces
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-6 max-w-xs">
              Boutique interior design studio working across high-end 
              residential and select commercial projects.
            </p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@nks.studio"
                className="editorial-link text-foreground block"
              >
                hello@nks.studio
              </a>
              <p className="text-muted-foreground text-sm">
                For project inquiries and collaborations
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="lg:col-span-1">
            <h4 className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
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
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Niyashi Kaushik Spaces. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Instagram", "Pinterest"].map((social) => (
              <a
                key={social}
                href="#"
                className="editorial-link text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
