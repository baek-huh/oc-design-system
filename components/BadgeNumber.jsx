// figma node: 731:3257 badge/number (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "border=" + __venc(p.border);

export function BadgeNumber(_p = {}) {
  const props = { ..._p, type: _p.type ?? "primary", size: _p.size ?? "sm", border: _p.border ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 16,
      minWidth: 16,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minWidth: 16,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(239,83,80)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 16,
      minWidth: 16,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(34,119,255)",
      boxShadow: "0 0 0 2px rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 18,
      minWidth: 18,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "3px 5px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minWidth: 18,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(239,83,80)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "3px 5px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 18,
      minWidth: 18,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(34,119,255)",
      boxShadow: "0 0 0 2px rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "3px 5px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 20,
      minWidth: 18,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minWidth: 18,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(239,83,80)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 20,
      minWidth: 18,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(34,119,255)",
      boxShadow: "0 0 0 2px rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 24,
      minWidth: 24,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minWidth: 24,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(239,83,80)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 24,
      minWidth: 24,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(34,119,255)",
      boxShadow: "0 0 0 2px rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "center",
        lineHeight: "18px",
        color: "rgb(255,255,255)",
        flexGrow: 1,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
  const __impls = {
    // figma: type=primary, size=small, border=false
    "type=primary|size=sm|border=false": __body0,
    // figma: type=secondary, size=small, border=false
    "type=secondary|size=sm|border=false": __body0,
    // figma: type=critical, size=small, border=false
    "type=critical|size=sm|border=false": __body1,
    // figma: type=primary, size=small, border=true
    "type=primary|size=sm|border=true": __body2,
    // figma: type=secondary, size=small, border=true
    "type=secondary|size=sm|border=true": __body2,
    // figma: type=critical, size=small, border=true
    "type=critical|size=sm|border=true": __body2,
    // figma: type=primary, size=medium, border=false
    "type=primary|size=md|border=false": __body3,
    // figma: type=secondary, size=medium, border=false
    "type=secondary|size=md|border=false": __body3,
    // figma: type=critical, size=medium, border=false
    "type=critical|size=md|border=false": __body4,
    // figma: type=primary, size=medium, border=true
    "type=primary|size=md|border=true": __body5,
    // figma: type=secondary, size=medium, border=true
    "type=secondary|size=md|border=true": __body5,
    // figma: type=critical, size=medium, border=true
    "type=critical|size=md|border=true": __body5,
    // figma: type=primary, size=large, border=false
    "type=primary|size=lg|border=false": __body6,
    // figma: type=secondary, size=large, border=false
    "type=secondary|size=lg|border=false": __body6,
    // figma: type=critical, size=large, border=false
    "type=critical|size=lg|border=false": __body7,
    // figma: type=primary, size=large, border=true
    "type=primary|size=lg|border=true": __body8,
    // figma: type=secondary, size=large, border=true
    "type=secondary|size=lg|border=true": __body8,
    // figma: type=critical, size=large, border=true
    "type=critical|size=lg|border=true": __body8,
    // figma: type=primary, size=xlarge, border=false
    "type=primary|size=xl|border=false": __body9,
    // figma: type=secondary, size=xlarge, border=false
    "type=secondary|size=xl|border=false": __body9,
    // figma: type=critical, size=xlarge, border=false
    "type=critical|size=xl|border=false": __body10,
    // figma: type=primary, size=xlarge, border=true
    "type=primary|size=xl|border=true": __body11,
    // figma: type=secondary, size=xlarge, border=true
    "type=secondary|size=xl|border=true": __body11,
    // figma: type=critical, size=xlarge, border=true
    "type=critical|size=xl|border=true": __body11,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default BadgeNumber;
