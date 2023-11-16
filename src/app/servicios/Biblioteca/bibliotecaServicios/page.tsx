'use client'

import Circularbutton from "../../../components/circular-button";
import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import HeaderTitle from "@/app/components/header-title";

function ServiciosPage() {
  return (
    <main className="h-full grid gap-40">
      <HeaderTitle direction="/servicios/Biblioteca" title="Servicios de Biblioteca" />
      <div className="flex gap-16 w-full justify-center mb-16">
        <Circularbutton
          imageUrl={
            "data:image/jpeg;base64,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"
          }
          text={"Prestamo de Libros"}
          routeUrl="/servicios/Biblioteca/bibliotecaServicios/BServPrestamoLibro"
        />
        <Circularbutton
          imageUrl={
            "https://edi78un6svq.exactdn.com/wp-content/uploads/2020/10/computadoras.jpg"
          }
          text={"Acceso a Computadoras"}
          routeUrl="/servicios/Biblioteca/bibliotecaServicios/BServAComputadoras"
        />

        <Circularbutton
          imageUrl={
            "data:image/jpeg;base64,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"
          }
          text={"Salas de Estudio"}
          routeUrl="/servicios/Biblioteca/bibliotecaServicios/BServSalaEstudio"
        />

      </div>
    </main>
  );
}

export default ServiciosPage;