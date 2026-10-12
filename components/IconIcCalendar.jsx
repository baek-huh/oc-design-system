// figma node: 10227:4383 icon/ic-calendar (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcCalendar(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={18.500} height={20.500} viewBox="0 0 18.500 20.500" fill="none" style={{
        position: "absolute",
        left: 2.75,
        top: 1.25,
        width: 18.5,
        height: 20.5,
      }}>
        <path d={"M 4.5 0.75 C 4.5 0.336 4.164 0 3.75 0 C 3.336 0 3 0.336 3 0.75 L 3 1.5 L 2.75 1.5 C 1.231 1.5 0 2.731 0 4.25 L 0 17.75 C 0 19.269 1.231 20.5 2.75 20.5 L 15.75 20.5 C 17.269 20.5 18.5 19.269 18.5 17.75 L 18.5 4.25 C 18.5 2.731 17.269 1.5 15.75 1.5 L 15.5 1.5 L 15.5 0.75 C 15.5 0.336 15.164 0 14.75 0 C 14.336 0 14 0.336 14 0.75 L 14 1.5 L 4.5 1.5 L 4.5 0.75 Z M 15.75 3 C 16.44 3 17 3.56 17 4.25 L 17 5.5 L 1.5 5.5 L 1.5 4.25 C 1.5 3.56 2.06 3 2.75 3 L 15.75 3 Z M 1.5 7 L 1.5 17.75 C 1.5 18.44 2.06 19 2.75 19 L 15.75 19 C 16.44 19 17 18.44 17 17.75 L 17 7 L 1.5 7 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={18.500} height={20.500} viewBox="0 0 18.500 20.500" fill="none" style={{
        position: "absolute",
        left: 2.75,
        top: 1.25,
        width: 18.5,
        height: 20.5,
      }}>
        <path d={"M 4.5 0.75 C 4.5 0.336 4.164 0 3.75 0 C 3.336 0 3 0.336 3 0.75 L 3 1.5 L 2.75 1.5 C 1.231 1.5 0 2.731 0 4.25 L 0 5.5 L 18.5 5.5 L 18.5 4.25 C 18.5 2.731 17.269 1.5 15.75 1.5 L 15.5 1.5 L 15.5 0.75 C 15.5 0.336 15.164 0 14.75 0 C 14.336 0 14 0.336 14 0.75 L 14 1.5 L 4.5 1.5 L 4.5 0.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 18.5 7 L 0 7 L 0 17.75 C 0 19.269 1.231 20.5 2.75 20.5 L 15.75 20.5 C 17.269 20.5 18.5 19.269 18.5 17.75 L 18.5 7 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcCalendar;
