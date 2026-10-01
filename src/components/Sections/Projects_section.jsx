import { Projects } from "../../data/ProjectsData";
import { CardDetails } from "../Common/Project_card";

export const Projects_section = () => {
  return (
    <>
      <div className="flex m-2" id="projects">
        <p className="text-left text-md w-full justify-start items-center flex">
          <span>
            <svg className="size-5 rounded-full">
              <use href="./icons.svg#icon-smallarrow" />
            </svg>
          </span>
          PROYECTOS DESTACADOS
        </p>
        <div className="flex justify-end items-center w-full text-right">
          <p className="text-blue-400">Ver todos los proyectos</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {Projects.length === 0 ? (
          <h3 className="text-2xl my-10">No hay proyectos aún.</h3>
        ) : (
          Projects.map((project) => (
            <CardDetails key={project.id} project={project} />
          ))
        )}
      </div>
    </>
  );
};
