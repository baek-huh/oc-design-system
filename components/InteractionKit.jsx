import { ItemMenu3 } from './ItemMenu3.jsx';

// figma node: 10073:1134 Interaction-kit (7 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "page=" + __venc(p.page) + '|' + "solution=" + __venc(p.solution) + '|' + "quizPaper=" + __venc(p.quizPaper) + '|' + "listening=" + __venc(p.listening) + '|' + "setting=" + __venc(p.setting) + '|' + "guide=" + __venc(p.guide);

export function InteractionKit(_p = {}) {
  const props = { ..._p, page: _p.page ?? true, solution: _p.solution ?? true, quizPaper: _p.quizPaper ?? true, listening: _p.listening ?? true, setting: _p.setting ?? true, guide: _p.guide ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--gray-25)",
      borderTop: "1px solid var(--gray-50)",
      borderRight: "1px solid var(--gray-50)",
      borderBottom: "1px solid var(--gray-50)",
      borderLeft: "1px solid var(--gray-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ItemMenu3 item={"page"} select={true} />}</div>
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ItemMenu3 item={"solution"} select={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ItemMenu3 item={"quiz-paper"} select={false} />}</div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"listening"}
        select={false}
      />
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"setting"}
        select={false}
      />
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"guide"}
        select={false}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--gray-25)",
      borderTop: "1px solid var(--gray-50)",
      borderRight: "1px solid var(--gray-50)",
      borderBottom: "1px solid var(--gray-50)",
      borderLeft: "1px solid var(--gray-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ItemMenu3 item={"page"} select={false} />}</div>
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ItemMenu3 item={"solution"} select={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ItemMenu3 item={"quiz-paper"} select={false} />}</div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"listening"}
        select={false}
      />
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"setting"}
        select={false}
      />
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"guide"}
        select={false}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--gray-25)",
      borderTop: "1px solid var(--gray-50)",
      borderRight: "1px solid var(--gray-50)",
      borderBottom: "1px solid var(--gray-50)",
      borderLeft: "1px solid var(--gray-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ItemMenu3 item={"page"} select={false} />}</div>
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ItemMenu3 item={"solution"} select={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ItemMenu3 item={"quiz-paper"} select={true} />}</div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"listening"}
        select={false}
      />
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"setting"}
        select={false}
      />
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"guide"}
        select={false}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--gray-25)",
      borderTop: "1px solid var(--gray-50)",
      borderRight: "1px solid var(--gray-50)",
      borderBottom: "1px solid var(--gray-50)",
      borderLeft: "1px solid var(--gray-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ItemMenu3 item={"page"} select={false} />}</div>
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ItemMenu3 item={"solution"} select={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ItemMenu3 item={"quiz-paper"} select={false} />}</div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"listening"}
        select={false}
      />
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"setting"}
        select={true}
      />
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"guide"}
        select={false}
      />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--gray-25)",
      borderTop: "1px solid var(--gray-50)",
      borderRight: "1px solid var(--gray-50)",
      borderBottom: "1px solid var(--gray-50)",
      borderLeft: "1px solid var(--gray-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ItemMenu3 item={"page"} select={false} />}</div>
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ItemMenu3 item={"solution"} select={true} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ItemMenu3 item={"quiz-paper"} select={false} />}</div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"listening"}
        select={false}
      />
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"setting"}
        select={false}
      />
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"guide"}
        select={false}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--gray-25)",
      borderTop: "1px solid var(--gray-50)",
      borderRight: "1px solid var(--gray-50)",
      borderBottom: "1px solid var(--gray-50)",
      borderLeft: "1px solid var(--gray-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ItemMenu3 item={"page"} select={false} />}</div>
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ItemMenu3 item={"solution"} select={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ItemMenu3 item={"quiz-paper"} select={false} />}</div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"listening"}
        select={true}
      />
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"setting"}
        select={false}
      />
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"guide"}
        select={false}
      />
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      backgroundColor: "var(--gray-25)",
      borderTop: "1px solid var(--gray-50)",
      borderRight: "1px solid var(--gray-50)",
      borderBottom: "1px solid var(--gray-50)",
      borderLeft: "1px solid var(--gray-50)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon1 ?? <ItemMenu3 item={"page"} select={false} />}</div>
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon3 ?? <ItemMenu3 item={"solution"} select={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.icon4 ?? <ItemMenu3 item={"quiz-paper"} select={false} />}</div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"listening"}
        select={false}
      />
      <div style={{
        position: "relative",
        width: 24,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          height: 1,
          backgroundColor: "var(--gray-50)",
          flexGrow: 1,
        }} />
      </div>
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"setting"}
        select={false}
      />
      <ItemMenu3
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        item={"guide"}
        select={true}
      />
    </div>
  );
  const __impls = {
    // figma: page=true, solution=false, quiz-paper=false, listening=false, setting=false, guide=false
    "page=true|solution=false|quizPaper=false|listening=false|setting=false|guide=false": __body0,
    // figma: page=false, solution=false, quiz-paper=false, listening=false, setting=false, guide=false
    "page=false|solution=false|quizPaper=false|listening=false|setting=false|guide=false": __body1,
    // figma: page=false, solution=false, quiz-paper=true, listening=false, setting=false, guide=false
    "page=false|solution=false|quizPaper=true|listening=false|setting=false|guide=false": __body2,
    // figma: page=false, solution=false, quiz-paper=false, listening=false, setting=true, guide=false
    "page=false|solution=false|quizPaper=false|listening=false|setting=true|guide=false": __body3,
    // figma: page=false, solution=true, quiz-paper=false, listening=false, setting=false, guide=false
    "page=false|solution=true|quizPaper=false|listening=false|setting=false|guide=false": __body4,
    // figma: page=false, solution=false, quiz-paper=false, listening=true, setting=false, guide=false
    "page=false|solution=false|quizPaper=false|listening=true|setting=false|guide=false": __body5,
    // figma: page=false, solution=false, quiz-paper=false, listening=false, setting=false, guide=true
    "page=false|solution=false|quizPaper=false|listening=false|setting=false|guide=true": __body6,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default InteractionKit;
