

import Image from "next/image";
import VideoSection from "@/app/components/videoSection";

function CampusPage() {
  return (
    <>
      <main>
        <section className="relative h-unit-9xl">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="grid max-w-screen-xl grid-cols-1 lg:grid-cols-12 h-full mx-auto">
            <div className="lg:col-span-7 relative z-10 flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white mb-4">Campus Deportivo</h1>
              <p className="font-light text-white mb-6 lg:mb-8 md:text-lg lg:text-xl">Universidad del Valle</p>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 hover:text-gray-900">Ver mas</a>
            </div>
            <div className="absolute inset-0 z-0">
              <Image src="/Images/campus.jpg" alt="mockup" layout="fill" objectFit="cover" className="opacity-70" />
            </div>
          </div>

        </section>


        <section className="">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <Image className="w-full" src="/Images/reservas.jpg" alt="dashboard image" width={500} height={600} />

            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">Reservas</h2>
              <p className="mb-6 font-light text-white md:text-lg ">Reservar una cancha en el campus deportivo es solicitar y garantizar el uso exclusivo de una instalación deportiva, como una cancha de tenis o fútbol, para actividades deportivas planificadas.</p>
              <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Informaciones
              </a>
            </div>
          </div>
          <VideoSection title="Campus deportivo" description="Una gran parte denuestra universidad esperaba este campus y ahora lo tienen." videoUrl="https://www.youtube.com/watch?v=IY_Myo5-4W0" width="100%" height="600px"></VideoSection>
        </section>



        <footer className="p-4 md:p-8 lg:p-10">
          <div className="mx-auto max-w-screen-xl text-center flex flex-col items-center justify-center h-full">
            <Image className="w-28" src="/UnivalleLogo.png" alt="" width={100} height={100} />
            <p className="my-6 text-white">Universidad del Valle - La Paz, Bolivia</p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Info</a>
              </li>
              
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
              </li>
              
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Contactos</a>
              </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" className="hover:underline">Univalle</a>. Todos los derechos reservados.</span>
          </div>
        </footer>

      </main>
    </>

  );
}

export default CampusPage;
