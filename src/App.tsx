import { useState } from "react";
import MapView from "./components/MapView";
import Whatsapp from "./components/Whatsapp";

const projects: Record<string, any>[] = [
  {
    title: "Store API",
    description: {
      "en": "The Store API is a TypeScript/Express.js backend for an online store. It uses Prisma with PostgreSQL to manage data for users, products, transactions, and reviews. Key features include authentication, authorization, product image handling, and processing payments via Mercado Pago (Pix only).",
      "pt": "A Store API é um backend em TypeScript/Express.js para uma loja online. Ela utiliza Prisma com PostgreSQL para gerenciar dados de usuários, produtos, transações e avaliações. Entre suas principais funcionalidades estão autenticação, autorização, gerenciamento de imagens de produtos e processamento de pagamentos via Mercado Pago (apenas Pix)."
    },
    techs: [
      "Node.js",
      "Express.js",
      "Typescript",
      "JWT",
      "bcryptjs",
      "Prisma",
      "Multer",
      "Node CRON",
      "Mercado Pago"
    ],
    demo: "",
    github: "https://github.com/dspedroborges/store-api",
    inProgress: false,
  }
];

const learningTechIcons = [
  {
    name: "React Native",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Go",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
  }
];

const experienceInTechIcons = [
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "React Query",
    src: "https://tanstack.com/images/logos/logo-color-600.png"
  },
  {
    name: "Zustand",
    src: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg"
  },
  {
    name: "Vite.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
];

function App() {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  const t = {
    pt: {
      greeting: "Pedro Borges",
      subtitle: "Desenvolvedor Web Fullstack",
      available: "Disponível para trabalho",
      experience: "Experiência em",
      learning: "Aprendendo",
      projects: "Veja meus projetos",
      github: "Github",
      demo: "Demo",
    },
    en: {
      greeting: "Pedro Borges",
      subtitle: "Fullstack Web Developer",
      available: "Available for work",
      experience: "Experience in",
      learning: "Learning",
      projects: "Check my projects",
      github: "Github",
      demo: "Demo",
    },
  }[lang];

  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-800 h-auto text-white flex flex-col gap-4 items-center p-4">
      <Whatsapp />
      <button
        onClick={() => setLang(lang === "pt" ? "en" : "pt")}
        className="cursor-pointer self-end border border-gray-600 rounded-md px-2 py-1 text-xs mb-2"
      >
        {lang === "pt" ? "🇺🇸 Translate to English" : "🇧🇷 Traduzir para Português"}
      </button>
      <div className="w-full lg:w-1/3 h-72 overflow-hidden rounded-xl">
        <MapView />
      </div>
      <div className="w-full lg:w-1/3 flex items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/dspedroborges/" target="_blank">
          <div className="border-2 border-green-400 rounded-full">
            <div className="m-1 flex-shrink-0 rounded-full w-24 h-24 bg-gray-900 bg-[url('/me.png')] bg-cover bg-center transition-all cursor-pointer"></div>
          </div>
        </a>
        <div>
          <h2 className="text-2xl font-bold">{t.greeting}</h2>
          <p className="break-words">{t.subtitle}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="block rounded-full w-2 h-2 bg-green-400 animate-pulse"></span>
            <a
              className="border-b border-dashed border-gray-600"
              href="mailto:xpedrostewart@gmail.com"
            >
              {t.available}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <h2 className="text-start text-2xl mb-4">{t.projects}</h2>
        <div>
          {projects.map((p, i) => {
            return (
              <div
                key={i}
                className="max-w-sm rounded-lg shadow-sm bg-gray-950 border-gray-700"
              >
                <div className="p-5">
                  {
                    p.inProgress && (
                      <span className="mb-2 inline-block px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full animate-pulse">
                        In progress...
                      </span>
                    )
                  }
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {p.title}
                  </h5>
                  <div className="flex my-4 flex-wrap gap-2">
                    {p.techs.map((t: string, j: number) => {
                      return (
                        <span
                          key={j}
                          className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm bg-gray-900 text-gray-300"
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                  <p className="mb-3 font-normal text-gray-400">
                    {p.description[lang]}
                  </p>
                  {
                    p.github !== "" && (
                      <a
                        href={p.github}
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-800 mr-2"
                      >
                        {t.github}
                      </a>
                    )
                  }
                  {
                    p.demo !== "" && (
                      <a
                        href={p.demo}
                        target="_blank"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-800"
                      >
                        {t.demo}
                      </a>
                    )
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <h2 className="text-start text-2xl mb-4">{t.experience}</h2>
        <div className="rounded-xl grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-4 gap-4">
          {experienceInTechIcons.map((tech) => (
            <div className="cursor-pointer hover:scale-105 transition-all rounded-xl p-2 border border-gray-700 group">
              <img
                key={tech.name}
                title={tech.name}
                src={tech.src}
                className="h-auto max-h-12 mx-auto filter grayscale group-hover:grayscale-0"
              />
              <div className="text-xs text-gray-400 text-center mt-2">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <h2 className="text-start text-2xl mb-4">{t.learning}</h2>
        <div className="rounded-xl grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-4 gap-4">
          {learningTechIcons.map((tech) => (
            <div className="cursor-pointer hover:scale-105 transition-all rounded-xl p-2 border border-gray-700 group">
              <img
                key={tech.name}
                title={tech.name}
                src={tech.src}
                className="h-auto max-h-12 mx-auto filter grayscale group-hover:grayscale-0"
              />
              <div className="text-xs text-gray-400 text-center mt-2">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;