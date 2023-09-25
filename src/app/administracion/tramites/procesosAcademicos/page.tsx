"use client"
import ButtonNav from "@/app/components/ButtonNav"
import CircularButton from "@/app/components/circular-button"
import { text } from "stream/consumers";
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
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

            <ul className="flex items-center py-5 p-4 gap-4 justify-center">
                <ButtonNav href="/administracion/tramites/solicitudes" text="Solicitudes" />
                <ButtonNav href="/administracion/tramites/procesosAcademicos" text="Procesos academicos" />
                <ButtonNav href="/administracion/tramites/certificaciones" text="Certificaciones" />
            </ul>
            <div className="-mt-2">
                <div className="flex justify-center">

                    <button
                        className={`text-white rounded-full p-2 text-7xl ml-6 ${currentPage == 1 ? "invisible" : "visible"}`}
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <FaArrowAltCircleLeft />
                    </button>


                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {tramitesEnPagina.map((tramite, index) => (
                            <div key={index} className="flex justify-center items-center p-4 w-1/4">
                                <CircularButton
                                    imageUrl={tramite.imageUrl}
                                    text={tramite.text}
                                    routeUrl={tramite.routeUrl}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        className={`text-white rounded-full p-2 text-7xl mr-6 ${currentPage == totalPages ? "invisible" : "visible"}`}
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <FaArrowAltCircleRight />
                    </button>

                </div>
            </div>
            <div className="text-center text-white mt-6">
                <span className="inline-block align-middle text-2xl bg-slate-600 rounded-2xl p-2 ">
                    Página {currentPage} de {totalPages}
                </span>
            </div>
        </>
    );
};


export default ProcesosAcademicos