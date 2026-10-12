import { ItemCheckBox } from './ItemCheckBox.jsx';

// figma node: 1501:6218 Item/Action (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ItemAction(_p = {}) {
  const props = { ..._p, type: _p.type ?? "checkbox" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ItemCheckBox state={"default"} checked={false} size={"sm"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Type=CheckBox
    "type=checkbox": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemAction;
