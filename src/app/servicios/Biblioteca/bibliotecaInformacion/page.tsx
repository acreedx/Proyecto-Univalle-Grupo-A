import Image from "next/image";
import VideoPlayer from "@/app/components/video-player";
import Link from "next/link";
import HeaderTitle from "@/app/components/header-title";



const InfoLibrary = () => {
  return (
    <div className="col-span-5 mb-10">
      {/* <h3 className="text-center mt-10 text-xl font-bold text-white col-start-2 mb-4 md:text-2xl lg:text-3xl xl:text-4xl">
        Información Biblioteca
      </h3> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center p-6 bg-red-400 border border-red-400 rounded-2xl shadow text-white ml-1 md:ml-4">
          <h3 className="text-center text-2xl font-bold my-1">
            Ubicación
          </h3>
          <div className="my-2 pt-1 pb-2">
            <VideoPlayer url="https://drive.google.com/uc?id=1qqZXY5JhcetsA_6zcV1BS_3CdcjT6ma4" width="300" height="300"/>
          </div>
          <p className="text-lg text-justify">
          Visíta nuestra biblioteca ubicada en el piso 2 de la Torre Innovación, en la Av. Argentina Nro. 2067.
          </p>
          <Link href={"/servicios/Biblioteca/bibliotecaInformacion/bibliotecaInfoUbicacion"}>
            <div className="flex justify-center mb-3 mt-3">
                <button className="rounded-full bg-red-900 py-2 px-4 text-sm text-white shadow">
                  Guía de Ubicación
                </button>
            </div>
          </Link>
          
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-red-400 border border-red-400 rounded-2xl shadow text-white mx-2">
            <h3 className="text-center text-2xl font-bold mb-4 mt-0">
              Horarios de Atención
            </h3>
            <div className="mb-1 mt-5">
                  <Image src="/Images/calendario.png" alt="Horario" className="max-w-full mx-auto" width={200} height={100} />
            </div>
            <ul className="text-xl py-2 px-4 mt-4 mb-11 text-center">
              <li>Lunes a Viernes: 08:00 a 19:00</li>
              <li>Sábado: 08:00 a 12:00</li>
            </ul>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-red-400 border border-red-400 rounded-2xl shadow text-white mr-1 md:mr-4">
            <h3 className="text-center text-2xl font-bold mt-0 mb-2">
              Bibliotecas Virtuales
            </h3>
            <div className="my-8">
                  <Image src="/Images/i_virtual_library.png" alt="Reservas" className="max-w-full mx-auto" width={150} height={100} />
            </div>
            <p className="text-lg text-justify">
              Accede a una amplia gama de recursos académicos desde la comodidad de tu hogar con nuestras bibliotecas virtuales.
            </p>
            <Link href={"/servicios/Biblioteca/bibliotecaInformacion/bibliotecaInfoBVirtuales"}>
            <div className="flex justify-center mb-3 mt-3">
                <button className="rounded-full bg-red-900 py-2 px-4 text-sm text-white shadow">
                  Guía de Ubicación
                </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
function BibliotecaPage() {
  return (
    <main className="h-full grid gap-40">
      <div className="flex flex-col">
        <div className="mb-8">
        <HeaderTitle direction="/servicios/Biblioteca" title="Información Biblioteca" />
        </div>
        <div className="flex-1 flex">
          <InfoLibrary/>
        </div>
      </div>

    </main>
  );
}

export default BibliotecaPage;