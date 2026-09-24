// FALTA SVG DE:
// -Prisma
// -PostgreSQL
// -SQLAlchemy
// -MYSQL

export const DataBaseTech = () => {
    return (
        <>
            <section className="flex flex-wrap border-r-4 border-fuchsia-500/50">

                <div className=" flex flex-row border p-1 m-2 rounded-md justify-items-center">
                    <span>
                        <svg className="text-[#3BABC3] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-flask" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">Flask</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>
                        <svg className="text-[#c3aa3b] size-6 rounded-full inline-block mr-2">
                            <use href="./SVG Redes sociales/sprite.svg#icon-prisma" />
                        </svg>
                    </span>
                    <p className="p-2 text-xs">Prisma</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>

                    </span>
                    <p className="p-2 text-xs">PostgreSQL</p>
                </div>
                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <p className="p-2 text-xs">SQLAlchemy</p>
                </div>

                <div className="flex flex-row justify-items-center border p-1 m-2 rounded-md">
                    <span>

                    </span>
                    <p className="p-2 text-xs">MySQL</p>
                </div>
            </section >
        </>
    )
}