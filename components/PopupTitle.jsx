import { IconButtonGhost } from './IconButtonGhost.jsx';
import { IconIcX } from './IconIcX.jsx';

// figma node: 7490:26552 Popup/Title
export function PopupTitle(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 602,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "14px 14px 14px 20px",
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
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 24,
          lineHeight: "36px",
          color: "rgb(33,33,33)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "타이틀"}</span>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconButtonGhost icon1={<IconIcX style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />} state={"default"} size={"md"} />}</div>
      </div>
    </div>
  );
}
export default PopupTitle;
