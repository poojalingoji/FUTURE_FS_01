import { GraduationCap, Lightbulb, Users, Zap, Brain, Code2 } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  { icon: Lightbulb, label: "Problem-solving mindset" },
  { icon: Brain, label: "Analytical thinking" },
  { icon: Zap, label: "Quick learner" },
  { icon: Users, label: "Team collaboration" },
  { icon: Code2, label: "Passion for AI innovation" },
];

const education = [
  {
    title: "B.E. in Artificial Intelligence & Machine Learning",
    place: "BGMIT, Mudhol",
    period: "2023 – 2027",
    score: "CGPA: 8.3",
  },
  {
    title: "PUC Science (PCMB)",
    place: "Konnur Pre-University College",
    period: "2020 – 2022",
    score: "79%",
  },
  {
    title: "Schooling (CBSE)",
    place: "Padmavati International School",
    period: "2016 – 2020",
    score: "86.6%",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="A bit about my journey" subtitle="3rd year AI & ML engineering student with a strong interest in software engineering and full-stack development.">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 glass rounded-2xl p-6 shadow-card">
          <h3 className="font-semibold text-lg mb-4">What drives me</h3>
          <ul className="space-y-3">
            {highlights.map((h) => (
              <li key={h.label} className="flex items-center gap-3 text-sm">
                <span className="h-9 w-9 rounded-lg bg-gradient-brand/20 grid place-items-center ring-gradient">
                  <h.icon className="h-4 w-4 text-primary" />
                </span>
                <span>{h.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" /> Education
          </h3>
          <ol className="relative border-l border-border pl-6 space-y-6">
            {education.map((e, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-brand glow" />
                <div className="glass rounded-xl p-4 shadow-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold">{e.title}</h4>
                    <span className="text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{e.place}</p>
                  <p className="text-sm text-gradient font-semibold mt-1">{e.score}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
