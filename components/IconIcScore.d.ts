import * as React from 'react';
export interface IconIcScoreProps {
  className?: string;
  style?: React.CSSProperties;
  score?: "correct" | "no-gauge" | "wait" | "wrong";
}
export declare const IconIcScore: React.FC<IconIcScoreProps>;
export default IconIcScore;
