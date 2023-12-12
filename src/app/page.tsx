import Circularbutton from "./components/circular-button";

export default function Home() {
  return (
    <main className="h-full grid gap-40 mx-0">
      <h1 className="text-center mt-10 text-4xl font-bold text-white">
        Bienvenido a InfoUnivalle
      </h1>
      <div className="flex gap-16 w-full justify-center">
        <Circularbutton
          imageUrl={"https://cdn-icons-png.flaticon.com/512/4717/4717962.png"}
          text={"Administración"}
          routeUrl="/administracion"
        />
        <Circularbutton
          imageUrl={"https://cdn-icons-png.flaticon.com/512/8492/8492123.png"}
          text={"Salud y Bienestar"}
          routeUrl="/saludBienestar"
        />
        <Circularbutton
          imageUrl={"https://cdn-icons-png.flaticon.com/512/8922/8922283.png"}
          text={"Servicios"}
          routeUrl="/servicios"
        />
      </div>
    </main>
  );
}
