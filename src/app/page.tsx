
import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  ...(siteUrl
    ? {
        alternates: {
          canonical: siteUrl,
        },
      }
    : {}),
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <ProjectPreview />
        <Experience />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
