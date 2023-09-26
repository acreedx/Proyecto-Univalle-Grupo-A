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
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
            routeUrl: "/administracion/tramites/procesosAcademicos/1",
        },
        {
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
            routeUrl: "/administracion/tramites/procesosAcademicos/1",
        },
        {
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
            routeUrl: "/administracion/tramites/procesosAcademicos/1",
        },
        {
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
            routeUrl: "/administracion/tramites/procesosAcademicos/1",
        },
        {
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
            routeUrl: "/administracion/tramites/procesosAcademicos/1",
        },
        {
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
            routeUrl: "/administracion/tramites/procesosAcademicos/1",
        },
        {
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
            routeUrl: "/administracion/tramites/procesosAcademicos/1",
        },
        {
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
            routeUrl: "/administracion/tramites/procesosAcademicos/1",
        },
        {
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
            routeUrl: "/administracion/tramites/procesosAcademicos/1",
        },
        {
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
            routeUrl: "/administracion/tramites/procesosAcademicos/1",
        },
        {
            text: "Certificado de alumno regular",
            imageUrl: "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png",
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
            <HeaderTitle direction="/administracion/tramites/procesosAcademicos" title="" />
          </div>
      
          <ul className="flex flex-col md:flex-row items-center py-5 p-4 gap-4 justify-center md:-mt-5">
            <ButtonNav href="/administracion/tramites/solicitudes" text="Solicitudes" />
            <ButtonNav href="/administracion/tramites/procesosAcademicos" text="Procesos académicos" />
            <ButtonNav href="/administracion/tramites/certificaciones" text="Certificaciones" />
          </ul>
      
          <div className="md:-mt-2">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <button
                className={`text-white rounded-full p-2 text-4xl md:text-7xl ml-2 md:ml-6 ${currentPage === 1 ? "invisible" : "visible"}`}
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaArrowAltCircleLeft />
              </button>
      
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {tramitesEnPagina.map((tramite, index) => (
                  <div key={index} className="flex justify-center items-center p-2 md:p-4 w-1/2 md:w-1/4">
                    <CircularButton imageUrl={tramite.imageUrl} text={tramite.text} routeUrl={tramite.routeUrl} />
                  </div>
                ))}
              </div>
      
              <button
                className={`text-white rounded-full p-2 text-4xl md:text-7xl mr-2 md:mr-6 ${currentPage === totalPages ? "invisible" : "visible"}`}
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <FaArrowAltCircleRight />
              </button>
            </div>
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