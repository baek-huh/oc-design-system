import { PopoverHeaderRightButton } from './PopoverHeaderRightButton.jsx';

// figma node: 5182:770 item/pen-option (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "option=" + __venc(p.option);

export function ItemPenOption(_p = {}) {
  const props = { ..._p, option: _p.option ?? "color" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 340,
      height: 224,
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
            }}>{props.text1 ?? "펜 색상"}</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "12px 12px 12px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 264,
              display: "flex",
              flexDirection: "row",
              gap: 24,
              padding: "12px 0px 12px 0px",
              alignItems: "flex-start",
              flexWrap: "wrap",
              alignContent: "space-between",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(33,33,33)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(97,97,97)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(158,158,158)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(224,224,224)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(245,245,245)",
                boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(255,255,255)",
                boxShadow: "inset 0 0 0 1px rgb(238,238,238)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(239,83,80)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(255,167,38)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(5,192,114)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(38,157,166)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(69,147,252)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(171,71,188)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(239,154,154)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(255,204,128)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(90,233,173)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(129,199,204)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(144,194,255)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "relative",
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(206,147,216)",
                flexShrink: 0,
              }} />
              <div style={{
                position: "absolute",
                left: 2,
                top: 14,
                width: 20,
                height: 20,
                borderRadius: "50%",
                boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
              }} />
            </div>
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
  const __body1 = () => (
    <div className={props.className} style={{
      width: 340,
      height: 177,
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
        height: 165,
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
            }}>{props.text1 ?? "펜 두께"}</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "12px 12px 12px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              borderRadius: 8,
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "40px 36px 40px 20px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.399999976158142,
                color: "rgb(97,97,97)",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}>{props.text2 ?? "6.0mm"}</span>
              <div style={{
                position: "relative",
                height: 4,
                borderRadius: 9999,
                backgroundColor: "rgb(238,238,238)",
                flexGrow: 1,
              }}>
                <svg width={194} height={4} viewBox="0 0 194 4" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 194,
                  height: 4,
                  overflow: "hidden",
                  borderRadius: 9999,
                  color: "rgb(33,33,33)",
                }}>
                  <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 192 0 C 193.105 0 194 0.895 194 2 L 194 2 C 194 3.105 193.105 4 192 4 L 2 4 C 0.895 4 0 3.105 0 2 L 0 2 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 178,
                  top: -14,
                  width: 32,
                  height: 32,
                  borderRadius: 9999,
                  backgroundColor: "rgb(255,255,255)",
                  boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
                }}>
                  <svg width={6} height={6} viewBox="0 0 6 6" fill="none" style={{
                    position: "absolute",
                    left: 13,
                    top: 13,
                    width: 6,
                    height: 6,
                    overflow: "hidden",
                    borderRadius: 9999,
                    color: "rgb(33,33,33)",
                  }}>
                    <path d={"M 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 3 C 6 4.657 4.657 6 3 6 L 3 6 C 1.343 6 0 4.657 0 3 L 0 3 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
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
  const __body2 = () => (
    <div className={props.className} style={{
      width: 340,
      height: 177,
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
        height: 165,
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
            }}>{props.text1 ?? "펜 두께"}</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "12px 12px 12px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              borderRadius: 8,
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "40px 36px 40px 20px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.399999976158142,
                color: "rgb(97,97,97)",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}>{props.text2 ?? "3.0mm"}</span>
              <div style={{
                position: "relative",
                height: 4,
                borderRadius: 9999,
                backgroundColor: "rgb(238,238,238)",
                flexGrow: 1,
              }}>
                <svg width={97} height={4} viewBox="0 0 97 4" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 97,
                  height: 4,
                  overflow: "hidden",
                  borderRadius: 9999,
                  color: "rgb(33,33,33)",
                }}>
                  <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 95 0 C 96.105 0 97 0.895 97 2 L 97 2 C 97 3.105 96.105 4 95 4 L 2 4 C 0.895 4 0 3.105 0 2 L 0 2 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: 81,
                  top: -14,
                  width: 32,
                  height: 32,
                  borderRadius: 9999,
                  backgroundColor: "rgb(255,255,255)",
                  boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
                }}>
                  <svg width={3} height={3} viewBox="0 0 3 3" fill="none" style={{
                    position: "absolute",
                    left: 14.5,
                    top: 14.5,
                    width: 3,
                    height: 3,
                    overflow: "hidden",
                    borderRadius: 9999,
                    color: "rgb(33,33,33)",
                  }}>
                    <path d={"M 0 1.5 C 0 0.672 0.672 0 1.5 0 L 1.5 0 C 2.328 0 3 0.672 3 1.5 L 3 1.5 C 3 2.328 2.328 3 1.5 3 L 1.5 3 C 0.672 3 0 2.328 0 1.5 L 0 1.5 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
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
  const __body3 = () => (
    <div className={props.className} style={{
      width: 340,
      height: 177,
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
        height: 165,
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
            }}>{props.text1 ?? "펜 두께"}</span>
          </div>
          <div style={{
            position: "relative",
            backgroundColor: "rgb(245,245,245)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "12px 12px 12px 12px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              borderRadius: 8,
              backgroundColor: "rgb(255,255,255)",
              display: "flex",
              flexDirection: "row",
              gap: 16,
              padding: "40px 36px 40px 20px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "relative",
                fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.399999976158142,
                color: "rgb(97,97,97)",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}>{props.text2 ?? "1.0mm"}</span>
              <div style={{
                position: "relative",
                width: 194,
                height: 4,
                borderRadius: 9999,
                backgroundColor: "rgb(238,238,238)",
                flexShrink: 0,
              }}>
                <svg width={1} height={4} viewBox="0 0 1 4" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 1,
                  height: 4,
                  overflow: "hidden",
                  borderRadius: 9999,
                  color: "rgb(33,33,33)",
                }}>
                  <path d={"M 0 0.5 C 0 0.224 0.224 0 0.5 0 L 0.5 0 C 0.776 0 1 0.224 1 0.5 L 1 3.5 C 1 3.776 0.776 4 0.5 4 L 0.5 4 C 0.224 4 0 3.776 0 3.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
                <div style={{
                  position: "absolute",
                  left: -16,
                  top: -14,
                  width: 32,
                  height: 32,
                  borderRadius: 9999,
                  backgroundColor: "rgb(255,255,255)",
                  boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
                }}>
                  <svg width={1} height={1} viewBox="0 0 1 1" fill="none" style={{
                    position: "absolute",
                    left: 15.5,
                    top: 15.5,
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                    borderRadius: 9999,
                    color: "rgb(33,33,33)",
                  }}>
                    <path d={"M 0 0.5 C 0 0.224 0.224 0 0.5 0 L 0.5 0 C 0.776 0 1 0.224 1 0.5 L 1 0.5 C 1 0.776 0.776 1 0.5 1 L 0.5 1 C 0.224 1 0 0.776 0 0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
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
    // figma: option=color
    "option=color": __body0,
    // figma: option=thickness-6mm
    "option=thickness-6mm": __body1,
    // figma: option=thickness-3mm
    "option=thickness-3mm": __body2,
    // figma: option=thickness-1mm
    "option=thickness-1mm": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default ItemPenOption;
