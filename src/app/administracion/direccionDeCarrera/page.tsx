'use client';

import React, { useEffect, useState } from "react";
import Navbutton from "@/app/components/nav-button";
import HeaderTitle from "@/app/components/header-title";
import Image from "next/image";
import URL from "../../../api/apiCareerDirection";

interface IFacultad {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

interface DireccionDeCarreraProps {
  faculty: IFacultad[]; // Ajusta el tipo según la estructura real de tus datos
}

function DireccionDeCarrera() {
  const [data, setData] = useState<IFacultad[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${URL.baseUrl}Facultad/ListaActivos`);
        const apiData = await res.json();
        console.log("API Response:", apiData);

        if (apiData && apiData.response) {
          setData(apiData.response);
        } else {
          console.error("Malformatted API data");
        }
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <HeaderTitle direction="/administracion" title="" />
      <section className="p-4 lg:p-8">
        <div className="container mx-auto  ">
          <section className="bg-center bg-no-repeat bg-[url('https://i.ytimg.com/vi/RRLkkkfr8vA/maxresdefault.jpg')] bg-gray-700 bg-blend-multiply rounded-3xl">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold uppercase tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                Dirección de Carrera
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                La Universidad del Valle es una institución educativa en Bolivia
                que consta de varias facultades y programas académicos.
                Coordinamos y administramos los programas de estudio dentro de
                una facultad específica.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a
                  href="#facultades"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-600 hover:bg-white hover:text-black focus-ring-4 focus-ring-blue-300 dark:focus-ring-blue-900"
                >
                  Empezar
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section
        id="facultades"
        className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 "
      >
        <div className="container mx-auto space-y-12 ">
          {data.length > 0 ? (
            data.map((facultadItem) => (
              <div
                key={facultadItem.id}
                className={`flex flex-col overflow-hidden rounded-md shadow-2xl ${
                  facultadItem.id % 2 === 0
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                }  `}
              >
                <img
                  src={facultadItem.imagen}
                  alt=""
                  className="h-80 dark:bg-gray-500 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-gray-500 bg-opacity-50">
                  <span className="text-xs uppercase text-white">Univalle</span>
                  <h3 className="text-3xl font-bold text-white">
                    {facultadItem.titulo}
                  </h3>
                  <p className="my-6 text-gray-300">
                    {facultadItem.descripcion}
                  </p>
                  <Navbutton
                    routeUrl={`/administracion/direccionDeCarrera/${facultadItem.id}`}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className=" text-white text-center">
              No se han encontrado datos de la facultad.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default DireccionDeCarrera;
