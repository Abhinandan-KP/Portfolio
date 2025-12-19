import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "UPI Playground",
    description:
      "A developer tool to simulate NPCI UPI deep-linking protocols. Allows developers to debug payment parameters ('pa', 'pn') and mobile intent flows in real-time with 100% type safety.",
    techStack: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/Abhinandan-KP/upi-playground",
    liveLink: "https://upi-playground.vercel.app/",
    color: "cyan" as const,
  },
  {
    title: "3D Orbit Visualizer",
    description:
      "Scientific visualization engine converting raw CSV coordinate data into interactive 3D spherical trajectories. Uses Vector Math to map satellite latitude/longitude onto a rotating Earth.",
    techStack: ["Python", "Pandas", "Plotly"],
    github: "https://github.com/Abhinandan-KP/orbit-project",
    liveLink: "https://orbit-project.vercel.app/",
    color: "purple" as const,
  },
  {
    title: "Dijkstra & BFS Visualizer",
    description:
      "Interactive educational tool for Graph Traversal algorithms. Visualizes the 'frontier expansion' step-by-step to demonstrate the efficiency difference between Weighted and Unweighted searches.",
    techStack: ["React", "TypeScript", "Algorithms"],
    github: "https://github.com/Abhinandan-KP/Dijkstra-BFS-Maze-Visualizer",
    liveLink: "https://dijkstra-bfs-maze-visualizer.vercel.app/",
    color: "cyan" as const,
  },
  {
    title: "Event Management System",
    description:
      "A responsive web app to manage campus events with CRUD operations and LocalStorage data persistence. Features include event creation, editing, and filtering capabilities.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Abhinandan-KP/eventManagement1",
    liveLink: "https://event-management1-woad.vercel.app/",
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
            Explore my projects across web development, algorithms, and scientific visualization.
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
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed h-20 overflow-hidden">
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
                {/* Live Demo Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-all flex-1 justify-center ${
                    project.color === "cyan"
                      ? "bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan"
                      : "bg-neon-purple/10 hover:bg-neon-purple/20 text-neon-purple"
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition-all flex-1 justify-center ${
                    project.color === "cyan"
                      ? "bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan"
                      : "bg-neon-purple/10 hover:bg-neon-purple/20 text-neon-purple"
                  }`}
                >
                  <Github className="w-4 h-4" />
                  Code
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

