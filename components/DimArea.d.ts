import * as React from 'react';
export interface DimAreaProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "mobile" | "tablet" | "pc";
}
export declare const DimArea: React.FC<DimAreaProps>;
export default DimArea;
