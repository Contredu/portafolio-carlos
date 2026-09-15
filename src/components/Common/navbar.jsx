export const Navbar = () => {
    return (
        <>
            <div className="flex flex-row m-1 pb-2 justify-items-center border-b ">
                <div className="basis-124 text-left">
                    <p className="text-3xl">Carlos<span className="text-blue-400">.dev</span></p>
                </div>
                <p className="basis-32">Proyectos</p>
                <p className="basis-32">Sobre mí</p>
                <p className="basis-32">Experiencia</p>
                <p className="basis-32">Servicios</p>
                <p className="basis-32">Contacto</p>

                {/* CV */}
                <div className="basis-32 border border-blue-400 p-2 justify-items-center">
                    <p className="text-blue-400">CV</p>
                </div>
                
            </div>
        </>
    )

};