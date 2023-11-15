"use client"
import ButtonNav from "@/app/components/ButtonNav";
import CircularButton from "@/app/components/circular-button";
import HeaderTitle from "@/app/components/header-title";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import URL from "@/../utils/api";
import { ITramitesData, convertJSONListService } from "@/../utils/tramitesData";
import { ICategoriasData, convertJSONListCategory } from "@/../utils/categoriasData";
import Link from "next/link";
interface Tramite {
  text: string;
  imageUrl: string;
  routeUrl: string;
}
export default function Tramites() {
  const [currentPage, setCurrentPage] = useState(1);
  const tramitesPorPagina = 6;
  const route = "Servicios/getTramiteByModuleActive/"
  const routeCategory = "Servicios/getTramiteByCategory/"
  const getActiveCategoriesRoute = "Categoria/getAllCategorias"
  //const route = "Servicios/getAllServicios" 
  const moduleName = "Tramites";
  const [services, setServices] = useState<ITramitesData[]>([]);
  const [categories, setCategories] = useState<ICategoriasData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTramite, setSelectedTramite] = useState<number>(0);

  const handleCategoryChange = async (categoryName: string) => {
    setSelectedCategory(categoryName);
    fetchServicesByCategory(categoryName);
  };

  const fetchServicesByCategory = async (categoryName: string) => {
    const response = await fetch(`${URL.baseUrl}${routeCategory}${categoryName}`);
    const data = await response.json();
    setServices(convertJSONListService(data.data));
  };


  useEffect(() => {
    async function doFetchCategory() {
      fetch(`${URL.baseUrl}${getActiveCategoriesRoute}`)
        .then((res) => res.json())
        .then((res) => setCategories(convertJSONListCategory(res.data)));
    }
    doFetchCategory();

  }, []);

  useEffect(() => {
    async function doFetch() {
      fetch(`${URL.baseUrl}${route}${moduleName}`)
        .then((res) => res.json())
        .then((res) => setServices(convertJSONListService(res.data)));
    }
    doFetch();

  }, []);



  const startIndex = (currentPage - 1) * tramitesPorPagina;
  const endIndex = startIndex + tramitesPorPagina;
  const tramitesEnPagina = services.slice(startIndex, endIndex);

  const totalPages = Math.ceil(services.length / tramitesPorPagina);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>

      <HeaderTitle direction="/administracion" title="" />
      <ul className="flex flex-col md:flex-row items-center py-5 p-4 gap-4 justify-center md:-mt-5">
        {categories.map((categoria, index) => (
          <button
          className="text-white text-xs min-[320px]:text-sm sm:text-base md:text-xl"
            key={index}
            onClick={() => handleCategoryChange(categoria.name)} >
            {categoria.name}

          </button>
        ))}
      </ul>
      <div className="flex justify-between items-center mx-6">
        <button
          className={`text-white rounded-full p-2 text-4xl md:text-7xl h-full flex items-center ${currentPage === 1 ? "invisible" : "visible"}`}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >

          <FaArrowCircleLeft />
        </button>

        <div className="flex flex-wrap flex-grow justify-center items-center gap-4 md:gap-6 text-center">
          {tramitesEnPagina.map((services, index) => (

            <div key={index} className="flex justify-center items-center p-2 md:p-4 w-1/2 md:w-1/4">
         
              <CircularButton imageUrl={services.image} text={services.name} routeUrl={`/administracion/tramites/${services.id}`}  />
   
              
            </div>
          ))}
        </div>

        <button
          className={`text-white rounded-full p-2 text-4xl md:text-7xl h-full flex items-center ${currentPage === totalPages ? "invisible" : "visible"}`}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
      <div className="flex justify-center ">
        <span className="text-white inline-block align-middle text-2xl bg-slate-600 rounded-2xl p-2">
          Página {currentPage} de {totalPages}
        </span>
      </div>
    </>
  );
}