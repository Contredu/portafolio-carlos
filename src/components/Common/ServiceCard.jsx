export const ServiceCardFreelance = ({ service }) => {
    return (
        <>

            <div className="grid-cols-1 bg-white/20 border-2 border-fuchsia-500/50 rounded-lg m-3">
                <div className="h-20 w-full flex flex-row border-4 justify-items-center-safe relative overflow-hidden">
                    <span>
                        <svg className="size-15 rounded-full inline-block ">
                            <use href="./icons.svg#icon-airplayvideo" />
                        </svg>
                    </span>
                    <h3 className="text-2xl mb-1 font-bold">{service.tittle}</h3>
                </div>
                <div className="h-26 flex flex-col flex-1 relative text-left p-2">
                    <p className="text-sm overflow-auto ">{service.description}</p>
                </div>
            </div>
        </>
    )
}