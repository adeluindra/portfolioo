
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "DevJourney — Case Study | Moh Syafiq Ade Luwindra",
  description:
    "Explore DevJourney, a local full-stack learning tracker built with React, TypeScript, Go, and PostgreSQL.",
};

const technologies = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "Go",
  "PostgreSQL",
  "Docker",
] as const;

const screenshots = [
  {
    number: "01",
    title: "Topics Management",
    label: "Learning Library",
    description:
      "Organize learning topics using search, category filtering, and CRUD operations.",
    image: "/images/projects/devjourney-topics.png",
    alt: "DevJourney Topics page with category filters, learning topics, and edit and delete actions",
  },
  {
    number: "02",
    title: "Study Sessions",
    label: "Learning History",
    description:
      "Record study duration and optional notes, then review sessions in chronological order.",
    image: "/images/projects/devjourney-sessions.png",
    alt: "DevJourney Study Sessions page displaying recorded learning activities, duration, and notes",
  },
  {
    number: "03",
    title: "Learning Insights",
    label: "Learning Analytics",
    description:
      "Review cumulative study time, session counts, average duration, and topic-level learning distribution.",
    image: "/images/projects/devjourney-insights.png",
    alt: "DevJourney Learning Insights page showing study metrics and topic distribution",
  },
] as const;

const architecture = [
  {
    title: "Frontend",
    technology: "React + TypeScript",
    description:
      "Responsive interfaces, client-side routing, and asynchronous API state management.",
  },
  {
    title: "Backend",
    technology: "Go HTTP API",
    description:
      "JSON endpoints, request validation, application logic, and structured error responses.",
  },
  {
    title: "Database",
    technology: "PostgreSQL",
    description:
      "Relational data storage for learning topics, categories, and study sessions.",
  },
] as const;

const endpoints = [
  ["GET", "/api/topics", "Retrieve learning topics"],
  ["POST", "/api/topics", "Create a learning topic"],
  ["PUT", "/api/topics/{id}", "Update a topic"],
  ["DELETE", "/api/topics/{id}", "Delete a topic"],
  ["GET", "/api/study-sessions", "Retrieve study sessions"],
  ["POST", "/api/study-sessions", "Record a study session"],
  ["GET", "/api/stats", "Retrieve learning statistics"],
] as const;

