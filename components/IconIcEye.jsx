// figma node: 10226:1643 icon/ic-eye (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcEye(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.701} height={15.501} viewBox="0 0 21.701 15.501" fill="none" style={{
        position: "absolute",
        left: 1.121,
        top: 4.249,
        width: 21.701,
        height: 15.501,
      }}>
        <path d={"M 10.879 4.001 C 8.808 4.001 7.129 5.68 7.129 7.751 C 7.129 9.822 8.808 11.501 10.879 11.501 C 12.95 11.501 14.629 9.822 14.629 7.751 C 14.629 5.68 12.95 4.001 10.879 4.001 Z M 8.629 7.751 C 8.629 6.508 9.636 5.501 10.879 5.501 C 12.121 5.501 13.129 6.508 13.129 7.751 C 13.129 8.993 12.121 10.001 10.879 10.001 C 9.636 10.001 8.629 8.993 8.629 7.751 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 21.165 6.19 C 17.061 0.836 12.836 -0.574 9.062 0.194 C 5.383 0.944 2.361 3.723 0.489 6.267 C -0.165 7.155 -0.162 8.361 0.495 9.246 C 2.436 11.863 5.52 14.609 9.213 15.323 C 12.998 16.056 17.191 14.615 21.179 9.325 C 21.881 8.394 21.873 7.113 21.165 6.19 Z M 1.697 7.156 C 3.466 4.753 6.202 2.307 9.361 1.664 C 12.425 1.04 16.118 2.071 19.975 7.102 C 20.274 7.492 20.276 8.031 19.981 8.422 C 16.243 13.382 12.58 14.447 9.498 13.851 C 6.325 13.237 3.53 10.82 1.699 8.352 C 1.435 7.996 1.434 7.513 1.697 7.156 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={21.701} height={15.501} viewBox="0 0 21.701 15.501" fill="none" style={{
        position: "absolute",
        left: 1.12,
        top: 4.25,
        width: 21.701,
        height: 15.501,
      }}>
        <path d={"M 8.63 7.75 C 8.63 6.507 9.637 5.5 10.88 5.5 C 12.123 5.5 13.13 6.507 13.13 7.75 C 13.13 8.993 12.123 10 10.88 10 C 9.637 10 8.63 8.993 8.63 7.75 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 9.062 0.194 C 12.836 -0.574 17.061 0.836 21.165 6.19 C 21.873 7.113 21.881 8.394 21.179 9.325 C 17.191 14.615 12.998 16.056 9.213 15.323 C 5.52 14.609 2.436 11.863 0.495 9.246 C -0.162 8.361 -0.165 7.155 0.489 6.267 C 2.361 3.723 5.383 0.944 9.062 0.194 Z M 10.88 4 C 8.809 4 7.13 5.679 7.13 7.75 C 7.13 9.821 8.809 11.5 10.88 11.5 C 12.951 11.5 14.63 9.821 14.63 7.75 C 14.63 5.679 12.951 4 10.88 4 Z"} fill="currentColor" fillRule="evenodd" />
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
export default IconIcEye;
