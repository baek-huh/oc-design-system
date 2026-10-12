import * as React from 'react';
export interface BadgeNumberProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "secondary" | "critical";
  size?: "sm" | "md" | "lg" | "xl";
  border?: boolean;
  /** Text content; defaults to "99+". */
  text1?: string;
}
export declare const BadgeNumber: React.FC<BadgeNumberProps>;
export default BadgeNumber;
