import { IconIcArrowRight } from './IconIcArrowRight.jsx';

// figma node: 8120:5679 suffixes (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Suffixes3(_p = {}) {
  const props = { ..._p, type: _p.type ?? "icon" };
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
        }}>{props.icon1 ?? <IconIcArrowRight small={true} />}</div>
    </div>
  );
  const __impls = {
    // figma: type=icon
    "type=icon": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Suffixes3;
