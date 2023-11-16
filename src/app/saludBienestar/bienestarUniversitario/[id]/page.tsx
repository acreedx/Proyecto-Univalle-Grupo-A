"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

function ServicioPage({ searchParams }: { searchParams: URLSearchParams }) {
  const params = useParams();
  const id = parseInt(params.id as string, 10);

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }

  const [servicio, setServicio] = useState<any>(null);

  async function load(id: number) {
    try {
      const res = await fetch(
        `https://apisistemaunivalle.somee.com/api/Servicios/getServicioById/${id}`
      );
      if (!res.ok) {
        throw new Error("Error al obtener los datos del modulo.");
      }
      const resData = await res.json();
      setServicio(resData.data);
    } catch (error) {
      // Manejar el error como desees
      console.error("Error al cargar los datos:", error);
    }
  }

  useEffect(() => {
    load(id);
    console.log(servicio);
  }, [id]);

  return <div>{servicio ? servicio[0].nombre : "Cargando..."}</div>;
}

export default ServicioPage;
