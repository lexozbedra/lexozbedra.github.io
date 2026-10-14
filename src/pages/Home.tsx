import { Link } from "react-router-dom";
import Pipeline from "../components/Pipeline";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { site } from "../data/site";

const pointers = [
  { to: "/about", title: "About", text: "Who I am and where I'm heading next." },
  { to: "/cv", title: "CV", text: "Experience, education and skills." },
];

export default function Home() {
  useDocumentTitle();

  return (
    <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-8 sm:pt-14">
      <p className="font-display mb-8 inline-flex items-center gap-3 rounded-full border border-rule py-1.5 pl-3.5 pr-4 text-sm text-ink">
        <span className="pulse-dot relative block h-2.5 w-2.5 rounded-full bg-accent-bright" />
        Open to work, relocating to Europe
      </p>

      <h1 className="name-display m-0">
        {site.firstName}
        <br />
        {site.lastName}
      </h1>

      <p className="mt-8 max-w-[28ch] text-[1.65rem] leading-snug sm:text-[2.1rem]">
        <span className="font-display font-semibold">{site.role}.</span> Analytics engineer, BI developer and
        analyst. I turn messy source data into datasets people can trust.
      </p>

      <div className="mt-14 sm:mt-20">
        <Pipeline />
      </div>

      <nav aria-label="Pages" className="mt-24 grid gap-x-10 gap-y-2 sm:grid-cols-2">
        {pointers.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className="group block border-t border-rule py-6 transition-colors hover:border-accent-bright"
          >
            <span className="font-display block text-4xl font-bold tracking-tight transition-colors group-hover:text-accent sm:text-5xl">
              {p.title}
            </span>
            <span className="mt-2 block text-muted">{p.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
