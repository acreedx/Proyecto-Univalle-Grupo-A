'use client';

import React, { useEffect, useState } from "react";
import HeaderTitle from "@/app/components/header-title";
import Link from "next/link";
import Image from "next/image";
import lg from "@/app/administracion/direccionDeCarrera/img/edu.png";
import URL from "@/api/apiCareerDirection";

export interface IFacultad {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  estado: boolean;
  fechaCreacion: string;
}

interface ICarrera {
  id: number;
  titulo: string;
  descripcion: string;
  tituloOtorgado: string;
  duracion: number;
  planDeEstudios: string;
  imagen: string;
  facultadId: number;
  oFacultad: IFacultad;
}

interface CarrerasProps {
  carrer: ICarrera[];
}

function Carreras({
  params,
}: {
  params: { idFacultad: number };
}) {
  const [data, setData] = useState<ICarrera[]>([]);
  const [facultadTitle, setFacultadTitle] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming URL.baseUrl is defined and includes the base URL
        const res = await fetch(
          `${URL.baseUrl}Carrera/ListaPorFacultad/${params.idFacultad}`
        );
        const apiData = await res.json();
        console.log("API Response:", apiData);

        if (apiData && apiData.response) {
          setData(apiData.response);
          if (apiData.response[0]?.oFacultad) {
            setFacultadTitle(apiData.response[0].oFacultad.titulo);
          }
        } else {
          console.error("Malformatted API data");
        }
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, [params.idFacultad]); // Trigger the effect whenever idFacultad changes

  return (
    <>
      <HeaderTitle
        direction="/administracion/direccionDeCarrera"
        title={`${facultadTitle}`}
      />
      <div className="container mx-auto space-y-5">
        {data?.map((carreraItem) => (
          <section
            key={carreraItem.id}
            className={`flex flex-wrap ${
              carreraItem.id % 2 === 0 ? "md:flex-row-reverse" : ""
            } mx-8 my-8  dark:bg-gray-900 bg-gray-600 bg-opacity-30 `}
          >
            <div className="w-full md:w-1/2 p-4 md:p-8 grid place-content-center">
              <div className="flex flex-col justify-center p-6">
                <span className=" text-lg uppercase text-white">Univalle</span>
                <h3 className="text-4xl md:text-6xl font-bold text-white">
                  {carreraItem.titulo}
                </h3>
                <p className="my-6 text-base text-gray-400">
                  {carreraItem.descripcion}
                </p>
                <hr className="border-t-5 border-gray-600 my-2 opacity-40" />
                <div className="my-2">
                  <div className="flex items-center">
                    <span className="text-base text-white font-bold mr-2">
                      TITULO OTORGADO:
                    </span>
                    <span className="text-base text-white">
                      {carreraItem.tituloOtorgado}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-base text-white font-bold mr-2">
                      DURACIÓN:
                    </span>
                    <span className="text-base text-white">
                      {carreraItem.duracion} años
                    </span>
                  </div>
                </div>
                <hr className="border-t-5 border-gray-600 opacity-40" />

                <Link href={carreraItem.planDeEstudios} target="_blank">
                  <div className=" border-2 border-slate-200 rounded-xl text-white font-bold hover:bg-slate-200 hover:text-slate-600 px-4 py-2 mt-8 inline-block shadow-2xl">
                    <div className="flex items-center justify-center">
                      <Image
                        src={lg}
                        alt="Logo"
                        width={60}
                        height={60}
                        className="mr-2"
                      />
                      <div>Plan de Estudios</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8 grid place-content-center">
              <img
                src={carreraItem.imagen}
                alt="Imagen de la facultad"
                width={450}
              />
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default Carreras;