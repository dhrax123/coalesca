import type { CSSProperties } from "react";
/** Pass CSS custom properties (e.g. --rx) in a style prop with types intact. */
export const v = (o: Record<string, string | number>) => o as CSSProperties;
