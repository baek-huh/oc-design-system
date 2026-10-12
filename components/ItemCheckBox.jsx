import { IconIcCheck } from './IconIcCheck.jsx';
import { IconIcMinus } from './IconIcMinus.jsx';

// figma node: 673:3034 item/check-box (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "checked=" + __venc(p.checked) + '|' + "size=" + __venc(p.size);

export function ItemCheckBox(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", checked: _p.checked ?? false, size: _p.size ?? "md" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 8,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        borderRadius: 8,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(189,189,189)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 8,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        backgroundColor: "rgb(189,189,189)",
      }} />
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <IconIcMinus style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 8,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        backgroundColor: "rgb(189,189,189)",
      }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <IconIcCheck />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 8,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        backgroundColor: "rgb(189,189,189)",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(189,189,189)",
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        borderRadius: 6,
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
      }} />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        backgroundColor: "rgb(34,119,255)",
      }} />
      <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 12,
          height: 12,
        }}>{props.icon1 ?? <IconIcMinus style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        backgroundColor: "rgb(34,119,255)",
      }} />
      <div style={{
          position: "absolute",
          left: 2.5,
          top: 2.5,
          width: 15,
          height: 15,
        }}>{props.icon1 ?? <IconIcMinus style={{ transform: "scale(0.625, 0.625)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        backgroundColor: "rgb(34,119,255)",
      }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>{props.icon1 ?? <IconIcCheck style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        backgroundColor: "rgb(34,119,255)",
      }} />
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>{props.icon1 ?? <IconIcCheck style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        backgroundColor: "rgb(238,238,238)",
      }} />
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        backgroundColor: "rgb(238,238,238)",
      }} />
    </div>
  );
  const __impls = {
    // figma: state=default, checked=false, size=large
    "state=default|checked=false|size=lg": __body0,
    // figma: state=indeterminate, checked=true, size=large
    "state=indeterminate|checked=true|size=lg": __body1,
    // figma: state=check, checked=true, size=large
    "state=check|checked=true|size=lg": __body2,
    // figma: state=disabled, checked=false, size=large
    "state=disabled|checked=false|size=lg": __body3,
    // figma: state=default, checked=false, size=small
    "state=default|checked=false|size=sm": __body4,
    // figma: state=default, checked=false, size=medium
    "state=default|checked=false|size=md": __body5,
    // figma: state=indeterminate, checked=true, size=small
    "state=indeterminate|checked=true|size=sm": __body6,
    // figma: state=indeterminate, checked=true, size=medium
    "state=indeterminate|checked=true|size=md": __body7,
    // figma: state=check, checked=true, size=small
    "state=check|checked=true|size=sm": __body8,
    // figma: state=check, checked=true, size=medium
    "state=check|checked=true|size=md": __body9,
    // figma: state=disabled, checked=false, size=small
    "state=disabled|checked=false|size=sm": __body10,
    // figma: state=disabled, checked=false, size=medium
    "state=disabled|checked=false|size=md": __body11,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default ItemCheckBox;
