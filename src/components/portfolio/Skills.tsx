import { Section } from "./Section";
import { Code, Cpu, Brain, Globe, Database, Wrench, HeartHandshake } from "lucide-react";

const groups = [
  { icon: Code, title: "Languages", items: ["Python", "Java", "C", "JavaScript"] },
  { icon: Cpu, title: "Core CS", items: ["Data Structures & Algorithms", "DBMS", "OOP"] },
  { icon: Brain, title: "AI / ML", items: ["Artificial Intelligence", "Machine Learning", "NLP", "Deep Learning", "Vision Transformer", "ANN"] },
  { icon: Globe, title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Node.js", "Express.js"] },
  { icon: Database, title: "Databases", items: ["MongoDB", "MySQL", "Firebase"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code", "Power BI", "Google AI Studio", "Streamlit", "Cloud tools"] },
  { icon: HeartHandshake, title: "Soft Skills", items: ["Problem-solving", "Analytical thinking", "Teamwork", "Communication", "Quick learner"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & technologies I work with" subtitle="A blend of AI/ML depth and modern full-stack engineering.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div key={g.title} className="group glass rounded-2xl p-5 shadow-card hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-10 w-10 rounded-xl bg-gradient-brand/20 grid place-items-center ring-gradient group-hover:glow transition-shadow">
                <g.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-secondary/60 border border-border text-secondary-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
