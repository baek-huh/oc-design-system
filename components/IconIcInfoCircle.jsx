// figma node: 10227:5526 icon/ic-info-circle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcInfoCircle(_p = {}) {
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
        <path d={"M 10 7 C 10 6.586 10.336 6.25 10.75 6.25 C 11.164 6.25 11.5 6.586 11.5 7 C 11.5 7.414 11.164 7.75 10.75 7.75 C 10.336 7.75 10 7.414 10 7 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 10 15.75 C 10 16.164 10.336 16.5 10.75 16.5 C 11.164 16.5 11.5 16.164 11.5 15.75 L 11.5 10.25 C 11.5 9.836 11.164 9.5 10.75 9.5 C 10.336 9.5 10 9.836 10 10.25 L 10 15.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 21.5 10.75 C 21.5 16.687 16.687 21.5 10.75 21.5 C 4.813 21.5 0 16.687 0 10.75 C 0 4.813 4.813 0 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 Z M 10.75 20 C 15.859 20 20 15.859 20 10.75 C 20 5.641 15.859 1.5 10.75 1.5 C 5.641 1.5 1.5 5.641 1.5 10.75 C 1.5 15.859 5.641 20 10.75 20 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 0 11 C 0 4.925 4.925 0 11 0 C 17.075 0 22 4.925 22 11 C 22 17.075 17.075 22 11 22 C 4.925 22 0 17.075 0 11 Z M 10.25 7.25 C 10.25 6.836 10.586 6.5 11 6.5 C 11.414 6.5 11.75 6.836 11.75 7.25 C 11.75 7.664 11.414 8 11 8 C 10.586 8 10.25 7.664 10.25 7.25 Z M 10.25 16 C 10.25 16.414 10.586 16.75 11 16.75 C 11.414 16.75 11.75 16.414 11.75 16 L 11.75 10.5 C 11.75 10.086 11.414 9.75 11 9.75 C 10.586 9.75 10.25 10.086 10.25 10.5 L 10.25 16 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcInfoCircle;
