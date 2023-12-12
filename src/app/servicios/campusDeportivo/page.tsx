'use client'

import Image from "next/image";
import ButtonNav from "@/app/components/ButtonNav";
import VideoSection from "../../components/videoSection";
import HeaderTitle from "@/app/components/header-title";
import Circularbutton from "../../components/circular-button";

function CampusPage() {
  return (
    <>
      <HeaderTitle direction="/servicios" title="Campus Deportivo" />
      <main className="p-14">
        <section className="grid grid-cols-1 mt-1 md:p-10 gap-5 md:gap-20 py-0 xl:grid-cols-12 bg-gray-700 p-10 rounded-3xl shadow-2xl pb-4">

          <div className="col-span-4 xl:col-span-9 md:col-span-7">
            <VideoSection title="Campus deportivo - Miraflores" description="Ubicacion: Zona Miraflores, entre Calle Canada y Av.Tejada Sorzano" videoUrl="https://www.youtube.com/watch?v=IY_Myo5-4W0" width="100%" height="600px"></VideoSection>
          </div>

          <div className="col-span-5 xl:col-span-3 md:col-span-7">
            <section className="h-full flex flex-col">
              <div className="max-w-screen-xl mx-auto px-4 text-center">
                <div className="grid gap-40 mt-10 mr-20">
                  <div className="flex justify-center">
                    <Circularbutton
                      imageUrl={
                        "/Images/news.jpg"
                      }
                      text={"Novedades"}
                      routeUrl="/servicios/campusDeportivo/novedades"
                    />
                  </div>
                </div>
                <div className="grid gap-40 mt-10 mr-20">
                  <div className="flex justify-center">
                    <Circularbutton
                      imageUrl={
                        "/Images/reserva.png"
                      }
                      text={"Reservas"}
                      routeUrl="/servicios/campusDeportivo/reservas"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>

  );
}

export default CampusPage;
