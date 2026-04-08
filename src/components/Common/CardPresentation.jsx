export const CardPresentation = () => {
    return (
        <>
        <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="p-4">
                  <img src="./foto-perfil.png" alt="" className="object-cover object-center size-30 rounded-full shadow-lg shadow-gray-700 hover:scale-105 transition-transform" />
                </div>
                <div className="w-100">
                  <h2 className="text-2xl text-shadow-lg text-shadow-gray-900">QUIEN SOY Y MI PASION</h2>
                  <p className="text-black font-semibold">Desarrollador Full Stack con experiencia en JavaScript, React, Bootstrap y
                    Python, enfocado en crear soluciones eficientes, seguras y orientadas al usuario.
                    Mi camino comenzó desde el emprendimiento: la necesidad de construir mi
                    propio ecommerce despertó mi pasión por la programación. Hoy combino
                    visión de negocio con mentalidad técnica para crear proyectos escalables y con
                    impacto real. Destaco por mi curiosidad constante, pensamiento analítico y el
                    deseo de ayudar a otros a entender y aprovechar el mundo tecnológico.
                  </p>
                </div>
              </div>
        </>
    )
}