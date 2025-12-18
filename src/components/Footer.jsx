const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-base tracking-widest text-foreground">
              NIYASHI KAUSHIK
            </span>
            <span className="text-[9px] tracking-[0.3em] text-muted-foreground uppercase">
              Spaces
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
