// FALTA SVG DE:
// -Express
// -FastAPI
// -JWT
// -WebSocket

export const BackTech = () => {
    return (
        <>
            <section className="flex flex-wrap border-r-4 border-fuchsia-500/50">

                <div className=" flex flex-row border p-1 m-2 rounded-md justify-items-center">
                    <span>
                        <svg className="text-[#5FA04E] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-nodejs" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">Node.js</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="text-[#ffffff] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-express" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">Express</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <img src="./SVG Redes sociales/python-logo-only.svg" alt="Python" className="object-fit size-6 rounded-full inline-block mr-2" />
                    </span>
                    <p className="p-2 text-xs">Python</p>
                </div>
                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="text-[#5FA04E] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-fastapi" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">FastAPI</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <p className="p-2 text-xs">REST API</p>
                </div>
                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="text-[#5FA04E] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-jwt" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">JWT</p>
                </div>
                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <p className="p-2 text-xs">WebSockets</p>
                </div>
            </section >
        </>
    )
}