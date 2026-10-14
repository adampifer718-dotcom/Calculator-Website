import type { TaxonomyText } from "./types";

/** Spanish (Spain) category and industry collection texts. */
const es: TaxonomyText = {
  categories: {
    biology: {
      name: "Biología",
      description: "Tasas de crecimiento, poblaciones y cantidades de laboratorio para las ciencias de la vida.",
      metaTitle: "Calculadoras de biología",
      metaDescription: "Calculadoras de biología gratuitas para el crecimiento de poblaciones, el tiempo de duplicación y otras magnitudes de las ciencias de la vida, con fórmula y ejemplos.",
    },
    chemistry: {
      name: "Química",
      description: "Cálculos de concentración, dilución y disoluciones para el laboratorio y el aula.",
      metaTitle: "Calculadoras de química",
      metaDescription: "Calculadoras de química gratuitas para molaridad, dilución de disoluciones y concentración, con fórmulas, unidades y ejemplos resueltos.",
    },
    construction: {
      name: "Construcción",
      description: "Herramientas de superficie y medición para proyectos domésticos y obras.",
      metaTitle: "Calculadoras de construcción",
      metaDescription: "Calculadoras de construcción gratuitas, como la de superficie de rectángulos, círculos y triángulos en pies, pulgadas, yardas o metros.",
    },
    conversion: {
      name: "Conversión",
      description: "Conversores de unidades basados en factores de conversión exactos y publicados.",
      metaTitle: "Calculadoras de conversión de unidades",
      metaDescription: "Conversores de unidades gratuitos de longitud, masa y temperatura con factores de conversión exactos del SI, fórmulas y tablas de conversión.",
    },
    ecology: {
      name: "Ecología",
      description: "Estimaciones de agua, energía y recursos para hogares y jardines más sostenibles.",
      metaTitle: "Calculadoras de ecología y medio ambiente",
      metaDescription: "Calculadoras de ecología gratuitas para la recogida de agua de lluvia y otras estimaciones de recursos, con supuestos claros y ejemplos resueltos.",
    },
    "everyday-life": {
      name: "Vida cotidiana",
      description: "Respuestas rápidas para propinas, descuentos, combustible, notas y otras cuentas del día a día.",
      metaTitle: "Calculadoras para la vida cotidiana",
      metaDescription: "Calculadoras gratuitas para el día a día: propinas y reparto de la cuenta, descuentos, gasto en combustible y notas de exámenes, con la fórmula a la vista.",
    },
    finance: {
      name: "Finanzas",
      description: "Sueldos, préstamos, intereses, rentabilidad, impuestos y márgenes empresariales con fórmulas transparentes.",
      metaTitle: "Calculadoras financieras",
      metaDescription: "Calculadoras financieras gratuitas de salario y sueldo por hora, préstamos, interés compuesto, ROI, impuesto sobre ventas, margen de beneficio y punto de equilibrio.",
    },
    food: {
      name: "Cocina",
      description: "Cálculos de cocina para adaptar recetas y planificar comidas.",
      metaTitle: "Calculadoras de cocina y alimentación",
      metaDescription: "Calculadoras de cocina gratuitas, como un escalador de recetas que ajusta las cantidades de los ingredientes a cualquier número de raciones.",
    },
    health: {
      name: "Salud",
      description: "Indicadores generales de salud con rangos y limitaciones claros. No sustituyen al consejo médico.",
      metaTitle: "Calculadoras de salud",
      metaDescription: "Calculadoras de salud gratuitas de IMC y tasa metabólica basal (TMB), con unidades métricas e imperiales y limitaciones claramente indicadas.",
    },
    math: {
      name: "Matemáticas",
      description: "Porcentajes, raíces, potencias, logaritmos, geometría y formato de números, con la fórmula detrás de cada respuesta.",
      metaTitle: "Calculadoras de matemáticas",
      metaDescription: "Calculadoras de matemáticas gratuitas de porcentajes, logaritmos, potencias, raíces cuadradas, pendiente, circunferencia, cifras significativas y más.",
    },
    physics: {
      name: "Física",
      description: "Cálculos de movimiento, energía y electricidad con unidades del SI.",
      metaTitle: "Calculadoras de física",
      metaDescription: "Calculadoras de física gratuitas de velocidad, distancia y tiempo, energía cinética y ley de Ohm, con fórmulas y gestión de unidades.",
    },
    sports: {
      name: "Deportes",
      description: "Cifras de entrenamiento y rendimiento para corredores, ciclistas y deportistas.",
      metaTitle: "Calculadoras deportivas",
      metaDescription: "Calculadoras deportivas gratuitas, como una de ritmo de carrera para calcular ritmo, velocidad y tiempos finales en las distancias más habituales.",
    },
    statistics: {
      name: "Estadística",
      description: "Estadística descriptiva, valores p e intervalos de confianza con todos los supuestos indicados.",
      metaTitle: "Calculadoras de estadística",
      metaDescription: "Calculadoras de estadística gratuitas de media, mediana y moda, desviación típica, valores p e intervalos de confianza, con fórmulas.",
    },
    other: {
      name: "Otras",
      description: "Herramientas útiles que no encajan en otras categorías, como el coste de la energía en casa.",
      metaTitle: "Otras calculadoras",
      metaDescription: "Calculadoras gratuitas variadas, como una calculadora del coste de la electricidad de electrodomésticos y dispositivos.",
    },
  },
  collections: {
    business: {
      name: "Negocios y emprendimiento",
      description: "Precios, márgenes, punto de equilibrio y rentabilidad para gestionar y hacer crecer un negocio.",
      metaTitle: "Calculadoras para negocios y emprendimiento",
      metaDescription: "Calculadoras para emprendedores y pequeñas empresas: margen de beneficio, punto de equilibrio, ROI, impuesto sobre ventas, descuentos y variación porcentual.",
    },
    "accounting-finance": {
      name: "Contabilidad y finanzas",
      description: "Intereses, préstamos, rentabilidad y conversiones de nómina para trabajos de finanzas y contabilidad.",
      metaTitle: "Calculadoras de contabilidad y finanzas",
      metaDescription: "Calculadoras de contabilidad y finanzas: cuotas de préstamos, interés compuesto, ROI, margen de beneficio, impuesto sobre ventas y conversiones de salario.",
    },
    "hr-payroll": {
      name: "RR. HH., nóminas y empleo",
      description: "Convierte entre salarios, sueldos por hora y periodos de pago para ofertas, presupuestos y revisiones de nóminas.",
      metaTitle: "Calculadoras de RR. HH., nóminas y empleo",
      metaDescription: "Calculadoras de RR. HH. y nóminas: de salario a sueldo por hora, de sueldo por hora a salario y todos los periodos de pago habituales, según tu jornada.",
    },
    "marketing-ecommerce": {
      name: "Marketing digital y comercio electrónico",
      description: "Rentabilidad de campañas, descuentos, márgenes y estadísticas de conversión para vendedores online y profesionales del marketing.",
      metaTitle: "Calculadoras de marketing digital y e-commerce",
      metaDescription: "Calculadoras para marketing y tiendas online: ROI, descuentos, impuesto sobre ventas, margen de beneficio, variación porcentual e intervalos de confianza.",
    },
    "real-estate": {
      name: "Inmobiliaria",
      description: "Superficie, cuotas de préstamos tipo hipoteca y rentabilidad de inversiones para decisiones inmobiliarias.",
      metaTitle: "Calculadoras inmobiliarias",
      metaDescription: "Calculadoras para el sector inmobiliario: superficie, cuotas de préstamos e hipotecas, ROI y recogida de agua de lluvia en viviendas y fincas.",
    },
    "construction-engineering": {
      name: "Construcción e ingeniería civil",
      description: "Superficies, triángulos rectángulos, pendientes y conversiones de unidades para obra y proyecto.",
      metaTitle: "Calculadoras de construcción e ingeniería civil",
      metaDescription: "Calculadoras de construcción e ingeniería civil: superficie, teorema de Pitágoras, pendiente, circunferencia y conversión de unidades.",
    },
    "education-research": {
      name: "Educación e investigación",
      description: "Herramientas de matemáticas, estadística y ciencias para estudiantes, docentes e investigadores.",
      metaTitle: "Calculadoras de educación e investigación",
      metaDescription: "Calculadoras para estudiantes e investigadores: estadística, valores p, logaritmos, cifras significativas y fórmulas de química y física.",
    },
    healthcare: {
      name: "Sanidad y profesionales médicos",
      description: "Indicadores generales de salud y cálculos de laboratorio. Aplica siempre el criterio clínico y las guías locales.",
      metaTitle: "Calculadoras para sanidad",
      metaDescription: "Calculadoras para entornos sanitarios y de laboratorio: IMC, TMB, molaridad, dilución y valores p, con fuentes y limitaciones indicadas.",
    },
    "agriculture-gardening": {
      name: "Agricultura y jardinería",
      description: "Estimaciones de superficie, agua y crecimiento para explotaciones, parcelas y jardines.",
      metaTitle: "Calculadoras de agricultura y jardinería",
      metaDescription: "Calculadoras para agricultores y jardineros: superficie, recogida de agua de lluvia, tiempo de duplicación de poblaciones y conversión de unidades.",
    },
    "food-hospitality": {
      name: "Restauración y hostelería",
      description: "Escalado de recetas, propinas, precios y márgenes para cocinas, restaurantes y anfitriones.",
      metaTitle: "Calculadoras de restauración y hostelería",
      metaDescription: "Calculadoras para cocinas y restaurantes: escalador de recetas, propinas y reparto de la cuenta, margen de beneficio, descuentos y conversión de temperatura.",
    },
    "manufacturing-operations": {
      name: "Fabricación y operaciones",
      description: "Conversiones de unidades, volúmenes de equilibrio, costes energéticos y geometría para la producción.",
      metaTitle: "Calculadoras de fabricación y operaciones",
      metaDescription: "Calculadoras de fabricación y operaciones: punto de equilibrio, conversión de unidades, coste de la electricidad, ley de Ohm y circunferencia.",
    },
    "software-data": {
      name: "Software, TI y datos",
      description: "Herramientas de estadística, logaritmos y notación para ingenieros y analistas de datos.",
      metaTitle: "Calculadoras de software, TI y datos",
      metaDescription: "Calculadoras para ingenieros y analistas: desviación típica, media y mediana, valores p, intervalos de confianza, logaritmos y potencias.",
    },
    "environment-energy": {
      name: "Medio ambiente y energía",
      description: "Consumo eléctrico, captación de agua y gasto en combustible para decisiones sostenibles.",
      metaTitle: "Calculadoras de medio ambiente y energía",
      metaDescription: "Calculadoras de energía y medio ambiente: coste de la electricidad, recogida de agua de lluvia, gasto en combustible y energía cinética.",
    },
    "fitness-sports": {
      name: "Fitness y deporte",
      description: "Ritmo, medidas corporales y necesidades energéticas para tus objetivos de entrenamiento y forma física.",
      metaTitle: "Calculadoras de fitness y deporte",
      metaDescription: "Calculadoras de fitness y deporte: ritmo de carrera, IMC, TMB y velocidad, distancia y tiempo, con fórmulas claras.",
    },
    "personal-finance": {
      name: "Finanzas personales y hogar",
      description: "Decisiones económicas del día a día: sueldo, préstamos, ahorro, compras, facturas y gastos del hogar.",
      metaTitle: "Calculadoras de finanzas personales y del hogar",
      metaDescription: "Calculadoras para el hogar: sueldo, préstamos, interés compuesto, descuentos, propinas, impuesto sobre ventas y gasto en combustible y electricidad.",
    },
  },
};

export default es;
