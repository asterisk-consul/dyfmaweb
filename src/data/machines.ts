export type MachineCategory =
  | "cosecha"
  | "poscosecha"
  | "pelado-partido"
  | "post-pelado";

export interface MachineMedia {
  type: "image" | "video";
  src: string;
}

export type MachineRole = "line" | "machine" | "module";

export interface MachineModule {
  name: string;
  note?: string;
  machineId?: string;
}

export interface Machine {
  id: string;
  name: string;
  nameEn: string;
  category: MachineCategory;
  description: string;
  descriptionEn: string;
  specs: {
    label: string;
    value: string;
  }[];
  subtitle?: string;
  features?: { title: string; text: string }[];
  detail?: string;
  media: MachineMedia[];
  pdf?: string;
  /** Rol de la ficha: línea compuesta, máquina suelta o módulo de una línea */
  role?: MachineRole;
  /** Módulos que componen una línea (solo role "line") */
  modules?: MachineModule[];
  /** Compat: first image / first video (used by listing cards) */
  image?: string;
  video?: string;
}

function firstImage(m: Machine): string | undefined {
  // If the machine has no photo, fall back to the first frame of its first video
  // (posters are generated as <video-src>.jpg next to each video).
  const img = m.media.find((item) => item.type === "image")?.src;
  if (img) return img;

  const video = m.media.find((item) => item.type === "video")?.src;
  return video ? `${video}.jpg` : undefined;
}

function firstVideo(m: Machine): string | undefined {
  return m.media.find((item) => item.type === "video")?.src;
}

