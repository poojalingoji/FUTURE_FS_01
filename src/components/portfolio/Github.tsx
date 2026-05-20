import { Section } from "./Section";
import { Github as GithubIcon } from "lucide-react";

const USER = "poojalingoji";

export function GithubSection() {
  return (
    <Section id="github" eyebrow="Open Source" title="My GitHub" subtitle="A live snapshot of contributions, top languages, and activity.">
      <div className="glass rounded-2xl p-6 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="h-12 w-12 rounded-xl bg-gradient-brand/20 grid place-items-center ring-gradient">
              <GithubIcon className="h-6 w-6 text-primary" />
            </span>
            <div>
              <h3 className="font-semibold">@{USER}</h3>
              <p className="text-xs text-muted-foreground">github.com/{USER}</p>
            </div>
          </div>
          <a href={`https://github.com/${USER}`} target="_blank" rel="noreferrer" className="text-xs px-4 py-2 rounded-lg bg-gradient-brand text-primary-foreground font-medium hover:scale-[1.03] transition-transform">
            Visit profile
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&hide_border=true&bg_color=00000000&title_color=a78bfa&icon_color=60a5fa&text_color=cbd5e1`}
            alt="GitHub Stats"
            loading="lazy"
            className="w-full rounded-xl"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USER}&layout=compact&hide_border=true&bg_color=00000000&title_color=a78bfa&text_color=cbd5e1`}
            alt="Top Languages"
            loading="lazy"
            className="w-full rounded-xl"
          />
        </div>
        <img
          src={`https://github-readme-streak-stats.herokuapp.com?user=${USER}&hide_border=true&background=00000000&stroke=a78bfa&ring=a78bfa&fire=60a5fa&currStreakLabel=a78bfa&sideLabels=cbd5e1&currStreakNum=ffffff&sideNums=ffffff&dates=94a3b8`}
          alt="GitHub Streak"
          loading="lazy"
          className="w-full rounded-xl mt-4"
        />
      </div>
    </Section>
  );
}
