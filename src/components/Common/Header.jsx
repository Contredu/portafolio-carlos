export const Header = () => {
    return (
        <>
            {/* Div principal que separa la información de la imagen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-around items-start p-2">

                <div className="">
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
                    <div className="flex flex-row justify-start mt-10">
                        <div className="border me-4 rounded-md">
                            <p className="p-2 text-xs">Disponibilidad para nuevas oportunidades</p>
                        </div>
                        <div className="border rounded-md">
                            <p className="p-2 text-xs">Disponible para proyectos freelance</p>
                        </div>
                    </div>

                    {/* Localitation */}

                    <div className="flex flex-row justify-start mt-4">
                        <div className="me-4 border rounded-md">
                            <p className="p-2 text-xs">Valencia-España</p>
                        </div>
                        <div className="border rounded-md">
                            <p className="p-2 text-xs">Remoto</p>
                        </div>
                    </div>


                    {/* Jobs & Contacts */}
                    <div className="flex flex-row justify-between mt-10">
                        {/* Projects */}
                        <div className="w-40 h-10 my-2 p-2 border rounded-md text-black font-bold bg-blue-400">
                            <p className="text-center">Ver proyectos</p>
                        </div>

                        {/* Contact */}
                        <div className="w-40 h-10 my-2 p-2 border rounded-md">
                            <p>Contactar</p>
                        </div>

                        {/* CV */}
                        <div className="w-40 h-10 my-2 p-2 border rounded-md">
                            <p>Descargar CV</p>
                        </div>
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