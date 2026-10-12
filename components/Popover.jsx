import { PopoverHeaderLeftButton } from './PopoverHeaderLeftButton.jsx';
import { PopoverHeaderRightButton } from './PopoverHeaderRightButton.jsx';

// figma node: 7752:2570 Popover
export function Popover(_p = {}) {
  const props = { ..._p, show: _p.show ?? false, show2: _p.show2 ?? false, show3: _p.show3 ?? false, show4: _p.show4 ?? false };
  return (
    <div className={props.className} style={{
      width: 340,
      height: 144,
      position: "relative",
      color: "rgb(245,245,245)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
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
            backgroundColor: "var(--gray-50)",
            display: "flex",
            flexDirection: "row",
            padding: "12px 14px 12px 14px",
            justifyContent: "space-between",
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
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <PopoverHeaderLeftButton
                style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}
                button={"icon"}
              />
            </div>
            <span style={{
              position: "relative",
              width: 232,
              minWidth: 232,
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              textAlign: "center",
              lineHeight: "20px",
              color: "rgb(255,255,255)",
              flexShrink: 0,
            }}>타이틀</span>
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
              <PopoverHeaderRightButton
                style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}
                button={"icon"}
              />
            </div>
          </div>
          <svg height={100} viewBox="0 0 340 100" fill="none" style={{
            position: "relative",
            height: 100,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "12px 12px 12px 12px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
            color: "rgb(253,228,255)",
          }}>
            <path d={"M 0 0 L 340 0 L 340 100 L 0 100 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        {props.show3 && (
        <div style={{
          position: "absolute",
          left: -12,
          top: 0,
          height: 144,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
        }}>
          <svg width={28} height={12} viewBox="0 0 28 12" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,-1,1,0,0,86)",
            transformOrigin: "0 0",
            width: 28,
            height: 12,
          }}>
            <path d={"M 14.845 0.121 C 15.363 0.273 15.849 0.566 16.245 1.004 L 25.02 10.684 C 25.781 11.523 26.865 12 28 12 L 0 12 C 1.135 12 2.219 11.523 2.98 10.684 L 11.755 1.004 C 12.339 0.359 13.12 0.023 13.906 0 C 13.969 0 14.029 0 14.092 0 C 14.345 0.008 14.6 0.047 14.845 0.121 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        {props.show2 && (
        <div style={{
          position: "absolute",
          left: 340,
          top: 0,
          width: 12,
          height: 144,
          display: "flex",
          flexDirection: "row",
          gap: 10,
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
        }}>
          <svg width={28} height={12} viewBox="0 0 28 12" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,1,-1,0,12,58)",
            transformOrigin: "0 0",
            width: 28,
            height: 12,
          }}>
            <path d={"M 14.845 0.121 C 15.363 0.273 15.849 0.566 16.245 1.004 L 25.02 10.684 C 25.781 11.523 26.865 12 28 12 L 0 12 C 1.135 12 2.219 11.523 2.98 10.684 L 11.755 1.004 C 12.339 0.359 13.12 0.023 13.906 0 C 13.969 0 14.029 0 14.092 0 C 14.345 0.008 14.6 0.047 14.845 0.121 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        {props.show4 && (
        <div style={{
          position: "absolute",
          left: 0,
          top: 144,
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
            transform: "matrix(-1,0,0,-1,0,0)",
            width: 28,
            height: 12,
            flexShrink: 0,
          }}>
            <path d={"M 14.845 0.121 C 15.363 0.273 15.849 0.566 16.245 1.004 L 25.02 10.684 C 25.781 11.523 26.865 12 28 12 L 0 12 C 1.135 12 2.219 11.523 2.98 10.684 L 11.755 1.004 C 12.339 0.359 13.12 0.023 13.906 0 C 13.969 0 14.029 0 14.092 0 C 14.345 0.008 14.6 0.047 14.845 0.121 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        )}
        {props.show && (
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
        )}
      </div>
    </div>
  );
}
export default Popover;
