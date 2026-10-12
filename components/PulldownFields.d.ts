import * as React from 'react';
export interface PulldownFieldsProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "active" | "disabled" | "error" | "typed";
  size?: "sm" | "md";
  showLabel?: boolean;
  showHelptext?: boolean;
  /** Text content; defaults to "텍스트". */
  text1?: string;
  /** Text content; defaults to "헬프 텍스트가 이곳에 표기됩니다.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const PulldownFields: React.FC<PulldownFieldsProps>;
export default PulldownFields;
