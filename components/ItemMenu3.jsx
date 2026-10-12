import { IconIcDocumentWriting } from './IconIcDocumentWriting.jsx';
import { IconIcNumberList } from './IconIcNumberList.jsx';
import { IconIcPlayCircle } from './IconIcPlayCircle.jsx';
import { IconIcQuestionCircle } from './IconIcQuestionCircle.jsx';
import { IconIcSetting } from './IconIcSetting.jsx';
import { IconIcTile } from './IconIcTile.jsx';

// figma node: 10073:414 item/menu (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "item=" + __venc(p.item) + '|' + "select=" + __venc(p.select);

export function ItemMenu3(_p = {}) {
  const props = { ..._p, item: _p.item ?? "guide", select: _p.select ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-25)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcTile fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "페이지"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-25)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcNumberList style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(97,97,97)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "해설"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-25)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcDocumentWriting fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(97,97,97)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "지문"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-25)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcPlayCircle fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(97,97,97)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "듣기"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-25)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcSetting fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(97,97,97)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "보기"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-25)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcQuestionCircle fill={false} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(97,97,97)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "사용법"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-100)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcTile fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "페이지"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-100)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcNumberList style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "해설"}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-100)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcDocumentWriting fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "지문"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-100)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcPlayCircle fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "듣기"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-100)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcSetting fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "보기"}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "var(--gray-100)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 18,
            height: 18,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcQuestionCircle fill={true} style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 10,
        textAlign: "center",
        lineHeight: "12px",
        color: "rgb(33,33,33)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "사용법"}</span>
    </div>
  );
  const __impls = {
    // figma: item=page, select=false
    "item=page|select=false": __body0,
    // figma: item=solution, select=false
    "item=solution|select=false": __body1,
    // figma: item=quiz-paper, select=false
    "item=quiz-paper|select=false": __body2,
    // figma: item=listening, select=false
    "item=listening|select=false": __body3,
    // figma: item=setting, select=false
    "item=setting|select=false": __body4,
    // figma: item=guide, select=false
    "item=guide|select=false": __body5,
    // figma: item=page, select=true
    "item=page|select=true": __body6,
    // figma: item=solution, select=true
    "item=solution|select=true": __body7,
    // figma: item=quiz-paper, select=true
    "item=quiz-paper|select=true": __body8,
    // figma: item=listening, select=true
    "item=listening|select=true": __body9,
    // figma: item=setting, select=true
    "item=setting|select=true": __body10,
    // figma: item=guide, select=true
    "item=guide|select=true": __body11,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default ItemMenu3;
