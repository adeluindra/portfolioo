
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-space bg-white"
    >
      <div className="container-page">
        <SectionHeading
          id="about-heading"
          eyebrow="Get to know me"
          title="About me"
          description="The person and the thinking behind the code."
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* PROFESSIONAL BACKGROUND */}
          <div className="rounded-[24px] border border-line bg-background p-7 sm:p-10">
            <p className="text-xl font-semibold leading-9 tracking-tight text-foreground sm:text-2xl">
              I enjoy turning practical problems into
              web applications that people can use.
            </p>

            <div className="mt-6 space-y-4 text-base leading-8 text-muted">
              <p>
                I am an Informatics Engineering student
                at Universitas Muhammadiyah Cirebon,
                with my undergraduate thesis defended
                and a GPA of 3.69/4.00.
              </p>

              <p>
                My experience includes developing web
                applications during an industry internship,
                completing the Front-End and Back-End
                Developer track at Coding Camp 2025,
                and building independent projects.
              </p>

              <p>
                I work across responsive interfaces,
                backend APIs, relational databases,
                and practical technology integration.
                I value clear code, maintainable
                architecture, and continuous learning.
              </p>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <a
                href="/docs/resume.pdf"
                download="Moh_Syafiq_Ade_Luwindra_CV.pdf"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline focus-ring"
              >
                Download my resume
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* EDUCATION AND INTERESTS */}
          <div className="grid gap-5">
            <article className="rounded-[24px] border border-line bg-white p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Education
              </p>

              <h3 className="mt-4 text-lg font-bold text-foreground">
                Informatics Engineering
              </h3>

              <p className="mt-2 text-sm leading-7 text-muted">
                Universitas Muhammadiyah Cirebon
              </p>

              <p className="mt-4 text-sm font-semibold text-foreground">
                GPA 3.69 / 4.00
              </p>

              <p className="mt-2 text-sm leading-7 text-muted">
                Thesis defended · BISINDO real-time
                alphabet recognition
              </p>
            </article>

            <article className="rounded-[24px] border border-line bg-[#0f172a] p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                What I focus on
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Building useful software
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Connecting frontend experiences with
                backend logic and reliable data management.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Web Applications",
                  "REST APIs",
                  "Problem Solving",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
