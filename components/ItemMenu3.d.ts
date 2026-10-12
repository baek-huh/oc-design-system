import * as React from 'react';
export interface ItemMenu3Props {
  className?: string;
  style?: React.CSSProperties;
  item?: "guide" | "page" | "solution" | "quiz-paper" | "listening" | "setting";
  select?: boolean;
  /** Text content; defaults to "페이지". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ItemMenu3: React.FC<ItemMenu3Props>;
export default ItemMenu3;
