"use client";

import HeaderTitle from "@/app/components/header-title";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const DynamicPDFViewer = dynamic(() => import("@/app/components/pdfViewer"), {
  ssr: false,
});

function BecasAyudasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="mb-5">
        <HeaderTitle
          title="Reglamento de Becas"
          direction="/saludBienestar/bienestarUniversitario"
        />
      </div>
      <div className="flex">
        <div className="w-1/3 p-4">
          <div className="mt-2">
            <h3 className="text-center mt-10 text-xl font-bold text-white col-start-2 whitespace-normal min-[320px]:whitespace-nowrap md:text-2xl xl:text-4xl">
              Lista de Becas
            </h3>
            <ul className="mt-8 mx-auto max-w-xs text-left font-medium text-lg leading-none border-[#AE046E]-200 divide-y divide-[#AE046E]-200">
              <li>
                <a className="py-3.5 w-full flex items-center text-white hover:text-black hover:bg-white" href="#">
                  <span className="ml-5 mr-2.5 w-1 h-7 bg-[#AE046E] rounded-r-md"></span>
                  <p>
                    BECAS SOCIALES
                    <span className="font-normal text-gray-500 text-sm">Pagina 4</span>
                  </p>
                  
                </a>
              </li>
              <li >
                <a className="py-3.5 w-full flex items-center text-white hover:text-black hover:bg-white" href="#">
                  <span className="ml-5 mr-2.5 w-1 h-7 bg-[#AE046E] rounded-r-md"></span>
                  <p>
                    BECA CULTURA
                    <span className="font-normal text-gray-500 text-sm">Pagina 6</span>
                  </p>
                  
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-white hover:text-black hover:bg-white" href="#">
                  <span className="ml-5 mr-2.5 w-1 h-7 bg-[#AE046E] rounded-r-md"></span>
                  <p>
                    BECA DEPORTE
                    <span className="font-normal text-gray-500 text-sm">Pagina 7</span>
                  </p>
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-white hover:text-black hover:bg-white" href="#">
                  <span className="ml-5 mr-2.5 w-1 h-7 bg-[#AE046E] rounded-r-md"></span>
                  <p>
                    BECA A LA EXCELENCIA
                    <span className="font-normal text-gray-500 text-sm">Pagina 8</span>
                  </p>
                  
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-white hover:text-black hover:bg-white" href="#">
                  <span className="ml-5 mr-2.5 w-1 h-7 bg-[#AE046E] rounded-r-md"></span>
                  <p>
                    BECA POR CONVENIOS INSTITUCIONALES
                    <span className="font-normal text-gray-500 text-sm">Pagina 10</span>
                  </p>
                  
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-white hover:text-black hover:bg-white" href="#">
                  <span className="ml-5 mr-2.5 w-1 h-7 bg-[#AE046E] rounded-r-md"></span>
                  <p>
                    BECA COMUNIDAD UNIVERSITARIA
                    <span className="font-normal text-gray-500 text-sm">Pagina 10</span>
                  </p>
                  
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-white hover:text-black hover:bg-white" href="#">
                  <span className="ml-5 mr-2.5 w-1 h-7 bg-[#AE046E] rounded-r-md"></span>
                  <p>
                    BECA TRABAJO
                    <span className="font-normal text-gray-500 text-sm">Pagina 13</span>
                  </p>
                  
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-white hover:text-black hover:bg-white" href="#">
                  <span className="ml-5 mr-2.5 w-1 h-7 bg-[#AE046E] rounded-r-md"></span>
                  <p>
                    BECA-PRUEBA DE APTITUD ACADEMICA
                    <span className="font-normal text-gray-500 text-sm">Pagina 14</span>
                  </p>
                  
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-white hover:text-black hover:bg-white" href="#">
                  <span className="ml-5 mr-2.5 w-1 h-7 bg-[#AE046E] rounded-r-md"></span>
                  <p>
                    BECA DE APOYO A LA DOCENCIA
                    <span className="font-normal text-gray-500 text-sm">Pagina 15</span>
                  </p>
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/3 p-4 bg-blue">
          <DynamicPDFViewer href="/REGLAMENTO DE BECAS.pdf" />
        </div>
      </div>
    </div>


  );
}

export default BecasAyudasPage;
