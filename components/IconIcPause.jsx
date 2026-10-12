// figma node: 10227:6154 icon/ic-pause (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcPause(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={17.500} height={17.500} viewBox="0 0 17.500 17.500" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 3.25,
        width: 17.5,
        height: 17.5,
      }}>
        <path d={"M 1.75 0 C 0.784 0 0 0.784 0 1.75 L 0 15.75 C 0 16.716 0.784 17.5 1.75 17.5 L 5.75 17.5 C 6.716 17.5 7.5 16.716 7.5 15.75 L 7.5 1.75 C 7.5 0.784 6.716 0 5.75 0 L 1.75 0 Z M 1.5 1.75 C 1.5 1.612 1.612 1.5 1.75 1.5 L 5.75 1.5 C 5.888 1.5 6 1.612 6 1.75 L 6 15.75 C 6 15.888 5.888 16 5.75 16 L 1.75 16 C 1.612 16 1.5 15.888 1.5 15.75 L 1.5 1.75 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 11.75 0 C 10.784 0 10 0.784 10 1.75 L 10 15.75 C 10 16.716 10.784 17.5 11.75 17.5 L 15.75 17.5 C 16.716 17.5 17.5 16.716 17.5 15.75 L 17.5 1.75 C 17.5 0.784 16.716 0 15.75 0 L 11.75 0 Z M 11.5 1.75 C 11.5 1.612 11.612 1.5 11.75 1.5 L 15.75 1.5 C 15.888 1.5 16 1.612 16 1.75 L 16 15.75 C 16 15.888 15.888 16 15.75 16 L 11.75 16 C 11.612 16 11.5 15.888 11.5 15.75 L 11.5 1.75 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={17.500} height={17.500} viewBox="0 0 17.500 17.500" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 3.25,
        width: 17.5,
        height: 17.5,
      }}>
        <path d={"M 1.75 0 C 0.784 0 0 0.784 0 1.75 L 0 15.75 C 0 16.716 0.784 17.5 1.75 17.5 L 5.75 17.5 C 6.716 17.5 7.5 16.716 7.5 15.75 L 7.5 1.75 C 7.5 0.784 6.716 0 5.75 0 L 1.75 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 11.75 0 C 10.784 0 10 0.784 10 1.75 L 10 15.75 C 10 16.716 10.784 17.5 11.75 17.5 L 15.75 17.5 C 16.716 17.5 17.5 16.716 17.5 15.75 L 17.5 1.75 C 17.5 0.784 16.716 0 15.75 0 L 11.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcPause;
