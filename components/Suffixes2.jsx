import { IconIcCalendar } from './IconIcCalendar.jsx';
import { IconIcEyeOff } from './IconIcEyeOff.jsx';

// figma node: 7367:15355 Suffixes (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Suffixes2(_p = {}) {
  const props = { ..._p, type: _p.type ?? "icon-calendar-line" };
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
        }}>{props.icon1 ?? <IconIcEyeOff fill={false} />}</div>
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
        }}>{props.icon1 ?? <IconIcCalendar fill={false} />}</div>
    </div>
  );
  const __impls = {
    // figma: Type=icon-eye-off-line
    "type=icon-eye-off-line": __body0,
    // figma: Type=icon-calendar-line
    "type=icon-calendar-line": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Suffixes2;
