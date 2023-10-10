

import Image from "next/image";
import VideoSection from "../../components/videoSection";
import HeaderTitle from "@/app/components/header-title";

function CampusPage() {
  return (
    <>
    <HeaderTitle direction="/servicios" title="Campus Deportivo" />
      <main className="p-14">
        <section className="grid grid-cols-1 mt-1 md:p-10 gap-5 md:gap-20 py-0 xl:grid-cols-12 bg-gray-700 p-10 rounded-3xl shadow-2xl pb-4">
          <div className="col-span-5 xl:col-span-5 md:col-span-7">

            <section className="relative h-full">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="grid max-w-screen-xl grid-cols-1 lg:grid-cols-12 h-full mx-auto">
                <div className="lg:col-span-7 relative z-10 flex flex-col justify-center items-center text-center h-full">
                  <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white mb-4">Campus Deportivo</h1>
                  <p className="font-light text-white mb-6 lg:mb-8 md:text-lg lg:text-xl">Universidad del Valle</p>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 hover:text-gray-900">Ver mas</a>
                </div>
                <div className="absolute inset-0 z-0">
                  <Image src="/Images/campus.jpg" alt="mockup" layout="fill" objectFit="cover" className="opacity-70" />
                </div>
              </div>

            </section>
          </div>
          <div className="col-span-5 xl:col-span-4 md:col-span-7">
            <VideoSection title="Campus deportivo" description="Una gran parte denuestra universidad esperaba este campus y ahora lo tienen." videoUrl="https://www.youtube.com/watch?v=IY_Myo5-4W0" width="100%" height="600px"></VideoSection>
          </div>

          <div className="col-span-5 xl:col-span-3 md:col-span-7">
            <section className="py-8 md:py-16 h-full flex flex-col justify-center">
              <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold text-white mb-4">¡Reserva tu Cancha!</h2>
                <p className="mb-8 text-white md:text-xl">
                  Reservar una cancha en nuestro campus deportivo te permite garantizar el uso exclusivo de nuestras instalaciones deportivas para tus actividades planificadas. Ya sea para un partido de fútbol o tenis, ¡tenemos todo lo que necesitas para disfrutar al máximo de tus deportes favoritos!
                </p>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 rounded-lg hover:text-gray-900">
                  Más Información
                </a>
              </div>
            </section>
          </div>


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
