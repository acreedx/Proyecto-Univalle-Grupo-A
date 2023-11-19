"use client"
import { useEffect, useState } from 'react'
import ImageCarrousel from "@/app/components/image-carrousel";
import HeaderTitle from '@/app/components/header-title';

import URL from '@/../utils/api';
import { ITramitesData, convertJSONService } from "@/../utils/interfaces/tramitesData";
import { IStepRequirementData } from '@/../utils/interfaces/stepRequerimentData';
import stepRequerimentProvider from '@/../utils/providers/stepRequerimentProvider';
import locationsProvider from '../../../../../utils/providers/locationsProvider';
import tramitesProvider from '../../../../../utils/providers/tramitesProvider';
import '@/app/styles/scrollStyle.css'

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
        setService(await tramitesProvider.GetOneTramite(id))
        setStepsrequirements(await stepRequerimentProvider.GetStepsRequirementsList(id))
        const locations = await locationsProvider.GetLocationsList(id)
        const newSlides = locations.map(item => item.imagen)
        const newDescriptions = locations.map(item => item.descripcion)
        setSlides(newSlides)
        setDescriptions(newDescriptions)
      } catch (e) {
        console.log(e)
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
          <div className="flex flex-row ml-10 items-center gap-4 justify-items-center">
            <img
              src="/icons/usericon.png"
              alt="Encargado icon"
              className="w-14 mt-8"
            />
            <p className="text-white mt-8  text-base md:text-2xl font-bold">
              Encargado: {service?.encharged} - {service?.cellphone}
            </p>

          </div>

          <div className="flex flex-row ml-10 items-center gap-4 justify-items-center">
            <img
              src="/icons/clockicon.png"
              alt="Encargado icon"
              className="w-14 mt-4"
            />
            <p className="text-white mt-4 text-base md:text-2xl font-bold">
              Duración: {service?.duration} - De manera personal
            </p>
          </div>

        </div>
        <div className="col-span-7 text-white m-5 md:m-10 md:col-span-10 xl:col-span-7 relative">
          <h1 className="mb-5 text-2xl md:text-3xl text-center font-bold">Requisitos</h1>

          <ol className="custom-scrollbar text-lg md:text-2xl  grid gap-2 md:gap-5">
            {stepsRequirements.map((e, index) => (
              <li key={index}>
                <span className="font-bold list-decimal">{index + 1}. </span>
                {e.description}
                <ol className="ml-14 mt-2 text-lg md:text-2xl text-justify grid ">
                  {e.pasosRequisito.map((paso, pasoIndex) => (
                    <li key={pasoIndex}>
                      <span className="font-bold list-lower-alpha">{String.fromCharCode(97 + pasoIndex)}. </span>
                      {paso.nameStep}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
       
        </div>
      </div >
    </>
  );
}
export default InformacionTramite;
