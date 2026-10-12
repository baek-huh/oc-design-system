import * as React from 'react';
export interface ProgressIndicatorTrackerProps {
  className?: string;
  style?: React.CSSProperties;
  itemLeft?: boolean;
  itemRight?: boolean;
  suffixPrefix?: boolean;
  itemTop?: boolean;
  itemBottom?: boolean;
  itemMiddle?: boolean;
}
export declare const ProgressIndicatorTracker: React.FC<ProgressIndicatorTrackerProps>;
export default ProgressIndicatorTracker;
