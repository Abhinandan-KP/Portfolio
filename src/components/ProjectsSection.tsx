import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Event Management System",
    description:
      "A responsive web app to manage campus events with CRUD operations and LocalStorage data persistence. Features include event creation, editing, and filtering capabilities.",
    techStack: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Abhinandan-KP/eventManagement",
    color: "cyan" as const,
  },
  {
    title: "Scientific Calculator",
    description:
      "An advanced calculator handling complex arithmetic operations and keyboard input support. Supports trigonometric functions, logarithms, and expression evaluation.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Abhinandan-KP/calculator",
    color: "purple" as const,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my projects across web development and various digital platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card p-6 hover-lift group"
            >
              <div
                className={`w-full h-2 rounded-full mb-6 ${
                  project.color === "cyan"
                    ? "bg-gradient-to-r from-neon-cyan to-neon-cyan/50"
                    : "bg-gradient-to-r from-neon-purple to-neon-purple/50"
                }`}
              />

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.color === "cyan"
                        ? "bg-neon-cyan/10 text-neon-cyan"
                        : "bg-neon-purple/10 text-neon-purple"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-all ${
                    project.color === "cyan"
                      ? "bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan"
                      : "bg-neon-purple/10 hover:bg-neon-purple/20 text-neon-purple"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
