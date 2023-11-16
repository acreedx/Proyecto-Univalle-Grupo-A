import Circularbutton from "../components/circular-button";
import HeaderTitle from "@/app/components/header-title";

function SaludYBienestarPage() {
  return (
    <main className="h-full grid gap-40">
      <HeaderTitle direction="/" title="Salud y Bienestar" />
      <div className="flex gap-16 w-full justify-center flex-wrap">
        <Circularbutton
          imageUrl={
            "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hospital-logo-design-template-572099cf985a4fb94c4d8a9700a685a6_screen.jpg?ts=1666871753"
          }
          text={"Gabinete Medico"}
          routeUrl="/saludBienestar/gabineteMedico"
        />
        <Circularbutton
          imageUrl={
            "https://1.bp.blogspot.com/-ZH_OS8-Thhc/VwJwbc3dwzI/AAAAAAAAdP8/c237oZfeAFUe9oK442padKYsys2wuPzIQ/s1600/psi.jpg"
          }
          text={"Gabinete Psico-Pedagogico"}
          routeUrl="/saludBienestar/gabinetePsicoPedagogico"
        />
        <Circularbutton
          imageUrl={
            "https://img.freepik.com/vector-premium/adhesivo-linea-clinica-dental-icono-dentista-logotipo-odontologia-estomatologia-concepto-cuidado-dientes-vector-sobre-fondo-aislado-eps-10_399089-2404.jpg?w=2000"
          }
          text={"Clínica Odontológica"}
          routeUrl="/saludBienestar/clinicaOdontologica"
        />
        <Circularbutton
          imageUrl={
            "https://static.vecteezy.com/system/resources/previews/006/310/372/non_2x/business-people-with-magnifier-and-computer-searching-new-information-explore-and-business-concept-of-data-research-and-information-cartoon-illustration-isolated-on-white-background-vector.jpg"
          }
          text={"Bienestar Universitario"}
          routeUrl="/saludBienestar/bienestarUniversitario/"
        />
      </div>
    </main>
  );
}

export default SaludYBienestarPage;
