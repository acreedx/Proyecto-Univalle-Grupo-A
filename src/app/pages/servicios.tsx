import Circularbutton from "../components/circular-button";

function servicios() {
  return (
    <main className="h-full grid gap-40">
      <h1 className="text-center text-4xl font-bold">Servicios</h1>
      <div className="flex gap-16 w-full justify-center">
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Administración"}
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Salud y Bienestar"}
        />
        <Circularbutton
          imageUrl={
            "https://www.iconarchive.com/download/i103468/paomedia/small-n-flat/shop.1024.png"
          }
          text={"Servicios"}
        />
      </div>
    </main>
  );
}

export default servicios;
