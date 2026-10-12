// figma node: 453:1018 BoxButton/Primary/Default/Medium/None
export function BoxButtonPrimaryDefaultMediumNone(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 14px 10px 14px",
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
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "버튼"}</span>
    </div>
  );
}
export default BoxButtonPrimaryDefaultMediumNone;
