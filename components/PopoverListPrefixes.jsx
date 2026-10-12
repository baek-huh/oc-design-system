import { IconIcEdit } from './IconIcEdit.jsx';

// figma node: 9984:584 Popover List / Prefixes (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prefixes=" + __venc(p.prefixes);

export function PopoverListPrefixes(_p = {}) {
  const props = { ..._p, prefixes: _p.prefixes ?? "icon" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 2px 2px 2px",
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
        }}>{props.icon ?? <IconIcEdit fill={false} />}</div>
    </div>
  );
  const __impls = {
    // figma: Prefixes=Icon
    "prefixes=icon": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PopoverListPrefixes;
