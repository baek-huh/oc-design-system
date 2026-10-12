import { ItemTime } from './ItemTime.jsx';
import { ItemTime2 } from './ItemTime2.jsx';
import { ItemWeek2 } from './ItemWeek2.jsx';

// figma node: 4703:2852 Month (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size);

export function Month(_p = {}) {
  const props = { ..._p, size: _p.size ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ItemWeek2
          style={{ position: "relative", width: 127, flexShrink: 0 }}
          day={"sun"}
          size={"default"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 127, flexShrink: 0 }}
          day={"weekday"}
          size={"default"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 127, flexShrink: 0 }}
          text1={"화"}
          day={"weekday"}
          size={"default"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 127, flexShrink: 0 }}
          text1={"수"}
          day={"weekday"}
          size={"default"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 127, flexShrink: 0 }}
          text1={"목"}
          day={"weekday"}
          size={"default"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 127, flexShrink: 0 }}
          text1={"금"}
          day={"weekday"}
          size={"default"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 127, flexShrink: 0 }}
          day={"sat"}
          size={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              opacity: 0.4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime2
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              opacity: 0.4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              opacity: 0.4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 127,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              opacity: 0.4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ItemWeek2
          style={{ position: "relative", width: 78, flexShrink: 0 }}
          day={"sun"}
          size={"sm"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 78, flexShrink: 0 }}
          day={"weekday"}
          size={"sm"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 78, flexShrink: 0 }}
          text1={"화"}
          day={"weekday"}
          size={"sm"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 78, flexShrink: 0 }}
          text1={"수"}
          day={"weekday"}
          size={"sm"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 78, flexShrink: 0 }}
          text1={"목"}
          day={"weekday"}
          size={"sm"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 78, flexShrink: 0 }}
          text1={"금"}
          day={"weekday"}
          size={"sm"}
        />
        <ItemWeek2
          style={{ position: "relative", width: 78, flexShrink: 0 }}
          day={"sat"}
          size={"sm"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              opacity: 0.4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime2
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            borderTop: "1px solid rgb(238,238,238)",
            borderRight: "1px solid rgb(238,238,238)",
            borderBottom: "1px solid rgb(238,238,238)",
            borderLeft: "1px solid rgb(238,238,238)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              opacity: 0.4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              opacity: 0.4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 78,
            height: 118,
            overflow: "hidden",
            backgroundColor: "rgb(255,255,255)",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 8px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              opacity: 0.4,
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <ItemTime
                style={{
                  position: "relative",
                  flexShrink: 0,
                  alignSelf: "stretch",
                  width: "auto",
                }}
                state={"default"}
                size={"default"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Size=Default
    "size=default": __body0,
    // figma: Size=Small
    "size=sm": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Month;
