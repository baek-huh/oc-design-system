import * as React from 'react';
export interface BadgeIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "lg" | "xl";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const BadgeIcon: React.FC<BadgeIconProps>;
export default BadgeIcon;
