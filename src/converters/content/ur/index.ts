import type { ConverterContent } from "../../types";
import { commonContent } from "./common";
import { engineeringContent } from "./engineering";
import { heatContent } from "./heat";
import { fluidsContent } from "./fluids";
import { lightContent } from "./light";
import { electricityContent } from "./electricity";
import { magnetismContent } from "./magnetism";
import { radiologyContent } from "./radiology";
import { otherContent } from "./other";

/**
 * Converter page content in this language, keyed by converter id. A converter
 * is published in this language only when its entry exists here and names
 * every unit.
 */
export const content: Record<string, ConverterContent> = {
  ...commonContent,
  ...engineeringContent,
  ...heatContent,
  ...fluidsContent,
  ...lightContent,
  ...electricityContent,
  ...magnetismContent,
  ...radiologyContent,
  ...otherContent,
};
