import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 glass-card mb-6 animate-fade-in-up">
            <span className="text-sm text-muted-foreground">Available for Internships</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Building <span className="gradient-text">Scalable Software</span> & Solving Problems.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Hi, I'm <span className="neon-text-cyan">Abhinandan</span>. A passionate 2nd Year CSE Student at{" "}
            <span className="text-foreground">SRM Institute of Science & Technology</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#" className="btn-outline flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-neon-cyan transition-colors"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
