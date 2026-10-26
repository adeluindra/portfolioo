
import Image from "next/image";
import { profile } from "@/data/profile";

const highlights = [
  {
    value: "3",
    label: "Featured case studies",
  },
  {
    value: "Industry",
    label: "Web development internship",
  },
  {
    value: "2025",
    label: "Coding Camp graduate",
  },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      {/* SUBTLE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-8 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-3xl"
      />

      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* INTRODUCTION */}
          <div className="max-w-2xl">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-800 sm:text-sm">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-blue-600"
              />
              Open to junior developer opportunities
            </div>

            <p className="mt-7 text-sm font-semibold text-muted sm:text-base">
              Hello, I&apos;m Moh Syafiq.
            </p>

            <h1
              id="hero-title"
              className="mt-3 text-[clamp(2.75rem,5.2vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.055em] text-foreground"
            >
              Moh Syafiq
              <span className="block text-accent">
                Ade Luwindra.
              </span>
            </h1>

            <p className="mt-5 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {profile.role}
            </p>

            <p className="mt-4 max-w-[560px] text-base leading-8 text-muted sm:text-lg">
              {profile.shortIntro}
            </p>

            {/* PRIMARY ACTIONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="button button-primary w-full sm:w-auto"
              >
                Explore my projects
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#contact"
                className="button button-outline w-full sm:w-auto"
              >
                Contact me
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* SECONDARY LINKS */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={profile.cvUrl}
                download="Moh_Syafiq_Ade_Luwindra_CV.pdf"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline focus-ring"
              >
                Download CV ↗
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-muted underline-offset-4 hover:text-accent hover:underline focus-ring"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="mx-auto w-full max-w-[390px]">
            <div className="overflow-hidden rounded-[28px] border border-line bg-white p-3 shadow-[0_24px_65px_rgba(15,23,42,0.09)]">
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-[20px] bg-slate-100">
                <Image
                  src="/images/profile.jpg"
                  alt="Portrait of Moh Syafiq Ade Luwindra"
                  fill
                  priority
                  sizes="(max-width: 1023px) 390px, 390px"
                  className="object-cover object-[center_28%]"
                />
              </div>

              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-foreground">
                    Moh Syafiq Ade Luwindra
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    Full-Stack Web Development
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-accent"
                >
                  {"</>"}
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Next.js", "Go", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CREDIBILITY HIGHLIGHTS */}
        <dl className="mt-16 grid gap-4 border-t border-line pt-7 sm:grid-cols-3 lg:mt-20">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-baseline gap-3 sm:block"
            >
              <dt className="text-lg font-bold text-foreground sm:text-2xl">
                {item.value}
              </dt>

              <dd className="text-sm leading-6 text-muted sm:mt-2">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
