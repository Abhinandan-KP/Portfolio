import { Award, Trophy } from "lucide-react";

const certifications = [
  {
    title: "Programming in Java",
    provider: "NPTEL - IIT Kharagpur",
    badge: "Elite",
    score: "80%",
    highlight: "Top 5%",
    icon: Trophy,
  },
  {
    title: "Object-Oriented Programming",
    provider: "NPTEL - IIT Roorkee",
    badge: "Elite",
    score: "76%",
    highlight: null,
    icon: Award,
  },
  {
    title: "Mastering Data Structures & Algorithms",
    provider: "Abdul Bari",
    badge: "Certificate",
    score: null,
    highlight: null,
    icon: Award,
  },
  {
    title: "Full-Stack Development for Beginner: React, Next.js, Nodejs",
    provider: "Anton Voroniuk & Dmytro Vasyliev",
    badge: "Certificate",
    score: null,
    highlight: null,
    icon: Award,
  },
  {
    title: "Mastering MYSQL: Database Creation, Management & SQL Queries",
    provider: "Maria EduCare",
    badge: "Certificate",
    score: null,
    highlight: null,
    icon: Award,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my learning journey.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="glass-card p-5 hover-lift flex items-start gap-4"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  index === 0
                    ? "bg-neon-cyan/10"
                    : index === 1
                    ? "bg-neon-purple/10"
                    : "bg-muted"
                }`}
              >
                <cert.icon
                  className={`w-6 h-6 ${
                    index === 0
                      ? "text-neon-cyan"
                      : index === 1
                      ? "text-neon-purple"
                      : "text-muted-foreground"
                  }`}
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-semibold">{cert.title}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      cert.badge === "Elite"
                        ? "bg-neon-cyan/20 text-neon-cyan"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {cert.badge}
                  </span>
                  {cert.highlight && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-neon-purple/20 text-neon-purple">
                      {cert.highlight}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{cert.provider}</p>
                {cert.score && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Score: <span className="text-foreground">{cert.score}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
