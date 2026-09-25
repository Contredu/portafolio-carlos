// FALTA SVG DE:
// -GitHub
// -Git
// -Vercel
// -Postman

export const ToolsTech = () => {
    return (
        <>
            <section className="flex flex-wrap">

                <div className=" flex flex-row border p-1 m-2 rounded-md justify-items-center">
                    <span>
                        <svg className="text-[#ffffff] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-github" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">GitHub</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="-[#ffffff] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-git" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">Git</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="bg-[#ffffff] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-vercel" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">Vercel</p>
                </div>
                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="text-[#ffffff] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-postman" />
                        </svg>
                    </span>                   
                    <p className="p-2 text-xs">Postman</p>
                </div>
            </section >
        </>
    )
}