"use client"
import ButtonNav from "@/app/components/ButtonNav"
import CircularButton from "@/app/components/circular-button"
import { text } from "stream/consumers";
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import HeaderTitle from "@/app/components/header-title";
interface Tramite {
  text: string;
  imageUrl: string;
  routeUrl: string;
}
function ProcesosAcademicos() {
  const [currentPage, setCurrentPage] = useState(1);
  const tramitesPorPagina = 6;

  // Lista de trámites
  const tramites: Tramite[] = [
    {
      text: "Extencion de documentos de defensa publica",
      imageUrl: "https://servicios.poder-judicial.go.cr/media/k2/items/cache/d9b208614500b6f80739755fd29fad52_L.jpg",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Titulo de provicion nacional",
      imageUrl: "https://thumbs.dreamstime.com/b/ic%C3%B4ne-plate-bleue-de-cercle-certificat-119294924.jpg",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Extencion de diploma de maestria",
      imageUrl: "https://i0.wp.com/enfermeriabuenosaires.com/wp-content/uploads/2018/11/1Maestria-1.png?fit=225%2C240&ssl=1",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Convalidacion de materias y traspasos",
      imageUrl: "https://moria.aurens.com/content/blog_post/829/1639098738-Notepad-550x585.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Legalizacion de diploma",
      imageUrl: "https://irp.cdn-website.com/d3af38d7/dms3rep/multi/003-documento-legal.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Legalizacion de diploma",
      imageUrl: "https://irp.cdn-website.com/d3af38d7/dms3rep/multi/003-documento-legal.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Legalizacion de diploma",
      imageUrl: "https://irp.cdn-website.com/d3af38d7/dms3rep/multi/003-documento-legal.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },

    {
      text: "Legalizacion de diploma",
      imageUrl: "https://irp.cdn-website.com/d3af38d7/dms3rep/multi/003-documento-legal.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Legalizacion de diploma",
      imageUrl: "https://irp.cdn-website.com/d3af38d7/dms3rep/multi/003-documento-legal.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Legalizacion de diploma",
      imageUrl: "https://irp.cdn-website.com/d3af38d7/dms3rep/multi/003-documento-legal.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Legalizacion de diploma",
      imageUrl: "https://irp.cdn-website.com/d3af38d7/dms3rep/multi/003-documento-legal.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },


  ];

  const startIndex = (currentPage - 1) * tramitesPorPagina;
  const endIndex = startIndex + tramitesPorPagina;
  const tramitesEnPagina = tramites.slice(startIndex, endIndex);

  const totalPages = Math.ceil(tramites.length / tramitesPorPagina);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="mt-3 md:-ml-24">
        <HeaderTitle direction="/administracion" title="" />
      </div>

      <ul className="flex flex-col md:flex-row items-center py-5 p-4 gap-4 justify-center md:-mt-5">
        <ButtonNav href="/administracion/tramites/solicitudes" text="Solicitudes" />
        <ButtonNav href="/administracion/tramites/procesosAcademicos" text="Procesos académicos" />
        <ButtonNav href="/administracion/tramites/certificaciones" text="Certificaciones" />
      </ul>

      <div className="flex justify-between items-center mx-6">
        <button
          className={`text-white rounded-full p-2 text-4xl md:text-7xl h-full flex items-center ${currentPage === 1 ? "invisible" : "visible"}`}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowAltCircleLeft />
        </button>

        <div className="flex flex-wrap flex-grow justify-center items-center gap-4 md:gap-6 text-center">
          {tramitesEnPagina.map((tramite, index) => (
            <div key={index} className="flex justify-center items-center p-2 md:p-4 w-1/2 md:w-1/4">
              <CircularButton imageUrl={tramite.imageUrl} text={tramite.text} routeUrl={tramite.routeUrl} />
            </div>
          ))}
        </div>

        <button
          className={`text-white rounded-full p-2 text-4xl md:text-7xl h-full flex items-center ${currentPage === totalPages ? "invisible" : "visible"}`}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>



      <div className="text-center text-white mt-6 mb-3">
        <span className="inline-block align-middle text-2xl bg-slate-600 rounded-2xl p-2">
          Página {currentPage} de {totalPages}
        </span>
      </div>
    </>
  );

};


export default ProcesosAcademicos