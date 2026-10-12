import { BoxButtonPrimaryDefaultLargeNone } from './BoxButtonPrimaryDefaultLargeNone.jsx';
import { ItemBottomSheetTitle } from './ItemBottomSheetTitle.jsx';

// figma node: 6057:1614 BottomSheet(Mo)/Frame 3
export function BottomSheetMoFrame3(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 390,
      height: 390,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 7.600px 1px rgba(0,0,0,0.25)",
      position: "relative",
      ...props.style,
    }}>
      <ItemBottomSheetTitle
        style={{
          position: "absolute",
          left: 0,
          top: 22,
          width: 366,
        }}
        type={"default"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 302,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "20px 20px 20px 20px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <BoxButtonPrimaryDefaultLargeNone style={{ position: "relative", width: 350, flexShrink: 0 }} />
      </div>
    </div>
  );
}
export default BottomSheetMoFrame3;
