import Circularbutton from "../components/circular-button";
import HeaderTitle from "../components/header-title";
function AdministracionPage() {
  return (
    <main className="h-full grid gap-40">
      <HeaderTitle direction="/" title="Administración" />
      <div className="flex flex-wrap gap-16 w-full justify-center">
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Trámites"}
          routeUrl="/administracion/tramites/procesosAcademicos"
        />
        <Circularbutton
          imageUrl={
            "https://img2.freepng.es/20180509/jue/kisspng-cash-register-money-computer-icons-payment-busines-5af3bdd5166a83.5085942215259232850918.jpg"
          }
          text={"Cajas"}
          routeUrl="/administracion/cajas"
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Dirección de carrera"}
          routeUrl="/administracion/direccionDeCarrera"
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"NAF"}
          routeUrl="/administracion/NAE"
        />
        <Circularbutton
          imageUrl={
            "data:image/png;base64,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"
          }
          text={"Postgrado"}
          routeUrl="/administracion/postgrado"
        />
      </div>
    </main>
  );
}

export default AdministracionPage;
