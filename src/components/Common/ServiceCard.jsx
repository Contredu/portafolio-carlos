// Aqui me falta organizar que los bordes de las tarjetas se actualicen segun el color del icono

export const ServiceCardFreelance = ({ service }) => {
    return (
        <>

            <div className="grid-cols-1 bg-white/20 border-2 border-fuchsia-500/50 rounded-lg p-4 m-3">
                <div className="h-17 flex flex-row  justify-around overflow-hidden">
                    <div className="size-15 p-4 border-2 border-fuchsia-500/50 rounded-lg">
                        <span>
                            <svg className="size-15">
                                <use href={service.avatar} />
                            </svg>
                        </span>
                    </div>
                    <h3 className="text-2xl mb-1 font-bold">{service.tittle}</h3>
                </div>
                <div className="h-18 flex flex-col flex-1 relative text-left">
                    <p className="text-sm overflow-auto ">{service.description}</p>
                </div>
            </div>
        </>
    )
}