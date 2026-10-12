import { IconIcCheck } from './IconIcCheck.jsx';
import { IconIcQuestionCircle } from './IconIcQuestionCircle.jsx';
import { TagAccentSmall } from './TagAccentSmall.jsx';
import { TagDefaultSmallNone } from './TagDefaultSmallNone.jsx';
import { TagWarningSmall } from './TagWarningSmall.jsx';

// figma node: 7357:8258 Label (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Label(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", required: _p.required ?? false, state: _p.state ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 161,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "레이블"}</span>
        {props.required && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(242,117,115)",
            flexShrink: 0,
          }} />
        </div>
        )}
      </div>
      {props.state && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconIcCheck />}</div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 161,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "레이블"}</span>
        <div style={{
            position: "relative",
            width: 14,
            height: 14,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcQuestionCircle fill={true} style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />}</div>
        {props.required && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(242,117,115)",
            flexShrink: 0,
          }} />
        </div>
        )}
      </div>
      {props.state && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <IconIcCheck />}</div>
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 161,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "레이블"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "보조텍스트"}</span>
        {props.required && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(242,117,115)",
            flexShrink: 0,
          }} />
        </div>
        )}
      </div>
      {props.state && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 2,
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 20,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <IconIcCheck />}</div>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 161,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "레이블"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon1 ?? <TagAccentSmall />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <TagDefaultSmallNone />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon3 ?? <TagWarningSmall />}</div>
        </div>
        {props.required && (
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "4px 0px 4px 0px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 4,
            height: 4,
            borderRadius: "50%",
            backgroundColor: "rgb(242,117,115)",
            flexShrink: 0,
          }} />
        </div>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Default
    "type=default": __body0,
    // figma: Type=Icon
    "type=icon": __body1,
    // figma: Type=Subtext
    "type=subtext": __body2,
    // figma: Type=Tag
    "type=tag": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Label;
