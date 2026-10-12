// figma node: 10227:5752 icon/ic-x-circle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcXCircle(_p = {}) {
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
        <path d={"M 14.78 14.78 C 14.487 15.073 14.013 15.073 13.72 14.78 L 10.75 11.811 L 7.78 14.78 C 7.487 15.073 7.013 15.073 6.72 14.78 C 6.427 14.487 6.427 14.013 6.72 13.72 L 9.689 10.75 L 6.72 7.78 C 6.427 7.487 6.427 7.013 6.72 6.72 C 7.013 6.427 7.487 6.427 7.78 6.72 L 10.75 9.689 L 13.72 6.72 C 14.013 6.427 14.487 6.427 14.78 6.72 C 15.073 7.013 15.073 7.487 14.78 7.78 L 11.811 10.75 L 14.78 13.72 C 15.073 14.013 15.073 14.487 14.78 14.78 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 10.75 C 0 4.813 4.813 0 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 C 21.5 16.687 16.687 21.5 10.75 21.5 C 4.813 21.5 0 16.687 0 10.75 Z M 10.75 1.5 C 5.641 1.5 1.5 5.641 1.5 10.75 C 1.5 15.859 5.641 20 10.75 20 C 15.859 20 20 15.859 20 10.75 C 20 5.641 15.859 1.5 10.75 1.5 Z"} fill="currentColor" fillRule="evenodd" />
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
        <path d={"M 11 22 C 17.075 22 22 17.075 22 11 C 22 4.925 17.075 0 11 0 C 4.925 0 0 4.925 0 11 C 0 17.075 4.925 22 11 22 Z M 6.97 15.03 C 6.677 14.737 6.677 14.263 6.97 13.97 L 9.939 11 L 6.97 8.03 C 6.677 7.737 6.677 7.263 6.97 6.97 C 7.263 6.677 7.737 6.677 8.03 6.97 L 11 9.939 L 13.97 6.97 C 14.263 6.677 14.737 6.677 15.03 6.97 C 15.323 7.263 15.323 7.737 15.03 8.03 L 12.061 11 L 15.03 13.97 C 15.323 14.263 15.323 14.737 15.03 15.03 C 14.737 15.323 14.263 15.323 13.97 15.03 L 11 12.061 L 8.03 15.03 C 7.737 15.323 7.263 15.323 6.97 15.03 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcXCircle;
