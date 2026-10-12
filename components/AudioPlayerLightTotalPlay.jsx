import { IconIcFastForward10seconds } from './IconIcFastForward10seconds.jsx';
import { IconIcPlay } from './IconIcPlay.jsx';
import { IconIcRewind10seconds } from './IconIcRewind10seconds.jsx';
import { IconIcStop } from './IconIcStop.jsx';

// figma node: 6369:3306 AudioPlayer/Light/Total/Play
export function AudioPlayerLightTotalPlay(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 553,
      borderRadius: 60,
      backgroundColor: "rgba(245,245,245,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 24px 8px 24px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconIcPlay fill={true} />}</div>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <IconIcStop fill={true} />}</div>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <IconIcRewind10seconds />}</div>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <IconIcFastForward10seconds />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "00 : 00"}</span>
        <div style={{
          position: "relative",
          borderRadius: 2,
          display: "flex",
          flexDirection: "row",
          gap: 40,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <svg height={2} viewBox="0 0 266 2" fill="none" style={{
            position: "relative",
            height: 2,
            overflow: "hidden",
            borderRadius: 2,
            flexGrow: 1,
            color: "rgb(117,117,117)",
          }}>
            <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 265 0 C 265.552 0 266 0.448 266 1 L 266 1 C 266 1.552 265.552 2 265 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          textAlign: "right",
          lineHeight: "18px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "10 : 24"}</span>
      </div>
      <div style={{
        position: "relative",
        width: 1,
        height: 12,
        borderRadius: 1,
        backgroundColor: "rgb(117,117,117)",
        flexShrink: 0,
      }} />
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text3 ?? "1.0x"}</span>
    </div>
  );
}
export default AudioPlayerLightTotalPlay;
