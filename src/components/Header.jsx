import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Work", "Process", "About", "Contact"];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-background/95 backdrop-blur-sm py-4" 
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex flex-col items-center relative z-50">
              <span className="font-serif text-base md:text-lg tracking-[0.15em] text-foreground">
                NIYASHI KAUSHIK
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                Spaces
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
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
            <button 
              className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span 
                className={`w-6 h-px bg-foreground transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-1' : ''
                }`} 
              />
              <span 
                className={`w-6 h-px bg-foreground transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-0.5' : ''
                }`} 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-serif text-2xl text-foreground hover:text-stone transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
              style={{ 
                animationDelay: menuOpen ? `${index * 0.1}s` : '0s',
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
