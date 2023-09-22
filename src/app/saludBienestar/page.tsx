import Circularbutton from "../components/circular-button";


function SaludYBienestarPage() {
  return (
    <main className="h-full grid gap-40">
      <h1 className="text-center mt-10 text-4xl font-bold text-white">Salud Y Bienestar</h1>
      <div className="flex gap-16 w-full justify-center">
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Gabinete Medico"}
          routeUrl=""
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Gabinete Psico-Pedagogico"}
          routeUrl="/saludBienestar/gabinetePsicoPedagogico"
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Clinica Odontologica"}
          routeUrl=""
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Bienestar Universitario"}
          routeUrl="/saludBienestar/bienestarUniversitario"
        />
      </div>
    </main>
  );
}

export default SaludYBienestarPage;
