import Circularbutton from "../../components/circular-button";
import Card from "../../components/card-gray";

function GabinetePsicoPedagogicoPage() {
  return (
    <main className="h-full grid gap-40">
      <h1 className="text-center mt-10 text-5xl font-bold text-white">
        Gabinete Pisco-Pedagógico
      </h1>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-3 gap-16">
          <div className="">
            <Card
              title={""}
              children={
                <ul>
                  <li>
                    Teléfonos:
                    <ul>
                      <li>(591-2) 2001800</li>
                      <li>(591-2) 2246725</li>
                      <li>(591-2) 2246726</li>
                    </ul>
                  </li>
                  <li>
                    Whatsapp:
                    <ul>
                      <li>+591 77277872</li>
                    </ul>
                  </li>
                </ul>
              }
            />
          </div>
          <div>
            <Card
              title={"Contactos"}
              children={
                "Teléfonos:(591-2) 2001800 (591-2) 2246725(591-2) 2246726 Whatsapp: +59177277872"
              }
            />
          </div>
          <div>
            <Card
              title={"Horarios de atención"}
              children={"Lunes a Viernes: 08:00 a 19:00 Sábado: 08:00 a 12:00."}
            />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-10 text-3xl font-bold text-white">
        Requisitos
      </h1>
    </main>
  );
}

export default GabinetePsicoPedagogicoPage;
