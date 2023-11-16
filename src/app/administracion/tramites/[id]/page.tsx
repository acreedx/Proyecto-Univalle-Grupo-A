"use client"
import { useEffect, useState } from 'react'
import ImageCarrousel from "@/app/components/image-carrousel";
import HeaderTitle from '@/app/components/header-title';

import URL from '@/../utils/api';
import { ITramitesData, convertJSONService } from "@/../utils/interfaces/tramitesData";
import { IStepRequirementData } from '@/../utils/interfaces/stepRequerimentData';
import stepRequerimentProvider from '@/../utils/providers/stepRequerimentProvider';
import locationsProvider from '../../../../../utils/providers/locationsProvider';

function InformacionTramite({ params }: { params: { id: number } }) {
  const [service, setService] = useState<ITramitesData>();
  const route = "Servicios/getTramiteById/";
  const { id } = params;
  const [stepsRequirements, setStepsrequirements] = useState<IStepRequirementData[]>([]);
  
  const [slides, setSlides] = useState<string[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);
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
        const locations = await locationsProvider.GetLocationsList(id)
        const newSlides = locations.map(item => item.imagen)
        const newDescriptions = locations.map(item => item.descripcion)
        setSlides(newSlides)
        setDescriptions(newDescriptions)
       
       
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
              className="w-14"
            />
            <p className="text-white text-base md:text-2xl font-bold">
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
          <div className="flex justify-center items-center gap-4 bg-slate-600 rounded-2xl 
          p-1 md:p-3 mt-14 ml-96">
            <img
              src="/icons/clockicon.png"
              alt="Encargado icon"
              className="w-8 md:w-14"
            />
            <p className="text-white md:text-xl font-bold"> 
              Duración del trámite: {service?.duration}
            </p>
          </div>
        </div>
      </div >
    </>
  );
}
export default InformacionTramite;
