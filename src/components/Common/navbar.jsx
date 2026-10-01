import { HiPencilAlt } from "react-icons/hi";

export const Navbar = () => {
  return (
    <>
      <div
        className="xs:flex-col lg:flex m-1 gap-10 pb-2 justify-center items-center border-b backdrop-blur-lg sticky top-0 z-40"
        id="navbar"
      >
        <a className="text-3xl text-left w-[50%]" href="#">
          Carlos<span className="text-blue-400">.dev</span>
        </a>
        <section className="xs:flex-col my-2 lg:flex justify-around items-center w-full text-md">
          <div className="mx-4 ">
            <a className="p-2" href="#projects">
              Proyectos
            </a>
          </div>
          {/* <div className="mx-4">
            <a className="p-2" href="#experience">
              Experiencia
            </a>
          </div> */}
          <div className="mx-4">
            <a className="p-2" href="#services">
              Servicios
            </a>
          </div>
          <div className="mx-4">
            <a className="p-2" href="#contact">
              Contacto
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
