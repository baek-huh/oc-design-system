import { IconIcArrowRight } from './IconIcArrowRight.jsx';
import { TagDefaultSmallNone } from './TagDefaultSmallNone.jsx';

// figma node: 7487:24032 Pulldown List / Suffixes (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function PulldownListSuffixes(_p = {}) {
  const props = { ..._p, type: _p.type ?? "tag" };
  const __body0 = () => (
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
        }}>{props.icon1 ?? <TagDefaultSmallNone />}</div>
    </div>
  );
  const __body1 = () => (
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
        }}>{props.icon1 ?? <IconIcArrowRight small={true} />}</div>
    </div>
  );
  const __impls = {
    // figma: Type=Tag
    "type=tag": __body0,
    // figma: Type=Icon
    "type=icon": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PulldownListSuffixes;
