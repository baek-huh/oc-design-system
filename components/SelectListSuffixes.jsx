import { IconIcArrowRight } from './IconIcArrowRight.jsx';
import { Tag } from './Tag.jsx';

// figma node: 7814:1663 select-list / suffixes (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function SelectListSuffixes(_p = {}) {
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
        }}>{props.icon1 ?? <Tag color={"gray"} size={"md"} dIsabled={false} type={"light"} />}</div>
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "3px 3px 3px 3px",
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconIcArrowRight small={true} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=tag
    "type=tag": __body0,
    // figma: type=icon
    "type=icon": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SelectListSuffixes;
