import { IconIcMoreHorizontal } from './IconIcMoreHorizontal.jsx';
import { ItemNumber } from './ItemNumber.jsx';
import { ItemPaginationBtn } from './ItemPaginationBtn.jsx';

// figma node: 618:4342 Pagination/Extra (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "focus=" + __venc(p.focus);

export function PaginationExtra(_p = {}) {
  const props = { ..._p, focus: _p.focus ?? "center" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemPaginationBtn state={"default"} line={false} left={true} right={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemNumber text1={"1"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon3 ?? <IconIcMoreHorizontal style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <ItemNumber text1={"4"} state={"default"} />}</div>
        <ItemNumber
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"5"}
          state={"default"}
        />
        <ItemNumber
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"6"}
          state={"focus"}
        />
        <ItemNumber
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"7"}
          state={"default"}
        />
        <ItemNumber
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"8"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
        <IconIcMoreHorizontal style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />
      </div>
      <ItemNumber
        style={{
          position: "relative",
          width: 39,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"20"}
        state={"default"}
      />
      <ItemPaginationBtn
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
        line={false}
        left={false}
        right={true}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemPaginationBtn state={"default"} line={false} left={true} right={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemNumber text1={"1"} state={"default"} />}</div>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon3 ?? <IconIcMoreHorizontal style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 37,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <ItemNumber text1={"14"} state={"default"} />}</div>
        <ItemNumber
          style={{
            position: "relative",
            width: 37,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"15"}
          state={"default"}
        />
        <ItemNumber
          style={{
            position: "relative",
            width: 37,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"16"}
          state={"focus"}
        />
        <ItemNumber
          style={{
            position: "relative",
            width: 37,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"17"}
          state={"default"}
        />
        <ItemNumber
          style={{
            position: "relative",
            width: 37,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"18"}
          state={"default"}
        />
        <ItemNumber
          style={{
            position: "relative",
            width: 37,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"19"}
          state={"default"}
        />
        <ItemNumber
          style={{
            position: "relative",
            width: 39,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"20"}
          state={"default"}
        />
      </div>
      <ItemPaginationBtn
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
        line={false}
        left={false}
        right={true}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <ItemPaginationBtn state={"default"} line={false} left={true} right={false} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <ItemNumber text1={"1"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <ItemNumber text1={"2"} state={"default"} />}</div>
        <div style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon4 ?? <ItemNumber text1={"3"} state={"default"} />}</div>
        <ItemNumber
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"4"}
          state={"default"}
        />
        <ItemNumber
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"5"}
          state={"focus"}
        />
        <ItemNumber
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"6"}
          state={"default"}
        />
        <ItemNumber
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          text1={"7"}
          state={"default"}
        />
      </div>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>
        <IconIcMoreHorizontal style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />
      </div>
      <ItemNumber
        style={{
          position: "relative",
          width: 39,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"20"}
        state={"default"}
      />
      <ItemPaginationBtn
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        state={"default"}
        line={false}
        left={false}
        right={true}
      />
    </div>
  );
  const __impls = {
    // figma: Focus=Center
    "focus=center": __body0,
    // figma: Focus=Last
    "focus=last": __body1,
    // figma: Focus=First
    "focus=first": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PaginationExtra;
