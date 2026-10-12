// figma node: 10227:6209 icon/ic-icloud-slash (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcIcloudSlash(_p = {}) {
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
      <svg width={21.500} height={18.500} viewBox="0 0 21.500 18.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 2.75,
        width: 21.5,
        height: 18.5,
      }}>
        <path d={"M 19.78 1.28 C 20.073 0.987 20.073 0.513 19.78 0.22 C 19.487 -0.073 19.013 -0.073 18.72 0.22 L 1.72 17.22 C 1.427 17.513 1.427 17.987 1.72 18.28 C 2.013 18.573 2.487 18.573 2.78 18.28 L 5.061 16 L 16.75 16 C 19.373 16 21.5 13.873 21.5 11.25 C 21.5 8.805 19.653 6.792 17.278 6.529 C 17.098 5.844 16.813 5.201 16.441 4.619 L 19.78 1.28 Z M 15.348 5.713 L 6.561 14.5 L 16.75 14.5 C 18.545 14.5 20 13.045 20 11.25 C 20 9.455 18.545 8 16.75 8 L 16.032 8 L 15.927 7.374 C 15.828 6.781 15.629 6.221 15.348 5.713 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 10.75 1.5 C 12.061 1.5 13.284 1.874 14.32 2.52 L 13.222 3.617 C 12.485 3.223 11.644 3 10.75 3 C 8.149 3 5.989 4.892 5.573 7.374 L 5.468 8 L 4.75 8 C 2.955 8 1.5 9.455 1.5 11.25 C 1.5 12.362 2.058 13.344 2.91 13.929 L 1.837 15.002 C 0.719 14.133 0 12.776 0 11.25 C 0 8.805 1.847 6.792 4.222 6.529 C 4.983 3.635 7.616 1.5 10.75 1.5 Z"} fill="currentColor" fillRule="nonzero" />
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
      <svg width={21.500} height={18.500} viewBox="0 0 21.500 18.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 2.75,
        width: 21.5,
        height: 18.5,
      }}>
        <path d={"M 19.78 1.28 C 20.073 0.987 20.073 0.513 19.78 0.22 C 19.487 -0.073 19.013 -0.073 18.72 0.22 L 1.72 17.22 C 1.427 17.513 1.427 17.987 1.72 18.28 C 2.013 18.573 2.487 18.573 2.78 18.28 L 5.061 16 L 16.75 16 C 19.373 16 21.5 13.873 21.5 11.25 C 21.5 8.805 19.653 6.792 17.278 6.529 C 17.098 5.844 16.813 5.201 16.441 4.619 L 19.78 1.28 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 10.75 1.5 C 12.061 1.5 13.284 1.874 14.32 2.52 L 1.837 15.002 C 0.719 14.133 0 12.776 0 11.25 C 0 8.805 1.847 6.792 4.222 6.529 C 4.983 3.635 7.616 1.5 10.75 1.5 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcIcloudSlash;
