import { Section } from "./Section";
import { Award } from "lucide-react";

const certs = [
  "NPTEL — Natural Language Processing (67%)",
  "Artificial Intelligence — Adverk Technologies",
  "C Programming — Infosys",
  "Data Structures & Algorithms — Udemy",
  "Qubitathon — Participation",
  "Hackathon — College",
  "Hackathon — Atria University",
  "Debugging Competition — Participation",
  "Quiz Competition — Participation",
];

const achievements = [
  { t: "1st Place", d: "College Debate Competition" },
  { t: "2nd Place", d: "AI Prompt Storm Competition" },
  { t: "3rd Rank", d: "Academic Performance · 3rd Semester" },
  { t: "Participant", d: "Inter-college Hackathons" },
  { t: "Participant", d: "Technical Events & Quizzes" },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Recognition" title="Certifications & achievements" subtitle="Continuous learning and active participation in tech and academic events.">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2"><Award className="h-5 w-5 text-primary" /> Certifications</h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {certs.map((c) => (
              <li key={c} className="glass rounded-xl p-3 text-sm shadow-card hover:-translate-y-0.5 transition-transform">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Achievements</h3>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a.t + a.d} className="glass rounded-xl p-4 shadow-card flex items-center gap-4">
                <div className="text-xl font-display font-bold text-gradient w-24 shrink-0">{a.t}</div>
                <div className="text-sm text-muted-foreground">{a.d}</div>
              </li>
            ))}
          </ul>

          <div className="mt-8 glass rounded-2xl p-5 shadow-card">
            <h3 className="font-semibold mb-2">Leadership & Volunteering</h3>
            <p className="text-sm font-medium">Volunteer · ISRO World Space Week 2023</p>
            <p className="text-sm text-muted-foreground mt-1">
              Volunteered at the ISRO World Space Week event conducted by the Liquid Propulsion Centre, ISRO Bengaluru.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
