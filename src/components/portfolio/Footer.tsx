import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display font-bold text-lg">
            <span className="text-gradient">Pooja</span>.dev
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Pooja Lingoji. Built with React & Tailwind CSS.
          </p>
        </div>

        <nav className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#experience" className="hover:text-foreground">Experience</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="mailto:poojalingoji@gmail.com" aria-label="Email" className="h-9 w-9 grid place-items-center glass rounded-lg hover:scale-110 transition-transform">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://github.com/poojalingoji" aria-label="GitHub" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center glass rounded-lg hover:scale-110 transition-transform">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/poojalingoji" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center glass rounded-lg hover:scale-110 transition-transform">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
