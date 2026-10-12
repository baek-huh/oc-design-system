import { BoxButtonError } from './BoxButtonError.jsx';
import { BoxButtonSecondary } from './BoxButtonSecondary.jsx';
import { DropFieldLoad } from './DropFieldLoad.jsx';
import { IconIcDocument } from './IconIcDocument.jsx';

// figma node: 680:3492 DropField (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "preview=" + __venc(p.preview);

export function DropField(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", preview: _p.preview ?? "false" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 342,
      borderRadius: 4,
      backgroundColor: "rgb(217,217,217)",
      outline: "1px dashed rgb(0,0,0)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "40px 40px 40px 40px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 262,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcDocument fill={false} style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "16px",
          letterSpacing: "-0.010em",
          color: "rgb(0,0,0)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{props.text1 ?? "업로드할 이미지 또는 PDF를 첨부해주세요.\n최대 10MB까지 첨부할 수 있습니다."}</span>
        <BoxButtonSecondary
          style={{ position: "relative", width: 79, flexShrink: 0 }}
          text1={"업로드 하기"}
          state={"default"}
          size={"sm"}
          icon={"none"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 342,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(189,189,189)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "40px 40px 40px 40px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 262,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcDocument fill={false} style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "file.pdf"}</span>
        <div style={{ position: "relative", width: 69, flexShrink: 0 }}>{props.icon2 ?? <BoxButtonError text1={"파일 삭제"} state={"default"} size={"sm"} icon={"none"} />}</div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 342,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "40px 40px 40px 40px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 262,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcDocument fill={false} style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{props.text1 ?? "업로드할 이미지 또는 PDF를 첨부해주세요.\n최대 10MB까지 첨부할 수 있습니다."}</span>
        <BoxButtonSecondary
          style={{ position: "relative", width: 79, flexShrink: 0 }}
          text1={"업로드 하기"}
          state={"disabled"}
          size={"sm"}
          icon={"none"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 342,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(224,224,224)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "40px 40px 40px 40px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 262,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 32,
            height: 32,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcDocument fill={false} style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 12,
          textAlign: "center",
          lineHeight: "18px",
          color: "rgb(189,189,189)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{props.text1 ?? "업로드할 이미지 또는 PDF를 첨부해주세요.\n최대 10MB까지 첨부할 수 있습니다."}</span>
        <div style={{
          position: "relative",
          borderRadius: 4,
          backgroundColor: "rgb(34,119,255)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "8px 12px 8px 12px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
          }}>업로드 하기</span>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 342,
      height: 202,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 342,
        height: 202,
        borderRadius: 4,
        backgroundColor: "rgb(255,255,255)",
        outline: "1px dashed rgb(189,189,189)",
        outlineOffset: "-1px",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "40px 40px 40px 40px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 262,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 32,
              height: 32,
              flexShrink: 0,
            }}>{props.icon1 ?? <IconIcDocument fill={false} style={{ transform: "scale(1.333, 1.333)", transformOrigin: "0 0" }} />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            textAlign: "center",
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{props.text1 ?? "파일을 업로드 중입니다.\n잠시만 기다려 주세요."}</span>
        </div>
      </div>
      <DropFieldLoad style={{
          position: "absolute",
          left: 115,
          top: 138,
          width: 112,
          height: 4,
        }} />
    </div>
  );
  const __impls = {
    // figma: State=Default, Preview=False
    "state=default|preview=false": __body0,
    // figma: State=Upload, Preview=False
    "state=upload|preview=false": __body1,
    // figma: State=Disabled, Preview=False
    "state=disabled|preview=false": __body2,
    // figma: State=Drag, Preview=False
    "state=drag|preview=false": __body3,
    // figma: State=Loading, Preview=False
    "state=loading|preview=false": __body4,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DropField;
