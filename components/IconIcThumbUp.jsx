// figma node: 10226:1002 icon/ic-thumb-up (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcThumbUp(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.865} height={18.500} viewBox="0 0 19.865 18.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 2.25,
        width: 19.865,
        height: 18.5,
      }}>
        <path d={"M 2.75 18.5 C 1.231 18.5 0 17.269 0 15.75 L 0 9.25 C 0 7.731 1.231 6.5 2.75 6.5 L 5.302 6.5 L 8.146 1.218 C 8.55 0.468 9.333 0 10.185 0 C 11.463 0 12.5 1.037 12.5 2.315 L 12.5 4.5 L 17.113 4.5 C 18.934 4.5 20.252 6.238 19.761 7.991 L 17.381 16.491 C 17.049 17.679 15.966 18.5 14.733 18.5 L 2.75 18.5 Z M 9.467 1.929 C 9.609 1.665 9.885 1.5 10.185 1.5 C 10.635 1.5 11 1.865 11 2.315 L 11 5.25 C 11 5.664 11.336 6 11.75 6 L 17.113 6 C 17.941 6 18.54 6.79 18.317 7.587 L 15.937 16.087 C 15.786 16.627 15.294 17 14.733 17 L 6.5 17 L 6.5 7.439 L 9.467 1.929 Z M 5 8 L 2.75 8 C 2.06 8 1.5 8.56 1.5 9.25 L 1.5 15.75 C 1.5 16.44 2.06 17 2.75 17 L 5 17 L 5 8 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={19.865} height={18.500} viewBox="0 0 19.865 18.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 2.25,
        width: 19.865,
        height: 18.5,
      }}>
        <path d={"M 8.146 1.218 C 8.55 0.468 9.333 0 10.185 0 C 11.463 0 12.5 1.037 12.5 2.315 L 12.5 4.5 L 17.113 4.5 C 18.934 4.5 20.252 6.238 19.761 7.991 L 17.381 16.491 C 17.049 17.679 15.966 18.5 14.733 18.5 L 6.5 18.5 L 6.5 4.275 L 8.146 1.218 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 5 6.5 L 2.75 6.5 C 1.231 6.5 0 7.731 0 9.25 L 0 15.75 C 0 17.269 1.231 18.5 2.75 18.5 L 5 18.5 L 5 6.5 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcThumbUp;
