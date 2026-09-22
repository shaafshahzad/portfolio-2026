import Portrait from "./portrait";
import Link from "next/link";
import ThemeSelect from "./theme-select";

const projects = [
  {
    name: "DeepEnd",
    href: "https://github.com/shaafshahzad/DeepEnd",
    description: "A copilot for learning by building.",
  },
  {
    name: "Geography Gauntlet",
    href: "https://geogauntlet.vercel.app/",
    description: "A little world of geography games.",
  },
  {
    name: "Local AI Second Brain",
    href: "https://github.com/shaafshahzad/local-ai-second-brain",
    description: "A private workspace for searchable, source-grounded knowledge.",
  },
  {
    name: "Fresh First",
    href: "https://github.com/shaafshahzad/fresh-first",
    description: "A fridge expiry tracker paired with a low-power e-paper display.",
  },
];

export default function Home() {
  return (
    <main className="portfolio">
      <header className="intro">
        <h1 className="accent-cycle">shaaf shahzad</h1>
        <p>
          Computer engineering student at TMU. I build software for the web, AI,
          and the things in between.
        </p>
        <nav className="socials" aria-label="Social and contact links">
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
            <h3>Environment &amp; Climate Change Canada</h3>
            <div className="experience-detail">
              <p className="entry-meta">
                Software developer intern · 2025–2026
              </p>
              <div className="experience-points">
                <p>
                  Shipped features across 15+ Vue components for weather pages
                  serving 40M+ monthly visits.
                </p>
                <p>
                  Cut forecast data fetch times by 75% with centralized fetching
                  and caching.
                </p>
                <p>
                  Expanded Python monitoring across 3 environments, 27 hosts,
                  and 58 application paths.
                </p>
              </div>
            </div>
          </article>
          <article className="experience">
            <h3>Islamic Relief Canada</h3>
            <div className="experience-detail">
              <p className="entry-meta">
                Donor relations volunteer · 2019–2023
              </p>
              <p className="experience-point">
                Coordinated nationwide donor mail campaigns and cleaned donor
                records, reducing returned mail by 20%.
              </p>
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
