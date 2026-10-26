
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "ParentCare — Case Study | Moh Syafiq Ade Luwindra",
  description:
    "Explore ParentCare, a collaborative digital parenting platform developed as a Coding Camp 2025 capstone project.",
  openGraph: {
    title: "ParentCare — Team Capstone Project",
    description:
      "An interactive parenting platform featuring a parenting-style quiz, recommendations, community discussions, and educational articles.",
    type: "article",
  },
};

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Express.js",
  "Supabase",
] as const;

const projectFacts = [
  {
    label: "Project Type",
    value: "Team Capstone",
  },
  {
    label: "Program",
    value: "Coding Camp 2025",
  },
  {
    label: "Focus",
    value: "Full-Stack Development",
  },
] as const;

const gallery = [
  {
    number: "01",
    eyebrow: "Interactive Quiz",
    title: "Parent Match Quiz",
    description:
      "A step-by-step questionnaire that helps users explore parenting approaches. The interface provides answer choices, progress feedback, and clear navigation.",
    image: "/images/projects/parentcare-quiz.png",
    alt:
      "ParentCare Parent Match quiz with multiple-choice questions and progress indicator",
  },
  {
    number: "02",
    eyebrow: "Quiz Results",
    title: "Recommendations & Practical Tips",
    description:
      "After completing the questionnaire, users receive a parenting-style analysis with recommendations and practical suggestions based on their quiz results.",
    image: "/images/projects/parentcare-result.png",
    alt:
      "ParentCare results showing parenting-style analysis, recommendations, and practical tips",
  },
  {
    number: "03",
    eyebrow: "Educational Content",
    title: "Parenting Articles",
    description:
      "A collection of parenting-related articles allows users to explore educational content beyond the quiz experience.",
    image: "/images/projects/parentcare-articles.png",
    alt:
      "ParentCare article page displaying educational content cards",
  },
] as const;

export default function ParentCarePage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* INTRODUCTION */}
        <section className="section-space bg-background">
          <div className="container-page">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-ring"
            >
              ← Back to projects
            </Link>

            <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Coding Camp 2025 · Team Capstone
            </p>

            <h1 className="mt-4 text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-tight tracking-[-0.055em] text-foreground">
              ParentCare
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              A collaborative digital parenting platform
              combining an interactive parenting-style
              quiz, personalized recommendations,
              community discussions, and educational
              content in one web application.
            </p>

            {/* TECHNOLOGY STACK */}
            <ul
              aria-label="ParentCare technology stack"
              className="mt-7 flex flex-wrap gap-2"
            >
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-muted"
                >
                  {technology}
                </li>
              ))}
            </ul>

            {/* PROJECT FACTS */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {projectFacts.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-line bg-white p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-subtle">
                    {item.label}
                  </p>

                  <p className="mt-3 text-lg font-bold text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* HOMEPAGE SCREENSHOT */}
            <figure className="mt-12 overflow-hidden rounded-[24px] border border-line bg-white shadow-sm">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#fff0eb]">
                <Image
                  src="/images/projects/parentcare-home.png"
                  alt="ParentCare homepage presenting a digital parenting support platform and family illustration"
                  fill
                  sizes="(max-width: 767px) 100vw, 1120px"
                  className="object-contain"
                />
              </div>

              <figcaption className="border-t border-line px-6 py-4 text-sm text-muted">
                ParentCare homepage — actual project
                interface.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* PROJECT OVERVIEW */}
        <section
          aria-labelledby="overview-heading"
          className="section-space border-t border-line bg-white"
        >
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Project Overview
              </p>

              <h2
                id="overview-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Supporting parents through digital experiences
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  The Challenge
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  Parenting information, self-assessment
                  resources, and community discussions
                  can be spread across different
                  platforms. ParentCare explores how
                  these experiences can be brought
                  together in a single application.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  The Solution
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  The team developed a web platform
                  featuring the Parent Match quiz,
                  parenting-style result analysis,
                  practical recommendations, an
                  article section, and a community forum.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Project Context
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  ParentCare was developed as a team
                  capstone during Coding Camp 2025,
                  in the Front-End and Back-End
                  Developer learning path.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE WALKTHROUGH */}
        <section
          aria-labelledby="walkthrough-heading"
          className="section-space bg-background"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Feature Showcase
            </p>

            <h2
              id="walkthrough-heading"
              className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Exploring the ParentCare experience
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-muted">
              A closer look at the application's
              key features, using screenshots from
              the original capstone project.
            </p>

            <div className="mt-10 space-y-7">
              {gallery.map((item) => (
                <article
                  key={item.number}
                  className="grid overflow-hidden rounded-[24px] border border-line bg-white lg:grid-cols-[0.8fr_1.2fr]"
                >
                  <div className="flex flex-col justify-center p-6 sm:p-9">
                    <p className="text-sm font-bold text-accent">
                      {item.number} / {item.eyebrow}
                    </p>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
                      {item.description}
                    </p>

                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-fit text-sm font-semibold text-accent hover:underline focus-ring"
                    >
                      Open full screenshot ↗
                    </a>
                  </div>

                  <div className="relative aspect-[16/9] min-h-[220px] bg-[#fff2ee]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 600px"
                      className="object-contain"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM CONTRIBUTION */}
        <section
          aria-labelledby="collaboration-heading"
          className="section-space bg-white"
        >
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Collaboration & Learning
              </p>

              <h2
                id="collaboration-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-foreground"
              >
                Developing ParentCare as a team
              </h2>
            </div>

            <div>
              <p className="leading-8 text-muted">
                I participated in the development of
                ParentCare as part of the Coding Camp
                2025 capstone team. The project
                provided an opportunity to work on a
                web application with multiple connected
                features in a collaborative setting.
              </p>

              <p className="mt-5 leading-8 text-muted">
                The application brings together
                interactive questionnaires, result
                presentation, educational resources,
                and community features. These
                capabilities represent the team's
                collective project work.
              </p>

              <div className="mt-8 rounded-2xl border border-line bg-background p-6">
                <p className="text-sm font-semibold text-foreground">
                  My project involvement
                </p>

                <p className="mt-2 text-sm leading-7 text-muted">
                  Capstone team member in the Front-End
                  and Back-End Developer program,
                  contributing to the collaborative
                  development of ParentCare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BACK TO PROJECTS */}
        <section className="border-t border-line bg-background py-12">
          <div className="container-page">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-ring"
            >
              ← Explore other projects
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
