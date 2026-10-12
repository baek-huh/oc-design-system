// figma node: 731:3135 badge/dot (28 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size) + '|' + "border=" + __venc(p.border);

export function BadgeDot(_p = {}) {
  const props = { ..._p, type: _p.type ?? "critical", size: _p.size ?? "lg", border: _p.border ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 4,
      height: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 4,
      height: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 4,
        height: 4,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
        boxShadow: "0 0 0 1px rgb(255,255,255)",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 6,
      height: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 6,
      height: 6,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
        boxShadow: "0 0 0 2px rgb(255,255,255)",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 10,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
      }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 10,
      height: 10,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 10,
        height: 10,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
        boxShadow: "0 0 0 2px rgb(255,255,255)",
      }} />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
      }} />
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 8,
      height: 8,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
        boxShadow: "0 0 0 2px rgb(255,255,255)",
      }} />
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      borderRadius: 9999,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 14,
        height: 14,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
      }} />
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 14,
      height: 14,
      borderRadius: 9999,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 14,
        height: 14,
        borderRadius: "50%",
        backgroundColor: "rgb(34,119,255)",
        boxShadow: "0 0 0 2px rgb(255,255,255)",
      }} />
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
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
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg height={7} viewBox="0 0 6.660 7" fill="none" style={{
        position: "relative",
        height: 7,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 7 L 0 0 L 1.63 0 L 5.49 4.66 L 4.72 4.66 L 4.72 0 L 6.66 0 L 6.66 7 L 5.03 7 L 1.17 2.34 L 1.94 2.34 L 1.94 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 9999,
      backgroundColor: "rgb(239,83,80)",
      boxShadow: "0 0 0 2px var(--white)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 4px 2px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg height={7} viewBox="0 0 6.660 7" fill="none" style={{
        position: "relative",
        height: 7,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 7 L 0 0 L 1.63 0 L 5.49 4.66 L 4.72 4.66 L 4.72 0 L 6.66 0 L 6.66 7 L 5.03 7 L 1.17 2.34 L 1.94 2.34 L 1.94 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
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
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg height={7} viewBox="0 0 6.660 7" fill="none" style={{
        position: "relative",
        height: 7,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 7 L 0 0 L 1.63 0 L 5.49 4.66 L 4.72 4.66 L 4.72 0 L 6.66 0 L 6.66 7 L 5.03 7 L 1.17 2.34 L 1.94 2.34 L 1.94 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 18,
      height: 18,
      borderRadius: 9999,
      backgroundColor: "rgb(239,83,80)",
      boxShadow: "0 0 0 2px var(--white)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "3px 5px 3px 5px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg height={7} viewBox="0 0 6.660 7" fill="none" style={{
        position: "relative",
        height: 7,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 7 L 0 0 L 1.63 0 L 5.49 4.66 L 4.72 4.66 L 4.72 0 L 6.66 0 L 6.66 7 L 5.03 7 L 1.17 2.34 L 1.94 2.34 L 1.94 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
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
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg height={7} viewBox="0 0 6.660 7" fill="none" style={{
        position: "relative",
        height: 7,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 7 L 0 0 L 1.63 0 L 5.49 4.66 L 4.72 4.66 L 4.72 0 L 6.66 0 L 6.66 7 L 5.03 7 L 1.17 2.34 L 1.94 2.34 L 1.94 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      minWidth: 18,
      maxWidth: 42,
      maxHeight: null,
      borderRadius: 9999,
      backgroundColor: "rgb(239,83,80)",
      boxShadow: "0 0 0 2px var(--white)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 6px 4px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg height={7} viewBox="0 0 6.660 7" fill="none" style={{
        position: "relative",
        height: 7,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 7 L 0 0 L 1.63 0 L 5.49 4.66 L 4.72 4.66 L 4.72 0 L 6.66 0 L 6.66 7 L 5.03 7 L 1.17 2.34 L 1.94 2.34 L 1.94 7 L 0 7 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
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
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg height={8.400} viewBox="0 0 7.992 8.400" fill="none" style={{
        position: "relative",
        height: 8.4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 8.4 L 0 0 L 1.956 0 L 6.588 5.592 L 5.664 5.592 L 5.664 0 L 7.992 0 L 7.992 8.4 L 6.036 8.4 L 1.404 2.808 L 2.328 2.808 L 2.328 8.4 L 0 8.4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 9999,
      backgroundColor: "rgb(239,83,80)",
      boxShadow: "0 0 0 2px var(--white)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <svg height={8.400} viewBox="0 0 7.992 8.400" fill="none" style={{
        position: "relative",
        height: 8.4,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 8.4 L 0 0 L 1.956 0 L 6.588 5.592 L 5.664 5.592 L 5.664 0 L 7.992 0 L 7.992 8.4 L 6.036 8.4 L 1.404 2.808 L 2.328 2.808 L 2.328 8.4 L 0 8.4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: type=primary, size=xsmall, border=false
    "type=primary|size=xs|border=false": __body0,
    // figma: type=critical, size=xsmall, border=false
    "type=critical|size=xs|border=false": __body0,
    // figma: type=primary, size=xsmall, border=true
    "type=primary|size=xs|border=true": __body1,
    // figma: type=critical, size=xsmall, border=true
    "type=critical|size=xs|border=true": __body1,
    // figma: type=primary, size=small, border=false
    "type=primary|size=sm|border=false": __body2,
    // figma: type=critical, size=small, border=false
    "type=critical|size=sm|border=false": __body2,
    // figma: type=primary, size=small, border=true
    "type=primary|size=sm|border=true": __body3,
    // figma: type=critical, size=small, border=true
    "type=critical|size=sm|border=true": __body3,
    // figma: type=primary, size=large, border=false
    "type=primary|size=lg|border=false": __body4,
    // figma: type=critical, size=large, border=false
    "type=critical|size=lg|border=false": __body4,
    // figma: type=primary, size=large, border=true
    "type=primary|size=lg|border=true": __body5,
    // figma: type=critical, size=large, border=true
    "type=critical|size=lg|border=true": __body5,
    // figma: type=primary, size=medium, border=false
    "type=primary|size=md|border=false": __body6,
    // figma: type=critical, size=medium, border=false
    "type=critical|size=md|border=false": __body6,
    // figma: type=primary, size=medium, border=true
    "type=primary|size=md|border=true": __body7,
    // figma: type=critical, size=medium, border=true
    "type=critical|size=md|border=true": __body7,
    // figma: type=primary, size=xlarge, border=false
    "type=primary|size=xl|border=false": __body8,
    // figma: type=critical, size=xlarge, border=false
    "type=critical|size=xl|border=false": __body8,
    // figma: type=primary, size=xlarge, border=true
    "type=primary|size=xl|border=true": __body9,
    // figma: type=critical, size=xlarge, border=true
    "type=critical|size=xl|border=true": __body9,
    // figma: type=badge, size=small, border=false
    "type=badge|size=sm|border=false": __body10,
    // figma: type=badge, size=small, border=true
    "type=badge|size=sm|border=true": __body11,
    // figma: type=badge, size=medium, border=false
    "type=badge|size=md|border=false": __body12,
    // figma: type=badge, size=medium, border=true
    "type=badge|size=md|border=true": __body13,
    // figma: type=badge, size=large, border=false
    "type=badge|size=lg|border=false": __body14,
    // figma: type=badge, size=large, border=true
    "type=badge|size=lg|border=true": __body15,
    // figma: type=badge, size=xlarge, border=false
    "type=badge|size=xl|border=false": __body16,
    // figma: type=badge, size=xlarge, border=true
    "type=badge|size=xl|border=true": __body17,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default BadgeDot;
