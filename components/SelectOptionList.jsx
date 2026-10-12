import { BoxButtonSecondary } from './BoxButtonSecondary.jsx';
import { Search } from './Search.jsx';
import { SelectListItem } from './SelectListItem.jsx';
import { SelectListPrefixes } from './SelectListPrefixes.jsx';

// figma node: 7814:1618 select-option-list (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "size=" + __venc(p.size);

export function SelectOptionList(_p = {}) {
  const props = { ..._p, type: _p.type ?? "select", size: _p.size ?? "lg", showSearch: _p.showSearch ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Search
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"md"}
          type={"inField"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"active"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"md"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Search
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"lg"}
          type={"inField"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"active"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"lg"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Search
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"md"}
          type={"inField"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          icon1={<SelectListPrefixes prefixes={"check-box"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          icon1={<SelectListPrefixes prefixes={"check-box"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
          size={"md"}
        />
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--color-white)",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "8px 8px 8px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 4px 4px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <SelectListPrefixes
              style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}
              prefixes={"check-box"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "0px 4px 0px 4px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: "calc(var(--size-text-14) * 1px)",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "rgb(33,33,33)",
              flexShrink: 0,
            }}>옵션 A 컨텐츠</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--color-white)",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "8px 8px 8px 8px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 4px 4px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <SelectListPrefixes
              style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}
              prefixes={"check-box"}
            />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "0px 4px 0px 4px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: "calc(var(--size-text-14) * 1px)",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "rgb(33,33,33)",
              flexShrink: 0,
            }}>옵션 A 컨텐츠</span>
          </div>
        </div>
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          icon1={<SelectListPrefixes prefixes={"check-box"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          icon1={<SelectListPrefixes prefixes={"check-box"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
          size={"md"}
        />
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Search
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"lg"}
          type={"inField"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          icon1={<SelectListPrefixes prefixes={"check-box"} style={{ transform: "scale(1.125, 1.125)", transformOrigin: "0 0" }} />}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          icon1={<SelectListPrefixes prefixes={"check-box"} style={{ transform: "scale(1.125, 1.125)", transformOrigin: "0 0" }} />}
          state={"default"}
          size={"lg"}
        />
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--white)",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "10px 12px 10px 10px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 4px 4px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <SelectListPrefixes
                style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }}
                prefixes={"check-box"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "0px 4px 0px 4px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: "calc(var(--size-text-16) * 1px)",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(33,33,33)",
              flexShrink: 0,
            }}>옵션 A 컨텐츠</span>
          </div>
        </div>
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "var(--white)",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          padding: "10px 12px 10px 10px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "4px 4px 4px 4px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 20,
                height: 20,
                flexShrink: 0,
              }}>
              <SelectListPrefixes
                style={{ transform: "scale(1.250, 1.250)", transformOrigin: "0 0" }}
                prefixes={"check-box"}
              />
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "0px 4px 0px 4px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
          }}>
            <span style={{
              position: "relative",
              fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 400,
              fontSize: "calc(var(--size-text-16) * 1px)",
              whiteSpace: "nowrap",
              lineHeight: "28px",
              color: "rgb(33,33,33)",
              flexShrink: 0,
            }}>옵션 A 컨텐츠</span>
          </div>
        </div>
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          icon1={<SelectListPrefixes prefixes={"check-box"} style={{ transform: "scale(1.125, 1.125)", transformOrigin: "0 0" }} />}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          icon1={<SelectListPrefixes prefixes={"check-box"} style={{ transform: "scale(1.125, 1.125)", transformOrigin: "0 0" }} />}
          state={"default"}
          size={"lg"}
        />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Search
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"md"}
          type={"inField"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"md"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"md"}
        />
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 350,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showSearch && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Search
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"lg"}
          type={"inField"}
        />
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"lg"}
        />
        <SelectListItem
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          showPrefixes={true}
          state={"default"}
          size={"lg"}
        />
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 256,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Search
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"md"}
          type={"inField"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
        }}>{props.text1 ?? "등록된 “레이블\"이 없어요."}</span>
        <div style={{ position: "relative", width: 62, flexShrink: 0 }}>{props.icon1 ?? <BoxButtonSecondary text1={"추가하기"} state={"default"} size={"xs"} icon={"none"} />}</div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 256,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      boxShadow: "0px 0px 1px 0px rgba(75,81,91,0.2), 0px 0px 0px 1px rgba(75,81,91,0.03), 0px 10px 14px 0px rgba(75,81,91,0.06), 0px 14px 32px 0px rgba(75,81,91,0.12)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Search
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"default"}
          size={"lg"}
          type={"inField"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "rgb(97,97,97)",
          flexShrink: 0,
        }}>{props.text1 ?? "등록된 “레이블\"이 없어요."}</span>
        <div style={{ position: "relative", width: 62, flexShrink: 0 }}>{props.icon1 ?? <BoxButtonSecondary text1={"추가하기"} state={"default"} size={"xs"} icon={"none"} />}</div>
      </div>
    </div>
  );
  const __impls = {
    // figma: type=select, size=medium
    "type=select|size=md": __body0,
    // figma: type=select, size=large
    "type=select|size=lg": __body1,
    // figma: type=multi-select, size=medium
    "type=multi-select|size=md": __body2,
    // figma: type=multi-select, size=large
    "type=multi-select|size=lg": __body3,
    // figma: type=icon, size=medium
    "type=icon|size=md": __body4,
    // figma: type=icon, size=large
    "type=icon|size=lg": __body5,
    // figma: type=search-none, size=medium
    "type=search-none|size=md": __body6,
    // figma: type=search-none, size=large
    "type=search-none|size=lg": __body7,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default SelectOptionList;
