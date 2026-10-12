// figma node: 10227:6175 icon/ic-save (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcSave(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={17.500} height={17.500} viewBox="0 0 17.500 17.500" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 3.25,
        width: 17.5,
        height: 17.5,
      }}>
        <path d={"M 8.75 8 C 7.231 8 6 9.231 6 10.75 C 6 12.269 7.231 13.5 8.75 13.5 C 10.269 13.5 11.5 12.269 11.5 10.75 C 11.5 9.231 10.269 8 8.75 8 Z M 7.5 10.75 C 7.5 10.06 8.06 9.5 8.75 9.5 C 9.44 9.5 10 10.06 10 10.75 C 10 11.44 9.44 12 8.75 12 C 8.06 12 7.5 11.44 7.5 10.75 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 11.302 0 L 2.75 0 C 1.231 0 0 1.231 0 2.75 L 0 14.75 C 0 16.269 1.231 17.5 2.75 17.5 L 14.75 17.5 C 16.269 17.5 17.5 16.269 17.5 14.75 L 17.5 5.676 C 17.5 4.868 17.145 4.102 16.529 3.579 L 13.081 0.653 C 12.584 0.231 11.953 0 11.302 0 Z M 16 14.75 L 16 5.676 C 16 5.309 15.839 4.96 15.559 4.723 L 12.11 1.797 C 11.884 1.605 11.598 1.5 11.302 1.5 L 10.5 1.5 L 10.5 3.75 C 10.5 4.716 9.716 5.5 8.75 5.5 L 4.75 5.5 C 3.784 5.5 3 4.716 3 3.75 L 3 1.5 L 2.75 1.5 C 2.06 1.5 1.5 2.06 1.5 2.75 L 1.5 14.75 C 1.5 15.44 2.06 16 2.75 16 L 14.75 16 C 15.44 16 16 15.44 16 14.75 Z M 4.5 3.75 L 4.5 1.5 L 9 1.5 L 9 3.75 C 9 3.888 8.888 4 8.75 4 L 4.75 4 C 4.612 4 4.5 3.888 4.5 3.75 Z"} fill="currentColor" fillRule="evenodd" />
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
      <svg width={17.500} height={17.500} viewBox="0 0 17.500 17.500" fill="none" style={{
        position: "absolute",
        left: 3.25,
        top: 3.25,
        width: 17.5,
        height: 17.5,
      }}>
        <path d={"M 8.75 9.5 C 8.06 9.5 7.5 10.06 7.5 10.75 C 7.5 11.44 8.06 12 8.75 12 C 9.44 12 10 11.44 10 10.75 C 10 10.06 9.44 9.5 8.75 9.5 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 8.75 5.5 C 9.716 5.5 10.5 4.716 10.5 3.75 L 10.5 0 L 11.302 0 C 11.953 0 12.584 0.231 13.081 0.653 L 16.529 3.579 C 17.145 4.102 17.5 4.868 17.5 5.676 L 17.5 14.75 C 17.5 16.269 16.269 17.5 14.75 17.5 L 2.75 17.5 C 1.231 17.5 0 16.269 0 14.75 L 0 2.75 C 0 1.231 1.231 0 2.75 0 L 3 0 L 3 3.75 C 3 4.716 3.784 5.5 4.75 5.5 L 8.75 5.5 Z M 6 10.75 C 6 9.231 7.231 8 8.75 8 C 10.269 8 11.5 9.231 11.5 10.75 C 11.5 12.269 10.269 13.5 8.75 13.5 C 7.231 13.5 6 12.269 6 10.75 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 4.5 0 L 4.5 3.75 C 4.5 3.888 4.612 4 4.75 4 L 8.75 4 C 8.888 4 9 3.888 9 3.75 L 9 0 L 4.5 0 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcSave;
