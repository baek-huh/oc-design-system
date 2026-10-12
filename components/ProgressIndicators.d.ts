import * as React from 'react';
export interface ProgressIndicatorsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "4px" | "2px";
  color?: "primary" | "gray 700";
  gauge?: boolean;
}
export declare const ProgressIndicators: React.FC<ProgressIndicatorsProps>;
export default ProgressIndicators;
