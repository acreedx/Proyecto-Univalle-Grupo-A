import Circularbutton from "../../components/circular-button";
import Card from "../../components/card-gray"
import style from "./page.module.css"
import VideoPlayer from "@/app/components/video-player";
import HeaderTitle from "@/app/components/header-title";

function GabinetePsicoPedagogicoPage() {
  const videoUrl =
    "https://drive.google.com/uc?id=12UmVcV_XpDeF7V2PhrMQ0opcDXSwCZiJ";
  const videoWidth = "100%";
  const videoHeight = "100%";
  return (
    <main className="h-full grid gap-16">
      <HeaderTitle
        direction="/saludBienestar"
        title="Gabinete Psico-Pedagogico"
      />
      <div className="flex flex-row justify-center gap-10 mx-3">
          <div className="basis-5/12" >
            <VideoPlayer url={videoUrl} width={videoWidth} height={videoHeight} />
          </div>
          <div className="basis-1/4">
            <Card title={"Contactos"} 
                  children={
                  <ul>
                    <li>
                      Teléfonos:
                      <ul>
                        <li>(591-2) 2001800</li>
                        <li>(591-2) 2246725</li>
                        <li>(591-2) 2246726</li>
                      </ul>
                    </li>
                    <li>
                      Whatsapp:
                      <ul>
                        <li>+591 77277872</li>
                      </ul>
                    </li>
                  </ul>}
            />
          </div>
          <div className="basis-1/5">
            <Card title={"Horarios de atención"} 
                  children={
                  <ul>
                    <li>Lunes a Viernes: 08:00 a 19:00</li>
                    <li>Sábado: 08:00 a 12:00</li>
                  </ul>}
            />
          </div>
      </div>
      <h1 className="text-center mt-10 text-3xl font-bold text-white">Requisitos para usar el gabinete Psico-pedagógico </h1>
    <div className={style.description}>
      <div className={style["description-item"]}>
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white text-center">Requisito 1</h5>
        <p className="font-normal text-lg text-white dark:text-white text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      <div className={style["description-item"]}>
      <h5 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white text-center">Requisito 2</h5>
      <p className="font-normal text-lg text-white dark:text-white text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className={style["description-item"]}>
      <h5 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white text-center">Requisito 3</h5>
        <p className="font-normal text-lg text-white dark:text-white text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    </div>
    </main>
  );
}

export default GabinetePsicoPedagogicoPage;
