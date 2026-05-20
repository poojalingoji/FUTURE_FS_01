import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { GithubSection } from "@/components/portfolio/Github";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pooja Lingoji — AI/ML Engineer & Full Stack Developer" },
      { name: "description", content: "Portfolio of Pooja Lingoji — AI & Machine Learning engineering student, software engineer aspirant, and full stack developer. Projects, experience, and contact." },
      { property: "og:title", content: "Pooja Lingoji — AI/ML Engineer & Full Stack Developer" },
      { property: "og:description", content: "AI/ML projects, full-stack engineering, internships, and certifications." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <GithubSection />
      <Contact />
      <Footer />
    </main>
  );
}
