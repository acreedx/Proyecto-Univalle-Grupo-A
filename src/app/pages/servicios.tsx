import Circularbutton from "../components/circular-button";


function servicios() {
  return (
    <main className="h-full grid gap-40">
      <h1 className="text-center mt-10 text-4xl font-bold text-white">Servicios</h1>
      <div className="flex gap-16 w-full justify-center">
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Administración"}
          routeUrl=""
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Salud y Bienestar"}
          routeUrl="/saludBienestar"
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Servicios"}
          routeUrl=""
        />
      </div>
    </main>
  );
}

export default servicios;
