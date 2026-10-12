import * as React from 'react';
export interface AudioPlayerDarkCompactPauseProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "정지". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const AudioPlayerDarkCompactPause: React.FC<AudioPlayerDarkCompactPauseProps>;
export default AudioPlayerDarkCompactPause;
