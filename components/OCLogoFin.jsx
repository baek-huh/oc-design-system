// figma node: 10778:4265 oc-logo-fin (placeholder OC mark)
export function OCLogoFin(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 39.4,
      height: 18,
      overflow: "hidden",
      position: "relative",
      color: "rgb(34,119,255)",
      ...props.style,
    }}>
      <svg width={39.4} height={18} viewBox="0 0 39.4 18" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 39.4,
        height: 18,
      }}>
        <path d={"M 0 9 A 9 9 0 1 0 18 9 A 9 9 0 1 0 0 9 Z M 3.6 9 A 5.4 5.4 0 1 1 14.4 9 A 5.4 5.4 0 1 1 3.6 9 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 37.088 2.978 A 9 9 0 1 0 37.088 15.022 L 34.413 12.613 A 5.4 5.4 0 1 1 34.413 5.387 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default OCLogoFin;
