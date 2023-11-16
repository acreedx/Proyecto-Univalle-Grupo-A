"use client"
import { useEffect, useState } from 'react'
import ImageCarrousel from "@/app/components/image-carrousel";
import HeaderTitle from '@/app/components/header-title';
import { GetServerSidePropsContext } from 'next';
import URL from '@/../utils/api';
import { ITramitesData, convertJSONService } from "@/../utils/interfaces/tramitesData";
import { IStepRequirementData } from '@/../utils/interfaces/stepRequerimentData';
import stepRequerimentProvider from '@/../utils/providers/stepRequerimentProvider';

const slides = [
  "/administracion/tramites.png",
  "/administracion/cajas.png",
];
const descriptions = [
  "Tramites se encuentra en el primer piso de la torre innovacion al lado de cajas",
  "Cajas se encuentran en el primer piso de la torre innovacion al lado de la ventanilla de tramites",
];

function InformacionTramite({ params }: { params: { id: number } }) {
  const [service, setService] = useState<ITramitesData>();
  const route = "Servicios/getTramiteById/";
  const { id } = params;
  const [stepsRequirements, setStepsrequirements] = useState<IStepRequirementData[]>([]);

  useEffect(() => {
    async function doFetch() {
      try {

        fetch(`${URL.baseUrl}${route}${id}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data)
            setService(convertJSONService(res.data[0]))
          });

        setStepsrequirements(await stepRequerimentProvider.GetStepsRequirementsList(id))
      } catch {

      }
    }
    doFetch();
  }, []);


  return (
    <>

      <HeaderTitle direction="/administracion/tramites" title={service?.name} />

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
              {service?.encharged}
            </p>
          </div>
        </div>
        <div className="col-span-7 text-white font-bold m-5 md:m-10 md:col-span-10 xl:col-span-7 relative">
          <h1 className="mb-5 text-2xl md:text-3xl text-center">Requisitos</h1>
          <ol className="text-lg md:text-2xl text-justify list-decimal grid gap-2 md:gap-5">

            {stepsRequirements.map((e, index) => {
              return <li key={index}>
                {e.description}


                  {e.pasosRequisito.map((paso, pasoIndex) => (
                    <ol key={pasoIndex} className='ml-20 text-lg md:text-2xl text-justify list-disc grid gap-2 md:gap-5'>
                        <li>{paso.nameStep}</li>  
                    </ol>
                  ))}

            

              </li>
            })}
          </ol>
          <div className="absolute right-2 md:-bottom-10 md:right-5 flex flex-row items-center gap-2 bg-slate-600 rounded-2xl p-1 md:p-2">
            <img
              src="/icons/clockicon.png"
              alt="Encargado icon"
              className="w-8 md:w-10"
            />
            <p className="text-white text-sm md:text-base font-bold">
              Duración del trámite: {service?.duration}
            </p>
          </div>
        </div>
      </div >
    </>
  );
}
export default InformacionTramite;
