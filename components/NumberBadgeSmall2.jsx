// figma node: 731:3316 NumberBadge/Small
export function NumberBadgeSmall2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      minWidth: 16,
      borderRadius: 9999,
      backgroundColor: "rgb(34,119,255)",
      boxShadow: "0 0 0 2px rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "1px 5px 1px 5px",
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
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "99+"}</span>
    </div>
  );
}
export default NumberBadgeSmall2;
