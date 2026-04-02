export const GmailIcon = () => {

    // const urlGmail = "https://mail.google.com/mail/u/0/#inbox?compose=new"

    return (
        <>
            <a className="size-16 rounded-full  shadow-black/80 shadow-lg transition-transform duration-300 hover:scale-110" target="_blank">
                <svg className="bg-white text-[#EA4335] size-16 rounded-full">
                    <use href="./src/SVG Redes sociales/sprite.svg#icon-gmail" />
                </svg>
            </a>
        </>
    )
}