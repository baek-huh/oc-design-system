import { Divider } from './Divider.jsx';
import { IconIcDotsSixVertical } from './IconIcDotsSixVertical.jsx';
import { ItemColor } from './ItemColor.jsx';
import { ItemEraser } from './ItemEraser.jsx';
import { ItemMarker } from './ItemMarker.jsx';
import { ItemPen } from './ItemPen.jsx';
import { ItemTool } from './ItemTool.jsx';
import { ItemUndoRedo } from './ItemUndoRedo.jsx';

// figma node: 5591:1250 pencil-kit (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "item=" + __venc(p.item);

export function PencilKit(_p = {}) {
  const props = { ..._p, item: _p.item ?? "pen" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 541,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
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
          width: 18,
          height: 18,
          flexShrink: 0,
          color: "var(--gray-200)",
        }}>{props.icon1 ?? <IconIcDotsSixVertical style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemUndoRedo item={"undo"} select={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemUndoRedo item={"redo"} select={false} />}</div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          transform: "matrix(0,-1,1,0,114,34)",
          transformOrigin: "0 0",
        }}>{props.icon4 ?? <Divider hierarchy={"hierarchy-2"} margin={"0px"} />}</div>
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"pencil"}
        select={true}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"marker"}
        select={false}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"eraser"}
        select={false}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"lasso"}
        select={false}
      />
      <Divider
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          transform: "matrix(0,-1,1,0,283,34)",
          transformOrigin: "0 0",
        }}
        hierarchy={"hierarchy-2"}
        margin={"0px"}
      />
      <ItemPen
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        thinkness={"1mm"}
        select={true}
      />
      <ItemPen
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        thinkness={"3mm"}
        select={false}
      />
      <ItemPen
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        thinkness={"6mm"}
        select={false}
      />
      <Divider
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          transform: "matrix(0,-1,1,0,412,34)",
          transformOrigin: "0 0",
        }}
        hierarchy={"hierarchy-2"}
        margin={"0px"}
      />
      <ItemColor
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        select={true}
      />
      <ItemColor
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        select={false}
      />
      <ItemColor
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        select={false}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 444,
      height: 48,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
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
          width: 18,
          height: 18,
          flexShrink: 0,
          color: "var(--gray-200)",
        }}>{props.icon1 ?? <IconIcDotsSixVertical style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemUndoRedo item={"undo"} select={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemUndoRedo item={"redo"} select={false} />}</div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          transform: "matrix(0,-1,1,0,114,34)",
          transformOrigin: "0 0",
        }}>{props.icon4 ?? <Divider hierarchy={"hierarchy-2"} margin={"0px"} />}</div>
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"pencil"}
        select={false}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"marker"}
        select={false}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"eraser"}
        select={true}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"lasso"}
        select={false}
      />
      <Divider
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          transform: "matrix(0,-1,1,0,283,34)",
          transformOrigin: "0 0",
        }}
        hierarchy={"hierarchy-2"}
        margin={"0px"}
      />
      <ItemEraser
        style={{ position: "relative", flexShrink: 0 }}
        size={"28mm"}
        select={true}
      />
      <ItemEraser
        style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}
        size={"40mm"}
        select={false}
      />
      <ItemEraser
        style={{
          position: "relative",
          width: 52,
          height: 52,
          flexShrink: 0,
        }}
        size={"52mm"}
        select={false}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 283,
      height: 48,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
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
          width: 18,
          height: 18,
          flexShrink: 0,
          color: "var(--gray-200)",
        }}>{props.icon1 ?? <IconIcDotsSixVertical style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemUndoRedo item={"undo"} select={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemUndoRedo item={"redo"} select={false} />}</div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          transform: "matrix(0,-1,1,0,114,34)",
          transformOrigin: "0 0",
        }}>{props.icon4 ?? <Divider hierarchy={"hierarchy-2"} margin={"0px"} />}</div>
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"pencil"}
        select={false}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"marker"}
        select={false}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"eraser"}
        select={false}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"lasso"}
        select={true}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 547,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
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
          width: 18,
          height: 18,
          flexShrink: 0,
          color: "var(--gray-200)",
        }}>{props.icon1 ?? <IconIcDotsSixVertical style={{ transform: "scale(0.750, 0.750)", transformOrigin: "0 0" }} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <ItemUndoRedo item={"undo"} select={false} />}</div>
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon3 ?? <ItemUndoRedo item={"redo"} select={false} />}</div>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          transform: "matrix(0,-1,1,0,114,34)",
          transformOrigin: "0 0",
        }}>{props.icon4 ?? <Divider hierarchy={"hierarchy-2"} margin={"0px"} />}</div>
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"pencil"}
        select={false}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"marker"}
        select={true}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"eraser"}
        select={false}
      />
      <ItemTool
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        item={"lasso"}
        select={false}
      />
      <Divider
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          transform: "matrix(0,-1,1,0,283,34)",
          transformOrigin: "0 0",
        }}
        hierarchy={"hierarchy-2"}
        margin={"0px"}
      />
      <ItemMarker
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        thinkness={"4mm"}
        select={true}
      />
      <ItemMarker
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        thinkness={"8mm"}
        select={false}
      />
      <ItemMarker
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        thinkness={"12mm"}
        select={false}
      />
      <Divider
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          transform: "matrix(0,-1,1,0,418,34)",
          transformOrigin: "0 0",
        }}
        hierarchy={"hierarchy-2"}
        margin={"0px"}
      />
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgb(238,238,238)",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.125} height={16.125} viewBox="0 0 16.125 16.125" fill="none" style={{
            position: "absolute",
            left: 0.938,
            top: 0.938,
            width: 16.125,
            height: 16.125,
            color: "rgb(249,221,124)",
          }}>
            <path d={"M 8.063 0 C 3.61 0 0 3.61 0 8.063 C 0 12.515 3.61 16.125 8.063 16.125 C 12.515 16.125 16.125 12.515 16.125 8.063 C 16.125 3.61 12.515 0 8.063 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.125} height={16.125} viewBox="0 0 16.125 16.125" fill="none" style={{
            position: "absolute",
            left: 0.938,
            top: 0.938,
            width: 16.125,
            height: 16.125,
            color: "rgb(247,180,190)",
          }}>
            <path d={"M 8.063 0 C 3.61 0 0 3.61 0 8.063 C 0 12.515 3.61 16.125 8.063 16.125 C 12.515 16.125 16.125 12.515 16.125 8.063 C 16.125 3.61 12.515 0 8.063 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "7px 7px 7px 7px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.125} height={16.125} viewBox="0 0 16.125 16.125" fill="none" style={{
            position: "absolute",
            left: 0.938,
            top: 0.938,
            width: 16.125,
            height: 16.125,
            color: "rgb(195,226,223)",
          }}>
            <path d={"M 8.063 0 C 3.61 0 0 3.61 0 8.063 C 0 12.515 3.61 16.125 8.063 16.125 C 12.515 16.125 16.125 12.515 16.125 8.063 C 16.125 3.61 12.515 0 8.063 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: item=pen
    "item=pen": __body0,
    // figma: item=eraser
    "item=eraser": __body1,
    // figma: item=lasso
    "item=lasso": __body2,
    // figma: item=marker
    "item=marker": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default PencilKit;
