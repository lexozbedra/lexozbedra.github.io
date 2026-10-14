import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/about", label: "About" },
  { to: "/cv", label: "CV" },
];

export default function Header() {
  return (
    <header className="no-print">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight text-ink"
          aria-label="Viktoriia Rudnikova, home"
        >
          Viktoriia Rudnikova
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                [
                  "font-display rounded-full px-3 py-1.5 text-base transition-colors",
                  isActive ? "bg-ink text-bg" : "text-muted hover:text-ink",
                ].join(" ")
              }
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
