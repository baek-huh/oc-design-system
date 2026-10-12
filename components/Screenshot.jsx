// figma node: 7641:3386 Screenshot (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "device=" + __venc(p.device);

export function Screenshot(_p = {}) {
  const props = { ..._p, device: _p.device ?? "pc" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 480,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-bb1067ee97fcf9d4" style={{
        position: "absolute",
        left: 36,
        top: 103,
        width: 703,
        height: 491,
        borderRadius: 12,
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 480,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-8119dbf5aac0081e" style={{
        position: "absolute",
        left: 66,
        top: 81,
        width: 268,
        height: 580,
        borderRadius: 24,
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 400,
      height: 480,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div className="fig-asset-7f12ea1300756f14" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 400,
        height: 480,
        borderRadius: 24,
      }} />
    </div>
  );
  const __impls = {
    // figma: Device=PC
    "device=pc": __body0,
    // figma: Device=MO
    "device=mo": __body1,
    // figma: Device=Full
    "device=full": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Screenshot;
