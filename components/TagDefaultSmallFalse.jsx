import { IconIcStar } from './IconIcStar.jsx';
import { IconIcX } from './IconIcX.jsx';

// figma node: 727:3219 Tag/Default/Small/False
export function TagDefaultSmallFalse(_p = {}) {
  const props = { ..._p, showlcon: _p.showlcon ?? false, showClose: _p.showClose ?? false };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "2px 4px 2px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showlcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "rgb(97,97,97)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
      {props.showClose && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 12,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
}
export default TagDefaultSmallFalse;
