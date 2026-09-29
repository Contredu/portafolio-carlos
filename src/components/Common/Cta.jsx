import { HiOutlineMail } from "react-icons/hi";

export const CtaBanner = () => {

  const email = "mailto:carloscontreras.dev@gmail.com";
  const subject = "¡Hola! Estoy interesado en tus servicios";
  const body =
    "Hola Carlos, me gustaría discutir una posible colaboración contigo. Por favor, contáctame para más detalles.";

  const mailtoLink = `${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <div className="flex justify-between items-center my-8 p-4 border-2 border-blue-400 rounded-2xl shadow-lg/50 shadow-white bg-linear-to-r from-blue-900/10 to-fuchsia-500/10 md:flex-row flex-col gap-4">
        <div className="flex size-36 border-2 border-blue-400 rounded-full mx-10 gap-4 shadow-md/50 shadow-white p-4">
          <svg className="w-full h-full">
            <use href="/icons.svg#icon-avion" />
          </svg>
        </div>
        <div className="flex-col text-left">
          <p className="text-6xl font-bold">¿Construimos algo juntos</p>
          <p className="text-lg font-medium mt-6">
            Estoy disponible para nuevas oportunidades y proyectos freelance
          </p>
        </div>
        <div className="flex flex-col mx-10 gap-4">
          <a
            href={mailtoLink}
            className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded transition-colors duration-300 transform hover:scale-105"
          >
            <span className="flex justify-center items-center">
              Hablemos
              <HiOutlineMail className="ml-2" />
            </span>
          </a>
          <p>carloscontreras.dev@gmail.com</p>
        </div>
      </div>
    </>
  );
};
