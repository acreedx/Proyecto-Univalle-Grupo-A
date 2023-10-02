"use client";

import { useState, useEffect } from "react";
import ItemMenu from "@/app/components/item-menu";
import HeaderTitle from "@/app/components/header-title";
import SearchBar from "@/app/components/search-bar";
import Pagination from "@/app/components/Pagination";
import NotFoundMessage from "@/app/components/not-found-message";

function ObjetosPerdidosPage() {
  const [missObjs, setMissObjs] = useState<MissObject[]>([]);
  const [searchMissObjs, setSearchMissObjs] = useState<MissObject[]>([]);

  //Get Information

  interface MissObject {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await response.json();
      setMissObjs(data);
      setSearchMissObjs(data);
    } catch (error) {
      console.error(error);
    }
  };

  //Función de búsqueda

  const searchObjs = (parameter: string) => {
    setSearchMissObjs(
      missObjs.filter((obj) =>
        obj.title.toLowerCase().includes(parameter.toLowerCase())
      )
    );
  };

  const showObjects = (objs: MissObject[]) => {
    return (
      <div className="flex flex-wrap justify-center items-center gap-4">
        {objs.length > 0 ? (
          objs.map((obj, index) => (
            <ItemMenu
              key={index}
              imageUrl={obj.url}
              name={obj.title}
              price="a"
              description="a"
            />
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
