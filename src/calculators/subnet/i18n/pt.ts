import type { CalculatorTranslation } from "@/calculators/framework/types";
import type { SubnetText } from "../text/en";

const pt: CalculatorTranslation<SubnetText> = {
  content: {
    title: "Calculadora de sub-redes IP",
    shortTitle: "Sub-redes IP",
    summary: "Obtenha o endereço de rede e de broadcast, o intervalo de hosts utilizáveis, as máscaras e o tipo de endereço de qualquer endereço e prefixo IPv4.",
    metaTitle: "Calculadora de sub-redes IP – CIDR, máscara e hosts IPv4",
    metaDescription:
      "Introduza um endereço IPv4 com prefixo CIDR ou máscara de sub-rede e obtenha a rede, o broadcast, o primeiro e o último host, os hosts úteis e a wildcard.",
    keywords: ["calculadora de sub-redes", "sub-rede IP", "calculadora CIDR", "sub-rede IPv4", "máscara de sub-rede", "máscara wildcard", "endereço de rede", "endereço de broadcast"],
    intro: [
      "Um endereço IPv4 é um número de 32 bits escrito em quatro partes de 0 a 255. O comprimento do prefixo, como /24, indica quantos desses bits identificam a rede; os restantes numeram os hosts dentro dela. Uma máscara de sub-rede como 255.255.255.0 é a mesma informação escrita sob a forma de endereço.",
      "Esta calculadora recebe um endereço e um prefixo ou uma máscara e determina o endereço de rede, o endereço de broadcast, o intervalo de endereços de host que pode atribuir e quantos são. Mostra também a máscara wildcard usada em listas de acesso e configurações de routers, e se o endereço é privado, público ou de uso especial.",
    ],
    howToUse: [
      "Escreva um endereço IPv4, por exemplo 192.168.1.10. Pode acrescentar o prefixo depois de uma barra, como 192.168.1.10/24.",
      "Se não escreveu uma barra, escolha um comprimento de prefixo ou mude para máscara de sub-rede e escreva a máscara.",
      "Consulte o endereço de rede e, depois, o endereço de broadcast, o intervalo de hosts, o número de hosts utilizáveis e as máscaras.",
    ],
    formulas: [
      { title: "Máscara de sub-rede", expression: "máscara = 2³² − 2³²⁻ᵖ", explanation: "p é o comprimento do prefixo: os primeiros p bits são 1 e os restantes são 0. Para /24, dá 255.255.255.0." },
      { title: "Rede e broadcast", expression: "rede = endereço AND máscara; broadcast = rede OR wildcard", explanation: "A máscara wildcard é a máscara com todos os bits invertidos (NOT máscara), por exemplo 0.0.0.255 para /24." },
      { title: "Hosts utilizáveis", expression: "hosts = 2³²⁻ᵖ − 2", explanation: "Os endereços de rede e de broadcast não podem ser atribuídos a hosts. Uma ligação ponto a ponto /31 tem 2 endereços utilizáveis (RFC 3021) e uma /32 tem 1." },
    ],
    examples: [
      {
        title: "Rede doméstica: 192.168.1.10/24",
        steps: [
          "Máscara para /24 = 255.255.255.0, wildcard = 0.0.0.255",
          "Rede = 192.168.1.10 AND 255.255.255.0 = 192.168.1.0; broadcast = 192.168.1.255",
          "Hosts utilizáveis = 2⁸ − 2 = 254, de 192.168.1.1 a 192.168.1.254; o endereço é privado (RFC 1918)",
        ],
      },
      {
        title: "10.45.200.17 com a máscara 255.255.240.0",
        steps: [
          "255.255.240.0 tem 8 + 8 + 4 = 20 bits a 1, pelo que o prefixo é /20",
          "Terceira parte: 200 AND 240 = 192, pelo que a rede é 10.45.192.0 e o broadcast 10.45.207.255",
          "Hosts utilizáveis = 2¹² − 2 = 4094, de 10.45.192.1 a 10.45.207.254",
        ],
      },
      {
        title: "Bloco de um pequeno escritório: 172.20.5.130/27",
        steps: [
          "Máscara para /27 = 255.255.255.224, ou seja, blocos de 32 endereços",
          "130 AND 224 = 128, pelo que a rede é 172.20.5.128 e o broadcast 172.20.5.159",
          "Hosts utilizáveis = 2⁵ − 2 = 30, de 172.20.5.129 a 172.20.5.158",
        ],
      },
    ],
    assumptions: [
      "Apenas IPv4. Os endereços IPv6 não são aceites.",
      "As partes do endereço têm de ser escritas em decimal simples, sem zeros à esquerda, porque alguns sistemas leem uma parte como 010 em octal.",
      "As indicações de endereço privado e de uso especial descrevem o endereço que escreveu, com base nos blocos de uso especial da IANA. Se é alcançável depende também do encaminhamento e das firewalls da sua rede.",
    ],
    faqs: [
      { question: "Porque se subtraem dois endereços ao número de hosts?", answer: "Numa sub-rede normal, o primeiro endereço identifica a própria rede e o último é o endereço de broadcast, que chega a todos os hosts. Nenhum dos dois pode ser atribuído a um dispositivo, pelo que uma /24 tem 256 endereços mas 254 hosts utilizáveis." },
      { question: "O que é uma máscara wildcard?", answer: "É a máscara de sub-rede com todos os bits invertidos: 255.255.255.0 passa a 0.0.0.255. As listas de acesso dos routers e alguns protocolos de encaminhamento usam-na para indicar que bits de um endereço podem variar." },
      { question: "As classes de endereços A, B e C ainda se usam?", answer: "Não para o encaminhamento. O endereçamento sem classes (CIDR) substituiu-as nos anos 1990, pelo que qualquer comprimento de prefixo pode ser usado com qualquer endereço. A classe só é apresentada porque materiais mais antigos e alguns exames ainda a referem." },
    ],
    sourcesUsedFor: [
      "Os três blocos IPv4 privados 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16.",
      "O tratamento dos dois endereços de uma rede /31 como utilizáveis, sem broadcast dirigido.",
      "A notação de comprimento de prefixo (CIDR), que substituiu as antigas classes de endereços.",
      "Os restantes blocos de uso especial, como os endereços de loopback, link-local, partilhados e de documentação.",
    ],
  },
  text: {
    address: "Endereço IPv4",
    addressHelp: "Quatro números de 0 a 255 separados por pontos, como 192.168.1.10. Pode acrescentar o comprimento do prefixo depois de uma barra, como 192.168.1.10/24.",
    maskType: "Indicar a dimensão da rede como",
    maskTypes: { prefix: "Comprimento do prefixo (CIDR)", mask: "Máscara de sub-rede" },
    prefix: "Comprimento do prefixo",
    mask: "Máscara de sub-rede",
    maskHelp: "Em notação com pontos, como 255.255.255.0. Os bits a 1 têm de ser contíguos a partir da esquerda.",
    errors: {
      address: "Introduza um endereço IPv4 como quatro números de 0 a 255 separados por pontos, como 192.168.1.10.",
      octet: "Cada parte do endereço tem de ser um número inteiro de 0 a 255; «{octet}» não é.",
      leadingZero: "Escreva «{octet}» sem zeros à esquerda. Alguns sistemas leem os zeros à esquerda como octal.",
      prefix: "O comprimento do prefixo depois da barra tem de ser um número inteiro de 0 a 32.",
      mask: "Introduza uma máscara de sub-rede como quatro números de 0 a 255 separados por pontos, como 255.255.255.0.",
      maskContiguous: "Esta máscara não é válida: todos os bits a 1 têm de vir antes dos bits a 0 (por exemplo 255.255.240.0, e não 255.0.255.0).",
    },
    network: "Endereço de rede",
    caption: "{address} numa rede /{prefix}.",
    cidr: "Rede em notação CIDR",
    broadcast: "Endereço de broadcast",
    broadcastNone: "Nenhum (sem broadcast dirigido com este comprimento de prefixo)",
    firstHost: "Primeiro host utilizável",
    lastHost: "Último host utilizável",
    usableHosts: "Endereços de host utilizáveis",
    totalAddresses: "Total de endereços na rede",
    subnetMask: "Máscara de sub-rede",
    wildcard: "Máscara wildcard",
    prefixLength: "Comprimento do prefixo",
    binaryMask: "Máscara de sub-rede em binário",
    addressClass: "Classe de endereço histórica",
    classes: {
      A: "Classe A",
      B: "Classe B",
      C: "Classe C",
      D: "Classe D (multicast)",
      E: "Classe E (reservada)",
    },
    scope: "Tipo de endereço",
    scopes: {
      private: "Privado (RFC 1918)",
      public: "Público (encaminhável globalmente)",
      loopback: "Loopback (127.0.0.0/8)",
      linkLocal: "Link-local (169.254.0.0/16)",
      shared: "Espaço de endereços partilhado para CGNAT de operador (100.64.0.0/10)",
      thisNetwork: "«Esta rede» (0.0.0.0/8)",
      documentation: "Reservado para documentação",
      benchmarking: "Reservado para testes de desempenho de redes (198.18.0.0/15)",
      ietf: "Atribuições de protocolos do IETF (192.0.0.0/24)",
      multicast: "Multicast (224.0.0.0/4)",
      reserved: "Reservado (240.0.0.0/4)",
      broadcast: "Broadcast limitado (255.255.255.255)",
    },
    notes: {
      slashUsed: "Foi usado o comprimento do prefixo escrito depois da barra no endereço.",
      p31: "Uma rede /31 não tem endereço de rede nem de broadcast: os dois endereços podem ser usados numa ligação ponto a ponto (RFC 3021).",
      p32: "Uma /32 descreve um único endereço de host.",
      classful: "As classes de endereços são históricas. Desde o CIDR (RFC 4632), só o comprimento do prefixo define a dimensão da rede.",
      private: "Os endereços privados podem ser usados livremente dentro de uma rede, mas não são encaminhados na internet pública; normalmente chegam a ela através de NAT.",
    },
  },
};

export default pt;
