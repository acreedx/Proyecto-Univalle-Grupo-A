"use client";
import ImageCarrousel from "@/app/components/image-carrousel";
import HeaderTitle from "@/app/components/header-title";
import React, { useState, useEffect } from "react";
import servicesProvider from "../../../../../utils/providers/servicesProvider";
import { ICajasSingleData } from "../../../../../utils/interfaces/singleCajasData";
import { ubicaciones } from "../../../../../utils/interfaces/ubicacionesData";
import { IRequirementData } from "../../../../../utils/interfaces/requisitosData";
import requisitosProvider from "../../../../../utils/providers/requisitosProvider";

function Servicios({ params }: { params: { id: number } }) {
  const { id } = params;
  const [service, setService] = useState<ICajasSingleData>();
  const [descriptions, setdescriptions] = useState<string[]>([]);
  const [slides, setSlides] = useState<string[]>([]);
  const [requirements, setrequirements] = useState<IRequirementData[]>([]);
  useEffect(() => {
    async function doFetch() {
      try {
        setService(await servicesProvider.GetOneService(id));
        setSlides(
          GetSlides((await servicesProvider.GetOneService(id)).ubicaciones)
        );
        setdescriptions(
          GetDescription((await servicesProvider.GetOneService(id)).ubicaciones)
        );
        setrequirements(await requisitosProvider.GetRequirementsList(id));
      } catch {
        (e: any) => {
          console.log(e);
        };
      }
    }
    doFetch();
  }, []);
  function GetSlides(ubicaciones: ubicaciones[]) {
    let array: string[] = [];
    ubicaciones.forEach((e) => {
      array.push(e.imagen);
    });
    return array;
  }
  function GetDescription(ubicaciones: ubicaciones[]) {
    let array: string[] = [];
    ubicaciones.forEach((e) => {
      array.push(e.descripcion);
    });
    return array;
  }
  return (
    <>
      <HeaderTitle
        direction="/administracion/cajas"
        title={service?.nombre == null ? "" : service.nombre}
      />{" "}
      <div className="grid grid-cols-1 mt-10 p-10 gap-20 py-0 xl:grid-cols-12">
        <div className="col-span-7  xl:col-span-5 md:col-span-10">
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
              {service?.referencia[0].nombre} -{" "}
              {service?.referencia[0].numerocel}
            </p>
          </div>
        </div>
        <div className="col-span-7  text-white  font-bold m-10  md:col-span-10 xl:col-span-7">
          <h1 className="mb-10 text-3xl text-center">Requisitos</h1>
          {requirements.map((e, index) => {
            return <div key={index} className="text-2xl">{e.description}</div>;
          })}
          <ul className="text-2xl text-left list-inside list-disc grid gap-5"></ul>
        </div>
      </div>
    </>
  );
}
export default Servicios;
