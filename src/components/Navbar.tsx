import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navSections } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 max-w-4xl mx-auto transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-card border border-border rounded-xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <button
          onClick={() => scrollTo("hero")}
          className="font-serif text-lg font-semibold text-foreground tracking-tight hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
        >
          SF
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="px-3 py-1.5 text-[13px] font-medium text-foreground-secondary hover:text-primary hover:bg-primary/5 rounded-md transition-colors cursor-pointer bg-transparent border-none"
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground-secondary hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border px-5 py-3 flex flex-col gap-1">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-left px-3 py-2 text-[14px] font-medium text-foreground-secondary hover:text-primary hover:bg-primary/5 rounded-md transition-colors cursor-pointer bg-transparent border-none"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
