import * as React from 'react';
export interface StatusBarIPadProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  background?: boolean;
  showBG?: boolean;
  time?: string;
  date?: string;
  /** Text content; defaults to "100%". */
  text1?: string;
}
export declare const StatusBarIPad: React.FC<StatusBarIPadProps>;
export default StatusBarIPad;
