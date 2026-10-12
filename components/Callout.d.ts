import * as React from 'react';
export interface CalloutProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "warning" | "tip";
  button?: boolean;
  style2?: "fill" | "outline";
  /** Text content; defaults to "주의사항". */
  text1?: string;
  /** Text content; defaults to "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Callout: React.FC<CalloutProps>;
export default Callout;
