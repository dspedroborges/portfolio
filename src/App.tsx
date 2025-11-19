import { useState } from "react";
import MapView from "./components/MapView";
import Whatsapp from "./components/Whatsapp";
import Carousel from "./components/Carousel";

const projects: Record<string, any>[] = [
  {
    title: "Store API",
    image: "https://picsum.photos/id/1/1024",
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
    github: [
      {
        label: "Back-end",
        link: "https://github.com/dspedroborges/store-api"
      }
    ],
    inProgress: false,
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

  const content = {
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
      <div className="w-full lg:w-1/3 flex items-center justify-center gap-4 hover:bg-gray-900/80 py-4 px-2 rounded-xl">
        <a href="https://www.linkedin.com/in/dspedroborges/" target="_blank">
          <div className="border-2 border-green-400 rounded-full">
            <div className="m-1 flex-shrink-0 rounded-full w-24 h-24 bg-gray-900 bg-[url('/me.png')] bg-cover bg-center transition-all cursor-pointer"></div>
          </div>
        </a>
        <div>
          <h2 className="text-2xl font-bold">{content.greeting}</h2>
          <p className="break-words">{content.subtitle}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="block rounded-full w-2 h-2 bg-green-400 animate-pulse"></span>
            <a
              className="border-b border-dashed border-gray-600"
              href="mailto:xpedrostewart@gmail.com"
            >
              {content.available}
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <h2 className="text-start text-2xl mb-4">{content.projects}</h2>
        <Carousel
          projects={projects}
          lang={lang}
          content={content}
        />
      </div>
      <div className="w-full lg:w-1/3 p-2">
        <h2 className="text-start text-2xl mb-4">{content.experience}</h2>
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
    </div>
  );
}

export default App;