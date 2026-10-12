// figma node: 10227:6174 icon/ic-email (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcEmail(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.500} height={13.500} viewBox="0 0 19.500 13.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 5.25,
        width: 19.5,
        height: 13.5,
      }}>
        <path d={"M 2.75 0 C 1.231 0 0 1.231 0 2.75 L 0 10.75 C 0 12.269 1.231 13.5 2.75 13.5 L 16.75 13.5 C 18.269 13.5 19.5 12.269 19.5 10.75 L 19.5 2.75 C 19.5 1.231 18.269 0 16.75 0 L 2.75 0 Z M 1.5 2.75 C 1.5 2.06 2.06 1.5 2.75 1.5 L 16.75 1.5 C 17.44 1.5 18 2.06 18 2.75 L 18 2.809 L 10.357 7.055 C 9.979 7.265 9.52 7.265 9.143 7.055 L 1.5 2.809 L 1.5 2.75 Z M 1.5 4.525 L 1.5 10.75 C 1.5 11.44 2.06 12 2.75 12 L 16.75 12 C 17.44 12 18 11.44 18 10.75 L 18 4.525 L 11.085 8.366 C 10.255 8.828 9.245 8.828 8.414 8.366 L 1.5 4.525 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.500} height={13.500} viewBox="0 0 19.500 13.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 5.25,
        width: 19.5,
        height: 13.5,
      }}>
        <path d={"M 0.073 2.117 C 0.359 0.904 1.449 0 2.75 0 L 16.75 0 C 18.051 0 19.141 0.904 19.427 2.117 L 10.349 7.069 C 9.975 7.273 9.525 7.273 9.151 7.069 L 0.073 2.117 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 3.786 L 0 10.75 C 0 12.269 1.231 13.5 2.75 13.5 L 16.75 13.5 C 18.269 13.5 19.5 12.269 19.5 10.75 L 19.5 3.786 L 11.067 8.386 C 10.246 8.834 9.254 8.834 8.433 8.386 L 0 3.786 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: fill=false
    "fill=false": __body0,
    // figma: fill=true
    "fill=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default IconIcEmail;
