import React from "react";

interface Carrera {
  titulo: string;
  descripcion: string;
  imagen: string;
}

interface Id {
  id: number;
}

const carreras: Carrera[] = [
  {
    titulo: "Medicina",
    descripcion:
      "La carrera de Medicina en la Universidad del Valle es una experiencia académica y profesional enriquecedora que te preparará para convertirte en un médico comprometido con la salud y el bienestar de la comunidad. Durante tu formación, estudiarás a fondo las ciencias médicas, aprenderás a realizar diagnósticos precisos, diseñar planes de tratamiento efectivos y brindar atención médica de calidad. Nuestro programa académico está respaldado por una infraestructura de vanguardia y profesores altamente capacitados. Además, tendrás la oportunidad de realizar prácticas clínicas y participar en investigaciones médicas innovadoras. Al graduarte, estarás listo para enfrentar los desafíos de la medicina moderna y contribuir a mejorar la salud de las personas en tu comunidad y más allá.",
    imagen:
      "https://www.estudiamas.com.mx/wp-content/uploads/2021/11/la-carrera-de-medicina-.png",
  },
  {
    titulo: "Odontología",
    descripcion:
      "La carrera de Odontología en la Universidad del Valle es una oportunidad para convertirte en un profesional de la salud bucal altamente capacitado. Durante tus estudios, adquirirás conocimientos avanzados en anatomía oral, diagnóstico y tratamiento de enfermedades dentales, cirugía dental y rehabilitación oral. Nuestro enfoque incluye tanto la teoría como la práctica, con modernos laboratorios y clínicas dentales que te permitirán aplicar tus conocimientos en situaciones reales. Además, aprenderás a trabajar en equipo y a comunicarte efectivamente con los pacientes. Al graduarte, estarás preparado para brindar atención dental de calidad y contribuir a la salud bucal de la comunidad.",
    imagen:
      "https://blogs.unitec.mx/hubfs/Imported_Blog_Media/tips-para-descubrir-si-ser-odontologo-es-tu-vocacion-1-Dec-17-2022-09-06-50-7350-PM.jpg",
  },
  {
    titulo: "Bioquímica y Farmacia",
    descripcion:
      "La carrera de Bioquímica y Farmacia en la Universidad del Valle es una elección sólida si te apasiona la química, la biología y su aplicación en la industria farmacéutica y la investigación biomédica. A lo largo de tus estudios, explorarás las bases moleculares de la vida, aprenderás a diseñar y desarrollar medicamentos, analizarás muestras biológicas y participarás en investigaciones innovadoras. Nuestro programa académico está respaldado por laboratorios modernos y profesores expertos en el campo. Al graduarte, estarás preparado para contribuir al descubrimiento de nuevos fármacos, mejorar la calidad de los medicamentos existentes y trabajar en la vanguardia de la ciencia biomédica.",
    imagen:
      "https://www.utpl.edu.ec/carreras/sites/default/files/img-bioquimica-estudiar.png",
  },
  // Carreras anteriores...
  {
    titulo: "Lic. en Fisioterapia y Kinesiología",
    descripcion:
      "La Licenciatura en Fisioterapia y Kinesiología en la Universidad del Valle es una carrera centrada en la salud y el bienestar. Durante tus estudios, aprenderás a evaluar las necesidades de rehabilitación de los pacientes, diseñar planes de tratamiento personalizados y aplicar técnicas de fisioterapia y kinesiología. Trabajarás en estrecha colaboración con pacientes de diversas edades y condiciones médicas, ayudándolos a recuperar la movilidad y la funcionalidad. Nuestro programa académico integra la teoría con la práctica, y contarás con instalaciones modernas y profesores experimentados. Al graduarte, estarás preparado para desempeñarte como fisioterapeuta y kinesiólogo en entornos de atención médica y deportiva, contribuyendo al bienestar de tus pacientes.",
    imagen:
      "https://blogs.unitec.mx/hubfs/287524/Imported_Blog_Media/importancia-de-la-fisioterapia-en-mexico-5-compressor-Dec-17-2022-09-08-01-4137-PM.jpg",
  },
  {
    titulo: "Lic. en Enfermería Clínico-Quirúrgica",
    descripcion:
      "La Licenciatura en Enfermería Clínico-Quirúrgica en la Universidad del Valle es una carrera que te capacita para desempeñarte como enfermero en entornos clínicos y quirúrgicos. A lo largo de tus estudios, adquirirás habilidades clínicas avanzadas, aprenderás a trabajar en equipos de atención médica y te especializarás en el cuidado de pacientes que requieren intervenciones quirúrgicas. Nuestro programa académico incluye prácticas clínicas en hospitales y centros de salud, lo que te brindará una experiencia práctica valiosa. Además, aprenderás a tomar decisiones críticas en situaciones de atención médica y a brindar apoyo emocional a los pacientes y sus familias. Al graduarte, estarás preparado para desempeñar un papel fundamental en la atención de pacientes en situaciones clínicas y quirúrgicas.",
    imagen:
      "https://www.nosequeestudiar.net/site/assets/files/1458945/enfermeria-quirurgica.jpg",
  },
  {
    titulo: "Lic. en Nutrición y Dietética",
    descripcion:
      "La Licenciatura en Nutrición y Dietética en la Universidad del Valle es una carrera que te permite explorar el mundo de la alimentación y la nutrición. Durante tus estudios, aprenderás a evaluar las necesidades nutricionales de las personas, diseñar planes de alimentación personalizados y promover hábitos alimenticios saludables. Nuestro programa académico se basa en la ciencia de la nutrición y la dietética, y te proporcionará una comprensión profunda de cómo la alimentación afecta la salud. Además, tendrás la oportunidad de realizar prácticas en entornos de atención médica y comunitaria. Al graduarte, estarás listo para trabajar como nutricionista y contribuir a mejorar la calidad de vida de las personas a través de una alimentación adecuada.",
    imagen:
      "https://www.ipchile.cl/wp-content/uploads/2011/11/nutricion-y-dietetica-1.jpg",
  },
  {
    titulo: "Ing. Comercial",
    descripcion:
      "La Ingeniería Comercial es una carrera que te brinda las herramientas necesarias para gestionar empresas y negocios de manera efectiva. A lo largo de tus estudios, adquirirás conocimientos en áreas como administración, marketing, finanzas y gestión empresarial. Esta carrera combina habilidades técnicas y comerciales, lo que te permite tomar decisiones estratégicas que impulsen el crecimiento y el éxito de las organizaciones. Al graduarte, estarás preparado para enfrentar los desafíos del mundo empresarial y contribuir al desarrollo económico.",
    imagen: "https://udelosandes.edu.bo/img/pregrado/ingenieria-comercial.webp",
  },
  {
    titulo: "Ing. en Comercio Internacional",
    descripcion:
      "La Ingeniería en Comercio Internacional es una carrera orientada a la gestión de transacciones comerciales globales. Durante tus estudios, aprenderás a manejar aspectos relacionados con el comercio internacional, como importaciones, exportaciones, aduanas, logística y estrategias de mercado global. Esta carrera te prepara para trabajar en un entorno internacional y promover el intercambio de bienes y servicios entre países. Al graduarte, estarás listo para contribuir al comercio global y la expansión de negocios internacionales.",
    imagen:
      "https://static.wixstatic.com/media/4bdfe0_d56d7904bae946888f6e21981bfed360~mv2.jpg/v1/fill/w_640,h_354,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4bdfe0_d56d7904bae946888f6e21981bfed360~mv2.jpg",
  },
  {
    titulo: "Lic. en Derecho y Ciencias Jurídicas",
    descripcion:
      "La Licenciatura en Derecho y Ciencias Jurídicas es una carrera que te proporciona los conocimientos necesarios para comprender y aplicar el derecho en diversos contextos legales. A lo largo de tus estudios, explorarás áreas como derecho civil, penal, laboral y más. Esta carrera te prepara para trabajar como abogado, asesor legal o en el ámbito jurídico y de la justicia. Al graduarte, estarás listo para enfrentar desafíos legales y defender los derechos de las personas.",
    imagen:
      "https://www.emagister.com/blog/wp-content/uploads/2021/05/GettyImages-104821087.jpg",
  },
  {
    titulo: "Lic. en Comunicación y Medios Digitales",
    descripcion:
      "La Licenciatura en Comunicación y Medios Digitales es una carrera centrada en la creación y gestión de contenido en entornos digitales y medios de comunicación. A lo largo de tus estudios, desarrollarás habilidades en redacción, producción multimedia, diseño gráfico y estrategias de comunicación en línea. Esta carrera te prepara para trabajar en medios digitales, agencias de publicidad, redes sociales y otros campos relacionados. Al graduarte, estarás listo para navegar en el mundo de la comunicación digital.",
    imagen:
      "https://d5tnfl9agh5vb.cloudfront.net/uploads/2020/01/Comunicacion-Audivisual-UPN.jpg",
  },
  {
    titulo: "Lic. en Administración de Empresas",
    descripcion:
      "La Licenciatura en Administración de Empresas es una carrera que te proporciona las habilidades necesarias para liderar y gestionar organizaciones de manera efectiva. Durante tus estudios, aprenderás sobre gestión de recursos humanos, finanzas, marketing y estrategia empresarial. Esta carrera te prepara para asumir roles de liderazgo en empresas y emprendimientos. Al graduarte, estarás listo para tomar decisiones clave en el mundo empresarial y contribuir al éxito de las organizaciones.",
    imagen:
      "https://icontinental.edu.pe/wp-content/uploads/2017/06/6-razones-para-estudiar-administracion-de-empresas-portada.jpg",
  },
  {
    titulo: "Ing. Biomédica",
    descripcion:
      "La Ingeniería Biomédica en la Universidad del Valle es una disciplina interdisciplinaria que utiliza la ingeniería para abordar desafíos en el campo de la salud. Durante tus estudios, aprenderás a diseñar y desarrollar dispositivos médicos, sistemas de diagnóstico y equipos de rehabilitación que contribuyen a la atención médica de vanguardia. Nuestro programa académico se basa en una sólida base de ciencias de la ingeniería y biomedicina, y trabajarás en proyectos prácticos que tienen un impacto real en la salud de las personas. Al graduarte, estarás preparado para trabajar en la industria de dispositivos médicos, la investigación biomédica o incluso emprender tus propios proyectos innovadores en el campo de la ingeniería biomédica.",
    imagen:
      "https://elbalcom.tja.ucb.edu.bo/wp-content/uploads/2022/09/Biomedica-QueEs-1-1.jpg",
  },
  {
    titulo: "Ing. Electrónica",
    descripcion:
      "La Ingeniería Electrónica en la Universidad del Valle te ofrece la oportunidad de explorar la electrónica avanzada y desarrollar sistemas electrónicos innovadores que impulsan la tecnología moderna. Durante tus estudios, adquirirás habilidades en diseño de circuitos, programación de microcontroladores y desarrollo de sistemas electrónicos avanzados. Nuestro programa académico está respaldado por laboratorios de vanguardia y profesores con experiencia en el campo. Tendrás la oportunidad de trabajar en proyectos de investigación y desarrollo tecnológico que abarcan desde la comunicación inalámbrica hasta la robótica. Al graduarte, estarás preparado para una carrera en la industria electrónica, las telecomunicaciones, la automatización y más, contribuyendo a impulsar la tecnología de vanguardia.",
    imagen:
      "https://res.cloudinary.com/upcbinary/image/upload/q_auto:good/v1573493357/pregrado/imagenes/OG/carrera-ing-electronica.jpg",
  },
  {
    titulo: "Ing. en Telecomunicaciones",
    descripcion:
      "La Ingeniería en Telecomunicaciones en la Universidad del Valle te forma para diseñar, implementar y gestionar redes de comunicación que abarcan desde las telecomunicaciones móviles hasta las redes de fibra óptica. Durante tus estudios, aprenderás a diseñar, implementar y gestionar redes de comunicación que abarcan desde las telecomunicaciones móviles hasta las redes de fibra óptica. Nuestro programa académico se basa en las últimas tecnologías y tendencias del sector, y trabajarás en proyectos que te permitirán aplicar tus conocimientos en situaciones reales. Además, adquirirás habilidades en seguridad cibernética y gestión de redes. Al graduarte, estarás preparado para una carrera en la industria de las telecomunicaciones, donde podrás contribuir a la conectividad global y la comunicación eficiente.",
    imagen:
      "https://www.emagister.com/blog/wp-content/uploads/2018/06/telecomunicaciones.jpg",
  },
  {
    titulo: "Ing. de Sistemas Informáticos",
    descripcion:
      "La Ingeniería de Sistemas Informáticos en la Universidad del Valle te capacita para diseñar, desarrollar y gestionar sistemas de software y tecnología de la información que impulsan la innovación y la eficiencia en diversas industrias. Durante tus estudios, adquirirás conocimientos en programación, desarrollo de software, seguridad cibernética, gestión de bases de datos y más. Nuestro programa académico se enfoca en proyectos prácticos y te brinda la oportunidad de trabajar en aplicaciones y sistemas reales. Además, aprenderás a abordar desafíos tecnológicos y a desarrollar soluciones innovadoras. Al graduarte, estarás listo para una carrera en la industria de la tecnología de la información, donde podrás diseñar y mantener sistemas que impulsen la eficiencia y la innovación en diversas empresas y organizaciones.",
    imagen:
      "https://cdn.euroinnova.edu.es/img/subidasEditor/sistemas-1610150990.webp",
  },
  {
    titulo: "Lic. en Arquitectura y Urbanismo",
    descripcion:
      "La Licenciatura en Arquitectura y Urbanismo en la Universidad del Valle es una carrera que te invita a explorar la creatividad y el diseño de entornos urbanos y arquitectónicos. Durante tus estudios, aprenderás a combinar conceptos arquitectónicos, diseño urbano y sostenibilidad para crear espacios que sean funcionales y estéticamente atractivos. Nuestro programa académico fomenta la experimentación y la innovación en el diseño, y trabajarás en proyectos que aborden desafíos urbanos reales. Además, comprenderás la importancia de la planificación urbana sostenible y la conservación del patrimonio arquitectónico. Al graduarte, estarás preparado para una carrera en la arquitectura y el diseño urbano, donde podrás contribuir a la creación de espacios que mejoren la calidad de vida de las comunidades.",
    imagen:
      "https://usil.edu.pe/sites/default/files/2022-02/150222-arquitectura-urbanismo-territorio-campo-laboral.jpg",
  },
  {
    titulo: "Lic. en Diseño de Interiores y Paisajismo",
    descripcion:
      "La Licenciatura en Diseño de Interiores y Paisajismo en la Universidad del Valle es una carrera que te permite explorar tu creatividad y talento artístico en el diseño de espacios interiores y exteriores. Durante tus estudios, aprenderás a planificar y diseñar interiores que satisfagan las necesidades de los clientes, teniendo en cuenta aspectos estéticos, funcionales y ambientales. También te sumergirás en el diseño de paisajes, trabajando con plantas, elementos hardscape y consideraciones de sostenibilidad. Nuestro programa académico fomenta la experimentación y la innovación en el diseño, y contarás con instalaciones y recursos para desarrollar tus proyectos de diseño. Al graduarte, estarás preparado para una carrera en diseño de interiores, diseño de paisajes o consultoría de diseño, donde podrás dar vida a ambientes que reflejen la visión y la personalidad de tus clientes.",
    imagen:
      "https://www.aauniv.com/s/blog/wp-content/uploads/2022/01/diseno-de-interiores-donde-estudiar-online.jpg",
  },
  {
    titulo: "Lic. en Diseño Gráfico y Comunicación Visual",
    descripcion:
      "La Licenciatura en Diseño Gráfico y Comunicación Visual en la Universidad del Valle es una carrera que te sumerge en el mundo del diseño creativo y la comunicación visual. Durante tus estudios, adquirirás habilidades en diseño gráfico, ilustración, fotografía, animación y diseño web, todo ello respaldado por conceptos sólidos de comunicación visual. Nuestro programa académico te desafiará a desarrollar soluciones de diseño efectivas y a comunicar mensajes impactantes a través del arte y la tecnología. Además, tendrás la oportunidad de trabajar en proyectos prácticos que te ayudarán a desarrollar un portafolio sólido. Al graduarte, estarás listo para una carrera en diseño gráfico, publicidad, medios digitales, diseño editorial y más, donde podrás dar vida a la creatividad y la comunicación visual en diversas industrias y medios.",
    imagen:
      "https://unicit.edu.ni/wp-content/uploads/2017/09/disenografico.jpg",
  },
  {
    titulo: "Lic. en Gastronomía",
    descripcion:
      "La Licenciatura en Gastronomía en la Universidad del Valle te ofrece una formación culinaria de clase mundial, donde aprenderás las artes culinarias, la gestión de restaurantes y la creatividad gastronómica. Durante tus estudios, adquirirás habilidades culinarias avanzadas, aprenderás a crear platos gourmet, gestionar restaurantes y comprender los aspectos culturales y creativos de la gastronomía. Nuestro programa académico te brinda la oportunidad de trabajar en cocinas de alta calidad y explorar ingredientes locales e internacionales. También aprenderás sobre la gestión de alimentos y bebidas, la planificación de menús y la sostenibilidad en la industria alimentaria. Al graduarte, estarás preparado para una carrera en la gastronomía, la restauración y la gestión de alimentos y bebidas, donde podrás deleitar a las personas con tus habilidades culinarias y tu pasión por la comida.",
    imagen:
      "https://blogs.unitec.mx/hubfs/Imported_Blog_Media/7-razones-para-estudiar-gastronomia-en-la-unitec-1-Dec-17-2022-07-43-33-2946-PM.jpg",
  },
  {
    titulo: "Lic. en Turismo y Hotelería",
    descripcion:
      "La Licenciatura en Turismo y Hotelería en la Universidad del Valle te forma para gestionar y promover destinos turísticos, servicios de alojamiento y experiencias memorables para los viajeros. Durante tus estudios, aprenderás a gestionar y promover destinos turísticos, servicios de alojamiento y experiencias únicas para los viajeros. Nuestro programa académico se basa en la teoría y la práctica, y te brinda la oportunidad de realizar pasantías en hoteles, agencias de viajes y otros negocios relacionados con el turismo. También adquirirás habilidades en gestión hotelera, planificación de eventos y marketing turístico. Al graduarte, estarás preparado para una carrera emocionante en la industria del turismo y la hotelería, donde podrás contribuir a la satisfacción de los viajeros y promover destinos turísticos de manera efectiva.",
    imagen:
      "https://www.universidadesonline.com.bo/img/article/carreras-relacionadas-al-turismo",
  },
];

function DetalleCarrera({ params }: { params: { id: number } }) {
  const carrera: Carrera = carreras[params.id - 1];
  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={carrera.imagen}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-white bg-opacity-75 rounded-lg">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                UNIVALLE
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {carrera.titulo}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">{carrera.descripcion}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetalleCarrera;
