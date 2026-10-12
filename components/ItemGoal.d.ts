import * as React from 'react';
export interface ItemGoalProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "초/중/고/n수" | "취업/자격증";
  /** Text content; defaults to "서울대학교 디자인학과 26학번". */
  text1?: string;
}
export declare const ItemGoal: React.FC<ItemGoalProps>;
export default ItemGoal;
