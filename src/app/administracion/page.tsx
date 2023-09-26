import Circularbutton from "../components/circular-button";

function AdministracionPage() {
  return (
    <main className="h-full grid gap-40">
      <h1 className="text-center mt-10 text-4xl font-bold text-white">
        Administración
      </h1>
      <div className="flex gap-16 w-full justify-center">
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
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Postgrado"}
          routeUrl="/administracion/postgrado"
        />
      </div>
    </main>
  );
}

export default AdministracionPage;
