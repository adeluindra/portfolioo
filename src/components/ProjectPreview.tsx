
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";

const backgrounds = [
  "from-blue-100 via-slate-50 to-cyan-100",
  "from-orange-100 via-rose-50 to-amber-100",
  "from-slate-200 via-blue-50 to-teal-100",
] as const;

export function ProjectPreview() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-space bg-white"
    >
      <div className="container-page">
        <SectionHeading
          id="projects-heading"
          eyebrow="Selected work"
          title="Featured projects"
          description="Selected work across real-time recognition, collaborative product development, and backend engineering."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-white transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.07)]"
            >
              {project.coverImage ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0b1020]">
                  <Image
                    src={project.coverImage}
                    alt={
                      project.coverAlt ??
                      `${project.title} application screenshot`
                    }
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 360px"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.025]"
                  />

                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-slate-950/90 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm">
                    {project.label}
                  </span>

                  <span className="absolute bottom-3 right-3 rounded-lg bg-slate-950/85 px-2.5 py-1.5 text-[11px] font-medium text-white">
                    Project screenshot
                  </span>
                </div>
              ) : (
                <div
                  className={`flex aspect-[16/10] flex-col justify-between bg-gradient-to-br p-6 ${backgrounds[index]}`}
                >
                  <p className="w-fit rounded-full border border-white/80 bg-white/75 px-3 py-1 text-xs font-semibold text-slate-600">
                    {project.label}
                  </p>

                  <p className="text-2xl font-bold tracking-tight text-slate-800">
                    {project.title}
                  </p>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>

                <p className="text-sm font-semibold text-accent">
                  {project.highlight}
                </p>

                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                  {project.summary}
                </p>

                <ul
                  aria-label={`${project.title} technology stack`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                  {project.caseStudyPath && (
                    <Link
                      href={project.caseStudyPath}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-ring"
                    >
                      View case study
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent hover:underline focus-ring"
                    >
                      GitHub
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <p className="text-xs text-subtle">
                      Team capstone · Public repository link pending
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-subtle">
          BISINDO Detector and ParentCare feature authentic
          application screenshots. DevJourney visuals will
          be added in the next development checkpoint.
        </p>
      </div>
    </section>
  );
}
