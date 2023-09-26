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
            <HeaderTitle direction="/administracion/tramites/solicitudes" title="" />
      
            <h1 className=" text-white text-center font-bold text-4xl p-8">
                Cambio de apellido
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
                        <li>Presentar una Carta Dirigido Al: Ing. Msc. Franklin Nestor Rada y presentar en la ventanilla de tramites:
                            <br/><br/>
                            2 - Certificados de Nacimiento Originales<br/>
                            2 - Fotocopias de Carnet <br/>
                            2 - Fotocopias de Titulo de Bachiller Legalizado<br/>
                            1 - Original o copias legalizadas de Segip<br/>
                            1 - Original o copias legalizadas de Sereci<br/>
                        </li>
                    </ol>
                    <div className="absolute -bottom-10 right-0 mr-10 mb-1 flex flex-row items-center gap-4 justify-center bg-slate-600 rounded-2xl p-3">
                        <img
                            src="/icons/clockicon.png"
                            alt="Encargado icon"
                            className="w-12"
                        />
                        <p className="text-white text-xl font-bold">
                            Duracion del tramite: 15 dias a partir del pago
                        </p>
                    </div>


                </div>

            </div>
        </>
    );
}
export default solicitudes;
