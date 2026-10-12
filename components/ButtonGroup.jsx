import { BoxButtonPrimaryDefaultLargeNone } from './BoxButtonPrimaryDefaultLargeNone.jsx';
import { BoxButtonPrimaryDefaultMediumNone } from './BoxButtonPrimaryDefaultMediumNone.jsx';
import { BoxButtonPrimaryDefaultSmallNone } from './BoxButtonPrimaryDefaultSmallNone.jsx';
import { BoxButtonSecondary } from './BoxButtonSecondary.jsx';
import { ItemButtonSegment } from './ItemButtonSegment.jsx';

// figma node: 1481:3193 ButtonGroup (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "segment=" + __venc(p.segment);

export function ButtonGroup(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", segment: _p.segment ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"sm"} icon={"none"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <BoxButtonPrimaryDefaultSmallNone />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"md"} icon={"none"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <BoxButtonPrimaryDefaultMediumNone />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <BoxButtonSecondary state={"default"} size={"lg"} icon={"none"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <BoxButtonPrimaryDefaultLargeNone />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemButtonSegment size={"md"} type={"left"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemButtonSegment icon1={<BoxButtonSecondary state={"default"} size={"md"} icon={"none"} style={{ width: "100%", height: "100%" }} />} size={"md"} type={"center"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemButtonSegment size={"md"} type={"right"} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemButtonSegment size={"lg"} type={"left"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(34,119,255)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 16px 12px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>버튼</span>
        </div>
        <div style={{
          position: "relative",
          width: 1,
          backgroundColor: "rgb(224,224,224)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: "0px 4px 4px 0px",
          backgroundColor: "rgb(34,119,255)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "12px 16px 12px 16px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>버튼</span>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemButtonSegment size={"sm"} type={"left"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemButtonSegment size={"sm"} type={"center"} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemButtonSegment size={"sm"} type={"right"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Size=Small, Segment=False
    "size=sm|segment=false": __body0,
    // figma: Size=Medium, Segment=False
    "size=md|segment=false": __body1,
    // figma: Size=Large, Segment=False
    "size=lg|segment=false": __body2,
    // figma: Size=Medium, Segment=True
    "size=md|segment=true": __body3,
    // figma: Size=Large, Segment=True
    "size=lg|segment=true": __body4,
    // figma: Size=Small, Segment=True
    "size=sm|segment=true": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ButtonGroup;
