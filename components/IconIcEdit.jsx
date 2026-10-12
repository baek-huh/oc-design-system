// figma node: 10227:5654 icon/ic-edit (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcEdit(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.500} height={21.086} viewBox="0 0 21.500 21.086" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 1.664,
        width: 21.5,
        height: 21.086,
      }}>
        <path d={"M 9.72 3.305 L 9.718 3.307 L 2.979 10.046 C 2.686 10.339 2.507 10.726 2.472 11.139 L 2.101 15.596 C 2.011 16.674 2.912 17.575 3.99 17.485 L 8.447 17.114 C 8.86 17.079 9.247 16.9 9.539 16.607 L 19.073 7.073 C 19.757 6.39 19.757 5.282 19.073 4.598 L 14.987 0.513 C 14.304 -0.171 13.196 -0.171 12.513 0.513 L 9.721 3.304 L 9.72 3.305 Z M 13.927 1.573 C 13.829 1.476 13.671 1.476 13.573 1.573 L 11.311 3.836 L 15.75 8.275 L 18.013 6.013 C 18.11 5.915 18.11 5.757 18.013 5.659 L 13.927 1.573 Z M 8.479 15.546 L 14.689 9.336 L 10.25 4.896 L 4.039 11.107 C 3.998 11.149 3.972 11.204 3.967 11.263 L 3.596 15.72 C 3.583 15.874 3.711 16.003 3.865 15.99 L 8.323 15.619 C 8.382 15.614 8.437 15.588 8.479 15.546 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 0.75 19.586 C 0.336 19.586 0 19.922 0 20.336 C 0 20.75 0.336 21.086 0.75 21.086 L 20.75 21.086 C 21.164 21.086 21.5 20.75 21.5 20.336 C 21.5 19.922 21.164 19.586 20.75 19.586 L 0.75 19.586 Z"} fill="currentColor" fillRule="nonzero" />
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
      <svg width={21.500} height={21.086} viewBox="0 0 21.500 21.086" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 1.664,
        width: 21.5,
        height: 21.086,
      }}>
        <path d={"M 14.987 0.513 C 14.304 -0.171 13.196 -0.171 12.513 0.513 L 10.249 2.776 C 10.26 2.785 10.27 2.795 10.28 2.805 L 16.78 9.305 C 16.791 9.316 16.8 9.326 16.81 9.337 L 19.073 7.073 C 19.757 6.39 19.757 5.282 19.073 4.598 L 14.987 0.513 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 2.979 10.046 L 9.19 3.835 C 9.2 3.846 9.209 3.856 9.22 3.866 L 15.72 10.366 C 15.73 10.376 15.74 10.386 15.751 10.396 L 9.539 16.607 C 9.247 16.9 8.86 17.079 8.447 17.114 L 3.99 17.485 C 2.912 17.575 2.011 16.674 2.101 15.596 L 2.472 11.139 C 2.506 10.726 2.686 10.339 2.979 10.046 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0.75 19.586 C 0.336 19.586 0 19.922 0 20.336 C 0 20.75 0.336 21.086 0.75 21.086 L 20.75 21.086 C 21.164 21.086 21.5 20.75 21.5 20.336 C 21.5 19.922 21.164 19.586 20.75 19.586 L 0.75 19.586 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcEdit;
