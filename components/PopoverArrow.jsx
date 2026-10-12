// figma node: 7719:1278 Popover/Arrow (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "placement=" + __venc(p.placement);

export function PopoverArrow(_p = {}) {
  const props = { ..._p, placement: _p.placement ?? "bottom" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 12,
      position: "relative",
      color: "rgb(245,245,245)",
      ...props.style,
    }}>
      <svg width={28} height={12} viewBox="0 0 28 12" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 28,
        height: 12,
      }}>
        <path d={"M 14.845 0.121 C 15.363 0.273 15.849 0.566 16.245 1.004 L 25.02 10.684 C 25.781 11.523 26.865 12 28 12 L 0 12 C 1.135 12 2.219 11.523 2.98 10.684 L 11.755 1.004 C 12.339 0.359 13.12 0.023 13.906 0 C 13.969 0 14.029 0 14.092 0 C 14.345 0.008 14.6 0.047 14.845 0.121 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 28,
      height: 12,
      position: "relative",
      color: "rgb(245,245,245)",
      ...props.style,
    }}>
      <svg width={28} height={12} viewBox="0 0 28 12" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(-1,0,0,-1,28,12)",
        transformOrigin: "0 0",
        width: 28,
        height: 12,
      }}>
        <path d={"M 14.845 0.121 C 15.363 0.273 15.849 0.566 16.245 1.004 L 25.02 10.684 C 25.781 11.523 26.865 12 28 12 L 0 12 C 1.135 12 2.219 11.523 2.98 10.684 L 11.755 1.004 C 12.339 0.359 13.12 0.023 13.906 0 C 13.969 0 14.029 0 14.092 0 C 14.345 0.008 14.6 0.047 14.845 0.121 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 28,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(245,245,245)",
      ...props.style,
    }}>
      <svg width={28} height={12} viewBox="0 0 28 12" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,-1,1,0,0,28)",
        transformOrigin: "0 0",
        width: 28,
        height: 12,
      }}>
        <path d={"M 14.845 0.121 C 15.363 0.273 15.849 0.566 16.245 1.004 L 25.02 10.684 C 25.781 11.523 26.865 12 28 12 L 0 12 C 1.135 12 2.219 11.523 2.98 10.684 L 11.755 1.004 C 12.339 0.359 13.12 0.023 13.906 0 C 13.969 0 14.029 0 14.092 0 C 14.345 0.008 14.6 0.047 14.845 0.121 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(245,245,245)",
      ...props.style,
    }}>
      <svg width={28} height={12} viewBox="0 0 28 12" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,12,0)",
        transformOrigin: "0 0",
        width: 28,
        height: 12,
      }}>
        <path d={"M 14.845 0.121 C 15.363 0.273 15.849 0.566 16.245 1.004 L 25.02 10.684 C 25.781 11.523 26.865 12 28 12 L 0 12 C 1.135 12 2.219 11.523 2.98 10.684 L 11.755 1.004 C 12.339 0.359 13.12 0.023 13.906 0 C 13.969 0 14.029 0 14.092 0 C 14.345 0.008 14.6 0.047 14.845 0.121 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: Placement=Bottom
    "placement=bottom": __body0,
    // figma: Placement=Top
    "placement=top": __body1,
    // figma: Placement=Right
    "placement=right": __body2,
    // figma: Placement=Left
    "placement=left": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PopoverArrow;
