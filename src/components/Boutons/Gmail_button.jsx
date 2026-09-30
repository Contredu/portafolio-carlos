export const GmailIcon = () => {
    
    const urlGmail = "mailto:carloscontreras.dev@gmail.com";
    const subject = "¡Hola! Estoy interesado en tus servicios";
    const body = "Hola Carlos, me gustaría poder hacer una posible colaboración contigo. Por favor, contáctame para más detalles.";
    const mailtoLink = `${urlGmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;    

    return (
        <>
           <a className="transition-transform duration-300 hover:scale-110" href={mailtoLink} target="_blank">
                <svg className="text-[#ffffff] size-10">
                    <use href="./SVG Redes sociales/sprite.svg#icon-gmail" />
                </svg>
            </a>
        </>
    )
}
