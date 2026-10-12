import { IconIcCircleEmpty } from './IconIcCircleEmpty.jsx';

// figma node: 5591:1212 item/color (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "select=" + __venc(p.select);

export function ItemColor(_p = {}) {
  const props = { ..._p, select: _p.select ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
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
        }}>{props.icon1 ?? <IconIcCircleEmpty fill={true} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
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
        }}>{props.icon1 ?? <IconIcCircleEmpty fill={true} />}</div>
    </div>
  );
  const __impls = {
    // figma: select=false
    "select=false": __body0,
    // figma: select=true
    "select=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ItemColor;
