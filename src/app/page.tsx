
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <ProjectPreview />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
