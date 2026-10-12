// figma node: 10227:303 icon/ic-camera (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcCamera(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={20.500} height={19.500} viewBox="0 0 20.500 19.500" fill="none" style={{
        position: "absolute",
        left: 1.75,
        top: 2.25,
        width: 20.5,
        height: 19.5,
      }}>
        <path d={"M 10.25 6 C 7.627 6 5.5 8.127 5.5 10.75 C 5.5 13.373 7.627 15.5 10.25 15.5 C 12.873 15.5 15 13.373 15 10.75 C 15 8.127 12.873 6 10.25 6 Z M 7 10.75 C 7 8.955 8.455 7.5 10.25 7.5 C 12.045 7.5 13.5 8.955 13.5 10.75 C 13.5 12.545 12.045 14 10.25 14 C 8.455 14 7 12.545 7 10.75 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 6.731 0 C 6.199 0 5.696 0.242 5.364 0.657 L 3.49 3 L 2.75 3 C 1.231 3 0 4.231 0 5.75 L 0 16.75 C 0 18.269 1.231 19.5 2.75 19.5 L 17.75 19.5 C 19.269 19.5 20.5 18.269 20.5 16.75 L 20.5 5.75 C 20.5 4.231 19.269 3 17.75 3 L 17.01 3 L 15.136 0.657 C 14.804 0.242 14.301 0 13.769 0 L 6.731 0 Z M 6.535 1.594 C 6.583 1.535 6.655 1.5 6.731 1.5 L 13.769 1.5 C 13.845 1.5 13.917 1.535 13.965 1.594 L 16.064 4.219 C 16.207 4.396 16.422 4.5 16.65 4.5 L 17.75 4.5 C 18.44 4.5 19 5.06 19 5.75 L 19 16.75 C 19 17.44 18.44 18 17.75 18 L 2.75 18 C 2.06 18 1.5 17.44 1.5 16.75 L 1.5 5.75 C 1.5 5.06 2.06 4.5 2.75 4.5 L 3.85 4.5 C 4.078 4.5 4.293 4.396 4.436 4.219 L 6.535 1.594 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={20.500} height={19.500} viewBox="0 0 20.500 19.500" fill="none" style={{
        position: "absolute",
        left: 1.75,
        top: 2.25,
        width: 20.5,
        height: 19.5,
      }}>
        <path d={"M 7 10.75 C 7 8.955 8.455 7.5 10.25 7.5 C 12.045 7.5 13.5 8.955 13.5 10.75 C 13.5 12.545 12.045 14 10.25 14 C 8.455 14 7 12.545 7 10.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 5.364 0.657 C 5.696 0.242 6.199 0 6.731 0 L 13.769 0 C 14.301 0 14.804 0.242 15.136 0.657 L 17.01 3 L 17.75 3 C 19.269 3 20.5 4.231 20.5 5.75 L 20.5 16.75 C 20.5 18.269 19.269 19.5 17.75 19.5 L 2.75 19.5 C 1.231 19.5 0 18.269 0 16.75 L 0 5.75 C 0 4.231 1.231 3 2.75 3 L 3.49 3 L 5.364 0.657 Z M 10.25 6 C 7.627 6 5.5 8.127 5.5 10.75 C 5.5 13.373 7.627 15.5 10.25 15.5 C 12.873 15.5 15 13.373 15 10.75 C 15 8.127 12.873 6 10.25 6 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcCamera;
