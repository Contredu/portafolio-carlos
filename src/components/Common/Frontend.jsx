// FALTA SVG DE:
// -Nexts.js
// -TypeScript
// -Bootstrap

export const FrontTech = () => {
    return (
        <>
            <section className="flex flex-wrap">

                <div className=" flex flex-row border p-1 m-2 rounded-md justify-items-center">
                    <span>
                        <svg className="text-[#61DAFB] size-5 rounded-full inline-block ">
                            <use href="./SVG Redes sociales/sprite.svg#icon-react" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">React</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="bg-white text-[#F7DF1E] size-5 rounded-full inline-block">
                            <use href="./SVG Redes sociales/sprite.svg#icon-javascript" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">JavaScript</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <p className="p-2 text-xs">Next.js</p>
                </div>
                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <p className="p-2 text-xs">TypeScript</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="text-[#E34F26] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-html" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">HTML5</p>
                </div>
                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="bg-white text-[#663399] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-css" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">CCS3</p>
                </div>
                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="text-[#06B6D4] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-tailwindcss" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">TailwindCSS</p>
                </div>
                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <p className="p-2 text-xs">Boostrap</p>
                </div>
            </section >
        </>
    )
}