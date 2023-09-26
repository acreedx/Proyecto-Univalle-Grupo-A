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
export default function Certificaciones() {
  const [currentPage, setCurrentPage] = useState(1);
  const tramitesPorPagina = 6;

  // Lista de trámites
  const tramites: Tramite[] = [
    {
      text: "Certificado  de calificaciones y programas analiticos",
      imageUrl: "https://static.vecteezy.com/ti/vetor-gratis/p3/21023966-planos-icone-vetor.jpg",
      routeUrl: "/administracion/tramites/certificaciones/1",
    },
    {
      text: "Certificado de calificaciones",
      imageUrl: "https://th.bing.com/th/id/R.e8475c3411c9046da429b7bf8912cfb2?rik=HHVk8X4pLg528g&riu=http%3a%2f%2fwww.tastunisia.com%2fwp-content%2fuploads%2f2016%2f10%2fimmo_erp.png&ehk=fS4CP%2baTsE6UXg%2btMOz1TZwDccNw1o%2b1tFj%2f1AJei4k%3d&risl=&pid=ImgRaw&r=0",
      routeUrl: "/administracion/tramites/certificaciones/1",
    },
    {
      text: "Certificado de estudiante regular",
      imageUrl: "https://cdn.icon-icons.com/icons2/1827/PNG/512/4288588certificatedegreediplomaeducationpatent-115768_115745.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Certificado de vencimiento de plan de estudios",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/002/746/197/non_2x/school-program-schedule-flat-color-icon-education-and-studying-plan-skill-development-learning-course-week-on-calender-cartoon-style-clip-art-for-mobile-app-isolated-rgb-illustration-vector.jpg",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Certificado de puntaje",
      imageUrl: "https://irp.cdn-website.com/d3af38d7/dms3rep/multi/003-documento-legal.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    },
    {
      text: "Certificado de puntaje",
      imageUrl: "https://irp.cdn-website.com/d3af38d7/dms3rep/multi/003-documento-legal.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    }, {
      text: "Certificado de puntaje",
      imageUrl: "https://irp.cdn-website.com/d3af38d7/dms3rep/multi/003-documento-legal.png",
      routeUrl: "/administracion/tramites/procesosAcademicos/1",
    }, {
      text: "Certificado de puntaje",
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


}