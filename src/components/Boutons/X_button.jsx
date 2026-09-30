export const XIcon = () => {

    const urlX = "https://x.com/CarlosContreDev"

    return (
        <>
            <a className="shadow-black/80 shadow-lg transition-transform duration-300 hover:scale-110" href={urlX} target="_blank">
                <svg className="bg-black text-white size-10">
                    <use href="./SVG Redes sociales/sprite.svg#icon-x" />
                </svg>
            </a>
        </>
    )
}