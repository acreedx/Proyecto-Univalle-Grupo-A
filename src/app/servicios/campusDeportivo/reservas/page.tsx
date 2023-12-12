import Image from "next/image";
import VideoPlayer from "@/app/components/video-player";
import Link from "next/link";
import HeaderTitle from "@/app/components/header-title";



const InfoReserva = () => {
  return (
    <div className="col-span-5 mb-10">
      {/* <h3 className="text-center mt-10 text-xl font-bold text-white col-start-2 mb-4 md:text-2xl lg:text-3xl xl:text-4xl">
        Información Biblioteca
      </h3> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
        
        <div className="flex flex-col items-center justify-center p-6 bg-gray-700 rounded-2xl shadow text-white mr-1 md:mr-4">
            <h3 className="text-center text-2xl font-bold mb-4 mt-2">
              Horarios de Atención
            </h3>
            <div className="mb-1 mt-5">
                  <Image src="/Images/campusDemo/6.jpg" alt="Horario" className="max-w-full mx-auto" width={400} height={100} />
            </div>
            <ul className="text-xl py-2 px-4 mt-4 mb-11 text-center">
              <li>Lunes a Viernes: 08:00 a 20:00 Hrs</li>
              <li>Sábado: 08:00 a 12:00 Hrs</li>
            </ul>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-700 rounded-2xl shadow text-white mr-1 md:mr-4">
            <h3 className="text-center text-2xl font-bold mb-4 mt-2">
              Contactos y Reservas
            </h3>
            <div className="mt-5">
                  <Image src="/Images/calendario.png" alt="Reservas" className="max-w-full mx-auto" width={200} height={100} />
            </div>
            <p className="text-xl py-2 px-4 mt-4 mb-11 text-center">
            Nuestro equipo está comprometido en brindarte una experiencia excepcional, asegurándote que tu reserva en nuestro campus sea sinónimo de éxito y comodidad. ¡Contáctanos hoy y sé parte de la experiencia única que ofrecemos en la Universidad Univalle sede La Paz!
            </p>
            <ul className="text-xl py-2 px-4 mt-4 mb-11 text-center">
              <li>Daniel Rivas Saavedra: +591 72584257</li>
              <li>Oficinas: +591 75784532</li>
            </ul>
        </div>
      </div>
    </div>
  );
};
function ReservasPage() {
  return (
    <main className="h-full grid gap-40">
      <div className="flex flex-col">
        <div className="mb-8">
        <HeaderTitle direction="/servicios/campusDeportivo" title="Reservas" />
        </div>
        <div className="flex-1 flex">
          <InfoReserva/>
        </div>
      </div>

    </main>
  );
}

export default ReservasPage;