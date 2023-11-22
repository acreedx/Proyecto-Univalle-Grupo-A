"use client";
import Image from "next/image";
import VideoPlayer from "@/app/components/video-player";
import Link from "next/link";
import GenericButton from "@/app/components/generic-button";
import HeaderTitle from "@/app/components/header-title";
import { useState } from "react";

const ULibrary = () => {
  const videoUrl =
    "https://drive.google.com/uc?id=1qqZXY5JhcetsA_6zcV1BS_3CdcjT6ma4";
  const imgUrl =
    "https://drive.google.com/uc?id=1YZ1Cf3BcXoob20h7ELWtIkn_wip22OT5";
    
  const ubiWidth = "80%";
  const ubiHeight = "360"; // Ajusta el valor de altura según tus necesidades
  const videoHeight = "360";

  const [ubication, setUbication] = useState(true);

  const handleUbicationInformation = (ubiState: boolean) => {
    setUbication(ubiState);
  };

  return (
    <div className="col-span-4 2xl:col-span-3 flex flex-col items-center justify-center">
      <div className="mb-2 flex flex-col justify-center min-[420px]:flex-row min-[420px]:justify-evenly">
        <div className="flex flex-col gap-y-2 items-center justify-center min-[210px]:flex-row min-[210px]:gap-x-2 ">
          <GenericButton
            text="Mapa"
            functionOnClick={() => handleUbicationInformation(true)}
            active={ubication}
          />
          <GenericButton
            text="Video"
            functionOnClick={() => handleUbicationInformation(false)}
            active={!ubication}
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-4">
        {ubication ? (
          <img src={imgUrl} width={ubiWidth} height={ubiHeight} alt="Croquis" />
        ) : (
          <VideoPlayer url={videoUrl} width={ubiWidth} height={videoHeight} />
        )}
      </div>
    </div>
  );
};


const UBibliotecaPage = () => {
  return (
    <main className="h-full grid gap-40">
      <div className="flex flex-col ">
        <HeaderTitle direction="/servicios/Biblioteca/bibliotecaInformacion" title="Ubicación" />
        <div className="flex-1 flex items-center justify-center my-10">
          <ULibrary />
        </div>
      </div>
    </main>
  );
};


export default UBibliotecaPage;
