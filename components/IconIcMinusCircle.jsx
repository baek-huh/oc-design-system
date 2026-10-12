// figma node: 10227:5814 icon/ic-minus-circle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcMinusCircle(_p = {}) {
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
        <path d={"M 5.75 10 C 5.336 10 5 10.336 5 10.75 C 5 11.164 5.336 11.5 5.75 11.5 L 15.75 11.5 C 16.164 11.5 16.5 11.164 16.5 10.75 C 16.5 10.336 16.164 10 15.75 10 L 5.75 10 Z"} fill="currentColor" fillRule="nonzero" />
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
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 11 22 C 17.075 22 22 17.075 22 11 C 22 4.925 17.075 0 11 0 C 4.925 0 0 4.925 0 11 C 0 17.075 4.925 22 11 22 Z M 6 10.25 C 5.586 10.25 5.25 10.586 5.25 11 C 5.25 11.414 5.586 11.75 6 11.75 L 16 11.75 C 16.414 11.75 16.75 11.414 16.75 11 C 16.75 10.586 16.414 10.25 16 10.25 L 6 10.25 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcMinusCircle;
