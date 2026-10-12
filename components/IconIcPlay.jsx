// figma node: 10227:6136 icon/ic-play (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcPlay(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={14.197} height={17.769} viewBox="0 0 14.197 17.769" fill="none" style={{
        position: "absolute",
        left: 6.75,
        top: 3.116,
        width: 14.197,
        height: 17.769,
      }}>
        <path d={"M 13.418 7.428 C 14.457 8.121 14.457 9.648 13.418 10.341 L 2.721 17.472 C 1.558 18.247 0 17.414 0 16.016 L 0 1.753 C 0 0.355 1.558 -0.478 2.721 0.297 L 13.418 7.428 Z M 12.586 9.092 C 12.734 8.993 12.734 8.775 12.586 8.676 L 1.889 1.545 C 1.723 1.434 1.5 1.553 1.5 1.753 L 1.5 16.016 C 1.5 16.216 1.723 16.335 1.889 16.224 L 12.586 9.092 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={14.197} height={17.769} viewBox="0 0 14.197 17.769" fill="none" style={{
        position: "absolute",
        left: 6.75,
        top: 3.116,
        width: 14.197,
        height: 17.769,
      }}>
        <path d={"M 13.418 10.341 C 14.457 9.648 14.457 8.121 13.418 7.428 L 2.721 0.297 C 1.558 -0.478 0 0.355 0 1.753 L 0 16.016 C 0 17.414 1.558 18.247 2.721 17.472 L 13.418 10.341 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcPlay;
