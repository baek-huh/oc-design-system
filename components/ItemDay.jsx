import { ItemDate } from './ItemDate.jsx';
import { ItemPlan } from './ItemPlan.jsx';
import { ItemTime } from './ItemTime.jsx';

// figma node: 4690:1851 Item/Day (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "etc=" + __venc(p.etc) + '|' + "description=" + __venc(p.description) + '|' + "size=" + __venc(p.size);

export function ItemDay(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", etc: _p.etc ?? true, description: _p.description ?? true, size: _p.size ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <ItemTime state={"more than 4"} size={"default"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ItemPlan state={"default"} size={"default"} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ItemPlan state={"default"} size={"default"} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ItemPlan state={"default"} size={"default"} />}</div>
        </div>
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"plus"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 78,
      height: 118,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <ItemTime icon1={<ItemDate state={"today"} day={"weekday"} style={{ width: "100%", height: "100%" }} />} state={"more than 4"} size={"default"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <ItemPlan state={"default"} size={"default"} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ItemPlan state={"default"} size={"default"} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ItemPlan state={"default"} size={"default"} />}</div>
        </div>
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"plus"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <ItemTime state={"default"} size={"default"} />}</div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 78,
      height: 118,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <ItemTime icon1={<ItemDate state={"today"} day={"weekday"} style={{ width: "100%", height: "100%" }} />} state={"default"} size={"default"} />}</div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 78,
      height: 118,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <ItemTime icon1={<ItemDate state={"today"} day={"holiday"} style={{ width: "100%", height: "100%" }} />} state={"more than 4"} size={"default"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <ItemPlan state={"holiday"} size={"default"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ItemPlan state={"default"} size={"default"} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ItemPlan state={"default"} size={"default"} />}</div>
        </div>
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"plus"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 78,
      height: 118,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <ItemTime icon1={<ItemDate state={"today"} day={"holiday"} style={{ width: "100%", height: "100%" }} />} state={"default"} size={"default"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <ItemPlan state={"holiday"} size={"default"} />}</div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <ItemTime icon1={<ItemDate state={"default"} day={"weekday"} style={{ width: "100%", height: "100%" }} />} state={"more than 4"} size={"default"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <ItemPlan state={"etc"} size={"default"} />}</div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <ItemPlan state={"default"} size={"default"} />}</div>
          <div style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <ItemPlan state={"default"} size={"default"} />}</div>
        </div>
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"plus"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
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
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon1 ?? <ItemTime icon1={<ItemDate state={"default"} day={"weekday"} style={{ width: "100%", height: "100%" }} />} state={"default"} size={"default"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}>{props.icon2 ?? <ItemPlan state={"etc"} size={"default"} />}</div>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <ItemTime
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"more than 4"}
          size={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <ItemPlan
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            state={"default"}
            size={"default"}
          />
          <ItemPlan
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            state={"default"}
            size={"default"}
          />
          <ItemPlan
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
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"plus"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 127,
      height: 118,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <ItemTime
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          icon1={<ItemDate state={"today"} day={"weekday"} style={{ width: "100%", height: "100%" }} />}
          state={"more than 4"}
          size={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <ItemPlan
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            state={"default"}
            size={"default"}
          />
          <ItemPlan
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            state={"default"}
            size={"default"}
          />
          <ItemPlan
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
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"plus"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
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
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 127,
      height: 118,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      ...props.style,
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
          icon1={<ItemDate state={"today"} day={"weekday"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 127,
      height: 118,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <ItemTime
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          icon1={<ItemDate state={"today"} day={"holiday"} style={{ width: "100%", height: "100%" }} />}
          state={"more than 4"}
          size={"default"}
        />
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"holiday"}
          size={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <ItemPlan
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            state={"default"}
            size={"default"}
          />
          <ItemPlan
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
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"plus"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 127,
      height: 118,
      overflow: "hidden",
      backgroundColor: "rgb(245,245,245)",
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
      position: "relative",
      ...props.style,
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
          icon1={<ItemDate state={"today"} day={"holiday"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
          size={"default"}
        />
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"holiday"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <ItemTime
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          icon1={<ItemDate state={"default"} day={"weekday"} style={{ width: "100%", height: "100%" }} />}
          state={"more than 4"}
          size={"default"}
        />
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"etc"}
          size={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <ItemPlan
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            state={"default"}
            size={"default"}
          />
          <ItemPlan
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
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"plus"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
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
      position: "relative",
      ...props.style,
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
          icon1={<ItemDate state={"default"} day={"weekday"} style={{ width: "100%", height: "100%" }} />}
          state={"default"}
          size={"default"}
        />
        <ItemPlan
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          state={"etc"}
          size={"default"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default, Etc=False, Description=True, Size=Small
    "state=default|etc=false|description=true|size=sm": __body0,
    // figma: State=Today, Etc=False, Description=True, Size=Small
    "state=today|etc=false|description=true|size=sm": __body1,
    // figma: State=Default, Etc=False, Description=False, Size=Small
    "state=default|etc=false|description=false|size=sm": __body2,
    // figma: State=Today, Etc=False, Description=False, Size=Small
    "state=today|etc=false|description=false|size=sm": __body3,
    // figma: State=Today, Etc=True, Description=True, Size=Small
    "state=today|etc=true|description=true|size=sm": __body4,
    // figma: State=Today, Etc=True, Description=False, Size=Small
    "state=today|etc=true|description=false|size=sm": __body5,
    // figma: State=Default, Etc=True, Description=True, Size=Small
    "state=default|etc=true|description=true|size=sm": __body6,
    // figma: State=Default, Etc=True, Description=False, Size=Small
    "state=default|etc=true|description=false|size=sm": __body7,
    // figma: State=Default, Etc=False, Description=True, Size=Default
    "state=default|etc=false|description=true|size=default": __body8,
    // figma: State=Today, Etc=False, Description=True, Size=Default
    "state=today|etc=false|description=true|size=default": __body9,
    // figma: State=Default, Etc=False, Description=False, Size=Default
    "state=default|etc=false|description=false|size=default": __body10,
    // figma: State=Today, Etc=False, Description=False, Size=Default
    "state=today|etc=false|description=false|size=default": __body11,
    // figma: State=Today, Etc=True, Description=True, Size=Default
    "state=today|etc=true|description=true|size=default": __body12,
    // figma: State=Today, Etc=True, Description=False, Size=Default
    "state=today|etc=true|description=false|size=default": __body13,
    // figma: State=Default, Etc=True, Description=True, Size=Default
    "state=default|etc=true|description=true|size=default": __body14,
    // figma: State=Default, Etc=True, Description=False, Size=Default
    "state=default|etc=true|description=false|size=default": __body15,
  };
  return (__impls[__vkey(props)] ?? __body14)();
}
export default ItemDay;
