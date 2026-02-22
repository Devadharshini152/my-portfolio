const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 75 },
      { name: "C++", level: 70 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "JWT", level: 70 },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "Oracle SQL", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "Firebase", level: 65 },
      { name: "WebSockets", level: 70 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="group bg-card/40 backdrop-blur-md rounded-2xl p-6 shadow-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-hero group-hover:scale-110 transition-transform duration-300">
                  <span className="font-bold text-xl">{cat.title[0]}</span>
                </div>
                <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="px-3 py-1.5 rounded-lg bg-secondary/80 text-secondary-foreground text-sm font-semibold border border-transparent hover:border-accent/40 hover:bg-accent/5 hover:text-accent transition-all duration-200 cursor-default hover:scale-105"
                    title={`${skill.level}% proficiency`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
