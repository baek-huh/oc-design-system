// figma node: 1301:3323 StateTag/Accent/Small
export function StateTagAccentSmall(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 20,
      backgroundColor: "rgb(238,238,238)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "2px 4px 2px 4px",
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
        color: "rgb(97,97,97)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "상태"}</span>
    </div>
  );
}
export default StateTagAccentSmall;
