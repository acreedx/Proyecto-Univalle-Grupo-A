import Circularbutton from "../../components/circular-button";
import HeaderTitle from "@/app/components/header-title";

function LibraryPage() {
  return (
    <main className="h-full grid gap-40">
      <HeaderTitle direction="/servicios" title="Biblioteca" />
      <div className="flex gap-16 w-full justify-center flex-wrap mb-8">
        <Circularbutton
          imageUrl={
            "https://png.pngtree.com/png-vector/20220526/ourlarge/pngtree-open-information-book-with-bookworm-isolated-thin-line-icon-png-image_4741279.png"
          }
          text={"Información"}
          routeUrl="/servicios/Biblioteca/bibliotecaInformacion"
        />
        <Circularbutton
          imageUrl={
            "https://img.freepik.com/premium-vector/pastel-book-icon-education-concept_77417-1738.jpg"
          }
          text={"Libros Destacados"}
          routeUrl="/saludBienestar/gabinetePsicoPedagogico"
        />
        <Circularbutton
          imageUrl={
            "https://img.freepik.com/vector-gratis/fondo-biblioteca-libros-simbolos-lectura-ilustracion-vectorial-isometrica_1284-81743.jpg?size=626&ext=jpg&ga=GA1.1.1016474677.1696723200&semt=sph"
          }
          text={"Servicios de Biblioteca"}
          routeUrl="/saludBienestar/clinicaOdontologica"
        />
        {/* <Circularbutton
          imageUrl={
            "https://static.vecteezy.com/system/resources/previews/006/310/372/non_2x/business-people-with-magnifier-and-computer-searching-new-information-explore-and-business-concept-of-data-research-and-information-cartoon-illustration-isolated-on-white-background-vector.jpg"
          }
          text={"Bienestar Universitario"}
          routeUrl="/saludBienestar/bienestarUniversitario"
        /> */}
      </div>
    </main>
  );
}

export default LibraryPage;
