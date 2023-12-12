"use client"
import React, { useEffect, useState } from "react";
import HeaderTitle from "@/app/components/header-title";
import URL from "../../../../api/apiFeaturedBooks";

interface ILibro {
  idLibro: number;
  nombreLibro: string;
  nombreAutor: string;
  editorial: string;
  npaginas: number;
  idioma: string;
  anio: number;
  descripcion: string;
  estado: boolean;
  ruta: string;
}

interface BibliotecaItemsProps {
  libros: ILibro[]; // Ajusta el tipo según la estructura real de tus datos
}
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
]
const BibliotecaItems = ({ libros }: BibliotecaItemsProps) => (
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 my-8">
    {libros.map((libro, index) => (
      <div
        key={index}
        className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow"
      >
        <div className="h-96 w-72">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={libro.ruta}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center text-white">
          <h3 className="font-dmserif text-xl font-bold mb-4">{libro.nombreLibro}</h3>
          <p className="mb-3 text-xl italic opacity-100">
            <strong>Autor:</strong> {libro.nombreAutor} <br />
            <strong>Editorial:</strong> {libro.editorial} <br />
            <strong>Páginas:</strong> {libro.npaginas} <br />
            <strong>Idioma:</strong> {libro.idioma} <br />
            <strong>Año Publicación:</strong> {libro.anio} <br />
          </p>
          {/* Puedes agregar un botón aquí si es necesario */}
        </div>
      </div>
    ))}
  </div>
);

const BibliotecaLDPage = () => {
  const [libros, setLibros] = useState<ILibro[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${URL.baseUrl}Libro/ListaActivos`);
        const apiData = await res.json();

        if (apiData && apiData.response) {
          setLibros(apiData.response);
        } else {
          console.error("Malformatted API data");
        }
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="h-full grid gap-2">
      <HeaderTitle direction="/servicios/Biblioteca" title="Libros Destacados" />
      <div className="flex min-h-screen items-center justify-center">
        <BibliotecaItems libros={libros} />
      </div>
      <div className="overflow-hidden">
      </div>
    </main>
    
  );
};

// ... (importaciones)

// ... (otras importaciones y definiciones necesarias)

// ... (otras importaciones y definiciones necesarias)

//export default function BibliotecaLDPage() {
  // const [libros, setLibros] = useState<ILibro[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`${URL.baseUrl}Libro/ListaActivos`);
  //       const apiData = await res.json();

  //       if (apiData && apiData.response) {
  //         setLibros(apiData.response);
  //       } else {
  //         console.error("Malformatted API data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data from the API:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const slides = libros.map((libro, index) => (
  //   <div key={index} className="relative h-[400px] w-[300px] md:w-[400px] lg:w-[400px] xl:w-[400px] carousel-item"> {/* Ajusta las dimensiones según tus necesidades */}
  //     <img src={libro.ruta} alt={`Slide ${index}`} className="w-full h-full object-cover" />
  //     <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/50 text-white">
  //       <h3 className="font-dmserif text-xl font-bold mb-2">{libro.nombreLibro}</h3>
  //       <p className="text-sm">
  //         <strong>Autor:</strong> {libro.nombreAutor} <br />
  //         <strong>Editorial:</strong> {libro.editorial} <br />
  //         <strong>Páginas:</strong> {libro.npaginas} <br />
  //         <strong>Idioma:</strong> {libro.idioma} <br />
  //         <strong>Año:</strong> {libro.anio} <br />
  //       </p>
  //     </div>
  //   </div>
  // ));

  // return (
  //   <main className="flex items-center justify-center h-screen">
  //     <div className="w-2/3">
  //       <HeaderTitle direction="/servicios/Biblioteca" title="Libros Destacados" />
  //       <div className="relative">
  //         <div>
  //           <Carousel>{slides}</Carousel>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
  //<ActiveSlider/>
//}
// const BibliotecaItems = () => {
//   const [libros, setLibros] = useState<ILibro[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`${URL.baseUrl}Libro/ListaActivos`);
//         const apiData = await res.json();

//         if (apiData && apiData.response) {
//           setLibros(apiData.response);
//         } else {
//           console.error("Malformatted API data");
//         }
//       } catch (error) {
//         console.error("Error fetching data from the API:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Cargando libros...</p>;
//   }

//   return (
//     <main className="h-full grid gap-2">
//       <HeaderTitle direction="/servicios/Biblioteca" title="Libros Destacados" />
//       <div className="flex min-h-screen items-center justify-center">
//         <ActiveSlider libros={libros} />
//       </div>
//     </main>
//   );
// };
export default BibliotecaLDPage;