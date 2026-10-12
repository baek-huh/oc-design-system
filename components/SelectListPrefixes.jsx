import { IconIcCheck } from './IconIcCheck.jsx';
import { IconIcExport } from './IconIcExport.jsx';
import { ItemCheckBox } from './ItemCheckBox.jsx';

// figma node: 7814:1668 select-list / prefixes (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "prefixes=" + __venc(p.prefixes);

export function SelectListPrefixes(_p = {}) {
  const props = { ..._p, prefixes: _p.prefixes ?? "icon" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon ?? <IconIcExport style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <IconIcCheck style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <ItemCheckBox state={"default"} checked={false} size={"sm"} />}</div>
    </div>
  );
  const __impls = {
    // figma: prefixes=icon
    "prefixes=icon": __body0,
    // figma: prefixes=select
    "prefixes=select": __body1,
    // figma: prefixes=check-box
    "prefixes=check-box": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SelectListPrefixes;
