import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SubnetText } from "../text/en";

const es: CalculatorTranslation<SubnetText> = {
  content: {
    title: "Calculadora de subredes IP",
    shortTitle: "Subredes IP",
    summary:
      "Obtén las direcciones de red y de difusión, el rango de hosts utilizables, las máscaras y el tipo de dirección de cualquier dirección IPv4 con su prefijo.",
    metaTitle: "Calculadora de subredes IP – IPv4, CIDR y máscara",
    metaDescription:
      "Introduce una IPv4 con prefijo CIDR o máscara de subred y obtén la red, la difusión, el primer y el último host, los hosts utilizables y la máscara wildcard.",
    keywords: [
      "calculadora de subredes",
      "subred IP",
      "calculadora CIDR",
      "máscara de subred",
      "máscara wildcard",
      "dirección de red",
      "dirección de broadcast",
      "hosts utilizables",
    ],
    intro: [
      "Una dirección IPv4 es un número de 32 bits que se escribe en cuatro partes de 0 a 255. La longitud del prefijo, como /24, indica cuántos de esos bits identifican la red; el resto numera los hosts dentro de ella. Una máscara de subred como 255.255.255.0 es la misma información escrita en forma de dirección.",
      "Esta calculadora toma una dirección y un prefijo o una máscara y obtiene la dirección de red, la dirección de difusión (broadcast), el rango de direcciones de host que puedes asignar y cuántas hay. También muestra la máscara wildcard que se usa en listas de acceso y configuraciones de routers, y si la dirección es privada, pública o de uso especial.",
    ],
    howToUse: [
      "Escribe una dirección IPv4, por ejemplo 192.168.1.10. Puedes añadir el prefijo tras una barra, como 192.168.1.10/24.",
      "Si no has escrito una barra, elige una longitud de prefijo o cambia a máscara de subred y escribe la máscara.",
      "Consulta la dirección de red y, después, la dirección de difusión, el rango de hosts, el número de hosts utilizables y las máscaras.",
    ],
    formulas: [
      {
        title: "Máscara de subred",
        expression: "máscara = 2³² − 2³²⁻ᵖ",
        explanation: "p es la longitud del prefijo: los primeros p bits son 1 y el resto 0. Para /24 es 255.255.255.0.",
      },
      {
        title: "Red y difusión",
        expression: "red = dirección AND máscara; difusión = red OR wildcard",
        explanation: "La máscara wildcard es la máscara con todos los bits invertidos (NOT máscara), por ejemplo 0.0.0.255 para /24.",
      },
      {
        title: "Hosts utilizables",
        expression: "hosts = 2³²⁻ᵖ − 2",
        explanation:
          "Las direcciones de red y de difusión no pueden asignarse a hosts. Un enlace punto a punto /31 tiene 2 direcciones utilizables (RFC 3021) y un /32 tiene 1.",
      },
    ],
    examples: [
      {
        title: "Red doméstica: 192.168.1.10/24",
        steps: [
          "Máscara para /24 = 255.255.255.0, wildcard = 0.0.0.255",
          "Red = 192.168.1.10 AND 255.255.255.0 = 192.168.1.0; difusión = 192.168.1.255",
          "Hosts utilizables = 2⁸ − 2 = 254, de 192.168.1.1 a 192.168.1.254; la dirección es privada (RFC 1918)",
        ],
      },
      {
        title: "10.45.200.17 con máscara 255.255.240.0",
        steps: [
          "255.255.240.0 tiene 8 + 8 + 4 = 20 bits a uno, así que el prefijo es /20",
          "Tercera parte: 200 AND 240 = 192, así que la red es 10.45.192.0 y la difusión 10.45.207.255",
          "Hosts utilizables = 2¹² − 2 = 4.094, de 10.45.192.1 a 10.45.207.254",
        ],
      },
      {
        title: "Bloque de una oficina pequeña: 172.20.5.130/27",
        steps: [
          "Máscara para /27 = 255.255.255.224, es decir, bloques de 32 direcciones",
          "130 AND 224 = 128, así que la red es 172.20.5.128 y la difusión 172.20.5.159",
          "Hosts utilizables = 2⁵ − 2 = 30, de 172.20.5.129 a 172.20.5.158",
        ],
      },
    ],
    assumptions: [
      "Solo IPv4. No se aceptan direcciones IPv6.",
      "Las partes de la dirección deben escribirse en decimal simple sin ceros a la izquierda, porque algunos sistemas leen una parte como 010 en octal.",
      "Las etiquetas de privada y de uso especial describen la dirección que has escrito según los bloques de uso especial de la IANA. Que sea accesible depende además del enrutamiento y los cortafuegos de tu red.",
    ],
    faqs: [
      {
        question: "¿Por qué se restan dos direcciones al número de hosts?",
        answer:
          "En una subred normal, la primera dirección identifica la propia red y la última es la dirección de difusión, que llega a todos los hosts. Ninguna de las dos puede asignarse a un dispositivo, así que una /24 tiene 256 direcciones pero 254 hosts utilizables.",
      },
      {
        question: "¿Qué es una máscara wildcard?",
        answer:
          "Es la máscara de subred con todos los bits invertidos: 255.255.255.0 se convierte en 0.0.0.255. Las listas de acceso de los routers y algunos protocolos de enrutamiento la usan para indicar qué bits de una dirección pueden variar.",
      },
      {
        question: "¿Se siguen usando las clases de direcciones A, B y C?",
        answer:
          "No para el enrutamiento. El direccionamiento sin clases (CIDR) las sustituyó en los años noventa, así que cualquier longitud de prefijo puede usarse con cualquier dirección. La clase se muestra solo porque el material antiguo y algunos exámenes aún la mencionan.",
      },
    ],
    sourcesUsedFor: [
      "Los tres bloques IPv4 privados 10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16.",
      "El tratamiento de las dos direcciones de una red /31 como utilizables, sin difusión dirigida.",
      "La notación de longitud de prefijo (CIDR), que sustituyó a las clases de direcciones históricas.",
      "Los demás bloques de uso especial, como las direcciones de loopback, de enlace local, compartidas y de documentación.",
    ],
  },
  text: {
    address: "Dirección IPv4",
    addressHelp:
      "Cuatro números de 0 a 255 separados por puntos, como 192.168.1.10. Puedes añadir la longitud del prefijo tras una barra, como 192.168.1.10/24.",
    maskType: "Indicar el tamaño de la red como",
    maskTypes: { prefix: "Longitud de prefijo (CIDR)", mask: "Máscara de subred" },
    prefix: "Longitud del prefijo",
    mask: "Máscara de subred",
    maskHelp: "En notación con puntos, como 255.255.255.0. Los bits a 1 deben ser contiguos desde la izquierda.",
    errors: {
      address: "Introduce una dirección IPv4 como cuatro números de 0 a 255 separados por puntos, como 192.168.1.10.",
      octet: "Cada parte de la dirección debe ser un número entero de 0 a 255; «{octet}» no lo es.",
      leadingZero: "Escribe «{octet}» sin ceros a la izquierda. Algunos sistemas leen los ceros a la izquierda como octal.",
      prefix: "La longitud del prefijo tras la barra debe ser un número entero de 0 a 32.",
      mask: "Introduce una máscara de subred como cuatro números de 0 a 255 separados por puntos, como 255.255.255.0.",
      maskContiguous:
        "Esta máscara no es válida: todos sus bits a 1 deben ir antes que sus bits a 0 (por ejemplo, 255.255.240.0, no 255.0.255.0).",
    },
    network: "Dirección de red",
    caption: "{address} en una red /{prefix}.",
    cidr: "Red en notación CIDR",
    broadcast: "Dirección de difusión (broadcast)",
    broadcastNone: "Ninguna (sin difusión dirigida con esta longitud de prefijo)",
    firstHost: "Primer host utilizable",
    lastHost: "Último host utilizable",
    usableHosts: "Direcciones de host utilizables",
    totalAddresses: "Total de direcciones de la red",
    subnetMask: "Máscara de subred",
    wildcard: "Máscara wildcard",
    prefixLength: "Longitud del prefijo",
    binaryMask: "Máscara de subred en binario",
    addressClass: "Clase de dirección histórica",
    classes: {
      A: "Clase A",
      B: "Clase B",
      C: "Clase C",
      D: "Clase D (multidifusión)",
      E: "Clase E (reservada)",
    },
    scope: "Tipo de dirección",
    scopes: {
      private: "Privada (RFC 1918)",
      public: "Pública (enrutable globalmente)",
      loopback: "Loopback (127.0.0.0/8)",
      linkLocal: "Enlace local (169.254.0.0/16)",
      shared: "Espacio de direcciones compartido para NAT de operador (100.64.0.0/10)",
      thisNetwork: "«Esta red» (0.0.0.0/8)",
      documentation: "Reservada para documentación",
      benchmarking: "Reservada para pruebas de rendimiento de redes (198.18.0.0/15)",
      ietf: "Asignaciones de protocolos del IETF (192.0.0.0/24)",
      multicast: "Multidifusión (224.0.0.0/4)",
      reserved: "Reservada (240.0.0.0/4)",
      broadcast: "Difusión limitada (255.255.255.255)",
    },
    notes: {
      slashUsed: "Se ha usado la longitud de prefijo escrita tras la barra en la dirección.",
      p31: "Una red /31 no tiene dirección de red ni de difusión: ambas direcciones pueden usarse en un enlace punto a punto (RFC 3021).",
      p32: "Un /32 describe una única dirección de host.",
      classful: "Las clases de direcciones son históricas. Desde CIDR (RFC 4632), el tamaño de la red lo fija únicamente la longitud del prefijo.",
      private:
        "Las direcciones privadas pueden usarse libremente dentro de una red, pero no se enrutan en internet; normalmente acceden a ella mediante NAT.",
    },
  },
};

export default es;
