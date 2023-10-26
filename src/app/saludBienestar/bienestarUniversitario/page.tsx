"use client";

import VideoPlayer from "@/app/components/video-player";
import CardGray from "@/app/components/card-gray";
import HeaderTitle from "@/app/components/header-title";
import Circularbutton from "@/app/components/circular-button";
import CopyToClipboard from "@/app/components/copy-clipboard";
import GenericButton from "@/app/components/generic-button";
import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Ubication = () => {
  const videoUrl =
    "https://drive.google.com/uc?id=1VfBa-fHQbXTr3AOOvZMzBuQiGXZSLnI6";
  const imgUrl =
    "https://drive.google.com/uc?id=1EHJkYfgYfkcBAd69TiGuN1lT0wHrX9bL";
  const ubiWidth = "100%";
  const videoHeight = "360";

  const [ubication, setUbication] = useState(true);

  const handleUbicationInformation = (ubiState: boolean) => {
    setUbication(ubiState);
  };

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
  return (
    <div className="mt-10 2xl:mt-0 flex-1">
      <CardGray title="Contactos">
        <ul>
          <li>
            Teléfonos:
            <ul className="list-disc pl-4 sm:pl-6 xl:pl-4 2xl:pl-6">
              <li>
                <CopyToClipboard text="(591-2) 2001800" />
              </li>
              <li>
                <CopyToClipboard text="(591-2) 2246725" />
              </li>
              <li>
                <CopyToClipboard text="(591-2) 2246726" />
              </li>
            </ul>
          </li>
          <li>
            Whatsapp:
            <ul className="list-disc pl-4 sm:pl-6 xl:pl-4 2xl:pl-6">
              <li>
                <CopyToClipboard text="+591 77277872" />
              </li>
            </ul>
          </li>
        </ul>
      </CardGray>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="mt-10 2xl:mt-0 flex-1">
      <CardGray title="Horarios de atención">
        <p>Lunes a Viernes: 08:00 a 12:00 - 15:00 a 19:00</p>
        <br />
        <p>
          <span className="font-bold">Ubicación: </span>
          <span>Planta baja - Torre Innovación</span>
        </p>
      </CardGray>
    </div>
  );
};
type Servicio = {
  identificador: number;
  nombre: string | null;
  modulo: string | null;
  imagen: string;
};

const Services = () => {
  const [services, setServices] = useState<Servicio[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Agrega el estado de la página actual
  const ServiciosPorPagina = 3;

  // const services = [
  //   {
  //     imageUrl: "https://static.vecteezy.com/system/resources/previews/005/734/015/non_2x/scholarship-graduation-cap-certificate-and-coin-cartoon-icon-illustration-education-financial-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg",
  //     text: "Becas y ayudas",
  //     routeUrl: "/saludBienestar/bienestarUniversitario/becasAyudas",
  //   },
  //   {
  //     imageUrl: "https://img.freepik.com/vector-premium/accesorios-oficina-caja-carton-libro-cuaderno-regla-cuchillo-carpeta-lapiz-boligrafo-calculadora-tijeras-cinta-pintura-material-oficina-papeleria-educacion_169241-2421.jpg",
  //     text: "Objetos perdidos",
  //     routeUrl: "/saludBienestar/bienestarUniversitario/objetosPerdidos",
  //   },


  // ];
  useEffect(() => {
    fetch('http://apisistemaunivalle.somee.com/api/Servicios/getActiveServicios')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setServices(data.data);
        } else {
          console.error('Los datos de la API no son una matriz válida.');
        }
      })
      .catch(error => {

        console.error('Error fetching data:', error);
      });
  }, []);
  const startIndex = (currentPage - 1) * ServiciosPorPagina;
  const endIndex = startIndex + ServiciosPorPagina;
  const ServiciosEnPagina = services
    .filter(servicio => servicio.modulo === "Bienestar Universitario" && servicio.imagen !== null)
    .slice(startIndex, endIndex);

  const totalPages = Math.ceil(services.length / ServiciosPorPagina);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (

    <div className="col-span-5 mb-10">

      <h3 className="mt-10 font-bold text-white col-start-2 mb-4 text-center text-base min-[320px]:text-lg sm:text-xl md:text-2xl xl:text-3xl">
        Servicios de bienestar universitario
      </h3>

      <div className="flex gap-2 w-full justify-center col-span-5 flex-col items-center min-[320px]:flex-row">
        <button
          className={`text-white rounded-full p-2 text-4xl md:text-7xl h-full flex items-center ${currentPage === 1 ? "invisible" : "visible"}`}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowAltCircleLeft />
        </button>
        {ServiciosEnPagina
          .map((datos: any, i) => {
            let routeUrl = ''; // Inicializa la variable de ruta

            if (datos.nombre === "Objetos perdidos") {
              routeUrl = "/saludBienestar/bienestarUniversitario/objetosPerdidos";
            } else if (datos.nombre === "Becas y ayudas") {
              routeUrl = "/saludBienestar/bienestarUniversitario/becasAyudas";
            }
            // Si no es ninguno de los 2, routeUrl seguirá siendo una cadena vacía

            return (
              <div key={i} className="flex gap-2">
                <Circularbutton
                  imageUrl={datos.imagen}
                  text={datos.nombre}
                  routeUrl={routeUrl}
                />
              </div>
            );
          })
        }


        <button
          className={`text-white rounded-full p-2 text-4xl md:text-7xl h-full flex items-center ${currentPage === totalPages ? "invisible" : "visible"}`}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};


function BienestarUniversitarioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      // Este evento se ejecuta cuando todos los elementos de la página se han cargado
      setLoading(false); // Oculta la pantalla de carga una vez que todo esté listo
    });

    // Simula una carga ficticia, por ejemplo, una solicitud a una API
    setTimeout(() => {
      // Puedes eliminar esta parte si no necesitas simular una carga ficticia
      // y solo quieres esperar a que se carguen las imágenes y los videos
    }, 2000); // Cambia el tiempo según tus necesidades
  }, []);

  return (
    <>
      <HeaderTitle
        direction="/saludBienestar"
        title="Bienestar Universitario"
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
        <Services />
      </div>
    </>
  );
}

export default BienestarUniversitarioPage;
