import Circularbutton from "../../components/circular-button";
import Card from "../../components/card-gray"

function GabinetePsicoPedagogico() {
  return (
    <main className="h-full grid gap-40">
      <h1 className="text-center mt-10 text-5xl font-bold text-white">Gabinete Pisco-Pedagógico</h1>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-3 gap-16">
          <div className="">
            <Card title={""} 
                  text={""}
            />
          </div>
          <div>
            <Card title={"Contactos"} 
                  text={"Teléfonos:(591-2) 2001800 (591-2) 2246725(591-2) 2246726 Whatsapp: +59177277872"}
            />
          </div>
          <div>
            <Card title={"Horarios de atención"} 
                  text={"Lunes a Viernes: 08:00 a 19:00 Sábado: 08:00 a 12:00."}
            />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-10 text-3xl font-bold text-white">Requisitos</h1>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-3 gap-16">
          
        </div>
      </div>
    </main>
  );
}

export default GabinetePsicoPedagogico;