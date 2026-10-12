import { Bg } from './Bg.jsx';
import { Category } from './Category.jsx';
import { Device } from './Device.jsx';
import { Screenshot } from './Screenshot.jsx';
import { State } from './State.jsx';
import { Title } from './Title.jsx';

// figma node: 7758:3374 Thumnail (32 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "light=" + __venc(p.light) + '|' + "state=" + __venc(p.state) + '|' + "device=" + __venc(p.device) + '|' + "screen=" + __venc(p.screen);

export function Thumnail(_p = {}) {
  const props = { ..._p, light: _p.light ?? false, state: _p.state ?? "inprogress", device: _p.device ?? false, screen: _p.screen ?? false, title: _p.title ?? "커버 타이틀", date: _p.date ?? "24.03" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"inprogress"}
                light={false}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"inprogress"}
                light={false}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={false} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"inprogress"}
                light={false}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={false} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"inprogress"}
                light={false}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"holding"}
                light={false}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.text1 ?? "24.03"}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text3 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"holding"}
                light={false}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={false} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"holding"}
                light={false}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={false} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"holding"}
                light={false}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"done"}
                light={false}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"done"}
                light={false}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={false} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"done"}
                light={false}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={false} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"done"}
                light={false}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"archiving"}
                light={false}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"archiving"}
                light={false}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={false} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"archiving"}
                light={false}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"light"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={false} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"archiving"}
                light={false}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={false}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"inprogress"}
                light={true}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"inprogress"}
                light={true}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={true} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"inprogress"}
                light={true}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={true} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"inprogress"}
                light={true}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 800,
              fontSize: 50,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              lineHeight: 1.2000000476837158,
              letterSpacing: "-0.020em",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.title}</span>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"holding"}
                light={true}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"holding"}
                light={true}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={true} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"holding"}
                light={true}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={true} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"holding"}
                light={true}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 800,
              fontSize: 50,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              lineHeight: 1.2000000476837158,
              letterSpacing: "-0.020em",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.title}</span>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"done"}
                light={true}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"done"}
                light={true}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={true} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"done"}
                light={true}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={true} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"done"}
                light={true}
              />
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 800,
              fontSize: 50,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              lineHeight: 1.2000000476837158,
              letterSpacing: "-0.020em",
              color: "rgb(255,255,255)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>{props.title}</span>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"archiving"}
                light={true}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"archiving"}
                light={true}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={true} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"archiving"}
                light={true}
              />
            </div>
            <Title
              style={{
                position: "relative",
                flexShrink: 0,
                alignSelf: "stretch",
                width: "auto",
              }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 800,
      height: 480,
      overflow: "hidden",
      borderRadius: 16,
      position: "relative",
      ...props.style,
    }}>
      <Bg
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 800,
          height: 480,
        }}
        mode={"dark"}
        color={"blue"}
      />
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 800,
        height: 480,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "36px 36px 36px 36px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <Category
                style={{ position: "relative", flexShrink: 0 }}
                type={"pages"}
              />
              <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Device device={"pc"} light={true} />}</div>
              <State
                style={{ position: "relative", flexShrink: 0 }}
                state={"archiving"}
                light={true}
              />
            </div>
            <Title
              style={{ position: "relative", flexShrink: 0 }}
              light={true}
              sub={false}
            />
          </div>
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
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              textAlign: "right",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              letterSpacing: "-0.010em",
              color: "rgb(82,94,117)",
              flexShrink: 0,
            }}>{props.date}</span>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              gap: 12.5,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text1 ?? "@김지원"}</span>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 600,
                fontSize: 32,
                textAlign: "right",
                whiteSpace: "nowrap",
                lineHeight: "100%",
                letterSpacing: "-0.010em",
                color: "rgb(82,94,117)",
                flexShrink: 0,
              }}>{props.text2 ?? "slash unit"}</span>
            </div>
          </div>
        </div>
        <Screenshot
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          device={"pc"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Light=True, State=InProgress, Device=False, Screen=False
    "light=true|state=inprogress|device=false|screen=false": __body0,
    // figma: Light=True, State=InProgress, Device=False, Screen=True
    "light=true|state=inprogress|device=false|screen=true": __body1,
    // figma: Light=True, State=InProgress, Device=True, Screen=False
    "light=true|state=inprogress|device=true|screen=false": __body2,
    // figma: Light=True, State=InProgress, Device=True, Screen=True
    "light=true|state=inprogress|device=true|screen=true": __body3,
    // figma: Light=True, State=Holding, Device=False, Screen=False
    "light=true|state=holding|device=false|screen=false": __body4,
    // figma: Light=True, State=Holding, Device=False, Screen=True
    "light=true|state=holding|device=false|screen=true": __body5,
    // figma: Light=True, State=Holding, Device=True, Screen=False
    "light=true|state=holding|device=true|screen=false": __body6,
    // figma: Light=True, State=Holding, Device=True, Screen=True
    "light=true|state=holding|device=true|screen=true": __body7,
    // figma: Light=True, State=Done, Device=False, Screen=False
    "light=true|state=done|device=false|screen=false": __body8,
    // figma: Light=True, State=Done, Device=False, Screen=True
    "light=true|state=done|device=false|screen=true": __body9,
    // figma: Light=True, State=Done, Device=True, Screen=False
    "light=true|state=done|device=true|screen=false": __body10,
    // figma: Light=True, State=Done, Device=True, Screen=True
    "light=true|state=done|device=true|screen=true": __body11,
    // figma: Light=True, State=Archiving, Device=False, Screen=False
    "light=true|state=archiving|device=false|screen=false": __body12,
    // figma: Light=True, State=Archiving, Device=False, Screen=True
    "light=true|state=archiving|device=false|screen=true": __body13,
    // figma: Light=True, State=Archiving, Device=True, Screen=False
    "light=true|state=archiving|device=true|screen=false": __body14,
    // figma: Light=True, State=Archiving, Device=True, Screen=True
    "light=true|state=archiving|device=true|screen=true": __body15,
    // figma: Light=False, State=InProgress, Device=False, Screen=False
    "light=false|state=inprogress|device=false|screen=false": __body16,
    // figma: Light=False, State=InProgress, Device=False, Screen=True
    "light=false|state=inprogress|device=false|screen=true": __body17,
    // figma: Light=False, State=InProgress, Device=True, Screen=False
    "light=false|state=inprogress|device=true|screen=false": __body18,
    // figma: Light=False, State=InProgress, Device=True, Screen=True
    "light=false|state=inprogress|device=true|screen=true": __body19,
    // figma: Light=False, State=Holding, Device=False, Screen=False
    "light=false|state=holding|device=false|screen=false": __body20,
    // figma: Light=False, State=Holding, Device=False, Screen=True
    "light=false|state=holding|device=false|screen=true": __body21,
    // figma: Light=False, State=Holding, Device=True, Screen=False
    "light=false|state=holding|device=true|screen=false": __body22,
    // figma: Light=False, State=Holding, Device=True, Screen=True
    "light=false|state=holding|device=true|screen=true": __body23,
    // figma: Light=False, State=Done, Device=False, Screen=False
    "light=false|state=done|device=false|screen=false": __body24,
    // figma: Light=False, State=Done, Device=False, Screen=True
    "light=false|state=done|device=false|screen=true": __body25,
    // figma: Light=False, State=Done, Device=True, Screen=False
    "light=false|state=done|device=true|screen=false": __body26,
    // figma: Light=False, State=Done, Device=True, Screen=True
    "light=false|state=done|device=true|screen=true": __body27,
    // figma: Light=False, State=Archiving, Device=False, Screen=False
    "light=false|state=archiving|device=false|screen=false": __body28,
    // figma: Light=False, State=Archiving, Device=False, Screen=True
    "light=false|state=archiving|device=false|screen=true": __body29,
    // figma: Light=False, State=Archiving, Device=True, Screen=False
    "light=false|state=archiving|device=true|screen=false": __body30,
    // figma: Light=False, State=Archiving, Device=True, Screen=True
    "light=false|state=archiving|device=true|screen=true": __body31,
  };
  return (__impls[__vkey(props)] ?? __body16)();
}
export default Thumnail;
