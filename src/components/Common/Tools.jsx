export const ToolsTech = () => {
    return (
        <>
            <section className="flex flex-wrap">

                <div className=" flex flex-row border p-1 m-2 rounded-md justify-items-center">
                    <span>
                    <svg className="text-[#3BABC3] size-6 rounded-full inline-block mr-2">
                        <use href="./SVG Redes sociales/sprite.svg#icon-flask"/>
                    </svg>
                    </span>
                    <p className="p-2 text-xs">GitHub</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>

                    </span>
                    <p className="p-2 text-xs">Git</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <img src="./SVG Redes sociales/python-logo-only.svg" alt="Python" className="object-fit size-6 rounded-full inline-block mr-2" />
                    </span>
                    <p className="p-2 text-xs">Vercel</p>
                </div>
                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <p className="p-2 text-xs">Postman</p>
                </div>
            </section >
        </>
    )
}