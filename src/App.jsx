import { Github } from "./components/Button/GithubIcons"
import { Linkedin } from "./components/Button/LinkedindIcons"
import { XIcon } from "./components/Button/XIcons"
import { GmailIcon } from "./components/Button/GmailIcons"
import { CardDetails } from "./components/Common/Card"
import { MySkills } from "./components/Common/Skills"
import { CardPresentation } from "./components/Common/CardPresentation"
import { Navbar } from "./components/Common/navbar"
import { Header } from "./components/Common/Header"

function App() {

  const ProjectsAi = [
    {
      id: "1",
      name: "Inoxia Ecommerce",
      url: "",
      urlDemo: "",
      imagen: "./inoxia.png",
      description: "Actualmente en desarrollo, proximamente disponible."
    }
  ]

  const CollaborativeProjects = [
    {
      id: "1",
      name: "Reno Usa",
      url: "https://github.com/IgrowkerTraining/i006-reno-usa-fullstack",
      urlDemo: "",
      imagen: "./Reno.png",
      description: "Sitio corporativo para empresa de renovacióny construcción en Estados Unidos."
    },

    {
      id: "2",
      name: "Padel+",
      url: "https://github.com/4GeeksAcademy/fs_pt_115-ProyectoFinal-Padel",
      urlDemo: "",
      imagen: "./padel.png",
      description: "Plataforma deportiva para reservas de pistas y gestión de torneos de pádel."
    }

  ]

  const OwnProjects = [
    {
      id: "1",
      name: "Portafolio",
      url: "https://github.com/Contredu/portafolio-carlos",
      urlDemo: "https://portafolio-carlos-livid.vercel.app/",
      imagen: "./portafolio.png",
      description: "Mi portafolio web, la puerta de entrada perfecta para que conozcas mi trabajo, mis proyectos y mi visión como desarrollador web."
    }
  ]

  return (
    <>
      <div className="bg-black text-white text-center p-5">
        <Navbar />
        <Header />
        <div className="flex justify-between">
        <p className="text-left text-md">PROYECTOS DESTACADOS</p>
        <p className="text-blue-400">Ver todos los proyectos</p>
        </div>


        
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
              <h2 className="font-serif text-4xl text-shadow-lg text-shadow-gray-900"></h2>

              <div className="my-4 mx-2 border rounded-xl p-4 bg-white/10 shadow-md shadow-white/20">
                {/* Card presentation */}
                <CardPresentation />
              </div>
            </div>

          </div>


          {/* Body */}

          <div className="grid grid-cols-1 p-4 sm:grid-cols-3 gap-4">

            {/* Projects Whit AI */}
            <div className="m-2">
              <h2 className="text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20 text-shadow-lg text-shadow-gray-900">Proyectos con AI</h2>

              {ProjectsAi.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (ProjectsAi.map((project) =>
                <CardDetails key={project.id} project={project} />
              )
              )}
            </div>


            {/* collaborative projects */}
            <div className="m-2">
              <h2 className="flex justify-center text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20 text-shadow-lg text-shadow-gray-900">Proyectos</h2>

              {CollaborativeProjects.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (CollaborativeProjects.map((project) =>
                <CardDetails key={project.id} project={project} />
              )
              )}

            </div>


            {/* Own Projects */}
            <div className="m-2">
              <h2 className="text-3xl border border-white rounded-4xl m-2 p-1 shadow-lg shadow-gray-600/80 bg-white/20 text-shadow-lg text-shadow-gray-900">Proyectos propios</h2>

              {OwnProjects.length === 0 ? (
                <h1 className="text-2xl my-10">No hay proyectos aún.</h1>
              ) : (OwnProjects.map((project) =>
                <CardDetails key={project.id} project={project} />
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