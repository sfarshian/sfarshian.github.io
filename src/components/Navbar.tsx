import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navSections } from "../data";

export default function Navbar({ blogActive }: { blogActive?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    if (id === "blog") {
      window.location.hash = "#/blog";
      return;
    }
    // Clear any blog hash before scrolling
    if (window.location.hash.startsWith("#/blog")) {
      window.location.hash = "";
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isBlogLink = (id: string) => id === "blog";

  return (
    <>
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
                className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors cursor-pointer bg-transparent border-none ${
                  blogActive && isBlogLink(s.id)
                    ? "text-primary bg-primary/5"
                    : "text-foreground-secondary hover:text-primary hover:bg-primary/5"
                }`}
              >
                {s.label}
              </button>
            ))}
            {/* Blog link — always present, highlighted when active */}
            <button
              onClick={() => scrollTo("blog")}
              className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors cursor-pointer bg-transparent border-none ${
                blogActive
                  ? "text-primary bg-primary/5"
                  : "text-foreground-secondary hover:text-primary hover:bg-primary/5"
              }`}
            >
              Blog
            </button>
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
      </nav>

      {/* Mobile menu — full-screen fixed overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-[100vh] bg-white z-[999] flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-5 py-3">
            <button
              onClick={() => scrollTo("hero")}
              className="font-serif text-lg font-semibold text-foreground tracking-tight cursor-pointer bg-transparent border-none"
            >
              SF
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-foreground-secondary hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <div className="border-t border-border px-5 py-3 flex flex-col gap-1">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left px-3 py-2 text-[14px] font-medium rounded-md transition-colors cursor-pointer bg-transparent border-none ${
                  blogActive && isBlogLink(s.id)
                    ? "text-primary bg-primary/5"
                    : "text-foreground-secondary hover:text-primary hover:bg-primary/5"
                }`}
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("blog")}
              className={`text-left px-3 py-2 text-[14px] font-medium rounded-md transition-colors cursor-pointer bg-transparent border-none ${
                blogActive
                  ? "text-primary bg-primary/5"
                  : "text-foreground-secondary hover:text-primary hover:bg-primary/5"
              }`}
            >
              Blog
            </button>
          </div>
        </div>
      )}
    </>
  );
}
