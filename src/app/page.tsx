import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

import GSAPReveal from "@/components/GSAPReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <GSAPReveal direction="up">
          <About />
        </GSAPReveal>

        <GSAPReveal direction="up">
          <Services />
        </GSAPReveal>

        <GSAPReveal direction="up">
          <Experience />
        </GSAPReveal>

        <GSAPReveal direction="up">
          <Projects />
        </GSAPReveal>

        <GSAPReveal direction="up">
          <Skills />
        </GSAPReveal>

        <GSAPReveal direction="up">
          <Contact />
        </GSAPReveal>
      </main>
      <Footer />
    </>
  );
}
