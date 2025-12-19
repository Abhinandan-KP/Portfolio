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
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0 animate-fade-in-up">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-neon-cyan/30 shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:shadow-[0_0_50px_rgba(0,242,255,0.5)] transition-shadow duration-300">
                <img
                  src="/xmas.jpeg" 
                  alt="Abhinandan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              <div className="inline-block px-4 py-2 glass-card mb-6 animate-fade-in-up">
                <span className="text-sm text-muted-foreground">Available for Internships</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Building <span className="gradient-text">Scalable Software</span> & Solving Problems.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Hi, I'm <span className="neon-text-cyan">Abhinandan</span>. A passionate 2nd Year CSE Student at{" "}
                <span className="text-foreground">SRM Institute of Science & Technology</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <a href="#projects" className="btn-primary flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4" />
                </a>
                
                {/* --- CHANGED SECTION START --- */}
                <a
                  href="/resume.pdf"
                  download="Abhinandan_Resume.pdf"
                  className="btn-outline flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                {/* --- CHANGED SECTION END --- */}

              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
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
