// figma node: 685:3240 statetag/default/medium
export function StatetagDefaultMedium(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--white)",
      boxShadow: "inset 0 0 0 1px var(--gray-100)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
      justifyContent: "center",
      alignItems: "flex-start",
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
        whiteSpace: "nowrap",
        lineHeight: "14px",
        color: "var(--gray-800)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태"}</span>
    </div>
  );
}
export default StatetagDefaultMedium;
