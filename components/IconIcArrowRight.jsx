// figma node: 10239:6515 icon/ic-arrow-right (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "small=" + __venc(p.small);

export function IconIcArrowRight(_p = {}) {
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
        left: 8.25,
        top: 4.25,
        width: 8.5,
        height: 15.5,
      }}>
        <path d={"M 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 8.28 7.22 C 8.573 7.513 8.573 7.987 8.28 8.28 L 1.28 15.28 C 0.987 15.573 0.513 15.573 0.22 15.28 C -0.073 14.987 -0.073 14.513 0.22 14.22 L 6.689 7.75 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={18.750} height={16.500} viewBox="0 0 18.750 16.500" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 3.75,
        width: 18.75,
        height: 16.5,
      }}>
        <path d={"M 9.97 15.22 C 9.677 15.513 9.677 15.987 9.97 16.28 C 10.263 16.573 10.737 16.573 11.03 16.28 L 18.53 8.78 C 18.823 8.487 18.823 8.013 18.53 7.72 L 11.03 0.22 C 10.737 -0.073 10.263 -0.073 9.97 0.22 C 9.677 0.513 9.677 0.987 9.97 1.28 L 16.189 7.5 L 0.75 7.5 C 0.336 7.5 0 7.836 0 8.25 C 0 8.664 0.336 9 0.75 9 L 16.189 9 L 9.97 15.22 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcArrowRight;
