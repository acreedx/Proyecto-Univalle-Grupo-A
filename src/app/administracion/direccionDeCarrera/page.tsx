import React from "react";
import Navbutton from "@/app/components/nav-button";
import HeaderTitle from "@/app/components/header-title";

function DireccionDeCarrera() {
  return (
    <>
      <HeaderTitle direction="/administracion" title="Carreras" />

      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ">
            <img
              src="https://www.aauniv.com/s/blog/wp-content/uploads/2020/12/beneficios-estudiar-carrera-ciencias-salud-distancia.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-gray-500 bg-opacity-50">
              <span className="text-xs uppercase dark:text-gray-400">
                Univalle
              </span>
              <h3 className="text-3xl font-bold">
                FACULTAD DE CIENCIAS DE LA SALUD
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Navbutton routeUrl={`/administracion/direccionDeCarrera/1`}/>
              
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://media.licdn.com/dms/image/D5610AQH36Yu4Cv6YBQ/image-shrink_800/0/1696082401820?e=1697436000&v=beta&t=OIlJmAr2nwAQkzQkDOApLCKnO2zuNeM65lI_b9r2Ja0"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-gray-500 bg-opacity-50">
              <span className="text-xs uppercase dark:text-gray-400">
                Univalle
              </span>
              <h3 className="text-3xl font-bold">
                FACULTAD DE CIENCIAS EMPRESARIALES Y SOCIALES
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Navbutton routeUrl={`/administracion/direccionDeCarrera/2`}/>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ">
            <img
              src="https://launiversidad.up.ac.pa/sites/default/files/styles/grande_/public/2018-11/IMG_0621.JPG?itok=k359yWrh"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-gray-500 bg-opacity-50">
              <span className="text-xs uppercase dark:text-gray-400">
                Univalle
              </span>
              <h3 className="text-3xl font-bold">
                FACULTAD DE INFORMÁTICA Y ELECTRÓNICA
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Navbutton routeUrl={`/administracion/direccionDeCarrera/3`}/>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://images.adsttc.com/media/images/5519/709f/e58e/ced7/7800/025b/medium_jpg/Desks_of_architecture_students_in_the_Yale_Art_and_Architecture_Building__September_29__2008.jpg?1427730571"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-gray-500 bg-opacity-50">
              <span className="text-xs uppercase dark:text-gray-400">
                Univalle
              </span>
              <h3 className="text-3xl font-bold">
                FACULTAD DE ARQUITECTURA, URBANISMO Y DISEÑO
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Navbutton routeUrl={`/administracion/direccionDeCarrera/4`}/>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ">
            <img
              src="https://ucatec.edu.bo/wp-content/uploads/2022/01/318022679_3637433523151629_1461473279162100878_n1.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 bg-gray-500 bg-opacity-50">
              <span className="text-xs uppercase dark:text-gray-400">
                Univalle
              </span>
              <h3 className="text-3xl font-bold">
                FACULTAD DE GASTRONOMÍA Y TURISMO
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <Navbutton routeUrl={`/administracion/direccionDeCarrera/5`}/>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}

export default DireccionDeCarrera;
