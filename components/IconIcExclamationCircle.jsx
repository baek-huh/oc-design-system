// figma node: 10227:5519 icon/ic-exclamation-circle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcExclamationCircle(_p = {}) {
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
        <path d={"M 11.5 14.5 C 11.5 14.914 11.164 15.25 10.75 15.25 C 10.336 15.25 10 14.914 10 14.5 C 10 14.086 10.336 13.75 10.75 13.75 C 11.164 13.75 11.5 14.086 11.5 14.5 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 11.5 5.75 C 11.5 5.336 11.164 5 10.75 5 C 10.336 5 10 5.336 10 5.75 L 10 11.25 C 10 11.664 10.336 12 10.75 12 C 11.164 12 11.5 11.664 11.5 11.25 L 11.5 5.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 10.75 C 0 4.813 4.813 0 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 C 21.5 16.687 16.687 21.5 10.75 21.5 C 4.813 21.5 0 16.687 0 10.75 Z M 10.75 1.5 C 5.641 1.5 1.5 5.641 1.5 10.75 C 1.5 15.859 5.641 20 10.75 20 C 15.859 20 20 15.859 20 10.75 C 20 5.641 15.859 1.5 10.75 1.5 Z"} fill="currentColor" fillRule="evenodd" />
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
        <path d={"M 22 11 C 22 17.075 17.075 22 11 22 C 4.925 22 0 17.075 0 11 C 0 4.925 4.925 0 11 0 C 17.075 0 22 4.925 22 11 Z M 11.75 14.75 C 11.75 15.164 11.414 15.5 11 15.5 C 10.586 15.5 10.25 15.164 10.25 14.75 C 10.25 14.336 10.586 14 11 14 C 11.414 14 11.75 14.336 11.75 14.75 Z M 11.75 6 C 11.75 5.586 11.414 5.25 11 5.25 C 10.586 5.25 10.25 5.586 10.25 6 L 10.25 11.5 C 10.25 11.914 10.586 12.25 11 12.25 C 11.414 12.25 11.75 11.914 11.75 11.5 L 11.75 6 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcExclamationCircle;
