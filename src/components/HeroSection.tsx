import profileImg from "@/assets/devadharshini.jpeg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        "--mouse-x": `${mousePos.x}%`,
        "--mouse-y": `${mousePos.y}%`,
      } as React.CSSProperties}
    >

      {/* Background blobs with cursor follow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob"
          style={{
            transform: `translate(calc((var(--mouse-x) - 50%) / 10), calc((var(--mouse-y) - 50%) / 10))`
          }}
        />
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob [animation-delay:2s]"
          style={{
            transform: `translate(calc((var(--mouse-x) - 50%) / -15), calc((var(--mouse-y) - 50%) / -15))`
          }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob [animation-delay:4s]"
          style={{
            transform: `translate(calc((var(--mouse-x) - 50%) / 20), calc((var(--mouse-y) - 50%) / -20))`
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
              👋 Hello, I'm
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Devadharshini{" "}
              <span className="text-gradient">J</span>
            </h1>
            <p className="text-xl md:text-2xl font-display font-medium text-muted-foreground">
              Aspiring Full Stack Developer
            </p>
            <p className="text-muted-foreground max-w-lg leading-relaxed">I build scalable, user-focused web applications with modern technologies. Passionate about crafting clean code and elegant digital experiences.</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-hero hover:opacity-90 transition-opacity">
                View Projects <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/Devadharshini152" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/devadharshini-j-5465b3319" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mjdeva2006@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right — profile image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-hero rounded-full blur-2xl opacity-30 animate-blob" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-hero">
                <img
                  src={profileImg}
                  alt="Devadharshini J"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />

              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-2 -right-2 bg-card rounded-2xl px-4 py-2 shadow-card border border-border animate-float">
                <p className="text-sm font-semibold font-display">3+ Projects</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>

              <div className="absolute top-10 -right-8 bg-card rounded-2xl px-4 py-2 shadow-card border border-border animate-float [animation-delay:1s]">
                <p className="text-sm font-semibold font-display">3 Internships</p>
                <p className="text-xs text-muted-foreground">Successfully Done</p>
              </div>

              <div className="absolute bottom-1/2 -left-8 bg-card rounded-2xl px-4 py-2 shadow-card border border-border animate-float [animation-delay:2s]">
                <p className="text-sm font-semibold font-display">5+ Certifications</p>
                <p className="text-xs text-muted-foreground">Earned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default HeroSection;