import * as React from 'react';
export interface DropFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "disabled" | "drag" | "upload" | "loading";
  preview?: "false";
  /** Text content; defaults to "업로드할 이미지 또는 PDF를 첨부해주세요.\n최대 10MB까지 첨부할 수 있습니다.". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const DropField: React.FC<DropFieldProps>;
export default DropField;
