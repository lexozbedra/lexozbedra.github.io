import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="no-print mt-24 border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <p className="m-0 text-base text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="m-0 flex flex-wrap gap-x-6 gap-y-1 text-base">
          <a className="prose-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="prose-link" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="prose-link" href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
