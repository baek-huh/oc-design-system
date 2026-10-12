// figma node: 10227:6207 icon/ic-icloud (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcIcloud(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.500} height={14.500} viewBox="0 0 21.500 14.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 4.25,
        width: 21.5,
        height: 14.5,
      }}>
        <path d={"M 10.75 1.5 C 8.149 1.5 5.989 3.392 5.573 5.874 L 5.468 6.5 L 4.75 6.5 C 2.955 6.5 1.5 7.955 1.5 9.75 C 1.5 11.545 2.955 13 4.75 13 L 16.75 13 C 18.545 13 20 11.545 20 9.75 C 20 7.955 18.545 6.5 16.75 6.5 L 16.032 6.5 L 15.927 5.874 C 15.511 3.392 13.351 1.5 10.75 1.5 Z M 4.222 5.029 C 4.983 2.135 7.616 0 10.75 0 C 13.884 0 16.517 2.135 17.278 5.029 C 19.653 5.292 21.5 7.305 21.5 9.75 C 21.5 12.373 19.373 14.5 16.75 14.5 L 4.75 14.5 C 2.127 14.5 0 12.373 0 9.75 C 0 7.305 1.847 5.292 4.222 5.029 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.500} height={14.500} viewBox="0 0 21.500 14.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 4.25,
        width: 21.5,
        height: 14.5,
      }}>
        <path d={"M 10.75 0 C 7.616 0 4.983 2.135 4.222 5.029 C 1.847 5.292 0 7.305 0 9.75 C 0 12.373 2.127 14.5 4.75 14.5 L 16.75 14.5 C 19.373 14.5 21.5 12.373 21.5 9.75 C 21.5 7.305 19.653 5.292 17.278 5.029 C 16.517 2.135 13.884 0 10.75 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: fill=false
    "fill=false": __body0,
    // figma: fill=true
    "fill=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default IconIcIcloud;
