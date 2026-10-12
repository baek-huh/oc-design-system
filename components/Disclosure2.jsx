import { IconIcArrowDown } from './IconIcArrowDown.jsx';
import { IconIcArrowUp } from './IconIcArrowUp.jsx';

// figma node: 7814:1626 disclosure (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Disclosure2(_p = {}) {
  const props = { ..._p, type: _p.type ?? "down" };
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
        }}>{props.icon1 ?? <IconIcArrowDown small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body1 = () => (
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
        }}>{props.icon1 ?? <IconIcArrowUp small={true} style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: Type=Down
    "type=down": __body0,
    // figma: Type=Up
    "type=up": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Disclosure2;
