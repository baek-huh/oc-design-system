// figma node: 10260:3291 icon/ic-caret (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "up=" + __venc(p.up);

export function IconIcCaret(_p = {}) {
  const props = { ..._p, up: _p.up ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--label-normal)",
      ...props.style,
    }}>
      <svg width={9.652} height={6.463} viewBox="0 0 9.652 6.463" fill="none" style={{
        position: "absolute",
        left: 7.174,
        top: 8.537,
        width: 9.652,
        height: 6.463,
      }}>
        <path d={"M 6.041 0.881 C 5.622 0.392 5.413 0.148 5.164 0.059 C 4.945 -0.02 4.706 -0.02 4.488 0.059 C 4.239 0.148 4.029 0.392 3.611 0.881 L 1.09 3.822 C 0.369 4.663 0.009 5.083 0 5.439 C -0.007 5.748 0.128 6.043 0.368 6.239 C 0.644 6.463 1.198 6.463 2.305 6.463 L 7.347 6.463 C 8.454 6.463 9.007 6.463 9.283 6.239 C 9.523 6.043 9.659 5.748 9.651 5.439 C 9.642 5.083 9.282 4.663 8.562 3.822 L 6.041 0.881 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--label-normal)",
      ...props.style,
    }}>
      <svg width={9.652} height={6.463} viewBox="0 0 9.652 6.463" fill="none" style={{
        position: "absolute",
        left: 7.174,
        top: 9,
        width: 9.652,
        height: 6.463,
      }}>
        <path d={"M 6.041 5.583 C 5.622 6.071 5.413 6.315 5.164 6.405 C 4.945 6.483 4.706 6.483 4.488 6.405 C 4.239 6.315 4.029 6.071 3.611 5.583 L 1.09 2.641 C 0.369 1.801 0.009 1.381 0 1.025 C -0.007 0.716 0.128 0.42 0.368 0.225 C 0.644 0 1.198 0 2.305 0 L 7.347 0 C 8.454 0 9.007 0 9.283 0.225 C 9.523 0.42 9.659 0.716 9.651 1.025 C 9.642 1.381 9.282 1.801 8.562 2.641 L 6.041 5.583 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: up=true
    "up=true": __body0,
    // figma: up=false
    "up=false": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default IconIcCaret;
