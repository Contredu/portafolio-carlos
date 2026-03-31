
function App() {

  const ProjectsAi = [
    // {
    //   id: "1",
    //   name: "Portafolio",
    //   url: "https://github.com/Contredu/portafolio-carlos",
    //   imagen: "./src/assets/portafolio carlos.png",
    //   description: "Les presento mi portafolio mi primer proyecto propio hecho desde cero, aquí he utilizado React y Tailwind CSS, demostrando mis habilidades en desarrollo web."
    // }
  ]

  const CollaborativeProjects = [
    {
      id: "1",
      name: "Reno Usa",
      url: "https://github.com/IgrowkerTraining/i006-reno-usa-fullstack",
      imagen: "./src/assets/Reno.png",
      description: "Reno usa es un proyecto colaborativo que busca crear una solución integral para la gestión de datos en el sector de la construcción, en este proyecto estuve trabajando en la parte del Frontend en la construcción del dashboard y de la página de control del proyecto utilizando React con TypeScript y Tailwind CSS."
    },

    {
      id: "2",
      name: "Padel+",
      url: "https://github.com/4GeeksAcademy/fs_pt_115-ProyectoFinal-Padel",
      imagen: "./src/assets/Reno.png",
      description: "Proyecto en el que teniamos que demostrar nuestras habilidades con lo aprendido durante el curso, en este proyecto trabaje en la base del backend desarrollando bases de datos y endpoints trabajando con Python MySQL, y en la parte del Frontend desarrollando vista necesaria para la interfaz de usuario trabajando con React y bootstrap."
    }
    
  ]

  const OwnProjects = [
    {
      id: "1",
      name: "Portafolio",
      url: "https://github.com/Contredu/portafolio-carlos",
      imagen: "./src/assets/portafolio carlos.png",
      description: "Les presento mi portafolio mi primer proyecto propio hecho desde cero, aquí he utilizado React y Tailwind CSS, demostrando mis habilidades en desarrollo web."
    }
  ]


  return (
    <>
      <div className="bg-linear-to-r from-blue-950 via-blue-600
            to-fuchsia-700 text-center p-5">

        <div className="border border-black rounded-lg shadow-lg/50 shadow-black text-white">
          {/* Header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-around items-center p-4">

            {/* Side left */}
            <div className="my-4 p-4">
              <h2 className="font-serif text-4xl text-shadow-lg text-shadow-gray-900">Conéctate conmigo</h2>
              <section className="flex flex-wrap justify-center items-center my-6 gap-10">
                <a className="size-20 rounded-full bg-gray-400 shadow-black/80 shadow-lg"></a>

                <a className=" size-20 rounded-full bg-gray-400 shadow-black/80 shadow-lg"></a>

                <a className=" size-20 rounded-full bg-gray-400 shadow-black/80 shadow-lg"></a>

                <a className=" size-20 rounded-full bg-gray-400 shadow-black/80 shadow-lg"></a>


              </section>
            </div>

            {/* Side rigth */}
            <div className="my-4 mx-4 border rounded-xl p-4 bg-white/10 shadow-md shadow-white/20">

              {/* Card presentation */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="p-4">
                  <img src="./src/assets/foto-perfil.png" alt="" className="object-cover object-center size-30 rounded-full shadow-lg shadow-gray-700 hover:scale-105 transition-transform" />
                </div>
                <div className="w-100">
                  <h2 className="text-2xl text-shadow-lg text-shadow-gray-900">QUIEN SOY Y MI PASION</h2>
                  <p className="text-black font-semibold">Desarrollador Full Stack con experiencia en JavaScript, React, Bootstrap y
                    Python, enfocado en crear soluciones eficientes, seguras y orientadas al usuario.
                    Mi camino comenzó desde el emprendimiento: la necesidad de construir mi
                    propio ecommerce despertó mi pasión por la programación. Hoy combino
                    visión de negocio con mentalidad técnica para crear proyectos escalables y con
                    impacto real. Destaco por mi curiosidad constante, pensamiento analítico y el
                    deseo de ayudar a otros a entender y aprovechar el mundo tecnológico.
                  </p>
                </div>
              </div>
            </div>

          </div>


          {/* Body */}
          <h1 className="flex justify-center text-5xl shadow-lg shadow-black/30 my-10 p-4 text-shadow-lg text-shadow-gray-900">Mis proyectos</h1>
          <div className="grid grid-cols-1 p-4 sm:grid-cols-3 gap-4">

            {/* Projects Whit AI */}
            <div className="m-2">
              <h2 className="text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20 text-shadow-lg text-shadow-gray-900">Proyectos con AI</h2>

              {ProjectsAi.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (ProjectsAi.map((project) =>
                <div className="my-2 bg-white/20 border-2 border-black rounded-lg" key={project.id}>
                  <img src={project.imagen} className="p-2 justify-center size-fit object-cover" />
                  <div className="flex flex-col my-2">
                    <h3 className="text-2xl mb-2 text-black font-bold text-shadow-lg text-shadow-gray-600">{project.name}</h3>
                    <p className="px-4">{project.description}</p>
                    <a className="m-4 py-2 border-2 border-black rounded-2xl bg-black text-white hover:bg-gray-900 transition duration-150 hover:scale-105" href={project.url} target="_blank" rel="noopener noreferrer">
                      Enlace a repositorio
                    </a>
                  </div>

                </div>
              )
              )}
            </div>


            {/* collaborative projects */}
            <div className="m-2">
              <h2 className="flex justify-center text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20 text-shadow-lg text-shadow-gray-900">Proyectos colaborativos</h2>

              {CollaborativeProjects.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (CollaborativeProjects.map((project) =>
                <div className="my-2 bg-white/20 border-2 border-black rounded-lg" key={project.id}>
                  <img src={project.imagen} className="p-2 justify-center size-fit object-cover" />
                  <div className="flex flex-col my-2">
                    <h3 className="text-2xl mb-2 text-black font-bold text-shadow-lg text-shadow-gray-600">{project.name}</h3>
                    <p className="px-4">{project.description}</p>
                    <a className="m-4 py-2 border-2 border-black rounded-2xl bg-black text-white hover:bg-gray-900 transition duration-150 hover:scale-105" href={project.url} target="_blank" rel="noopener noreferrer">
                      Enlace a repositorio
                    </a>
                  </div>

                </div>
              )
              )}

            </div>


            {/* Own Projects */}
            <div className="m-2">
              <h2 className="text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20 text-shadow-lg text-shadow-gray-900">Proyectos propios</h2>

              {OwnProjects.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (OwnProjects.map((project) =>

                <div className="my-2 bg-white/20 border-2 border-black rounded-lg" key={project.id}>
                  <img src={project.imagen} className="p-2 justify-center size-fit object-cover" />
                  <div className="flex flex-col my-2">
                    <h3 className="text-2xl mb-2 text-black font-bold text-shadow-lg text-shadow-gray-600">{project.name}</h3>
                    <p className="px-4">{project.description}</p>
                    <a className="m-4 py-2 border-2 border-black rounded-2xl bg-black text-white hover:bg-gray-900 transition duration-150 hover:scale-105" href={project.url} target="_blank" rel="noopener noreferrer">
                      Enlace a repositorio
                    </a>
                  </div>

                </div>
              )
              )}

            </div>
          </div>
        </div>
        <h4 className="mt-2 text-lg font-bold">&copy; 2026 Carlos.Developer Diseñado 100% con código.</h4>
      </div>
    </>
  )
}

export default App