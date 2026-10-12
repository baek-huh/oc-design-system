// figma node: 1134:3597 Tag/Warning/Large
export function TagWarningLarge(_p = {}) {
  const props = { ..._p, showlcon: _p.showlcon ?? true, shoRemovable: _p.shoRemovable ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(238,238,238)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 10px 8px 10px",
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
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(97,97,97)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "태그"}</span>
    </div>
  );
}
export default TagWarningLarge;
