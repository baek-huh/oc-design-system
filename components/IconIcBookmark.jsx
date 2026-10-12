// figma node: 10226:1637 icon/ic-bookmark (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcBookmark(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={15.500} height={18.444} viewBox="0 0 15.500 18.444" fill="none" style={{
        position: "absolute",
        left: 4.25,
        top: 2.25,
        width: 15.5,
        height: 18.444,
      }}>
        <path d={"M 0 1.75 C 0 0.784 0.784 0 1.75 0 L 13.75 0 C 14.716 0 15.5 0.784 15.5 1.75 L 15.5 16.692 C 15.5 17.967 14.18 18.814 13.021 18.283 L 7.75 15.869 L 2.479 18.283 C 1.32 18.814 0 17.967 0 16.692 L 0 1.75 Z M 1.75 1.5 C 1.612 1.5 1.5 1.612 1.5 1.75 L 1.5 16.692 C 1.5 16.874 1.689 16.995 1.854 16.919 L 7.438 14.362 C 7.636 14.271 7.864 14.271 8.062 14.362 L 13.646 16.919 C 13.811 16.995 14 16.874 14 16.692 L 14 1.75 C 14 1.612 13.888 1.5 13.75 1.5 L 1.75 1.5 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={15.500} height={18.444} viewBox="0 0 15.500 18.444" fill="none" style={{
        position: "absolute",
        left: 4.25,
        top: 2.25,
        width: 15.5,
        height: 18.444,
      }}>
        <path d={"M 1.75 0 C 0.784 0 0 0.784 0 1.75 L 0 16.692 C 0 17.967 1.32 18.814 2.479 18.283 L 7.75 15.869 L 13.021 18.283 C 14.18 18.814 15.5 17.967 15.5 16.692 L 15.5 1.75 C 15.5 0.784 14.716 0 13.75 0 L 1.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcBookmark;
