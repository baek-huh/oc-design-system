// figma node: 10226:1641 icon/ic-review (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcReview(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.500} height={17.329} viewBox="0 0 19.500 17.329" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 3.25,
        width: 19.5,
        height: 17.329,
      }}>
        <path d={"M 3.5 4.75 C 3.5 4.336 3.836 4 4.25 4 L 15.25 4 C 15.664 4 16 4.336 16 4.75 C 16 5.164 15.664 5.5 15.25 5.5 L 4.25 5.5 C 3.836 5.5 3.5 5.164 3.5 4.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 4.25 8 C 3.836 8 3.5 8.336 3.5 8.75 C 3.5 9.164 3.836 9.5 4.25 9.5 L 9.75 9.5 C 10.164 9.5 10.5 9.164 10.5 8.75 C 10.5 8.336 10.164 8 9.75 8 L 4.25 8 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 2.75 C 0 1.231 1.231 0 2.75 0 L 16.75 0 C 18.269 0 19.5 1.231 19.5 2.75 L 19.5 11.75 C 19.5 13.269 18.269 14.5 16.75 14.5 L 13.385 14.5 L 10.584 17.01 C 10.109 17.435 9.391 17.435 8.916 17.01 L 6.115 14.5 L 2.75 14.5 C 1.231 14.5 0 13.269 0 11.75 L 0 2.75 Z M 2.75 1.5 C 2.06 1.5 1.5 2.06 1.5 2.75 L 1.5 11.75 C 1.5 12.44 2.06 13 2.75 13 L 6.402 13 C 6.587 13 6.765 13.068 6.902 13.191 L 9.75 15.743 L 12.598 13.191 C 12.735 13.068 12.913 13 13.098 13 L 16.75 13 C 17.44 13 18 12.44 18 11.75 L 18 2.75 C 18 2.06 17.44 1.5 16.75 1.5 L 2.75 1.5 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={19.500} height={17.329} viewBox="0 0 19.500 17.329" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 3.25,
        width: 19.5,
        height: 17.329,
      }}>
        <path d={"M 2.75 0 C 1.231 0 0 1.231 0 2.75 L 0 11.75 C 0 13.269 1.231 14.5 2.75 14.5 L 6.115 14.5 L 8.916 17.01 C 9.391 17.435 10.109 17.435 10.584 17.01 L 13.385 14.5 L 16.75 14.5 C 18.269 14.5 19.5 13.269 19.5 11.75 L 19.5 2.75 C 19.5 1.231 18.269 0 16.75 0 L 2.75 0 Z M 3.5 4.75 C 3.5 4.336 3.836 4 4.25 4 L 15.25 4 C 15.664 4 16 4.336 16 4.75 C 16 5.164 15.664 5.5 15.25 5.5 L 4.25 5.5 C 3.836 5.5 3.5 5.164 3.5 4.75 Z M 4.25 8 C 3.836 8 3.5 8.336 3.5 8.75 C 3.5 9.164 3.836 9.5 4.25 9.5 L 9.75 9.5 C 10.164 9.5 10.5 9.164 10.5 8.75 C 10.5 8.336 10.164 8 9.75 8 L 4.25 8 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcReview;
