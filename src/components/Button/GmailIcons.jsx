export const GmailIcon = () => {

    // Aquí tengo que crear un model show para mostrar el correo al hacer click en el icono de gmail, y un boton para copiar el correo al portapapeles

    return (
        <>
            <a className="size-16 rounded-full  shadow-black/80 shadow-lg transition-transform duration-300 hover:scale-110" target="_blank">
                <svg className="bg-white text-[#EA4335] size-16 rounded-full">
                    <use href="./src/assets/SVG Redes sociales/sprite.svg#icon-gmail" />
                </svg>
            </a>
        </>
    )
}