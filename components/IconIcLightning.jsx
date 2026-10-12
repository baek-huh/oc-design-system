// figma node: 10226:778 icon/ic-lightning (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcLightning(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={12.500} height={20.500} viewBox="0 0 12.500 20.500" fill="none" style={{
        position: "absolute",
        left: 6.25,
        top: 1.75,
        width: 12.5,
        height: 20.5,
      }}>
        <path d={"M 3.032 0.534 C 3.127 0.217 3.419 0 3.75 0 L 9.25 0 C 9.491 0 9.717 0.116 9.858 0.311 C 9.999 0.507 10.038 0.758 9.962 0.987 L 7.791 7.5 L 11.75 7.5 C 12.037 7.5 12.299 7.664 12.424 7.921 C 12.55 8.179 12.517 8.486 12.341 8.712 L 3.341 20.212 C 3.125 20.488 2.746 20.578 2.43 20.428 C 2.113 20.278 1.942 19.929 2.018 19.587 L 3.815 11.5 L 0.75 11.5 C 0.513 11.5 0.29 11.388 0.148 11.198 C 0.007 11.007 -0.036 10.762 0.032 10.534 L 3.032 0.534 Z M 4.308 1.5 L 1.758 10 L 4.75 10 C 4.977 10 5.193 10.103 5.335 10.281 C 5.477 10.458 5.531 10.691 5.482 10.913 L 4.201 16.679 L 10.211 9 L 6.75 9 C 6.509 9 6.283 8.884 6.142 8.689 C 6.001 8.493 5.962 8.242 6.038 8.013 L 8.209 1.5 L 4.308 1.5 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={12.500} height={20.500} viewBox="0 0 12.500 20.500" fill="none" style={{
        position: "absolute",
        left: 6.25,
        top: 1.75,
        width: 12.5,
        height: 20.5,
      }}>
        <path d={"M 3.75 0 C 3.419 0 3.127 0.217 3.032 0.534 L 0.032 10.534 C -0.036 10.762 0.007 11.007 0.148 11.198 C 0.29 11.388 0.513 11.5 0.75 11.5 L 3.815 11.5 L 2.018 19.587 C 1.942 19.929 2.113 20.278 2.43 20.428 C 2.746 20.578 3.125 20.488 3.341 20.212 L 12.341 8.712 C 12.517 8.486 12.55 8.179 12.424 7.921 C 12.299 7.664 12.037 7.5 11.75 7.5 L 7.791 7.5 L 9.962 0.987 C 10.038 0.758 9.999 0.507 9.858 0.311 C 9.717 0.116 9.491 0 9.25 0 L 3.75 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: fill=false
    "fill=false": __body0,
    // figma: fill=true
    "fill=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default IconIcLightning;
