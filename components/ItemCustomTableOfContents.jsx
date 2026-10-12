import { IconIcNumberList } from './IconIcNumberList.jsx';

// figma node: 5591:1331 Item/Custom Table Of Contents (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ItemCustomTableOfContents(_p = {}) {
  const props = { ..._p, state: _p.state ?? "pressed" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 26,
      height: 26,
      borderRadius: 4,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcNumberList />}</div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Pressed
    "state=pressed": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemCustomTableOfContents;
