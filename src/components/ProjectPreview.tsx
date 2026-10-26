
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";
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
          title="Featured projects"
          description="Real projects exploring machine learning integration, collaborative product development, and full-stack engineering."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-white transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(15,23,42,0.07)]"
            >
              {/* PROJECT COVER */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0b1020]">
                {project.coverImage ? (
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
                ) : (
                  <div className="flex h-full items-center justify-center p-6">
                    <p className="text-center text-2xl font-bold text-white">
                      {project.title}
                    </p>
                  </div>
                )}

                <span className="absolute left-3 top-3 max-w-[85%] rounded-full border border-white/20 bg-slate-950/90 px-3 py-1.5 text-[11px] font-semibold text-white">
                  {project.label}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-accent">
                  {project.highlight}
                </p>

                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                  {project.summary}
                </p>

                {/* TECH STACK */}
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

                {/* PROJECT LINKS */}
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-5">
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
                    <span className="text-xs text-subtle">
                      Collaborative project
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
