export const Linkedin = () => {

    const urlLinkedin = "https://www.linkedin.com/in/contredu"

    return (
        <>
            <a className="size-20 rounded-full bg-white shadow-black/80 shadow-lg" href={urlLinkedin} target="_blank">
                <img src="./src/SVG Redes sociales/Linkedin.svg" className="size-20 rounded-full" alt="Logo linkedin" />
            </a>
        </>
    )
}