// figma node: 10226:619 icon/ic-home (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcHome(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={17.500} height={16.749} viewBox="0 0 17.500 16.749" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 4.001,
        width: 17.5,
        height: 16.749,
      }}>
        <path d={"M 10.638 0.751 C 9.578 -0.25 7.922 -0.25 6.862 0.751 L 0.862 6.417 C 0.312 6.937 0 7.66 0 8.417 L 0 13.999 C 0 15.518 1.231 16.749 2.75 16.749 L 14.75 16.749 C 16.269 16.749 17.5 15.518 17.5 13.999 L 17.5 8.417 C 17.5 7.66 17.188 6.937 16.638 6.417 L 10.638 0.751 Z M 7.892 1.841 C 8.373 1.386 9.127 1.386 9.608 1.841 L 15.608 7.508 C 15.858 7.744 16 8.073 16 8.417 L 16 13.999 C 16 14.689 15.44 15.249 14.75 15.249 L 9.5 15.249 L 9.5 11.999 C 9.5 11.585 9.164 11.249 8.75 11.249 C 8.336 11.249 8 11.585 8 11.999 L 8 15.249 L 2.75 15.249 C 2.06 15.249 1.5 14.689 1.5 13.999 L 1.5 8.417 C 1.5 8.073 1.642 7.744 1.892 7.508 L 7.892 1.841 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={17.500} height={16.749} viewBox="0 0 17.500 16.749" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 4.001,
        width: 17.5,
        height: 16.749,
      }}>
        <path d={"M 6.862 0.751 C 7.922 -0.25 9.578 -0.25 10.638 0.751 L 16.638 6.417 C 17.188 6.937 17.5 7.66 17.5 8.417 L 17.5 13.999 C 17.5 15.518 16.269 16.749 14.75 16.749 L 9.5 16.749 L 9.5 11.999 C 9.5 11.585 9.164 11.249 8.75 11.249 C 8.336 11.249 8 11.585 8 11.999 L 8 16.749 L 2.75 16.749 C 1.231 16.749 0 15.518 0 13.999 L 0 8.417 C 0 7.66 0.312 6.937 0.862 6.417 L 6.862 0.751 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcHome;
