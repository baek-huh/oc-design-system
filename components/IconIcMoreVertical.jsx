// figma node: 124:308 icon/ic-more-vertical
export function IconIcMoreVertical(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={4} height={18} viewBox="0 0 4 18" fill="none" style={{
        position: "absolute",
        left: 10,
        top: 3,
        width: 4,
        height: 18,
      }}>
        <path d={"M 2 4 C 0.895 4 0 3.105 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 2 11 C 0.895 11 0 10.105 0 9 C 0 7.895 0.895 7 2 7 C 3.105 7 4 7.895 4 9 C 4 10.105 3.105 11 2 11 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 16 C 0 17.105 0.895 18 2 18 C 3.105 18 4 17.105 4 16 C 4 14.895 3.105 14 2 14 C 0.895 14 0 14.895 0 16 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default IconIcMoreVertical;
