"use client";

import Circularbutton from "../components/circular-button";
import { Button } from "@nextui-org/react";
import HeaderTitle from "@/app/components/header-title";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function ServiciosPage() {
  return (
    <main className="h-full grid gap-40">
      <HeaderTitle direction="/" title="Servicios" />
      <div className="flex gap-16 w-full justify-center">
        <Circularbutton
          imageUrl={
            "https://media.istockphoto.com/id/646314156/vector/restaurant-icon-isolated-vector.jpg?s=612x612&w=0&k=20&c=2qFLVCalkUeQEo75tuBarbGy30Rbvr4bUfalsW9o1cw="
          }
          text={"Cafetería"}
          routeUrl="/servicios/Cafeteria"
        />
        <Circularbutton
          imageUrl={
            "https://cdn.icon-icons.com/icons2/1261/PNG/512/1496676733-rounded-high-ultra-colour09-soccer-pitch_84623.png"
          }
          text={"Campus deportivo"}
          routeUrl="/servicios/campusDeportivo"
        />

        <Circularbutton
          imageUrl={
            "https://www.unex.es/conoce-la-uex/centros/epcc/archivos/imagenes/epcc-iconos/ICONO%20BIBLIOTECA.png/image_preview"
          }
          text={"Biblioteca"}
          routeUrl="/servicios/Biblioteca"
        />
      </div>
    </main>
  );
}

export default ServiciosPage;
