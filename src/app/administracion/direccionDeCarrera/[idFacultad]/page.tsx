import React from "react";
import HeaderTitle from "@/app/components/header-title";
import Link from "next/link";
import Image from "next/image";
import lg from "@/app/administracion/direccionDeCarrera/img/edu.png";

interface Carrera {
  titulo: string;
  carreras: {
    id: number;
    titulo: string;
    breveDescripcion: string;
    ttlOtorgado: string;
    duracion: number;
    planDeEstudios: string;
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
          "El Médico Cirujano de la Universidad del Valle es un profesional con destrezas y habilidades en las áreas de ciencias básicas, médico-quirúrgicas y medicina social, capaz de promover la salud, realizar prevención, diagnóstico, tratamiento y rehabilitación de la salud en el individuo, la familia y la comunidad. Es formado con valores éticos, principios humanísticos, sociales y genera estilos de vida saludables.",
        ttlOtorgado: "Médico Cirujano",
        duracion: 6,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-MED-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facmedicina00.jpg",
      },
      {
        id: 2,
        titulo: "Odontología",
        breveDescripcion:
          "El Odontólogo de la Universidad del Valle es un profesional que conoce, tiene destrezas y habilidades en las áreas de ciencias básicas, preclínica y clínica. Soluciona los problemas de salud dental en el individuo, la familia y la comunidad con una formación científica que promueve, previene, diagnóstica, realiza tratamiento y rehabilita el sistema estomatognático con valores éticos, principios humanísticos, sociales y comprometido con el medio ambiente.",
        ttlOtorgado: "Licenciatura en Odontología",
        duracion: 5,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-ODO-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facODO01.jpg",
      },
      {
        id: 3,
        titulo: "Bioquímica y Farmacia",
        breveDescripcion:
          "El/la profesional de la carrera de Bioquímica y Farmacia de la Universidad del Valle está capacitado(a) en los diferentes aspectos técnicos, científicos y sociales que permiten estudiar, realizar, analizar y controlar estudios bioquímicos, exámenes laboratoriales de rutina y especiales; puede fabricar, evaluar suministrar y controlar la calidad de medicamentos, cosméticos, alimentos naturales y envasados en pro de cubrir las necesidades humanas, contribuyendo al bienestar social. Realiza control de la calidad microbiológica en aguas, bebidas y alimentos en general, detectando toxicidad en muestras biológicas y productos de consumo alimentario.",
        ttlOtorgado: "Licenciatura en Bioquímica y Farmacia",
        duracion: 5,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-BYF-2017-ACTUALIZADO-2022-1.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facBYF01.jpg",
      },
      {
        id: 4,
        titulo: "Lic. en Fisioterapia y Kinesiología",
        breveDescripcion:
          "El profesional de Fisioterapia y Kinesiología de la Universidad del Valle está capacitado para prevenir, diagnosticar, evaluar, rehabilitar y realizar tratamientos osteoarticulares, musculares, cardiovasculares, respiratorios, neurológicos, geriátricos, deportivos y estéticos, mediante la utilización de medios físicos, naturales y mecánicos para mejorar la calidad de vida y permitir la reincorporación laboral y social de la persona.",
        ttlOtorgado: "Licenciatura en Fisioterapia y Kinesiología",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-LFK-2017-ACTUALIZADO-2022-R.M.-0117-2022-1.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facLFK01.jpg",
      },
      {
        id: 5,
        titulo: "Lic. en Enfermería Clínico-Quirúrgica",
        breveDescripcion:
          "El profesional de la carrera de Licenciatura en Enfermería Clínico-Quirúrgica de la Universidad del Valle tiene una formación social, científica, humanística, tecnológica y ética para el desempeño de su rol desde una perspectiva intercultural. Responde a las necesidades de la población como integrante de equipos de salud, le competen actividades de promoción, prevención, atención y rehabilitación del individuo, familia y comunidad en los diferentes niveles de atención de salud.",
        ttlOtorgado: "Licenciatura en Enfermería Clínico Quirúrgica",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-ECQ-2017-ACTUALIZADO-2022-1.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facECQ01.jpg",
      },
      {
        id: 6,
        titulo: "Lic. en Nutrición y Dietética",
        breveDescripcion:
          "El Licenciado en Nutrición y Dietética es un profesional que conoce y tiene destrezas y habilidades en las áreas de: nutrición clínica, servicios de alimentación, industria alimentaria, en el campo de ciencias de la salud a nivel nacional como internacional; capaz de adaptarse a los nuevos requerimientos de la profesión. También, podrá habilitarse como asesor, consultor, asumir cargos ejecutivos, docencia e investigación.",
        ttlOtorgado: "Licenciatura en Nutrición y Dietética",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/08/PLAN-DE-ESTUDIOS-NUTRICION-Y-DIETETICA-1.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/11/nyd_foto01-745x1024.jpg",
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
          "El Ingeniero Comercial de la Universidad del Valle adquiere una formación de negocios en Marketing, Ventas, Merchandising y Logística. Desde la creación de productos, diseño de planes de marketing y comercialización, investigación de mercados y lanzamiento de productos y servicios. Entre sus mayores competencias están: emprendimiento, creatividad e innovación, liderazgo, trabajo en equipo y toma de decisiones.",
        ttlOtorgado: "Licenciatura en Ingenieria Comercial",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-ICO-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facICO01.jpg",
      },
      {
        id: 8,
        titulo: "Ing. en Comercio Internacional",
        breveDescripcion:
          "El Ingeniero en Comercio Internacional de la Universidad del Valle está formado para diseñar, instrumentar, promover, ejecutar y evaluar sistemas, planes y estrategias de comercialización internacional de bienes y servicios, siendo capacitado en las áreas de Finanzas, Legal, Comercio y Marketing. Capaz de identificar oportunidades de negocio, ya sea propias o para terceros con una visión emprendedora, humanista, creativa, práctica, crítica, ética, de responsabilidad social, como también de cuidado y preservación del medio ambiente.",
        ttlOtorgado: "Licenciatura en Ingeniería en Comercio Internacional",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-ICT-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facICT01.jpg",
      },
      {
        id: 9,
        titulo: "Lic. en Derecho y Ciencias Jurídicas",
        breveDescripcion:
          "El profesional de la carrera de Derecho y Ciencias Jurídicas de la Universidad del Valle tiene la capacidad de reflexión y análisis crítico de la legislación nacional e internacional en el área constitucional, civil-corporativa, penal y social para la interpretación, argumentación y posterior solución jurídica de conflictos en la sociedad en el marco del respeto de los Derechos Humanos.",
        ttlOtorgado: "Licenciatura en Derecho y Ciencias Jurídicas",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-LDE-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facLDE01.jpg",
      },
      {
        id: 10,
        titulo: "Lic. en Comunicación y Medios Digitales",
        breveDescripcion:
          "El profesional de la carrera de Comunicación y Medios Digitales de la Universidad del Valle es creativo, capaz de planificar, gestionar y evaluar procesos de manera estratégica en todas las áreas de la comunicación. Creador de contenidos de alta calidad a través de herramientas digitales, dirigidas a la optimización de los procesos comunicacionales, para responder a las demandas y tendencias de la sociedad actual.",
        ttlOtorgado: "Licenciatura en Comunicación y Medios Digitales",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-LCMD-2017-ACTUALIZADO-R.M.-0117-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facLCMD01.jpg",
      },
      {
        id: 11,
        titulo: "Lic. en Administración de Empresas",
        breveDescripcion:
          "El Administrador de Empresas de la Universidad del Valle adquiere una formación empresarial estratégica en la Dirección de Empresas. Desde la Planificación, Organización, Coordinación, Dirección y Control de los Recursos Humanos, Financieros, Productivos, Tecnológicos y Marketing. Entre sus mayores competencias están el liderazgo, emprendimiento, pensamiento estratégico, trabajo en equipo y toma de decisiones.",
        ttlOtorgado: "Licenciatura en Administración de Empresas",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-LAE-2017-ACTUALIZADO-2022-1.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facLAE01.jpg",
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
          "El Ingeniero Biomédico de la Universidad del Valle es un profesional que cuenta con habilidades, competencias y destrezas en las áreas de instrumentación médica, biomecánica, biomateriales, informática médica, telemedicina, ingeniería clínica y gestión tecnológica hospitalaria para analizar, diseñar, planificar, implementar y gestionar las soluciones a necesidades relacionadas a la tecnología médica y el cuidado de la salud de las personas, basándose en las características del sistema de salud vigente, de acuerdo con la ética y el medio ambiente.",
        ttlOtorgado: "Licenciatura en Ingeniería Biomédica",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-IBI-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facICO01-1.jpg",
      },
      {
        id: 13,
        titulo: "Ing. Electrónica",
        breveDescripcion:
          "El profesional de la carrera de Ingeniería Electrónica de la Universidad del Valle tiene conocimientos, capacidades, destrezas y habilidades para elaborar soluciones tecnológicas de diseño, desarrollo, integración, actualización y administración de equipos y sistemas de control industrial, instrumentación electrónica, sistemas de monitoreo, seguridad y vigilancia en todo tipo de ambientes; telecomunicaciones y redes de computadoras, su propósito es generar bienestar social, comprometido con la ética y el medio ambiente.",
        ttlOtorgado: "Licenciatura en Ingenieria Electrónica",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-IEL-2017-ACTUALIZADO-2022-R.M.-0117-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facIEL01.jpg",
      },
      {
        id: 14,
        titulo: "Ing. en Telecomunicaciones",
        breveDescripcion:
          "El Ingeniero de Telecomunicaciones de la Universidad del Valle es un profesional que tiene competencias, destrezas y habilidades para planificar, proyectar y diseñar sistemas, redes y servicios de generación, transmisión, detección, manejo y gestión de la información; así como la elaboración, diseño y presentación de proyectos relacionados con la transmisión de la información.",
        ttlOtorgado: "Licenciatura en Ingenieria de Telecomunicaciones",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-IET-2017-ACTUALIZADO-2022-R.M.-0117-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facIET01.jpg",
      },
      {
        id: 15,
        titulo: "Ing. de Sistemas Informáticos",
        breveDescripcion:
          "El profesional de Ingeniería de Sistemas Informáticos de la Universidad del Valle desarrolla sistemas informáticos aplicando la Programación, Bases de Datos, Redes de Comunicación de Datos, Ingeniería de Software y Tecnologías Emergentes, para lograr una gestión automatizada de la información. El resultado de su trabajo genera bienestar social y aporta al desarrollo tecnológico del país.",
        ttlOtorgado: "Licenciatura en Ingenieria en Sistemas Informáticos",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/06/PLAN-DE-ESTUDIOS-ISI-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facISI01.jpg",
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
          "El profesional de Arquitectura y Urbanismo de la Universidad del Valle cuenta con conocimiento, habilidades y destrezas para diseñar, planificar, supervisar y dirigir la ejecución de proyectos arquitectónicos y urbanos; además ofrece los medios físicos de estructuración del hábitat, del ser humano y su entorno en beneficio del interés individual y colectivo, transformando y adecuando espacios físicos para las diversas actividades humanas, integrando variables técnicas, estéticas, económicas y ambientales.",
        ttlOtorgado: "Licenciatura en Arquitectura y Urbanismo",
        duracion: 5,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLAN-DE-ESTUDIOS-ARQ-2017-ACTUALIZADO-2022-R.M.-0117-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facARQ01.jpg",
      },
      {
        id: 17,
        titulo: "Lic. en Diseño de Interiores y Paisajismo",
        breveDescripcion:
          "El licenciado en Diseño de Interiores y Paisajismo de la Universidad del Valle es un profesional con formación técnica, ética y sentido humanista que diseña, planifica, supervisa y dirige la ejecución de proyectos de interiorismo y paisaje que ofrezcan los medios físicos de estructuración del hábitat del ser humano y su entorno en beneficio del interés individual y colectivo, transformando y adecuando espacios físicos (de interior y su vinculación con el paisaje) para las diversas actividades humanas, integrando variables técnicas, estéticas, económicas y ambientales para generar bienestar social e innovación.",
        ttlOtorgado: "Licenciatura en Diseño de Interiores y Paisajismo",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLAN-DE-ESTUDIOS-DYP-2017-ACTUALIZADO-2022-R.M.-0117-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facDYP01.jpg",
      },
      {
        id: 18,
        titulo: "Lic. en Diseño Gráfico y Comunicación Visual",
        breveDescripcion:
          "El Licenciado en Diseño Gráfico y Comunicación Visual es un profesional que desarrollará las habilidades y destrezas necesarias para crear proyectos de Diseño Gráfico, Comunicación y Creatividad Visual, Publicidad y Desarrollo de Marca e Imagen Corporativa aplicando herramientas digitales especializadas; tratamiento digital de imágenes, sonido y video; y técnicas específicas del área, así como también, en las competencias básicas para la generación de emprendimientos e innovación con ética y respeto al medioambiente.",
        ttlOtorgado: "Licenciatura en Diseño Gráfico y Comunicación Visual",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2022/12/PLAN-DE-ESTUDIOS-LDG-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/12/foto_facLDG01-754x1024.jpg",
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
          "El/la profesional en Gastronomía de la Universidad del Valle, es un profesional que responde a nuevas tendencias gastronómicas aplicando conocimientos teórico-científico-tecnológicos con creatividad e innovación en elaboraciones culinarias y preservación de alimentos. Un profesional analítico, crítico, investigativo, empapado de cultura gastronómica nacional e internacional, cuyas competencias le permiten adaptarse a la realidad sociocultural y económica.",
        ttlOtorgado: "Licenciatura en Gastronomía",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2022/12/PLAN-DE-ESTUDIOS-LGS-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facLGS01.jpg",
      },
      {
        id: 20,
        titulo: "Lic. en Turismo y Hotelería",
        breveDescripcion:
          "La Licenciatura en Turismo y Hotelería en la Universidad del Valle te forma para gestionar y promover destinos turísticos, servicios de alojamiento y experiencias memorables para los viajeros.",
        ttlOtorgado: "Licenciatura en Diseño de Interiores y Paisajismo",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2022/12/PLAN-DE-ESTUDIOS-LTH-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facLTH01.jpg",
      },
    ],
  },

  {
    titulo: "FACULTAD DE TECNOLOGÍA",
    carreras: [
      {
        id: 21,
        titulo: "ING. PETROQUÍMICA",
        breveDescripcion:
          "El Ingeniero Petroquímico de la Universidad del Valle aplica conocimientos, destrezas y habilidades en el estudio de la transformación física y química del gas natural y del petróleo con el fin de sintetizar productos petroquímicos de utilización mundial, aplica la ciencia y la tecnología para diseñar, planificar, modelar y optimizar los procesos productivos a través de la utilización efectiva de recursos materiales, energéticos y tecnológicos enmarcados en un ámbito de responsabilidad con el medio ambiente y la sociedad.",
        ttlOtorgado: "Licenciatura en Ingenieria Petroquímica",
        duracion: 5,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLAN-DE-ESTUDIOS-IPQ-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facIPQ01.jpg",
      },
      {
        id: 22,
        titulo: "ING. CIVIL",
        breveDescripcion:
          "El/la titulado(a) de la carrera de Ingeniería Civil de la Universidad del Valle es un profesional que tiene conocimientos, destrezas y habilidades para planificar, diseñar, desarrollar, construir, mantener, supervisar, fiscalizar y operar Obras Civiles, en las áreas de estructuras, obras hidráulicas, obras sanitarias y vías de comunicación, utilizando eficientemente los materiales de construcción, preservando el medio ambiente y aportando al desarrollo de los ámbitos urbano y rural para generar bienestar social",
        ttlOtorgado: "Licenciatura en Ingenieria Civil",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLAN-DE-ESTUDIOS-ICI-2017-ACTUALIZADO-2022-R.M.-0117-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facICI01.jpg",
      },
      {
        id: 23,
        titulo: "ING. DE PETRÓLEO, GAS Y ENERGÍAS",
        breveDescripcion:
          "El Ingeniero en Petróleo, Gas y Energías aplica conocimientos, destrezas y habilidades que involucran el estudio de la cadena productiva de los hidrocarburos. Se ocupa del aprovechamiento racional de los yacimientos de gas natural, petróleo y del uso de energías renovables. Aplica la ciencia y la tecnología para diseñar, planificar y operar procesos físicos y químicos en el rubro de los hidrocarburos.",
        ttlOtorgado: "Ingeniería de Petróleo, Gas y Energías",
        duracion: 5,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLAN-DE-ESTUDIOS-IPG-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facIPG01.jpg",
      },
      {
        id: 24,
        titulo: "ING. EN INDUSTRIAS ALIMENTARIAS",
        breveDescripcion:
          "El ingeniero(a) en Industrias Alimentarias de la Universidad del Valle es un profesional que diseña, planifica, organiza, gestiona y optimiza procesos productivos y administrativos, procesos de control de calidad, de aseguramiento de la inocuidad, de comercialización y distribución en empresas del rubro alimenticio. Posee los conocimientos, las destrezas y habilidades para encarar de manera eficiente, con responsabilidad social y ambiental el ejercicio de la profesión en el área de la empresa donde le toque trabajar, incluyendo emprendimientos propios.",
        ttlOtorgado: "Licenciatura en Ingeniería de Industrias Alimentarias",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLANES-DE-ESTUDIO-IIA-2017-ACTUALIZADO-2022-R.M.-0117-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facIIA01.jpg",
      },
      {
        id: 25,
        titulo: "ING. AERONÁUTICA",
        breveDescripcion:
          "El Ingeniero Aeronáutico de la Universidad del Valle está capacitado para analizar, diagnosticar, diseñar, mantener procesos tecnológicos y administrativos en el campo aeronáutico, buscando la calidad, eficiencia y servicio en aeronaves, sistemas de aeronavegación, sistemas de mantenimiento y administración de aeropuertos..",
        ttlOtorgado: "Licenciatura en Ingeniería Aeronáutica",
        duracion: 5,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLAN-DE-ESTUDIOS-IAE-2017-ACTUALIZADO-2022-R.M.-0117-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facIAE01.jpg",
      },
      {
        id: 26,
        titulo: "ING. ELECTROMECÁNICA",
        breveDescripcion:
          "El Ingeniero Electromecánico de la Universidad del Valle está capacitado para crear, diseñar, adecuar, mantener y mejorar maquinas, componentes y procesos en pequeñas, medianas y grandes industrias del sector productivo y de servicios. Formula, gestiona y evalúa proyectos de ingeniería relacionados con sistemas y dispositivos en el área electromecánica.",
        ttlOtorgado: "Licenciatura en Ingeniería Electromecánica",
        duracion: 5,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLAN-DE-ESTUDIOS-IEM-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facIEM01.jpg",
      },
      {
        id: 27,
        titulo: "ING. MECÁNICA Y DE AUTOMATIZACIÓN INDUSTRIAL (MECATRÓNICA)",
        breveDescripcion:
          "El Ingeniero Mecánico y de Automatización Industrial de la Universidad del Valle integra los últimos adelantos de la tecnología de fabricación y producción a pequeñas, medianas y grandes industrias, robotizando y automatizando su producción y operación.",
        ttlOtorgado:
          "Licenciatura en Ingeniería Mecánica y de Automatización Industrial (Mecatrónica)",
        duracion: 5,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLAN-DE-ESTUDIOS-IMT-2017-ACTUALIZADO-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facIMT01.jpg",
      },
      {
        id: 28,
        titulo: "ING. INDUSTRIAL Y DE SISTEMAS",
        breveDescripcion:
          "El ingeniero Industrial y de Sistemas de la Universidad del Valle es un profesional que gestiona, organiza e implementa proyectos industriales e informáticos con responsabilidad social. Es capaz de diseñar, dirigir, organizar, planificar y controlar sistemas productivos, comerciales o de servicios e incrementar la productividad en un entorno globalizado. Optimiza administrativa y productivamente empresas, mejorando la calidad y competitividad a través de aplicación de sistemas. Es capaz de crear sus propias oportunidades de negocio implementando sistemas integrados e inteligentes.",
        ttlOtorgado: "Licenciatura en Ingeniería Industrial y de Sistemas",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLAN-DE-ESTUDIOS-IIS-2017-ACTUALIZADO-R.M.-0117-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facIIS01.jpg",
      },
      {
        id: 29,
        titulo: "ING. INDUSTRIAL",
        breveDescripcion:
          "El/la Ingeniero(a) Industrial de la Universidad del Valle, es un(a) profesional con competencias, destrezas y habilidades que organiza, diseña, dirige, planifica y controla procesos dedicados a la generación de bienes, o de servicios. Gestiona, innova e implementa proyectos industriales, de Gestión de Calidad, Seguridad y Salud en el Trabajo, así como procesos de logística y distribución industrial. Optimiza económica, administrativa y productivamente las empresas, mejorando la calidad y competitividad, utilizando recursos tecnológicos actuales, de acuerdo con las necesidades del entorno, preservando el medio ambiente, con responsabilidad social, principios éticos y morales. Es capaz de crear sus propias oportunidades de negocio.",
        ttlOtorgado: "Licenciatura en Ingeniería Industrial",
        duracion: 4,
        planDeEstudios:
          "https://www.univalle.edu/wp-content/uploads/2023/07/PLAN-DE-ESTUDIOS-IIN-2017-ACTUALIZADO-2022-R.M.-0117-2022.pdf",
        imagen:
          "https://www.univalle.edu/wp-content/uploads/2022/07/foto_facIISS01.jpg",
      },
    ],
  },
];

