
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "ParentCare — Case Study | Moh Syafiq Ade Luwindra",
  description:
    "A case study of ParentCare, a collaborative parenting platform developed during Coding Camp 2025.",
};

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Express.js",
  "Supabase",
] as const;

const gallery = [
  {
    number: "01",
    eyebrow: "Interactive Quiz",
    title: "Parent Match Quiz",
    description:
      "Users answer a series of parenting-related questions through a step-by-step questionnaire. A progress indicator and answer choices guide the interaction.",
    image: "/images/projects/parentcare-quiz.png",
    alt: "ParentCare Parent Match quiz interface showing question 10 of 10, answer choices, and navigation buttons",
  },
  {
    number: "02",
    eyebrow: "Quiz Results",
    title: "Recommendations & Practical Tips",
    description:
      "After completing the quiz, users can explore an analysis of their parenting style, main recommendations, and practical suggestions.",
    image: "/images/projects/parentcare-result.png",
    alt: "ParentCare results screen showing mixed parenting analysis, recommendations, and practical parenting tips",
  },
  {
    number: "03",
    eyebrow: "Educational Content",
    title: "Parenting Articles",
    description:
      "An article listing provides additional content related to parenting and family topics, supporting learning beyond the quiz experience.",
    image: "/images/projects/parentcare-articles.png",
    alt: "ParentCare article page displaying a grid of parenting-related article cards",
  },
] as const;

export default function ParentCarePage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* HERO */}
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
              that combines an interactive parenting-style
              quiz, personalized recommendations,
              community discussions, and educational content.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* PROJECT INFORMATION */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Project Type",
                  value: "Team Capstone",
                },
                {
                  label: "Program",
                  value: "Coding Camp 2025",
                },
                {
                  label: "Development Focus",
                  value: "Front-End & Back-End",
                },
              ].map((item) => (
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

            {/* MAIN SCREENSHOT */}
            <figure className="mt-12 overflow-hidden rounded-[24px] border border-line bg-white shadow-sm">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#fff0eb]">
                <Image
                  src="/images/projects/parentcare-home.png"
                  alt="ParentCare homepage displaying the digital parenting platform introduction and family illustration"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 1120px"
                  className="object-contain"
                />
              </div>

              <figcaption className="border-t border-line px-6 py-4 text-sm text-muted">
                ParentCare homepage — an introduction to
                the parenting consultation platform.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* PROBLEM AND SOLUTION */}
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
                Helping parents explore parenting approaches
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  The Challenge
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  Bring parenting-style exploration,
                  educational materials, and community
                  interaction together in an accessible
                  web experience.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  The Solution
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  ParentCare offers a Parent Match quiz
                  with result analysis and recommendations,
                  an article section, and a community forum
                  as part of one digital platform.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Development Context
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  The application was developed
                  collaboratively as a capstone project
                  in the Front-End and Back-End Developer
                  learning path of Coding Camp 2025.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT WALKTHROUGH */}
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
              From taking a quiz to exploring recommendations
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-muted">
              A walkthrough of the core experience using
              screenshots captured from the original project.
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

        {/* LEARNING CONTEXT */}
        <section
          aria-labelledby="learning-heading"
          className="section-space bg-white"
        >
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Collaboration & Learning
              </p>

              <h2
                id="learning-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-foreground"
              >
                Building a product as a team
              </h2>
            </div>

            <div>
              <p className="leading-8 text-muted">
                ParentCare was developed during Coding
                Camp 2025 powered by DBS Foundation.
                The project brought together frontend
                development, backend functionality,
                and collaborative product development.
              </p>

              <p className="mt-5 leading-8 text-muted">
                The project demonstrates how multiple
                user-facing features can form one
                connected web experience, from account
                access and quiz interactions to result
                presentation and supporting content.
              </p>

              <div className="mt-8 rounded-2xl border border-line bg-background p-6">
                <p className="text-sm font-semibold text-foreground">
                  Project Context
                </p>

                <p className="mt-2 text-sm leading-7 text-muted">
                  Collaborative capstone project.
                  Individual engineering responsibilities
                  should be documented separately to
                  distinguish personal contributions
                  from team contributions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RETURN NAVIGATION */}
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
