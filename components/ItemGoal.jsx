// figma node: 10778:4302 item/goal (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ItemGoal(_p = {}) {
  const props = { ..._p, type: _p.type ?? "초/중/고/n수" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--slate-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "서울대학교 디자인학과 26학번"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "var(--slate-700)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "2025년도 제14회 변호사시험"}</span>
    </div>
  );
  const __impls = {
    // figma: type=초/중/고/N수
    "type=초/중/고/n수": __body0,
    // figma: type=취업/자격증
    "type=취업/자격증": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemGoal;
