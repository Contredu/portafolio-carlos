export const HowWork = () => {
    return (
        <>
            <div className="flex mt-2">
                <span>
                    <svg className="size-5 rounded-full">
                        <use href="./public/icons.svg#icon-smallarrow" />
                    </svg>
                </span>
                <p className="text-left text-md">CÓMO TRABAJO </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5  ml-8 mt-4">
                <div className="flex ">
                    <div className="border-2 border-blue-400 rounded-full size-10 ">
                        <p className="w-full h-full flex items-center justify-center">01</p>
                    </div>
                    <div className="flex-col w-full text-left">
                        <div className="flex justify-baseline">
                            <span className="font-semibold text-blue-400 p-2"> Entender</span>
                            <span>
                                <svg className="size-10 ">
                                    <use href="./public/icons.svg#icon-arrowright" />
                                </svg>
                            </span>
                        </div>
                        <p className="p-2">Escucho tus objetivos y analizo tus proyectos a fondo</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="border-2 border-blue-400 rounded-full size-10 ">
                        <p className="w-full h-full flex items-center justify-center">02</p>
                    </div>
                    <div className="flex-col w-full text-left">
                        <div className="flex justify-baseline">
                            <span className="font-semibold text-blue-400 p-2"> Diseñar</span>
                            <span>
                                <svg className="size-10 ">
                                    <use href="./icons.svg#icon-arrowright" />
                                </svg>
                            </span>
                        </div>
                        <p className="p-2">Creo la arquitectura, UX/UI y plan de desarrollo.</p>
                    </div>
                </div>

                <div className="flex ">
                    <div className="border-2 border-blue-400 rounded-full size-10 ">
                        <p className="w-full h-full flex items-center justify-center">03</p>
                    </div>
                    <div className="flex-col w-full text-left">
                        <div className="flex justify-baseline">
                            <span className="font-semibold text-blue-400 p-2">Construir</span>
                            <span>
                                <svg className="size-10 ">
                                    <use href="./public/icons.svg#icon-arrowright" />
                                </svg>
                            </span>
                        </div>
                        <p className="p-2">Desarrollo limpio, seguro y escalable.</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="border-2 border-blue-400 rounded-full size-10 ">
                        <p className="w-full h-full flex items-center justify-center">04</p>
                    </div>
                    <div className="flex-col w-full text-left">
                        <div className="flex justify-baseline">
                            <span className="font-semibold text-blue-400 p-2">Lanzar</span>
                            <span>
                                <svg className="size-10 ">
                                    <use href="./public/icons.svg#icon-arrowright" />
                                </svg>
                            </span>
                        </div>
                        <p className="p-2">Pruebas despliegues y puestas en producción.</p>
                    </div>
                </div>

                <div className="flex">
                    <div className="border-2 border-blue-400 rounded-full size-10 ">
                        <p className="w-full h-full flex items-center justify-center">05</p>
                    </div>
                    <div className="flex-col w-full text-left">
                        <div className="flex justify-baseline">
                            <span className="font-semibold text-blue-400 p-2">Mejorar</span>
                            <span>
                                <svg className="size-10 ">
                                    <use href="./public/icons.svg#icon-arrowright" />
                                </svg>
                            </span>
                        </div>
                        <p className="p-2">Monitoreo, optimización y mejora contínua.</p>
                    </div>
                </div>
            </div>
        </>
    )
}