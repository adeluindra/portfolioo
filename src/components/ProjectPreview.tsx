
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";
import { MotionCard } from "@/components/MotionCard";
import { SectionHeading } from "@/components/SectionHeading";

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
          title="Projects I've worked on"
          description="Four case studies showcasing web development, machine learning integration, and full-stack engineering."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const visibleTechnologies =
              project.technologies.slice(0, 4);

            const remainingTechnologies =
              project.technologies.length -
              visibleTechnologies.length;

            const coverBackground =
              project.slug === "parentcare"
                ? "bg-[#fff1eb]"
                : project.slug === "stockguard"
                  ? "bg-white"
                  : "bg-[#080e1f]";

            return (
              <MotionCard
                key={project.slug}
                index={index}
                hoverY={-7}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white transition-[border-color,box-shadow] duration-200 hover:border-blue-200 hover:shadow-[0_22px_55px_rgba(15,23,42,0.1)]"
              >
                {/* PROJECT SCREENSHOT */}
                <div
                  className={`relative aspect-[16/9] overflow-hidden ${coverBackground}`}
                >
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={
                        project.coverAlt ??
                        `${project.title} application screenshot`
                      }
                      fill
                      sizes="(max-width: 767px) 100vw, 560px"
                      className={`${
                        project.coverFit === "cover"
                          ? "object-cover object-left-top"
                          : "object-contain"
                      } transition-transform duration-300 group-hover:scale-[1.02]`}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-6">
                      <p className="text-center text-2xl font-bold text-white">
                        {project.title}
                      </p>
                    </div>
                  )}
                </div>

                {/* PROJECT DETAILS */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
                    {project.label}
                  </p>

                  <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-slate-600">
                    {project.highlight}
                  </p>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-muted">
                    {project.summary}
                  </p>

                  {/* TECH STACK */}
                  <ul
                    aria-label={`${project.title} technologies`}
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {visibleTechnologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-lg border border-line bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {technology}
                      </li>
                    ))}

                    {remainingTechnologies > 0 && (
                      <li className="rounded-lg bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-700">
                        +{remainingTechnologies} more
                      </li>
                    )}
                  </ul>

                  {/* ACTIONS */}
                  <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-line pt-5 [margin-top:1.5rem]">
                    {project.caseStudyPath && (
                      <Link
                        href={project.caseStudyPath}
                        aria-label={`Read ${project.title} case study`}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-100 focus-ring"
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
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-muted underline-offset-4 hover:text-accent hover:underline focus-ring"
                      >
                        GitHub
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="text-xs text-subtle">
                        Team capstone
                      </span>
                    )}
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
