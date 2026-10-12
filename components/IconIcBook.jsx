// figma node: 10227:5815 icon/ic-book (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcBook(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={16.500} height={19.500} viewBox="0 0 16.500 19.500" fill="none" style={{
        position: "absolute",
        left: 3.75,
        top: 2.25,
        width: 16.5,
        height: 19.5,
      }}>
        <path d={"M 7 4.75 C 7 4.336 7.336 4 7.75 4 L 12.75 4 C 13.164 4 13.5 4.336 13.5 4.75 C 13.5 5.164 13.164 5.5 12.75 5.5 L 7.75 5.5 C 7.336 5.5 7 5.164 7 4.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 7.75 7 C 7.336 7 7 7.336 7 7.75 C 7 8.164 7.336 8.5 7.75 8.5 L 9.75 8.5 C 10.164 8.5 10.5 8.164 10.5 7.75 C 10.5 7.336 10.164 7 9.75 7 L 7.75 7 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 2.75 0 C 1.231 0 0 1.231 0 2.75 L 0 16.75 C 0 18.269 1.231 19.5 2.75 19.5 L 13.75 19.5 C 15.269 19.5 16.5 18.269 16.5 16.75 L 16.5 2.75 C 16.5 1.231 15.269 0 13.75 0 L 2.75 0 Z M 4 1.5 L 2.75 1.5 C 2.06 1.5 1.5 2.06 1.5 2.75 L 1.5 16.75 C 1.5 17.44 2.06 18 2.75 18 L 4 18 L 4 1.5 Z M 5.5 18 L 5.5 1.5 L 13.75 1.5 C 14.44 1.5 15 2.06 15 2.75 L 15 16.75 C 15 17.44 14.44 18 13.75 18 L 5.5 18 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={16.500} height={19.500} viewBox="0 0 16.500 19.500" fill="none" style={{
        position: "absolute",
        left: 3.75,
        top: 2.25,
        width: 16.5,
        height: 19.5,
      }}>
        <path d={"M 4 0 L 2.75 0 C 1.231 0 0 1.231 0 2.75 L 0 16.75 C 0 18.269 1.231 19.5 2.75 19.5 L 4 19.5 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 5.5 19.5 L 13.75 19.5 C 15.269 19.5 16.5 18.269 16.5 16.75 L 16.5 2.75 C 16.5 1.231 15.269 0 13.75 0 L 5.5 0 L 5.5 19.5 Z M 7 4.75 C 7 4.336 7.336 4 7.75 4 L 12.75 4 C 13.164 4 13.5 4.336 13.5 4.75 C 13.5 5.164 13.164 5.5 12.75 5.5 L 7.75 5.5 C 7.336 5.5 7 5.164 7 4.75 Z M 7.75 7 C 7.336 7 7 7.336 7 7.75 C 7 8.164 7.336 8.5 7.75 8.5 L 9.75 8.5 C 10.164 8.5 10.5 8.164 10.5 7.75 C 10.5 7.336 10.164 7 9.75 7 L 7.75 7 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcBook;
