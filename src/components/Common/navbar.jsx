import { HiPencilAlt } from "react-icons/hi";


export const Navbar = () => {
  return (
    <>
      <div className="flex m-1 gap-10 pb-2 justify-items-center border-b backdrop-blur-lg sticky top-0 z-40" id="navbar">
        <a className="text-3xl text-left w-[50%]" href="#">
          Carlos<span className="text-blue-400">.dev</span>
        </a>
        <section className="flex justify-around items-center w-full text-md">
        <div className="mx-4 ">
        <a className="p-2" href="#projects">
          Proyectos
        </a>
        </div>
        {/* <div className="mx-4">
        <a className="p-2" href="#about">
          Sobre mí
        </a>
        </div> */}
        <div className="mx-4">
        <a className="p-2" href="#experience">
          Experiencia
        </a>
        </div>
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

        {/* CV */}
        <a
          href="/cv_carlos.pdf"
          download="cv_carlos_contreras.pdf"
          target="_blank"
          className="mx-4 flex gap-4 items-center  bg-blue-500 p-2 justify-items-center rounded-xl hover:scale-110 transition-transform duration-300 hover:bg-blue-600"
        >
          CV
          <HiPencilAlt />
        </a>
        
        </section>
      </div>
    </>
  );
};
