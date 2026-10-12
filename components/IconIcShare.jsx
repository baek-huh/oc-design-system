// figma node: 10227:6168 icon/ic-share (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcShare(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.500} height={17.500} viewBox="0 0 19.500 17.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 3.25,
        width: 19.5,
        height: 17.5,
      }}>
        <path d={"M 10.463 0.057 C 10.743 -0.059 11.066 0.005 11.28 0.22 L 19.28 8.22 C 19.573 8.513 19.573 8.987 19.28 9.28 L 11.28 17.28 C 11.066 17.495 10.743 17.559 10.463 17.443 C 10.183 17.327 10 17.053 10 16.75 L 10 12.968 C 5.15 12.892 2.236 15.732 1.393 17.136 C 1.22 17.425 0.875 17.563 0.55 17.473 C 0.225 17.383 0 17.087 0 16.75 C 0 11.57 1.736 8.376 4.031 6.539 C 5.976 4.984 8.244 4.465 10 4.464 L 10 0.75 C 10 0.447 10.183 0.173 10.463 0.057 Z M 11.5 2.561 L 11.5 5.25 C 11.5 5.462 11.41 5.664 11.253 5.806 C 11.096 5.948 10.886 6.017 10.675 5.996 C 9.164 5.845 6.87 6.19 4.969 7.711 C 3.401 8.964 2.026 11.078 1.621 14.565 C 3.429 12.895 6.521 11.196 10.803 11.502 C 11.196 11.53 11.5 11.857 11.5 12.25 L 11.5 14.939 L 17.689 8.75 L 11.5 2.561 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={19.500} height={17.500} viewBox="0 0 19.500 17.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 3.25,
        width: 19.5,
        height: 17.5,
      }}>
        <path d={"M 11.28 0.22 C 11.066 0.005 10.743 -0.059 10.463 0.057 C 10.183 0.173 10 0.447 10 0.75 L 10 4.464 C 8.244 4.465 5.976 4.984 4.031 6.539 C 1.736 8.376 0 11.57 0 16.75 C 0 17.087 0.225 17.383 0.55 17.473 C 0.875 17.563 1.22 17.425 1.393 17.136 C 2.236 15.732 5.15 12.892 10 12.968 L 10 16.75 C 10 17.053 10.183 17.327 10.463 17.443 C 10.743 17.559 11.066 17.495 11.28 17.28 L 19.28 9.28 C 19.573 8.987 19.573 8.513 19.28 8.22 L 11.28 0.22 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcShare;
