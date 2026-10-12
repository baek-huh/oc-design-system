import { Label } from './Label.jsx';

// figma node: 882:3076 TextAreaField (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function TextAreaField(_p = {}) {
  const props = { ..._p, showLabel: _p.showLabel ?? false, state: _p.state ?? "\bdefault", showCount: _p.showCount ?? false, showHelptext: _p.showHelptext ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "12px 12px 12px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "\"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "20px",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "플레이스홀더\n"}</span>
          {props.showCount && (
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(158,158,158)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "000/000"}</span>
          )}
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text3 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "12px 12px 12px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "24px",
            color: "rgb(158,158,158)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "플레이스홀더\n"}</span>
          {props.showCount && (
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(158,158,158)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "000/000"}</span>
          )}
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text3 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "12px 12px 12px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "24px",
            color: "rgb(158,158,158)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "플레이스홀더\n"}</span>
          {props.showCount && (
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(158,158,158)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "000/000"}</span>
          )}
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text3 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(97,97,97)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "12px 12px 12px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "24px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "플레이스홀더\n"}</span>
          {props.showCount && (
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(158,158,158)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "000/000"}</span>
          )}
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text3 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--color-white)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "12px 12px 12px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "24px",
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "플레이스홀더\n"}</span>
          {props.showCount && (
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "000/000"}</span>
          )}
        </div>
      </div>
      {props.showHelptext && (
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "18px",
        color: "rgb(158,158,158)",
        flexShrink: 0,
      }}>{props.text3 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showLabel && (
        <Label
          style={{ position: "relative", width: 318, flexShrink: 0 }}
          type={"default"}
        />
        )}
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--color-white)",
          boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "12px 12px 12px 12px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "24px",
            color: "rgb(158,158,158)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "플레이스홀더\n"}</span>
          {props.showCount && (
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(189,189,189)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "000/000"}</span>
          )}
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "18px",
          color: "rgb(239,83,80)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text3 ?? "에러 메세지가 이곳에 표기됩니다."}</span>
        {props.showHelptext && (
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(158,158,158)",
          flexShrink: 0,
        }}>{props.text4 ?? "헬프 텍스트가 이곳에 표기됩니다."}</span>
        )}
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=\bdefault": __body0,
    // figma: State=Hover
    "state=\bhover": __body1,
    // figma: State=Active
    "state=active": __body2,
    // figma: State=Disabled
    "state=disabled": __body3,
    // figma: State=Typed
    "state=typed": __body4,
    // figma: State=Error
    "state=error": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TextAreaField;
