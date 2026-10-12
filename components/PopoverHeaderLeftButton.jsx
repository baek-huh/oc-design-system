import { IconIcFilter } from './IconIcFilter.jsx';

// figma node: 7719:1557 Popover Header / LeftButton (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "button=" + __venc(p.button);

export function PopoverHeaderLeftButton(_p = {}) {
  const props = { ..._p, button: _p.button ?? "icon" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <IconIcFilter style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 25,
      height: 20,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 25,
        height: 20,
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
      }}>{props.text1 ?? "취소"}</span>
    </div>
  );
  const __impls = {
    // figma: Button=Icon
    "button=icon": __body0,
    // figma: Button=Text
    "button=text": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PopoverHeaderLeftButton;
