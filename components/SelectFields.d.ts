import * as React from 'react';
export interface SelectFieldsProps {
  className?: string;
  style?: React.CSSProperties;
  showLabel?: boolean;
  state?: "default" | "hover" | "disabled" | "filled" | "error";
  size?: "md" | "lg";
  content?: "filledtext" | "filledtag";
  showHelptext?: boolean;
  /** Text content; defaults to "텍스트". */
  text1?: string;
  /** Text content; defaults to "헬프 텍스트가 이곳에 표기됩니다.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const SelectFields: React.FC<SelectFieldsProps>;
export default SelectFields;
