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
export default function Solicitudes() {
    const [currentPage, setCurrentPage] = useState(1);
    const tramitesPorPagina = 6;

    // Lista de trámites
    const tramites: Tramite[] = [
        {
            text: "Extencion del supletorio de diploma academico",
            imageUrl: "https://cdn.xxl.thumbs.canstockphoto.com/graduation-cap-and-diploma-icon-in-a-flat-design-vector-illustration-vector-clip-art_csp47390116.jpg",
            routeUrl: "/administracion/tramites/solicitudes/1",
        },
        {
            text: "Cambio de apellido",
            imageUrl: "https://2.bp.blogspot.com/-JxbmXVacOHI/TwLEbyQ2GdI/AAAAAAAAD6Y/NWkwIhiiIRI/s1600/28Rename.png",
            routeUrl: "/administracion/tramites/solicitudes/1",
        },
        {
            text: "Cambio de nacionalidad",
            imageUrl: "https://th.bing.com/th/id/R.c0edae6b2ed83f05615ccaaf9f0515af?rik=GTx7Y59ScgPxWg&riu=http%3a%2f%2fwww.reflexionesobrasliterarias.com%2fwp-content%2fuploads%2f2019%2f08%2fNacionalidad.png&ehk=Wo50f2rJiOLniXeDN2TeQN2nSxvSIbF0sKVEsvPpB0s%3d&risl=&pid=ImgRaw&r=0",
            routeUrl: "/administracion/tramites/solicitudes/1",
        },
        {
            text: "Nómina de Docentes",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/4880/4880293.png",
            routeUrl: "/administracion/tramites/solicitudes/1",
        },
        {
            text: "Historial Académico",
            imageUrl: "https://cdn-icons-png.flaticon.com/512/2247/2247594.png",
            routeUrl: "/administracion/tramites/solicitudes/1",
        },
        {
            text: "Plan de Estudios en Hora Reloj",
            imageUrl: "https://static.vecteezy.com/system/resources/previews/010/289/855/non_2x/clock-with-calendar-and-pencil-depicting-concept-of-study-timetable-vector.jpg",
            routeUrl: "/administracion/tramites/solicitudes/1",
        },
        {
            text: "Orden de Merito o Ranking",
            imageUrl: "https://us.123rf.com/450wm/makc76/makc761903/makc76190300095/118959655-icono-de-premio-insignia-de-calidad-gold-star-con-cinta-ilustraci%C3%B3n-vectorial.jpg?ver=6",
            routeUrl: "/administracion/tramites/solicitudes/1",
        },
        {
            text: "Informe Técnico del S.S.S.R.O",
            imageUrl: "https://static.vecteezy.com/system/resources/previews/010/322/033/non_2x/technical-report-color-icon-illustration-vector.jpg",
            routeUrl: "/administracion/tramites/solicitudes/1",
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