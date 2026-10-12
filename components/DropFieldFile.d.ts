import * as React from 'react';
export interface DropFieldFileProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "document.pdf". */
  text1?: string;
  /** Text content; defaults to "Caption". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const DropFieldFile: React.FC<DropFieldFileProps>;
export default DropFieldFile;
