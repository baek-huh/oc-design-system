import * as React from 'react';
export interface InteractionKitProps {
  className?: string;
  style?: React.CSSProperties;
  page?: boolean;
  solution?: boolean;
  quizPaper?: boolean;
  listening?: boolean;
  setting?: boolean;
  guide?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const InteractionKit: React.FC<InteractionKitProps>;
export default InteractionKit;
