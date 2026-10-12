// figma node: 10104:40 icon/ic-clock (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcClock(_p = {}) {
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
        <path d={"M 11.5 4.75 C 11.5 4.336 11.164 4 10.75 4 C 10.336 4 10 4.336 10 4.75 L 10 10.439 L 5.72 14.72 C 5.427 15.013 5.427 15.487 5.72 15.78 C 6.013 16.073 6.487 16.073 6.78 15.78 L 11.28 11.28 C 11.421 11.14 11.5 10.949 11.5 10.75 L 11.5 4.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 10.75 0 C 4.813 0 0 4.813 0 10.75 C 0 16.687 4.813 21.5 10.75 21.5 C 16.687 21.5 21.5 16.687 21.5 10.75 C 21.5 4.813 16.687 0 10.75 0 Z M 1.5 10.75 C 1.5 5.641 5.641 1.5 10.75 1.5 C 15.859 1.5 20 5.641 20 10.75 C 20 15.859 15.859 20 10.75 20 C 5.641 20 1.5 15.859 1.5 10.75 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 11 22 C 17.075 22 22 17.075 22 11 C 22 4.925 17.075 0 11 0 C 4.925 0 0 4.925 0 11 C 0 17.075 4.925 22 11 22 Z M 11.75 5 C 11.75 4.586 11.414 4.25 11 4.25 C 10.586 4.25 10.25 4.586 10.25 5 L 10.25 10.689 L 5.97 14.97 C 5.677 15.263 5.677 15.737 5.97 16.03 C 6.263 16.323 6.737 16.323 7.03 16.03 L 11.53 11.53 C 11.671 11.39 11.75 11.199 11.75 11 L 11.75 5 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcClock;
