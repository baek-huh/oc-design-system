import { ItemBottomNavigation } from './ItemBottomNavigation.jsx';

// figma node: 4472:3598 BottomNavigation (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function BottomNavigation(_p = {}) {
  const props = { ..._p, type: _p.type ?? "5" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 390,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 390,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 390,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 20px 0px 20px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
      <ItemBottomNavigation
        style={{
          position: "relative",
          width: 78,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
      />
    </div>
  );
  const __impls = {
    // figma: Type=5
    "type=5": __body0,
    // figma: Type=4
    "type=4": __body1,
    // figma: Type=3
    "type=3": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default BottomNavigation;
