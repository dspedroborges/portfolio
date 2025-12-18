import Whatsapp from "./components/Whatsapp";
import Hero from "./components/Hero";
import Project from "./components/Project";
import { useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { experienceInTechIcons, heroContent, navContent, projects, sectionTitles } from "./content/content";
import Nav from "./components/Nav";

function App() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="bg-gray-900 h-auto text-white pb-16"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.29' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
      }}
    >
      <Whatsapp />
      <Nav
        options={navContent[language]}
      />
      <Hero
        title={heroContent.title[language]}
        description={heroContent.description[language]}
        language={language}
      />
      {/* Projects section */}
      <div id="projects" className="p-5 lg:p-10 bg-gray-800/70">
        <h2 className="text-center text-4xl mb-8 mt-12">{sectionTitles.projects[language]}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {
            projects.map((p, i) => {
              return <div data-aos="flip-right" className="h-full" key={i}>
                <Project project={p} language={language} />
              </div>
            })
          }
        </div>
      </div>
      {/* Techs section */}
      <div id="techs" className="w-full p-5 pt-12">
        <h2 className="text-center text-4xl mb-8 mt-4">{sectionTitles.techs[language]}</h2>
        <div className="rounded-xl grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-4 gap-4">
          {experienceInTechIcons.map((tech) => (
            <div key={tech.name} data-aos="fade-up" className="cursor-pointer hover:scale-105 transition-all rounded-xl p-2  border-gray-700 group">
              <img
                key={tech.name}
                title={tech.name}
                src={tech.src}
                className="h-auto max-h-12 mx-auto filter grayscale group-hover:grayscale-0"
                alt={`Logo of ${tech.name}`}
              />
              <div className="text-xs text-gray-400 text-center mt-2">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="p-2 flex justify-center items-center gap-8 fixed bottom-0 left-0 w-full bg-gray-950">
        Pedro Borges © {new Date().getFullYear()}
        <button
          className="cursor-pointer hover:underline"
          onClick={() => setLanguage(prev => prev == "pt" ? "en" : "pt")}
        >
          {
            language == "pt" ? (
              <span title="Translate to English">🇺🇸 Translate to English</span>
            ) : (
              <span title="Traduzir para Português">🇧🇷 Traduzir para Português</span>
            )
          }
        </button>
      </footer>
    </div>
  );
}

export default App;