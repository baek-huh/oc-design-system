import { IconIcX } from './IconIcX.jsx';

// figma node: 8028:1076 Close
export function Close(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 10,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: -2,
          top: -2,
          width: 14,
          height: 14,
        }}>{props.icon1 ?? <IconIcX style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
}
export default Close;
