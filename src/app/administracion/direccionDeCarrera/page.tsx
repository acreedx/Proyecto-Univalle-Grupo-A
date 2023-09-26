import React from "react";
import jsondata from "./carreras.json";
import Cardbutton from "@/app/components/card-button";
import HeaderTitle from "@/app/components/header-title";

function DireccionDeCarrera() {
  return (
    <>
    
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />
      <HeaderTitle direction="/administracion" title="Carreras" />
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 ">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {/* Card 1 */}
            {jsondata.map((carrera) => (
            <Cardbutton
              imageUrl={
                carrera.imagen
              }
              title={carrera.titulo}
              routeUrl={`/administracion/direccionDeCarrera/${carrera.id}`}
              description={carrera.breveDescripcion}
            />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DireccionDeCarrera;
