import Circularbutton from "../components/circular-button";
import HeaderTitle from "@/app/components/header-title";

function SaludYBienestarPage() {
  return (
    <main className="h-full grid gap-40">
      <HeaderTitle direction="/" title="Salud Y Bienestar" />
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
          text={"Clínica Odontológica"}
          routeUrl="/saludBienestar/clinicaOdontologica"
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
