import { PopoverHeaderRightButton } from './PopoverHeaderRightButton.jsx';
import { PopoverListItemDefault } from './PopoverListItemDefault.jsx';
import { PopoverListSuffixes } from './PopoverListSuffixes.jsx';

// figma node: 5182:816 item/eraser-option (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "option=" + __venc(p.option);

export function ItemEraserOption(_p = {}) {
  const props = { ..._p, option: _p.option ?? "option" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 340,
      height: 168,
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      position: "relative",
      color: "rgb(245,245,245)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 12,
        width: 340,
        height: 144,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "10px 10px 10px 10px",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 340,
          overflow: "hidden",
          borderRadius: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "row",
            gap: 187,
            padding: "12px 14px 12px 14px",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 40,
              maxWidth: 40,
              maxHeight: null,
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}>{props.icon1 ?? <PopoverHeaderRightButton button={"icon"} />}</div>
            </div>
            <span style={{
              position: "absolute",
              left: 54,
              top: 12,
              minWidth: 232,
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              color: "rgb(33,33,33)",
              whiteSpace: "nowrap",
            }}>{props.text1 ?? "지우개"}</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "12px 12px 12px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              borderRadius: 4,
              backgroundColor: "rgb(245,245,245)",
              display: "flex",
              flexDirection: "row",
              gap: 4,
              padding: "4px 4px 4px 4px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                backgroundColor: "rgb(255,255,255)",
                boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 12px 4px 12px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
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
                }}>정밀 지우개</span>
              </div>
              <div style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
                display: "flex",
                flexDirection: "row",
                gap: 10,
                padding: "4px 12px 4px 12px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
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
                }}>획 지우개</span>
              </div>
            </div>
            <PopoverListItemDefault
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              showSuffixes={true}
              text1={"페이지 전체 지우기"}
              icon2={<PopoverListSuffixes type={"switch"} style={{ width: 22, height: 22 }} />}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          left: 0,
          top: -12,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "0px 156px 0px 156px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
        }}>
          <svg width={28} height={12} viewBox="0 0 28 12" fill="none" style={{
            position: "relative",
            width: 28,
            height: 12,
            flexShrink: 0,
          }}>
            <path d={"M 14.845 0.121 C 15.363 0.273 15.849 0.566 16.245 1.004 L 25.02 10.684 C 25.781 11.523 26.865 12 28 12 L 0 12 C 1.135 12 2.219 11.523 2.98 10.684 L 11.755 1.004 C 12.339 0.359 13.12 0.023 13.906 0 C 13.969 0 14.029 0 14.092 0 C 14.345 0.008 14.6 0.047 14.845 0.121 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: option=option
    "option=option": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemEraserOption;
