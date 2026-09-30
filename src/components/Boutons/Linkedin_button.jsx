export const Linkedin = () => {

    const urlLinkedin = "https://www.linkedin.com/in/carlos-enrique-contreras-duque/"

    return (
        <>
            <a className="transition-transform duration-300 hover:scale-110" href={urlLinkedin} target="_blank">
                <svg className="bg-black text-white size-10">
                    <use href="./SVG Redes sociales/sprite.svg#icon-linkedin" />
                </svg>
            </a>
        </>
    )
}