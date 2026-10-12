// figma node: 10227:5518 icon/ic-play-circle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcPlayCircle(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.500} height={21.500} viewBox="0 0 21.500 21.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 1.25,
        width: 21.5,
        height: 21.5,
      }}>
        <path d={"M 14.126 11.166 C 14.423 10.968 14.423 10.532 14.126 10.334 L 9.527 7.268 C 9.195 7.047 8.75 7.285 8.75 7.684 L 8.75 13.816 C 8.75 14.215 9.195 14.453 9.527 14.232 L 14.126 11.166 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 10.75 0 C 4.813 0 0 4.813 0 10.75 C 0 16.687 4.813 21.5 10.75 21.5 C 16.687 21.5 21.5 16.687 21.5 10.75 C 21.5 4.813 16.687 0 10.75 0 Z M 1.5 10.75 C 1.5 5.641 5.641 1.5 10.75 1.5 C 15.859 1.5 20 5.641 20 10.75 C 20 15.859 15.859 20 10.75 20 C 5.641 20 1.5 15.859 1.5 10.75 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={21.500} height={21.500} viewBox="0 0 21.500 21.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 1.25,
        width: 21.5,
        height: 21.5,
      }}>
        <path d={"M 0 10.75 C 0 4.813 4.813 0 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 C 21.5 16.687 16.687 21.5 10.75 21.5 C 4.813 21.5 0 16.687 0 10.75 Z M 14.126 11.166 C 14.423 10.968 14.423 10.532 14.126 10.334 L 9.527 7.268 C 9.195 7.047 8.75 7.285 8.75 7.684 L 8.75 13.816 C 8.75 14.215 9.195 14.453 9.527 14.232 L 14.126 11.166 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcPlayCircle;
