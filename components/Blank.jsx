// figma node: 4417:2686 Blank
export function Blank(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 2,
      outline: "1px dashed rgb(238,238,238)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "8px 8px 8px 8px",
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
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
      }}>{props.text1 ?? "Section/Blank"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 10,
        lineHeight: "14px",
        color: "rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "pre-wrap",
      }}>{props.text2 ?? "Black에는 어떤 아이템도\n들어올 수 있습니다."}</span>
    </div>
  );
}
export default Blank;
