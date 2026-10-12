// figma node: 10239:6460 icon/ic-arrow-left (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "small=" + __venc(p.small);

export function IconIcArrowLeft(_p = {}) {
  const props = { ..._p, small: _p.small ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={8.500} height={15.500} viewBox="0 0 8.500 15.500" fill="none" style={{
        position: "absolute",
        left: 7.25,
        top: 4.25,
        width: 8.5,
        height: 15.5,
      }}>
        <path d={"M 8.28 15.28 C 7.987 15.573 7.513 15.573 7.22 15.28 L 0.22 8.28 C -0.073 7.987 -0.073 7.513 0.22 7.22 L 7.22 0.22 C 7.513 -0.073 7.987 -0.073 8.28 0.22 C 8.573 0.513 8.573 0.987 8.28 1.28 L 1.811 7.75 L 8.28 14.22 C 8.573 14.513 8.573 14.987 8.28 15.28 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={18.500} height={16.500} viewBox="0 0 18.500 16.500" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 3.75,
        width: 18.5,
        height: 16.5,
      }}>
        <path d={"M 8.78 1.28 C 9.073 0.987 9.073 0.513 8.78 0.22 C 8.487 -0.073 8.013 -0.073 7.72 0.22 L 0.22 7.72 C -0.073 8.013 -0.073 8.487 0.22 8.78 L 7.72 16.28 C 8.013 16.573 8.487 16.573 8.78 16.28 C 9.073 15.987 9.073 15.513 8.78 15.22 L 2.561 9 L 17.75 9 C 18.164 9 18.5 8.664 18.5 8.25 C 18.5 7.836 18.164 7.5 17.75 7.5 L 2.561 7.5 L 8.78 1.28 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: small=true
    "small=true": __body0,
    // figma: small=false
    "small=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default IconIcArrowLeft;
