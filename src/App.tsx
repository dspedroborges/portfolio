function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-6">Pedro Borges</h1>
        <nav className="flex flex-col gap-4">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hello! I'm Pedro, a web developer from Brazil specializing in React, Next.js, Tailwind, PostgreSQL, Golang, and modern web technologies. I love building clean and responsive web applications.
          </p>

          <a href="/resume.pdf" target="_blank" className="my-4 block underline">Click here to see my resume</a>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">CRUD Helper</h3>
              <p className="text-gray-600">A React component library that simplifies CRUD operations. Easily create forms from JSON using the FormMaker component and display, update, or delete records with the Table component. Works seamlessly with Tailwind and Bootstrap. Developers only need to define fields and provide onUpdate and onDelete functions.</p>
              <div className="flex items-center gap-2 mt-2">
                <a href="https://crudhelper.vercel.app/" target="_blank">
                  <button className="p-2 my-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 cursor-pointer flex items-center gap-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                    <span>Demo</span>
                  </button>
                </a>
                <a href="https://github.com/dspedroborges/crudhelper" target="_blank">
                  <button className="p-2 my-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 cursor-pointer flex items-center gap-2 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                    <span>Github</span>
                  </button>
                </a>
              </div>
            </div>
            {/* Add more projects as needed */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
