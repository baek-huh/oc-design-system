import { IconIcCamera } from './IconIcCamera.jsx';

// figma node: 731:3196 badge/icon (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function BadgeIcon(_p = {}) {
  const props = { ..._p, size: _p.size ?? "md" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 18,
        height: 18,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
        boxShadow: "0 0 0 2px rgb(255,255,255)",
      }} />
      <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <IconIcCamera fill={true} style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />}</div>
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
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
        boxShadow: "0 0 0 2px rgb(255,255,255)",
      }} />
      <div style={{
          position: "absolute",
          left: 5,
          top: 5,
          width: 10,
          height: 10,
        }}>{props.icon1 ?? <IconIcCamera fill={true} style={{ transform: "scale(0.417, 0.417)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
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
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
        boxShadow: "0 0 0 2px rgb(255,255,255)",
      }} />
      <div style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <IconIcCamera fill={true} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: size=medium
    "size=md": __body0,
    // figma: size=large
    "size=lg": __body1,
    // figma: size=xlarge
    "size=xl": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default BadgeIcon;
