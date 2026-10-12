import { IconIcEraser } from './IconIcEraser.jsx';
import { IconIcLasso } from './IconIcLasso.jsx';
import { IconIcMarker } from './IconIcMarker.jsx';
import { IconIcPen } from './IconIcPen.jsx';

// figma node: 5591:1233 item/tool (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "item=" + __venc(p.item) + '|' + "select=" + __venc(p.select);

export function ItemTool(_p = {}) {
  const props = { ..._p, item: _p.item ?? "lasso", select: _p.select ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcPen />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcMarker />}</div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcEraser />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcPen />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcLasso />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcMarker />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcEraser />}</div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "rgb(34,119,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "7px 7px 7px 7px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <IconIcLasso />}</div>
    </div>
  );
  const __impls = {
    // figma: item=pencil, select=false
    "item=pencil|select=false": __body0,
    // figma: item=marker, select=false
    "item=marker|select=false": __body1,
    // figma: item=eraser, select=false
    "item=eraser|select=false": __body2,
    // figma: item=pencil, select=true
    "item=pencil|select=true": __body3,
    // figma: item=lasso, select=false
    "item=lasso|select=false": __body4,
    // figma: item=marker, select=true
    "item=marker|select=true": __body5,
    // figma: item=eraser, select=true
    "item=eraser|select=true": __body6,
    // figma: item=lasso, select=true
    "item=lasso|select=true": __body7,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default ItemTool;
