// figma node: 10226:1636 icon/ic-graph-bar-up (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcGraphBarUp(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={20.500} height={19.500} viewBox="0 0 20.500 19.500" fill="none" style={{
        position: "absolute",
        left: 1.75,
        top: 2.25,
        width: 20.5,
        height: 19.5,
      }}>
        <path d={"M 16.25 0 C 15.284 0 14.5 0.784 14.5 1.75 L 14.5 17.75 C 14.5 18.716 15.284 19.5 16.25 19.5 L 18.75 19.5 C 19.716 19.5 20.5 18.716 20.5 17.75 L 20.5 1.75 C 20.5 0.784 19.716 0 18.75 0 L 16.25 0 Z M 16 1.75 C 16 1.612 16.112 1.5 16.25 1.5 L 18.75 1.5 C 18.888 1.5 19 1.612 19 1.75 L 19 17.75 C 19 17.888 18.888 18 18.75 18 L 16.25 18 C 16.112 18 16 17.888 16 17.75 L 16 1.75 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 7.25 6.75 C 7.25 5.784 8.034 5 9 5 L 11.5 5 C 12.466 5 13.25 5.784 13.25 6.75 L 13.25 17.75 C 13.25 18.716 12.466 19.5 11.5 19.5 L 9 19.5 C 8.034 19.5 7.25 18.716 7.25 17.75 L 7.25 6.75 Z M 9 6.5 C 8.862 6.5 8.75 6.612 8.75 6.75 L 8.75 17.75 C 8.75 17.888 8.862 18 9 18 L 11.5 18 C 11.638 18 11.75 17.888 11.75 17.75 L 11.75 6.75 C 11.75 6.612 11.638 6.5 11.5 6.5 L 9 6.5 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 0 11.75 C 0 10.784 0.784 10 1.75 10 L 4.25 10 C 5.216 10 6 10.784 6 11.75 L 6 17.75 C 6 18.716 5.216 19.5 4.25 19.5 L 1.75 19.5 C 0.784 19.5 0 18.716 0 17.75 L 0 11.75 Z M 1.75 11.5 C 1.612 11.5 1.5 11.612 1.5 11.75 L 1.5 17.75 C 1.5 17.888 1.612 18 1.75 18 L 4.25 18 C 4.388 18 4.5 17.888 4.5 17.75 L 4.5 11.75 C 4.5 11.612 4.388 11.5 4.25 11.5 L 1.75 11.5 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={19} height={18} viewBox="0 0 19 18" fill="none" style={{
        position: "absolute",
        left: 2.5,
        top: 3,
        width: 19,
        height: 18,
      }}>
        <path d={"M 15 0 C 14.448 0 14 0.448 14 1 L 14 17 C 14 17.552 14.448 18 15 18 L 18 18 C 18.552 18 19 17.552 19 17 L 19 1 C 19 0.448 18.552 0 18 0 L 15 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 7 6 C 7 5.448 7.448 5 8 5 L 11 5 C 11.552 5 12 5.448 12 6 L 12 17 C 12 17.552 11.552 18 11 18 L 8 18 C 7.448 18 7 17.552 7 17 L 7 6 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 11 C 0 10.448 0.448 10 1 10 L 4 10 C 4.552 10 5 10.448 5 11 L 5 17 C 5 17.552 4.552 18 4 18 L 1 18 C 0.448 18 0 17.552 0 17 L 0 11 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcGraphBarUp;
