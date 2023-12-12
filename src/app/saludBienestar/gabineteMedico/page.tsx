"use client";

import CardRequirement from "@/app/components/card-requirement";
import CardGray from "@/app/components/card-gray";
import HeaderTitle from "@/app/components/header-title";
import VideoPlayer from "@/app/components/video-player";
import CopyToClipboard from "@/app/components/copy-clipboard";
import GenericButton from "@/app/components/generic-button";
import Circularbutton from "@/app/components/circular-button";
import { isValidUrl } from "@/app/components/functions";
import { useEffect, useState } from "react";
import { IContact, IServicio, IUbicacion, IRequisitos, IHorarios } from "@/Services";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import URL from "../../../../utils/api";

const moduleId = 15;
const Ubication = () => {
  const [ubiData, setUbiData] = useState<IUbicacion | null>(null);
  const [ubication, setUbication] = useState(true);
  const route = "Ubicaciones/getUbicacionesbyModuloId/";
  useEffect(() => {
    const fetchUbicationData = async () => {
      try {
        const res = await fetch(
          `${URL.baseUrl}${route}${moduleId}`
        );
        if (!res.ok) {
          throw new Error("Error al obtener los datos de ubicación.");
        }
        const { data } = await res.json();
        setUbiData(data[0]); // Supongo que solo hay un elemento en el arreglo de datos
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchUbicationData();
  }, []);

  const handleUbicationInformation = (ubiState: boolean) => {
    setUbication(ubiState);
  };

  if (!ubiData) {
    return null; // Puedes mostrar un indicador de carga aquí si lo deseas
  }

  const { imagen, video } = ubiData;
  const imgUrl = imagen ?? ""; // Usa una cadena vacía si la imagen es null
  const videoUrl = video ?? ""; // Usa una cadena vacía si el video es null

  const ubiWidth = "100%";
  const videoHeight = "360";

  return (
    <div className="col-span-4 2xl:col-span-3">
      <div className="mb-2 flex flex-col justify-center min-[420px]:flex-row min-[420px]:justify-evenly">
        <h2 className="text-center mt-4 text-xl font-bold text-white mb-2 md:text-2xl xl:text-3xl">
          Ubicación
        </h2>
        <div className="flex flex-col gap-y-2 items-center justify-center min-[210px]:flex-row min-[210px]:gap-x-2 ">
          <GenericButton
            text="Croqui"
            functionOnClick={() => handleUbicationInformation(true)}
            active={ubication}
          />
          <GenericButton
            text="Video"
            functionOnClick={() => handleUbicationInformation(false)}
            active={!ubication}
          />
        </div>
      </div>

      {ubication ? (
        <img src={imgUrl} width={ubiWidth} alt="Croquis" />
      ) : (
        <VideoPlayer url={videoUrl} width={ubiWidth} height={videoHeight} />
      )}
    </div>
  );
};

const Contacts = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const route = "Referencia/getReferenciasbyModuloId/";
  useEffect(() => {
    fetch(
      `${URL.baseUrl}${route}${moduleId}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setContacts(data.data);
        } else {
          console.error("Los datos de la API no son una matriz válida.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mt-10 2xl:mt-0 flex-1">
      <CardGray title="Contactos">
        {contacts && contacts.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200 place-items-center">
            <thead>
              <tr className="">
                <th className=" text-left">Nombre</th>
                <th className=" text-left">Teléfono</th>
              </tr>
            </thead>
            <tbody>

              {contacts.map((datos: any) => (
                <tr key={`datos-${datos.identificador}`}>
                  <td className=" border-b border-gray-200">
                    {datos.nombre || ""}
                  </td>
                  <td className=" border-b border-gray-200">
                    <CopyToClipboard text={datos.numero || ""} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No existen contactos disponibles.</p>
        )}
      </CardGray>
    </div>
  );
};

const Schedule = () => {
  const [ubiData, setUbiData] = useState<IUbicacion[]>([]);
  const [scheduleData, setScheduleData] = useState<IHorarios[]>([]);
  const routeUbi = "Ubicaciones/getUbicacionesbyModuloId/";
  const routeH = "Horarios/getHorarioByModuloId/";
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch location data
        const ubiRes = await fetch(
          `${URL.baseUrl}${routeUbi}${moduleId}`
        );
        if (!ubiRes.ok) {
          throw new Error("Error al obtener los datos de ubicación.");
        }
        const uData = await ubiRes.json();
        setUbiData(uData.data); // Set the array of locations

        // Fetch schedule data
        const scheduleRes = await fetch(
          `${URL.baseUrl}${routeH}${moduleId}`
        );
        if (!scheduleRes.ok) {
          throw new Error("Error al obtener los datos de horarios.");
        }
        const SData = await scheduleRes.json();
        setScheduleData(SData.data);

        console.log("ubiData:", uData.data);
        console.log("scheduleData:", SData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mt-10 2xl:mt-0 flex-1">
      <CardGray title="Horarios de atención">
        {scheduleData && scheduleData.length > 0 ? (
          <>
            {scheduleData.map((datos: any, index) => (
              <p
                key={index}
              >{`${datos.diasAtencion[0].nombreDia}: ${datos.horaInicio} a ${datos.horaFin}`}</p>
            ))}
          </>
        ) : (
          <p>No hay horarios disponibles.</p>
        )}
        <br />
        {ubiData.length > 0 ? (
          <table>
            <tbody>
              {ubiData.map((datos: any) => (
                <tr key={`datos-${datos.identificador}`}>
                  <td>
                    <span className="font-bold">Ubicación: </span>
                    <span>{datos.descripcion}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay ubicaciones disponibles.</p>
        )}
      </CardGray>
    </div>
  );
};
const RequirementInfo = () => {
  const [requirements, setRequirements] = useState<IRequisitos[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const RequerimientosPorPagina = 3;
  const route = "Requisitos/getRequisitosByModuloId/";
  useEffect(() => {
    fetch(`${URL.baseUrl}${route}${moduleId}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setRequirements(data.data);
          console.log(data.data)
        } else {
          console.error('Los datos de la API no son una matriz válida.');
        }
      })
      .catch(error => {

        console.error('Error fetching data:', error);
      });
  }, []);
  const startIndex = (currentPage - 1) * RequerimientosPorPagina;
  const endIndex = startIndex + RequerimientosPorPagina;
  const RequerimientosEnPagina = requirements
    .slice(startIndex, endIndex);

  const totalPages = Math.ceil(requirements.length / RequerimientosPorPagina);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="col-span-5 mb-10">
      <h3 className="text-center mt-10 text-xl font-bold text-white col-start-2 mb-4 md:text-2xl lg:text-3xl xl:text-4xl">
        Requisitos para usar los servicios de Gabinete Médico
      </h3>
      {requirements.length > 0 ? (
        <>

          <div className="flex flex-col gap-16 w-full justify-center col-span-full lg:flex-row">
            <button
              className={`text-white rounded-full p-2 text-4xl md:text-7xl h-full flex items-center ${currentPage === 1 ? "invisible" : "visible"
                }`}
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaArrowAltCircleLeft />
            </button>
            {RequerimientosEnPagina.map((requirement: any) => (
              <div key={requirement.identificador}>
                <CardRequirement
                  title={requirement.descripcion}
                  info={
                    requirement.pasosRequisito &&
                    requirement.pasosRequisito.map((paso: any) => (
                      <div key={paso.identificador}>
                        <strong>{paso.nombre}</strong>
                      </div>
                    ))
                  }
                />
              </div>
            ))}
            <button
              className={`text-white rounded-full p-2 text-4xl md:text-7xl h-full flex items-center ${currentPage === totalPages ? "invisible" : "visible"
                }`}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </>
      ) : (
        <p className="text-white rounded-full p-2 text-sm md:text-2xl place-self-center text-center h-full">No hay requisitos disponibles. </p>

      )}
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState<IServicio[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Agrega el estado de la página actual
  const ServiciosPorPagina = 3;
  const route = "Servicios/getServicioByModuloId/";
  useEffect(() => {
    fetch(
      `${URL.baseUrl}${route}${moduleId}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setServices(data.data);
        } else {
          console.error("Los datos de la API no son una matriz válida.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const startIndex = (currentPage - 1) * ServiciosPorPagina;
  const endIndex = startIndex + ServiciosPorPagina;
  const ServiciosEnPagina = services
    .filter(
      (servicio) =>
        servicio.imagen !== null
    )
    .slice(startIndex, endIndex);

  const totalPages = Math.ceil(services.length / ServiciosPorPagina);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="col-span-5 mb-10">
      <h3 className="mt-10 font-bold text-white col-start-2 mb-4 text-center text-base min-[320px]:text-lg sm:text-xl md:text-2xl xl:text-3xl">
        Servicios de Gabinete Medico
      </h3>

      <div className="flex gap-2 w-full justify-center col-span-5 flex-col items-center min-[320px]:flex-row">
        <button
          className={`text-white rounded-full p-2 text-4xl md:text-7xl h-full flex items-center ${currentPage === 1 ? "invisible" : "visible"
            }`}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowAltCircleLeft />
        </button>
        {ServiciosEnPagina.map((datos: any, i) => {
          let routeUrl = ""; // Inicializa la variable de ruta
          routeUrl = `/saludBienestar/clinicaOdontologica/${datos.identificador}`;

          // Si no es ninguno de los 2, routeUrl seguirá siendo una cadena vacía

          return (
            <div key={i} className="flex gap-2">
              <Circularbutton
                imageUrl={
                  isValidUrl(datos.imagen) ? datos.imagen : "/ImgDefault.png"
                }
                text={datos.nombre}
                routeUrl={routeUrl}
              />
            </div>
          );
        })}

        <button
          className={`text-white rounded-full p-2 text-4xl md:text-7xl h-full flex items-center ${currentPage === totalPages ? "invisible" : "visible"
            }`}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};
function gabineteMedico() {
  return (
    <>
      <HeaderTitle direction="/saludBienestar" title="Gabinete Médico" />
      <div
        className="mt-8 flex flex-col w-full px-1 gap-x-1
          min-[320px]:px-2
          sm:gap-x-4 sm:px-4
          md:grid grid-cols-4 auto-rows-auto
          xl:px-8
          2xl:px-16
          2xl:grid-cols-5"
      >
        <Ubication />
        <div className="col-start-1 col-span-4 min-[460px]:flex flex-row 2xl:col-start-4 2xl:col-span-2 gap-x-4">
          <Contacts />
          <Schedule />
        </div>
        <RequirementInfo />
        <Services />
      </div>
    </>
  );
}

export default gabineteMedico;
