// figma node: 10227:6173 icon/ic-note (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcNote(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={18.500} height={19.500} viewBox="0 0 18.500 19.500" fill="none" style={{
        position: "absolute",
        left: 1.75,
        top: 2.25,
        width: 18.5,
        height: 19.5,
      }}>
        <path d={"M 2 2.75 C 2 1.231 3.231 0 4.75 0 L 15.75 0 C 17.269 0 18.5 1.231 18.5 2.75 L 18.5 16.75 C 18.5 18.269 17.269 19.5 15.75 19.5 L 4.75 19.5 C 3.231 19.5 2 18.269 2 16.75 L 2 15.5 L 0.75 15.5 C 0.336 15.5 0 15.164 0 14.75 C 0 14.336 0.336 14 0.75 14 L 2 14 L 2 10.5 L 0.75 10.5 C 0.336 10.5 0 10.164 0 9.75 C 0 9.336 0.336 9 0.75 9 L 2 9 L 2 5.5 L 0.75 5.5 C 0.336 5.5 0 5.164 0 4.75 C 0 4.336 0.336 4 0.75 4 L 2 4 L 2 2.75 Z M 8.5 18 L 15.75 18 C 16.44 18 17 17.44 17 16.75 L 17 2.75 C 17 2.06 16.44 1.5 15.75 1.5 L 8.5 1.5 L 8.5 18 Z M 7 1.5 L 7 18 L 4.75 18 C 4.06 18 3.5 17.44 3.5 16.75 L 3.5 15.5 L 4.75 15.5 C 5.164 15.5 5.5 15.164 5.5 14.75 C 5.5 14.336 5.164 14 4.75 14 L 3.5 14 L 3.5 10.5 L 4.75 10.5 C 5.164 10.5 5.5 10.164 5.5 9.75 C 5.5 9.336 5.164 9 4.75 9 L 3.5 9 L 3.5 5.5 L 4.75 5.5 C 5.164 5.5 5.5 5.164 5.5 4.75 C 5.5 4.336 5.164 4 4.75 4 L 3.5 4 L 3.5 2.75 C 3.5 2.06 4.06 1.5 4.75 1.5 L 7 1.5 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={18.500} height={19.500} viewBox="0 0 18.500 19.500" fill="none" style={{
        position: "absolute",
        left: 1.75,
        top: 2.25,
        width: 18.5,
        height: 19.5,
      }}>
        <path d={"M 2 2.75 C 2 1.231 3.231 0 4.75 0 L 15.75 0 C 17.269 0 18.5 1.231 18.5 2.75 L 18.5 16.75 C 18.5 18.269 17.269 19.5 15.75 19.5 L 4.75 19.5 C 3.231 19.5 2 18.269 2 16.75 L 2 15.5 L 0.75 15.5 C 0.336 15.5 0 15.164 0 14.75 C 0 14.336 0.336 14 0.75 14 L 2 14 L 2 10.5 L 0.75 10.5 C 0.336 10.5 0 10.164 0 9.75 C 0 9.336 0.336 9 0.75 9 L 2 9 L 2 5.5 L 0.75 5.5 C 0.336 5.5 0 5.164 0 4.75 C 0 4.336 0.336 4 0.75 4 L 2 4 L 2 2.75 Z M 7 18 L 4.75 18 C 4.06 18 3.5 17.44 3.5 16.75 L 3.5 15.5 L 4.75 15.5 C 5.164 15.5 5.5 15.164 5.5 14.75 C 5.5 14.336 5.164 14 4.75 14 L 3.5 14 L 3.5 10.5 L 4.75 10.5 C 5.164 10.5 5.5 10.164 5.5 9.75 C 5.5 9.336 5.164 9 4.75 9 L 3.5 9 L 3.5 5.5 L 4.75 5.5 C 5.164 5.5 5.5 5.164 5.5 4.75 C 5.5 4.336 5.164 4 4.75 4 L 3.5 4 L 3.5 2.75 C 3.5 2.06 4.06 1.5 4.75 1.5 L 7 1.5 L 7 18 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcNote;
