import * as React from 'react';
export interface CheckListRadioProps {
  className?: string;
  style?: React.CSSProperties;
  orientation?: "horizontal" | "vertical";
  description?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const CheckListRadio: React.FC<CheckListRadioProps>;
export default CheckListRadio;
