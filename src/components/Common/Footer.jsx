import { Github } from "../Button/GithubIcons";
import { XIcon } from "../Button/XIcons";
import { Linkedin } from "../Button/LinkedindIcons";
import { GmailIcon } from "../Button/GmailIcons";

export const Footer = () => {
  return (
    <footer className="mt-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4" id="contact">
      <div className="text-left">
        <p className="my-4 text-4xl">
          Carlos.<span className="text-blue-400">dev</span>
        </p>
        <p className="my-2 text-md text-blue-400">Full Stack Developer</p>
        <p className="my-4 text-md">
          Construyo productos digitales que <br /> generan impacto.
        </p>
      </div>

      <div className="text-left flex flex-col my-4 gap-2">
        <section>
          <p className="text-md text-blue-400">NAVEGACIÓN</p>
          <a className="my-2 text-md" href="#projects">Proyectos</a>
          {/* <p className="my-2 text-md">Sobre mí</p> */}
          <p className="my-2 text-md">Experiencia</p>
        </section>
      </div>

      <div className="text-left flex flex-col my-4 gap-2">
        <section>
          <p className="text-md text-blue-400">SERVICIOS</p>
          <p className="my-2 text-md">Páginas web</p>
          <p className="my-2 text-md">Ecommerce</p>
          <p className="my-2 text-md">Aplicaciones web</p>
          <p className="my-2 text-md">Automatización e IA</p>
        </section>
      </div>

      <div className="text-left flex flex-col my-4 gap-2">
        <section>
          <p className="text-md text-blue-400">RECURSOS</p>
          <a className="my-2 text-md" href="#">CV</a>
          <p className="my-2 text-md">
            Contacto
          </p>
        </section>
      </div>

      <div className="text-left my-4">
        <p className="text-md text-blue-400">CONECTEMOS</p>
        <section className="flex gap-8 my-4">
          <Github />
          <Linkedin />
          <XIcon />
          <GmailIcon />
        </section>
      </div>
    </footer>
  );
};
