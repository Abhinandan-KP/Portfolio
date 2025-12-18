import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-mono font-bold gradient-text">
            Abhinandan.dev
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link text-sm">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Abhinandan-KP"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card hover:bg-neon-cyan/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/abhinandan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card hover:bg-neon-cyan/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border">
              <a
                href="https://github.com/Abhinandan-KP"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/abhinandan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-card"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
