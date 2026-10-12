// figma node: 10226:725 icon/ic-shopping-bag (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcShoppingBag(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={20.140} height={20.500} viewBox="0 0 20.140 20.500" fill="none" style={{
        position: "absolute",
        left: 1.93,
        top: 1.25,
        width: 20.14,
        height: 20.5,
      }}>
        <path d={"M 10.07 0 C 7.447 0 5.32 2.127 5.32 4.75 L 5.32 7 L 1.75 7 C 0.669 7 -0.154 7.971 0.024 9.038 L 1.691 19.038 C 1.832 19.882 2.562 20.5 3.417 20.5 L 16.723 20.5 C 17.578 20.5 18.308 19.882 18.449 19.038 L 20.116 9.038 C 20.293 7.971 19.471 7 18.39 7 L 14.82 7 L 14.82 4.75 C 14.82 2.127 12.693 0 10.07 0 Z M 13.32 7 L 13.32 4.75 C 13.32 2.955 11.865 1.5 10.07 1.5 C 8.275 1.5 6.82 2.955 6.82 4.75 L 6.82 7 L 13.32 7 Z M 1.504 8.791 C 1.478 8.639 1.596 8.5 1.75 8.5 L 18.39 8.5 C 18.544 8.5 18.662 8.639 18.636 8.791 L 16.969 18.791 C 16.949 18.912 16.845 19 16.723 19 L 3.417 19 C 3.295 19 3.191 18.912 3.171 18.791 L 1.504 8.791 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={20.140} height={20.500} viewBox="0 0 20.140 20.500" fill="none" style={{
        position: "absolute",
        left: 1.93,
        top: 1.25,
        width: 20.14,
        height: 20.5,
      }}>
        <path d={"M 10.07 0 C 7.447 0 5.32 2.127 5.32 4.75 L 5.32 7 L 1.75 7 C 0.669 7 -0.154 7.971 0.024 9.038 L 1.691 19.038 C 1.832 19.882 2.562 20.5 3.417 20.5 L 16.723 20.5 C 17.578 20.5 18.308 19.882 18.449 19.038 L 20.116 9.038 C 20.293 7.971 19.471 7 18.39 7 L 14.82 7 L 14.82 4.75 C 14.82 2.127 12.693 0 10.07 0 Z M 13.32 7 L 13.32 4.75 C 13.32 2.955 11.865 1.5 10.07 1.5 C 8.275 1.5 6.82 2.955 6.82 4.75 L 6.82 7 L 13.32 7 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcShoppingBag;
