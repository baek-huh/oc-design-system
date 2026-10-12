// figma node: 10227:6143 icon/ic-stop (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcStop(_p = {}) {
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
        <path d={"M 0 1.75 C 0 0.784 0.784 0 1.75 0 L 15.75 0 C 16.716 0 17.5 0.784 17.5 1.75 L 17.5 15.75 C 17.5 16.716 16.716 17.5 15.75 17.5 L 1.75 17.5 C 0.784 17.5 0 16.716 0 15.75 L 0 1.75 Z M 1.75 1.5 C 1.612 1.5 1.5 1.612 1.5 1.75 L 1.5 15.75 C 1.5 15.888 1.612 16 1.75 16 L 15.75 16 C 15.888 16 16 15.888 16 15.75 L 16 1.75 C 16 1.612 15.888 1.5 15.75 1.5 L 1.75 1.5 Z"} fill="currentColor" fillRule="evenodd" />
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
        <path d={"M 1.75 0 C 0.784 0 0 0.784 0 1.75 L 0 15.75 C 0 16.716 0.784 17.5 1.75 17.5 L 15.75 17.5 C 16.716 17.5 17.5 16.716 17.5 15.75 L 17.5 1.75 C 17.5 0.784 16.716 0 15.75 0 L 1.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcStop;
