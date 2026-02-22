import { Code, GraduationCap, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            Designing Solutions, Not Just <span className="text-gradient">Code</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a 3rd-year B.E. Computer Science and Engineering student at
            Panimalar Engineering College, passionate about full-stack development
            and modern web technologies. I love turning ideas into functional,
            beautiful digital products that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: "Full Stack Dev",
              desc: "Building end-to-end web applications with React, Spring Boot, and modern databases.",
            },
            {
              icon: GraduationCap,
              title: "Continuous Learner",
              desc: "Earning certifications in cloud computing, ML, and enterprise technologies.",
            },
            {
              icon: Heart,
              title: "Passionate Builder",
              desc: "Creating impactful projects like legal aid platforms and complaint management systems.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
                <item.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
