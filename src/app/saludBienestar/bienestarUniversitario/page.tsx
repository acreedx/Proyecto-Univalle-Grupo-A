import VideoPlayer from "@/app/components/video-player";
import HeaderTitle from "@/app/components/header-title";
import Circularbutton from "@/app/components/circular-button";
import CopyToClipboard from "@/app/components/copy-clipboard";

const Ubication = () => {
  const videoUrl =
    "https://drive.google.com/uc?id=12UmVcV_XpDeF7V2PhrMQ0opcDXSwCZiJ";
  const videoWidth = "100%";
  const videoHeight = "360";

  return (
    <div className="col-span-3">
      <h2 className="text-center mt-4 text-3xl font-bold text-white mb-2">
        Ubicación
      </h2>
      <VideoPlayer url={videoUrl} width={videoWidth} height={videoHeight} />
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="col-start-4 bg-[#898989] rounded-2xl p-4 text-white">
      <h3 className="text-center text-3xl font-bold mb-2">Contactos</h3>
      <ul className="text-[1.5rem]">
        <li>
          Teléfonos:
          <ul className="list-disc pl-6">
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
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="col-start-5 bg-[#898989] rounded-2xl p-4 text-white">
      <h3 className="text-center text-3xl font-bold mb-2">
        Horarios de atención
      </h3>
      <ul className="text-[1.5rem] pl-6 list-disc">
        <li>Lunes a Viernes: 08:00 a 19:00</li>
        <li>Sábado: 08:00 a 12:00</li>
      </ul>
    </div>
  );
};

const Services = () => {
  return (
    <div className="col-span-5">
      <h3 className="text-center mt-10 text-3xl font-bold text-white col-start-2 mb-4">
        Servicios de bienestar universitario
      </h3>
      <div className="flex gap-16 w-full justify-center  col-span-5">
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
          text={"Becas y ayudas universitarias"}
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
        title="Bienestar universitario"
      />
      <div className="mt-8 grid grid-cols-5 grid-rows-2 w-full px-16 gap-x-8">
        <Ubication />
        <Contacts />
        <Schedule />
        <Services />
      </div>
    </>
  );
}

export default BienestarUniversitarioPage;
