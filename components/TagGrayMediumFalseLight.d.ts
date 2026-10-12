import * as React from 'react';
export interface TagGrayMediumFalseLightProps {
  className?: string;
  style?: React.CSSProperties;
  showIcon?: boolean;
  showClose?: boolean;
  /** Text content; defaults to "태그". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const TagGrayMediumFalseLight: React.FC<TagGrayMediumFalseLightProps>;
export default TagGrayMediumFalseLight;
