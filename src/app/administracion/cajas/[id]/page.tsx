"use client";
import ImageCarrousel from "@/app/components/image-carrousel";
import HeaderTitle from "@/app/components/header-title";
const slides = [
  "/administracion/cajas.png",
  "/administracion/cajas.png",
  "/administracion/cajas.png",
];
const descriptions = [
  "Las personas que deseen realizar un pago en cajas deben portar su carnet de identidad",
  "En casos de inicio de semestre se requiere el formulario de inscripciones.",
  "Si tiene alguna duda, puede contactar con el encargado de trámites",
];
interface Servicio {
  titulo: string;
  requerimientos: string[];
  encargado: string;
  cargo: string;
  nrocontacto: string;
}
interface Id {
  id: number;
}
const servicios: Servicio[] = [
  {
    titulo: "Cobro de Colegiatura u Otros",
    requerimientos: [
      "Carnet de identidad.",
      "Datos del estudiante.",
      "En casos de inicio de semestre se requiere el formulario de inscripciones.",
      "Aplica a la modalidad de titulación.",
    ],
    encargado: "Daniel Chavez",
    cargo: "Encargado de Ingresos",
    nrocontacto: "77731872",
  },
  {
    titulo: "Cobro de Trámites",
    requerimientos: [
      "Formulario de Solvencia, Emitido por el Area de Trámites",
    ],
    encargado: "Daniel Chavez",
    cargo: "Encargado de Ingresos",
    nrocontacto: "77731872",
  },
  {
    titulo: "Cobro de Cheques",
    requerimientos: [
      "Carnet de Identidad - Obligatorio",
      "En caso de Terceros se requiere una carta autorizada",
      "Todo cobro debe ser realizado en cajas de la Universidad",
    ],
    encargado: "Daniel Chavez",
    cargo: "Encargado de Ingresos",
    nrocontacto: "77731872",
  },
];
function Servicios({ params }: { params: { id: number } }) {
  const servicio: Servicio = servicios[params.id - 1];
  return (
    <>
      <HeaderTitle direction="/administracion/cajas" title={servicio.titulo} />
      <div className="grid grid-cols-1 mt-10 p-10 gap-20 py-0 xl:grid-cols-12">
        <div className="col-span-7  xl:col-span-5 md:col-span-10">
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
              {servicio.encargado} : {servicio.encargado} -{" "}
              {servicio.nrocontacto}
            </p>
          </div>
        </div>
        <div className="col-span-7  text-white  font-bold m-10  md:col-span-10 xl:col-span-7">
          <h1 className="mb-10 text-3xl text-center">Requisitos</h1>
          <ul className="text-2xl text-left list-inside list-disc grid gap-5">
            {servicio.requerimientos.map((e) => {
              return <li>{e}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Servicios;
