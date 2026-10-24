import { englishContext, fill, type EngineContext } from "@/calculators/framework/i18n";
import { defineEngine } from "@/calculators/framework/types";
import en, { type SubnetText } from "./text/en";

export type SubnetValues = { address: string; maskType: string; prefix: string; mask: string };

export type ParseIssue = { code: "address" } | { code: "octet"; octet: string } | { code: "leadingZero"; octet: string } | { code: "prefix" };

/** Parses dotted-quad text into an unsigned 32-bit number. */
export function parseIpv4(text: string): { ok: true; value: number } | { ok: false; issue: ParseIssue } {
  const parts = text.trim().split(".");
  if (parts.length !== 4 || parts.some((p) => p === "")) return { ok: false, issue: { code: "address" } };
  let value = 0;
  for (const part of parts) {
    if (!/^\d+$/.test(part)) return { ok: false, issue: { code: "address" } };
    if (part.length > 1 && part.startsWith("0")) return { ok: false, issue: { code: "leadingZero", octet: part } };
    const octet = Number(part);
    if (octet > 255) return { ok: false, issue: { code: "octet", octet: part } };
    value = (value * 256 + octet) >>> 0;
  }
  return { ok: true, value };
}

/** Splits "a.b.c.d/nn" into the address and an optional prefix length. */
export function parseCidr(text: string): { ok: true; value: number; prefix: number | null } | { ok: false; issue: ParseIssue } {
  const [addressText, prefixText, extra] = text.trim().split("/");
  if (extra !== undefined) return { ok: false, issue: { code: "prefix" } };
  const address = parseIpv4(addressText);
  if (!address.ok) return address;
  if (prefixText === undefined) return { ok: true, value: address.value, prefix: null };
  const trimmed = prefixText.trim();
  if (!/^\d{1,2}$/.test(trimmed) || Number(trimmed) > 32) return { ok: false, issue: { code: "prefix" } };
  return { ok: true, value: address.value, prefix: Number(trimmed) };
}

/** Subnet mask for a prefix length, as an unsigned 32-bit number. */
export function maskFromPrefix(prefix: number): number {
  return prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
}

/** Prefix length of a contiguous mask, or null if the mask's 1 bits are not contiguous. */
export function prefixFromMask(mask: number): number | null {
  const inverted = ~mask >>> 0;
  // A contiguous mask inverts to 2ᵏ − 1, so inverted + 1 is a power of two.
  if ((inverted & (inverted + 1)) !== 0) return null;
  let prefix = 0;
  while (prefix < 32 && ((mask >>> (31 - prefix)) & 1) === 1) prefix++;
  return prefix;
}

export function formatIpv4(value: number): string {
  const v = value >>> 0;
  return [v >>> 24, (v >>> 16) & 255, (v >>> 8) & 255, v & 255].join(".");
}

export interface SubnetInfo {
  network: number;
  broadcast: number | null;
  firstHost: number;
  lastHost: number;
  usableHosts: number;
  totalAddresses: number;
  mask: number;
  wildcard: number;
}

/** Network facts for an address and prefix, using 32-bit unsigned math. /31 has 2 usable addresses (RFC 3021) and /32 one. */
export function subnetInfo(address: number, prefix: number): SubnetInfo {
  const mask = maskFromPrefix(prefix);
  const wildcard = ~mask >>> 0;
  const network = (address & mask) >>> 0;
  const last = (network | wildcard) >>> 0;
  const totalAddresses = 2 ** (32 - prefix);
  if (prefix === 32) return { network, broadcast: null, firstHost: network, lastHost: network, usableHosts: 1, totalAddresses, mask, wildcard };
  if (prefix === 31) return { network, broadcast: null, firstHost: network, lastHost: last, usableHosts: 2, totalAddresses, mask, wildcard };
  return { network, broadcast: last, firstHost: network + 1, lastHost: last - 1, usableHosts: totalAddresses - 2, totalAddresses, mask, wildcard };
}

export type AddressClass = "A" | "B" | "C" | "D" | "E";

/** Historical classful class from the first octet. */
export function addressClass(address: number): AddressClass {
  const first = address >>> 24;
  if (first < 128) return "A";
  if (first < 192) return "B";
  if (first < 224) return "C";
  if (first < 240) return "D";
  return "E";
}

export type Scope =
  | "private"
  | "public"
  | "loopback"
  | "linkLocal"
  | "shared"
  | "thisNetwork"
  | "documentation"
  | "benchmarking"
  | "ietf"
  | "multicast"
  | "reserved"
  | "broadcast";

