import * as React from 'react';
export interface TutorialPopupProps {
  className?: string;
  style?: React.CSSProperties;
  control?: boolean;
  button?: "single" | "multi";
  /** Text content; defaults to "튜토리얼 타이틀". */
  text1?: string;
  /** Text content; defaults to "튜토리얼 컨텐츠". */
  text2?: string;
  /** Text content; defaults to "1 / 3". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const TutorialPopup: React.FC<TutorialPopupProps>;
export default TutorialPopup;
