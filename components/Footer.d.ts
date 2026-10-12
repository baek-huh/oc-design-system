import * as React from 'react';
export interface FooterProps {
  className?: string;
  style?: React.CSSProperties;
  domain?: "slash" | "store";
  /** Text content; defaults to "(주)OC". */
  text1?: string;
  /** Text content; defaults to "사업자등록번호: 000-00-00000". */
  text2?: string;
  /** Text content; defaults to "개인정보 처리방침". */
  text3?: string;
  /** Text content; defaults to "서비스 이용약관". */
  text4?: string;
}
export declare const Footer: React.FC<FooterProps>;
export default Footer;
