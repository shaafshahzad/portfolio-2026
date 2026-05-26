const links = [
  { label: "Email", href: "mailto:shaaf.m.shahzad@gmail.com" },
  { label: "GitHub", href: "https://github.com/shaafshahzad" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shaafshahzad/" },
];

const highlights = [
  {
    title: "ECCC Forecast Pages",
    text: "Modernized high-traffic city location pages and centralized Vuex forecast fetching for pages serving up to 40M+ monthly visits.",
    meta: "Vue • Vuex • Python • 75% faster data fetches",
  },
];

const projects = [
  {
    name: "DeepEnd",
    href: "https://github.com/shaafshahzad/DeepEnd",
    description:
      "Self-learning copilot using project-based learning, built with TypeScript, Next.js, Firebase, Tailwind, and the OpenAI API.",
    detail:
      "Won McMasterU Google Solutions Challenge and separated auth state from UI through reusable hooks.",
  },
  {
    name: "Geography Gauntlet",
    href: "https://geogauntlet.vercel.app/",
    description:
      "Interactive geography games with optimized data retrieval and dynamic content management.",
    detail:
      "Used TypeScript, React, PostgreSQL, Drizzle, tRPC, and Clerk; improved query performance by 17%.",
  },
  {
    name: "Intellex",
    href: "https://github.com/shaafshahzad/intellex",
    description:
      "DeltaHacks X winning decentralized skill-sharing platform for exchanging and teaching skills.",
    detail: "Built with TypeScript, Next.js, Firebase, Tailwind, and OpenAI API integrations.",
  },
  {
    name: "Spotify Music Display",
    href: "https://github.com/shaafshahzad/SpotifyMusicDisplay",
    description:
      "A polished display for currently playing Spotify tracks with generated visual backgrounds.",
    detail: "Built with TypeScript, Next.js, Tailwind, and the Spotify API.",
  },
];

const experience = [
  {
    role: "Software Developer Intern",
    org: "Environment and Climate Change Canada",
    period: "May 2025 - Aug. 2026",
    location: "Toronto, ON",
    bullets: [
      "Shipped features across 15+ Vue components for city location pages receiving up to 40M+ monthly visits.",
      "Reduced forecast data fetch times by 75% with a centralized Vuex fetching and caching module.",
      "Expanded Python monitoring across 3 environments, 27 hosts, and 58 backend/frontend paths.",
      "Maintained GitLab branch, preview, and merge-request workflows for parallel development.",
    ],
  },
  {
    role: "Nationwide Donor Relations Volunteer",
    org: "Islamic Relief Canada",
    period: "Sep. 2019 - Jun. 2023",
    location: "Burlington, ON",
    bullets: [
      "Coordinated recurring nationwide donor mail distributions for monthly outreach campaigns.",
      "Cleaned donor records and reduced returned mail by 20% by removing duplicate and outdated entries.",
    ],
  },
];

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Node.js",
  "Python",
  "C/C++",
  "SQL",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Docker",
  "Git",
  "Tailwind CSS",
];

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero section-shell" id="intro">
        <p className="kicker">Portfolio 2026</p>
        <h1>Shaaf Shahzad</h1>
        <p className="subhead">
          Computer Engineering student at Toronto Metropolitan University,
          building practical software across web, AI, data, and developer
          workflow.
        </p>
        <p className="intro-copy">
          I like small, fast interfaces, clear systems, and projects that make
          technical work easier for real users. Currently focused on software
          engineering, full-stack development, and infrastructure-minded
          automation.
        </p>
        <div className="contact-line" aria-label="Contact links">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <p className="email-line">Email: shaaf.m.shahzad@gmail.com</p>
      </section>

      <section className="section-shell" id="projects">
        <SectionHeading eyebrow="01" title="Projects / Highlights" />
        <div className="highlight-list">
          {highlights.map((highlight) => (
            <article className="entry compact" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
              <span>{highlight.meta}</span>
            </article>
          ))}
        </div>

        <div className="project-list" aria-label="Selected projects">
          {projects.map((project) => (
            <article className="entry" key={project.name}>
              <div className="entry-title">
                <h3>{project.name}</h3>
                <a href={project.href}>view</a>
              </div>
              <p>{project.description}</p>
              <p className="muted">{project.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="experience">
        <SectionHeading eyebrow="02" title="Experience" />
        <div className="timeline">
          {experience.map((item) => (
            <article className="entry" key={`${item.org}-${item.role}`}>
              <div className="entry-title">
                <div>
                  <h3>{item.role}</h3>
                  <p className="org">{item.org}</p>
                </div>
                <p className="date">
                  {item.period}
                  <br />
                  {item.location}
                </p>
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="education">
        <SectionHeading eyebrow="03" title="Education" />
        <article className="entry">
          <div className="entry-title">
            <div>
              <h3>Toronto Metropolitan University</h3>
              <p className="org">Bachelor of Engineering, Computer Engineering</p>
            </div>
            <p className="date">
              Sep. 2022 - May 2027
              <br />
              Toronto, ON
            </p>
          </div>
          <p>
            Relevant coursework: Operating Systems, Advanced Algorithms,
            Database Systems, Software Design and Architecture.
          </p>
        </article>
      </section>

      <section className="section-shell final-section" id="stack">
        <SectionHeading eyebrow="04" title="Stack" />
        <div className="stack-list">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
