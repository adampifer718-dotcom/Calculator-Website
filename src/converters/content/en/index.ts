import type { ConverterContent, ConverterMeta } from "../../types";
import { commonContent } from "./common";
import { electricityContent } from "./electricity";
import { engineeringContent } from "./engineering";
import { fluidsContent } from "./fluids";
import { heatContent } from "./heat";
import { lightContent } from "./light";
import { magnetismContent } from "./magnetism";
import { otherContent } from "./other";
import { radiologyContent } from "./radiology";

/** English content and source metadata for every new converter, keyed by converter id. */
export const englishContent: Record<string, ConverterContent & ConverterMeta> = {
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
