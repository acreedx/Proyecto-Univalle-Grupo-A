'use client'

import Circularbutton from "../components/circular-button";
import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function ServiciosPage() {
  return (
    <main className="h-full grid gap-40">
      <h1 className="text-center mt-10 text-4xl font-bold text-white">Servicios</h1>
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
            "/Images/futbol.png"
          }
          text={"Campus deportivo"}
          routeUrl="/servicios/campusDeportivo"
        />

        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Biblioteca"}
          routeUrl="/servicios/Biblioteca"
        />

      </div>
    </main>
  );
}

export default ServiciosPage;
