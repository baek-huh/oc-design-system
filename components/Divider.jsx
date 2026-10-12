// figma node: 1134:3218 Divider (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "hierarchy=" + __venc(p.hierarchy) + '|' + "margin=" + __venc(p.margin);

export function Divider(_p = {}) {
  const props = { ..._p, hierarchy: _p.hierarchy ?? "hierarchy-1", margin: _p.margin ?? "24px" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 216,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(238,238,238)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 216,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "12px 0px 12px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(238,238,238)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 216,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(245,245,245)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 216,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(238,238,238)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 216,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "24px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(238,238,238)",
        flexGrow: 1,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __impls = {
    // figma: Hierarchy=Hierarchy-1, Margin=0px
    "hierarchy=hierarchy-1|margin=0px": __body0,
    // figma: Hierarchy=Hierarchy-2, Margin=0px
    "hierarchy=hierarchy-2|margin=0px": __body0,
    // figma: Hierarchy=Hierarchy-3, Margin=0px
    "hierarchy=hierarchy-3|margin=0px": __body0,
    // figma: Hierarchy=Hierarchy-4, Margin=0px
    "hierarchy=hierarchy-4|margin=0px": __body0,
    // figma: Hierarchy=Hierarchy-1, Margin=12px
    "hierarchy=hierarchy-1|margin=12px": __body1,
    // figma: Hierarchy=Hierarchy-1, Margin=8px
    "hierarchy=hierarchy-1|margin=8px": __body2,
    // figma: Hierarchy=Hierarchy-2, Margin=12px
    "hierarchy=hierarchy-2|margin=12px": __body1,
    // figma: Hierarchy=Hierarchy-3, Margin=12px
    "hierarchy=hierarchy-3|margin=12px": __body1,
    // figma: Hierarchy=Hierarchy-4, Margin=12px
    "hierarchy=hierarchy-4|margin=12px": __body1,
    // figma: Hierarchy=Hierarchy-2, Margin=8px
    "hierarchy=hierarchy-2|margin=8px": __body3,
    // figma: Hierarchy=Hierarchy-3, Margin=8px
    "hierarchy=hierarchy-3|margin=8px": __body3,
    // figma: Hierarchy=Hierarchy-4, Margin=8px
    "hierarchy=hierarchy-4|margin=8px": __body3,
    // figma: Hierarchy=Hierarchy-1, Margin=24px
    "hierarchy=hierarchy-1|margin=24px": __body4,
    // figma: Hierarchy=Hierarchy-2, Margin=24px
    "hierarchy=hierarchy-2|margin=24px": __body4,
    // figma: Hierarchy=Hierarchy-3, Margin=24px
    "hierarchy=hierarchy-3|margin=24px": __body4,
    // figma: Hierarchy=Hierarchy-4, Margin=24px
    "hierarchy=hierarchy-4|margin=24px": __body4,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Divider;
