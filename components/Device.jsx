// figma node: 7758:3355 Device (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "device=" + __venc(p.device) + '|' + "light=" + __venc(p.light);

export function Device(_p = {}) {
  const props = { ..._p, device: _p.device ?? "mobile", light: _p.light ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(38,40,49)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(245,246,250)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Mobile"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(229,230,235)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(38,40,49)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Mobile"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(38,40,49)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(245,246,250)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tablet"}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(229,230,235)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(38,40,49)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Tablet"}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(38,40,49)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(245,246,250)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "PC"}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 10,
        backgroundColor: "rgb(229,230,235)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 20px 16px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "100%",
          textBox: "trim-both cap alphabetic",
          letterSpacing: "-0.010em",
          color: "rgb(38,40,49)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "PC"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Device=Mobile, light=False
    "device=mobile|light=false": __body0,
    // figma: Device=Mobile, light=True
    "device=mobile|light=true": __body1,
    // figma: Device=Tablet, light=False
    "device=tablet|light=false": __body2,
    // figma: Device=Tablet, light=True
    "device=tablet|light=true": __body3,
    // figma: Device=PC, light=False
    "device=pc|light=false": __body4,
    // figma: Device=PC, light=True
    "device=pc|light=true": __body5,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Device;
