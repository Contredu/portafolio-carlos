
function App() {

  const ProjectsAi = [
  ]

  const CollaborativeProjects = [

  ]

  const OwnProjects = [
    {
      id: "1",
      name: "Portafolio",
      url: "",
      description: "Les presento mi portafolio mi primer proyecto propio hecho desde cero, aquí he utilizado React y Tailwind CSS, demostrando mis habilidades en desarrollo web."
    }
  ]


  return (
    <>
      <div className="bg-linear-to-r from-blue-950 via-blue-600
     to-fuchsia-700 text-center p-5">

        <div className="flex flex-col border border-black rounded-lg shadow-lg/50 shadow-black text-white">
          {/* Header */}
          <div className="flex-row flex-wrap justify-between items-center p-4">

            {/* Side left */}
            <div className="flex-1 my-4">
              <h2 className="font-serif text-4xl">Conéctate conmigo</h2>
              <section className="flex justify-center items-center my-6 gap-10">
                <a className="size-20 rounded-full bg-gray-400 shadow-black/80 shadow-lg"></a>

                <a className=" size-20 rounded-full bg-gray-400 shadow-black/80 shadow-lg"></a>

                <a className=" size-20 rounded-full bg-gray-400 shadow-black/80 shadow-lg"></a>

              </section>
            </div>

            {/* Side rigth */}
            <div className="flex-1 my-4 mx-4 border rounded-xl p-4 bg-white/10 shadow-md shadow-white/20">

              {/* Card presentation */}
              <div className="flex justify-center items-center">
                <div className="flex-auto p-4">
                  <img src="./src/assets/foto-perfil.png" alt="" className="object-cover object-center size-30 rounded-full shadow-lg shadow-gray-700 hover:scale-105 transition-transform" />
                </div>
                <div className="flex-auto w-100">
                  <h2 className="text-2xl">QUIEN SOY Y MI PASION</h2>
                  <p className="text-black">bsafdvfbasmjsakdb hvabsdivas vbashdvasvdkhvbas jhsafhsavdvashj bashbdhfvadsfvasd kjsbcad
                    aswdfiadsgfuega asdfuaudfgaus asdufbasuidbfa basdufuasdfbasdu uadsfubskkfoah fuascbsa
                    dwasufasudigfagu
                  </p>
                </div>
              </div>
            </div>

          </div>


          {/* Body */}
          <h1 className="text-5xl shadow-lg shadow-black/30 my-10 p-4">Mis proyectos</h1>
          <div className="flex flex-wrap justify-between items-center p-4">

            {/* Projects Whit AI */}
            <div className="m-2">
              <h2 className="text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20">Proyectos con AI</h2>

              {ProjectsAi.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (ProjectsAi.map((project) =>
                <div className="m-10">
                  <div className="mt-5 border-4 border-emerald-400" key={project.id}>
                    <img className="border-2 border-red-600 w-100 h-50 object-cover" src="./src/assets/foto-perfil.png" />
                    <div className="my-2">
                      <h3 className="text-2xl">{project.name}</h3>
                      <p className="">{project.description}</p>
                    </div>
                    <button className="my-2" type="button">Enlace a repositorio</button>
                  </div>
                </div>
              )
              )}
            </div>


            {/* collaborative projects */}
            <div className="m-2">
              <h2 className="text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20">Proyectos colaborativos</h2>

              {CollaborativeProjects.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (CollaborativeProjects.map((project) =>
                <div className="m-10">
                  <div className="mt-5 border-4 border-emerald-400" key={project.id}>
                    <img className="border-2 border-red-600 w-100 h-50 object-cover" />
                    <div className="my-2">
                      <h3 className="text-2xl">{project.name}</h3>
                      <p className="">{project.description}</p>
                    </div>
                    <button className="my-2" type="button">Enlace a repositorio</button>
                  </div>
                </div>
              )
              )}

            </div>


            {/* Own Projects */}
            <div className="m-2">
              <h2 className="text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20">Proyectos propios</h2>

              {OwnProjects.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (OwnProjects.map((project) =>
                
                  <div className="m-5 bg-white/20 border-2 border-black rounded-lg" key={project.id}>
                    <img src="./src/assets/Reno.png" className="p-2 justify-center size-fit object-cover" />
                    <div className="my-2">
                      <h3 className="text-2xl">{project.name}</h3>
                      <p className="">{project.description}</p>
                    </div>
                    <a className="my-8 py-2 w-[50%] border-2 border-black" href={project.repositoryLink} target="_blank" rel="noopener noreferrer">
                      Enlace a repositorio
                    </a>
                  </div>
              )
              )}

            </div>
          </div>
        </div>
        <h4 className="mt-2 ">&copy; 2026 Carlos.Developer Diseñado 100% con código.</h4>
      </div>
    </>
  )
}

export default App