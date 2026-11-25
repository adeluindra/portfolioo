"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";

import { MotionCard } from "@/components/MotionCard";
import { SectionHeading } from "@/components/SectionHeading";

type Credential = {
  title: string;
  issuer: string;
  date: string;
  type: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "contain" | "cover" | "cover-top";
  highlight?: string;
  details?: readonly string[];
};

const credentials: readonly Credential[] = [
  {
    title: "Junior Web Developer",
    issuer: "BNSP · LSP Teknologi Digital",
    date: "Aug 2025",
    type: "Competency Certification",
    description:
      "Professional competency certification in web development, valid for 3 years.",
    image: "/images/certifications/bnsp-junior-web-developer.jpg",
    imageAlt:
      "BNSP LSP Teknologi Digital Certificate of Competence for Junior Web Developer issued to Moh Syafiq Ade Luwindra",
    imageFit: "cover-top",
  },
  {
    title: "Coding Camp 2025",
    issuer: "Dicoding × DBS Foundation",
    date: "Jul 2025",
    type: "Program Completion",
    description:
      "Front-End and Back-End Developer training program, including a collaborative capstone project.",
    image: "/images/certifications/coding-camp-2025.jpg",
    imageAlt:
      "Coding Camp 2025 powered by DBS Foundation and Dicoding Certificate of Completion for Front-End and Back-End Developer",
    imageFit: "cover",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Jun 2026",
    type: "Skill Certification",
    description:
      "Basic problem-solving skills assessment focused on programming logic.",
    image: "/images/certifications/hackerrank-problem-solving.png",
    imageAlt:
      "HackerRank Certificate of Accomplishment for Problem Solving (Basic) earned by Moh Syafiq Ade Luwindra",
    imageFit: "contain",
  },
  {
    title: "TOEFL Prediction Test",
    issuer: "Central Course · Kampung Inggris",
    date: "Nov 2026",
    type: "English Proficiency",
    description:
      "English proficiency assessment covering listening, structure and written expression, and reading comprehension. Valid until November 2028.",
    image: "/images/certifications/toefl-prediction.png",
    imageAlt:
      "Central Course Certificate of Achievement for TOEFL Prediction Test with total score 553",
    imageFit: "contain",
    highlight: "Score 553",
    details: [
      "Listening 60",
      "Structure 54",
      "Reading 52",
    ],
  },
];

export function Certifications() {
  const [activeCredential, setActiveCredential] =
    useState<Credential | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeCredential) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCredential(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCredential]);

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-space bg-white"
    >
      <div className="container-page">
        <SectionHeading
          id="certifications-heading"
          eyebrow="Credentials & learning"
          title="Certifications & achievements"
          description="Selected credentials supporting my technical background, language proficiency, and continued learning."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {credentials.map((credential, index) => (
            <MotionCard
              key={credential.title}
              index={index}
              hoverY={-6}
              className="flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white p-4 transition-[border-color,box-shadow] duration-200 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)] sm:p-5"
            >
              {/* CERTIFICATE PREVIEW */}
              {credential.image ? (
                <button
                  type="button"
                  onClick={() => setActiveCredential(credential)}
                  aria-label={`View ${credential.title} certificate in full screen`}
                  className="group relative block aspect-[10/7] w-full cursor-zoom-in overflow-hidden rounded-[14px] border border-line bg-slate-100 text-left focus-ring"
                >
                  <Image
                    src={credential.image}
                    alt={
                      credential.imageAlt ??
                      `${credential.title} certificate`
                    }
                    fill
                    sizes="(max-width: 767px) 100vw, 520px"
                    className={`${
                      credential.imageFit === "cover-top"
                        ? "object-cover object-top"
                        : credential.imageFit === "cover"
                          ? "object-cover object-center"
                          : "bg-white object-contain"
                    } transition-transform duration-300 group-hover:scale-[1.03]`}
                  />

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center bg-slate-950/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/85 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-blue-400"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-3.5-3.5" />
                        <path d="M11 8v6" />
                        <path d="M8 11h6" />
                      </svg>
                      Click for full screen
                    </span>
                  </span>
                </button>
              ) : (
                <div className="relative flex aspect-[10/7] w-full flex-col items-center justify-center overflow-hidden rounded-[14px] border border-dashed border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-6 text-center">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-3 rounded-[10px] border border-slate-200/70"
                  />

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-accent">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="m8.21 13.89-1.21 7.11 5-2.5 5 2.5-1.21-7.11" />
                    </svg>
                  </div>

                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                    {credential.type}
                  </p>

                  <p className="mt-1.5 max-w-[220px] text-xs leading-5 text-subtle">
                    Certificate preview available upon request
                  </p>
                </div>
              )}

              {/* CERTIFICATE DETAILS */}
              <div className="flex flex-1 flex-col px-1 pt-5 pb-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-blue-700">
                    {credential.issuer}
                  </span>

                  <span className="text-xs font-medium text-subtle">
                    {credential.date}
                  </span>
                </div>

                <h3 className="mt-3.5 text-xl font-bold tracking-tight text-foreground">
                  {credential.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-7 text-muted">
                  {credential.description}
                </p>

                {(credential.highlight || credential.details) && (
                  <ul
                    aria-label={`${credential.title} score breakdown`}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {credential.highlight && (
                      <li className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                        {credential.highlight}
                      </li>
                    )}

                    {credential.details?.map((detail) => (
                      <li
                        key={detail}
                        className="rounded-lg border border-line bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </MotionCard>
          ))}
        </div>

        <p data-reveal className="mt-7 max-w-3xl text-sm leading-7 text-subtle">
          Click any certificate to view it in full screen.
          Additional training records are available upon request.
        </p>
      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      <MotionConfig reducedMotion="never">
        <AnimatePresence>
          {activeCredential?.image && (
            <motion.div
              data-lenis-prevent
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveCredential(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm sm:p-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                onClick={(event) => event.stopPropagation()}
                className="flex w-full max-w-5xl flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#0f172a] shadow-2xl"
              >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <h3
                  id="certificate-modal-title"
                  className="truncate text-base font-bold text-white sm:text-lg"
                >
                  {activeCredential.title}
                </h3>
                <p className="mt-0.5 text-xs text-slate-300">
                  {activeCredential.issuer} · {activeCredential.date}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeCredential.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-white focus-ring"
                >
                  Open original
                  <span aria-hidden="true">↗</span>
                </a>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setActiveCredential(null)}
                  aria-label="Close full-screen certificate preview"
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/5 text-lg font-semibold text-slate-200 transition-colors hover:bg-white/10 hover:text-white focus-ring"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="relative h-[68vh] w-full bg-slate-950/60 p-3 sm:h-[76vh] sm:p-6">
              <div className="relative h-full w-full">
                <Image
                  src={activeCredential.image}
                  alt={
                    activeCredential.imageAlt ??
                    `${activeCredential.title} certificate`
                  }
                  fill
                  priority
                  sizes="(max-width: 1024px) 95vw, 1024px"
                  className="object-contain"
                />
              </div>
            </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </section>
  );
}
