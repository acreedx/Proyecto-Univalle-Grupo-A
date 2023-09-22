import Circularbutton from "../components/circular-button";


function ServiciosPage() {
  return (
    <main className="h-full grid gap-40">
      <h1 className="text-center mt-10 text-4xl font-bold text-white">Servicios</h1>
      <div className="flex gap-16 w-full justify-center">
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Cafetería"}
          routeUrl="/servicios/cafeteria"
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Campus deportivo"}
          routeUrl="/servicios/campusDeportivo"
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Biblioteca"}
          routeUrl="/servicios/biblioteca"
        />
      </div>
    </main>
  );
}

export default ServiciosPage;
