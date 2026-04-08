export const GmailIcon = () => {

    function copyText() {
        let textToCopy = document.getElementById("email").value;

        navigator.clipboard.writeText(textToCopy).then(function () {
            alert("Texto copiado: " + textToCopy);
        }).catch(function (err) {
            console.error('Error al copiar: ', err);
        });
    }

    return (
        <>

            <button type="button" command="show-modal" commandfor="gmail-modal" className="size-16 rounded-full  shadow-black/80 shadow-lg transition-transform duration-300 hover:scale-110">
                <svg className="bg-white text-[#EA4335] size-16 rounded-full">
                    <use href="./SVG Redes sociales/sprite.svg#icon-gmail" />
                </svg></button>
            <el-dialog>
                <dialog
                    id="gmail-modal"
                    aria-labelledby="dialog-title"
                    className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
                >
                    <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />

                    <div
                        tabIndex="0"
                        className="bg-transparent flex h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
                    >
                        <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-blue-50 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in w-full m-10 data-closed:sm:translate-y-0 data-closed:sm:scale-95">

                            <div className="px-4 pt-5 pb-4">
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-start border-blue-900 border-b-2 w-full justify-start">
                                        <button
                                            type="button"
                                            command="close"
                                            commandfor="gmail-modal"
                                            className="p-1 font-semibold text-black rounded-full hover:bg-red-600 hover:text-white sm:mt-0 sm:w-auto"
                                        > Cerrar
                                        </button>
                                        <h1 id="dialog-title" className="text-4xl text-blue-900 pb-2 p-1 font-semibold">
                                            Mi correo:
                                        </h1>
                                    </div>
                                    <div className="py-8 flex items-center gap-6">
                                        <input type="text" className="w-100 font-bold text-2xl text-gray-700" id="email" value="carloscontreras.dev@gmail.com" readOnly />
                                        <svg className="size-6 hover:scale-110 transition-transform duration-150" onClick={copyText}>
                                            <use href="./SVG Redes sociales/sprite.svg#icon-copy" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </el-dialog-panel>
                    </div>
                </dialog>
            </el-dialog>


        </>
    )
}