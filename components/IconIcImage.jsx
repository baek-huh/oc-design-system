// figma node: 10227:302 icon/ic-image (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcImage(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.500} height={19.500} viewBox="0 0 19.500 19.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 2.25,
        width: 19.5,
        height: 19.5,
      }}>
        <path d={"M 7.75 6.75 C 7.75 7.578 7.078 8.25 6.25 8.25 C 5.422 8.25 4.75 7.578 4.75 6.75 C 4.75 5.922 5.422 5.25 6.25 5.25 C 7.078 5.25 7.75 5.922 7.75 6.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 2.75 C 0 1.231 1.231 0 2.75 0 L 16.75 0 C 18.269 0 19.5 1.231 19.5 2.75 L 19.5 16.75 C 19.5 18.269 18.269 19.5 16.75 19.5 L 2.75 19.5 C 1.235 19.5 0.007 18.275 0 16.762 C 0 16.755 0 16.748 0 16.741 L 0 2.75 Z M 1.55 17.102 C 1.702 17.621 2.182 18 2.75 18 L 16.75 18 C 17.44 18 18 17.44 18 16.75 L 18 14.561 L 12.667 9.228 L 1.55 17.102 Z M 18 12.439 L 13.28 7.72 C 13.022 7.461 12.615 7.427 12.317 7.638 L 1.5 15.3 L 1.5 2.75 C 1.5 2.06 2.06 1.5 2.75 1.5 L 16.75 1.5 C 17.44 1.5 18 2.06 18 2.75 L 18 12.439 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={19.500} height={19.500} viewBox="0 0 19.500 19.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 2.25,
        width: 19.5,
        height: 19.5,
      }}>
        <path d={"M 2.75 0 C 1.231 0 0 1.231 0 2.75 L 0 16.305 L 12.318 7.637 C 12.617 7.427 13.022 7.462 13.28 7.72 L 19.5 13.939 L 19.5 2.75 C 19.5 1.231 18.269 0 16.75 0 L 2.75 0 Z M 7.75 6.75 C 7.75 7.578 7.078 8.25 6.25 8.25 C 5.422 8.25 4.75 7.578 4.75 6.75 C 4.75 5.922 5.422 5.25 6.25 5.25 C 7.078 5.25 7.75 5.922 7.75 6.75 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 19.5 16.061 L 12.666 9.226 L 0.273 17.947 C 0.718 18.866 1.66 19.5 2.75 19.5 L 16.75 19.5 C 18.269 19.5 19.5 18.269 19.5 16.75 L 19.5 16.061 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcImage;
