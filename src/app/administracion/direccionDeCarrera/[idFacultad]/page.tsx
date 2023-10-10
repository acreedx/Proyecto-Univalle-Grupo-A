import React from "react";
import Cardbutton from "@/app/components/card-button";
import HeaderTitle from "@/app/components/header-title";

interface Carrera {
  titulo: string;
  carreras: {
    id: number;
    titulo: string;
    breveDescripcion: string;
    imagen: string;
  }[];
}

interface idFacultad {
  idFacultad: number;
}

const carreras: Carrera[] = [
  {
    titulo: "FACULTAD DE CIENCIAS DE LA SALUD",
    carreras: [
      {
        id: 1,
        titulo: "Medicina",
        breveDescripcion:
          "La carrera de Medicina en la Universidad del Valle te brinda una formación completa en el ámbito de la salud, preparándote para convertirte en un médico altamente calificado. A lo largo de esta carrera, adquirirás los conocimientos y habilidades necesarios para diagnosticar, tratar y prevenir diversas enfermedades, contribuyendo al bienestar de la sociedad.",
        imagen:
          "https://www.estudiamas.com.mx/wp-content/uploads/2021/11/la-carrera-de-medicina-.png",
      },
      {
        id: 2,
        titulo: "Odontología",
        breveDescripcion:
          "En la Universidad del Valle, la carrera de Odontología te ofrece una sólida formación en el campo de la odontología. Aprenderás a cuidar la salud bucal de los pacientes, realizar procedimientos dentales y promover sonrisas saludables.",
        imagen:
          "https://blogs.unitec.mx/hubfs/Imported_Blog_Media/tips-para-descubrir-si-ser-odontologo-es-tu-vocacion-1-Dec-17-2022-09-06-50-7350-PM.jpg",
      },
      {
        id: 3,
        titulo: "Bioquímica y Farmacia",
        breveDescripcion:
          "En la Universidad del Valle, la carrera de Bioquímica y Farmacia te proporciona los conocimientos necesarios para comprender a fondo los procesos químicos y biológicos en la industria farmacéutica y la investigación biomédica.",
        imagen:
          "https://www.utpl.edu.ec/carreras/sites/default/files/img-bioquimica-estudiar.png",
      },
      {
        id: 4,
        titulo: "Lic. en Fisioterapia y Kinesiología",
        breveDescripcion:
          "La Licenciatura en Fisioterapia y Kinesiología en la Universidad del Valle te brinda las habilidades necesarias para rehabilitar pacientes, mejorar su movilidad y calidad de vida.",
        imagen:
          "https://blogs.unitec.mx/hubfs/287524/Imported_Blog_Media/importancia-de-la-fisioterapia-en-mexico-5-compressor-Dec-17-2022-09-08-01-4137-PM.jpg",
      },
      {
        id: 5,
        titulo: "Lic. en Enfermería Clínico-Quirúrgica",
        breveDescripcion:
          "La Licenciatura en Enfermería Clínico-Quirúrgica en la Universidad del Valle te prepara para brindar atención de enfermería especializada en entornos clínicos y quirúrgicos.",
        imagen:
          "https://www.nosequeestudiar.net/site/assets/files/1458945/enfermeria-quirurgica.jpg",
      },
      {
        id: 6,
        titulo: "Lic. en Nutrición y Dietética",
        breveDescripcion:
          "La Licenciatura en Nutrición y Dietética en la Universidad del Valle te proporciona las herramientas para promover una alimentación saludable y contribuir a la prevención de enfermedades a través de la nutrición.",
        imagen:
          "https://www.ipchile.cl/wp-content/uploads/2011/11/nutricion-y-dietetica-1.jpg",
      },
    ],
  },
  {
    titulo: "FACULTAD DE CIENCIAS EMPRESARIALES Y SOCIALES",
    carreras: [
      {
        id: 7,
        titulo: "Ing. Comercial",
        breveDescripcion:
          "La Ingeniería Comercial te prepara para gestionar empresas y negocios de manera efectiva, combinando habilidades técnicas y comerciales.",
        imagen: "https://udelosandes.edu.bo/img/pregrado/ingenieria-comercial.webp",
      },
      {
        id: 8,
        titulo: "Ing. en Comercio Internacional",
        breveDescripcion:
          "La Ingeniería en Comercio Internacional te forma para gestionar transacciones comerciales globales y promover el intercambio internacional de bienes y servicios.",
        imagen: "https://static.wixstatic.com/media/4bdfe0_d56d7904bae946888f6e21981bfed360~mv2.jpg/v1/fill/w_640,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4bdfe0_d56d7904bae946888f6e21981bfed360~mv2.jpg",
      },
      {
        id: 9,
        titulo: "Lic. en Derecho y Ciencias Jurídicas",
        breveDescripcion:
          "La Licenciatura en Derecho y Ciencias Jurídicas te prepara para comprender y aplicar el derecho en diferentes contextos legales.",
        imagen: "https://www.emagister.com/blog/wp-content/uploads/2021/05/GettyImages-104821087.jpg",
      },
      {
        id: 10,
        titulo: "Lic. en Comunicación y Medios Digitales",
        breveDescripcion:
          "La Licenciatura en Comunicación y Medios Digitales te capacita para crear y gestionar contenido en entornos digitales y de medios de comunicación.",
        imagen: "https://d5tnfl9agh5vb.cloudfront.net/uploads/2020/01/Comunicacion-Audivisual-UPN.jpg",
      },
      {
        id: 11,
        titulo: "Lic. en Administración de Empresas",
        breveDescripcion:
          "La Licenciatura en Administración de Empresas te prepara para liderar y gestionar organizaciones de manera efectiva.",
        imagen: "https://icontinental.edu.pe/wp-content/uploads/2017/06/6-razones-para-estudiar-administracion-de-empresas-portada.jpg",
      },
    ],
  },
  {
    titulo: "FACULTAD DE INFORMÁTICA Y ELECTRÓNICA",
    carreras: [
      {
        id: 12,
        titulo: "Ing. Biomédica",
        breveDescripcion:
          "La Ingeniería Biomédica en la Universidad del Valle combina la ingeniería y la biomedicina para desarrollar dispositivos y sistemas médicos innovadores que mejoran la atención médica y la calidad de vida de los pacientes.",
        imagen:
          "https://elbalcom.tja.ucb.edu.bo/wp-content/uploads/2022/09/Biomedica-QueEs-1-1.jpg",
      },
      {
        id: 13,
        titulo: "Ing. Electrónica",
        breveDescripcion:
          "La Ingeniería Electrónica en la Universidad del Valle te ofrece la oportunidad de explorar la electrónica avanzada y desarrollar sistemas electrónicos innovadores que impulsan la tecnología moderna.",
        imagen:
          "https://res.cloudinary.com/upcbinary/image/upload/q_auto:good/v1573493357/pregrado/imagenes/OG/carrera-ing-electronica.jpg",
      },
      {
        id: 14,
        titulo: "Ing. en Telecomunicaciones",
        breveDescripcion:
          "La Ingeniería en Telecomunicaciones en la Universidad del Valle te forma para diseñar y gestionar redes de comunicación avanzadas que conectan a personas y empresas en todo el mundo.",
        imagen:
          "https://www.emagister.com/blog/wp-content/uploads/2018/06/telecomunicaciones.jpg",
      },
      {
        id: 15,
        titulo: "Ing. de Sistemas Informáticos",
        breveDescripcion:
          "La Ingeniería de Sistemas Informáticos en la Universidad del Valle te capacita para diseñar, desarrollar y gestionar sistemas de software y tecnología de la información que impulsan la innovación y la eficiencia en diversas industrias.",
        imagen:
          "https://cdn.euroinnova.edu.es/img/subidasEditor/sistemas-1610150990.webp",
      },
    ],
  },
  {
    titulo: "FACULTAD DE ARQUITECTURA, URBANISMO Y DISEÑO",
    carreras: [
      {
        id: 16,
        titulo: "Lic. en Arquitectura y Urbanismo",
        breveDescripcion:
          "La Licenciatura en Arquitectura y Urbanismo en la Universidad del Valle te forma para diseñar entornos urbanos sostenibles y espacios arquitectónicos innovadores que mejoren la calidad de vida de las personas.",
        imagen:
          "https://usil.edu.pe/sites/default/files/2022-02/150222-arquitectura-urbanismo-territorio-campo-laboral.jpg",
      },
      {
        id: 17,
        titulo: "Lic. en Diseño de Interiores y Paisajismo",
        breveDescripcion:
          "La Licenciatura en Diseño de Interiores y Paisajismo en la Universidad del Valle te capacita para transformar espacios interiores y exteriores en ambientes funcionales y estéticos que reflejen la visión del cliente y respeten el entorno natural.",
        imagen:
          "https://www.aauniv.com/s/blog/wp-content/uploads/2022/01/diseno-de-interiores-donde-estudiar-online.jpg",
      },
      {
        id: 18,
        titulo: "Lic. en Diseño Gráfico y Comunicación Visual",
        breveDescripcion:
          "La Licenciatura en Diseño Gráfico y Comunicación Visual en la Universidad del Valle te forma para comunicar mensajes efectivos a través del diseño creativo, la narrativa visual y las tecnologías digitales.",
        imagen:
          "https://unicit.edu.ni/wp-content/uploads/2017/09/disenografico.jpg",
      },
    ],
  },
  {
    titulo: "FACULTAD DE GASTRONOMÍA Y TURISMO",
    carreras: [
      {
        id: 19,
        titulo: "Lic. en Gastronomía",
        breveDescripcion:
          "La Licenciatura en Gastronomía en la Universidad del Valle te ofrece una formación culinaria de clase mundial, donde aprenderás las artes culinarias, la gestión de restaurantes y la creatividad gastronómica.",
        imagen:
          "https://blogs.unitec.mx/hubfs/Imported_Blog_Media/7-razones-para-estudiar-gastronomia-en-la-unitec-1-Dec-17-2022-07-43-33-2946-PM.jpg",
      },
      {
        id: 20,
        titulo: "Lic. en Turismo y Hotelería",
        breveDescripcion:
          "La Licenciatura en Turismo y Hotelería en la Universidad del Valle te forma para gestionar y promover destinos turísticos, servicios de alojamiento y experiencias memorables para los viajeros.",
        imagen:
          "https://www.universidadesonline.com.bo/img/article/carreras-relacionadas-al-turismo",
      },
    ],
  },
  {
    titulo: "FACULTAD DE TECNOLOGÍA",
    carreras: [
      {
        id: 21,
        titulo: "Ing. de Petróleo, Gas y Energías",
        breveDescripcion:
          "La Ingeniería de Petróleo, Gas y Energías se enfoca en la exploración, extracción y procesamiento de recursos energéticos, incluyendo petróleo y gas.",
        imagen: "URL de la imagen de Ing. de Petróleo, Gas y Energías",
      },
      {
        id: 22,
        titulo: "Ing. en Industrias Alimentarias",
        breveDescripcion:
          "La Ingeniería en Industrias Alimentarias se enfoca en la producción y procesamiento de alimentos, garantizando su calidad y seguridad.",
        imagen: "URL de la imagen de Ing. en Industrias Alimentarias",
      },
      {
        id: 23,
        titulo: "Ing. Mecánica",
        breveDescripcion:
          "La Ingeniería Mecánica se enfoca en el diseño y mantenimiento de sistemas mecánicos, máquinas y dispositivos.",
        imagen: "URL de la imagen de Ing. Mecánica",
      },
      {
        id: 24,
        titulo: "Ing. Eléctrica",
        breveDescripcion:
          "La Ingeniería Eléctrica se enfoca en el diseño, análisis y gestión de sistemas eléctricos y electrónicos.",
        imagen: "URL de la imagen de Ing. Eléctrica",
      },
      {
        id: 25,
        titulo: "Ing. en Sistemas de Información",
        breveDescripcion:
          "La Ingeniería en Sistemas de Información se enfoca en el diseño y desarrollo de sistemas informáticos y soluciones tecnológicas.",
        imagen: "URL de la imagen de Ing. en Sistemas de Información",
      },
    ],
  },
];

function Carreras({ params }: { params: { idFacultad: number } }) {
  const carrera: Carrera = carreras[params.idFacultad - 1];
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />
      <HeaderTitle direction="/administracion/direccionDeCarrera" title={carrera.titulo} />

      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 ">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {carrera.carreras.map((carreraItem, index) => (
              <Cardbutton
                imageUrl={carreraItem.imagen}
                title={carreraItem.titulo}
                routeUrl={`/administracion/direccionDeCarrera/${carrera.titulo}/${carreraItem.id}`}
                description={carreraItem.breveDescripcion}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Carreras;
