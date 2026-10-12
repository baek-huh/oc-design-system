import * as React from 'react';
export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
  hierarchy?: "hierarchy-1" | "hierarchy-2" | "hierarchy-4" | "hierarchy-3";
  margin?: "24px" | "0px" | "12px" | "8px";
}
export declare const Divider: React.FC<DividerProps>;
export default Divider;
