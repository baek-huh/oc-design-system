import { BoxButtonPrimaryDefaultXSmallNone } from './BoxButtonPrimaryDefaultXSmallNone.jsx';
import { IconButtonOutline } from './IconButtonOutline.jsx';
import { IconIcPencil } from './IconIcPencil.jsx';
import { IconIcStatus } from './IconIcStatus.jsx';
import { StateTagAccentSmall } from './StateTagAccentSmall.jsx';
import { TagDefaultSmallFalse } from './TagDefaultSmallFalse.jsx';

// figma node: 1501:6210 Item/Body Cell (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ItemBodyCell(_p = {}) {
  const props = { ..._p, type: _p.type ?? "text", showIcon: _p.showIcon ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
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
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
      }}>{props.text1 ?? "바디 텍스트"}</span>
      {props.showIcon && (
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <IconButtonOutline icon1={<IconIcPencil fill={false} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />} state={"default"} size={"xs"} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 0px 16px",
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
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "하이퍼링크"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <StateTagAccentSmall />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 22,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <IconIcStatus status={"incomplete"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <BoxButtonPrimaryDefaultXSmallNone />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 56,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <TagDefaultSmallFalse />}</div>
    </div>
  );
  const __impls = {
    // figma: Type=Text
    "type=text": __body0,
    // figma: Type=Hyperlink
    "type=hyperlink": __body1,
    // figma: Type=State
    "type=state": __body2,
    // figma: Type=Icon
    "type=icon": __body3,
    // figma: Type=Button
    "type=button": __body4,
    // figma: Type=Tag
    "type=tag": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemBodyCell;
