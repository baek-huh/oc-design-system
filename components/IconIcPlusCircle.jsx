// figma node: 10227:5751 icon/ic-plus-circle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcPlusCircle(_p = {}) {
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
        <path d={"M 5.5 10.75 C 5.5 10.336 5.836 10 6.25 10 L 10 10 L 10 6.25 C 10 5.836 10.336 5.5 10.75 5.5 C 11.164 5.5 11.5 5.836 11.5 6.25 L 11.5 10 L 15.25 10 C 15.664 10 16 10.336 16 10.75 C 16 11.164 15.664 11.5 15.25 11.5 L 11.5 11.5 L 11.5 15.25 C 11.5 15.664 11.164 16 10.75 16 C 10.336 16 10 15.664 10 15.25 L 10 11.5 L 6.25 11.5 C 5.836 11.5 5.5 11.164 5.5 10.75 Z"} fill="currentColor" fillRule="nonzero" />
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
        <path d={"M 11 22 C 17.075 22 22 17.075 22 11 C 22 4.925 17.075 0 11 0 C 4.925 0 0 4.925 0 11 C 0 17.075 4.925 22 11 22 Z M 11 5.75 C 11.414 5.75 11.75 6.086 11.75 6.5 L 11.75 10.25 L 15.5 10.25 C 15.914 10.25 16.25 10.586 16.25 11 C 16.25 11.414 15.914 11.75 15.5 11.75 L 11.75 11.75 L 11.75 15.5 C 11.75 15.914 11.414 16.25 11 16.25 C 10.586 16.25 10.25 15.914 10.25 15.5 L 10.25 11.75 L 6.5 11.75 C 6.086 11.75 5.75 11.414 5.75 11 C 5.75 10.586 6.086 10.25 6.5 10.25 L 10.25 10.25 L 10.25 6.5 C 10.25 6.086 10.586 5.75 11 5.75 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcPlusCircle;
