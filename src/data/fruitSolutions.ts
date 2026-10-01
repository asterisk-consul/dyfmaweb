export interface FruitSolution {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  machineIds: string[];
  stages: { title: string; text: string; machineIds: string[] }[];
  faqs: { question: string; answer: string }[];
  note?: string;
}

export const fruitSolutions: FruitSolution[] = [
  {
    slug: "maquinaria-nuez-pecan",
    name: "Nuez pecán",
    title: "Maquinaria para nuez pecán",
    description: "Equipos y líneas DYFMA para cosecha, limpieza, secado, partido, pelado y envasado de nuez pecán.",
    intro: "Diseñamos soluciones para acompañar todo el proceso de la nuez pecán: desde la mecanización de la cosecha hasta la obtención de un producto limpio, partido y listo para comercializar.",
    machineIds: ["remecedor-linga", "recolector", "limpiadora-campo", "linea-limpieza", "horno-deshidratador", "linea-secado", "partidora-pecan-avellana", "linea-semi-industrial", "linea-pelado", "envasadora"],
    stages: [
      { title: "Cosecha", text: "Remecé y recolectá reduciendo tareas manuales.", machineIds: ["remecedor-linga", "recolector"] },
      { title: "Limpieza", text: "Separá hojas, rueznos, tierra e impurezas.", machineIds: ["limpiadora-campo", "linea-limpieza"] },
      { title: "Secado", text: "Controlá la humedad con aire forzado.", machineIds: ["horno-deshidratador", "linea-secado"] },
      { title: "Partido y selección", text: "Partí, separá y recuperá más producto.", machineIds: ["partidora-pecan-avellana", "linea-semi-industrial", "linea-pelado"] },
      { title: "Envasado", text: "Protegé la calidad del producto terminado.", machineIds: ["envasadora"] },
    ],
    faqs: [
      { question: "¿Puedo comenzar con una sola máquina?", answer: "Sí. Las soluciones son modulares y permiten sumar etapas a medida que crece la producción." },
      { question: "¿Hay equipos para pequeña y mediana escala?", answer: "Sí. El recolector manual y la línea semi-industrial permiten mecanizar el proceso de manera progresiva." },
      { question: "¿DYFMA diseña líneas completas?", answer: "Sí. La configuración se define según volumen, proceso actual y producto final buscado." },
    ],
  },
  {
    slug: "maquinaria-nuez-chandler",
    name: "Nuez Chandler",
    title: "Maquinaria para nuez Chandler",
    description: "Soluciones DYFMA para cosecha, limpieza, secado, despelonado y envasado de nuez Chandler.",
    intro: "Mecanizá las etapas críticas del procesamiento de nuez Chandler con equipos de fabricación nacional y una configuración adaptada al volumen de tu producción.",
    machineIds: ["remecedor-linga", "recolector", "linea-limpieza", "horno-deshidratador", "linea-secado", "despelonadora-nuez-chandler", "envasadora"],
    stages: [
      { title: "Cosecha", text: "Vareo y recolección para reducir esfuerzo.", machineIds: ["remecedor-linga", "recolector"] },
      { title: "Limpieza", text: "Separación de materiales e inspección.", machineIds: ["linea-limpieza"] },
      { title: "Secado", text: "Temperatura regulable y aire forzado.", machineIds: ["horno-deshidratador", "linea-secado"] },
      { title: "Despelonado", text: "Retiro uniforme de la piel.", machineIds: ["despelonadora-nuez-chandler"] },
      { title: "Envasado", text: "Conservación al vacío del producto.", machineIds: ["envasadora"] },
    ],
    faqs: [
      { question: "¿El remecedor trabaja con Chandler?", answer: "Sí. La ficha técnica lo especifica para nuez Chandler y pecán." },
      { question: "¿La despelonadora se integra a una línea?", answer: "Sí. Puede incorporarse a líneas de procesamiento existentes." },
      { question: "¿Qué capacidad necesito?", answer: "Se define según volumen de cosecha, humedad y ritmo de trabajo requerido." },
    ],
  },
  {
    slug: "maquinaria-para-almendras",
    name: "Almendra",
    title: "Maquinaria para almendras",
    description: "Equipos DYFMA para recolección, limpieza, secado, despelonado y envasado de almendras.",
    intro: "Soluciones para reducir el trabajo manual y ordenar las etapas de procesamiento de almendras, desde la recolección hasta la preparación del producto para su comercialización.",
    machineIds: ["recolector", "linea-limpieza", "horno-deshidratador", "linea-secado", "despelonadora", "envasadora"],
    stages: [
      { title: "Recolección", text: "Levantá el fruto de manera eficiente.", machineIds: ["recolector"] },
      { title: "Limpieza", text: "Eliminá materiales e impurezas.", machineIds: ["linea-limpieza"] },
      { title: "Secado", text: "Lográ un secado controlado y homogéneo.", machineIds: ["horno-deshidratador", "linea-secado"] },
      { title: "Despelonado", text: "Retirá la piel de manera uniforme.", machineIds: ["despelonadora"] },
      { title: "Envasado", text: "Preservá la calidad del producto.", machineIds: ["envasadora"] },
    ],
    faqs: [{ question: "¿La despelonadora es específica para almendra?", answer: "Sí. El modelo DALL 1050 está desarrollado para el despelado de almendras." }],
  },
  {
    slug: "maquinaria-para-pistacho",
    name: "Pistacho",
    title: "Maquinaria para procesamiento de pistacho",
    description: "Consultá soluciones DYFMA de limpieza y secado configurables para el procesamiento de pistacho.",
    intro: "El pistacho requiere definir cada etapa según estado del fruto, volumen y resultado buscado. DYFMA analiza el proceso para recomendar una configuración adecuada.",
    machineIds: ["linea-limpieza", "horno-deshidratador", "linea-secado"],
    stages: [
      { title: "Limpieza", text: "Configuramos las etapas para retirar impurezas.", machineIds: ["linea-limpieza"] },
      { title: "Secado", text: "Definimos capacidad, temperatura y flujo.", machineIds: ["horno-deshidratador", "linea-secado"] },
    ],
    note: "Los equipos mostrados son soluciones de uso general para frutos secos. La compatibilidad y configuración para pistacho deben validarse técnicamente en cada proyecto.",
    faqs: [{ question: "¿Existe una configuración estándar para pistacho?", answer: "No se publica una configuración única: DYFMA evalúa el producto y el volumen antes de recomendar equipos." }],
  },
  {
    slug: "maquinaria-para-avellanas",
    name: "Avellana",
    title: "Maquinaria para avellanas",
    description: "Equipos DYFMA para limpieza, secado, partido y envasado de avellanas.",
    intro: "Procesá avellanas con soluciones para preparar, secar, partir y conservar el producto, escalando desde equipos individuales hacia una configuración integrada.",
    machineIds: ["linea-limpieza", "horno-deshidratador", "linea-secado", "partidora-pecan-avellana", "envasadora"],
    stages: [
      { title: "Limpieza", text: "Prepará el fruto retirando impurezas.", machineIds: ["linea-limpieza"] },
      { title: "Secado", text: "Controlá humedad y homogeneidad.", machineIds: ["horno-deshidratador", "linea-secado"] },
      { title: "Partido", text: "Aplicá un sistema regulable para avellanas.", machineIds: ["partidora-pecan-avellana"] },
      { title: "Envasado", text: "Protegé el producto terminado.", machineIds: ["envasadora"] },
    ],
    faqs: [{ question: "¿La partidora trabaja con avellanas?", answer: "Sí. Su ficha técnica indica regulación para nuez pecán y avellanas." }],
  },
];
