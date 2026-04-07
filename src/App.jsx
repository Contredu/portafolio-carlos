import { Github } from "./components/Button/GithubIcons"
import { Linkedin } from "./components/Button/LinkedindIcons"
import { XIcon } from "./components/Button/XIcons"
import { GmailIcon } from "./components/Button/GmailIcons"
import { CardDetails } from "./components/Common/Card"
import { MySkills } from "./components/Common/Skills"
import { CardPresentation } from "./components/Common/CardPresentation"

function App() {

  const ProjectsAi = [
    {
      id: "1",
      name: "Inoxia Ecommerce",
      url: "",
      imagen: "./src/assets/inoxia.png",
      description: "Actualmente en desarrollo, proximamente disponible."
    }
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
      imagen: "./src/assets/padel.png",
      description: "Proyecto en el que teniamos que demostrar nuestras habilidades con lo aprendido durante el curso, en este proyecto trabaje en la base del backend desarrollando bases de datos y endpoints trabajando con Python MySQL, y en la parte del Frontend desarrollando vista necesaria para la interfaz de usuario trabajando con React y bootstrap."
    }

  ]

  const OwnProjects = [
    {
      id: "1",
      name: "Portafolio",
      url: "https://github.com/Contredu/portafolio-carlos",
      imagen: "./src/assets/portafolio.png",
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
            <div className="my-4 p-4 flex justify-center items-center flex-col gap-4">
              <h2 className="font-serif text-4xl text-shadow-lg text-shadow-gray-900">Conéctate conmigo</h2>
              <section className="flex flex-wrap justify-center items-start my-6 gap-8">
                <Github />
                <Linkedin />
                <XIcon />
                <GmailIcon />
              </section>

              {/* my skills */}
              <h2 className="my-6 w-[50%] text-center font-serif text-4xl text-shadow-lg text-shadow-gray-900 border-b border-black shadow-xl shadow-black/40">Mis skills</h2>
              <section className="flex flex-wrap justify-center items-start gap-4">
                <MySkills />
              </section>
            </div>

            {/* Side rigth */}
            <div className="my-4 p-4 gap-4">
            <h2 className="font-serif text-4xl text-shadow-lg text-shadow-gray-900">¡Hola! Soy Carlos Contreras</h2>

            <div className="my-4 mx-2 border rounded-xl p-4 bg-white/10 shadow-md shadow-white/20">
              {/* Card presentation */}
              <CardPresentation />
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
                <CardDetails project={project.id} name={project.name} url={project.url} imagen={project.imagen} description={project.description} />
              )
              )}
            </div>


            {/* collaborative projects */}
            <div className="m-2">
              <h2 className="flex justify-center text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20 text-shadow-lg text-shadow-gray-900">Proyectos colaborativos</h2>

              {CollaborativeProjects.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (CollaborativeProjects.map((project) =>
                <CardDetails project={project.id} name={project.name} url={project.url} imagen={project.imagen} description={project.description} />
              )
              )}

            </div>


            {/* Own Projects */}
            <div className="m-2">
              <h2 className="text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20 text-shadow-lg text-shadow-gray-900">Proyectos propios</h2>

              {OwnProjects.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (OwnProjects.map((project) =>
                <CardDetails project={project.id} name={project.name} url={project.url} imagen={project.imagen} description={project.description} />
              )
              )}

            </div>
          </div>
        </div>
        <h4 className="mt-2 text-lg font-bold">&copy; 2026 Diseñado por Carlos.Developer</h4>
      </div>
    </>
  )
}

export default App