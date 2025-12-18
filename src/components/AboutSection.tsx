import { Code2, GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A driven computer science student with a passion for building efficient, scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 hover-lift">
            <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-neon-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground text-sm">
              2nd Year B.Tech in Computer Science at SRM Institute of Science & Technology
            </p>
          </div>

          <div className="glass-card p-6 hover-lift">
            <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6 text-neon-purple" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Focus Areas</h3>
            <p className="text-muted-foreground text-sm">
              Data Structures, Algorithms, Web Development, and Object-Oriented Programming
            </p>
          </div>

          <div className="glass-card p-6 hover-lift">
            <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-neon-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Goals</h3>
            <p className="text-muted-foreground text-sm">
              Building impactful software solutions and contributing to innovative tech projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
