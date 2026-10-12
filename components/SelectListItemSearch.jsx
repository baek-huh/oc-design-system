import { IconIcSearch } from './IconIcSearch.jsx';
import { IconIcXCircle } from './IconIcXCircle.jsx';
import { SelectListPrefixes } from './SelectListPrefixes.jsx';

// figma node: 7851:2606 Select List Item_Search (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function SelectListItemSearch(_p = {}) {
  const props = { ..._p, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
      backgroundColor: "var(--color-white)",
      boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
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
        flexDirection: "row",
        gap: 10,
        padding: "2px 2px 2px 2px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SelectListPrefixes icon={<IconIcSearch />} prefixes={"icon"} />}</div>
      </div>
      <div style={{
        position: "relative",
        width: 288,
        display: "flex",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
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
          alignSelf: "stretch",
        }}>{props.text1 ?? "검색어 입력"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 334,
      borderRadius: 4,
      backgroundColor: "var(--color-white)",
      boxShadow: "inset 0 0 0 1px rgb(224,224,224)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
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
        flexDirection: "row",
        gap: 10,
        padding: "2px 2px 2px 2px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <SelectListPrefixes icon={<IconIcSearch />} prefixes={"icon"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: -1,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: -1,
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
            alignSelf: "stretch",
          }}>{props.text1 ?? "클래스명 입"}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "2px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 1,
              backgroundColor: "rgb(217,217,217)",
              flexShrink: 0,
              alignSelf: "stretch",
            }} />
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 16,
              flexShrink: 0,
              alignSelf: "stretch",
              height: "auto",
            }}>{props.icon2 ?? <IconIcXCircle fill={true} />}</div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: State=Default
    "state=default": __body0,
    // figma: State=Typed
    "state=typed": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default SelectListItemSearch;
