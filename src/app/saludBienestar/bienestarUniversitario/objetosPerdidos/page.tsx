"use client";

import { useState, useEffect } from "react";
import ItemMenu from "@/app/components/item-menu";
import ButtonNav from "@/app/components/ButtonNav";
import menu from "@/app/DataTools/DataMenuCafeteria";
import HeaderTitle from "@/app/components/header-title";

function ObjetosPerdidosPage() {
  const [missObjs, setMissObjs] = useState([]);

  //Get Information

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMissObjs(data);
      })
      .catch(() => console.log("error"));
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
            imageUrl="{obj.imageUrl}"
            name="{obj.title}"
            price="a"
            description="a"
          />
        ))}
      </div>
    </div>
  );
}

export default ObjetosPerdidosPage;
