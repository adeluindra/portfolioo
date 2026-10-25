import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="section-space bg-white">
      <div className="container-page">
        <div className="rounded-[28px] bg-slate-900 px-6 py-12 text-white sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Contact</p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Let&apos;s build something useful.</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">I&apos;m open to junior web development opportunities. Feel free to reach out about a role or collaboration.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="button button-primary">Email Me <span aria-hidden="true">↗</span></a>
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="button border border-slate-600 bg-white/10 text-white hover:bg-white/20">GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <p className="mt-6 break-all text-sm text-slate-300">{profile.email}</p>
        </div>
      </div>
    </section>
  );
}
