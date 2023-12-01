"use client"
import CircularButton from "@/app/components/circular-button";
import HeaderTitle from "@/app/components/header-title";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { ITramitesData, convertJSONListService} from "@/../../utils/interfaces/tramitesData";
import { ICategoriasData } from "@/../../utils/interfaces/categoriasData";
import tramitesProvider from "@/../utils/providers/tramitesProvider";
import categoriasProvider from "@/../../utils/providers/categoriasProvider";
import URL from "@/../utils/api";

export default function Tramites() {
  const [loading, setLoading] = useState(true);
  const route = "Servicios/getTramiteByModuleActive/"
  const moduleName = "Tramites";
  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });

    setTimeout(() => {
    }, 2000);
  }, []);


  const [currentPage, setCurrentPage] = useState(1);
  const tramitesPorPagina = 6;
  const [services, setServices] = useState<ITramitesData[]>([]);
  const [categories, setCategories] = useState<ICategoriasData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = async (categoryName: string) => {
    setSelectedCategory(categoryName);
    fetchServicesByCategory(categoryName);
   setCurrentPage(1);
    
  };
  const handleAllTramites = async () => {
    setSelectedCategory(""); 
    setServices(await tramitesProvider.TramitesList());
  };

  const fetchServicesByCategory = async (categoryName: string) => {
    setServices(await tramitesProvider.TramiteByCategory(categoryName))
  };

  useEffect(() => {
    async function doFetch() {

        await fetch(`${URL.baseUrl}${route}${moduleName}`)
          .then((res) => res.json())
          .then((res) => setServices(convertJSONListService(res.data)));
    
   //setServices(await tramitesProvider.TramitesList())
      setCategories(await categoriasProvider.CategoriesList())
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
         {/* Botón para listar todos los trámites */}
         <button
          className={`text-white text-xs min-[320px]:text-sm sm:text-base hover:bg-blue-500 md:text-xl bg-${selectedCategory === "" ? 'blue-500' : 'slate-600'} rounded-2xl py-1 px-3`}
          onClick={handleAllTramites}
        >
          Todos
        </button>
        {categories.map((categoria, index) => (
          <button
          className={`text-white text-xs min-[320px]:text-sm sm:text-base hover:bg-blue-500 md:text-xl bg-${selectedCategory === categoria.name ? 'blue-500' : 'slate-600'} rounded-2xl py-1 px-3`}
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

              <CircularButton imageUrl={services.image} text={services.name} routeUrl={`tramites/${services.id}`} />

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
      <div className="flex justify-center py-5">
        <span className="text-white inline-block align-middle text-2xl bg-slate-600 rounded-2xl p-2">
          Página {currentPage} de {totalPages}
        </span>
      </div>
    </>
  );
}