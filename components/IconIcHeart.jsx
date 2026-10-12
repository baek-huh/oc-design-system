// figma node: 10091:5688 icon/ic-heart (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcHeart(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.501} height={17.500} viewBox="0 0 19.501 17.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 3.25,
        width: 19.501,
        height: 17.5,
      }}>
        <path d={"M 9.751 17.5 C 9.451 17.5 9.161 17.41 8.921 17.25 C 4.481 14.33 -0.059 10.6 0.001 5.14 C 0.031 2.31 2.371 0 5.211 0 C 7.461 0 8.961 1.35 9.751 2.33 C 10.541 1.35 12.041 0 14.291 0 C 17.131 0 19.471 2.31 19.501 5.14 C 19.561 10.6 15.031 14.33 10.591 17.25 C 10.341 17.41 10.051 17.5 9.761 17.5 L 9.751 17.5 Z M 5.211 1.5 C 3.191 1.5 1.521 3.14 1.501 5.16 C 1.451 9.9 5.641 13.3 9.741 16 C 13.861 13.3 18.051 9.9 18.001 5.16 C 17.981 3.14 16.321 1.5 14.291 1.5 C 11.731 1.5 10.431 3.98 10.411 4 C 10.151 4.5 9.331 4.5 9.081 4 C 9.031 3.9 7.741 1.5 5.201 1.5 L 5.211 1.5 Z"} fill="currentColor" fillRule="nonzero" />
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
      <svg width={19.501} height={17.500} viewBox="0 0 19.501 17.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 3.25,
        width: 19.501,
        height: 17.5,
      }}>
        <path d={"M 8.921 17.25 C 9.161 17.41 9.451 17.5 9.751 17.5 L 9.761 17.5 C 10.051 17.5 10.341 17.41 10.591 17.25 C 15.031 14.33 19.561 10.6 19.501 5.14 C 19.471 2.31 17.131 0 14.291 0 C 12.041 0 10.541 1.35 9.751 2.33 C 8.961 1.35 7.461 0 5.211 0 C 2.371 0 0.031 2.31 0.001 5.14 C -0.059 10.6 4.481 14.33 8.921 17.25 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcHeart;
