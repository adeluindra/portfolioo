
import { SectionHeading } from "@/components/SectionHeading";

const credentials = [
  {
    title: "Junior Web Developer",
    issuer: "BNSP · LSP Teknologi Digital",
    year: "2025",
    type: "Competency Certification",
    description:
      "Professional competency certification in web development.",
  },
  {
    title: "Coding Camp 2025",
    issuer: "Dicoding × DBS Foundation",
    year: "2025",
    type: "Program Completion",
    description:
      "Front-End and Back-End Developer training program, including a collaborative capstone project.",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    year: "2026",
    type: "Skill Certification",
    description:
      "Basic problem-solving skills assessment focused on programming logic.",
  },
] as const;

export function Certifications() {
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
          description="Selected credentials supporting my technical background and continued learning."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {credentials.map((credential) => (
            <article
              key={credential.title}
              className="flex h-full flex-col rounded-[22px] border border-line bg-white p-7 transition-[border-color,box-shadow] duration-200 hover:border-blue-200 hover:shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                  <span
                    aria-hidden="true"
                    className="text-xl font-bold text-accent"
                  >
                    ★
                  </span>
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  {credential.year}
                </span>
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.12em] text-accent">
                {credential.type}
              </p>

              <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                {credential.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-muted">
                {credential.issuer}
              </p>

              <p className="mt-5 flex-1 text-sm leading-7 text-muted">
                {credential.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-7 max-w-3xl text-sm leading-7 text-subtle">
          Additional training records and certificate
          documents are available upon request.
        </p>
      </div>
    </section>
  );
}
