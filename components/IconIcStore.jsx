// figma node: 10226:777 icon/ic-store (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcStore(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.500} height={19.500} viewBox="0 0 19.500 19.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 2.25,
        width: 19.5,
        height: 19.5,
      }}>
        <path d={"M 0 2.75 C 0 1.231 1.231 0 2.75 0 L 16.75 0 C 18.269 0 19.5 1.231 19.5 2.75 L 19.5 16.75 C 19.5 18.269 18.269 19.5 16.75 19.5 L 2.75 19.5 C 1.231 19.5 0 18.269 0 16.75 L 0 2.75 Z M 18 5.75 L 18 2.75 C 18 2.06 17.44 1.5 16.75 1.5 L 13.5 1.5 L 13.5 5.75 C 13.5 6.993 14.507 8 15.75 8 C 16.993 8 18 6.993 18 5.75 Z M 12.75 8 C 13.434 8.911 14.523 9.5 15.75 9.5 C 16.594 9.5 17.373 9.221 18 8.75 L 18 16.75 C 18 17.44 17.44 18 16.75 18 L 10.5 18 L 10.5 13.75 C 10.5 13.336 10.164 13 9.75 13 C 9.336 13 9 13.336 9 13.75 L 9 18 L 2.75 18 C 2.06 18 1.5 17.44 1.5 16.75 L 1.5 8.75 C 2.127 9.221 2.906 9.5 3.75 9.5 C 4.977 9.5 6.066 8.911 6.75 8 C 7.434 8.911 8.523 9.5 9.75 9.5 C 10.977 9.5 12.066 8.911 12.75 8 Z M 12 5.75 L 12 1.5 L 7.5 1.5 L 7.5 5.75 C 7.5 6.993 8.507 8 9.75 8 C 10.993 8 12 6.993 12 5.75 Z M 1.5 2.75 L 1.5 5.75 C 1.5 6.993 2.507 8 3.75 8 C 4.993 8 6 6.993 6 5.75 L 6 1.5 L 2.75 1.5 C 2.06 1.5 1.5 2.06 1.5 2.75 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={19.500} height={19.500} viewBox="0 0 19.500 19.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 2.25,
        width: 19.5,
        height: 19.5,
      }}>
        <path d={"M 7 0 L 7 5.25 C 7 6.769 8.231 8 9.75 8 C 11.269 8 12.5 6.769 12.5 5.25 L 12.5 0 L 7 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 5.5 0 L 5.5 5.5 C 5.5 6.881 4.381 8 3 8 C 1.343 8 0 6.657 0 5 L 0 2.75 C 0 1.231 1.231 0 2.75 0 L 5.5 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 8.354 L 0 16.75 C 0 18.269 1.231 19.5 2.75 19.5 L 9 19.5 L 9 13.75 C 9 13.336 9.336 13 9.75 13 C 10.164 13 10.5 13.336 10.5 13.75 L 10.5 19.5 L 16.75 19.5 C 18.269 19.5 19.5 18.269 19.5 16.75 L 19.5 8.354 C 18.704 9.067 17.653 9.5 16.5 9.5 C 15.124 9.5 13.91 8.805 13.19 7.746 C 12.417 8.809 11.164 9.5 9.75 9.5 C 8.336 9.5 7.083 8.809 6.31 7.746 C 5.59 8.805 4.376 9.5 3 9.5 C 1.847 9.5 0.796 9.067 0 8.354 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 19.5 5 L 19.5 2.75 C 19.5 1.231 18.269 0 16.75 0 L 14 0 L 14 5.5 C 14 6.881 15.119 8 16.5 8 C 18.157 8 19.5 6.657 19.5 5 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcStore;
