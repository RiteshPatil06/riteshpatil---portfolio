
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-dark/80 backdrop-blur-md border-b border-border/50" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-xl font-bold text-highlight transition hover:text-highlight-alt">
          <span className="font-mono">{"</>"}</span>
          <span className="">Rohan Patankar</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-highlight transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-highlight after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
          <Button size="sm" variant="outline" className="ml-4 gap-2 border-highlight/30 text-highlight hover:text-highlight-alt hover:border-highlight">
            <Sun size={16} />
            <span>Light</span>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Button size="sm" variant="outline" className="gap-2 border-highlight/30 text-highlight hover:text-highlight-alt hover:border-highlight">
            <Sun size={16} />
          </Button>
          <button 
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`bg-foreground h-0.5 w-full transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`bg-foreground h-0.5 w-full transition-all ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`bg-foreground h-0.5 w-full transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-96 border-t border-border/50" : "max-h-0"}`}>
        <div className="container-custom py-5 flex flex-col gap-5">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-lg font-medium text-foreground/80 hover:text-highlight transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
