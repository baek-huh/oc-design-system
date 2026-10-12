// figma node: 10227:5514 icon/ic-unlock (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcUnlock(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={17.500} height={20.500} viewBox="0 0 17.500 20.500" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 1.25,
        width: 17.5,
        height: 20.5,
      }}>
        <path d={"M 9.5 12.75 C 9.5 12.336 9.164 12 8.75 12 C 8.336 12 8 12.336 8 12.75 L 8 15.75 C 8 16.164 8.336 16.5 8.75 16.5 C 9.164 16.5 9.5 16.164 9.5 15.75 L 9.5 12.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 3 5.75 C 3 2.574 5.574 0 8.75 0 C 11.926 0 14.5 2.574 14.5 5.75 L 13 5.75 C 13 3.403 11.097 1.5 8.75 1.5 C 6.403 1.5 4.5 3.403 4.5 5.75 L 4.5 8 L 14.75 8 C 16.269 8 17.5 9.231 17.5 10.75 L 17.5 17.75 C 17.5 19.269 16.269 20.5 14.75 20.5 L 2.75 20.5 C 1.231 20.5 0 19.269 0 17.75 L 0 10.75 C 0 9.231 1.231 8 2.75 8 L 3 8 L 3 5.75 Z M 2.75 9.5 L 14.75 9.5 C 15.44 9.5 16 10.06 16 10.75 L 16 17.75 C 16 18.44 15.44 19 14.75 19 L 2.75 19 C 2.06 19 1.5 18.44 1.5 17.75 L 1.5 10.75 C 1.5 10.06 2.06 9.5 2.75 9.5 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={17.500} height={20.500} viewBox="0 0 17.500 20.500" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 1.25,
        width: 17.5,
        height: 20.5,
      }}>
        <path d={"M 8.75 0 C 5.574 0 3 2.574 3 5.75 L 3 8 L 2.75 8 C 1.231 8 0 9.231 0 10.75 L 0 17.75 C 0 19.269 1.231 20.5 2.75 20.5 L 14.75 20.5 C 16.269 20.5 17.5 19.269 17.5 17.75 L 17.5 10.75 C 17.5 9.231 16.269 8 14.75 8 L 4.5 8 L 4.5 5.75 C 4.5 3.403 6.403 1.5 8.75 1.5 C 11.097 1.5 13 3.403 13 5.75 L 14.5 5.75 C 14.5 2.574 11.926 0 8.75 0 Z M 9.5 12.75 C 9.5 12.336 9.164 12 8.75 12 C 8.336 12 8 12.336 8 12.75 L 8 15.75 C 8 16.164 8.336 16.5 8.75 16.5 C 9.164 16.5 9.5 16.164 9.5 15.75 L 9.5 12.75 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcUnlock;
