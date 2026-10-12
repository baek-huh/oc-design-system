import { IconIcPlus } from './IconIcPlus.jsx';

// figma node: 453:1203 BoxButton/Primary/Default/Large/Right
export function BoxButtonPrimaryDefaultLargeRight(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      padding: "12px 14px 12px 16px",
      justifyContent: "center",
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
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(255,255,255)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "버튼"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcPlus style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
    </div>
  );
}
export default BoxButtonPrimaryDefaultLargeRight;
