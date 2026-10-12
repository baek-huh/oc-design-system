import { PopoverHeaderLeftButton } from './PopoverHeaderLeftButton.jsx';
import { PopoverHeaderRightButton } from './PopoverHeaderRightButton.jsx';

// figma node: 7713:866 Popover/header
export function PopoverHeader(_p = {}) {
  const props = { ..._p, showLeftButton: _p.showLeftButton ?? true, showRightButton: _p.showRightButton ?? true };
  return (
    <div className={props.className} style={{
      width: 340,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 14px 12px 14px",
      justifyContent: "center",
      alignItems: "flex-start",
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
        {props.showLeftButton && (
        <div style={{
            position: "relative",
            width: 25,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <PopoverHeaderLeftButton button={"text"} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          textAlign: "center",
          lineHeight: "20px",
          color: "rgb(33,33,33)",
          flexGrow: 1,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "타이틀"}</span>
        {props.showRightButton && (
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <PopoverHeaderRightButton button={"icon"} />}</div>
        )}
      </div>
    </div>
  );
}
export default PopoverHeader;
