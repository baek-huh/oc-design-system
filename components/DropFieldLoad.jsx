// figma node: 968:2951 DropField/Load
export function DropFieldLoad(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 112,
      height: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 112,
        height: 4,
        borderRadius: 2,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
}
export default DropFieldLoad;
