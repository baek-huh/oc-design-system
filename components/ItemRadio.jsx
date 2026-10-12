// figma node: 878:2832 Item/Radio (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "checked=" + __venc(p.checked) + '|' + "size=" + __venc(p.size);

export function ItemRadio(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", checked: _p.checked ?? true, size: _p.size ?? "sm" };
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
        borderRadius: "50%",
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(189,189,189)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(189,189,189)",
      }} />
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
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
      }} />
    </div>
  );
  const __body4 = () => (
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
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(189,189,189)",
      }} />
      <div style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(189,189,189)",
      }} />
      <div style={{
        position: "absolute",
        left: 4,
        top: 4,
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
      }} />
    </div>
  );
  const __body6 = () => (
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
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
      }} />
      <div style={{
        position: "absolute",
        left: 6,
        top: 6,
        width: 12,
        height: 12,
        borderRadius: "50%",
        backgroundColor: "rgb(202,222,255)",
      }} />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 16,
        height: 16,
        borderRadius: "50%",
        backgroundColor: "rgb(255,255,255)",
        boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
      }} />
      <div style={{
        position: "absolute",
        left: 4,
        top: 4,
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "rgb(202,222,255)",
      }} />
    </div>
  );
  const __impls = {
    // figma: State=Default, Checked=False, Size=Medium
    "state=default|checked=false|size=md": __body0,
    // figma: State=Default, Checked=False, Size=Small
    "state=default|checked=false|size=sm": __body1,
    // figma: State=Disabled, Checked=False, Size=Medium
    "state=disabled|checked=false|size=md": __body2,
    // figma: State=Disabled, Checked=False, Size=Small
    "state=disabled|checked=false|size=sm": __body3,
    // figma: State=Check, Checked=True, Size=Medium
    "state=check|checked=true|size=md": __body4,
    // figma: State=Check, Checked=True, Size=Small
    "state=check|checked=true|size=sm": __body5,
    // figma: State=Disabled, Checked=True, Size=Medium
    "state=disabled|checked=true|size=md": __body6,
    // figma: State=Disabled, Checked=True, Size=Small
    "state=disabled|checked=true|size=sm": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemRadio;
