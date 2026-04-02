export const XIcon = () => {

    const urlX = "https://x.com/CarlosContreDev"

    return (
        <>
            <a className="size-16 rounded-full  shadow-black/80 shadow-lg transition-transform duration-300 hover:scale-110" href={urlX} target="_blank">
                <svg className="bg-black text-white size-16 rounded-full">
                    <use href="./src/SVG Redes sociales/sprite.svg#icon-x" />
                </svg>
            </a>
        </>
    )
}