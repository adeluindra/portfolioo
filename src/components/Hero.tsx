
import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-blue-600"
            />
            Open to junior developer opportunities
          </p>

          <p className="mb-4 text-base font-medium text-muted">
            Hello, I'm a developer who enjoys solving
            practical problems 👋
          </p>

          <h1
            id="hero-title"
            className="max-w-[18ch] text-[clamp(2.5rem,5vw,4rem)] leading-[1.11] font-bold tracking-[-0.055em] text-foreground"
          >
            Moh Syafiq{" "}
            <span className="text-accent">
              Ade Luwindra.
            </span>
          </h1>

          <p className="mt-5 text-lg font-semibold text-foreground">
            {profile.role}
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-muted sm:text-lg">
            {profile.shortIntro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="button button-primary w-full sm:w-auto"
            >
              View Projects
              <span aria-hidden="true">→</span>
            </a>

            <a
              href={profile.cvUrl}
              download="Moh_Syafiq_Ade_Luwindra_CV.pdf"
              className="button button-outline w-full sm:w-auto"
            >
              Download CV
              <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-muted">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-accent hover:underline focus-ring"
            >
              GitHub ↗
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="underline-offset-4 transition-colors hover:text-accent hover:underline focus-ring"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="overflow-hidden rounded-[32px] border border-line bg-white p-3 shadow-[0_24px_90px_rgba(15,23,42,0.10)]">
            <div className="relative aspect-[4/4.2] overflow-hidden rounded-[24px] bg-slate-100">
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Moh Syafiq Ade Luwindra"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-[center_28%] grayscale-[25%]"
              />
            </div>

            <div className="flex items-center justify-between gap-2 px-2 pb-1 pt-4">
              <div>
                <p className="text-sm font-bold text-foreground">
                  Moh Syafiq Ade Luwindra
                </p>

                <p className="mt-1 text-xs text-muted">
                  Full-Stack Web Development
                </p>
              </div>

              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-accent"
              >
                {"</>"}
              </span>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-line bg-white px-5 py-3 shadow-sm">
            <p className="text-xs text-subtle">
              Primary stack
            </p>

            <p className="mt-1 text-sm font-semibold text-foreground">
              Next.js · TypeScript · Laravel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
