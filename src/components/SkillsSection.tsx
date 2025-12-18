const skills = {
  languages: [
    { name: "C++", highlight: false },
    { name: "Java", highlight: true, badge: "Elite Certified" },
    { name: "JavaScript", highlight: false },
    { name: "SQL", highlight: false },
  ],
  webDev: [
    { name: "React.js", highlight: true },
    { name: "Tailwind CSS", highlight: false },
    { name: "HTML5", highlight: false },
    { name: "Node.js", highlight: false },
  ],
  tools: [
    { name: "Git", highlight: false },
    { name: "GitHub", highlight: true },
    { name: "VS Code", highlight: false },
    { name: "Vercel", highlight: false },
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Languages */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4 neon-text-cyan">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill) => (
                <div
                  key={skill.name}
                  className={`skill-pill flex items-center gap-2 ${
                    skill.highlight ? "border-neon-cyan/30 bg-neon-cyan/10" : ""
                  }`}
                >
                  <span>{skill.name}</span>
                  {skill.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-neon-purple/20 text-neon-purple">
                      {skill.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4 neon-text-purple">Web Development</h3>
            <div className="flex flex-wrap gap-3">
              {skills.webDev.map((skill) => (
                <div
                  key={skill.name}
                  className={`skill-pill ${
                    skill.highlight ? "border-neon-purple/30 bg-neon-purple/10" : ""
                  }`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4 neon-text-cyan">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <div
                  key={skill.name}
                  className={`skill-pill ${
                    skill.highlight ? "border-neon-cyan/30 bg-neon-cyan/10" : ""
                  }`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
