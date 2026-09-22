import type { Metadata } from "next";
import Link from "next/link";
import ThemeSelect from "../theme-select";

export const metadata: Metadata = { title: "Blog · Shaaf Shahzad" };

const entries = [
  {
    number: "01",
    title: "shaaf shahzad",
    href: "/blog/shaaf-shahzad",
    date: "september 1, 2026",
    dateTime: "2026-09-01",
    description: "a short introduction to who i am beyond the projects.",
  },
  {
    number: "02",
    title: "fresh first",
    href: "/blog/fresh-first",
    date: "september 22, 2026",
    dateTime: "2026-09-22",
    description:
      "building a fridge expiry tracker and low-power e-paper display.",
  },
];

export default function Blog() {
  return (
    <main className="blog-page">
      <div className="blog-toolbar">
        <Link className="back-link" href="/">
          ← back home
        </Link>
        <ThemeSelect />
      </div>
      <h1>blog</h1>
      <ol className="blog-list">
        {entries.map((entry) => (
          <li key={entry.href}>
            <Link href={entry.href}>
              <span className="blog-entry-line">
                <span className="blog-entry-number" aria-hidden="true">
                  {entry.number}
                </span>
                <span>{entry.title}</span>
                <span className="blog-entry-separator" aria-hidden="true">
                  ·
                </span>
                <time className="blog-entry-date" dateTime={entry.dateTime}>
                  {entry.date}
                </time>
              </span>
              <span aria-hidden="true">→</span>
            </Link>
            <p>{entry.description}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
