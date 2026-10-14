import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { site } from "../data/site";
import { competitions, education, experience, skills, type Employer } from "../data/cv";

function EmployerBlock({ employer }: { employer: Employer }) {
  const ladder = employer.roles.length > 1;

  return (
    <article className="print-avoid-break border-t border-rule pb-10 pt-6">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="font-display m-0 text-3xl font-bold tracking-tight">{employer.name}</h3>
        <p className="m-0 text-[1rem] italic text-muted">{employer.about}</p>
      </header>

      <ol className={["m-0 mt-6 list-none space-y-9 p-0", ladder ? "border-l border-rule pl-6 sm:pl-8" : ""].join(" ")}>
        {employer.roles.map((role) => (
          <li key={role.title + role.period} className="relative">
            {ladder && (
              <span
                aria-hidden="true"
                className="absolute -left-[1.9rem] top-[0.7rem] block h-2.5 w-2.5 rounded-full bg-accent-bright sm:-left-[2.4rem]"
                style={{ boxShadow: "0 0 0 4px var(--bg)" }}
              />
            )}
            <div className="flex flex-wrap items-baseline justify-between gap-x-6">
              <h4 className="font-display m-0 text-xl font-semibold">{role.title}</h4>
              <p className="tnum m-0 text-[1rem] text-muted">{role.period}</p>
            </div>
            {role.team && <p className="m-0 text-[1rem] italic text-muted">{role.team}</p>}
            {role.summary && <p className="mb-0 mt-3 text-[1.05rem]">{role.summary}</p>}
            <ul className="mb-0 mt-3 list-disc space-y-1.5 pl-5 text-[1.05rem] marker:text-accent-bright">
              {role.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function CV() {
  useDocumentTitle("CV");

  return (
    <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-8 sm:pt-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display m-0 text-6xl font-extrabold tracking-tight sm:text-8xl" style={{ fontStretch: "80%" }}>
            CV
          </h1>
          <p className="mb-0 mt-3 text-[1.25rem] text-muted">
            {site.name}, {site.role.toLowerCase()}: analytics engineer, BI developer, analyst
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="no-print font-display rounded-full border border-rule px-4 py-2 text-base text-ink transition-colors hover:border-accent-bright hover:text-accent"
        >
          Save as PDF
        </button>
      </div>

      <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <section>
            <h2 className="font-display m-0 text-xl font-bold">Contact</h2>
            <p className="mb-0 mt-3 text-[1.05rem] leading-snug">
              {site.location}
              <br />
              <span className="text-muted">Planning to relocate to Europe</span>
            </p>
            <p className="mb-0 mt-3 space-y-1 text-[1.05rem]">
              <a className="prose-link block break-all" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="prose-link block" href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="prose-link block" href={site.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display m-0 text-xl font-bold">Skills</h2>
            <dl className="m-0 mt-3 divide-y divide-rule border-y border-rule">
              {skills.map((s) => (
                <div key={s.label} className="py-3">
                  <dt className="font-display text-[0.95rem] font-semibold text-accent">{s.label}</dt>
                  <dd className="m-0 text-[1rem] leading-snug">{s.items}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-10">
            <h2 className="font-display m-0 text-xl font-bold">Competitions</h2>
            {competitions.map((c) => (
              <p key={c.name} className="mb-0 mt-3 text-[1.05rem] leading-snug">
                <span className="font-display font-semibold">{c.name}</span>, {c.result.toLowerCase()}
                <br />
                <span className="text-[0.95rem] italic text-muted">{c.about}</span>
              </p>
            ))}
          </section>
        </aside>

        <div>
          <section>
            <h2 className="font-display mb-6 mt-0 text-3xl font-extrabold tracking-tight">Experience</h2>
            {experience.map((e) => (
              <EmployerBlock key={e.name} employer={e} />
            ))}
          </section>

          <section className="print-avoid-break">
            <h2 className="font-display mb-6 mt-6 text-3xl font-extrabold tracking-tight">Education</h2>
            <article className="border-t border-rule pt-6">
              <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display m-0 text-3xl font-bold tracking-tight">{education.school}</h3>
                <p className="m-0 text-[1rem] italic text-muted">{education.about}</p>
              </header>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6">
                <h4 className="font-display m-0 text-xl font-semibold">
                  {education.degree}, {education.field}
                </h4>
                <p className="tnum m-0 text-[1rem] text-muted">{education.period}</p>
              </div>
              <p className="mb-0 mt-2 text-[1.05rem] text-muted">{education.note}</p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
