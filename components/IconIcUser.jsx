// figma node: 10226:587 icon/ic-user (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcUser(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.500} height={20.500} viewBox="0 0 19.500 20.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 2.25,
        width: 19.5,
        height: 20.5,
      }}>
        <path d={"M 9.75 0 C 7.127 0 5 2.127 5 4.75 C 5 7.373 7.127 9.5 9.75 9.5 C 12.373 9.5 14.5 7.373 14.5 4.75 C 14.5 2.127 12.373 0 9.75 0 Z M 6.5 4.75 C 6.5 2.955 7.955 1.5 9.75 1.5 C 11.545 1.5 13 2.955 13 4.75 C 13 6.545 11.545 8 9.75 8 C 7.955 8 6.5 6.545 6.5 4.75 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 9.75 11 C 2.99 11 0 15.108 0 17.456 C 0 18.338 0.66 18.902 1.291 19.24 C 1.95 19.593 2.82 19.84 3.745 20.019 C 5.607 20.379 7.911 20.5 9.75 20.5 C 11.589 20.5 13.893 20.379 15.755 20.019 C 16.68 19.84 17.55 19.593 18.209 19.24 C 18.84 18.902 19.5 18.338 19.5 17.456 C 19.5 15.108 16.51 11 9.75 11 Z M 1.5 17.456 C 1.5 16.181 3.551 12.5 9.75 12.5 C 15.949 12.5 18 16.181 18 17.456 C 18 17.48 17.99 17.656 17.501 17.918 C 17.04 18.165 16.342 18.377 15.471 18.546 C 13.742 18.88 11.545 19 9.75 19 C 7.955 19 5.758 18.88 4.029 18.546 C 3.158 18.377 2.46 18.165 1.999 17.918 C 1.51 17.656 1.5 17.48 1.5 17.456 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={19.500} height={20.500} viewBox="0 0 19.500 20.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 2.25,
        width: 19.5,
        height: 20.5,
      }}>
        <path d={"M 9.75 0 C 7.127 0 5 2.127 5 4.75 C 5 7.373 7.127 9.5 9.75 9.5 C 12.373 9.5 14.5 7.373 14.5 4.75 C 14.5 2.127 12.373 0 9.75 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 9.75 11 C 2.99 11 0 15.108 0 17.456 C 0 18.338 0.66 18.902 1.291 19.24 C 1.95 19.593 2.82 19.84 3.745 20.019 C 5.607 20.379 7.911 20.5 9.75 20.5 C 11.589 20.5 13.893 20.379 15.755 20.019 C 16.68 19.84 17.55 19.593 18.209 19.24 C 18.84 18.902 19.5 18.338 19.5 17.456 C 19.5 15.108 16.51 11 9.75 11 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcUser;
