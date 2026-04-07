export const MySkills = () => {

    return (
        <>
            <div className="flex flex-wrap justify-center items-start my-6 gap-8">
                {/* Aquí puedes agregar tus habilidades */}
                <span className="bg-cyan-200 text-black font-semibold px-4 py-2 rounded-lg shadow-md shadow-cyan-500 transition-transform transform hover:scale-105">
                    <svg className="bg-white text-[#F7DF1E] size-6 rounded-full inline-block mr-2">
                        <use href="./src/assets/SVG Redes sociales/sprite.svg#icon-javascript"/>
                        </svg>
                    JavaScript
                </span>
                <span className="bg-cyan-200 text-black font-semibold px-4 py-2 rounded-lg shadow-md shadow-cyan-500 transition-transform transform hover:scale-105">
                                        <svg className="text-[#61DAFB] size-6 rounded-full inline-block mr-2">
                        <use href="./src/assets/SVG Redes sociales/sprite.svg#icon-react"/>
                        </svg>React</span>
                <span className="bg-cyan-200 text-black font-semibold px-4 py-2 rounded-lg shadow-md shadow-cyan-500 transition-transform transform hover:scale-105">
                    <svg className="text-[#5FA04E] size-6 rounded-full inline-block mr-2">
                        <use href="./src/assets/SVG Redes sociales/sprite.svg#icon-nodejs"/>
                    </svg>
                    Node.js
                </span>
                <span className="bg-cyan-200 text-black font-semibold px-4 py-2 rounded-lg shadow-md shadow-cyan-500 transition-transform transform hover:scale-105">
                    <svg className="bg-white text-[#663399] size-6 rounded-full inline-block mr-2">
                        <use href="./src/assets/SVG Redes sociales/sprite.svg#icon-css"/>
                    </svg>
                    CSS
                </span>
                <span className="bg-cyan-200 text-black font-semibold px-4 py-2 rounded-lg shadow-md shadow-cyan-500transition-transform transform hover:scale-105">
                    <svg className="text-[#E34F26] size-6 rounded-full inline-block mr-2">
                        <use href="./src/assets/SVG Redes sociales/sprite.svg#icon-html"/>
                    </svg>
                    HTML
                </span>
                <span className="bg-cyan-200 text-black font-semibold px-4 py-2 rounded-lg shadow-md shadow-cyan-500 transition-transform transform hover:scale-105">

                        <img src="./src/assets/SVG Redes sociales/python-logo-only.svg" alt="Python" className="object-fit size-6 rounded-full inline-block mr-2"/>

                    Python
                </span>
                <span className="bg-cyan-200 text-black font-semibold px-4 py-2 rounded-lg shadow-md shadow-cyan-500 transition-transform transform hover:scale-105">
                    <svg className="text-[#06B6D4] size-6 rounded-full inline-block mr-2">
                        <use href="./src/assets/SVG Redes sociales/sprite.svg#icon-tailwindcss"/>
                    </svg>
                    TailwindCSS
                </span>

                <span className="bg-cyan-200 text-black font-semibold px-4 py-2 rounded-lg shadow-md shadow-cyan-500 transition-transform transform hover:scale-105">
                    <svg className="text-[#3BABC3] size-6 rounded-full inline-block mr-2">
                        <use href="./src/assets/SVG Redes sociales/sprite.svg#icon-flask"/>
                    </svg>
                    Flask
                </span>
                {/* Agrega más habilidades según sea necesario */}
            </div>
        </>
    )
}