import { TbPointFilled } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import { VscRemoteExplorer } from "react-icons/vsc";
import { FaFileDownload, FaArrowRight } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";




export const Header = () => {
    return (
        <>
            {/* Div principal que separa la información de la imagen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-around items-start p-2">

                <div className="lg:h-full flex flex-col justify-center p-2 ">
                    {/* Information */}
                    <div className="text-left">
                        <p className="my-5 text-xs text-blue-300 ">FULL STACK DEVELOPER</p>
                        <p className="my-4 text-5xl">Carlos <span className="text-blue-400">Contreras</span></p>
                        <p className="my-2 text-3xl text-fuchsia-500">Full Stack Developer</p>
                        <p className="my-4 text-lg">Construyo productos web modernos que conectan <br />
                            <span className="text-blue-400"> tecnología, negocio</span> e
                            <span className="text-blue-400"> inteligencia artificial.</span>
                        </p>
                    </div>

                    {/* Availability */}
                    <div className="flex flex-wrap gap-2 mt-4 lg:gap-10">
                        <div className="border rounded-md flex justify-center items-center">
                            <span><TbPointFilled className="text-green-500 ml-2"/></span><p className="m-1 p-2 text-sm">Disponibilidad para nuevas oportunidades</p>
                        </div>
                        <div className="border rounded-md flex items-center">
                            <span><TbPointFilled className="text-fuchsia-500 ml-2"/></span><p className="m-1 p-2 text-sm">Disponible para proyectos freelance</p>
                        </div>
                    </div>

                    {/* Localitation */}

                    <div className="flex flex-wrap gap-2 mt-4 lg:gap-10">
                        <div className="me-4 border rounded-md flex items-center">
                            <span><HiLocationMarker className="text-blue-400 ml-2"/></span><p className="m-1 p-2 text-sm">Valencia-España</p>
                        </div>
                        <div className="border rounded-md flex items-center">
                            <span><VscRemoteExplorer className="text-blue-400 ml-2"/></span><p className="m-1 p-2 text-sm">Remoto</p>
                        </div>
                    </div>


                    {/* Jobs & Contacts */}
                    <div className="flex flex-wrap gap-2 mt-10 xl:gap-20">
                        {/* Projects */}
                        <a href="#projects" className="w-40 h-10 my-2 p-2 flex items-center justify-center border rounded-md text-black font-bold bg-blue-400 hover:bg-blue-500 transition duration-150 hover:scale-105">
                            <p className="">Ver proyectos</p><span><FaArrowRight className="ms-2"/></span>
                        </a>

                        {/* Contact */}
                        <a href="#contact" className="w-40 h-10 my-2 p-2 flex items-center justify-center border rounded-md hover:bg-gray-500 transition duration-150 hover:scale-105">
                            <span><TfiWrite className="me-2 text-fuchsia-500 "/></span><p>Contactar</p>
                        </a>

                        {/* CV */}
                        <a href="/cv_carlos.pdf" download="cv_carlos_contreras" className="w-40 h-10 my-2 p-2 flex justify-center items-center border rounded-md hover:bg-gray-500 transition duration-150 hover:scale-105">
                            <span><FaFileDownload className="me-2 text-red-500"/></span>
                            <p>Descargar CV</p>
                        </a>
                    </div>
                </div>

                {/* Imagen */}
                <div className="flex justify-items-center">
                    <img className="mask-y-from-50% mask-radial-[50%_70%] mask-radial-from-80% size-[90%]" src="/portafolio.webp" alt="foto principal" />
                </div>
            </div>
        </>
    )
} 