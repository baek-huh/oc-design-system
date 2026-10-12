import { IconIcCheck } from './IconIcCheck.jsx';
import { ItemCheckBox } from './ItemCheckBox.jsx';

// figma node: 7487:24039 Pulldown List / Prefixes (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "icon=" + __venc(p.icon);

export function PulldownListPrefixes(_p = {}) {
  const props = { ..._p, icon: _p.icon ?? "icon" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <IconIcCheck />}</div>
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
        }}>{props.icon1 ?? <ItemCheckBox state={"default"} checked={false} size={"sm"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Icon=Icon
    "icon=icon": __body0,
    // figma: Icon=CheckBox
    "icon=checkbox": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PulldownListPrefixes;
