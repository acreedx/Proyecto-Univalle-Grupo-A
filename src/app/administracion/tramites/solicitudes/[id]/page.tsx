import React from 'react'
import ImageCarrousel from "@/app/components/image-carrousel";
import HeaderTitle from '@/app/components/header-title';
const slides = [
    "/administracion/tramites.png",

];
const descriptions = [
    "La ventanilla de Tramites se encuentra en el primer piso de la torre innovacion la torre innovacion",
];
function solicitudes() {
    return (
        <>
            <HeaderTitle direction="/administracion/tramites/procesosAcademicos" title="           Cambio de apellido" />

            <div className="grid grid-cols-1 mt-1 p-5 md:p-10 gap-5 md:gap-20 py-0 xl:grid-cols-12">
                <div className="col-span-7 xl:col-span-5 md:col-span-10">
                    <ImageCarrousel
                        slides={slides}
                        description={descriptions}
                    />
                    <div className="mt-8"></div>
                    <div className="flex flex-row items-center gap-4 justify-center">
                        <img
                            src="/icons/usericon.png"
                            alt="Encargado icon"
                            className="w-12"
                        />
                        <p className="text-white text-base md:text-xl font-bold">
                            Encargado: Daniel Chavez - 77731872
                        </p>
                    </div>
                </div>
                <div className="col-span-7 text-white font-bold m-5 md:m-10 md:col-span-10 xl:col-span-7 relative">
                    <h1 className="mb-5 text-2xl md:text-3xl text-center">Requisitos</h1>
                    <ol className="text-lg md:text-2xl text-justify list-decimal grid gap-2 md:gap-5">
                        <li>Presentar una Carta Dirigido Al: Ing. Msc. Franklin Nestor Rada y presentar en la ventanilla de tramites:
                            <br /><br />
                            2 - Certificados de Nacimiento Originales<br />
                            2 - Fotocopias de Carnet <br />
                            2 - Fotocopias de Titulo de Bachiller Legalizado<br />
                            1 - Original o copias legalizadas de Segip<br />
                            1 - Original o copias legalizadas de Sereci<br />
                        </li>

                    </ol>
                    <div className="absolute right-2 md:-bottom-10 md:right-5 flex flex-row items-center gap-2 bg-slate-600 rounded-2xl p-1 md:p-2">
                        <img
                            src="/icons/clockicon.png"
                            alt="Encargado icon"
                            className="w-8 md:w-10"
                        />
                        <p className="text-white text-sm md:text-base font-bold">
                            Duracion del tramite: 15 dias a partir del pago
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
    
}
export default solicitudes;
