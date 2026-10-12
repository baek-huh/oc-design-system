// figma node: 10227:5498 icon/ic-folder (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcFolder(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.500} height={18.500} viewBox="0 0 19.500 18.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 2.25,
        width: 19.5,
        height: 18.5,
      }}>
        <path d={"M 2.75 1.5 C 2.06 1.5 1.5 2.06 1.5 2.75 L 1.5 15.75 C 1.5 16.44 2.06 17 2.75 17 L 16.75 17 C 17.44 17 18 16.44 18 15.75 L 18 5.75 C 18 5.06 17.44 4.5 16.75 4.5 L 9.221 4.5 C 8.996 4.5 8.784 4.4 8.642 4.227 L 6.771 1.955 C 6.534 1.667 6.18 1.5 5.806 1.5 L 2.75 1.5 Z M 0 2.75 C 0 1.231 1.231 0 2.75 0 L 5.806 0 C 6.628 0 7.407 0.367 7.929 1.002 L 9.575 3 L 16.75 3 C 18.269 3 19.5 4.231 19.5 5.75 L 19.5 15.75 C 19.5 17.269 18.269 18.5 16.75 18.5 L 2.75 18.5 C 1.231 18.5 0 17.269 0 15.75 L 0 2.75 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={19.500} height={18.500} viewBox="0 0 19.500 18.500" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 2.25,
        width: 19.5,
        height: 18.5,
      }}>
        <path d={"M 2.75 0 C 1.231 0 0 1.231 0 2.75 L 0 15.75 C 0 17.269 1.231 18.5 2.75 18.5 L 16.75 18.5 C 18.269 18.5 19.5 17.269 19.5 15.75 L 19.5 5.75 C 19.5 4.231 18.269 3 16.75 3 L 9.575 3 L 7.929 1.002 C 7.407 0.367 6.628 0 5.806 0 L 2.75 0 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcFolder;
