"use client"
import ItemMenu from "@/app/components/item-menu";
import ButtonNav from "@/app/components/ButtonNav";
import menu from "@/app/DataTools/DataMenuCafeteria";
import React, { useState, useEffect, ChangeEvent } from "react";
import response,{ICafeteriaData}from"@/app/DataTools/DataCafeteria";
//import { getPrice, getDescription } from "@/app/DataTools/DataCafeteria";
import HeaderTitle from "@/app/components/header-title";

function CafeteriaMenuPage() {
  const [pageTable2, setPageTable2] = useState(1);
  const [dataTable2, setMenuinfo] = useState<ICafeteriaData[]>([]);
  const [TotalResult,setTotal]= useState(Number);
  const resultsPerPage = 10;
  function onPageChangeTable2(p: number) {
    setPageTable2(p);
  }
  const categorysArray: string[] = [
    "Jugo/Batido",
    "Sandwich",
    "Postre",
    "Cafe",
    "Desayuno",
    "Especial",
    "Ensalada"
  ]
  useEffect(() => {
    const getData = async () => {
      const query = await fetch('https://apisistemaunivalle.somee.com/api/Publicaciones/getPublicacionesbyModuloId/4');
      const response:any= await query.json();
      //console.log(response)
      setTotal(response.data.length);
      setMenuinfo(response.data.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage));
      //console.log(response.data)
    }
    getData();
  }, [pageTable2]);

  const getDescription = (a:any) =>{
    var description = ""
    a.map((b:any) => {
      if (!categorysArray.includes(b.contenido) && isNaN(b.contenido)) {
        description = b.contenido
      }
    })
    console.log(dataTable2)
    return description
    
  }

  const getCategory = (a:any) =>{
    var category
    a.map((b:any) => {
      if (categorysArray.includes(b.contenido)) {
        category = b.contenido
      }
    })
    return category
  }

  const getPrice = (descripcion:any) =>{
    var price = 0
    descripcion.map((content:any) => {
      if (!isNaN(Number(content.contenido))) {
        price = Number(content.contenido)
      }
    })
    return price
  }
  return (
    
    <main className="h-full grid gap-5">
      <h1 className="text-center mt-10 text-4xl font-bold text-white">Cafeteria - Todos los productos</h1>
      <HeaderTitle direction="/servicios/Cafeteria" title=""></HeaderTitle>
      <ul className="flex items-center py-5 p-4 gap-4 justify-center">
        <ButtonNav href="/servicios/cafeteriaMenu" text="Todo" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuJugos" text="Jugos/Batidos" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuPostres" text="Postres" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuCafes" text="Cafés" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuDesayunos" text="Desayunos" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuSandwiches" text="Sandwiches" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuEspeciales" text="Especiales" />
        <ButtonNav href="/servicios/cafeteriaMenu/cafeteriaMenuEnsaladas" text="Ensaladas" />
      </ul>
      
      <div className="flex flex-wrap justify-center items-center gap-4">
      {dataTable2.map((menu:any, i) => (
        <ItemMenu
          key={i}
          imageUrl={menu.archivo}
          name={menu.titulo}
          price= {getPrice(menu.descripcion).toString()}
          description = {getDescription(menu.descripcion).toString()}
        />
      ))}
      </div>
    </main>
  );
}

export default CafeteriaMenuPage;