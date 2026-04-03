export const Linkedin = () => {

    const urlLinkedin = "https://www.linkedin.com/in/carlos-enrique-contreras-duque/"

    return (
        <>
            <a className="size-16 rounded-full  shadow-black/80 shadow-lg transition-transform duration-300 hover:scale-110" href={urlLinkedin} target="_blank">
                <svg className="bg-white text-[#1212DE] size-16 rounded-full">
                    <use href="./src/assets/SVG Redes sociales/sprite.svg#icon-linkedin" />
                </svg>
            </a>
        </>
    )
}