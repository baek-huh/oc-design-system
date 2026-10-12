// figma node: 2648:7210 icon/ic-spinner
export function IconIcSpinner(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.500} height={21.500} viewBox="0 0 21.500 21.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 1.25,
        width: 21.5,
        height: 21.5,
      }}>
        <path d={"M 10.75 1.5 C 5.641 1.5 1.5 5.641 1.5 10.75 C 1.5 15.859 5.641 20 10.75 20 C 15.859 20 20 15.859 20 10.75 C 20 5.641 15.859 1.5 10.75 1.5 Z M 0 10.75 C 0 4.813 4.813 0 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 C 21.5 16.687 16.687 21.5 10.75 21.5 C 4.813 21.5 0 16.687 0 10.75 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 20 10.75 C 20 5.641 15.859 1.5 10.75 1.5 L 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 L 20 10.75 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default IconIcSpinner;
