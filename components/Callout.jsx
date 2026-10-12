import { Button } from './Button.jsx';
import { IconIcIdea } from './IconIcIdea.jsx';
import { IconIcInfoCircle } from './IconIcInfoCircle.jsx';
import { IconIcWarningTriangle } from './IconIcWarningTriangle.jsx';

// figma node: 4803:6211 callout (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "button=" + __venc(p.button) + '|' + "style2=" + __venc(p.style2);

export function Callout(_p = {}) {
  const props = { ..._p, type: _p.type ?? "default", button: _p.button ?? false, style2: _p.style2 ?? "fill" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--slate-10)",
      boxShadow: "inset 0 0 0 1px var(--slate-50-2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--red-500)",
          }}>{props.icon1 ?? <IconIcWarningTriangle fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
        }}>{props.text1 ?? "주의사항"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--red-500)",
          }}>{props.icon1 ?? <IconIcWarningTriangle fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
        }}>{props.text1 ?? "주의사항"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--slate-10)",
      boxShadow: "inset 0 0 0 1px var(--slate-50-2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--slate-700)",
          }}>{props.icon1 ?? <IconIcInfoCircle fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-700)",
          flexShrink: 0,
        }}>{props.text1 ?? "알려드려요"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--slate-700)",
          }}>{props.icon1 ?? <IconIcInfoCircle fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-700)",
          flexShrink: 0,
        }}>{props.text1 ?? "알려드려요"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--slate-10)",
      boxShadow: "inset 0 0 0 1px var(--slate-50-2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--green-500)",
          }}>{props.icon1 ?? <IconIcIdea fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--green-500)",
          flexShrink: 0,
        }}>{props.text1 ?? "참고사항"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--green-50)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--green-500)",
          }}>{props.icon1 ?? <IconIcIdea fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--green-500)",
          flexShrink: 0,
        }}>{props.text1 ?? "참고사항"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--slate-10)",
      boxShadow: "inset 0 0 0 1px var(--slate-50-2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--red-500)",
          }}>{props.icon1 ?? <IconIcWarningTriangle fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
        }}>{props.text1 ?? "주의사항"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
      <div style={{ position: "relative", width: 45, flexShrink: 0 }}>{props.icon2 ?? <Button showPrefixes={false} showSuffixes={false} state={"default"} size={"xs"} theme={"secondary"} style2={"light"} />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--red-50-2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--red-500)",
          }}>{props.icon1 ?? <IconIcWarningTriangle fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--red-500)",
          flexShrink: 0,
        }}>{props.text1 ?? "주의사항"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
      <div style={{ position: "relative", width: 45, flexShrink: 0 }}>{props.icon2 ?? <Button showPrefixes={false} showSuffixes={false} state={"default"} size={"xs"} theme={"secondary"} style2={"light"} />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--slate-10)",
      boxShadow: "inset 0 0 0 1px var(--slate-50-2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--slate-700)",
          }}>{props.icon1 ?? <IconIcInfoCircle fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-700)",
          flexShrink: 0,
        }}>{props.text1 ?? "알려드려요"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
      <div style={{ position: "relative", width: 45, flexShrink: 0 }}>{props.icon2 ?? <Button showPrefixes={false} showSuffixes={false} state={"default"} size={"xs"} theme={"secondary"} style2={"light"} />}</div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--slate-50-2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--slate-700)",
          }}>{props.icon1 ?? <IconIcInfoCircle fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--slate-700)",
          flexShrink: 0,
        }}>{props.text1 ?? "알려드려요"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
      <div style={{ position: "relative", width: 45, flexShrink: 0 }}>{props.icon2 ?? <Button showPrefixes={false} showSuffixes={false} state={"default"} size={"xs"} theme={"secondary"} style2={"light"} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--slate-10)",
      boxShadow: "inset 0 0 0 1px var(--slate-50-2)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--green-500)",
          }}>{props.icon1 ?? <IconIcIdea fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--green-500)",
          flexShrink: 0,
        }}>{props.text1 ?? "참고사항"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
      <div style={{ position: "relative", width: 45, flexShrink: 0 }}>{props.icon2 ?? <Button showPrefixes={false} showSuffixes={false} state={"default"} size={"xs"} theme={"secondary"} style2={"light"} />}</div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 484,
      borderRadius: 12,
      backgroundColor: "var(--green-50)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--green-500)",
          }}>{props.icon1 ?? <IconIcIdea fill={true} style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--green-500)",
          flexShrink: 0,
        }}>{props.text1 ?? "참고사항"}</span>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "24px",
        color: "var(--slate-900-2)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text2 ?? "콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요. 콜아웃의 내용을 적어주세요."}</span>
      <div style={{ position: "relative", width: 45, flexShrink: 0 }}>{props.icon2 ?? <Button showPrefixes={false} showSuffixes={false} state={"default"} size={"xs"} theme={"secondary"} style2={"light"} />}</div>
    </div>
  );
  const __impls = {
    // figma: type=warning, button=false, style=outline
    "type=warning|button=false|style2=outline": __body0,
    // figma: type=warning, button=false, style=fill
    "type=warning|button=false|style2=fill": __body1,
    // figma: type=default, button=false, style=outline
    "type=default|button=false|style2=outline": __body2,
    // figma: type=default, button=false, style=fill
    "type=default|button=false|style2=fill": __body3,
    // figma: type=tip, button=false, style=outline
    "type=tip|button=false|style2=outline": __body4,
    // figma: type=tip, button=false, style=fill
    "type=tip|button=false|style2=fill": __body5,
    // figma: type=warning, button=true, style=outline
    "type=warning|button=true|style2=outline": __body6,
    // figma: type=warning, button=true, style=fill
    "type=warning|button=true|style2=fill": __body7,
    // figma: type=default, button=true, style=outline
    "type=default|button=true|style2=outline": __body8,
    // figma: type=default, button=true, style=fill
    "type=default|button=true|style2=fill": __body9,
    // figma: type=tip, button=true, style=outline
    "type=tip|button=true|style2=outline": __body10,
    // figma: type=tip, button=true, style=fill
    "type=tip|button=true|style2=fill": __body11,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Callout;
