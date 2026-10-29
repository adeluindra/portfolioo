
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "BISINDO Detector — Case Study | Moh Syafiq Ade Luwindra",
  description:
    "Explore BISINDO Detector, a browser-based Indonesian Sign Language recognition system using Next.js, TypeScript, MediaPipe Hands, and KNN.",
  openGraph: {
    title: "BISINDO Detector — Machine Learning Case Study",
    description:
      "Real-time BISINDO alphabet recognition, interactive learning, and model evaluation.",
    type: "article",
  },
};

const technologies = [
  "Next.js",
  "TypeScript",
  "MediaPipe Hands",
  "KNN",
  "Firebase",
] as const;

const metrics = [
  {
    value: "26",
    label: "Alphabet classes",
  },
  {
    value: "~91%",
    label: "Reported model evaluation accuracy",
  },
  {
    value: "SLB",
    label: "Field-tested at a special-needs school",
  },
] as const;

const architecture = [
  {
    number: "01",
    title: "Camera Input",
    description:
      "Capture hand gestures through the user's webcam.",
  },
  {
    number: "02",
    title: "MediaPipe Hands",
    description:
      "Detect hand landmarks from incoming camera frames.",
  },
  {
    number: "03",
    title: "Feature Extraction",
    description:
      "Transform hand landmarks and joint angles into a feature representation.",
  },
  {
    number: "04",
    title: "KNN Classification",
    description:
      "Classify extracted features into BISINDO alphabet classes.",
  },
  {
    number: "05",
    title: "Prediction Feedback",
    description:
      "Display recognized letters and feedback in the interface.",
  },
  {
    number: "06",
    title: "Firebase Integration",
    description:
      "Support the application's data management features.",
  },
] as const;

const screenshots = [
  {
    number: "01",
    category: "User Experience",
    title: "Learning Dashboard",
    description:
      "The main dashboard provides access to real-time detection, interactive practice, learning history, and model evaluation.",
    image: "/images/projects/bisindo-user-dashboard.png",
    alt: "BISINDO Detector user dashboard showing four application modules",
  },
  {
    number: "02",
    category: "Core Feature",
    title: "Real-Time Sign Language Detection",
    description:
      "MediaPipe Hands tracks hand landmarks from the webcam while the recognition pipeline displays predicted alphabet letters and real-time feedback.",
    image: "/images/projects/bisindo-realtime-detection.png",
    alt: "BISINDO Detector identifying the letter L from a webcam image with hand landmarks",
  },
  {
    number: "03",
    category: "Interactive Learning",
    title: "Practice with Target Letters",
    description:
      "Users can select an alphabet letter and practice forming its gesture. The interface displays the target letter and recognition progress.",
    image: "/images/projects/bisindo-practice.png",
    alt: "Interactive BISINDO practice screen with target letter C and webcam recognition progress",
  },
  {
    number: "04",
    category: "Learning Analytics",
    title: "Practice History & Statistics",
    description:
      "The learning history summarizes practice sessions, detected characters, activity, and performance by alphabet letter.",
    image: "/images/projects/bisindo-learning-stats.png",
    alt: "BISINDO learning analytics with practice counts, average practice accuracy, and charts",
  },
] as const;

const technicalApproach = [
  {
    title: "The problem",
    description:
      "Explore how BISINDO alphabet gestures can be recognized through a browser-based camera interface, providing an accessible way to interact with sign language recognition technology.",
  },
  {
    title: "The implementation",
    description:
      "Developed the web interface and recognition pipeline using Next.js, TypeScript, MediaPipe Hands, and a KNN classifier. The system processes hand landmarks and joint-angle features to predict alphabet letters.",
  },
  {
    title: "Model evaluation",
    description:
      "Compared KNN, Random Forest, and SVM models. The reported classification evaluation accuracy was approximately 91%. The recognition system was also tested at an SLB.",
  },
  {
    title: "My contribution",
    description:
      "Built the browser application and integrated the hand-tracking and real-time inference workflow as part of the thesis project, including model comparison and evaluation.",
  },
] as const;

