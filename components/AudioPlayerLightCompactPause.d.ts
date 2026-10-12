import * as React from 'react';
export interface AudioPlayerLightCompactPauseProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "정지". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const AudioPlayerLightCompactPause: React.FC<AudioPlayerLightCompactPauseProps>;
export default AudioPlayerLightCompactPause;
