// figma node: 10227:6159 icon/ic-play-pause (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcPlayPause(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={18.500} height={17.500} viewBox="0 0 18.500 17.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 3.25,
        width: 18.5,
        height: 17.5,
      }}>
        <path d={"M 13 1.75 C 13 0.784 13.784 0 14.75 0 L 16.75 0 C 17.716 0 18.5 0.784 18.5 1.75 L 18.5 15.75 C 18.5 16.716 17.716 17.5 16.75 17.5 L 14.75 17.5 C 13.784 17.5 13 16.716 13 15.75 L 13 1.75 Z M 14.75 1.5 C 14.612 1.5 14.5 1.612 14.5 1.75 L 14.5 15.75 C 14.5 15.888 14.612 16 14.75 16 L 16.75 16 C 16.888 16 17 15.888 17 15.75 L 17 1.75 C 17 1.612 16.888 1.5 16.75 1.5 L 14.75 1.5 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 0 1.995 C 0 0.48 1.795 -0.319 2.921 0.695 L 10.426 7.449 C 11.198 8.144 11.198 9.356 10.426 10.051 L 2.921 16.805 C 1.795 17.819 0 17.02 0 15.505 L 0 1.995 Z M 1.917 1.81 C 1.756 1.665 1.5 1.779 1.5 1.995 L 1.5 15.505 C 1.5 15.721 1.756 15.835 1.917 15.69 L 9.422 8.936 C 9.533 8.837 9.533 8.663 9.422 8.564 L 1.917 1.81 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={18.500} height={17.500} viewBox="0 0 18.500 17.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 3.25,
        width: 18.5,
        height: 17.5,
      }}>
        <path d={"M 14.75 0 C 13.784 0 13 0.784 13 1.75 L 13 15.75 C 13 16.716 13.784 17.5 14.75 17.5 L 16.75 17.5 C 17.716 17.5 18.5 16.716 18.5 15.75 L 18.5 1.75 C 18.5 0.784 17.716 0 16.75 0 L 14.75 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 2.921 0.695 C 1.795 -0.319 0 0.48 0 1.995 L 0 15.505 C 0 17.02 1.795 17.819 2.921 16.805 L 10.426 10.051 C 11.198 9.356 11.198 8.144 10.426 7.449 L 2.921 0.695 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcPlayPause;
