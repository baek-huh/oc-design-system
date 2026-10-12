// figma node: 124:307 icon/ic-more-horizontal
export function IconIcMoreHorizontal(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={18} height={4} viewBox="0 0 18 4" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 10,
        width: 18,
        height: 4,
      }}>
        <path d={"M 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 11 2 C 11 3.105 10.105 4 9 4 C 7.895 4 7 3.105 7 2 C 7 0.895 7.895 0 9 0 C 10.105 0 11 0.895 11 2 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 16 4 C 17.105 4 18 3.105 18 2 C 18 0.895 17.105 0 16 0 C 14.895 0 14 0.895 14 2 C 14 3.105 14.895 4 16 4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default IconIcMoreHorizontal;
