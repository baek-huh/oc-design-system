import * as React from 'react';
export interface ItemPlanProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "done" | "plus" | "holiday" | "etc";
  size?: "default" | "sm";
  /** Text content; defaults to "공부 계획". */
  text1?: string;
}
export declare const ItemPlan: React.FC<ItemPlanProps>;
export default ItemPlan;
