import { useState, useEffect } from "react";

function App() {
const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem("darkMode");
  return saved === "true" ? true : false;
});

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
}, [darkMode]);
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 md:flex-row transition-colors duration-300">
      <aside className="w-full bg-gray-800 text-white dark:bg-gray-950 dark:text-gray-200 flex flex-col p-6 md:w-64">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Pedro Borges</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 cursor-pointer"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
        <nav className="flex flex-col gap-4 md:gap-2">
          <a href="#about" className="hover:text-gray-300 dark:hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-300 dark:hover:text-gray-400">Projects</a>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <section id="about" className="mb-16 md:mb-20">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Hello! I'm Pedro, a web developer from Brazil specializing in React, Next.js, Tailwind, PostgreSQL, Golang, and modern web technologies. I love building clean and responsive web applications.
          </p>
          <a href="/resume.pdf" target="_blank" className="my-4 block underline dark:text-gray-300">
            Click here to see my resume
          </a>
        </section>

        <section id="projects" className="mb-16 md:mb-20">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">CRUD Helper</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A React component library that simplifies CRUD operations. Easily create forms from JSON using the FormMaker component and display, update, or delete records with the Table component. Works seamlessly with Tailwind and Bootstrap. Developers only need to define fields and provide onUpdate and onDelete functions.
              </p>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <a href="https://crudhelper.vercel.app/" target="_blank">
                  <button className="p-2 my-2 rounded-xl bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 flex items-center gap-2 justify-center">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/dspedroborges/crudhelper" target="_blank">
                  <button className="p-2 my-2 rounded-xl bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 flex items-center gap-2 justify-center">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
