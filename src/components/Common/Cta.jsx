import { HiOutlineMail } from "react-icons/hi";

export const CtaBanner = () => {
  const email = "mailto:carloscontreras.dev@gmail.com";
  const subject = "¡Hola! Estoy interesado en tus servicios";
  const body =
    "Hola Carlos, me gustaría discutir una posible colaboración contigo. Por favor, contáctame para más detalles.";

  const mailtoLink = `${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <div className="border-2 border-blue-400 rounded-2xl shadow-lg/50 shadow-white bg-linear-to-r from-blue-900/10 to-fuchsia-500/10 my-8 py-4 px-4 flex-col justify-between items-center sm:flex-wrap sm:flex  md:flex md:flex-wrap lg:flex-row lg:justify-around lg:items-center">
        <svg className="flex justify-center items-center size-36 border-2 border-blue-400 rounded-full mx-10 gap-4 shadow-md/50 shadow-white p-4">
          <use href="/icons.svg#icon-avion" />
        </svg>
        <div className="text-left my-6 px-2 gap-2">
          <p className="text-2xl font-bold md:text-6xl">
            ¿Construimos algo juntos
          </p>
          <br />
          <span className="text-lg font-medium mt-6">
            Estoy disponible para nuevas oportunidades y proyectos freelance
          </span>
        </div>
        <div className="flex flex-col my-6 mx-10 gap-2">
          <a
            href={mailtoLink}
            className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white text-center font-bold p-2 rounded transition-colors duration-300 transform hover:scale-105"
          >
              Hablemos
              <HiOutlineMail className="ml-1" />
          </a>
          <p className="flex justify-center items-center text-sm md:text-lg">
            carloscontreras.dev@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};
