import { BadgeDot } from './BadgeDot.jsx';
import { IconIcChatBubbleDots } from './IconIcChatBubbleDots.jsx';

// figma node: 4906:443 Item/Banner (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "image=" + __venc(p.image) + '|' + "type=" + __venc(p.type);

export function ItemBanner(_p = {}) {
  const props = { ..._p, image: _p.image ?? false, type: _p.type ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 216,
      borderRadius: 4,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 16px 16px 16px",
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
        }}>{props.icon1 ?? <IconIcChatBubbleDots fill={false} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "OC 라운지"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 10,
          lineHeight: "14px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "OC팀에게 들려주세요 🙌🏻"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 216,
      borderRadius: 4,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 16px 16px 16px",
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
        }}>{props.icon1 ?? <IconIcChatBubbleDots fill={false} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 700,
          fontSize: 12,
          lineHeight: "18px",
          color: "rgb(33,33,33)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "OC 라운지"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 10,
          lineHeight: "14px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text2 ?? "OC팀에게 들려주세요 🙌🏻"}</span>
      </div>
      <div style={{
          position: "absolute",
          left: 33,
          top: 21,
          width: 6,
          height: 6,
        }}>{props.icon2 ?? <BadgeDot type={"primary"} size={"sm"} border={false} />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 216,
      borderRadius: 4,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcChatBubbleDots fill={false} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "OC 라운지"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            lineHeight: "14px",
            color: "rgb(97,97,97)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "OC팀에게 들려주세요 🙌🏻"}</span>
        </div>
      </div>
      <div className="fig-asset-eae313a48883a46e" style={{
        position: "relative",
        height: 124,
        overflow: "hidden",
        borderRadius: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-e4b31faf5fba9349" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 184,
          height: 124,
        }} />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 216,
      borderRadius: 4,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "16px 16px 16px 16px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <IconIcChatBubbleDots fill={false} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 12,
            lineHeight: "18px",
            color: "rgb(33,33,33)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "OC 라운지"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 10,
            lineHeight: "14px",
            color: "rgb(97,97,97)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "OC팀에게 들려주세요 🙌🏻"}</span>
        </div>
        <div style={{
            position: "absolute",
            left: 17,
            top: 5,
            width: 6,
            height: 6,
          }}>{props.icon2 ?? <BadgeDot type={"primary"} size={"sm"} border={false} />}</div>
      </div>
      <div className="fig-asset-eae313a48883a46e" style={{
        position: "relative",
        height: 124,
        overflow: "hidden",
        borderRadius: 2,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-e4b31faf5fba9349" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 184,
          height: 124,
        }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: Image=False, Type=Default
    "image=false|type=default": __body0,
    // figma: Image=False, Type=DotBadge
    "image=false|type=dotbadge": __body1,
    // figma: Image=True, Type=Default
    "image=true|type=default": __body2,
    // figma: Image=True, Type=DotBadge
    "image=true|type=dotbadge": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemBanner;
