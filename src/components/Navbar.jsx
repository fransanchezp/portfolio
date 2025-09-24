import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar principal */}
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo - alineado a la izquierda */}
          <div className="flex items-center">
            <a
              className="text-sm sm:text-xl font-bold text-primary flex items-center"
              href="#hero"
            >
              <span className="relative z-10">
                <span className="text-glow text-foreground block sm:hidden">Fran P.</span>
                <span className="text-glow text-foreground hidden sm:block">Fran Praena </span>
                <span className="hidden sm:inline"> Portfolio</span>
              </span>
            </a>
          </div>

          {/* Desktop nav - centrado */}
          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile nav button - centrado en móvil */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50 absolute left-1/2 transform -translate-x-1/2"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Espaciador para balance - donde estaría el theme toggle */}
          <div className="w-10 h-10"></div>

          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl text-center">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};