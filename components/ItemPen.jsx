// figma node: 5591:1173 item/pen (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "thinkness=" + __venc(p.thinkness) + '|' + "select=" + __venc(p.select);

export function ItemPen(_p = {}) {
  const props = { ..._p, thinkness: _p.thinkness ?? "1mm", select: _p.select ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 18,
        height: 1,
        borderRadius: 9999,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 18,
        height: 3,
        borderRadius: 9999,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 18,
        height: 6,
        borderRadius: 9999,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 18,
        height: 1,
        borderRadius: 9999,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 18,
        height: 3,
        borderRadius: 9999,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 18,
        height: 6,
        borderRadius: 9999,
        backgroundColor: "rgb(33,33,33)",
        flexShrink: 0,
      }} />
    </div>
  );
  const __impls = {
    // figma: thinkness=1mm, select=false
    "thinkness=1mm|select=false": __body0,
    // figma: thinkness=3mm, select=false
    "thinkness=3mm|select=false": __body1,
    // figma: thinkness=6mm, select=false
    "thinkness=6mm|select=false": __body2,
    // figma: thinkness=1mm, select=true
    "thinkness=1mm|select=true": __body3,
    // figma: thinkness=3mm, select=true
    "thinkness=3mm|select=true": __body4,
    // figma: thinkness=6mm, select=true
    "thinkness=6mm|select=true": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemPen;
