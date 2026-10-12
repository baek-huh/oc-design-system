import { ItemBodyCell } from './ItemBodyCell.jsx';
import { ItemHeaderCell } from './ItemHeaderCell.jsx';

// figma node: 7759:4307 Key Value Table
export function KeyValueTable(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 594,
      overflow: "hidden",
      borderTop: "1px solid rgb(0,0,0)",
      borderRight: "1px solid rgb(0,0,0)",
      borderBottom: "1px solid rgb(0,0,0)",
      borderLeft: "1px solid rgb(0,0,0)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(250,250,250)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <ItemHeaderCell
          style={{
            position: "relative",
            width: 214,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          state={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <ItemBodyCell
          style={{
            position: "relative",
            flexGrow: 1,
            alignSelf: "stretch",
            width: "auto",
            height: "auto",
          }}
          showIcon={true}
          type={"text"}
        />
      </div>
    </div>
  );
}
export default KeyValueTable;
