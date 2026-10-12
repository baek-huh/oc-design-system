// figma node: 10226:307 icon/ic-check-circle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcCheckCircle(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.500} height={21.500} viewBox="0 0 21.500 21.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 1.25,
        width: 21.5,
        height: 21.5,
      }}>
        <path d={"M 10.75 1.5 C 5.641 1.5 1.5 5.641 1.5 10.75 C 1.5 15.859 5.641 20 10.75 20 C 15.859 20 20 15.859 20 10.75 C 20 5.641 15.859 1.5 10.75 1.5 Z M 0 10.75 C 0 4.813 4.813 0 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 C 21.5 16.687 16.687 21.5 10.75 21.5 C 4.813 21.5 0 16.687 0 10.75 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 15.78 7.72 C 16.073 8.013 16.073 8.487 15.78 8.78 L 10.28 14.28 C 9.987 14.573 9.513 14.573 9.22 14.28 L 5.72 10.78 C 5.427 10.487 5.427 10.013 5.72 9.72 C 6.013 9.427 6.487 9.427 6.78 9.72 L 9.75 12.689 L 14.72 7.72 C 15.013 7.427 15.487 7.427 15.78 7.72 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={21.500} height={21.500} viewBox="0 0 21.500 21.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 1.25,
        width: 21.5,
        height: 21.5,
      }}>
        <path d={"M 10.75 21.5 C 16.687 21.5 21.5 16.687 21.5 10.75 C 21.5 4.813 16.687 0 10.75 0 C 4.813 0 0 4.813 0 10.75 C 0 16.687 4.813 21.5 10.75 21.5 Z M 15.78 8.78 C 16.073 8.487 16.073 8.013 15.78 7.72 C 15.487 7.427 15.013 7.427 14.72 7.72 L 9.75 12.689 L 6.78 9.72 C 6.487 9.427 6.013 9.427 5.72 9.72 C 5.427 10.013 5.427 10.487 5.72 10.78 L 9.22 14.28 C 9.513 14.573 9.987 14.573 10.28 14.28 L 15.78 8.78 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcCheckCircle;
