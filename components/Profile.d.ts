import * as React from 'react';
export interface ProfileProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  stack?: "horizontal" | "vertical";
  style2?: "label" | "label ➡️option" | "label ⬇️option";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Profile: React.FC<ProfileProps>;
export default Profile;
