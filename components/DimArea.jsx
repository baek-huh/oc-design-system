// figma node: 6614:19 Dim Area (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function DimArea(_p = {}) {
  const props = { ..._p, size: _p.size ?? "mobile" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 390,
      height: 844,
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,0.6)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1194,
      height: 834,
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,0.6)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1920,
      height: 1080,
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,0.6)",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Size=Mobile
    "size=mobile": __body0,
    // figma: Size=Tablet
    "size=tablet": __body1,
    // figma: Size=PC
    "size=pc": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DimArea;
