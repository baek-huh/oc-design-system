import { IconIcArrowUpDown } from './IconIcArrowUpDown.jsx';
import { ItemAction } from './ItemAction.jsx';
import { ItemHeaderCell } from './ItemHeaderCell.jsx';

// figma node: 1508:3371 Header Row (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "sideLine=" + __venc(p.sideLine);

export function HeaderRow(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", sideLine: _p.sideLine ?? true, showAction: _p.showAction ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 44,
      overflow: "hidden",
      borderTop: "1px solid rgb(0,0,0)",
      borderRight: "1px solid rgb(0,0,0)",
      borderBottom: "1px solid rgb(0,0,0)",
      borderLeft: "1px solid rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1070,
        height: 44,
        backgroundColor: "rgb(250,250,250)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        {props.showAction && (
        <div style={{
            position: "relative",
            width: 56,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <ItemAction type={"checkbox"} />}</div>
        )}
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"default"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"default"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"default"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"default"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 44,
      overflow: "hidden",
      borderTop: "1px solid rgb(0,0,0)",
      borderRight: "1px solid rgb(0,0,0)",
      borderBottom: "1px solid rgb(0,0,0)",
      borderLeft: "1px solid rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1070,
        height: 44,
        backgroundColor: "rgb(250,250,250)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"default"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"default"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"default"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"default"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 44,
      overflow: "hidden",
      borderTop: "1px solid rgb(0,0,0)",
      borderRight: "1px solid rgb(0,0,0)",
      borderBottom: "1px solid rgb(0,0,0)",
      borderLeft: "1px solid rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1070,
        height: 44,
        backgroundColor: "rgb(250,250,250)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"hover"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"hover"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"hover"}
        />
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          borderRight: "1px solid rgb(0,0,0)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "rgb(97,97,97)",
              flexGrow: 1,
            }}>헤더 텍스트</span>
            <div style={{
              position: "relative",
              width: 14,
              height: 14,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 7,
                top: 0,
                width: 7,
                height: 14,
                overflow: "hidden",
              }}>
                <div style={{
                    position: "absolute",
                    left: -7,
                    top: 0,
                    width: 14,
                    height: 14,
                  }}>
                  <IconIcArrowUpDown style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />
                </div>
              </div>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 7,
                height: 14,
                overflow: "hidden",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 14,
                    height: 14,
                  }}>
                  <IconIcArrowUpDown style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          backgroundColor: "rgb(255,255,255)",
          borderRight: "1px solid rgb(0,0,0)",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "0px 16px 0px 16px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 14,
              lineHeight: "20px",
              color: "rgb(97,97,97)",
              flexGrow: 1,
            }}>헤더 텍스트</span>
            <div style={{
              position: "relative",
              width: 14,
              height: 14,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: 7,
                top: 0,
                width: 7,
                height: 14,
                overflow: "hidden",
              }}>
                <div style={{
                    position: "absolute",
                    left: -7,
                    top: 0,
                    width: 14,
                    height: 14,
                  }}>
                  <IconIcArrowUpDown style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />
                </div>
              </div>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 7,
                height: 14,
                overflow: "hidden",
              }}>
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 14,
                    height: 14,
                  }}>
                  <IconIcArrowUpDown style={{ transform: "scale(0.583, 0.583)", transformOrigin: "0 0" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 44,
      overflow: "hidden",
      borderTop: "1px solid rgb(0,0,0)",
      borderRight: "1px solid rgb(0,0,0)",
      borderBottom: "1px solid rgb(0,0,0)",
      borderLeft: "1px solid rgb(0,0,0)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1070,
        height: 44,
        backgroundColor: "rgb(250,250,250)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
      }}>
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"hover"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"hover"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"hover"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"sorting_ascending"}
        />
        <ItemHeaderCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          state={"sorting_descending"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Side Line=False
    "state=default|sideLine=false": __body0,
    // figma: State=Default, Side Line=True
    "state=default|sideLine=true": __body1,
    // figma: State=Hover/Pressed, Side Line=True
    "state=hover/pressed|sideLine=true": __body2,
    // figma: State=Hover/Pressed, Side Line=False
    "state=hover/pressed|sideLine=false": __body3,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default HeaderRow;
