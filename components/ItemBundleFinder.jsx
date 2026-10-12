import { IconIcBundleDefinition } from './IconIcBundleDefinition.jsx';

// figma node: 5980:291 Item/Bundle Finder (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function ItemBundleFinder(_p = {}) {
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
        }}>{props.icon1 ?? <IconIcBundleDefinition fill={false} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 26,
      height: 26,
      borderRadius: 4,
      backgroundColor: "rgb(238,238,238)",
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
        }}>{props.icon1 ?? <IconIcBundleDefinition fill={true} />}</div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Pressed
    "state=pressed": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ItemBundleFinder;
