
import { SectionHeading } from "@/components/SectionHeading";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive and interactive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Developing APIs and application logic.",
    skills: [
      "Go",
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Database",
    description:
      "Working with relational and managed data services.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Firebase",
    ],
  },
  {
    number: "04",
    title: "Tools & Other",
    description:
      "Supporting development, testing, and integration.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Python",
      "MediaPipe",
      "KNN",
    ],
  },
] as const;

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-space bg-background"
    >
      <div className="container-page">
        <SectionHeading
          id="skills-heading"
          eyebrow="Technical expertise"
          title="Technologies I work with"
          description="Tools and technologies used across my professional experience, training, and personal projects."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[22px] border border-line bg-white p-7 transition-colors duration-200 hover:border-blue-200 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {group.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-7 text-muted">
                    {group.description}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-accent"
                >
                  {group.number}
                </span>
              </div>

              <ul
                aria-label={`${group.title} technologies`}
                className="mt-7 flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-line bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-subtle">
          My featured projects provide practical examples
          of how I have applied these technologies.
        </p>
      </div>
    </section>
  );
}
