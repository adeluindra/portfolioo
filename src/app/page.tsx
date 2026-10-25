import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BISINDO Detector — Case Study | Moh Syafiq Ade Luwindra",
  description:
    "A browser-based case study of BISINDO alphabet recognition with MediaPipe Hands, Next.js, TypeScript, and KNN.",
};

const screenshots = [
  {
    src: "/images/projects/bisindo-dashboard.jpg",
    alt: "BISINDO Detector dashboard with a greeting and four steps for recognizing sign language letters",
    title: "Dashboard overview",
    note: "The starting interface introduces the available recognition workflow.",
  },
  {
    src: "/images/projects/bisindo-detection.jpg",
    alt: "Real-time BISINDO detection screen displaying webcam hand landmarks and prediction feedback",
    title: "Real-time detection",
    note: "The camera interface presents hand landmarks and recognition feedback during use.",
  },
] as const;

export default function BisindoCaseStudyPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* PROJECT INTRODUCTION */}
        <section className="bg-background pb-14 pt-14 sm:pb-20 sm:pt-20">
          <div className="container-page">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-ring"
            >
              ← Back to projects
            </Link>

            <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Thesis · Web + Machine Learning
            </p>

            <h1 className="mt-3 max-w-3xl text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.055em] text-foreground">
              BISINDO Detector
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
              A browser-based prototype for recognizing
              Indonesian Sign Language (BISINDO) alphabet
              gestures in real time using webcam hand tracking
              and machine learning.
            </p>

            {/* TECH STACK */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "MediaPipe Hands",
                "KNN",
                "Firebase",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://github.com/adeluindra/bisindo-detector"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                View GitHub repository
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* PROJECT METRICS */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                {
                  metric: "26",
                  label: "alphabet classes",
                },
                {
                  metric: "~91%",
                  label: "reported model evaluation accuracy*",
                },
                {
                  metric: "SLB",
                  label: "field-tested at a special-needs school",
                },
              ].map(({ metric, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-line bg-white p-6"
                >
                  <p className="text-3xl font-bold tracking-tight text-foreground">
                    {metric}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs leading-5 text-subtle">
              * Approximately 91% is the reported model
              evaluation accuracy, not a claim of accuracy
              in unrestricted real-world conditions.
            </p>
          </div>
        </section>

        {/* PROJECT SCREENSHOTS */}
        <section
          aria-labelledby="screenshots-heading"
          className="section-space border-t border-line bg-white"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Authentic interface screenshots
            </p>

            <h2
              id="screenshots-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              From dashboard to live detection
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              Both images come directly from the project.
              They are displayed uncropped to preserve
              the actual interface.
            </p>

            <div className="mt-9 grid gap-8 lg:grid-cols-2">
              {screenshots.map((item) => (
                <figure
                  key={item.src}
                  className="overflow-hidden rounded-[20px] border border-line bg-white shadow-sm"
                >
                  <div className="relative aspect-[16/9] bg-[#0a0d1c]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 550px"
                      className="object-contain p-3"
                    />
                  </div>

                  <figcaption className="p-5 sm:p-6">
                    <p className="text-lg font-bold text-foreground">
                      {item.title}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.note}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL CASE STUDY */}
        <section
          aria-labelledby="approach-heading"
          className="section-space bg-background"
        >
          <div className="container-page grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                How I approached the project
              </p>

              <h2
                id="approach-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-foreground"
              >
                Problem → solution → evaluation
              </h2>
            </div>

            <div className="space-y-7 text-base leading-8 text-muted">
              <div>
                <h3 className="font-bold text-foreground">
                  The problem
                </h3>

                <p className="mt-2">
                  Explore how a browser-based application
                  can recognize BISINDO alphabet gestures
                  from a camera feed.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">
                  The implementation
                </h3>

                <p className="mt-2">
                  Built the web application and hand-tracking
                  workflow with Next.js, TypeScript,
                  MediaPipe Hands, and a KNN classifier
                  for gesture recognition.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">
                  Model evaluation
                </h3>

                <p className="mt-2">
                  Compared KNN, Random Forest, and SVM models,
                  and tested the recognition system at an SLB.
                  The reported classification accuracy was
                  approximately 91%.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-foreground">
                  My contribution
                </h3>

                <p className="mt-2">
                  Developed the browser application and
                  recognition pipeline as part of the thesis
                  project, including model comparison and
                  real-time inference integration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}