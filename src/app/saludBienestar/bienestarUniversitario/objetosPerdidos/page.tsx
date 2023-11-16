"use client";

import { useState, useEffect } from "react";
import ItemMissObj from "@/app/components/item-miss-object";
import HeaderTitle from "@/app/components/header-title";
import SearchBar from "@/app/components/search-bar";
import Pagination from "@/app/components/Pagination";
import NotFoundMessage from "@/app/components/not-found-message";
import LoadingScreen from "@/app/components/loading-screen";
import { objetosPerdidosProps, data } from "@/app/DataTools/DataMissingObject";

function ObjetosPerdidosPage() {
  const [loading, setLoading] = useState(true);
  const [missObjs, setMissObjs] = useState<objetosPerdidosProps[]>([]);
  const [searchMissObjs, setSearchMissObjs] = useState<objetosPerdidosProps[]>(
    []
  );

  //Get Information

  interface MissObject {
    id: number;
    image: string;
    name: string;
  }

  useEffect(() => {
    setLoading(true);
    setMissObjs(data);
    setSearchMissObjs(data);
    setLoading(false);
    window.scrollTo(0, 0);
    //getInfo();
  }, []);

  // const getInfo = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/photos"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Error al obtener los datos");
  //     }
  //     const data = await response.json();
  //     setMissObjs(data);
  //     setSearchMissObjs(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //   }
  // };

  //Función de búsqueda

  const searchObjs = (parameter: string) => {
    setLoading(true);
    setSearchMissObjs(
      missObjs.filter((obj) =>
        obj.name.toLowerCase().includes(parameter.toLowerCase())
      )
    );
    setLoading(false);
  };

  const showObjects = (objs: MissObject[]) => {
    return (
      <div className="flex flex-wrap justify-center items-center gap-4">
        {loading ? (
          <LoadingScreen /> // Muestra la pantalla de carga mientras se busca
        ) : objs.length > 0 ? (
          objs.map((obj, index) => (
            <ItemMissObj key={index} imageUrl={obj.image} name={obj.name} />
          ))
        ) : (
          <NotFoundMessage message="No se encontraron resultados" />
        )}
      </div>
    );
  };

  const cleanMissObjects = () => {
    setSearchMissObjs(missObjs);
  };

  return (
    <div className="h-full grid gap-5">
      <HeaderTitle
        direction="/saludBienestar/bienestarUniversitario"
        title="Objetos Perdidos"
      />
      <SearchBar
        placeHolder="Buscar objeto(s)..."
        searchFunction={searchObjs}
        cleanFunction={cleanMissObjects}
      />
      <Pagination
        itemsPerPage={12}
        items={searchMissObjs}
        generateFunction={showObjects}
      />
    </div>
  );
}

export default ObjetosPerdidosPage;