export default function BisindoCaseStudyPage() {
  return (
    <>
      <Header />

      <main id="main-content">
        {/* PROJECT HERO */}
        <section className="section-space bg-background">
          <div className="container-page">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-ring"
            >
              ← Back to projects
            </Link>

            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Thesis · Web Development & Machine Learning
                </p>

                <h1 className="mt-4 text-[clamp(2.8rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.055em] text-foreground">
                  BISINDO Detector
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                  A browser-based Indonesian Sign Language
                  alphabet recognition system using webcam
                  hand tracking and machine learning.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                  The project combines real-time gesture
                  detection with interactive practice and
                  learning statistics in a single web
                  application.
                </p>

                <ul
                  aria-label="Technologies used"
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

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/adeluindra/bisindo-detector"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary"
                  >
                    View GitHub Repository
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="#features"
                    className="button button-outline"
                  >
                    Explore Features
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>

              {/* ACTUAL PROJECT LANDING SCREENSHOT */}
              <figure className="overflow-hidden rounded-[24px] border border-line bg-[#080d1e] shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
                <div className="relative mx-auto aspect-[424/505] w-full max-w-[424px]">
                  <Image
                    src="/images/projects/bisindo-overview.png"
                    alt="BISINDO Detector landing page introducing real-time alphabet classification and the system architecture"
                    fill
                    sizes="(max-width: 1023px) 100vw, 424px"
                    className="object-contain"
                  />
                </div>

                <figcaption className="border-t border-white/10 bg-[#0f172a] px-5 py-4 text-xs text-slate-300">
                  Original application landing page
                </figcaption>
              </figure>
            </div>

            {/* VERIFIED PROJECT HIGHLIGHTS */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[18px] border border-line bg-white p-6"
                >
                  <p className="text-3xl font-bold tracking-tight text-foreground">
                    {item.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 max-w-3xl text-xs leading-6 text-subtle">
              The approximately 91% result refers to
              reported model evaluation accuracy, not
              guaranteed accuracy across all real-world
              conditions.
            </p>
          </div>
        </section>

        {/* SYSTEM ARCHITECTURE */}
        <section
          aria-labelledby="architecture-heading"
          className="section-space bg-white"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Engineering / Architecture
            </p>

            <h2
              id="architecture-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              How the recognition pipeline works
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
              The application processes webcam frames
              through hand landmark detection, feature
              extraction, and classification before
              presenting feedback to the user.
            </p>

            <div className="mt-9 rounded-[24px] bg-[#0b1224] p-5 sm:p-8">
              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {architecture.map((step) => (
                  <li
                    key={step.number}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <span className="text-sm font-bold text-violet-300">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-4 text-lg font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>

              <p className="mt-7 text-center text-xs leading-6 text-slate-300">
                Camera → MediaPipe Hands → Features →
                KNN → Prediction
              </p>

              <p className="mt-2 text-center text-xs text-slate-400">
                Firebase supports application data features.
              </p>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">
              This architecture is presented as readable
              HTML rather than an enlarged crop of the
              original screenshot, preserving legibility
              on mobile and desktop.
            </p>
          </div>
        </section>

        {/* APPLICATION SCREENSHOTS */}
        <section
          id="features"
          aria-labelledby="features-heading"
          className="section-space bg-background"
        >
          <div className="container-page">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Authentic Product Screenshots
            </p>

            <h2
              id="features-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              From recognition to interactive learning
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              A closer look at four parts of the
              running BISINDO application. Each image
              is displayed without cropping its interface.
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {screenshots.map((item) => (
                <figure
                  key={item.number}
                  className="flex flex-col overflow-hidden rounded-[22px] border border-line bg-white"
                >
                  <a
                    href={item.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open full screenshot: ${item.title}`}
                    className="group relative block aspect-[16/10] overflow-hidden bg-[#080d1e] focus-ring"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1023px) 100vw, 550px"
                      className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  </a>

                  <figcaption className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
                      {item.number} / {item.category}
                    </p>

                    <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                      {item.description}
                    </p>

                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 w-fit text-sm font-semibold text-accent hover:underline focus-ring"
                    >
                      View full screenshot ↗
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-xs leading-6 text-subtle">
              Recognition confidence and learning
              statistics visible in these screenshots
              are snapshots of application usage. They
              should not be interpreted as the overall
              model evaluation accuracy.
            </p>
          </div>
        </section>

        {/* TECHNICAL CASE STUDY */}
        <section
          aria-labelledby="approach-heading"
          className="section-space bg-white"
        >
          <div className="container-page grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Technical Case Study
              </p>

              <h2
                id="approach-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Problem → Implementation → Evaluation
              </h2>

              <p className="mt-5 leading-8 text-muted">
                More than building the interface,
                the project explores how machine
                learning can be integrated into
                a practical browser experience.
              </p>
            </div>

            <div className="space-y-8">
              {technicalApproach.map((item) => (
                <article
                  key={item.title}
                  className="border-b border-line pb-8 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-space bg-background">
          <div className="container-page">
            <div className="rounded-[24px] bg-[#0f172a] px-7 py-10 text-white sm:px-10 sm:py-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Explore the implementation
              </p>

              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                See the project behind the interface
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                Explore the source repository for
                the application implementation and
                recognition workflow.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="https://github.com/adeluindra/bisindo-detector"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-ring"
                >
                  View Source Code ↗
                </a>

                <Link
                  href="/#projects"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white hover:underline focus-ring"
                >
                  ← Other Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
