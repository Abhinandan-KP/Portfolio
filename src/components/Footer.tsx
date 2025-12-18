import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-mono font-bold text-lg gradient-text mb-2">
              Abhinandan.dev
            </h3>
            <p className="text-sm text-muted-foreground">
              Built by Abhinandan | © 2026
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Abhinandan-KP"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-neon-cyan/10 transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinandanx/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-neon-cyan/10 transition-all hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:abhinandanx538@gmail.com"
              className="p-3 glass-card hover:bg-neon-cyan/10 transition-all hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Crafted with passion using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
