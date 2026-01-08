import type { ProjectType } from "../components/Project";

export const navContent = {
  pt: [
    { name: "Projetos", link: "#projects" },
    { name: "Tecnologias", link: "#techs" }
  ],
  en: [
    { name: "Projects", link: "#projects" },
    { name: "Techs", link: "#techs" }
  ]
}

export const heroContent = {
  title: {
    pt: "Desenvolvedor Web Fullstack",
    en: "Fullstack Web Developer"
  },
  description: {
    pt: "Olá, meu nome é Pedro Borges e sou Desenvolvedor Web Full-stack, focado em construir aplicações web eficientes usando HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL e Prisma. Sou formado em Análise de Sistemas pelo Instituto Federal de Brasília e tenho experiência sólida em desenvolvimento frontend, APIs backend e modelagem consistente de dados.",
    en: "Hi, my name is Pedro Borges and I'm a Full-stack Web Developer focused on building efficient web applications using HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, PostgreSQL, and Prisma. Holds a Bachelor’s degree in Systems Analysis from the Federal Institute of Brasília, with strong experience in frontend development, backend APIs, and consistent data modeling."
  }
}

export const sectionTitles = {
  projects: {
    pt: "Dá uma olhada em alguns dos meus projetos:",
    en: "Check out a few of my projects:"
  },
  techs: {
    pt: "E trabalho com estas tecnologias:",
    en: "And these are the tech I work with:"
  }
}

export const projects: ProjectType[] = [
  {
    title: "Auth Project",
    image: "/auth-project.png",
    description: {
      en: "Fullstack project that serves as a template and a study case for authentication, organized development and software architecture. The authentication is done by JWT, with JIT and a refresh token logic, revoking tokens and cleaning the database every week with a CRON job.",
      pt: "Projeto fullstack que serve de template e um caso de estudo sobre autenticação, desenvolvimento organizado e arquitetura de software. A autenticação é feita com JWT, com JIT e uma lógica de refresh token, revogando tokens e limpando a base de dados toda semana com um CRON job."
    },
    techs: [
      "Node.js",
      "Express.js",
      "Express Rate Limit",
      "bcryptjs",
      "Prisma",
      "Zod",
      "jsonwebtoken",
      "node-cron",
      "Tailwind CSS",
      "React.js",
      "Axios",
      "React Query",
      "React Router DOM",
      "React Hook Form",
      "Sonner",
      "ShadCN"
    ],
    github: "https://github.com/dspedroborges/auth-project",
    inProgress: true,
  },
  {
    title: "Landing Page - Nutricionista João Silva",
    image: "/landing-page.gif",
    description: {
      en: "This is a straight forward professional landing page for a nutritionist, but it can be adapted to any professional. It gets 100% in performance and SEO in https://pagespeed.web.dev/",
      pt: "Esta é uma landing page profissional para um nutricionista, mas pode ser adaptada para qualquer profissional. Ela obtém 100% em performance e SEO pelo site https://pagespeed.web.dev"
    },
    techs: [
      "Vite",
      "HTML",
      "Tailwind CSS",
      "Typescript",
      "React.js",
      "react-icons"
    ],
    demo: "https://nutritionistlp.vercel.app/",
    github: "https://github.com/dspedroborges/nutritionist-landing-page",
    inProgress: false,
  },
  {
    title: "Fretboard Project",
    image: "/fretboard.png",
    description: {
      en: "Fretboard is a web app that allows you to visualize musical scales on a guitar fretboard. Select a key and a scale to see the notes highlighted on the fretboard.",
      pt: "Fretboard é um aplicativo web que permite a você visualizar escalas musicais no braço do violão/guitarra. Selecione um tom e uma escala para ver as notas destacadas no braço."
    },
    techs: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Typescript",
      "Tone.js",
      "react-icons"
    ],
    demo: "https://fretboardproject.vercel.app/",
    github: "https://github.com/dspedroborges/fretboard",
    inProgress: false,
  },
  {
    title: "World View",
    image: "/world-view.gif",
    description: {
      en: "World View is an interactive world map uses LLM and allows the user to learn about the countries of the world by clicking on their position on the map.",
      pt: "World View é um mapa-mundi interativo que usa LLM e permite ao usuário aprender sobre os países do mundo clicando em suas posições do mapa."
    },
    techs: [
      "Vite",
      "HTML",
      "Tailwind CSS",
      "Typescript",
      "React.js",
      "react-icons",
      "React Router DOM",
      "Sonner",
      "React Query",
      "Zustand"
    ],
    demo: "https://worldviewproject.vercel.app/",
    github: "https://github.com/dspedroborges/world-view",
    inProgress: false,
  },
  {
    title: "Bitfire",
    image: "/bitfire.gif",
    description: {
      en: "Game where you pilot a small ship and tweak binary blocks by shooting them. Each shot flips the digit between 0 and 1. Your goal is to build the sequence that matches the decimal number shown for the level. Move, aim, and flip the blocks until you reach the correct value.",
      pt: "Jogo em que você pilota uma pequena nave e ajusta blocos binários atirando neles. Cada tiro alterna o dígito entre 0 e 1. Seu objetivo é montar a sequência que corresponde ao número decimal mostrado na fase. Mova, mire e alterne os blocos até chegar ao valor correto."
    },
    techs: [
      "Vite",
      "React.js",
      "Tailwind CSS",
      "Sonner",
      "Canvas HTML",
      "react-icons"
    ],
    demo: "https://bitfiregame.vercel.app/",
    github: "https://github.com/dspedroborges/bitfire",
    inProgress: false,
  },
];

export const experienceInTechIcons = [
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