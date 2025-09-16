import { useState, useEffect } from "react";

const projects: Record<string, any>[] = [
  {
    title: "CRUD Helper",
    description: {
      en: "A React component library that simplifies CRUD operations. Easily create forms from JSON using the FormMaker component and display, update, or delete records with the Table component. Works seamlessly with Tailwind and Bootstrap. Developers only need to define fields and provide onUpdate and onDelete functions.",
      pt: "Uma biblioteca de componentes React que simplifica operações CRUD. Crie formulários a partir de JSON usando o componente FormMaker e exiba, atualize ou exclua registros com o componente Table. Funciona perfeitamente com Tailwind e Bootstrap. Desenvolvedores só precisam definir os campos e fornecer funções onUpdate e onDelete."
    },
    demo: "https://crudhelper.vercel.app/",
    github: "https://github.com/dspedroborges/crudhelper",
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("language");
    return saved || "en";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 md:flex-row transition-colors duration-300">
      <aside className="w-full bg-gray-800 text-white dark:bg-gray-950 dark:text-gray-200 flex flex-col p-6 md:w-64">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Pedro Borges</h1>
        </div>
        <nav className="flex flex-col gap-4 md:gap-2">
          <a href="#about" className="hover:text-gray-300 dark:hover:text-gray-400">
            {language === "en" ? "About" : "Sobre"}
          </a>
          <a href="#projects" className="hover:text-gray-300 dark:hover:text-gray-400">
            {language === "en" ? "Projects" : "Projetos"}
          </a>
        </nav>

        <div className="flex gap-2 mt-5 justify-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 cursor-pointer"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="p-2 rounded bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 cursor-pointer"
          >
            {language === "en" ? "🇧🇷" : "🇺🇸"}
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <section id="about" className="mb-16 md:mb-20">
          <h2 className="text-3xl font-bold mb-4">{language === "en" ? "About Me" : "Sobre Mim"}</h2>
          <p className="text-gray-700 dark:text-gray-300">
            {language === "en"
              ? "Hello! I'm Pedro, a web developer from Brazil specializing in React, Next.js, Tailwind, PostgreSQL, Golang, and modern web technologies. I love building clean and responsive web applications."
              : "Olá! Sou Pedro, um desenvolvedor web do Brasil especializado em React, Next.js, Tailwind, PostgreSQL, Golang e tecnologias web modernas. Adoro construir aplicações web limpas e responsivas."}
          </p>
          <a href={language == "en" ? "/resume.pdf" : "/curriculo.pdf"} target="_blank" className="my-4 block underline dark:text-gray-300">
            {language === "en" ? "Click here to see my resume" : "Clique aqui para ver meu currículo"}
          </a>
        </section>

        <section id="projects" className="mb-16 md:mb-20">
          <h2 className="text-3xl font-bold mb-4">{language === "en" ? "Projects" : "Projetos"}</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {projects.map((p, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{p.description[language]}</p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <a href={p.demo} target="_blank">
                    <button className="cursor-pointer p-2 my-2 rounded-xl bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 flex items-center gap-2 justify-center">
                      {language === "en" ? "Demo" : "Demo"}
                    </button>
                  </a>
                  <a href={p.github} target="_blank">
                    <button className="cursor-pointer p-2 my-2 rounded-xl bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 flex items-center gap-2 justify-center">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
