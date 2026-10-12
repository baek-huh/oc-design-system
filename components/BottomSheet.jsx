import { ButtonArea } from './ButtonArea.jsx';
import { PopupTitle } from './PopupTitle.jsx';

// figma node: 8015:883 BottomSheet
export function BottomSheet(_p = {}) {
  const props = { ..._p, showButton: _p.showButton ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      height: 312,
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      flexDirection: "column",
      padding: "64px 0px 64px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 248,
        overflow: "hidden",
        borderRadius: "16px 16px 0px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PopupTitle style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <svg viewBox="0 0 390 100" fill="none" style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: "20px 20px 20px 20px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
          color: "rgb(253,228,255)",
        }}>
          <path d={"M 0 0 L 390 0 L 390 100 L 0 100 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        {props.showButton && (
        <ButtonArea
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          fullWidth={true}
          button={"single"}
        />
        )}
      </div>
    </div>
  );
}
export default BottomSheet;
