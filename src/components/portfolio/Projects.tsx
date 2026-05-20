import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Car Price Analysis using Power BI",
    desc: "Interactive Power BI dashboard analyzing car pricing trends with data cleaning and visualization of insights.",
    tech: ["Power BI", "Data Analytics", "Visualization"],
    accent: "from-blue-500/30 to-cyan-500/20",
  },
  {
    title: "AI Radiology Report Generation",
    desc: "AI healthcare project using Vision Transformer (ViT) to automatically generate radiology reports with Streamlit integration.",
    tech: ["Python", "Vision Transformer", "AI", "Streamlit", "ML"],
    accent: "from-purple-500/30 to-pink-500/20",
  },
  {
    title: "Food Calorie Prediction System",
    desc: "ANN-based machine learning web app to predict food calorie values built with Python and Streamlit.",
    tech: ["Python", "ANN", "TensorFlow", "ML", "Streamlit"],
    accent: "from-emerald-500/30 to-teal-500/20",
  },
  {
    title: "Bus Schedule & Route Management",
    desc: "Ongoing deep learning project focused on smart transportation automation and route optimization.",
    tech: ["Python", "Deep Learning", "AI"],
    accent: "from-amber-500/30 to-orange-500/20",
  },
  {
    title: "Professional Portfolio Website",
    desc: "Full-stack recruiter-ready portfolio website built as part of the Future Interns internship task.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    accent: "from-indigo-500/30 to-violet-500/20",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work" subtitle="A few projects spanning AI, ML, data analytics, and full-stack development.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group relative glass rounded-2xl overflow-hidden shadow-card hover:-translate-y-1 transition-all">
            <div className={`h-32 bg-gradient-to-br ${p.accent} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white_1px,transparent_1px)] [background-size:18px_18px] opacity-20" />
              <div className="absolute bottom-3 left-4 font-display font-bold text-lg drop-shadow">
                {p.title.split(" ").slice(0, 2).join(" ")}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-md border border-border bg-secondary/40">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2">
                <a href="https://github.com/poojalingoji" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg glass hover:bg-secondary transition-colors">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gradient-brand text-primary-foreground hover:scale-[1.03] transition-transform">
                  <ExternalLink className="h-3.5 w-3.5" /> Details
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
