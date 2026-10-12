import * as React from 'react';
export interface DropFieldFileItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hyperlink" | "loading" | "upload" | "disabled" | "error";
  caption?: boolean;
  /** Text content; defaults to "document.pdf". */
  text1?: string;
  /** Text content; defaults to "Caption". */
  text2?: string;
  /** Text content; defaults to "에러 메세지가 이곳에 표기됩니다.". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const DropFieldFileItem: React.FC<DropFieldFileItemProps>;
export default DropFieldFileItem;
