import { IconArrowRightSmallLine } from './IconArrowRightSmallLine.jsx';
import { Switch } from './Switch.jsx';
import { TagDefaultSmallFalse } from './TagDefaultSmallFalse.jsx';

// figma node: 9983:5084 Popover List / Suffixes (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function PopoverListSuffixes(_p = {}) {
  const props = { ..._p, type: _p.type ?? "switch" };
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
        }}>{props.icon1 ?? <IconArrowRightSmallLine />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <Switch state={"default"} size={"xs"} checked={true} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <TagDefaultSmallFalse />}</div>
    </div>
  );
  const __impls = {
    // figma: Type=Icon
    "type=icon": __body0,
    // figma: Type=Switch
    "type=switch": __body1,
    // figma: Type=Tag
    "type=tag": __body2,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default PopoverListSuffixes;
