import ImageCarrousel from "@/app/components/image-carrousel";
const slides = [
  "https://images.pexels.com/photos/6794920/pexels-photo-6794920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6794920/pexels-photo-6794920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6794920/pexels-photo-6794920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6794920/pexels-photo-6794920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const descriptions = [
  "Los jurados externos que participaron en defensas de grado pueden realizar el cobro de su sueldo por cajas",
  "Los jurados externos que participaron en defensas de grado pueden realizar el cobro de su sueldo por cajas",
  "Los jurados externos que participaron en defensas de grado pueden realizar el cobro de su sueldo por cajas",
  "Los jurados externos que participaron en defensas de grado pueden realizar el cobro de su sueldo por cajas",
];
function Servicios() {
  return (
    <>
      <h1 className=" text-white text-center font-bold text-4xl p-8">
        Cobro de colegiatura / otros
      </h1>
      <div className="grid grid-cols-12 p-10 gap-20 py-0">
        <div className="col-span-5">
          <ImageCarrousel
            slides={slides}
            description={descriptions}
          ></ImageCarrousel>
          <div className="mt-8"></div>
          <div className="flex flex-row items-center gap-4 justify-center">
            <img
              src="/icons/usericon.png"
              alt="Encargado icon"
              className="w-20"
            />
            <p className="text-white text-xl font-bold">
              Encargado de ingresos: Daniel Chavez - 77731872
            </p>
          </div>
        </div>
        <div className="col-span-7 text-white  font-bold m-10">
          <h1 className="mb-10 text-3xl text-center">Requisitos</h1>
          <ul className="text-2xl text-left list-inside list-disc grid gap-5">
            <li>Carnet de identidad.</li>
            <li>Datos del estudiante.</li>
            <li>
              En casos de inicio de semestre se requiere el formulario de
              inscripciones.
            </li>
            <li>Aplica a la modalidad de titulación.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Servicios;
