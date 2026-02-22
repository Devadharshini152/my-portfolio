import { Award } from "lucide-react";

const certs = [
  { name: "Oracle Cloud Infrastructure", issuer: "Oracle" },
  { name: "NPTEL Machine Learning", issuer: "NPTEL" },
  { name: "Microsoft Azure", issuer: "Intellipaat" },
  { name: "TCS iON Cloud Computing", issuer: "TCS" },
  { name: "APTIS ESOL English Proficiency", issuer: "British Council" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Certifications</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover border border-border transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center shrink-0">
                <Award size={18} className="text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm mb-1">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
