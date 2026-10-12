// figma node: 10227:6167 icon/ic-book-open (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcBookOpen(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.500} height={16.237} viewBox="0 0 19.500 16.237" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 3.99,
        width: 19.5,
        height: 16.237,
      }}>
        <path d={"M 2.122 0.041 C 1.031 -0.196 0 0.634 0 1.751 L 0 12.747 C 0 13.571 0.574 14.283 1.378 14.458 L 9.378 16.197 C 9.623 16.25 9.877 16.25 10.122 16.197 L 18.122 14.458 C 18.926 14.283 19.5 13.571 19.5 12.747 L 19.5 1.751 C 19.5 0.634 18.469 -0.196 17.378 0.041 L 9.803 1.687 C 9.768 1.695 9.732 1.695 9.697 1.687 L 2.122 0.041 Z M 1.5 1.751 C 1.5 1.591 1.647 1.473 1.803 1.506 L 9 3.071 L 9 14.579 L 1.697 12.992 C 1.582 12.967 1.5 12.865 1.5 12.747 L 1.5 1.751 Z M 10.5 14.579 L 17.803 12.992 C 17.918 12.967 18 12.865 18 12.747 L 18 1.751 C 18 1.591 17.853 1.473 17.697 1.506 L 10.5 3.071 L 10.5 14.579 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.500} height={16.114} viewBox="0 0 19.500 16.114" fill="none" style={{
        position: "absolute",
        left: 2.25,
        top: 3.99,
        width: 19.5,
        height: 16.114,
      }}>
        <path d={"M 9 1.536 L 2.122 0.041 C 1.031 -0.196 0 0.634 0 1.751 L 0 12.747 C 0 13.571 0.574 14.283 1.378 14.458 L 9 16.114 L 9 1.536 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 10.5 16.114 L 18.122 14.458 C 18.926 14.283 19.5 13.571 19.5 12.747 L 19.5 1.751 C 19.5 0.634 18.469 -0.196 17.378 0.041 L 10.5 1.536 L 10.5 16.114 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcBookOpen;
