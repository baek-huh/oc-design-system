// figma node: 10239:6252 icon/ic-arrow-up (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "small=" + __venc(p.small);

export function IconIcArrowUp(_p = {}) {
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
        top: 7.25,
        width: 15.5,
        height: 8.5,
      }}>
        <path d={"M 0.22 8.28 C -0.073 7.987 -0.073 7.513 0.22 7.22 L 7.22 0.22 C 7.513 -0.073 7.987 -0.073 8.28 0.22 L 15.28 7.22 C 15.573 7.513 15.573 7.987 15.28 8.28 C 14.987 8.573 14.513 8.573 14.22 8.28 L 7.75 1.811 L 1.28 8.28 C 0.987 8.573 0.513 8.573 0.22 8.28 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={16.500} height={18.750} viewBox="0 0 16.500 18.750" fill="none" style={{
        position: "absolute",
        left: 3.75,
        top: 3.25,
        width: 16.5,
        height: 18.75,
      }}>
        <path d={"M 15.22 8.78 C 15.513 9.073 15.987 9.073 16.28 8.78 C 16.573 8.487 16.573 8.013 16.28 7.72 L 8.78 0.22 C 8.487 -0.073 8.013 -0.073 7.72 0.22 L 0.22 7.72 C -0.073 8.013 -0.073 8.487 0.22 8.78 C 0.513 9.073 0.987 9.073 1.28 8.78 L 7.5 2.561 L 7.5 18 C 7.5 18.414 7.836 18.75 8.25 18.75 C 8.664 18.75 9 18.414 9 18 L 9 2.561 L 15.22 8.78 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcArrowUp;
