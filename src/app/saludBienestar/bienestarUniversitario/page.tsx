import VideoPlayer from "@/app/components/video-player";
import CardGray from "@/app/components/card-gray";
import HeaderTitle from "@/app/components/header-title";
import Circularbutton from "@/app/components/circular-button";
import CopyToClipboard from "@/app/components/copy-clipboard";

const Ubication = () => {
  const videoUrl =
    "https://drive.google.com/uc?id=12UmVcV_XpDeF7V2PhrMQ0opcDXSwCZiJ";
  const videoWidth = "100%";
  const videoHeight = "360";

  return (
    <div className="col-span-4 2xl:col-span-3">
      <h2 className="text-center mt-4 text-xl font-bold text-white mb-2 md:text-2xl xl:text-3xl">
        Ubicación
      </h2>
      <VideoPlayer url={videoUrl} width={videoWidth} height={videoHeight} />
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="mt-10 2xl:mt-0 flex-1">
      <CardGray title="Contactos">
        <ul>
          <li>
            Teléfonos:
            <ul className="list-disc pl-4 sm:pl-6 xl:pl-4 2xl:pl-6">
              <li>
                <CopyToClipboard text="(591-2) 2001800" />
              </li>
              <li>
                <CopyToClipboard text="(591-2) 2246725" />
              </li>
              <li>
                <CopyToClipboard text="(591-2) 2246726" />
              </li>
            </ul>
          </li>
          <li>
            Whatsapp:
            <ul className="list-disc pl-6">
              <li>
                <CopyToClipboard text="+591 77277872" />
              </li>
            </ul>
          </li>
        </ul>
      </CardGray>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="mt-10 2xl:mt-0 flex-1">
      <CardGray title="Horarios de atención">
        <ul className="list-disc pl-1 sm:pl-2 lg:pl-6 xl:pl-4 2xl:pl-6">
          <li>Lunes a Viernes: 08:00 a 19:00</li>
          <li>Sábado: 08:00 a 12:00</li>
        </ul>
      </CardGray>
    </div>
  );
};

const Services = () => {
  return (
    <div className="col-span-5 mb-10">
      <h3 className="mt-10 font-bold text-white col-start-2 mb-4 text-center text-base min-[320px]:text-lg sm:text-xl md:text-2xl xl:text-3xl">
        Servicios de bienestar universitario
      </h3>
      <div className="flex gap-2 w-full justify-center col-span-5 flex-col items-center min-[320px]:flex-row">
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Objetos perdidos"}
          routeUrl=""
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Becas y ayudas"}
          routeUrl=""
        />
      </div>
    </div>
  );
};

function BienestarUniversitarioPage() {
  return (
    <>
      <HeaderTitle
        direction="/saludBienestar"
        title="Bienestar Universitario"
      />
      <div
        className="mt-8 flex flex-col w-full px-1 gap-x-1
          min-[320px]:px-2
          sm:gap-x-4 sm:px-4
          md:grid grid-cols-4 auto-rows-auto
          xl:px-8
          2xl:px-16
          2xl:grid-cols-5"
      >
        <Ubication />
        <div className="col-start-1 col-span-4 min-[460px]:flex flex-row 2xl:col-start-4 2xl:col-span-2 gap-x-4">
          <Contacts />
          <Schedule />
        </div>
        <Services />
      </div>
    </>
  );
}

export default BienestarUniversitarioPage;
