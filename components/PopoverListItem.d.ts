import * as React from 'react';
export interface PopoverListItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "disabled";
  showPrefixes?: boolean;
  showSuffixes?: boolean;
  description?: boolean;
  /** Text content; defaults to "팝오버 메뉴". */
  text1?: string;
  /** Text content; defaults to "디스크립션을 적어줍니다.". */
  text2?: string;
}
export declare const PopoverListItem: React.FC<PopoverListItemProps>;
export default PopoverListItem;
