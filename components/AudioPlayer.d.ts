import * as React from 'react';
export interface AudioPlayerProps {
  className?: string;
  style?: React.CSSProperties;
  mode?: "dark";
  size?: "total";
  state?: "pause" | "play";
  /** Text content; defaults to "00 : 00". */
  text1?: string;
  /** Text content; defaults to "10 : 24". */
  text2?: string;
  /** Text content; defaults to "1.0x". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const AudioPlayer: React.FC<AudioPlayerProps>;
export default AudioPlayer;
