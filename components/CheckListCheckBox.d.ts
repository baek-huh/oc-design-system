import * as React from 'react';
export interface CheckListCheckBoxProps {
  className?: string;
  style?: React.CSSProperties;
  stack?: "horizontal" | "vertical";
  description?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const CheckListCheckBox: React.FC<CheckListCheckBoxProps>;
export default CheckListCheckBox;
