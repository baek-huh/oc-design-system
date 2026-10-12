// figma node: 124:293 icon/ic-check
export function IconIcCheck(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={15} height={10} viewBox="0 0 15 10" fill="none" style={{
        position: "absolute",
        left: 4.5,
        top: 7,
        width: 15,
        height: 10,
      }}>
        <path d={"M 14.747 0.258 C 15.084 0.603 15.084 1.162 14.747 1.506 L 6.67 9.742 C 6.507 9.907 6.287 10 6.058 10 C 5.828 10 5.608 9.907 5.446 9.742 L 0.253 4.447 C -0.084 4.103 -0.084 3.544 0.253 3.2 C 0.591 2.855 1.139 2.855 1.477 3.2 L 6.058 7.87 L 13.523 0.258 C 13.861 -0.086 14.409 -0.086 14.747 0.258 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default IconIcCheck;
