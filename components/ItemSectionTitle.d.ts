import * as React from 'react';
export interface ItemSectionTitleProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "섹션 타이틀". */
  text1?: string;
}
export declare const ItemSectionTitle: React.FC<ItemSectionTitleProps>;
export default ItemSectionTitle;
