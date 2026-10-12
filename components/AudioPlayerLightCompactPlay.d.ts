import * as React from 'react';
export interface AudioPlayerLightCompactPlayProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "전체 듣기". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const AudioPlayerLightCompactPlay: React.FC<AudioPlayerLightCompactPlayProps>;
export default AudioPlayerLightCompactPlay;
