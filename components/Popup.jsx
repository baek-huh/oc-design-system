import { ButtonArea } from './ButtonArea.jsx';
import { IconButtonGhost } from './IconButtonGhost.jsx';
import { IconIcX } from './IconIcX.jsx';
import { PopupTitle } from './PopupTitle.jsx';

// figma node: 2547:7487 Popup (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function Popup(_p = {}) {
  const props = { ..._p, size: _p.size ?? "sm", showTitle: _p.showTitle ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      padding: "64px 64px 64px 64px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showTitle && (
        <div style={{
          position: "relative",
          height: 68,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          padding: "14px 14px 14px 20px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              lineHeight: "36px",
              color: "rgb(33,33,33)",
              flexGrow: 1,
            }}>타이틀</span>
            <IconButtonGhost
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              icon1={<IconIcX style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
              state={"default"}
              size={"md"}
            />
          </div>
        </div>
        )}
        <svg height={100} viewBox="0 0 1240 100" fill="none" style={{
          position: "relative",
          height: 100,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: "20px 20px 20px 20px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgb(253,228,255)",
        }}>
          <path d={"M 0 0 L 1240 0 L 1240 100 L 0 100 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <ButtonArea
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          fullWidth={true}
          button={"single"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      padding: "64px 64px 64px 64px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showTitle && (
        <div style={{
          position: "relative",
          height: 68,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          padding: "14px 14px 14px 20px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              lineHeight: "36px",
              color: "rgb(33,33,33)",
              flexGrow: 1,
            }}>타이틀</span>
            <IconButtonGhost
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              icon1={<IconIcX style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
              state={"default"}
              size={"md"}
            />
          </div>
        </div>
        )}
        <svg height={100} viewBox="0 0 840 100" fill="none" style={{
          position: "relative",
          height: 100,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: "20px 20px 20px 20px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgb(253,228,255)",
        }}>
          <path d={"M 0 0 L 840 0 L 840 100 L 0 100 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <ButtonArea
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          fullWidth={true}
          button={"single"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      padding: "64px 64px 64px 64px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 248,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.showTitle && (
        <div style={{
          position: "relative",
          height: 68,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          padding: "14px 14px 14px 20px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              lineHeight: "36px",
              color: "rgb(33,33,33)",
              flexGrow: 1,
            }}>타이틀</span>
            <IconButtonGhost
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}
              icon1={<IconIcX style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
              state={"default"}
              size={"md"}
            />
          </div>
        </div>
        )}
        <svg viewBox="0 0 600 100" fill="none" style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: "20px 20px 20px 20px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
          color: "rgb(253,228,255)",
        }}>
          <path d={"M 0 0 L 600 0 L 600 100 L 0 100 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <ButtonArea
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          fullWidth={true}
          button={"single"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 368,
      overflow: "hidden",
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      padding: "64px 64px 64px 64px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 248,
        overflow: "hidden",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <PopupTitle style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }} />
        <svg viewBox="0 0 360 100" fill="none" style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: "20px 20px 20px 20px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
          color: "rgb(253,228,255)",
        }}>
          <path d={"M 0 0 L 360 0 L 360 100 L 0 100 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "20px 20px 20px 20px",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 8,
            backgroundColor: "var(--blue-500)",
            display: "flex",
            flexDirection: "row",
            padding: "10px 14px 10px 14px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 16,
                height: 16,
              }}>
                <svg width={11.667} height={11.667} viewBox="0 0 11.667 11.667" fill="none" style={{
                  position: "absolute",
                  left: 2.167,
                  top: 2.167,
                  width: 11.667,
                  height: 11.667,
                  color: "var(--white)",
                }}>
                  <path d={"M 6.333 0.5 C 6.333 0.224 6.109 0 5.833 0 C 5.557 0 5.333 0.224 5.333 0.5 L 5.333 5.333 L 0.5 5.333 C 0.224 5.333 0 5.557 0 5.833 C 0 6.109 0.224 6.333 0.5 6.333 L 5.333 6.333 L 5.333 11.167 C 5.333 11.443 5.557 11.667 5.833 11.667 C 6.109 11.667 6.333 11.443 6.333 11.167 L 6.333 6.333 L 11.167 6.333 C 11.443 6.333 11.667 6.109 11.667 5.833 C 11.667 5.557 11.443 5.333 11.167 5.333 L 6.333 5.333 L 6.333 0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              padding: "0px 4px 0px 4px",
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
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "20px",
                color: "var(--white)",
                flexShrink: 0,
              }}>버튼</span>
            </div>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 16,
                height: 16,
              }}>
                <svg width={5.667} height={10.333} viewBox="0 0 5.667 10.333" fill="none" style={{
                  position: "absolute",
                  left: 5.5,
                  top: 2.833,
                  width: 5.667,
                  height: 10.333,
                  color: "var(--white)",
                }}>
                  <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 5.52 4.813 C 5.715 5.008 5.715 5.325 5.52 5.52 L 0.854 10.187 C 0.658 10.382 0.342 10.382 0.146 10.187 C -0.049 9.992 -0.049 9.675 0.146 9.48 L 4.46 5.167 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=XLarge
    "size=xl": __body0,
    // figma: Size=Large
    "size=lg": __body1,
    // figma: Size=Medium
    "size=md": __body2,
    // figma: Size=Small
    "size=sm": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Popup;
