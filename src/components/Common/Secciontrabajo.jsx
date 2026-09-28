export const HowWork = () => {
    return (
        <>
            <div className="flex justify-between m-2">
                <p className="text-left text-md">CÓMO TRABAJO </p>
            </div>
            <div className="flex flex-wrap ml-8 mt-4">
                <div className="flex h-25 w-80 ">
                    <div className="border-2 border-blue-400 rounded-full size-10 ">
                        <p className="">01</p>
                    </div>
                    <div className="flex-col w-full text-left">
                        <span className="font-semibold text-blue-400 p-2"> Entender</span><br />
                        <p className="p-2">Escucho tus objetivos y analizo tus proyectos a fondo</p>
                    </div>
                </div>

                <div className="flex h-25 w-80 ">
                    <div className="border-2 border-blue-400 rounded-full size-10 ">
                        <p className="">02</p>
                    </div>
                    <div className="flex-col w-full text-left">
                        <span className="font-semibold text-blue-400 p-2"> Diseñar</span><br />
                        <p className="p-2">Creo la arquitectura, UX/UI y plan de desarrollo.</p>
                    </div>
                </div>

                <div className="flex h-25 w-80 ">
                    <div className="border-2 border-blue-400 rounded-full size-10 ">
                        <p className="">03</p>
                    </div>
                    <div className="flex-col w-full text-left">
                        <span className="font-semibold text-blue-400 p-2"> Construir</span><br />
                        <p className="p-2">Desarrollo limpio, seguro y escalable.</p>
                    </div>
                </div>

                <div className="flex h-25 w-80 ">
                    <div className="border-2 border-blue-400 rounded-full size-10 ">
                        <p className="">04</p>
                    </div>
                    <div className="flex-col w-full text-left">
                        <span className="font-semibold text-blue-400 p-2">Lanzar</span><br />
                        <p className="p-2">Pruebas despliegues y puestas en producción.</p>
                    </div>
                </div>

                <div className="flex h-25 w-80 ">
                    <div className="border-2 border-blue-400 rounded-full size-10 ">
                        <p className="">05</p>
                    </div>
                    <div className="flex-col w-full text-left">
                        <span className="font-semibold text-blue-400 p-2">Mejorar</span><br />
                        <p className="p-2">Monitoreo, optimización y mejora contínua.</p>
                    </div>
                </div>
            </div>
        </>
    )
}