import { Github } from "./components/Button/GithubIcons"
import { Linkedin } from "./components/Button/LinkedindIcons"
import { XIcon } from "./components/Button/XIcons"
import { GmailIcon } from "./components/Button/GmailIcons"
import { CardDetails } from "./components/Common/Card"
import { CardPresentation } from "./components/Common/CardPresentation"
import { Navbar } from "./components/Common/navbar"
import { Header } from "./components/Common/Header"
import { FrontTech } from "./components/Common/Frontend"
import { Projects } from "./data/ProjectsData"
import { BackTech } from "./components/Common/Backend"
import { DataBaseTech } from "./components/Common/DbyOrm"
import { ToolsTech } from "./components/Common/Tools"
import { ServicesData } from "./data/ServiceFreelance"
import { ServiceCardFreelance } from "./components/Common/ServiceCard"

function App() {

  return (
    <>
      <div className="bg-black text-white text-center p-5">
        <Navbar />
        <Header />

        {/* PROYECYTOS DESTACADOS */}
        <div className="flex justify-between">
          <p className="text-left text-md">PROYECTOS DESTACADOS</p>
          <p className="text-blue-400">Ver todos los proyectos</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {Projects.length === 0 ? (
            <h3 className="text-2xl my-10">No hay proyectos aún.</h3>
          ) : (Projects.map((project) =>
            <CardDetails key={project.id} project={project} />
          )
          )}
        </div>

        {/* DETALLE DEL PROYECTO */}
        {/* <div className="flex justify-between mt-2">
          <p className="text-left text-md">CASO DE ESTUDIO DESTACADO</p>
        </div> */}

        {/* TECNOLOGIAS */}
        <div className="m-2">
          <p className="text-left text-md">TECNOLOGÍAS</p>
        </div>
        <div className="my-3 grid grid-cols-1 md:grid-cols-3">
          <div className="p-2 flex flex-col">
            <span className="text-left text-blue-400 text-sm my-2">FRONTEND</span>
            <FrontTech />
          </div>
          <div className="p-2 flex flex-col">
            <span className="text-left text-blue-400 text-sm my-2">BACKEND</span>
            <BackTech />
          </div>
          <div className="p-2 flex flex-col">
            <span className="text-left text-blue-400 text-sm my-2">DATA & ORM</span>
            <DataBaseTech />
          </div>
          <div className="p-2 flex flex-col">
            <span className="text-left text-blue-400 text-sm my-2">TOOLS</span>
            <ToolsTech />
          </div>
        </div>

        {/* Trayectória */}
        <div className="flex justify-between mt-2">
          <p className="text-left text-md">TRAYECTÓRIA</p>
        </div>

        {/* Servicios Freelance */}
        <div className="flex justify-between mt-2">
          <p className="text-left text-md">SERVICIOS FRELANCE</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          {ServicesData.length === 0 ? (
            <span>ACTUALMENTE NO DISPONEMOS DE SERVICIOS, ALTO VOLUMEN DE TRABAJO.</span>
          ) : (ServicesData.map((service)=>
          <ServiceCardFreelance key={service.id} service={service}/>)
          )
          }
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
          </div>
          <h4 className="mt-2 text-left text-sm font-bold">&copy; 2026 Diseñado por Carlos.Developer</h4>
        </div >
      </>
      )
}

      export default App