export const Github = () => {

    const urlGithub = "https://github.com/Contredu"

    return (
        <>
            <a className="shadow-black/80 shadow-lg transition-transform duration-300 hover:scale-110" href={urlGithub} target="_blank">
                <svg className="bg-black size-10">
                    <use href="./SVG Redes sociales/sprite.svg#icon-github" />
                </svg>
            </a>

        </>
    )
}