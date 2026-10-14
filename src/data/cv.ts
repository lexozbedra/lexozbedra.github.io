// Содержимое CV. Правится здесь, страница /cv собирается из этих данных.

export type Role = {
  title: string;
  team?: string;
  period: string;
  summary?: string;
  bullets: string[];
};

export type Employer = {
  name: string;
  /** Одна строка для иностранного читателя: что это за компания */
  about: string;
  roles: Role[];
};

export const experience: Employer[] = [
  {
    name: "Avito",
    about: "Russia's largest online classifieds platform",
    roles: [
      {
        title: "Analytics Engineer",
        team: "TCT & OrgDev Analytics",
        // TODO: уточнить дату окончания
        period: "Mar 2026 – ???",
        summary:
          "Part of the team behind analytics for the employee journey: performance review, goal setting, office analytics, education and development. The only analytics engineer on the team, responsible for the whole data transformation layer of the domain – from receiving data from source systems to delivering data marts for dashboards and research.",
        bullets: [
          "Led the Office Utilisation Analytics project: analysed data sources, built data marts and dashboards, worked with several stakeholders.",
          "Built data marts for key HR processes: performance review, talent review, calibration, internal education, personal development plans.",
          "Built and improved data transformation pipelines in the HR data warehouse: loaded data into the RAW layer via CDC and other methods, then moved it up to the ODS and DDS layers.",
          "Migrated legacy data sources to modern ones.",
          "On duty in several HR data warehouse support channels.",
        ],
      },
      {
        title: "Junior BI Developer",
        team: "Recruitment & Onboarding Analytics",
        period: "Sep 2025 – Mar 2026",
        summary:
          "Part of the team providing data insights for HR leaders (Head of Onboarding, Head of Non-tech Recruitment and others), owning the onboarding analytics stream.",
        bullets: [
          "Designed, built and iterated on onboarding KPI dashboards (checklists, manager engagement, mini-360 feedback), including the data marts behind them and engineering integrations with my former team.",
          "Handled ad-hoc analytical requests that supported the onboarding team's operational decisions.",
          "Researched the onboarding process to uncover trends and opportunities.",
        ],
      },
      {
        title: "Intern Analytics Engineer",
        team: "HR data warehouse (sensitive domains: HR, Legal, Procurement, Finance)",
        period: "Mar 2025 – Sep 2025",
        summary:
          "Led the development of a data warehouse and reporting system for the Legal department.",
        bullets: [
          "Held stakeholder meetings to gather and define requirements.",
          "Created the first dashboard wireframes and designs.",
          "Designed and built data pipelines from source systems (Jira and others).",
          "Modelled and populated the warehouse layers: Raw, ODS, data marts.",
          "Built and delivered the final BI dashboards, incorporating user feedback.",
        ],
      },
    ],
  },
  {
    name: "Navicon",
    about: "IT consulting and systems integration company",
    roles: [
      {
        title: "Junior DWH/BI Analyst",
        period: "Dec 2024 – Mar 2025",
        summary: "Worked on two projects for different client companies.",
        bullets: [
          "Implemented and tested a Greenplum-based data warehouse for an external client and developed visual reporting.",
          "Audited a client's data warehouse and reporting: interviews, requirements analysis and recommendations for improving the existing infrastructure.",
        ],
      },
    ],
  },
  {
    name: "Tinkoff Bank (now T-Bank)",
    about: "One of Russia's largest digital banks",
    roles: [
      {
        title: "Intern DWH/BI Analyst",
        team: "Data Discovery (Center of Excellence)",
        period: "Jul 2024 – Oct 2024",
        bullets: [
          "Developed a tool that automatically generates interactive dashboards for business process analysis using process mining.",
        ],
      },
    ],
  },
  {
    name: "ITMO University",
    about: "Leading Russian technical university",
    roles: [
      {
        title: "Data Scientist / Analyst (Research Intern)",
        period: "Sep 2023 – Jun 2024",
        bullets: [
          "Development of libraries for advanced machine learning methods.",
          "Development of a continuous education platform using machine learning.",
        ],
      },
    ],
  },
];

export const education = {
  school: "ITMO University",
  about: "Leading Russian technical university",
  degree: "Bachelor's",
  field: "Digital Humanities (Artificial Intelligence in Humanities)",
  period: "Sep 2022 – Jul 2027",
  note: "Expected graduation: July 2027",
};

export const skills: { label: string; items: string }[] = [
  { label: "Programming", items: "Python, C#, Java, Kotlin" },
  { label: "SQL", items: "PostgreSQL (Greenplum), ClickHouse, Trino, Vertica" },
  { label: "Data engineering", items: "Apache Airflow, dbt, Apache Kafka, Amazon S3" },
  { label: "BI", items: "Redash, Apache Superset, Tableau, Pyramid" },
  { label: "Tools", items: "Git, Docker, Bash" },
  { label: "Also", items: "Web (React), Android (Jetpack Compose), math statistics, machine learning" },
  { label: "Languages", items: "English (C1)" },
];

export const competitions = [
  {
    name: "Yandex Cup 2024",
    result: "Finalist, Analytics",
    about: "Yandex's annual programming and analytics championship",
  },
];
