import { ItemAction } from './ItemAction.jsx';
import { ItemBodyCell } from './ItemBodyCell.jsx';

// figma node: 1508:3408 Body Row (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state) + '|' + "sideLine=" + __venc(p.sideLine);

export function BodyRow(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default", sideLine: _p.sideLine ?? true, showAction: _p.showAction ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 56,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 1070,
        height: 56,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(34,34,34)",
        borderRight: "1px solid rgb(34,34,34)",
        borderBottom: "1px solid rgb(34,34,34)",
        borderLeft: "1px solid rgb(34,34,34)",
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
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 56,
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
        height: 56,
        backgroundColor: "rgb(255,255,255)",
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
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1070,
      height: 56,
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
        height: 56,
        backgroundColor: "rgb(245,245,245)",
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
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
        />
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          type={"text"}
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
    "state=hover/pressed|sideLine=false": __body2,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default BodyRow;
