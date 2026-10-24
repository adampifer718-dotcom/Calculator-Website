import { defineCalculator } from "@/calculators/framework/types";
import text from "./text/en";
import { translations } from "./translations";
import { subnetEngine, makeSubnetEngine } from "./engine";

export const subnet = defineCalculator({
  id: "subnet",
  slug: "subnet-calculator",
  status: "published",
  title: "IP Subnet Calculator",
  shortTitle: "IP Subnet",
  category: "other",
  collections: ["software-data"],
  summary: "Find the network and broadcast addresses, usable host range, masks and address type of any IPv4 address and prefix.",
  metaTitle: "IP Subnet Calculator – IPv4 CIDR, Mask and Host Range",
  metaDescription: "Enter an IPv4 address with a CIDR prefix or subnet mask to get the network, broadcast, first and last host, usable hosts and wildcard mask.",
  keywords: ["subnet calculator", "ip subnet calculator", "cidr calculator", "ipv4 subnet", "subnet mask", "wildcard mask", "network address", "broadcast address", "usable hosts"],
  addedOn: "2026-10-24",
  sources: [
    {
      title: "RFC 1918: Address Allocation for Private Internets",
      publisher: "Internet Engineering Task Force (IETF), RFC Editor",
      url: "https://www.rfc-editor.org/rfc/rfc1918",
      usedFor: "The three private IPv4 blocks 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16.",
    },
    {
      title: "RFC 3021: Using 31-Bit Prefixes on IPv4 Point-to-Point Links",
      publisher: "Internet Engineering Task Force (IETF), RFC Editor",
      url: "https://www.rfc-editor.org/rfc/rfc3021",
      usedFor: "Treating both addresses of a /31 network as usable, with no directed broadcast.",
    },
    {
      title: "RFC 4632: Classless Inter-domain Routing (CIDR)",
      publisher: "Internet Engineering Task Force (IETF), RFC Editor",
      url: "https://rfc-editor.org/rfc/rfc4632",
      usedFor: "Prefix-length (CIDR) notation, which replaced the historical address classes.",
    },
    {
      title: "RFC 6890: Special-Purpose IP Address Registries",
      publisher: "Internet Engineering Task Force (IETF), RFC Editor",
      url: "https://www.rfc-editor.org/rfc/rfc6890",
      usedFor: "The other special-use blocks, such as loopback, link-local, shared and documentation addresses.",
    },
  ],
  intro: [
    "An IPv4 address is a 32-bit number written as four parts from 0 to 255. The prefix length, such as /24, says how many of those bits name the network; the rest number the hosts inside it. A subnet mask such as 255.255.255.0 is the same information written as an address.",
    "This calculator takes an address and a prefix or mask and works out the network address, the broadcast address, the range of host addresses you can assign, and how many there are. It also shows the wildcard mask used in access lists and router configurations, and whether the address is private, public or special-use.",
  ],
  howToUse: [
    "Type an IPv4 address, for example 192.168.1.10. You may add the prefix after a slash, such as 192.168.1.10/24.",
    "If you did not type a slash, choose a prefix length or switch to subnet mask and type the mask.",
    "Read the network address, then the broadcast address, host range, number of usable hosts and masks.",
  ],
  formulas: [
    { title: "Subnet mask", expression: "mask = 2³² − 2³²⁻ᵖ", explanation: "p is the prefix length: the first p bits are 1 and the rest are 0. For /24 this is 255.255.255.0." },
    { title: "Network and broadcast", expression: "network = address AND mask; broadcast = network OR wildcard", explanation: "The wildcard mask is the mask with every bit flipped (NOT mask), for example 0.0.0.255 for /24." },
    { title: "Usable hosts", expression: "hosts = 2³²⁻ᵖ − 2", explanation: "The network and broadcast addresses cannot be given to hosts. A /31 point-to-point link has 2 usable addresses (RFC 3021) and a /32 has 1." },
  ],
  examples: [
    {
      title: "Home network: 192.168.1.10/24",
      inputs: { address: "192.168.1.10/24", maskType: "prefix", prefix: "24", mask: "255.255.255.0" },
      steps: [
        "Mask for /24 = 255.255.255.0, wildcard = 0.0.0.255",
        "Network = 192.168.1.10 AND 255.255.255.0 = 192.168.1.0; broadcast = 192.168.1.255",
        "Usable hosts = 2⁸ − 2 = 254, from 192.168.1.1 to 192.168.1.254; the address is private (RFC 1918)",
      ],
      expectedPrimary: "192.168.1.0",
    },
    {
      title: "10.45.200.17 with mask 255.255.240.0",
      inputs: { address: "10.45.200.17", maskType: "mask", prefix: "24", mask: "255.255.240.0" },
      steps: [
        "255.255.240.0 has 8 + 8 + 4 = 20 one bits, so the prefix is /20",
        "Third part: 200 AND 240 = 192, so the network is 10.45.192.0 and the broadcast 10.45.207.255",
        "Usable hosts = 2¹² − 2 = 4,094, from 10.45.192.1 to 10.45.207.254",
      ],
      expectedPrimary: "10.45.192.0",
    },
    {
      title: "Small office block: 172.20.5.130/27",
      inputs: { address: "172.20.5.130", maskType: "prefix", prefix: "27", mask: "255.255.255.0" },
      steps: [
        "Mask for /27 = 255.255.255.224, so blocks of 32 addresses",
        "130 AND 224 = 128, so the network is 172.20.5.128 and the broadcast 172.20.5.159",
        "Usable hosts = 2⁵ − 2 = 30, from 172.20.5.129 to 172.20.5.158",
      ],
      expectedPrimary: "172.20.5.128",
    },
  ],
  assumptions: [
    "IPv4 only. IPv6 addresses are not accepted.",
    "Address parts must be written in plain decimal without leading zeros, because some systems read a part such as 010 as octal.",
    "The private and special-use labels describe the address you typed, using the IANA special-purpose blocks. Whether it is reachable also depends on your network's routing and firewalls.",
  ],
  faqs: [
    { question: "Why are two addresses subtracted from the host count?", answer: "In an ordinary subnet the first address identifies the network itself and the last is the broadcast address that reaches every host. Neither can be assigned to a device, so a /24 has 256 addresses but 254 usable hosts." },
    { question: "What is a wildcard mask?", answer: "It is the subnet mask with every bit inverted: 255.255.255.0 becomes 0.0.0.255. Router access lists and some routing protocols use it to say which bits of an address may vary." },
    { question: "Are address classes A, B and C still used?", answer: "Not for routing. Classless addressing (CIDR) replaced them in the 1990s, so any prefix length can be used with any address. The class is shown only because older material and some exams still refer to it." },
  ],
  related: ["download-time-calculator", "data-storage-converter", "permutations-combinations-calculator"],
  updated: "2026-10-24",
  engine: subnetEngine,
  text,
  makeEngine: makeSubnetEngine,
  translations,
});
