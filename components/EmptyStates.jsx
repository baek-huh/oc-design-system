import { BoxButtonPrimaryDefaultSmallNone } from './BoxButtonPrimaryDefaultSmallNone.jsx';
import { IconIcExclamationCircle } from './IconIcExclamationCircle.jsx';
import { ItemEmptyStates } from './ItemEmptyStates.jsx';

// figma node: 4149:3456 EmptyStates (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "visual=" + __venc(p.visual) + '|' + "button=" + __venc(p.button) + '|' + "header=" + __venc(p.header);

export function EmptyStates(_p = {}) {
  const props = { ..._p, visual: _p.visual ?? "icon", button: _p.button ?? true, header: _p.header ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconIcExclamationCircle fill={false} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "데이터가 없을 때 내용이에요"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconIcExclamationCircle fill={false} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "데이터가 없을 때 제목이에요"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text2 ?? "데이터가 없을 때 내용이에요"}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconIcExclamationCircle fill={false} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "데이터가 없을 때 제목이에요"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text2 ?? "데이터가 없을 때 내용이에요"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BoxButtonPrimaryDefaultSmallNone />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon1 ?? <IconIcExclamationCircle fill={false} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "데이터가 없을 때 내용이에요"}</span>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <BoxButtonPrimaryDefaultSmallNone />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 160,
          height: 160,
          flexShrink: 0,
        }}>
        <ItemEmptyStates
          style={{ transform: "scale(1.111, 1.111)", transformOrigin: "0 0" }}
          case={"empty"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "데이터가 없을 때 제목이에요"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text2 ?? "데이터가 없을 때 내용이에요"}</span>
      </div>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <BoxButtonPrimaryDefaultSmallNone />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 160,
          height: 160,
          flexShrink: 0,
        }}>
        <ItemEmptyStates
          style={{ transform: "scale(1.111, 1.111)", transformOrigin: "0 0" }}
          case={"empty"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "데이터가 없을 때 내용이에요"}</span>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <BoxButtonPrimaryDefaultSmallNone />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 160,
          height: 160,
          flexShrink: 0,
        }}>
        <ItemEmptyStates
          style={{ transform: "scale(1.111, 1.111)", transformOrigin: "0 0" }}
          case={"empty"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 24,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "36px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "데이터가 없을 때 제목이에요"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "24px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
        }}>{props.text2 ?? "데이터가 없을 때 내용이에요"}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 160,
          height: 160,
          flexShrink: 0,
        }}>
        <ItemEmptyStates
          style={{ transform: "scale(1.111, 1.111)", transformOrigin: "0 0" }}
          case={"empty"}
        />
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "24px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "데이터가 없을 때 내용이에요"}</span>
    </div>
  );
  const __impls = {
    // figma: Visual=Icon, Button=False, Header=False
    "visual=icon|button=false|header=false": __body0,
    // figma: Visual=Icon, Button=False, Header=True
    "visual=icon|button=false|header=true": __body1,
    // figma: Visual=Icon, Button=True, Header=True
    "visual=icon|button=true|header=true": __body2,
    // figma: Visual=Icon, Button=True, Header=False
    "visual=icon|button=true|header=false": __body3,
    // figma: Visual=Image, Button=True, Header=True
    "visual=image|button=true|header=true": __body4,
    // figma: Visual=Image, Button=True, Header=False
    "visual=image|button=true|header=false": __body5,
    // figma: Visual=Image, Button=False, Header=True
    "visual=image|button=false|header=true": __body6,
    // figma: Visual=Image, Button=False, Header=False
    "visual=image|button=false|header=false": __body7,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default EmptyStates;
