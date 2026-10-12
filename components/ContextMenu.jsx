import { Divider } from './Divider.jsx';
import { ItemContextMenu } from './ItemContextMenu.jsx';
import { ItemIconContextMenu } from './ItemIconContextMenu.jsx';

// figma node: 3924:1360 ContextMenu (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function ContextMenu(_p = {}) {
  const props = { ..._p, type: _p.type ?? "checked" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 2px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 10px 10px 10px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ItemIconContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
          state={"hover/pressed"}
        />
        <ItemIconContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"keyboard"}
          state={"default"}
        />
        <ItemIconContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"keyboard"}
          state={"disabled"}
        />
        <ItemIconContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"menu indicator"}
          state={"default"}
        />
        <div style={{
          position: "relative",
          height: 17,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Divider
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 224,
            }}
            hierarchy={"hierarchy-2"}
            margin={"8px"}
          />
        </div>
        <ItemIconContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"keyboard"}
          state={"default"}
        />
        <ItemIconContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
          state={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "8px 0px 8px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Divider
            style={{
              position: "relative",
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            hierarchy={"hierarchy-2"}
            margin={"0px"}
          />
        </div>
        <ItemIconContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"danger zone"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 2px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 10px 10px 10px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
          state={"hover/pressed"}
          checked={false}
        />
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"keyboard"}
          state={"default"}
          checked={false}
        />
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"keyboard"}
          state={"disabled"}
          checked={false}
        />
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"menu indicator"}
          state={"default"}
          checked={false}
        />
        <div style={{
          position: "relative",
          height: 17,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Divider
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 224,
            }}
            hierarchy={"hierarchy-2"}
            margin={"8px"}
          />
        </div>
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"keyboard"}
          state={"default"}
          checked={false}
        />
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
          state={"default"}
          checked={false}
        />
        <div style={{
          position: "relative",
          height: 17,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Divider
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 224,
            }}
            hierarchy={"hierarchy-2"}
            margin={"8px"}
          />
        </div>
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"danger zone"}
          state={"default"}
          checked={false}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 6px 2px rgba(0,0,0,0.1), 0px 0px 2px 0px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 10px 10px 10px",
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
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
          state={"hover/pressed"}
          checked={false}
        />
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"keyboard"}
          state={"default"}
          checked={false}
        />
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"keyboard"}
          state={"disabled"}
          checked={false}
        />
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"menu indicator"}
          state={"default"}
          checked={false}
        />
        <div style={{
          position: "relative",
          height: 17,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Divider
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 224,
            }}
            hierarchy={"hierarchy-2"}
            margin={"8px"}
          />
        </div>
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"keyboard"}
          state={"default"}
          checked={true}
        />
        <ItemContextMenu
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          type={"default"}
          state={"default"}
          checked={true}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Icon Text
    "type=icon text": __body0,
    // figma: Type=Text
    "type=text": __body1,
    // figma: Type=Checked
    "type=checked": __body2,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default ContextMenu;
