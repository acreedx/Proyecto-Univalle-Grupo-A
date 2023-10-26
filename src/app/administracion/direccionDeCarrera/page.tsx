import React from "react";
import Navbutton from "@/app/components/nav-button";
import HeaderTitle from "@/app/components/header-title";
import Image from "next/image";

interface Facultad {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
}

interface idFacultad {
  idFacultad: number;
}

const facultades: Facultad[] = [
  {
    id: 1,
    titulo: "FACULTAD DE CIENCIAS DE LA SALUD",
    descripcion:
      "Esta facultad se dedica a la formación de profesionales de la salud, incluyendo médicos, enfermeras y otros expertos en el cuidado de la salud.",
    imagen:
      "https://eablogs.org/wp-content/uploads/2021/11/Trabajos-para-estudiantes-de-ciencias-de-la-salud.jpg",
  },
  {
    id: 2,
    titulo: "FACULTAD DE CIENCIAS EMPRESARIALES Y SOCIALES",
    descripcion:
      "En esta facultad, los estudiantes obtienen conocimientos en administración de empresas y disciplinas sociales, preparándolos para carreras en el mundo empresarial y la ciencia social.",
    imagen:
      "https://concepto.de/wp-content/uploads/2014/08/empresario-2-e1551211012370.jpg",
  },
  {
    id: 3,
    titulo: "FACULTAD DE INFORMÁTICA Y ELECTRÓNICA",
    descripcion:
      "Los programas académicos de esta facultad se centran en la tecnología, abarcando campos como la informática, la electrónica y la ingeniería de sistemas.",
    imagen: "https://i.blogs.es/c7decb/estudiantes-ingenieria/1366_2000.jpg",
  },
  {
    id: 4,
    titulo: "FACULTAD DE ARQUITECTURA, URBANISMO Y DISEÑO",
    descripcion:
      "En esta facultad, los estudiantes aprenden a diseñar espacios arquitectónicos y urbanos, así como a crear interiores funcionales y estéticos.",
    imagen:
      "https://www.inforpractico.com/wp-content/uploads/descubre-las-funciones-de-un-disenador-grafico-y-su-importancia.jpg",
  },
  {
    id: 5,
    titulo: "FACULTAD DE GASTRONOMÍA Y TURISMO",
    descripcion:
      "Los programas de esta facultad se centran en la gastronomía, la hospitalidad y el turismo, preparando a los estudiantes para carreras en la industria de la hospitalidad y el turismo.",
    imagen:
      "https://blogs.unitec.mx/hubfs/Imported_Blog_Media/7-razones-para-estudiar-gastronomia-en-la-unitec-1-Dec-17-2022-07-43-33-2946-PM.jpg",
  },
  {
    id: 6,
    titulo: "FACULTAD DE TECNOLOGÍA",
    descripcion:
      "En esta facultad, los estudiantes se forman en diversas disciplinas tecnológicas, desde la ingeniería hasta la tecnología de la información, preparándolos para carreras en el campo tecnológico.",
    imagen:
      "https://admision.utem.cl/wp-content/uploads/2019/12/me-gusta-la-tecnologia.jpg",
  },
];

function DireccionDeCarrera() {
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

      <section id="facultades" className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 ">
        <div className="container mx-auto space-y-12 ">
          {facultades.map((facultadItem) => (
            <div
              key={facultadItem.id}
              className={`flex flex-col overflow-hidden rounded-md shadow-2xl ${
                facultadItem.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
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
                <p className="my-6 text-gray-400">{facultadItem.descripcion}</p>
                <Navbutton
                  routeUrl={`/administracion/direccionDeCarrera/${facultadItem.id}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default DireccionDeCarrera;
