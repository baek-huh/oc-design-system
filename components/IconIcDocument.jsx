// figma node: 10226:1635 icon/ic-document (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcDocument(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={16.500} height={19.500} viewBox="0 0 16.500 19.500" fill="none" style={{
        position: "absolute",
        left: 3.75,
        top: 2.25,
        width: 16.5,
        height: 19.5,
      }}>
        <path d={"M 2.75 0 C 1.231 0 0 1.231 0 2.75 L 0 16.75 C 0 18.269 1.231 19.5 2.75 19.5 L 8.813 19.5 C 9.559 19.5 10.273 19.197 10.791 18.661 L 15.727 13.553 C 16.17 13.095 16.438 12.499 16.491 11.869 C 16.497 11.831 16.5 11.791 16.5 11.75 C 16.5 11.737 16.5 11.725 16.499 11.713 C 16.5 11.689 16.5 11.665 16.5 11.642 L 16.5 2.75 C 16.5 1.231 15.269 0 13.75 0 L 2.75 0 Z M 15 11 L 15 2.75 C 15 2.06 14.44 1.5 13.75 1.5 L 2.75 1.5 C 2.06 1.5 1.5 2.06 1.5 2.75 L 1.5 16.75 C 1.5 17.44 2.06 18 2.75 18 L 8 18 L 8 12.75 C 8 11.784 8.784 11 9.75 11 L 15 11 Z M 9.5 17.794 C 9.576 17.744 9.648 17.685 9.712 17.619 L 14.649 12.51 C 14.652 12.507 14.655 12.503 14.659 12.5 L 9.75 12.5 C 9.612 12.5 9.5 12.612 9.5 12.75 L 9.5 17.794 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={16.500} height={19.500} viewBox="0 0 16.500 19.500" fill="none" style={{
        position: "absolute",
        left: 3.75,
        top: 2.25,
        width: 16.5,
        height: 19.5,
      }}>
        <path d={"M 0 2.75 C 0 1.231 1.231 0 2.75 0 L 13.75 0 C 15.269 0 16.5 1.231 16.5 2.75 L 16.5 11 L 9.75 11 C 8.784 11 8 11.784 8 12.75 L 8 19.5 L 2.75 19.5 C 1.231 19.5 0 18.269 0 16.75 L 0 2.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 9.5 19.413 C 9.987 19.287 10.435 19.029 10.791 18.661 L 15.727 13.553 C 16.019 13.251 16.234 12.891 16.363 12.5 L 9.75 12.5 C 9.612 12.5 9.5 12.612 9.5 12.75 L 9.5 19.413 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcDocument;
