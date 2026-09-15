export const CardDetails = ({ project }) => {

    return (
        <>
            <div className="my-2 bg-white/20 border-2 border-black rounded-lg">
            
                    <img src={project.imagen} className="aspect-2/1 object-cover p-2" />
                
                <div className="flex flex-col my-2">
                    <h3 className="text-2xl mb-2 text-black font-bold text-shadow-lg text-shadow-gray-600">{project.name}</h3>
                    <p className="px-4">{project.description}</p>
                </div>
                <div className="flex flex-row justify-items-center  m-4">
                    <a className="w-40 h-10 p-4 border-2 me-4 border-black rounded-2xl bg-white text-black hover:bg-gray-600 transition duration-150 hover:scale-105" href={project.urlDemo} target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                    <a className="w-40 h-10 p-4 border-2 border-black rounded-2xl bg-black text-white hover:bg-gray-900 transition duration-150 hover:scale-105" href={project.url} target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </div>

            </div>
        </>
    )
}