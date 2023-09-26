import React from 'react'
import ImageCarrousel from "@/app/components/image-carrousel";
import HeaderTitle from '@/app/components/header-title';
const slides = [
    "/administracion/tramites.png",
    "/administracion/cajas.png",
    "https://images.pexels.com/photos/6794920/pexels-photo-6794920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6794920/pexels-photo-6794920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const descriptions = [
    "Tramites se encuentra en la torre innovacion",
    "Cajas se encuentran en la torre innovacion",
    "Los jurados externos que participaron en defensas de grado pueden realizar el cobro de su sueldo por cajas",
    "Los jurados externos que participaron en defensas de grado pueden realizar el cobro de su sueldo por cajas",
];
function ProcesoAcademico() {
    return (
        <>
            <div className="mt-3 -ml-24">
                <HeaderTitle direction="/administracion/tramites/procesosAcademicos" title="" />
            </div>
            <h1 className=" text-white text-center font-bold text-4xl p-8 -mt-5">
                Extension de documentos de defensa publica
            </h1>
            <div className="grid grid-cols-12 p-10 gap-20 py-0">
                <div className="col-span-5">
                    <ImageCarrousel

                        slides={slides}
                        description={descriptions}
                    ></ImageCarrousel>
                    <div className="mt-8"></div>
                    <div className="flex flex-row items-center gap-4 justify-center">
                        <img
                            src="/icons/usericon.png"
                            alt="Encargado icon"
                            className="w-20"
                        />
                        <p className="text-white text-xl font-bold">
                            Encargado: Daniel Chavez - 77731872
                        </p>
                    </div>
                </div>
                <div className="col-span-7 text-white font-bold m-10 relative ">
                    <ol className="text-2xl text-justify list-decimal grid gap-5 ">
                        <li>Presentar una Carta Dirigido Al: Ing. Msc. Franklin Nestor Rada solicitando la extensión de documentos de defensa pública </li>
                        <li>
                            Recojo del formulario de Solvencia interna en ventanilla de trámites para su llenado y sellado correspondiente en Dirección de carrera, Biblioteca, Cajas y Plataforma de informaciones
                        </li>
                        <li>
                            Presentar en la ventanilla de trámites Carta original y fotocopia, Formulario de solvencia (Llenado y sellado), Fotocopia de carnet de identidad (Alumnos Nacionales) o Fotocopia Pasaporte (Con visa vigente) en caso de Alumnos extranjeros
                        </li>
                    </ol>
                    <div className="absolute -bottom-10 right-0 mr-10 mb-1 flex flex-row items-center gap-4 justify-center bg-slate-600 rounded-2xl p-3">
                        <img
                            src="/icons/clockicon.png"
                            alt="Encargado icon"
                            className="w-12"
                        />
                        <p className="text-white text-xl font-bold">
                            Duracion del tramite: 72 hrs
                        </p>
                    </div>


                </div>

            </div>
        </>
    );
}
export default ProcesoAcademico;
