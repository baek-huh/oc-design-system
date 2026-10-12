// figma node: 10227:5493 icon/ic-idea (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcIdea(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={13.500} height={18.500} viewBox="0 0 13.500 18.500" fill="none" style={{
        position: "absolute",
        left: 5.25,
        top: 2.25,
        width: 13.5,
        height: 18.5,
      }}>
        <path d={"M 6.75 0 C 3.022 0 0 3.022 0 6.75 C 0 9.091 1.192 11.153 3 12.363 L 3 14.75 C 3 15.164 3.336 15.5 3.75 15.5 L 9.75 15.5 C 10.164 15.5 10.5 15.164 10.5 14.75 L 10.5 12.363 C 12.308 11.153 13.5 9.091 13.5 6.75 C 13.5 3.022 10.478 0 6.75 0 Z M 1.5 6.75 C 1.5 3.851 3.851 1.5 6.75 1.5 C 9.649 1.5 12 3.851 12 6.75 C 12 8.692 10.946 10.389 9.374 11.298 C 9.143 11.432 9 11.68 9 11.947 L 9 14 L 4.5 14 L 4.5 11.947 C 4.5 11.68 4.357 11.432 4.126 11.298 C 2.554 10.389 1.5 8.692 1.5 6.75 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 3.75 17 C 3.336 17 3 17.336 3 17.75 C 3 18.164 3.336 18.5 3.75 18.5 L 9.75 18.5 C 10.164 18.5 10.5 18.164 10.5 17.75 C 10.5 17.336 10.164 17 9.75 17 L 3.75 17 Z"} fill="currentColor" fillRule="nonzero" />
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
      <svg width={13.500} height={18.500} viewBox="0 0 13.500 18.500" fill="none" style={{
        position: "absolute",
        left: 5.25,
        top: 2.25,
        width: 13.5,
        height: 18.5,
      }}>
        <path d={"M 0 6.75 C 0 3.022 3.022 0 6.75 0 C 10.478 0 13.5 3.022 13.5 6.75 C 13.5 9.091 12.308 11.153 10.5 12.363 L 10.5 14.75 C 10.5 15.164 10.164 15.5 9.75 15.5 L 3.75 15.5 C 3.336 15.5 3 15.164 3 14.75 L 3 12.363 C 1.192 11.153 0 9.091 0 6.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 3.75 17 C 3.336 17 3 17.336 3 17.75 C 3 18.164 3.336 18.5 3.75 18.5 L 9.75 18.5 C 10.164 18.5 10.5 18.164 10.5 17.75 C 10.5 17.336 10.164 17 9.75 17 L 3.75 17 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcIdea;
