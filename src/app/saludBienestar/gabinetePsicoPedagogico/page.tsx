import CardRequirement from "@/app/components/card-requirement";
import CardGray from "@/app/components/card-gray";
import HeaderTitle from "@/app/components/header-title";
import VideoPlayer from "@/app/components/video-player";
import CopyToClipboard from "@/app/components/copy-clipboard";

const RequirementInfo = () => {
  return (
    <div className="col-span-5 mb-10">
      <h3 className="text-center mt-10 text-xl font-bold text-white col-start-2 mb-4 md:text-2xl lg:text-3xl xl:text-4xl">
        Requisitos para usar los servicios de Gabinete Psico-Pedagógico
      </h3>
      <div className="flex flex-col gap-16 w-full justify-center col-span-full lg:flex-row">
        <div>
          <CardRequirement
            title="Requisitos - Atención general"
            info="Ser estudiante, personal administrativo, docente, guardia de seguridad, personal de limpieza en Univalle. Debe presentar su credencial de la universidad al momento de usar este servicio"
          />
        </div>
        <div>
          <CardRequirement
            title="Requisitos - Atención a personal externo"
            info="Esto incluye a familias o paciente externo. Esto solo es aplicable en casos de emergencia"
          />
        </div>
      </div>
    </div>
  );
};

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
            <ul className="list-disc pl-4 sm:pl-6 xl:pl-4 2xl:pl-6">
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

function GabinetePsicoPedagogicoPage() {
  return (
    <>
      <HeaderTitle
        direction="/saludBienestar"
        title="Gabinete Psico-Pedagógico"
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
        <RequirementInfo />
      </div>
    </>
  );
}

export default GabinetePsicoPedagogicoPage;
