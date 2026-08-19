export type MachineCategory = "cosecha" | "partido" | "limpieza" | "lineas" | "envasado";

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
  image?: string;
}

export const machines: Machine[] = [
  {
    id: "remecedor-linga",
    name: "Remecedor de Linga",
    nameEn: "Sling Shaker",
    category: "cosecha",
    description: "Equipo de vibración de alta frecuencia para acople a tres puntos del tractor. Reduce la mano de obra en un 70% durante la cosecha.",
    descriptionEn: "High-frequency vibration unit for three-point tractor coupling. Reduces manual labor by 70% during harvest.",
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
    id: "partidora-pecan-avellana",
    name: "Partidora de Nuez Pecán y Avellanas",
    nameEn: "Pecan & Hazelnut Cracker",
    category: "partido",
    description: "Máquina para el partido de nuez pecán y avellanas con separador de cáscara regulable. Bajo mantenimiento, alta eficiencia.",
    descriptionEn: "Machine for cracking pecans and hazelnuts with adjustable shell separator. Low maintenance, high efficiency.",
    image: "/dyfmaweb/partidora.webp",
    specs: [
      { label: "Fruto", value: "Nuez Pecán · Avellana" },
      { label: "Capacidad", value: "100–200 kg/h" },
      { label: "Rendimiento mariposa", value: "Cáscara fina 85/90% · Semifina 75/80%" },
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
    category: "limpieza",
    description: "Unidad autónoma para limpieza primaria de frutos secos mediante zaranda vibratoria y turbina centrífuga para expulsión de hojas y ramas.",
    descriptionEn: "Autonomous primary cleaning unit for tree nuts using vibrating screen and centrifugal fan for leaf and branch removal.",
    specs: [
      { label: "Código", value: "LCLL-2700" },
      { label: "Fruto", value: "Nuez Pecán" },
      { label: "Capacidad", value: "800–1.200 kg/h" },
      { label: "Motor", value: "Combustión (nafta) o eléctrico trifásico" },
      { label: "Sistema", value: "Zaranda vibratoria + turbina centrífuga" },
      { label: "Dimensiones", value: "Alto 1400 × Ancho 2700 × Prof. 1250 mm" },
    ],
  },
  {
    id: "linea-semi-industrial",
    name: "Línea Semi-Industrial",
    nameEn: "Semi-Industrial Line",
    category: "lineas",
    description: "Línea semi-industrial para producción de frutos secos. Solución modular que integra las etapas del proceso de poscosecha.",
    descriptionEn: "Semi-industrial line for tree nut production. Modular solution integrating post-harvest processing stages.",
    image: "/dyfmaweb/2.webp",
    specs: [
      { label: "Códigos", value: "PPLP-1500 | ESI-1800" },
      { label: "Fruto", value: "Nuez Chandler · Pecán · Almendra" },
      { label: "Etapas", value: "Limpieza · Partido · Separación · Clasificación" },
      { label: "Escalabilidad", value: "Modular — adaptable a cada productor" },
    ],
  },
  {
    id: "envasadora",
    name: "Envasadora al Vacío",
    nameEn: "Vacuum Packer",
    category: "envasado",
    description: "Envasadora al vacío para frutos secos. Extiende la vida útil y preserva la calidad del producto procesado.",
    descriptionEn: "Vacuum packing machine for tree nuts. Extends shelf life and preserves processed product quality.",
    specs: [
      { label: "Códigos", value: "EVLP-600 | EVLP-500" },
      { label: "Fruto", value: "Nuez Chandler · Pecán · Almendra · Avellana" },
      { label: "Aplicación", value: "Envasado al vacío de frutos secos" },
    ],
  },
];

export const categoryLabels: Record<MachineCategory, string> = {
  cosecha: "Cosecha",
  partido: "Partido",
  limpieza: "Limpieza",
  lineas: "Líneas de Procesamiento",
  envasado: "Envasado",
};
