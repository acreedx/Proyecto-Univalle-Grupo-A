"use client";

import CardRequirement from "@/app/components/card-requirement";
import CardGray from "@/app/components/card-gray";
import HeaderTitle from "@/app/components/header-title";
import VideoPlayer from "@/app/components/video-player";
import CopyToClipboard from "@/app/components/copy-clipboard";
import GenericButton from "@/app/components/generic-button";
import { useEffect, useState } from "react";
import { IContact, IServicio, IUbicacion, IRequisitos } from "@/Services";


const RequirementInfo = () => {
  const [requirements, setRequirements] = useState<IRequisitos[]>([]);
  useEffect(() => {
    fetch('https://apisistemaunivalle.somee.com/api/Requisitos/getRequisitosByModuloId/14')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setRequirements(data.data);
        } else {
          console.error('Los datos de la API no son una matriz válida.');
        }
      })
      .catch(error => {

        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className="col-span-5 mb-10">
      <h3 className="text-center mt-10 text-xl font-bold text-white col-start-2 mb-4 md:text-2xl lg:text-3xl xl:text-4xl">
        Requisitos para usar los servicios de Gabinete Médico
      </h3>
      <div className="flex flex-col gap-16 w-full justify-center col-span-full lg:flex-row">
        {requirements && requirements.map((requirement: any) => (
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
        const res = await fetch('https://apisistemaunivalle.somee.com/api/Ubicaciones/getUbicacionesbyModuloId/14');
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

// const Ubication = () => {
//   const videoUrl =
//     "https://drive.google.com/uc?id=12UmVcV_XpDeF7V2PhrMQ0opcDXSwCZiJ";
//   const imgUrl = "https://www.vcarranza.cdmx.gob.mx/images/construccion.jpg";
//   const ubiWidth = "100%";
//   const videoHeight = "360";

//   const [ubication, setUbication] = useState(true);

//   const handleUbicationInformation = (ubiState: boolean) => {
//     setUbication(ubiState);
//   };

//   return (
//     <div className="col-span-4 2xl:col-span-3">
//       <div className="mb-2 flex flex-col justify-center min-[420px]:flex-row min-[420px]:justify-evenly">
//         <h2 className="text-center mt-4 text-xl font-bold text-white mb-2 md:text-2xl xl:text-3xl">
//           Ubicación
//         </h2>
//         <div className="flex flex-col gap-y-2 items-center justify-center min-[210px]:flex-row min-[210px]:gap-x-2 ">
//           <GenericButton
//             text="Croqui"
//             functionOnClick={() => handleUbicationInformation(true)}
//             active={ubication}
//           />
//           <GenericButton
//             text="Video"
//             functionOnClick={() => handleUbicationInformation(false)}
//             active={!ubication}
//           />
//         </div>
//       </div>

//       {ubication ? (
//         <img src={imgUrl} width={ubiWidth} alt="Croquis" />
//       ) : (
//         <VideoPlayer url={videoUrl} width={ubiWidth} height={videoHeight} />
//       )}
//     </div>
//   );
// };


const Contacts = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    fetch('https://apisistemaunivalle.somee.com/api/Referencia/getReferenciasbyModuloId/14')
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
  return (
    <div className="mt-10 2xl:mt-0 flex-1">
      <CardGray title="Horarios de atención">
        <ul className="list-disc pl-1 sm:pl-2 lg:pl-6 xl:pl-4 2xl:pl-6">
          <li>Lunes a Viernes: 08:00 a 19:00</li>
          <li>Sábado: 08:00 a 12:00</li>
        </ul>
      </CardGray>
    </div>
  );
};

function GabinetePsicoPedagogicoPage() {
  return (
    <>
      <HeaderTitle
        direction="/saludBienestar"
        title="Gabinete Psico-Pedagógico"
      />
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
  );
}

export default GabinetePsicoPedagogicoPage;
