// figma node: 10226:1009 icon/ic-thumb-down (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcThumbDown(_p = {}) {
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
        left: 2.885,
        top: 2.25,
        width: 19.865,
        height: 18.5,
      }}>
        <path d={"M 17.115 0 C 18.633 0 19.865 1.231 19.865 2.75 L 19.865 9.25 C 19.865 10.769 18.633 12 17.115 12 L 14.563 12 L 11.718 17.282 C 11.314 18.032 10.532 18.5 9.68 18.5 C 8.401 18.5 7.365 17.463 7.365 16.185 L 7.365 14 L 2.752 14 C 0.931 14 -0.388 12.262 0.103 10.509 L 2.483 2.009 C 2.816 0.821 3.898 0 5.132 0 L 17.115 0 Z M 10.398 16.571 C 10.255 16.835 9.98 17 9.68 17 C 9.23 17 8.865 16.635 8.865 16.185 L 8.865 13.25 C 8.865 12.836 8.529 12.5 8.115 12.5 L 2.752 12.5 C 1.924 12.5 1.325 11.71 1.548 10.913 L 3.928 2.413 C 4.079 1.873 4.571 1.5 5.132 1.5 L 13.365 1.5 L 13.365 11.061 L 10.398 16.571 Z M 14.865 10.5 L 17.115 10.5 C 17.805 10.5 18.365 9.94 18.365 9.25 L 18.365 2.75 C 18.365 2.06 17.805 1.5 17.115 1.5 L 14.865 1.5 L 14.865 10.5 Z"} fill="currentColor" fillRule="evenodd" />
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
        left: 2.885,
        top: 2.25,
        width: 19.865,
        height: 18.5,
      }}>
        <path d={"M 11.718 17.282 C 11.314 18.032 10.532 18.5 9.68 18.5 C 8.401 18.5 7.365 17.463 7.365 16.185 L 7.365 14 L 2.752 14 C 0.931 14 -0.388 12.262 0.103 10.509 L 2.483 2.009 C 2.816 0.821 3.898 0 5.132 0 L 13.365 0 L 13.365 14.225 L 11.718 17.282 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 14.865 12 L 17.115 12 C 18.633 12 19.865 10.769 19.865 9.25 L 19.865 2.75 C 19.865 1.231 18.633 0 17.115 0 L 14.865 0 L 14.865 12 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcThumbDown;
