import * as React from 'react';
export interface Disclosure2Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "down" | "up";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Disclosure2: React.FC<Disclosure2Props>;
export default Disclosure2;
