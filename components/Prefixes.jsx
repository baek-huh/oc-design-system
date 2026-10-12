import { IconIcPlus } from './IconIcPlus.jsx';

// figma node: 7118:1383 prefixes (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Prefixes(_p = {}) {
  const props = { ..._p, type: _p.type ?? "icon-line" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <IconIcPlus />}</div>
    </div>
  );
  const __impls = {
    // figma: type=icon-line
    "type=icon-line": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Prefixes;
