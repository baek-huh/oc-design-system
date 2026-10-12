// figma node: 10227:5653 icon/ic-pencil (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcPencil(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={19.991} height={19.991} viewBox="0 0 19.991 19.991" fill="none" style={{
        position: "absolute",
        left: 2.345,
        top: 2.164,
        width: 19.991,
        height: 19.991,
      }}>
        <path d={"M 16.182 10.37 L 7.445 19.107 C 7.152 19.4 6.765 19.579 6.353 19.614 L 1.895 19.985 C 0.817 20.075 -0.084 19.174 0.006 18.096 L 0.378 13.639 C 0.412 13.226 0.591 12.839 0.884 12.546 L 12.918 0.513 C 13.601 -0.171 14.709 -0.171 15.393 0.513 L 19.479 4.598 C 20.162 5.282 20.162 6.39 19.479 7.073 L 16.19 10.362 L 16.186 10.366 L 16.182 10.37 Z M 13.979 1.573 C 14.076 1.476 14.235 1.476 14.332 1.573 L 18.418 5.659 C 18.516 5.757 18.516 5.915 18.418 6.013 L 15.655 8.775 L 11.216 4.336 L 13.979 1.573 Z M 10.155 5.396 L 1.945 13.607 C 1.903 13.649 1.877 13.704 1.872 13.763 L 1.501 18.22 C 1.488 18.374 1.617 18.503 1.771 18.49 L 6.228 18.119 C 6.287 18.114 6.342 18.088 6.384 18.046 L 14.595 9.836 L 10.155 5.396 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={19.991} height={19.991} viewBox="0 0 19.991 19.991" fill="none" style={{
        position: "absolute",
        left: 2.345,
        top: 2.164,
        width: 19.991,
        height: 19.991,
      }}>
        <path d={"M 12.918 0.513 C 13.601 -0.171 14.709 -0.171 15.393 0.513 L 19.479 4.598 C 20.162 5.282 20.162 6.39 19.479 7.073 L 16.715 9.837 C 16.706 9.826 16.696 9.816 16.686 9.805 L 10.186 3.305 C 10.176 3.295 10.165 3.285 10.155 3.276 L 12.918 0.513 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 9.096 4.335 L 0.884 12.546 C 0.591 12.839 0.412 13.226 0.378 13.639 L 0.006 18.096 C -0.084 19.174 0.817 20.075 1.895 19.985 L 6.353 19.614 C 6.765 19.579 7.152 19.4 7.445 19.107 L 15.656 10.896 C 15.646 10.886 15.635 10.876 15.625 10.866 L 9.125 4.366 C 9.115 4.356 9.105 4.346 9.096 4.335 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcPencil;
