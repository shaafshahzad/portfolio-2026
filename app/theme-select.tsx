"use client";

import { useSyncExternalStore } from "react";

const eventName = "portfolio-theme-change";
const mediaQuery = "(prefers-color-scheme: dark)";
type Theme = "light" | "dark";

function getTheme(): Theme {
  try {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // The system preference remains available if storage is blocked.
  }
  return window.matchMedia(mediaQuery).matches ? "dark" : "light";
}

function subscribe(callback: () => void) {
  const media = window.matchMedia(mediaQuery);
  const sync = () => {
    document.documentElement.dataset.theme = getTheme();
    callback();
  };
  sync();
  window.addEventListener("storage", sync);
  window.addEventListener(eventName, sync);
  media.addEventListener("change", sync);
  return () => {
    window.removeEventListener("storage", sync);
    window.removeEventListener(eventName, sync);
    media.removeEventListener("change", sync);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className={`theme-control ${theme === "dark" ? "is-dark" : "is-light"}`}
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      onClick={() => {
        document.documentElement.dataset.theme = nextTheme;
        try {
          localStorage.setItem("portfolio-theme", nextTheme);
        } catch {
          /* The toggle still works without storage. */
        }
        window.dispatchEvent(new Event(eventName));
      }}
    >
      <svg
        className="theme-icon theme-icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
      <svg
        className="theme-icon theme-icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    </button>
  );
}
