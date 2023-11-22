"use client";
import VideoPlayer from "@/app/components/video-player";
import Circularbutton from "@/app/components/circular-button";
import React, { useState, useEffect } from "react";
import WhiteHeaderTitle from "@/app/components/white-header-title";
import { ICajasData } from "../../../../utils/interfaces/cajasData";
import servicesProvider from "../../../../utils/providers/servicesProvider";
import Link from "next/link";
function BienestarUniversitarioPage() {
  const videoUrl =
    "https://www.youtube.com/embed/RRLkkkfr8vA?si=yQeu4luCZAG18Xg4";
  const videoWidth = "580px";
  const videoHeight = "100px";

  const [services, setServices] = useState<ICajasData[]>([]);

  useEffect(() => {
    async function doFetch() {
      setServices(await servicesProvider.ServicesList());
    }
    doFetch();
  }, []);
  return (
    <>
      <WhiteHeaderTitle
        direction="/administracion"
        title="Volver"
        titleHeader="Cajas"
        directionRight="/administracion/cajas/pagosenlinea"
        titleRight="Pagos en línea ->"
      />
      <div className="grid grid-cols-1 w-full px-4 gap-x-8 xl:grid-cols-12">
        <div className="col-span-5 bg-green">
          <h2 className="text-center mt-4 text-2xl font-bold text-white mb-2">
            Ubicación
          </h2>
          <div className="grid justify-items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tnDQAVuJp5c?si=Udl_tGNxPNoPXJx-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-span-7 grid grid-cols-1 gap-16 pt-8  h-fit mt-6 sm:grid-cols-2 xl:mr-16">
          <div className="bg-[#898989] rounded-2xl p-4 text-white my-auto shadow-lg h-full">
            <h3 className="text-center text-2xl font-bold mb-2">Contactos</h3>
            <ul className="text-xl p-6 pt-2 text-center">
              <li>Teléfonos: 2001800 </li>
              <li>2246725</li>
              <li>2246726</li>
              <li>Whatsapp: +59177277872</li>
            </ul>
          </div>
          <div className="bg-[#898989] rounded-2xl p-4 text-white my-auto shadow-lg h-full">
            <h3 className="text-center text-2xl font-bold mb-2">
              Horarios de atención
            </h3>
            <ul className="text-xl p-6 pt-2 text-center">
              <li>Lunes a Viernes: 08:00 a 19:00</li>
              <li>Sabado: 08:00 a 12:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-4 text-4xl font-bold text-white">
          Servicios de Cajas
        </h1>
        <div className="flex flex-row m-10 mt-4 mb-0 pb-4 justify-evenly">
          {services.map((e, index) => {
            if (e.status == "success") {
              return (
                <Circularbutton
                  key={index}
                  imageUrl={e.imagen}
                  text={e.nombre}
                  routeUrl={`cajas/${e.id}`}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default BienestarUniversitarioPage;
