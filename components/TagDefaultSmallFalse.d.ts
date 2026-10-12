import * as React from 'react';
export interface TagDefaultSmallFalseProps {
  className?: string;
  style?: React.CSSProperties;
  showlcon?: boolean;
  showClose?: boolean;
  /** Text content; defaults to "태그". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const TagDefaultSmallFalse: React.FC<TagDefaultSmallFalseProps>;
export default TagDefaultSmallFalse;