/** Special-use blocks (RFC 1918 private space and other blocks in the IANA special-purpose registry, RFC 6890). */
const SPECIAL_BLOCKS: readonly [string, number, Scope][] = [
  ["255.255.255.255", 32, "broadcast"],
  ["0.0.0.0", 8, "thisNetwork"],
  ["10.0.0.0", 8, "private"],
  ["100.64.0.0", 10, "shared"],
  ["127.0.0.0", 8, "loopback"],
  ["169.254.0.0", 16, "linkLocal"],
  ["172.16.0.0", 12, "private"],
  ["192.0.0.0", 24, "ietf"],
  ["192.0.2.0", 24, "documentation"],
  ["192.168.0.0", 16, "private"],
  ["198.18.0.0", 15, "benchmarking"],
  ["198.51.100.0", 24, "documentation"],
  ["203.0.113.0", 24, "documentation"],
  ["224.0.0.0", 4, "multicast"],
  ["240.0.0.0", 4, "reserved"],
];

export function addressScope(address: number): Scope {
  for (const [base, prefix, scope] of SPECIAL_BLOCKS) {
    const parsed = parseIpv4(base);
    if (parsed.ok && ((address & maskFromPrefix(prefix)) >>> 0) === parsed.value) return scope;
  }
  return "public";
}

const binary = (value: number) =>
  (value >>> 0)
    .toString(2)
    .padStart(32, "0")
    .replace(/(.{8})(?!$)/g, "$1.");

export function makeSubnetEngine(ctx: EngineContext<SubnetText>) {
  const t = ctx.text;
  const issueText = (issue: ParseIssue): string => (issue.code === "octet" || issue.code === "leadingZero" ? fill(t.errors[issue.code], { octet: issue.octet }) : t.errors[issue.code]);
  const checkAddress = (text: string): string | undefined => {
    const parsed = parseCidr(text);
    return parsed.ok ? undefined : issueText(parsed.issue);
  };
  const checkMask = (text: string): string | undefined => {
    const parsed = parseIpv4(text);
    if (!parsed.ok) return t.errors.mask;
    return prefixFromMask(parsed.value) === null ? t.errors.maskContiguous : undefined;
  };
  const prefixes = Array.from({ length: 33 }, (_, p) => p);

  return defineEngine<SubnetValues>({
    locale: ctx.locale,
    fields: [
      { id: "address", type: "text", label: t.address, help: t.addressHelp, defaultValue: "192.168.1.10", check: checkAddress },
      {
        id: "maskType",
        type: "select",
        label: t.maskType,
        options: (["prefix", "mask"] as const).map((value) => ({ value, label: t.maskTypes[value] })),
        defaultValue: "prefix",
        display: "segmented",
      },
      {
        id: "prefix",
        type: "select",
        label: t.prefix,
        options: prefixes.map((p) => ({ value: String(p), label: `/${p} (${formatIpv4(maskFromPrefix(p))})` })),
        defaultValue: "24",
        visibleWhen: { field: "maskType", oneOf: ["prefix"] },
      },
      { id: "mask", type: "text", label: t.mask, help: t.maskHelp, defaultValue: "255.255.255.0", check: checkMask, visibleWhen: { field: "maskType", oneOf: ["mask"] } },
    ],
    compute: ({ address, maskType, prefix: prefixText, mask }) => {
      const parsed = parseCidr(address);
      const ip = parsed.ok ? parsed.value : 0;
      const slash = parsed.ok ? parsed.prefix : null;
      const maskValue = mask ? parseIpv4(mask) : null;
      const fromMask = maskType === "mask" && maskValue?.ok ? prefixFromMask(maskValue.value) : null;
      const prefix = slash ?? fromMask ?? Number(prefixText);
      const info = subnetInfo(ip, prefix);
      const scope = addressScope(ip);
      const notes = [
        slash !== null ? t.notes.slashUsed : "",
        prefix === 31 ? t.notes.p31 : "",
        prefix === 32 ? t.notes.p32 : "",
        scope === "private" ? t.notes.private : "",
        t.notes.classful,
      ].filter(Boolean);
      const text = (value: string) => ({ kind: "text" as const, text: value });
      return {
        primary: { label: t.network, value: text(formatIpv4(info.network)), caption: fill(t.caption, { address: formatIpv4(ip), prefix: String(prefix) }) },
        secondary: [
          { label: t.cidr, value: text(`${formatIpv4(info.network)}/${prefix}`) },
          { label: t.broadcast, value: text(info.broadcast === null ? t.broadcastNone : formatIpv4(info.broadcast)) },
          { label: t.firstHost, value: text(formatIpv4(info.firstHost)) },
          { label: t.lastHost, value: text(formatIpv4(info.lastHost)) },
          { label: t.usableHosts, value: { kind: "number", value: info.usableHosts, decimals: 0 } },
          { label: t.totalAddresses, value: { kind: "number", value: info.totalAddresses, decimals: 0 } },
          { label: t.subnetMask, value: text(formatIpv4(info.mask)) },
          { label: t.wildcard, value: text(formatIpv4(info.wildcard)) },
          { label: t.prefixLength, value: text(`/${prefix}`) },
          { label: t.binaryMask, value: text(binary(info.mask)) },
          { label: t.addressClass, value: text(t.classes[addressClass(ip)]) },
          { label: t.scope, value: text(t.scopes[scope]) },
        ],
        notes,
      };
    },
  });
}

export const subnetEngine = makeSubnetEngine(englishContext(en));
