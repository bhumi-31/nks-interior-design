import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between py-6 md:py-8">
          {/* Logo */}
          <a href="/" className="flex flex-col items-center">
            <span className="font-serif text-lg md:text-xl tracking-widest text-foreground">
              NIYASHI KAUSHIK
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase mt-0.5">
              Spaces
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {["Work", "Process", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="editorial-link text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-px bg-foreground" />
            <span className="w-6 h-px bg-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
