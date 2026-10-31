import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { FoodCostPercentageText } from "../text/en";

const es: CalculatorTranslation<FoodCostPercentageText> = {
  content: {
    title: "Calculadora del porcentaje de coste de materia prima",
    shortTitle: "Coste de materia prima",
    summary:
      "Calcula el porcentaje de coste de materia prima (food cost) de un plato o de todo un periodo a partir del inventario y las ventas, y el precio de carta que alcanza un objetivo.",
    metaTitle: "Coste de materia prima – Food cost y precio de carta",
    metaDescription:
      "Calcula el food cost de un plato o de un periodo con el inventario, las compras y las ventas, con el beneficio bruto y el precio de carta para tu objetivo.",
    keywords: [
      "food cost",
      "porcentaje de coste de materia prima",
      "coste por ración",
      "escandallo",
      "precio de carta",
      "coste de alimentos restaurante",
      "coste de las ventas",
      "COGS",
    ],
    intro: [
      "El porcentaje de coste de materia prima, o food cost, es la parte del precio de carta, o de las ventas de comida de un restaurante, que se destina a los ingredientes. Es una de las cifras más vigiladas en hostelería, porque muestra rápidamente si los precios se mantienen al ritmo de lo que cuesta comprar los alimentos.",
      "Usa el modo de plato para revisar un único plato de la carta a partir de su coste por ración y su precio, y para encontrar el precio que da un food cost objetivo. Usa el modo de periodo para calcular el food cost de una semana o un mes a partir de tus recuentos de inventario, tus compras y tus ventas de comida.",
    ],
    howToUse: [
      "Elige la moneda y si vas a trabajar con un plato o con todo un periodo.",
      "Para un plato, introduce el coste por ración (el coste de todos los ingredientes de una ración) y el precio de carta sin impuestos.",
      "Para un periodo, introduce el valor de los alimentos en existencias al principio y al final, los alimentos comprados entre medias y las ventas de comida del mismo periodo.",
      "Si quieres, introduce un porcentaje de coste objetivo para obtener un precio de carta sugerido, o las ventas que necesitaría el coste de materia prima del periodo.",
    ],
    formulas: [
      {
        title: "Food cost % de un plato",
        expression: "food cost % = coste por ración ÷ precio de carta × 100",
        explanation: "El precio de carta es el precio sin impuestos sobre las ventas.",
      },
      {
        title: "Precio de carta para un objetivo",
        expression: "precio = coste por ración ÷ (objetivo % ÷ 100)",
        explanation: "Por ejemplo, una ración de 4,20 US$ con un objetivo del 28 % da 4,20 ÷ 0,28 = 15,00 US$.",
      },
      {
        title: "Food cost % de un periodo",
        expression: "CMV = inventario inicial + compras − inventario final;  food cost % = CMV ÷ ventas de comida × 100",
        explanation: "El CMV (coste de la mercancía vendida) es el coste de los alimentos consumidos durante el periodo, ya se hayan vendido, desperdiciado o regalado.",
      },
      {
        title: "Beneficio bruto y margen",
        expression: "beneficio bruto = precio − coste de materia prima;  margen % = beneficio bruto ÷ precio × 100",
        explanation: "Este margen solo descuenta el coste de materia prima; con él hay que pagar todavía el personal y los gastos generales.",
      },
    ],
    examples: [
      {
        title: "Un plato de 14 US$ con un coste por ración de 4,20 US$ y un objetivo del 28 %",
        steps: [
          "Food cost = 4,20 ÷ 14 × 100 = 30 %",
          "Beneficio bruto = 14 − 4,20 = 9,80 US$, un margen del 70 %",
          "Precio para el 28 % = 4,20 ÷ 0,28 = 15,00 US$",
        ],
      },
      {
        title: "Un plato de pasta de 12,50 € que cuesta 3,85 € preparar",
        steps: ["Food cost = 3,85 ÷ 12,50 × 100 = 30,8 %", "Precio para un objetivo del 30 % = 3,85 ÷ 0,30 ≈ 12,83 €"],
      },
      {
        title: "Un mes a partir de los recuentos de inventario",
        steps: [
          "CMV = 9.200 + 14.600 − 8.100 = 15.700 US$",
          "Food cost = 15.700 ÷ 48.500 × 100 ≈ 32,37 %",
          "Beneficio bruto de la comida = 48.500 − 15.700 = 32.800 US$; al 30 %, el mismo CMV necesitaría unas ventas de unos 52.333 US$",
        ],
      },
    ],
    assumptions: [
      "Todos los importes están en una sola moneda y sin impuestos sobre las ventas. El inventario se valora a precio de coste.",
      "El modo de periodo supone que los recuentos de inventario se hacen justo al principio y al final del mismo periodo que la cifra de ventas, y que las compras incluyen solo alimentos (no bebidas ni suministros, salvo que quieras incluirlos).",
      "No existe un único porcentaje de coste de materia prima correcto. Se suele citar un intervalo del 28 al 35 % del precio de venta, pero la cifra adecuada depende del tipo de restaurante, sus precios y sus demás costes.",
    ],
    faqs: [
      {
        question: "¿Cuál es un buen porcentaje de food cost?",
        answer:
          "Se suelen citar cifras de entre el 28 y el 35 %, pero no hay un objetivo universal. Un restaurante con costes de personal o alquiler altos puede necesitar un food cost más bajo, mientras que un local con ingredientes de primera y menos personal puede permitirse uno más alto.",
      },
      {
        question: "¿Por qué el food cost del periodo no coincide con el de mis platos?",
        answer:
          "La cifra del periodo incluye todo lo que ha salido de las existencias: desperdicio, mermas, comidas del personal, raciones excesivas y robos, además de la comida vendida. Compararla con los costes previstos de los platos es una buena forma de detectar esas pérdidas.",
      },
      {
        question: "¿Debo incluir los impuestos en el precio de carta?",
        answer:
          "No. Usa el precio sin impuestos, porque los impuestos sobre las ventas se recaudan para la Administración y no son ingresos del negocio.",
      },
    ],
    sourcesUsedFor: [
      "Food cost % = coste por ración ÷ precio de carta × 100, y el intervalo citado a menudo del 28 al 35 % del precio de venta.",
      "Food cost % de un periodo = (inventario inicial + compras − inventario final) ÷ ventas de comida × 100.",
    ],
  },
  text: {
    mode: "Calcular para",
    modes: { dish: "Un plato", period: "Un periodo (inventario)" },
    plateCost: "Coste por ración",
    plateCostHelp: "El coste de todos los ingredientes de una ración, incluidos la guarnición y los acompañamientos.",
    menuPrice: "Precio de carta",
    menuPriceHelp: "El precio de venta del plato, sin impuestos sobre las ventas.",
    beginInventory: "Inventario inicial",
    beginInventoryHelp: "El valor de los alimentos en existencias al principio del periodo.",
    purchases: "Compras de alimentos",
    purchasesHelp: "El valor de los alimentos comprados durante el periodo.",
    endInventory: "Inventario final",
    endInventoryHelp: "El valor de los alimentos en existencias al final del periodo.",
    sales: "Ventas de comida",
    salesHelp: "Ventas netas de comida del mismo periodo, sin impuestos sobre las ventas.",
    target: "Food cost % objetivo (opcional)",
    targetHelp: "El porcentaje de coste de materia prima al que aspiras, para obtener un precio de carta sugerido o las ventas que implica.",
    errors: {
      inventory: "El inventario final no puede ser mayor que el inventario inicial más las compras.",
    },
    foodCost: "Porcentaje de coste de materia prima",
    captionDish: "Coste por ración {cost} ÷ precio de carta {price}.",
    captionPeriod: "Coste de la mercancía vendida {cogs} ÷ ventas de comida {sales}.",
    grossProfitPlate: "Beneficio bruto por ración",
    grossProfitPeriod: "Beneficio bruto de la comida en el periodo",
    margin: "Margen de contribución tras el coste de materia prima",
    suggestedPrice: "Precio de carta sugerido para el objetivo",
    salesAtTarget: "Ventas de comida necesarias para el objetivo",
    cogs: "Coste de la mercancía vendida (comida)",
    notes: {
      margin: "Este margen solo descuenta el coste de materia prima. El personal, el alquiler y los demás costes todavía tienen que salir de él.",
      rounding:
        "El precio sugerido es el precio con el que este coste por ración equivale al porcentaje objetivo. Los precios de carta se suelen redondear a una cifra cómoda.",
      above100: "El coste de materia prima supera el precio de venta, así que cada venta pierde dinero solo en ingredientes.",
    },
  },
};

export default es;
