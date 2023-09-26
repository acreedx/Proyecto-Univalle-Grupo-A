import Circularbutton from "../components/circular-button";
import HeaderTitle from "../components/header-title";
function AdministracionPage() {
  return (
    <main className="h-full grid gap-40">
      <HeaderTitle direction="/" title="Administración" />
      <div className="flex flex-wrap gap-16 w-full justify-center">
        <Circularbutton
          imageUrl={
            "https://th.bing.com/th/id/R.d806f98c740c0b969a21919e20926391?rik=1B1e%2frAbk%2bCrSQ&riu=http%3a%2f%2falexiac.weebly.com%2fuploads%2f1%2f3%2f5%2f3%2f13536969%2f1856030.jpg%3f284&ehk=L%2bv4SqLD7em4Ny4l29%2bnuADt%2bHgUeaXD6N4%2fSiVIOgM%3d&risl=&pid=ImgRaw&r=0"
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
