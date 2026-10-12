// figma node: 4922:2 icon/ic-alarm (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcAlarm(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={17.500} height={19.750} viewBox="0 0 17.500 19.750" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 2.25,
        width: 17.5,
        height: 19.75,
      }}>
        <path d={"M 8.75 0 C 4.719 0 1.5 3.282 1.5 7.312 L 1.5 14 L 0.75 14 C 0.336 14 0 14.336 0 14.75 C 0 15.164 0.336 15.5 0.75 15.5 L 16.75 15.5 C 17.164 15.5 17.5 15.164 17.5 14.75 C 17.5 14.336 17.164 14 16.75 14 L 16 14 L 16 7.313 C 16 3.282 12.781 0 8.75 0 Z M 14.5 14 L 14.5 7.313 C 14.5 4.094 11.936 1.5 8.75 1.5 C 5.564 1.5 3 4.094 3 7.312 L 3 14 L 14.5 14 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 8.75 19.75 C 10.407 19.75 11.75 18.407 11.75 16.75 L 5.75 16.75 C 5.75 18.407 7.093 19.75 8.75 19.75 Z"} fill="currentColor" fillRule="nonzero" />
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
      <svg width={17.500} height={19.750} viewBox="0 0 17.500 19.750" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 2.25,
        width: 17.5,
        height: 19.75,
      }}>
        <path d={"M 8.75 0 C 4.719 0 1.5 3.282 1.5 7.312 L 1.5 14 L 0.75 14 C 0.336 14 0 14.336 0 14.75 C 0 15.164 0.336 15.5 0.75 15.5 L 16.75 15.5 C 17.164 15.5 17.5 15.164 17.5 14.75 C 17.5 14.336 17.164 14 16.75 14 L 16 14 L 16 7.313 C 16 3.282 12.781 0 8.75 0 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 11.75 16.75 C 11.75 18.407 10.407 19.75 8.75 19.75 C 7.093 19.75 5.75 18.407 5.75 16.75 L 11.75 16.75 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcAlarm;
