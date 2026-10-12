// figma node: 10239:6275 icon/ic-arrow-down (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "small=" + __venc(p.small);

export function IconIcArrowDown(_p = {}) {
  const props = { ..._p, small: _p.small ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={15.500} height={8.500} viewBox="0 0 15.500 8.500" fill="none" style={{
        position: "absolute",
        left: 4.25,
        top: 8.25,
        width: 15.5,
        height: 8.5,
      }}>
        <path d={"M 15.28 0.22 C 15.573 0.513 15.573 0.987 15.28 1.28 L 8.28 8.28 C 7.987 8.573 7.513 8.573 7.22 8.28 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 7.75 6.689 L 14.22 0.22 C 14.513 -0.073 14.987 -0.073 15.28 0.22 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={16.500} height={18.500} viewBox="0 0 16.500 18.500" fill="none" style={{
        position: "absolute",
        left: 3.75,
        top: 2.25,
        width: 16.5,
        height: 18.5,
      }}>
        <path d={"M 1.28 9.72 C 0.987 9.427 0.513 9.427 0.22 9.72 C -0.073 10.013 -0.073 10.487 0.22 10.78 L 7.72 18.28 C 8.013 18.573 8.487 18.573 8.78 18.28 L 16.28 10.78 C 16.573 10.487 16.573 10.013 16.28 9.72 C 15.987 9.427 15.513 9.427 15.22 9.72 L 9 15.939 L 9 0.75 C 9 0.336 8.664 0 8.25 0 C 7.836 0 7.5 0.336 7.5 0.75 L 7.5 15.939 L 1.28 9.72 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcArrowDown;
