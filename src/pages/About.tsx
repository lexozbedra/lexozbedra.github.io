import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { site } from "../data/site";

const stack = [
  {
    label: "Data",
    items:
      "Python, SQL (ClickHouse, Trino, PostgreSQL/Greenplum, Vertica), dbt, Apache Airflow, Kafka, Docker, Git, machine learning",
  },
  { label: "Also", items: "Web development (React), Android development (Kotlin, Jetpack Compose)" },
];

export default function About() {
  useDocumentTitle("About");

  return (
    <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-8 sm:pt-12">
      <h1 className="font-display m-0 text-6xl font-extrabold tracking-tight sm:text-8xl" style={{ fontStretch: "80%" }}>
        About
      </h1>

      <div className="mt-10 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,38rem)_1fr]">
        <div className="grid content-start gap-6">
          <p className="text-[1.45rem] leading-snug sm:text-[1.6rem]">
            I work with data across domains: building the pipelines and warehouse layers that turn raw source
            data into datasets people can trust, and the marts and dashboards on top of them.
          </p>
          <p>
            My path so far: process mining at Tinkoff Bank, data warehouse consulting at Navicon, then HR, legal
            and recruitment analytics at Avito, from intern to the only analytics engineer on the team.
          </p>
          <p>
            I'm finishing a bachelor's in Digital Humanities (Artificial Intelligence in Humanities) at ITMO
            University in 2027, and applying to master's programmes in AI and AI in Business in Europe. I'm planning
            to relocate for it.
          </p>
          <p>
            Outside work I build small things for fun: custom Android apps, websites like this one, the occasional
            drawing or design. I also learn languages.
          </p>
        </div>

        <aside className="lg:pt-2">
          <h2 className="font-display m-0 text-2xl font-bold">What I work with</h2>
          <dl className="mt-4 divide-y divide-rule border-y border-rule">
            {stack.map((s) => (
              <div key={s.label} className="py-4">
                <dt className="font-display text-base font-semibold text-accent">{s.label}</dt>
                <dd className="m-0 mt-1 text-[1.05rem] leading-snug">{s.items}</dd>
              </div>
            ))}
          </dl>

          <h2 className="font-display mb-0 mt-10 text-2xl font-bold">Get in touch</h2>
          <p className="mt-3 space-y-1 text-[1.05rem]">
            <a className="prose-link block" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="prose-link block" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="prose-link block" href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </aside>
      </div>
    </div>
  );
}