function Carreras({ params }: { params: { idFacultad: number } }) {
  const carrera: Carrera = carreras[params.idFacultad - 1];
  return (
    <>
      <HeaderTitle
        direction="/administracion/direccionDeCarrera"
        title={carrera.titulo}
      />
      <div className="container mx-auto space-y-5">
        {carrera.carreras.map((carreraItem) => (
          <section
            key={carreraItem.id}
            className={`flex flex-wrap ${
              carreraItem.id % 2 === 0 ? "md:flex-row-reverse" : ""
            } mx-8 my-8  dark:bg-gray-900 bg-gray-600 bg-opacity-30 `}
          >
            <div className="w-full md:w-1/2 p-4 md:p-8 grid place-content-center">
              <div className="flex flex-col justify-center p-6">
                <span className=" text-lg uppercase text-white">Univalle</span>
                <h3 className="text-4xl md:text-6xl font-bold text-white">
                  {carreraItem.titulo}
                </h3>
                <p className="my-6 text-base text-gray-400">
                  {carreraItem.breveDescripcion}
                </p>
                <hr className="border-t-5 border-gray-600 my-2 opacity-40" />
                <div className="my-2">
                  <div className="flex items-center">
                    <span className="text-base text-white font-bold mr-2">
                      TITULO OTORGADO:
                    </span>
                    <span className="text-base text-white">
                      {carreraItem.ttlOtorgado}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-base text-white font-bold mr-2">
                      DURACIÓN:
                    </span>
                    <span className="text-base text-white">
                      {carreraItem.duracion} años
                    </span>
                  </div>
                </div>
                <hr className="border-t-5 border-gray-600 opacity-40" />

                <Link href={carreraItem.planDeEstudios}>
                  <div className=" border-2 border-slate-200 rounded-xl text-white font-bold hover:bg-slate-200 hover:text-slate-600 px-4 py-2 mt-8 inline-block shadow-2xl">
                    <div className="flex items-center justify-center">
                      <Image
                        src={lg}
                        alt="Logo"
                        width={60}
                        height={60}
                        className="mr-2"
                      />
                      <div>Plan de Estudios</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8 grid place-content-center">
              <img
                src={carreraItem.imagen}
                alt="Imagen de la facultad"
                width={450}
              />
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default Carreras;
