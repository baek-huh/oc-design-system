// figma node: 10227:5513 icon/ic-mic (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcMic(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={17.500} height={22.500} viewBox="0 0 17.500 22.500" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 1.25,
        width: 17.5,
        height: 22.5,
      }}>
        <path d={"M 4 4.75 C 4 2.127 6.127 0 8.75 0 C 11.373 0 13.5 2.127 13.5 4.75 L 13.5 9.75 C 13.5 12.373 11.373 14.5 8.75 14.5 C 6.127 14.5 4 12.373 4 9.75 L 4 4.75 Z M 8.75 1.5 C 6.955 1.5 5.5 2.955 5.5 4.75 L 5.5 9.75 C 5.5 11.545 6.955 13 8.75 13 C 10.545 13 12 11.545 12 9.75 L 12 4.75 C 12 2.955 10.545 1.5 8.75 1.5 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 9.5 18.468 C 13.981 18.088 17.5 14.33 17.5 9.75 C 17.5 9.336 17.164 9 16.75 9 C 16.336 9 16 9.336 16 9.75 C 16 13.754 12.754 17 8.75 17 C 4.746 17 1.5 13.754 1.5 9.75 C 1.5 9.336 1.164 9 0.75 9 C 0.336 9 0 9.336 0 9.75 C 0 14.33 3.519 18.088 8 18.468 L 8 21.75 C 8 22.164 8.336 22.5 8.75 22.5 C 9.164 22.5 9.5 22.164 9.5 21.75 L 9.5 18.468 Z"} fill="currentColor" fillRule="nonzero" />
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
      <svg width={17.500} height={22.500} viewBox="0 0 17.500 22.500" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 1.25,
        width: 17.5,
        height: 22.5,
      }}>
        <path d={"M 8.75 0 C 6.127 0 4 2.127 4 4.75 L 4 9.75 C 4 12.373 6.127 14.5 8.75 14.5 C 11.373 14.5 13.5 12.373 13.5 9.75 L 13.5 4.75 C 13.5 2.127 11.373 0 8.75 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 9.5 18.468 C 13.981 18.088 17.5 14.33 17.5 9.75 C 17.5 9.336 17.164 9 16.75 9 C 16.336 9 16 9.336 16 9.75 C 16 13.754 12.754 17 8.75 17 C 4.746 17 1.5 13.754 1.5 9.75 C 1.5 9.336 1.164 9 0.75 9 C 0.336 9 0 9.336 0 9.75 C 0 14.33 3.519 18.088 8 18.468 L 8 21.75 C 8 22.164 8.336 22.5 8.75 22.5 C 9.164 22.5 9.5 22.164 9.5 21.75 L 9.5 18.468 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcMic;
