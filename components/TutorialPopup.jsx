import { BoxButtonOutline } from './BoxButtonOutline.jsx';
import { BoxButtonPrimaryDefaultSmallNone } from './BoxButtonPrimaryDefaultSmallNone.jsx';
import { ButtonGroup } from './ButtonGroup.jsx';
import { IconIcX } from './IconIcX.jsx';

// figma node: 7204:8100 Tutorial_Popup (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "button=" + __venc(p.button);

export function TutorialPopup(_p = {}) {
  const props = { ..._p, control: _p.control ?? true, button: _p.button ?? "single" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minWidth: 360,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 8px 3px rgba(0,0,0,0.1), 0px 0px 3px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "18px 0px 12px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          lineHeight: "26px",
          color: "rgb(33,33,33)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "튜토리얼 타이틀"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcX style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 252,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(97,97,97)",
            flexShrink: 0,
          }}>{props.text2 ?? "튜토리얼 컨텐츠"}</span>
        </div>
        {props.control && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(97,97,97)",
            flexShrink: 0,
          }}>{props.text3 ?? "1 / 3"}</span>
          <ButtonGroup
            style={{ position: "relative", flexShrink: 0 }}
            icon1={<BoxButtonOutline state={"default"} size={"sm"} icon={"none"} style={{ width: "100%", height: "100%" }} />}
            size={"sm"}
            segment={false}
          />
        </div>
        )}
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      minWidth: 360,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 8px 3px rgba(0,0,0,0.1), 0px 0px 3px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "18px 0px 12px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 18,
          lineHeight: "26px",
          color: "rgb(33,33,33)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "튜토리얼 타이틀"}</span>
        <div style={{
            position: "relative",
            width: 20,
            height: 20,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcX style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 252,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(97,97,97)",
            flexShrink: 0,
          }}>{props.text2 ?? "튜토리얼 컨텐츠"}</span>
        </div>
        {props.control && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "20px",
            color: "rgb(97,97,97)",
            flexShrink: 0,
          }}>{props.text3 ?? "1 / 3"}</span>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BoxButtonPrimaryDefaultSmallNone />}</div>
        </div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Button=Multi
    "button=multi": __body0,
    // figma: Button=Single
    "button=single": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default TutorialPopup;
