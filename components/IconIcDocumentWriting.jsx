// figma node: 10227:6162 icon/ic-document-writing (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcDocumentWriting(_p = {}) {
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
        <path d={"M 4.25 5 C 3.836 5 3.5 5.336 3.5 5.75 C 3.5 6.164 3.836 6.5 4.25 6.5 L 12.25 6.5 C 12.664 6.5 13 6.164 13 5.75 C 13 5.336 12.664 5 12.25 5 L 4.25 5 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 3.5 9.75 C 3.5 9.336 3.836 9 4.25 9 L 12.25 9 C 12.664 9 13 9.336 13 9.75 C 13 10.164 12.664 10.5 12.25 10.5 L 4.25 10.5 C 3.836 10.5 3.5 10.164 3.5 9.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 4.25 13 C 3.836 13 3.5 13.336 3.5 13.75 C 3.5 14.164 3.836 14.5 4.25 14.5 L 12.25 14.5 C 12.664 14.5 13 14.164 13 13.75 C 13 13.336 12.664 13 12.25 13 L 4.25 13 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 2.75 0 C 1.231 0 0 1.231 0 2.75 L 0 16.75 C 0 18.269 1.231 19.5 2.75 19.5 L 13.75 19.5 C 15.269 19.5 16.5 18.269 16.5 16.75 L 16.5 2.75 C 16.5 1.231 15.269 0 13.75 0 L 2.75 0 Z M 1.5 2.75 C 1.5 2.06 2.06 1.5 2.75 1.5 L 13.75 1.5 C 14.44 1.5 15 2.06 15 2.75 L 15 16.75 C 15 17.44 14.44 18 13.75 18 L 2.75 18 C 2.06 18 1.5 17.44 1.5 16.75 L 1.5 2.75 Z"} fill="currentColor" fillRule="evenodd" />
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
        <path d={"M 0 2.75 C 0 1.231 1.231 0 2.75 0 L 13.75 0 C 15.269 0 16.5 1.231 16.5 2.75 L 16.5 16.75 C 16.5 18.269 15.269 19.5 13.75 19.5 L 2.75 19.5 C 1.231 19.5 0 18.269 0 16.75 L 0 2.75 Z M 4.25 5 C 3.836 5 3.5 5.336 3.5 5.75 C 3.5 6.164 3.836 6.5 4.25 6.5 L 12.25 6.5 C 12.664 6.5 13 6.164 13 5.75 C 13 5.336 12.664 5 12.25 5 L 4.25 5 Z M 3.5 9.75 C 3.5 9.336 3.836 9 4.25 9 L 12.25 9 C 12.664 9 13 9.336 13 9.75 C 13 10.164 12.664 10.5 12.25 10.5 L 4.25 10.5 C 3.836 10.5 3.5 10.164 3.5 9.75 Z M 4.25 13 C 3.836 13 3.5 13.336 3.5 13.75 C 3.5 14.164 3.836 14.5 4.25 14.5 L 12.25 14.5 C 12.664 14.5 13 14.164 13 13.75 C 13 13.336 12.664 13 12.25 13 L 4.25 13 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcDocumentWriting;
