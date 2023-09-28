"use client";

import { useState, useEffect } from "react";
import ItemMenu from "@/app/components/item-menu";
import ButtonNav from "@/app/components/ButtonNav";
import menu from "@/app/DataTools/DataMenuCafeteria";
import HeaderTitle from "@/app/components/header-title";

function ObjetosPerdidosPage() {
  const [missObjs, setMissObjs] = useState<MissObject[]>([]);

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
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await response.json();
      setMissObjs(data); // Almacena los datos en el estado
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full grid gap-5">
      <HeaderTitle
        direction="/saludBienestar/bienestarUniversitario"
        title="Objetos Perdidos"
      />

      <div className="flex flex-wrap justify-center items-center gap-4">
        {missObjs.map((obj, index) => (
          <ItemMenu
            key={index}
            imageUrl={obj.url}
            name={obj.title}
            price="a"
            description="a"
          />
        ))}
      </div>
    </div>
  );
}

export default ObjetosPerdidosPage;
