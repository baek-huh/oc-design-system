// figma node: 10227:6208 icon/ic-icloud-check (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcIcloudCheck(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
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
        <path d={"M 14.03 5.47 C 14.323 5.763 14.323 6.237 14.03 6.53 L 10.53 10.03 C 10.39 10.171 10.199 10.25 10 10.25 C 9.801 10.25 9.61 10.171 9.47 10.03 L 7.47 8.03 C 7.177 7.737 7.177 7.263 7.47 6.97 C 7.763 6.677 8.237 6.677 8.53 6.97 L 10 8.439 L 12.97 5.47 C 13.263 5.177 13.737 5.177 14.03 5.47 Z"} fill="currentColor" fillRule="evenodd" />
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
        <path d={"M 4.222 5.029 C 4.983 2.135 7.616 0 10.75 0 C 13.884 0 16.517 2.135 17.278 5.029 C 19.653 5.292 21.5 7.305 21.5 9.75 C 21.5 12.373 19.373 14.5 16.75 14.5 L 4.75 14.5 C 2.127 14.5 0 12.373 0 9.75 C 0 7.305 1.847 5.292 4.222 5.029 Z M 14.03 6.53 C 14.323 6.237 14.323 5.763 14.03 5.47 C 13.737 5.177 13.263 5.177 12.97 5.47 L 10 8.439 L 8.53 6.97 C 8.237 6.677 7.763 6.677 7.47 6.97 C 7.177 7.263 7.177 7.737 7.47 8.03 L 9.47 10.03 C 9.61 10.171 9.801 10.25 10 10.25 C 10.199 10.25 10.39 10.171 10.53 10.03 L 14.03 6.53 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcIcloudCheck;
