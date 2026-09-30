import { ServiceCardFreelance } from "../Common/Service_card";
import { ServicesData } from "../../data/ServiceFreelance";

export const Services_section = () => {
  return (
    <>
      <div className="flex justify-between m-2" id="services">
        <p className="text-left text-md">SERVICIOS FRELANCE</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {ServicesData.length === 0 ? (
          <span>
            ACTUALMENTE NO DISPONEMOS DE SERVICIOS, ALTO VOLUMEN DE TRABAJO.
          </span>
        ) : (
          ServicesData.map((service) => (
            <ServiceCardFreelance key={service.id} service={service} />
          ))
        )}
      </div>
    </>
  );
};
