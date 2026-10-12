import * as React from 'react';
export interface BadgeDotProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "critical" | "primary" | "badge";
  size?: "lg" | "md" | "sm" | "xl" | "xs";
  border?: boolean;
}
export declare const BadgeDot: React.FC<BadgeDotProps>;
export default BadgeDot;
