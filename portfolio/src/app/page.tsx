"use client";

import Image from "next/image";
import NavBar from "./components/NavBar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/project";
import Footer from "./components/Footer/footer";
import { useState, useEffect } from "react";
export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const handleScroll = () => {
    const sections = ["home", "about", "projects", "skills", "contact"];
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        const offsetBottom = offsetTop + element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-background">
        <NavBar activeSession={activeSection} />
        <main className="w-full">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer/>
      </div>
    </>
  );
}
