import * as React from 'react';
export interface DisclosureProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "down" | "up";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Disclosure: React.FC<DisclosureProps>;
export default Disclosure;