const rawMachines: Machine[] = [
  {
    id: "remecedor-linga",
    name: "Remecedor de Linga",
    nameEn: "Sling Shaker",
    category: "cosecha",
    description:
      "Equipo de vibración de alta frecuencia para acople a tres puntos del tractor. El primer paso para mecanizar la finca: pasar de la cosecha manual al vareo mecánico reduce la mano de obra en un 70% durante los días de cosecha.",
    descriptionEn:
      "High-frequency vibration unit for three-point tractor coupling. The first step to mechanize the orchard, reducing manual labor by 70% during harvest.",
    subtitle: "Toma de fuerza · 15–30 árboles/h · tres puntos",
    features: [
      { title: "Mecanizá la finca", text: "Pasar de la cosecha manual al vareo mecánico reduce la mano de obra en un 70% durante los días de cosecha." },
      { title: "Montaje simple", text: "Se acopla a los tres puntos del tractor y toma movimiento de la toma de fuerza, sin motor propio." },
      { title: "Vareo preciso", text: "La linga de acero con excéntrico genera un vaivén que se transmite directo a la rama, sin dañar el árbol." },
    ],
    media: [
      { type: "image", src: "/dyfmaweb/maquinas/remecedor.webp" },
      { type: "image", src: "/dyfmaweb/maquinas/remecedor.jpeg" },
      { type: "video", src: "/dyfmaweb/maquinas/remecedor.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/remecedor-2.mp4" },
    ],
    pdf: "/dyfmaweb/maquinas/remecedor.pdf",
    specs: [
      { label: "Fruto", value: "Nuez Chandler · Pecán" },
      { label: "Rendimiento", value: "15–30 árboles/h" },
      { label: "Accionamiento", value: "Toma de fuerza del tractor" },
      { label: "Estructura", value: "Chapa plegada acero dulce 1010" },
      { label: "Dimensiones", value: "Alto 1000 × Ancho 1300 × Prof. 360 mm" },
      { label: "Montaje", value: "Acople a tres puntos del tractor" },
    ],
  },
  {
    id: "recolector",
    name: "Recolector Manual",
    nameEn: "Manual Nut Collector",
    category: "cosecha",
    description:
      "Recolector manual para frutos secos diseñado para la recolección eficiente de nueces, almendras y pecanes directamente desde el suelo, reduciendo tiempos de trabajo y esfuerzo físico del operario. Ideal para cosechas de pequeña y mediana escala.",
    descriptionEn:
      "Manual collector for efficient harvesting of walnuts, almonds and pecans directly from the ground, reducing work time and operator effort.",
    subtitle: "Cabezal de alambre flexible · mango ergonómico",
    features: [
      { title: "Recolección eficiente", text: "Levanta el fruto directamente del suelo, reduciendo tiempos y esfuerzo físico del operario." },
      { title: "Liberación fácil", text: "Sistema de apertura que permite volcar el fruto recolectado sin esfuerzo." },
      { title: "Uso intensivo", text: "Estructura metálica reforzada y mango de madera liviano, pensado para jornadas completas." },
    ],
    media: [
      {type: "image", src: "/dyfmaweb/maquinas/recolector de mano(principal).webp" },
      { type: "image", src: "/dyfmaweb/maquinas/recolector.jpeg" },
      { type: "image", src: "/dyfmaweb/maquinas/recolector-2.jpeg" },
      { type: "image", src: "/dyfmaweb/maquinas/recolector-3.jpeg" },
      { type: "video", src: "/dyfmaweb/maquinas/recolector.mp4" },
    ],
    specs: [
      { label: "Fruto", value: "Nuez · Pecán · Almendra" },
      { label: "Cabezal", value: "Alambre flexible de alta resistencia" },
      { label: "Sistema", value: "Apertura para liberar el fruto fácilmente" },
      { label: "Mango", value: "Madera, liviano y ergonómico" },
      { label: "Estructura", value: "Metálica reforzada para uso intensivo" },
    ],
  },
  {
    id: "partidora-pecan-avellana",
    name: "Partidora de Nuez Pecán y Avellanas",
    nameEn: "Pecan & Hazelnut Cracker",
    category: "pelado-partido",
    role: "module",
    description:
      "Máquina para el partido de nuez pecán y avellanas con separador de cáscara regulable. Construcción en chapa acero SAE 1010 con pintura epoxi horneada. Muy bajo mantenimiento y alta eficiencia.",
    descriptionEn:
      "Machine for cracking pecans and hazelnuts with adjustable shell separator. SAE 1010 steel construction with baked epoxy paint. Very low maintenance, high efficiency.",
    subtitle: "100–200 kg/h · monofásica o trifásica · bajo mantenimiento",
    features: [
      { title: "Separador regulable", text: "Separación de cáscara con regulación para obtener el mejor resultado según el fruto." },
      { title: "Alto rendimiento", text: "Hasta 85/90% de mariposa en cáscara fina, con capacidad de 100 a 200 kg por hora." },
      { title: "Bajo mantenimiento", text: "Construcción en chapa SAE 1010 con pintura epoxi horneada, pensada para durar." },
    ],
    media: [
      { type: "image", src: "/dyfmaweb/maquinas/partidora1.webp" },
      { type: "image", src: "/dyfmaweb/maquinas/partidora2.webp" },
      { type: "image", src: "/dyfmaweb/maquinas/partidora-3.jpeg" },
      { type: "image", src: "/dyfmaweb/maquinas/partidora-4.jpeg" },
    ],
    pdf: "/dyfmaweb/maquinas/partidora.pdf",
    specs: [
      { label: "Fruto", value: "Nuez Pecán · Avellana" },
      { label: "Capacidad", value: "100–200 kg/h" },
      {
        label: "Rendimiento mariposa",
        value: "Cáscara fina 85/90% · Semifina 75/80%",
      },
      { label: "Consumo", value: "4,5 Amp" },
      { label: "Tensión", value: "Monofásica o trifásica" },
      { label: "Construcción", value: "Chapa SAE 1010, pintura epoxi horneada" },
      { label: "Dimensiones", value: "Alto 2200 × Ancho 1800 × Prof. 1300 mm" },
    ],
  },
  {
    id: "limpiadora-campo",
    name: "Limpiadora a Campo",
    nameEn: "Field Cleaner",
    category: "poscosecha",
    description:
      "Unidad autónoma para limpieza primaria en el campo: separa la materia verde (hojas, rueznos, tierra) de la nuez pecán mediante zaranda vibratoria y turbina centrífuga. Devuelve la materia orgánica al monte y separa los rueznos cerrados para su inspección visual.",
    descriptionEn:
      "Autonomous primary field cleaning unit using vibrating screen and centrifugal fan, separating green material from pecan nuts right at harvest.",
    subtitle: "800–1.200 kg/h · zaranda + turbina · autónoma",
    features: [
      { title: "Limpieza desde el campo", text: "Separa la materia verde (hojas, rueznos, tierra) de la nuez antes de que ingrese a la planta." },
      { title: "Materia orgánica al monte", text: "El árbol se queda con lo que es del árbol: la materia orgánica vuelve al suelo." },
      { title: "Inspección de rueznos", text: "Separa los rueznos cerrados para su inspección visual posterior." },
    ],
    detail:
      "La limpiadora a campo facilita la separación de la materia verde (hojas, rueznos, tierra) de la nuez pecán, sumado a que aumenta la materia orgánica en el monte dejándole al árbol lo que es del árbol. Por otro lado separa también los rueznos cerrados que luego se inspeccionan visualmente: ahí se detecta el ruezno cerrado, que es una nuez vacía de la que por maduración aún no abrió pero su nuez está buena.",
    media: [
      { type: "image", src: "/dyfmaweb/maquinas/limpiadorea de campo.webp" },
      { type: "image", src: "/dyfmaweb/maquinas/recolectora.webp"},
      { type: "image", src: "/dyfmaweb/maquinas/limpiadora-campo.jpeg" },
      { type: "video", src: "/dyfmaweb/maquinas/limpiadora-campo.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/limpiadora-campo-2.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/limpiadora-campo-3.mp4" },
    ],
    pdf: "/dyfmaweb/maquinas/limpiadora-campo.pdf",
    specs: [
      { label: "Código", value: "LCLL-2700" },
      { label: "Fruto", value: "Nuez Pecán" },
      { label: "Capacidad", value: "800–1.200 kg/h" },
      { label: "Motor", value: "Combustión (nafta) o eléctrico trifásico" },
      {
        label: "Sistema",
        value: "Zaranda vibratoria con embrague manual · Turbina centrífuga de gran caudal",
      },
      { label: "Dimensiones", value: "Alto 1400 × Ancho 2700 × Prof. 1250 mm" },
    ],
  },
  {
    id: "horno-deshidratador",
    name: "Horno Deshidratador",
    nameEn: "Dehydrating Oven",
    category: "poscosecha",
    description:
      "Horno de secado o deshidratador de 500 kg de capacidad por ciclo, diseñado para lograr un secado controlado y homogéneo en todo tipo de frutos secos, preservando sus propiedades y optimizando los tiempos de proceso.",
    descriptionEn:
      "500 kg capacity dehydrating oven designed for controlled, homogeneous drying of all types of tree nuts.",
    subtitle: "500 kg por ciclo · aire forzado · control de temperatura",
    features: [
      { title: "Secado uniforme", text: "Circulación de aire forzado para un secado homogéneo en todo el lote." },
      { title: "Control preciso", text: "Temperatura regulable para preservar las propiedades del fruto." },
      { title: "Construcción robusta", text: "Diseñada para uso intensivo, campaña tras campaña." },
    ],
    media: [
      { type: "image", src: "/dyfmaweb/maquinas/secadora.jpeg" },
      { type: "image", src: "/dyfmaweb/maquinas/secadora-2.jpeg" },
      { type: "video", src: "/dyfmaweb/maquinas/secadora.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/secadora-2.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/secadora-3.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/secadora-4.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/secadora-5.mp4" },
    ],
    specs: [
      { label: "Fruto", value: "Todo tipo de frutos secos" },
      { label: "Capacidad", value: "Hasta 500 kg por ciclo" },
      { label: "Sistema", value: "Circulación de aire forzado" },
      { label: "Control", value: "Temperatura regulable con precisión" },
      { label: "Construcción", value: "Robusta para uso intensivo" },
    ],
  },
  {
    id: "despelonadora",
    name: "Despelonadora de Almendra",
    nameEn: "Almond Skin Remover",
    category: "poscosecha",
    description:
      "Equipo para el despelado de almendras: retira la piel del producto procesado de manera uniforme, preparándolo para las etapas siguientes de clasificación y envasado.",
    descriptionEn:
      "Almond skin removal equipment: uniformly removes the skin of the processed product, preparing it for the next classification and packing stages.",
    subtitle: "DALL 1050 · despelado uniforme · integrable a líneas",
    features: [
      { title: "Despelado uniforme", text: "Retira la piel del producto procesado de manera pareja." },
      { title: "Integrable", text: "Se incorpora a líneas de procesamiento existentes." },
      { title: "Fabricación nacional", text: "Diseñada y fabricada en Villa María, Córdoba." },
    ],
    media: [
      { type: "image", src: "/dyfmaweb/maquinas/despelonadora-1.webp" },
      { type: "image", src: "/dyfmaweb/maquinas/despelonadora.jpeg" },
      { type: "video", src: "/dyfmaweb/maquinas/descapotadora.mp4" },
    ],
    specs: [
      { label: "Código", value: "DALL 1050" },
      { label: "Fruto", value: "Almendra" },
      { label: "Aplicación", value: "Despelado de frutos secos" },
      { label: "Integración", value: "Adaptable a líneas de procesamiento" },
      { label: "Construcción", value: "Fabricación nacional DYFMA" },
    ],
  },
  {
    id: "despelonadora-nuez-chandler",
    name: "Despelonadora de Nuez Chandler",
    nameEn: "Chandler Walnut Skin Remover",
    category: "poscosecha",
    description:
      "Equipo para el despelado de nuez Chandler: retira la piel del producto procesado de manera uniforme, dejándolo preparado para las etapas siguientes de clasificación y envasado.",
    descriptionEn:
      "Chandler walnut skin removal equipment: uniformly removes the skin of the processed product, leaving it ready for the next classification and packing stages.",
    subtitle: "DNLL 950 · despelado uniforme · integrable a líneas",
    features: [
      { title: "Despelado uniforme", text: "Retira la piel de la nuez Chandler de manera pareja y constante." },
      { title: "Integrable", text: "Se incorpora a líneas de procesamiento existentes." },
      { title: "Fabricación nacional", text: "Diseñada y fabricada en Villa María, Córdoba." },
    ],
    media: [
      { type: "image", src: "/dyfmaweb/maquinas/despelonadora-nuez-chandler.jpeg" },
      { type: "video", src: "/dyfmaweb/maquinas/depelonadoraNuez1.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/depelonadoraNuez2.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/depelonadoraNuez3.mp4" },

    ],
    specs: [
      { label: "Código", value: "DNLL 950" },
      { label: "Fruto", value: "Nuez Chandler" },
      { label: "Aplicación", value: "Despelado de frutos secos" },
      { label: "Integración", value: "Adaptable a líneas de procesamiento" },
      { label: "Construcción", value: "Fabricación nacional DYFMA" },
    ],
  },
  {
    id: "linea-limpieza",
    name: "Línea de Limpieza",
    nameEn: "Cleaning Line",
    category: "poscosecha",
    role: "line",
    modules: [
      { name: "Limpiador / saca hojas", note: "Retira palos y hojas" },
      { name: "Pre-cleaner", note: "Limpieza previa de impurezas" },
      { name: "Mesa de inspección", note: "Revisión final del producto" },
      { name: "Dosificador", machineId: "elevador-dosificador" },
    ],
    description:
      "Línea integral para la limpieza de frutos secos desde la recepción de la cosecha: carro con clapeta de descarga, lagar de recepción de 1 TN, distribución y elevación, saca palos + saca hojas, pre-cleaner y mesa de inspección. Menos tareas manuales y producto listo para continuar su transformación.",
    descriptionEn:
      "Integral cleaning line from harvest reception to final inspection table: receiving hopper, elevation, stick and leaf removal, pre-cleaner and inspection table.",
    subtitle: "Recepción 1 TN · 6 etapas integradas · menos tareas manuales",
    features: [
      { title: "Una línea, múltiples etapas", text: "Desde la recepción en el lagar hasta la mesa de inspección, con flujo continuo." },
      { title: "Menos tareas manuales", text: "La línea ordena y agiliza el manejo de la producción reduciendo la intervención del operario." },
      { title: "Crece con vos", text: "Puede integrarse con otras etapas del procesamiento a medida que crece tu producción." },
    ],
    detail:
      "La Línea de Limpieza de Frutos Secos DYFMA está diseñada para optimizar el proceso desde la recepción de la cosecha, eliminando impurezas y preparando el producto para las etapas posteriores de procesamiento. La línea está compuesta por: carro con clapeta de descarga inferior (facilita la descarga controlada del producto), lagar de recepción con capacidad de hasta 1 tonelada, sistema de distribución y elevación que mantiene el flujo continuo entre etapas, saca palos + saca hojas (primera etapa de separación de materiales vegetales e impurezas de mayor tamaño), pre-cleaner (limpieza previa y separación de impurezas) y mesa de inspección (revisión final del producto antes de continuar el proceso). Concentrar diferentes procesos en una misma línea permite mejorar el flujo de trabajo, reducir tiempos y optimizar los recursos: el resultado es un producto limpio, uniforme y preparado para continuar su transformación.",
    media: [
      { type: "image", src: "/dyfmaweb/maquinas/linea-limpieza.jpeg" },
      { type: "image", src: "/dyfmaweb/maquinas/linea-limpieza-2.jpeg" },
      { type: "image", src: "/dyfmaweb/maquinas/linea-limpieza-3.jpeg" },
      { type: "video", src: "/dyfmaweb/maquinas/linea-limpieza.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/linea-limpieza-2.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/linea-limpieza-3.mp4" },
    ],
    specs: [
      { label: "Fruto", value: "Frutos secos en general" },
      { label: "Recepción", value: "Lagar con capacidad de 1 TN" },
      {
        label: "Etapas",
        value:
          "Carro con clapeta · Lagar 1 TN · Distribución y elevación · Saca palos + saca hojas · Pre-cleaner · Mesa de inspección",
      },
      {
        label: "Beneficios",
        value:
          "Mayor eficiencia · Menos tareas manuales · Flujo ordenado · Producto limpio y uniforme",
      },
    ],
  },
  {
    id: "linea-secado",
    name: "Línea de Secado",
    nameEn: "Drying Line",
    category: "poscosecha",
    role: "line",
    description:
      "Línea de secado y deshidratación de frutos secos: integra hornos deshidratadores de 1000 a 8000 kg de capacidad, dosificación y cinta de distribución para un secado uniforme y un flujo continuo.",
    descriptionEn:
      "Drying and dehydration line for tree nuts: integrates dehydrating ovens from 1000 to 8000 kg capacity, dosing and distribution conveyor for uniform drying and continuous flow.",
    subtitle: "Hornos 1000–8000 kg · dosificación · cinta de distribución",
    modules: [
      { name: "Horno deshidratador", note: "1000 a 8000 kg" },
      { name: "Dosificador", machineId: "elevador-dosificador" },
      { name: "Cinta de distribución" },
    ],
    features: [
      { title: "Secado uniforme", text: "Hornos con circulación de aire forzado para un secado homogéneo en todo el lote." },
      { title: "Escalable", text: "Capacidad de 1000 a 8000 kg según el volumen de producción." },
      { title: "Flujo continuo", text: "Dosificación y cinta de distribución conectan las etapas sin manipulación manual." },
    ],
    media: [
      { type: "image", src: "/dyfmaweb/maquinas/secadora.jpeg" },
      { type: "image", src: "/dyfmaweb/maquinas/secadora-2.jpeg" },
      { type: "video", src: "/dyfmaweb/maquinas/secadora.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/secadora-2.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/secadora-3.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/secadora-4.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/secadora-5.mp4" },
    ],
    specs: [
      { label: "Fruto", value: "Todo tipo de frutos secos" },
      { label: "Capacidad", value: "Hornos de 1000 a 8000 kg" },
      { label: "Integra", value: "Horno deshidratador · Dosificador · Cinta de distribución" },
      { label: "Sistema", value: "Circulación de aire forzado" },
    ],
  },
  {
    id: "linea-semi-industrial",
    name: "Línea Semi-Industrial",
    nameEn: "Semi-Industrial Line",
    category: "pelado-partido",
    role: "line",
    modules: [
      { name: "Oreador" },
      { name: "Dosificador", machineId: "elevador-dosificador" },
      { name: "Partidora", machineId: "partidora-pecan-avellana" },
      { name: "Elevador Z" },
      { name: "Zaranda" },
      { name: "Mesa de inspección" },
    ],
    description:
      "Partidora semi-industrial para nuez pecán: equipo compacto y eficiente que integra hervidor + colador, oreador, elevador dosificador con variador de velocidad, sistema de partido preciso y doble separación de cáscara. Diseño portátil con ruedas: cabe en una camioneta doble cabina.",
    descriptionEn:
      "Semi-industrial pecan cracking line: compact equipment integrating boiler, drier, dosing elevator, precise cracking system and double shell separation. Portable design.",
    subtitle: "PPLP-1500 | ESI-1800 · monofásica 2,5 HP · portátil",
    features: [
      { title: "Todo integrado", text: "Hervidor + colador, oreador, elevador dosificador, partido preciso y doble separación de cáscara." },
      { title: "Portátil", text: "Ruedas incorporadas: cabe en una camioneta doble cabina y se mueve donde la necesitás." },
      { title: "Energía simple", text: "Funciona con energía monofásica — 2,5 HP totales, sin obra eléctrica." },
    ],
    media: [
      { type: "image", src: "/dyfmaweb/2.webp" },
      { type: "video", src: "/dyfmaweb/maquinas/semi industrial-rapido.mp4" },
      // { type: "video", src: "/dyfmaweb/maquinas/linea-semi-industrial-2.mp4" },
      // { type: "video", src: "/dyfmaweb/maquinas/linea-semi-industrial-3.mp4" },
      { type: "video", src: "/dyfmaweb/maquinas/linea-semi-industrial-4.mp4" },
    ],
    pdf: "/dyfmaweb/maquinas/linea-semi-industrial.pdf",
    specs: [
      { label: "Códigos", value: "PPLP-1500 | ESI-1800" },
      { label: "Fruto", value: "Nuez Pecán" },
      {
        label: "Integra",
        value:
          "Hervidor + colador · Oreador · Elevador dosificador con variador · Sistema de partido · Doble separación de cáscara",
      },
      { label: "Energía", value: "Monofásica — 2,5 HP total" },
      { label: "Transporte", value: "Ruedas incorporadas — cabe en camioneta doble cabina" },
    ],
  },
  {
    id: "linea-pelado",
    name: "Línea de Pelado y Partido",
    nameEn: "Shelling & Processing Line",
    category: "pelado-partido",
    role: "line",
    modules: [
      { name: "Hervidor" },
      { name: "Dosificador", machineId: "elevador-dosificador" },
      { name: "Partidora", machineId: "partidora-pecan-avellana" },
      { name: "Elevador Z" },
      { name: "Selector óptico", note: "AnySort" },
      { name: "Elevador Z" },
      { name: "Zaranda" },
      { name: "Mesa de inspección", note: "Con reproceso" },
    ],
    description:
      "Línea integral de pelado y procesamiento: hervido y sanitización, tolva con elevación y dosificación, partido, prelimpieza, selección por color, separación por aire y sistema de reproceso para recuperar producto. Transforma el fruto con cáscara en un producto con valor agregado, listo para seleccionar, clasificar y envasar.",
    descriptionEn:
      "Integral shelling and processing line: boiling, dosing, cracking, pre-cleaning, color sorting, air separation and reprocessing system.",
    subtitle: "Proceso integral · selección por color · reproceso",
    features: [
      { title: "Selección automatizada", text: "Detección y separación por color más separación por aire en flujo continuo." },
      { title: "Sistema de reproceso", text: "El material con restos de cáscara vuelve a ingresar al proceso para maximizar la recuperación." },
      { title: "Adaptable a cada fruto", text: "La configuración se define según tipo de fruto, volumen y producto final buscado." },
    ],
    detail:
      "La Línea de Pelado y Procesamiento integra las etapas de hervido y sanitización, tolva con elevación y dosificación, partido, prelimpieza de cáscara, transporte y separación, selección por color, separación por aire, separación producto/cáscara, reproceso con cabezal y separador de aire, bandeja vibratoria y dosificación, y clasificación con control final. El objetivo no es solamente pelar: es aprovechar mejor la producción, reducir tareas manuales, ordenar el proceso y avanzar dentro de la cadena de valor. La configuración mostrada corresponde a nuez pecán, pero la tecnología puede analizarse y adaptarse a diferentes frutos secos según tipo de fruto, características de la cáscara, volumen de producción, capacidad requerida, nivel de automatización y producto final buscado.",
    media: [
      { type: "image", src: "/dyfmaweb/maquinas/render.jpeg" },
      { type: "video", src: "/dyfmaweb/lineaSEBA.mp4" },
    ],
    specs: [
      { label: "Fruto", value: "Nuez Pecán — configurable a otros frutos" },
      {
        label: "Etapas",
        value:
          "Hervido y sanitización · Tolva y dosificación · Partido · Prelimpieza · Selección por color · Separación por aire · Reproceso · Clasificación final",
      },
      {
        label: "Beneficios",
        value:
          "Menos pérdidas · Más recuperación · Selección automatizada · Mayor valor agregado",
      },
      { label: "Configuración", value: "Adaptable a cada fruto, volumen y producto final" },
    ],
  },
  {
    id: "elevador-dosificador",
    name: "Elevador Dosificador",
    nameEn: "Dosing Elevator",
    category: "poscosecha",
    role: "module",
    description:
      "Módulo con variador de velocidad para automatizar y hacer continuas las líneas de procesamiento: eleva, dosifica y alimenta el producto de manera controlada hacia el siguiente equipo. Se incorpora a líneas con horno deshidratador o partidoras, reduciendo la manipulación manual.",
    descriptionEn:
      "Variable-speed dosing module to automate processing lines: elevates, doses and feeds the product in a controlled way to the next equipment.",
    subtitle: "Variador de velocidad · modular · conecta etapas",
    features: [
      { title: "Proceso continuo", text: "Conecta equipos y transforma una operación manual en un flujo de trabajo continuo." },
      { title: "Dosificación controlada", text: "Variador de velocidad para adaptar el caudal de alimentación según el proceso." },
      { title: "Diseño modular", text: "Altura, capacidad y velocidad adaptables a cada línea y producto." },
    ],
    detail:
      "El Elevador Dosificador con Variador de Velocidad es un módulo diseñado para automatizar y hacer continuas las líneas de procesamiento, facilitando el traslado y la alimentación del producto entre diferentes etapas del proceso. Su función es elevar, dosificar y alimentar de manera controlada el producto hacia el siguiente equipo, permitiendo regular la velocidad de trabajo de acuerdo con las necesidades de cada línea. Puede incorporarse como módulo adicional a diferentes configuraciones — por ejemplo, líneas con horno deshidratador (horno → elevador dosificador → siguiente etapa) o líneas con partidoras (partidora → elevador dosificador → siguiente etapa) — conectando los equipos y reduciendo la necesidad de manipulación manual. No es solamente un elevador: es un módulo que permite conectar etapas del proceso, regular la alimentación y hacer más práctico el trabajo del operario.",
    media: [{ type: "image", src: "/dyfmaweb/maquinas/elevador.jpeg" }],
    pdf: "/dyfmaweb/maquinas/elevador-esi.pdf",
    specs: [
      { label: "Función", value: "Elevar · Dosificar · Alimentar el proceso" },
      { label: "Regulación", value: "Variador de velocidad para ajustar el caudal" },
      {
        label: "Integración",
        value: "Horno deshidratador → Elevador → Siguiente etapa · Partidora → Elevador → Siguiente etapa",
      },
      { label: "Diseño", value: "Modular — altura y capacidad adaptables a cada línea" },
    ],
  },
  {
    id: "envasadora",
    name: "Envasadora al Vacío",
    nameEn: "Vacuum Packer",
    category: "post-pelado",
    description:
      "Envasadora al vacío para frutos secos. Extiende la vida útil y preserva la calidad del producto procesado.",
    descriptionEn:
      "Vacuum packing machine for tree nuts. Extends shelf life and preserves processed product quality.",
    subtitle: "Vacío · EVLP-600 | EVLP-500 · mayor vida útil",
    features: [
      { title: "Preserva la calidad", text: "El envasado al vacío extiende la vida útil del producto procesado." },
      { title: "Multi-fruto", text: "Apta para nuez Chandler, pecán, almendra y avellana." },
      { title: "Listo para comercializar", text: "El paso final para llevar tu producto al mercado con presentación profesional." },
    ],
    media: [{ type: "image", src: "/dyfmaweb/maquinas/evasadoraalvacio.jpeg" }],
    pdf: "/dyfmaweb/maquinas/envasadora.pdf",
    specs: [
      { label: "Códigos", value: "EVLP-600 | EVLP-500" },
      { label: "Fruto", value: "Nuez Chandler · Pecán · Almendra · Avellana" },
      { label: "Aplicación", value: "Envasado al vacío de frutos secos" },
    ],
  },
];

export const machines: Machine[] = rawMachines.map((m) => ({
  ...m,
  // Backward-compatible accessors used by listing cards
  image: firstImage(m),
  video: firstVideo(m),
}));

export const categoryLabels: Record<MachineCategory, string> = {
  cosecha: "Cosecha",
  poscosecha: "Poscosecha",
  "pelado-partido": "Pelado | Partido",
  "post-pelado": "Post Pelado",
};
