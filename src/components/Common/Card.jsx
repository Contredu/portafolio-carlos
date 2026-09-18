export const CardDetails = ({ project }) => {

    return (
        <>
            <div className="grid-cols-1 bg-white/20 border-2 border-fuchsia-500/50 rounded-lg m-3">
                <div className="h-64 w-full relative overflow-hidden">
                    <img src={project.imagen} className="p-2 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0"></div>
                </div>
                <div className="flex flex-col flex-1 relative p-8 text-left">
                    <h3 className="text-2xl mb-1 font-bold">{project.name}</h3>
                    <p className="text-sm">{project.description}</p>
                </div>
                <div className="flex flex-1 relative p-2">
                    <a className="h-full w-full me-2 border-2  border-black rounded-md bg-white text-black hover:bg-gray-600 transition duration-150 hover:scale-105" href={project.urlDemo} target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                    <a className="h-full w-full me-2 border-2 border-black rounded-md bg-black text-white hover:bg-gray-900 transition duration-150 hover:scale-105" href={project.url} target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </div>

            </div>
        </>
    )
}