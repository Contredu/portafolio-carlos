export const Github = () => {

    const urlGithub = "https://github.com/Contredu"

    return (
        <>
            <a className="size-16 rounded-full  shadow-black/80 shadow-lg transition-transform duration-300 hover:scale-110" href={urlGithub} target="_blank">
                <svg className="bg-black size-16 rounded-full">
                    <use href="./src/SVG Redes sociales/sprite.svg#icon-github" />
                </svg>
            </a>

        </>
    )
}