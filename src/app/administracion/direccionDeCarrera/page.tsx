import React from "react";
import jsondata from "./carreras.json";

function DireccionDeCarrera() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 ">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {/* Card 1 */}
            {jsondata.map((carrera, index) => (
              <div className="w-full md:w-1/2 xl:w-1/3 px-4 " key={index}>
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                  <img src={carrera.imagen} alt="image" className="w-full" />
                  <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                      <a
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                      >
                        {carrera.titulo}
                      </a>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                      {carrera.breveDescripcion}
                    </p>
                    <a className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition">
                      Ver detalles
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DireccionDeCarrera;
