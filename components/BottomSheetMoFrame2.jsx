import { ItemBottomSheetTitle } from './ItemBottomSheetTitle.jsx';

// figma node: 6057:1613 BottomSheet(Mo)/Frame 2
export function BottomSheetMoFrame2(_p = {}) {
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
        top: 0,
        width: 390,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "12px 0px 6px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 46,
          height: 4,
          borderRadius: 4,
          backgroundColor: "rgb(238,238,238)",
          flexShrink: 0,
        }} />
      </div>
    </div>
  );
}
export default BottomSheetMoFrame2;
