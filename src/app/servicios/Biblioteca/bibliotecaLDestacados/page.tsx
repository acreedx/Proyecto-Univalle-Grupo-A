// "use client"
// import Image from "next/image";
// import VideoPlayer from "@/app/components/video-player";
// import Link from "next/link";
import HeaderTitle from "@/app/components/header-title";
// import BookCard from "@/app/components/book-card";

// import{
//   RxCrop,
//   RxDesktop,
//   RxPencil2,
//   RxReader,
//   RxRocket,
//   RxAccessibility,
// }from "react-icons/rx";

// import book1 from "../../../../../public/Images/book1.png";

// import book2 from "../../../../../public/Images/book2.png";
// import book3 from "../../../../../public/Images/book3.png";
// import book4 from "../../../../../public/Images/book4.png";
// import book5 from "../../../../../public/Images/book5.jpg";
// import book6 from "../../../../../public/Images/book6.jpg";

// export const BooksData = [
//   {
//     icon: RxCrop,
//     title:"Toxicología Ambiental",
//     content: "Autor: Selene Huerta",
//     backgroundImage:book1,
//   },
//   {
//     icon: RxCrop,
//     title:"Sintomas y signos cardinales de las enfermedades",
//     content: "Autor: Jose Vigil",
//     backgroundImage:book2,
//   },
//   {
//     icon: RxCrop,
//     title:"Urología Clínica",
//     content: "Autor: Rodrigo Suarez",
//     backgroundImage:book3,
//   },
//   {
//     icon: RxCrop,
//     title:"Psicología del desarrollo, una perspectiva clínica",
//     content: "Autor: Sarai Chimal",
//     backgroundImage:book4,
//   },
//   {
//     icon: RxCrop,
//     title:"Introducción a la Programación",
//     content: "Autor: Micaela Sierra",
//     backgroundImage:book5,
//   },
//   {
//     icon: RxCrop,
//     title:"Metrología y sus aplicaciones",
//     content: "Autor: Adolfo Escamilla",
//     backgroundImage:book6,
//   },
// ]


const LibrosDestacados = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 my-8">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://iberoperu.vtexassets.com/arquivos/ids/194876-800-1156?v=637968968334300000&width=800&height=1156&aspect=true" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h3 className="font-dmserif text-xl font-bold text-white mb-4">Información Bibliográfica</h3>
          <p className="mb-3 text-2X1 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <strong>Autor:</strong> MIHAELA JUGANARU MATHIEU <br/>
            <strong>Editorial:</strong> GRUPO EDITORIAL PATRIA <br/>
            <strong>Páginas:</strong> 340<br/>
            <strong>Idioma:</strong> Español <br />
            <strong>Año:</strong> 2012 <br />
          </p>
          {/* <button className="rounded-full bg-[#98075b] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Saber Más</button> */}
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://librerialerner.vteximg.com.br/arquivos/ids/402100-1000-1000/442_9789708172332_LARO.jpg?v=637386783378170000" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h3 className="font-dmserif text-xl font-bold text-white mb-4">Información Bibliográfica</h3>
          <p className="mb-3 text-2X1 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <strong>Autor:</strong> ADOLFO ESCAMILLA ESQUIVEL <br/>
            <strong>Editorial:</strong> GRUPO EDITORIAL PATRIA <br/>
            <strong>Páginas:</strong> 153<br/>
            <strong>Idioma:</strong> Español <br />
            <strong>Año:</strong> 2015<br />
          </p>
          {/* <button className="rounded-full bg-[#98075b] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Saber Más</button> */}
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images-na.ssl-images-amazon.com/images/P/6074483051.01.LZZZZZZZ.jpg" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h3 className="font-dmserif text-xl font-bold text-white mb-4">Información Bibliográfica</h3>
          <p className="mb-3 text-2X1 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <strong>Autor:</strong> Daljit S. Gill - Farhad B. Naini <br/>
            <strong>Editorial:</strong> El Manual Moderno <br/>
            <strong>Páginas:</strong> 389<br/>
            <strong>Idioma:</strong> Español <br />
            <strong>Año:</strong> 2017 <br />
          </p>
          {/* <button className="rounded-full bg-[#98075b] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Saber Más</button> */}
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://simehbucket.s3.amazonaws.com/images/c5611def629a5637b2cb90a3b1f251bb-large.jpg" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h3 className="font-dmserif text-xl font-bold text-white mb-4">Información Bibliográfica</h3>
          <p className="mb-3 text-2X1 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <strong>Autor:</strong> ALONSO MANCILLA HERRERA <br/>
            <strong>Editorial:</strong> UNIVERSIDAD DEL NORTE <br/>
            <strong>Páginas:</strong> 478<br/>
            <strong>Idioma:</strong> Español <br />
            <strong>Año:</strong> 2018 <br />
          </p>
          {/* <button className="rounded-full bg-[#98075b] py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Saber Más</button> */}
        </div>
      </div>
    </div>
  );
};
function BibliotecaLDPage() {
  return (
    <main className="h-full grid gap-2">
      <HeaderTitle direction="/servicios/Biblioteca" title="Libros Destacados" />
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex min-h-screen items-center justify-center">
          <LibrosDestacados/>
          {/* <BookCard></BookCard> */}
        </div>
      </div>
    </main>
  );
}

export default BibliotecaLDPage;