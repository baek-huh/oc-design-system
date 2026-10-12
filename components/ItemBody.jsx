import { Caption } from './Caption.jsx';

// figma node: 4719:657 Item/Body (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "typo=" + __venc(p.typo) + '|' + "caption=" + __venc(p.caption);

export function ItemBody(_p = {}) {
  const props = { ..._p, typo: _p.typo ?? "body2 regular", caption: _p.caption ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 350,
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "pre-wrap",
        display: "inline-block",
      }}>{"Body2Medium "}<span style={{ color: "rgb(33,33,33)" }}>{"Body2Medium Body2Medium Body2Medium Body2Medium Body2Medium Body2Medium Body2Medium"}</span></span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        width: 350,
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "pre-wrap",
        display: "inline-block",
      }}>{"Body2Regular "}<span style={{ color: "rgb(33,33,33)" }}>{"Body2Regular Body2Regular Body2Regular Body2Regular Body2Regular Body2Regular Body2Regular"}</span></span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ItemBody
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        typo={"body2 medium"}
        caption={false}
      />
      <Caption
        style={{ position: "relative", flexShrink: 0 }}
        number={"2"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <ItemBody
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        typo={"body2 regular"}
        caption={false}
      />
      <Caption
        style={{ position: "relative", flexShrink: 0 }}
        number={"2"}
      />
    </div>
  );
  const __impls = {
    // figma: Typo=Body2 Medium, Caption=False
    "typo=body2 medium|caption=false": __body0,
    // figma: Typo=Body2 Regular, Caption=False
    "typo=body2 regular|caption=false": __body1,
    // figma: Typo=Body2 Medium, Caption=True
    "typo=body2 medium|caption=true": __body2,
    // figma: Typo=Body2 Regular, Caption=True
    "typo=body2 regular|caption=true": __body3,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default ItemBody;
