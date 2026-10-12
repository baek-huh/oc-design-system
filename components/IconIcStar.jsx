// figma node: 10227:329 icon/ic-star (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcStar(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.375} height={18.549} viewBox="0 0 19.375 18.549" fill="none" style={{
        position: "absolute",
        left: 2.313,
        top: 1.88,
        width: 19.375,
        height: 18.549,
      }}>
        <path d={"M 8.567 0.697 C 9.025 -0.232 10.35 -0.232 10.808 0.697 L 13.124 5.39 L 18.303 6.142 C 19.329 6.291 19.738 7.551 18.996 8.274 L 15.249 11.927 L 16.133 17.085 C 16.308 18.106 15.237 18.885 14.32 18.403 L 9.687 15.968 L 5.055 18.403 C 4.138 18.885 3.067 18.106 3.242 17.085 L 4.126 11.927 L 0.379 8.274 C -0.363 7.551 0.046 6.291 1.072 6.142 L 6.25 5.39 L 8.567 0.697 Z M 9.687 1.815 L 7.537 6.171 C 7.355 6.54 7.003 6.796 6.596 6.855 L 1.789 7.554 L 5.267 10.945 C 5.562 11.232 5.696 11.646 5.627 12.051 L 4.806 16.839 L 9.106 14.579 C 9.47 14.387 9.905 14.387 10.269 14.579 L 14.569 16.839 L 13.748 12.051 C 13.678 11.646 13.813 11.232 14.107 10.945 L 17.586 7.554 L 12.779 6.855 C 12.372 6.796 12.02 6.54 11.837 6.171 L 9.687 1.815 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={19.375} height={18.549} viewBox="0 0 19.375 18.549" fill="none" style={{
        position: "absolute",
        left: 2.313,
        top: 1.88,
        width: 19.375,
        height: 18.549,
      }}>
        <path d={"M 10.808 0.697 C 10.35 -0.232 9.025 -0.232 8.567 0.697 L 6.25 5.39 L 1.072 6.142 C 0.046 6.291 -0.363 7.551 0.379 8.274 L 4.126 11.927 L 3.242 17.085 C 3.067 18.106 4.138 18.885 5.055 18.403 L 9.687 15.968 L 14.32 18.403 C 15.237 18.885 16.308 18.106 16.133 17.085 L 15.249 11.927 L 18.996 8.274 C 19.738 7.551 19.329 6.291 18.303 6.142 L 13.124 5.39 L 10.808 0.697 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcStar;
