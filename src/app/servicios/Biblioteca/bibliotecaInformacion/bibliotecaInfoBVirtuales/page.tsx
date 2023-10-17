import Image from "next/image";
import VideoPlayer from "@/app/components/video-player";
import Link from "next/link";
import HeaderTitle from "@/app/components/header-title";

const ULibrary = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://static.wixstatic.com/media/ad1a88_26c3a2b2ff244e67969665e537b2b3dd~mv2.png/v1/fill/w_660,h_420,al_c,lg_1,q_85,enc_auto/ad1a88_26c3a2b2ff244e67969665e537b2b3dd~mv2.png" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">eLibro</h1>
          <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Esta plataforma permite la lectura en línea, pero también la descarga de los libros para leerlos en otro dispositivo. Es compatible con todos los navegadores, permite la lectura on-line y off-line desde ordenadores o dispositivos móviles (smartphones, tablets) iOS y Android.</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/DMP-doctor-on-iPad-600px-square-G.jpg" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">DynaMed</h1>
          <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">DynaMed es ampliamente utilizado en entornos clínicos para mantener a los profesionales médicos informados sobre las últimas evidencias y prácticas médicas.</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://www.uexternado.edu.co/wp-content/uploads/2020/12/4.jpg" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">ebooks 7-24</h1>
          <p className="mb-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">A través de EBooks 7-24, los usuarios pueden acceder a una amplia gama de contenidos académicos y de investigación, incluyendo libros de texto, monografías, revistas, y otros recursos educativos.</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
    </div>
    
    
    
  );
};

const BibliotecaVPage = () => {
  return (
    <main className="h-full grid gap-2">
      <HeaderTitle direction="/servicios/Biblioteca/bibliotecaInformacion" title="Bibliotecas Virtuales" />
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex min-h-screen items-center justify-center">
          <ULibrary />
        </div>
      </div>
    </main>
  );
};

export default BibliotecaVPage;
