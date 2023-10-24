import VideoPlayer from "@/app/components/video-player";
import Circularbutton from "@/app/components/circular-button";
import HeaderTitle from "@/app/components/header-title";
import WhiteHeaderTitle from "@/app/components/white-header-title";
function BienestarUniversitarioPage() {
  const videoUrl =
    "https://drive.google.com/uc?id=12UmVcV_XpDeF7V2PhrMQ0opcDXSwCZiJ";
  const videoWidth = "580px";
  const videoHeight = "100px";
  const id = "1";
  return (
    <>
      <WhiteHeaderTitle
        direction="/administracion"
        title="Volver"
        titleHeader="Cajas"
        directionRight="/administracion/cajas/pagosenlinea"
        titleRight="Pagos en línea ->"
      />
      <div className="grid grid-cols-1 w-full px-4 gap-x-8 xl:grid-cols-12">
        <div className="col-span-5 bg-green">
          <h2 className="text-center mt-4 text-2xl font-bold text-white mb-2">
            Ubicación
          </h2>
          <div className="grid justify-items-center">
            <VideoPlayer
              url={videoUrl}
              width={videoWidth}
              height={videoHeight}
            />
          </div>
        </div>
        <div className="col-span-7 grid grid-cols-1 gap-16 pt-8  h-fit mt-6 sm:grid-cols-2 xl:mr-16">
          <div className="bg-[#898989] rounded-2xl p-4 text-white my-auto shadow-lg h-full">
            <h3 className="text-center text-2xl font-bold mb-2">
                Contactos
            </h3>
            <ul className="text-xl p-6 pt-2 text-center">
              <li>Teléfonos: 2001800 </li>
              <li>2246725</li>
              <li>2246726</li>
              <li>Whatsapp: +59177277872</li>
            </ul>
          </div>
          <div className="bg-[#898989] rounded-2xl p-4 text-white my-auto shadow-lg h-full">
            <h3 className="text-center text-2xl font-bold mb-2">
              Horarios de atención
            </h3>
            <ul className="text-xl p-6 pt-2 text-center">
              <li>Lunes a Viernes: 08:00 a 19:00</li>
              <li>Sabado: 08:00 a 12:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-4 text-4xl font-bold text-white">
          Servicios de Cajas
        </h1>
        <div className="flex flex-row m-10 mt-4 mb-0 pb-4 justify-evenly">
          <Circularbutton
            imageUrl={
              "https://img2.freepng.es/20180425/gqw/kisspng-computer-icons-university-education-scholarship-st-5ae05c41e789e1.4489979315246531219484.jpg"
            }
            text={"Cobro de Colegiatura"}
            routeUrl="/administracion/cajas/1"
          />
          <Circularbutton
            imageUrl={"https://cdn-icons-png.flaticon.com/512/2720/2720583.png"}
            text={"Cobro de Trámites"}
            routeUrl="/administracion/cajas/2"
          />
          <Circularbutton
            imageUrl={"https://cdn-icons-png.flaticon.com/512/431/431223.png"}
            text={"Cobro de Cheques"}
            routeUrl="/administracion/cajas/3"
          />
        </div>
      </div>
    </>
  );
}

export default BienestarUniversitarioPage;
