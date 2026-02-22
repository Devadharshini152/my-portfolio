import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Jurify",
    description:
      "A full-stack legal aid platform connecting citizens with verified lawyers. Features real-time chat, secure authentication, and lawyer verification system.",
    tech: ["Spring Boot", "JWT", "React", "WebSockets", "PostgreSQL"],
    color: "from-primary to-primary/70",
  },
  {
    title: "Smart Complaint Management System",
    description:
      "A comprehensive complaint tracking and resolution system for streamlined issue management with role-based access and status tracking.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    color: "from-accent to-accent/70",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:-translate-y-1"
            >
              {/* Color header */}
              <div className={`h-3 bg-gradient-to-r ${project.color}`} />
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors mt-1.5" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
