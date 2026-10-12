// figma node: 4417:2472 Progress Indicators (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "color=" + __venc(p.color) + '|' + "gauge=" + __venc(p.gauge);

export function ProgressIndicators(_p = {}) {
  const props = { ..._p, size: _p.size ?? "4px", color: _p.color ?? "primary", gauge: _p.gauge ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 216,
      height: 2,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 216,
        height: 2,
        borderRadius: 4,
        backgroundColor: "rgb(238,238,238)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 162,
        height: 2,
        borderRadius: 4,
        backgroundColor: "rgb(34,119,255)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 216,
      height: 2,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 216,
        height: 2,
        borderRadius: 4,
        backgroundColor: "rgb(217,217,217)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 162,
        height: 2,
        borderRadius: 4,
        backgroundColor: "rgb(217,217,217)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 216,
      height: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 216,
        height: 4,
        borderRadius: 8,
        backgroundColor: "rgb(238,238,238)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 162,
        height: 4,
        borderRadius: 8,
        backgroundColor: "rgb(97,97,97)",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 216,
      height: 2,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 216,
        height: 2,
        borderRadius: 4,
        backgroundColor: "rgb(238,238,238)",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 216,
      height: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 216,
        height: 4,
        borderRadius: 8,
        backgroundColor: "rgb(238,238,238)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Size=2px, Color=Gray 700, Gauge=True
    "size=2px|color=gray 700|gauge=true": __body0,
    // figma: Size=2px, Color=Primary, Gauge=True
    "size=2px|color=primary|gauge=true": __body1,
    // figma: Size=4px, Color=Gray 700, Gauge=True
    "size=4px|color=gray 700|gauge=true": __body2,
    // figma: Size=4px, Color=Primary, Gauge=True
    "size=4px|color=primary|gauge=true": __body2,
    // figma: Size=2px, Color=Gray 700, Gauge=False
    "size=2px|color=gray 700|gauge=false": __body3,
    // figma: Size=2px, Color=Primary, Gauge=False
    "size=2px|color=primary|gauge=false": __body3,
    // figma: Size=4px, Color=Gray 700, Gauge=False
    "size=4px|color=gray 700|gauge=false": __body4,
    // figma: Size=4px, Color=Primary, Gauge=False
    "size=4px|color=primary|gauge=false": __body4,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ProgressIndicators;
