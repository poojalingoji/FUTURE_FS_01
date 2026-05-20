import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Web Development Intern",
    company: "Future Interns",
    desc: "Working on real-world full-stack development internship tasks involving production-level projects.",
    current: true,
  },
  {
    role: "Web Development Intern",
    company: "Newgen Software",
    desc: "Completed an internship in web development with hands-on practical exposure to frontend development and web application concepts.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've contributed" subtitle="Internships and hands-on engineering experience.">
      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((e) => (
          <div key={e.role} className="relative glass rounded-2xl p-6 shadow-card group hover:-translate-y-1 transition-transform">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-xl bg-gradient-brand/20 grid place-items-center ring-gradient">
                  <Briefcase className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-semibold">{e.role}</h3>
                  <p className="text-sm text-muted-foreground">{e.company}</p>
                </div>
              </div>
              {e.current && (
                <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-gradient-brand text-primary-foreground font-semibold">
                  Now
                </span>
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
