import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Infosys",
    period: "May – July 2025",
    desc: "Worked on enterprise web applications, collaborating with cross-functional teams to deliver scalable solutions.",
  },
  {
    role: "Web Development Intern",
    company: "Test Yantra",
    period: "Apr – May 2025",
    desc: "Gained hands-on experience in front-end and back-end development, contributing to real-world client projects.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Experience</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-0">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-10 pb-12 last:pb-0">
              {/* Timeline line */}
              {i < experiences.length - 1 && (
                <div className="absolute left-[17px] top-10 bottom-0 w-0.5 bg-border" />
              )}
              {/* Dot */}
              <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center">
                <Briefcase size={16} className="text-primary-foreground" />
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-display text-lg font-bold">{exp.role}</h3>
                  <span className="text-xs font-medium text-accent">{exp.period}</span>
                </div>
                <p className="text-primary font-semibold text-sm mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
