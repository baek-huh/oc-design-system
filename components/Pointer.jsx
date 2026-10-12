// figma node: 4419:4839 Pointer
export function Pointer(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.08)",
      }} />
    </div>
  );
}
export default Pointer;
