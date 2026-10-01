import { BackTech } from "../Components_technologies/Backend";
import { DataBaseTech } from "../Components_technologies/DbyOrm";
import { FrontTech } from "../Components_technologies/Frontend";
import { ToolsTech } from "../Components_technologies/Tools";

export const Technologies = () => {
  return (
    <>
      <div className="flex m-2">
        <p className="text-left text-md flex items-center justify-center"><span>
            <svg className="size-5 rounded-full">
              <use href="./public/icons.svg#icon-smallarrow" />
            </svg>
          </span>
          TECNOLOGÍAS
        </p>
      </div>
      <div className="my-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <div className="p-2 flex flex-col">
          <span className="text-left text-blue-400 text-sm my-2">FRONTEND</span>
          <FrontTech />
        </div>
        <div className="p-2 flex flex-col">
          <span className="text-left text-blue-400 text-sm my-2">BACKEND</span>
          <BackTech />
        </div>
        <div className="p-2 flex flex-col">
          <span className="text-left text-blue-400 text-sm my-2">
            DATA & ORM
          </span>
          <DataBaseTech />
        </div>
        <div className="p-2 flex flex-col">
          <span className="text-left text-blue-400 text-sm my-2">TOOLS</span>
          <ToolsTech />
        </div>
      </div>
    </>
  );
};
