import { Download, Github, Linkedin, Mail, FolderGit2, Sparkles } from "lucide-react";
import heroImg from "@/assets/pooja-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-brand-purple/25 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3 w-3 text-primary" />
            Available for Software Engineering opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Pooja Lingoji</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            AI &amp; Machine Learning Engineering Student · Software Engineer Aspirant · Full Stack Developer Intern
          </p>
          <p className="mt-5 text-base text-muted-foreground/90 max-w-xl leading-relaxed">
            Artificial Intelligence and Machine Learning engineering student with practical
            experience in AI projects, web development, ML applications, and data analytics.
            Passionate about building impactful technology solutions and continuously learning
            modern software development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-brand text-primary-foreground font-medium shadow-card hover:scale-[1.03] transition-transform">
              <FolderGit2 className="h-4 w-4" /> View Projects
            </a>
            <a href="/Pooja_Lingoji_Resume.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:scale-[1.03] transition-transform">
              <Download className="h-4 w-4" /> Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:scale-[1.03] transition-transform">
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a href="https://github.com/poojalingoji" target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex items-center justify-center h-11 w-11 rounded-xl glass hover:scale-[1.05] transition-transform">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/poojalingoji" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center h-11 w-11 rounded-xl glass hover:scale-[1.05] transition-transform">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "8.3", v: "CGPA" },
              { k: "5+", v: "Projects" },
              { k: "9+", v: "Certifications" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-6 bg-gradient-brand opacity-40 blur-2xl rounded-full" />
            <div className="relative ring-gradient rounded-3xl overflow-hidden glass animate-float">
              <img
                src={heroImg}
                alt="Pooja Lingoji"
                width={1024}
                height={1024}
                className="w-full h-auto block"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 shadow-card">
              <div className="text-xs text-muted-foreground">Currently</div>
              <div className="text-sm font-semibold">3rd Year · BGMIT</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 shadow-card">
              <div className="text-xs text-muted-foreground">Focus</div>
              <div className="text-sm font-semibold">AI · ML · Full Stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
