import Image from "next/image";
import CardRequirement from "@/app/components/card-requirement";
import CardGray from "@/app/components/card-gray";
import HeaderTitle from "@/app/components/header-title";
import VideoPlayer from "@/app/components/video-player";
import CopyToClipboard from "@/app/components/copy-clipboard";
import CardBlue from "@/app/components/card-blue";


const InfoLibrary = () => {
  return (
    <div className="col-span-5 mb-10">
      <h3 className="text-center mt-10 text-xl font-bold text-white col-start-2 mb-4 md:text-2xl lg:text-3xl xl:text-4xl">
        Información Biblioteca
      </h3>
      <div className="flex flex-col gap-16 w-full justify-center col-span-full lg:flex-row">
        <div>
        {/* <iframe width="380" height="150" src="https://www.youtube.com/embed/BNsjS_DvgQM?si=E_HgeZcQMC1WaXZL&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
        <CardBlue
          title="Ubicación"
          videoUrl="https://www.youtube.com/watch?v=BNsjS_DvgQM"
          width="380"
          height="150"
          info="Torre Innovacion Av. Argentina Nro. 2067 Piso 2"
          
        />

          {/* <CardRequirement
            title="Ubicación"
            info="Torre Innovacion
            Av. Argentina Nro. 2067
            Piso 2"
          /> */}
        </div>
        <div>
          <CardRequirement
            title="Horario de Atención"
            info="Lunes a Viernes: 08:00 a 19:00
            Sabado: 08:00 a 12:00"
          />
        </div>
        <div>
          <CardRequirement
            title="Bibliotecas Virtual"
            info="Bibliounivalle
            Dynamed
            ebooks
            Hinari
            MedinePlus"
          />
        </div>
      </div>
    </div>
  );
};
function BibliotecaPage() {
  return (
    <main className="h-full grid gap-40">
      <div className="flex flex-col">
  
      
        
        <div className="flex-1 flex">
          <InfoLibrary/>
        </div>
      </div>

    </main>
  );
}

export default BibliotecaPage;