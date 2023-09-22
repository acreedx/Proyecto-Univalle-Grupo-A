import VideoPlayer from "@/app/components/video-player";

function BienestarUniversitarioPage() {
  const videoUrl =
    "https://drive.google.com/uc?id=12UmVcV_XpDeF7V2PhrMQ0opcDXSwCZiJ";
  const videoWidth = "100%";
  const videoHeight = "360";

  return (
    <>
      <h1 className="text-center mt-10 text-4xl font-bold text-white">
        Bienestar universitario
      </h1>
      <div className="mt-8 grid grid-cols-5 grid-rows-1 w-full px-16 gap-x-8 bg-black ">
        <div className="col-span-3 bg-green">
          <h2 className="text-center mt-4 text-2xl font-bold text-white mb-2">
            Ubicación
          </h2>
          <VideoPlayer url={videoUrl} width={videoWidth} height={videoHeight} />
        </div>

        <div className="col-start-4 bg-[#898989] rounded-2xl p-4 text-white">
          <h3 className="text-center text-2xl font-bold mb-2">Contactos</h3>
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
          </ul>
        </div>
        <div className="col-start-5 bg-[#898989] rounded-2xl p-4 text-white">
          <h3 className="text-center text-2xl font-bold mb-2">
            Horarios de atención
          </h3>
          <ul>
            <li>Lunes a Viernes: 08:00 a 19:00</li>
            <li>Sábado: 08:00 a 12:00</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default BienestarUniversitarioPage;
