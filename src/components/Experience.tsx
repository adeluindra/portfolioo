import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="container-page">
        <SectionHeading eyebrow="Experience" title="Professional experience" description="Practical web development experience in a professional setting." />
        <div className="grid gap-7 rounded-[22px] border border-line bg-surface p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-sm font-semibold text-accent">Oct – Dec 2025</p>
            <h3 className="mt-3 text-xl font-bold text-foreground">Web Developer Intern</h3>
            <p className="mt-1 text-sm text-muted">PT Grage Media Technology</p>
          </div>
          <div className="space-y-5">
            <div>
              <h4 className="font-semibold text-foreground">SIBADA</h4>
              <p className="mt-2 text-sm leading-7 text-muted">Developed a web platform presenting regional disaster information for BPBD Kabupaten Cirebon.</p>
            </div>
            <div className="border-t border-line pt-5">
              <h4 className="font-semibold text-foreground">KBK MANAGEMENT</h4>
              <p className="mt-2 text-sm leading-7 text-muted">Developed a Laravel and MySQL website for residential, housing, and RT/RW data management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
