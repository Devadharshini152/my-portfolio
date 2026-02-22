import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Scrolled state for background
      setScrolled(currentScrollPos > 20);

      // Visibility state for hide-on-scroll
      if (currentScrollPos < 10) {
        setVisible(true);
      } else {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ?
          "bg-card/80 backdrop-blur-lg shadow-card border-b border-border" :
          "bg-transparent"} ${visible ? "translate-y-0" : "-translate-y-full"
        }`}>

      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#home" className="font-display text-xl font-bold text-gradient">Devadharshini J

        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">

              {l.label}
            </a>
          )}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-hero hover:opacity-90 transition-opacity">

          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}>

          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen &&
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border px-4 pb-6 animate-fade-in-up">
          {navLinks.map((l) =>
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">

              {l.label}
            </a>
          )}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold">

            Hire Me
          </a>
        </div>
      }
    </nav>);

};

export default Navbar;