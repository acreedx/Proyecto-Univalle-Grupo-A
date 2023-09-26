import Circularbutton from "@/app/components/circular-button";
import Link from "next/link";


function CafeteriaPage() {
  return (
    <main className="h-full grid gap-40">
      <div className="flex flex-col">
  
      
        
        <div className="flex-1 flex">
          <div className="flex-1  p-4">           
            <h1 className="text-center mt-10 text-4xl font-bold text-white">Video informativo</h1>
            <center className="p-10">
            <iframe width="480" height="360" src="https://www.youtube.com/embed/iA9vIfTF7Wo" title="Vida del programador - Gracioso" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </center>
            <div className="rounded-3xl bg-gray-400 text-white p-4 text-2xl mx-20">
              <h1 className="text-center font-bold text-white text-4xl p-5">Horario de atencion</h1>
              <h1 className="text-center text-gray-300">Lunes a Viernes: 08:00 a 19:00</h1>
              <h1 className="text-center text-gray-300">Sabado: 08:00 a 12:00</h1>
              <h1 className="text-center text-gray-300">Torre Innovacion</h1>
              <h1 className="text-center text-gray-300">Planta baja</h1>
            </div>
          </div>
          
          <div className="flex-1  p-4">
            <Link href={"/servicios/cafeteriaMenu"}>
              <div className="p-4 flex justify-between items-center">
                  <button className="bg-white text-red-500 px-6 py-3 rounded-full uppercase ml-auto font-bold text-2xl mx-10">Menu 〉</button>
              </div>
            </Link>
          <div className="bg-gray-400 text-white p-4 text-2xl mx-20 items-center rounded-3xl">
            
            <h1 className="text-4xl px-20 my-10">La cafeteria de la universidad es un ambiente esclusivo para los estudiantes de univalle
            donde pueden ir a denscansar, comer y divertirse.</h1>
            <h1 className="text-4xl px-20 my-10">la cafeteria cuenta con un amplio menu para la eleccion de los estudiantes de univalle</h1>
          </div>


          </div>
        </div>
      </div>

    </main>
  );
}

export default CafeteriaPage;