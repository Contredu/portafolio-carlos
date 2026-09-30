import { Navbar } from "./components/Common/Navbar";
import { Header } from "./components/Common/Header";
import { HowWork } from "./components/Sections/Jobs_section";
import { CtaBanner } from "./components/Common/Cta";
import { Footer } from "./components/Common/Footer";
import { Technologies } from "./components/Sections/Technologies_section";
import { Services_section } from "./components/Sections/Services_section";
import { Projects_section } from "./components/Sections/Projects_section";

function App() {
  return (
    <>
      <div className="bg-black text-white text-center px-10 py-5">
        {/* NAVBAR */}
        <Navbar />

        {/* HEADER */}
        <Header />

        {/* PROYECYTOS DESTACADOS */}
        <Projects_section />

        {/* DETALLE DEL PROYECTO */}
        {/* <div className="flex justify-between mt-2">
          <p className="text-left text-md">CASO DE ESTUDIO DESTACADO</p>
        </div> */}

        {/* TECHNOLOGIES */}
        <Technologies />

        {/* Trayectória */}
        {/* <div className="flex justify-between m-2">
          <p className="text-left text-md">TRAYECTÓRIA</p>
        </div> */}

        {/* Servicies Freelance */}
        <Services_section />

        {/* How I Work */}
        <HowWork />

        {/* Call to Action */}
        <CtaBanner />

        {/* Footer */}
        <Footer />

        <h4 className="mt-2 text-left text-sm font-bold">
          &copy; 2026 Diseñado por Carlos.Developer
        </h4>
      </div>
    </>
  );
}

export default App;