export default function DevJourneyPage() {
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
              Personal Project / Full-Stack Engineering
            </p>

            <h1 className="mt-4 text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-tight tracking-[-0.055em] text-foreground">
              DevJourney
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              A local full-stack learning tracker designed
              to organize study topics, record learning
              sessions, and turn activity data into
              meaningful learning insights.
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

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/adeluindra/devjourney"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                View GitHub Repository
                <span aria-hidden="true">↗</span>
              </a>

              <span className="text-sm text-muted">
                Local application · No public demo
              </span>
            </div>

            {/* MAIN SCREENSHOT */}
            <figure className="mt-12 overflow-hidden rounded-[24px] border border-line bg-[#05091b] shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[1920/902]">
                <Image
                  src="/images/projects/devjourney-dashboard.png"
                  alt="DevJourney Learning Dashboard with total learning time, study session count, topic summary, and recent activities"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 1120px"
                  className="object-contain"
                />
              </div>

              <figcaption className="border-t border-slate-800 bg-[#0f172a] px-6 py-4 text-sm text-slate-300">
                Learning Dashboard — actual screenshot
                from the local DevJourney application.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section
          aria-labelledby="overview-heading"
          className="section-space bg-white"
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
                Turning learning activity into structured progress
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  The Problem
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  Learning across different technologies
                  can become difficult to organize when
                  topics, study durations, and notes are
                  tracked separately.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  The Solution
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  DevJourney combines topic management,
                  study-session tracking, and aggregate
                  statistics into a single local application.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">
                  My Focus
                </h3>

                <p className="mt-3 leading-8 text-muted">
                  Build a practical full-stack application
                  while applying API development, relational
                  database design, frontend integration,
                  input validation, and testing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE WALKTHROUGH */}
        <section
          aria-labelledby="features-heading"
          className="section-space bg-background"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Product Walkthrough
            </p>

            <h2
              id="features-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              The application in action
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-muted">
              Three features captured directly from
              the running application.
            </p>

            <div className="mt-10 space-y-7">
              {screenshots.map((item) => (
                <article
                  key={item.number}
                  className="grid overflow-hidden rounded-[24px] border border-line bg-white lg:grid-cols-[0.75fr_1.25fr]"
                >
                  <div className="flex flex-col justify-center p-6 sm:p-9">
                    <p className="text-sm font-bold text-accent">
                      {item.number} / {item.label}
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

                  <div className="relative aspect-[1920/902] min-h-[200px] bg-[#05091b]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 650px"
                      className="object-contain"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM ARCHITECTURE */}
        <section
          aria-labelledby="architecture-heading"
          className="section-space bg-white"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Engineering / System Design
            </p>

            <h2
              id="architecture-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              From frontend to database
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-muted">
              The application separates the React
              interface, Go backend, and PostgreSQL
              database into clear responsibilities.
            </p>

            <div className="mt-9 rounded-[24px] bg-[#0b1425] p-5 sm:p-8">
              <div className="grid gap-4 md:grid-cols-3">
                {architecture.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/15 bg-white/5 p-6"
                  >
                    <p className="text-sm font-bold text-emerald-300">
                      0{index + 1}
                    </p>

                    <h3 className="mt-4 text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-blue-200">
                      {item.technology}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-7 text-center text-xs font-medium text-slate-300">
                React UI → Go REST API → PostgreSQL
              </p>
            </div>
          </div>
        </section>

        {/* API ENDPOINTS */}
        <section
          aria-labelledby="api-heading"
          className="section-space bg-background"
        >
          <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Backend Development
              </p>

              <h2
                id="api-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-foreground"
              >
                REST API Design
              </h2>

              <p className="mt-4 leading-8 text-muted">
                The Go backend provides endpoints for
                learning topics, study sessions, and
                cumulative learning statistics.
              </p>
            </div>

            <div className="overflow-hidden rounded-[20px] border border-line bg-white">
              <div className="border-b border-line bg-slate-50 px-6 py-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Selected API Endpoints
                </h3>
              </div>

              <ul className="divide-y divide-line">
                {endpoints.map(([method, path, description]) => (
                  <li
                    key={`${method}-${path}`}
                    className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <span
                      className={`w-fit rounded-md px-2 py-1 text-xs font-bold ${
                        method === "GET"
                          ? "bg-blue-50 text-blue-700"
                          : method === "DELETE"
                          ? "bg-red-50 text-red-700"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {method}
                    </span>

                    <div className="min-w-0">
                      <code className="break-all text-sm font-semibold text-foreground">
                        {path}
                      </code>

                      <p className="mt-1 text-xs text-muted">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ENGINEERING PRACTICES */}
        <section
          aria-labelledby="engineering-heading"
          className="section-space bg-white"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Engineering Practices
            </p>

            <h2
              id="engineering-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              More than a visual dashboard
            </h2>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Validation",
                  description:
                    "Input validation and structured API errors help reject invalid topic and study-session data.",
                },
                {
                  title: "Data Consistency",
                  description:
                    "Relational database constraints support consistency between categories, topics, and sessions.",
                },
                {
                  title: "Testing",
                  description:
                    "The repository includes Go backend tests and frontend tests using Vitest.",
                },
              ].map((practice) => (
                <article
                  key={practice.title}
                  className="rounded-[20px] border border-line bg-background p-7"
                >
                  <h3 className="text-lg font-bold text-foreground">
                    {practice.title}
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-muted">
                    {practice.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STATUS */}
        <section className="section-space bg-background">
          <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Project Status
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
                Local-first development
              </h2>
            </div>

            <div>
              <p className="leading-8 text-muted">
                DevJourney currently runs as a local
                development application. It does not
                include user authentication or a
                public production deployment.
              </p>

              <p className="mt-5 leading-8 text-muted">
                A future deployment would require
                reviewing authentication, authorization,
                environment configuration, and database
                security before exposing the API publicly.
              </p>

              <a
                href="https://github.com/adeluindra/devjourney"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-ring"
              >
                Explore the source code ↗
              </a>
            </div>
          </div>
        </section>

        {/* BACK TO PROJECTS */}
        <section className="border-t border-line bg-white py-12">
          <div className="container-page">
            <Link
              href="/#projects"
              className="text-sm font-semibold text-accent hover:underline focus-ring"
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
