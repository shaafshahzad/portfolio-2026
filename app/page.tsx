import Portrait from "./portrait";
import Link from "next/link";
import ThemeSelect from "./theme-select";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shaaf shahzad",
  description: "personal portfolio of shaaf shahzad",
};

const projects = [
  {
    name: "deepend",
    href: "https://github.com/shaafshahzad/DeepEnd",
    description: "a copilot for learning by building.",
  },
  {
    name: "geography gauntlet",
    href: "https://geogauntlet.vercel.app/",
    description: "a little world of geography games.",
  },
  {
    name: "local ai second brain",
    href: "https://github.com/shaafshahzad/local-ai-second-brain",
    description: "a private workspace for searchable, source-grounded knowledge.",
  },
  {
    name: "fresh first",
    href: "https://github.com/shaafshahzad/fresh-first",
    description: "a fridge expiry tracker paired with a low-power e-paper display.",
  },
];

export default function Home() {
  return (
    <main className="portfolio">
      <header className="intro">
        <h1 className="accent-cycle">shaaf shahzad</h1>
        <p>
          computer engineering student at tmu. i build software for the web, ai,
          and the things in between.
        </p>
        <nav className="socials" aria-label="social and contact links">
          <a href="https://github.com/shaafshahzad">github</a>
          <a href="https://www.linkedin.com/in/shaafshahzad/">linkedin</a>
          <a href="https://x.com/shaafmshahzad">x</a>
          <a href="mailto:shaaf.m.shahzad@gmail.com">email</a>
        </nav>
      </header>
      <Portrait />
      <div className="work">
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="accent-cycle">
            experience
          </h2>
          <article className="experience">
            <h3>environment &amp; climate change canada</h3>
            <div className="experience-detail">
              <p className="entry-meta">
                software developer intern · 2025–2026
              </p>
              <div className="experience-points">
                <p>
                  shipped features across 15+ vue components for weather pages
                  serving 40m+ monthly visits.
                </p>
                <p>
                  cut forecast data fetch times by 75% with centralized fetching
                  and caching.
                </p>
                <p>
                  expanded python monitoring across 3 environments, 27 hosts,
                  and 58 application paths.
                </p>
                <p>
                  standardized 15 python monitoring scripts with rotating logs
                  and team alerts.
                </p>
                <p>
                  built a gitlab workflow with feature branches, ci checks,
                  preview branches, and merge requests.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="accent-cycle">
            projects
          </h2>
          <ul className="projects">
            {projects.map((project) => (
              <li key={project.name}>
                <a href={project.href}>
                  {project.name}
                  <span aria-hidden="true">↗</span>
                </a>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <footer className="footer">
        <Link className="blog-link" href="/blog">
          blog <span aria-hidden="true">↗</span>
        </Link>
        <ThemeSelect />
      </footer>
    </main>
  );
}
