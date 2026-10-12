import { IconIcStar } from './IconIcStar.jsx';
import { IconIcX } from './IconIcX.jsx';

// figma node: 727:3240 tag/gray/medium/false/light
export function TagGrayMediumFalseLight(_p = {}) {
  const props = { ..._p, showIcon: _p.showIcon ?? false, showClose: _p.showClose ?? false };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--gray-50)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "4px 7px 4px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showIcon && (
      <div style={{
          position: "relative",
          width: 12,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--gray-600)",
        }}>{props.icon1 ?? <IconIcStar fill={false} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "var(--gray-600)",
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
            color: "var(--gray-600)",
          }}>{props.icon2 ?? <IconIcX />}</div>
      </div>
      )}
    </div>
  );
}
export default TagGrayMediumFalseLight;
