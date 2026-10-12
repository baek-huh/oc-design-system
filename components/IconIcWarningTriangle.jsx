// figma node: 10226:1642 icon/ic-warning-triangle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcWarningTriangle(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={20.826} height={18.500} viewBox="0 0 20.826 18.500" fill="none" style={{
        position: "absolute",
        left: 1.587,
        top: 2.25,
        width: 20.826,
        height: 18.5,
      }}>
        <path d={"M 11.163 14.5 C 11.163 14.914 10.827 15.25 10.413 15.25 C 9.999 15.25 9.663 14.914 9.663 14.5 C 9.663 14.086 9.999 13.75 10.413 13.75 C 10.827 13.75 11.163 14.086 11.163 14.5 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 11.163 5.75 C 11.163 5.336 10.827 5 10.413 5 C 9.999 5 9.663 5.336 9.663 5.75 L 9.663 11.25 C 9.663 11.664 9.999 12 10.413 12 C 10.827 12 11.163 11.664 11.163 11.25 L 11.163 5.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 8.897 0.875 C 9.571 -0.292 11.255 -0.292 11.928 0.875 L 20.589 15.875 C 21.262 17.042 20.42 18.5 19.073 18.5 L 1.753 18.5 C 0.405 18.5 -0.437 17.042 0.237 15.875 L 8.897 0.875 Z M 10.629 1.625 C 10.533 1.458 10.293 1.458 10.196 1.625 L 1.536 16.625 C 1.44 16.792 1.56 17 1.753 17 L 19.073 17 C 19.266 17 19.386 16.792 19.29 16.625 L 10.629 1.625 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={20.826} height={18.500} viewBox="0 0 20.826 18.500" fill="none" style={{
        position: "absolute",
        left: 1.587,
        top: 2.25,
        width: 20.826,
        height: 18.5,
      }}>
        <path d={"M 11.928 0.875 C 11.255 -0.292 9.571 -0.292 8.897 0.875 L 0.237 15.875 C -0.437 17.042 0.405 18.5 1.753 18.5 L 19.073 18.5 C 20.42 18.5 21.262 17.042 20.589 15.875 L 11.928 0.875 Z M 11.163 14.5 C 11.163 14.914 10.827 15.25 10.413 15.25 C 9.999 15.25 9.663 14.914 9.663 14.5 C 9.663 14.086 9.999 13.75 10.413 13.75 C 10.827 13.75 11.163 14.086 11.163 14.5 Z M 11.163 5.75 C 11.163 5.336 10.827 5 10.413 5 C 9.999 5 9.663 5.336 9.663 5.75 L 9.663 11.25 C 9.663 11.664 9.999 12 10.413 12 C 10.827 12 11.163 11.664 11.163 11.25 L 11.163 5.75 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcWarningTriangle;
