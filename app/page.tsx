"use client";

import Hero from "./pages/Hero";
import About from "./pages/About";
import { Skills } from "./pages/Skills";
import { ProjectCards } from "./pages/Projects";
import ContactForm from "./pages/contact";
import { FadeInSection } from "../components/ui/FadeInSection";
import { HeroHighlight } from "@/components/ui/background";
import { FloatingNav } from "../components/ui/navbar";

const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function FlickeringGridRoundedDemo() {
  return (
    <div>
      <FloatingNav navItems={navItems} />
      <div id="hero">
        <Hero />
      </div>

      <HeroHighlight containerClassName="h-full">
        <div className="grid">
          <FadeInSection>
            <div id="about">
              <About />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="skills">
              <Skills />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="projects">
              <ProjectCards />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="contact">
              <ContactForm />
            </div>
          </FadeInSection>
        </div>
      </HeroHighlight>
    </div>
  );
}
