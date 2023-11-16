"use client";
import CardRequirement from "@/app/components/card-requirement";
import CardGray from "@/app/components/card-gray";
import HeaderTitle from "@/app/components/header-title";
import VideoPlayer from "@/app/components/video-player";
import CopyToClipboard from "@/app/components/copy-clipboard";
import GenericButton from "@/app/components/generic-button";
import { isValidUrl } from "@/app/components/functions";
import Circularbutton from "@/app/components/circular-button";
import { useEffect, useState } from "react";
import { IContact, IServicio, IUbicacion, IRequisitos, IHorarios } from "@/Services";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";




function ServicioPage({ searchParams }: { searchParams: URLSearchParams }) {
  const params = useParams();
  const id = parseInt(params.id as string, 10);
  const RequirementInfo = () => {
    const [requirements, setRequirements] = useState<IRequisitos[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const RequerimientosPorPagina = 3;
    useEffect(() => {
      fetch(`https://apisistemaunivalle.somee.com/api/Requisitos/getRequisitosByServiceId/${id}`)
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
                info={requirement.pasosRequisito && requirement.pasosRequisito.map((paso: any) => (
                  <div key={paso.identificador}>
                    <strong>{paso.nombre}</strong>
                  </div>
                ))}
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
      </div>
    );
  };

  const Ubication = () => {
    const [ubiData, setUbiData] = useState<IUbicacion | null>(null);
    const [ubication, setUbication] = useState(true);

    useEffect(() => {
      const fetchUbicationData = async () => {
        try {
          const res = await fetch(`https://apisistemaunivalle.somee.com/api/Ubicaciones/getUbicacionesbyServicioId/${id}`);
          if (!res.ok) {
            throw new Error('Error al obtener los datos de ubicación.');
          }
          const resData = await res.json();
          setUbiData({
            identificador: resData.data[0].identificador,
            descripcion: resData.data[0].descripcion,
            imagen: resData.data[0].imagen,
            video: resData.data[0].video,
          }); // Supongo que solo hay un elemento en el arreglo de datos
        } catch (error) {
          console.error('Error fetching location data:', error);
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
    const imgUrl = imagen ?? ''; // Usa una cadena vacía si la imagen es null
    const videoUrl = video ?? ''; // Usa una cadena vacía si el video es null

    const ubiWidth = '100%';
    const videoHeight = '360';

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

    useEffect(() => {
      fetch(`https://apisistemaunivalle.somee.com/api/Referencia/getReferenciasbyServicioId/${id}`)
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data.data)) {
            setContacts(data.data);
          } else {
            console.error('Los datos de la API no son una matriz válida.');
          }
        })
        .catch(error => {

          console.error('Error fetching data:', error);
        });
    }, []);


    return (
      <div className="mt-10 2xl:mt-0 flex-1">
        <CardGray title="Contactos">
          <table className="min-w-full divide-y divide-gray-200 place-items-center" >
            <thead>
              <tr className="">
                <th className=" text-left">Nombre</th>
                <th className=" text-left">Teléfono</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((datos: any) => (
                <tr key={`datos-${datos.identificador}`} >
                  <td className=" border-b border-gray-200">
                    {datos.nombre || ''}
                  </td>
                  <td className=" border-b border-gray-200">
                    <CopyToClipboard text={datos.numero || ''} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardGray>
      </div>
    );
  };
  const Schedule = () => {
    const [ubiData, setUbiData] = useState<IUbicacion[]>([]);
    const [scheduleData, setScheduleData] = useState<IHorarios[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch location data
          const ubiRes = await fetch(
            `https://apisistemaunivalle.somee.com/api/Ubicaciones/getUbicacionesbyServicioId/${id}`
          );
          if (!ubiRes.ok) {
            throw new Error("Error al obtener los datos de ubicación.");
          }
          const uData = await ubiRes.json();
          setUbiData(uData.data); // Set the array of locations

          // Fetch schedule data
          const scheduleRes = await fetch(
            `https://apisistemaunivalle.somee.com/api/Horarios/getHorariosbyServicioId/${id}`
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
          {ubiData.map((datos: any) => (
            <tr key={`datos-${datos.identificador}`}>
              <p>
                <span className="font-bold">Ubicación: </span>
                <span>{datos.descripcion}</span>
              </p>
            </tr>
          ))}
        </CardGray>
      </div>
    );
  };
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }

  const [servicio, setServicio] = useState<any>(null);

  async function load(id: number) {
    try {
      const res = await fetch(
        `https://apisistemaunivalle.somee.com/api/Servicios/getServicioById/${id}`
      );
      if (!res.ok) {
        throw new Error("Error al obtener los datos del modulo.");
      }
      const resData = await res.json();
      setServicio(resData.data);
    } catch (error) {
      // Manejar el error como desees
      console.error("Error al cargar los datos:", error);
    }
  }

  useEffect(() => {
    load(id);
    console.log(servicio);
  }, [id]);

  return (
    <>
      <div>{servicio ? servicio[0].nombre : "Cargando..."}</div>;
      {servicio && (
        <>
          <HeaderTitle direction="/saludBienestar/clinicaOdontologica" title={servicio[0].nombre} />

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
          </div>
        </>
      )}
    </>
  );


}

export default ServicioPage;
