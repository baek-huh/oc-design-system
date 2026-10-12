import * as React from 'react';
export interface ItemBottomSheetTitleProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "description";
  /** Text content; defaults to "타이틀". */
  text1?: string;
  /** Text content; defaults to "추가 설명이 필요할 경우 기재합니다.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemBottomSheetTitle: React.FC<ItemBottomSheetTitleProps>;
export default ItemBottomSheetTitle;
