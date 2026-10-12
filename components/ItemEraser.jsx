// figma node: 5591:1199 item/eraser (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "select=" + __venc(p.select);

export function ItemEraser(_p = {}) {
  const props = { ..._p, size: _p.size ?? "52mm", select: _p.select ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 28,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 28,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
        boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 80,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 28,
        borderRadius: "50%",
        backgroundColor: "rgb(33,33,33)",
        boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
        boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 80,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 40,
        borderRadius: "50%",
        backgroundColor: "rgb(33,33,33)",
        boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 52,
      height: 52,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 52,
        height: 52,
        borderRadius: "50%",
        backgroundColor: "rgb(217,217,217)",
        boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 80,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 52,
        borderRadius: "50%",
        backgroundColor: "rgb(33,33,33)",
        boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __impls = {
    // figma: size=28mm, select=false
    "size=28mm|select=false": __body0,
    // figma: size=28mm, select=true
    "size=28mm|select=true": __body1,
    // figma: size=40mm, select=false
    "size=40mm|select=false": __body2,
    // figma: size=40mm, select=true
    "size=40mm|select=true": __body3,
    // figma: size=52mm, select=false
    "size=52mm|select=false": __body4,
    // figma: size=52mm, select=true
    "size=52mm|select=true": __body5,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default ItemEraser;
