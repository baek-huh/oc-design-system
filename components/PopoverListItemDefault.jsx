import { PopoverListSuffixes } from './PopoverListSuffixes.jsx';

// figma node: 9984:582 Popover List Item/Default
export function PopoverListItemDefault(_p = {}) {
  const props = { ..._p, showPrefixes: _p.showPrefixes ?? true, showSuffixes: _p.showSuffixes ?? true, description: _p.description ?? true };
  return (
    <div className={props.className} style={{
      width: 250,
      borderRadius: 8,
      backgroundColor: "var(--color-white)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 12px 10px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.showPrefixes && (
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
          width: 18,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={16.125} height={15.814} viewBox="0 0 16.125 15.814" fill="none" style={{
            position: "absolute",
            left: 0.938,
            top: 1.248,
            width: 16.125,
            height: 15.814,
            color: "var(--gray-900)",
          }}>
            <path d={"M 7.29 2.479 L 7.289 2.48 L 2.234 7.535 C 2.015 7.754 1.88 8.045 1.854 8.354 L 1.576 11.697 C 1.508 12.506 2.184 13.181 2.993 13.114 L 6.335 12.835 C 6.645 12.809 6.935 12.675 7.155 12.455 L 14.305 5.305 C 14.817 4.792 14.817 3.961 14.305 3.449 L 11.241 0.384 C 10.728 -0.128 9.897 -0.128 9.384 0.384 L 7.291 2.478 L 7.29 2.479 Z M 10.445 1.18 C 10.372 1.107 10.253 1.107 10.18 1.18 L 8.483 2.877 L 11.813 6.206 L 13.509 4.509 C 13.583 4.436 13.583 4.317 13.509 4.244 L 10.445 1.18 Z M 6.359 11.66 L 11.017 7.002 L 7.688 3.672 L 3.03 8.33 C 2.998 8.362 2.979 8.403 2.975 8.447 L 2.697 11.79 C 2.687 11.906 2.784 12.002 2.899 11.993 L 6.242 11.714 C 6.286 11.71 6.328 11.691 6.359 11.66 Z"} fill="currentColor" fillRule="evenodd" />
            <path d={"M 0.563 14.689 C 0.252 14.689 0 14.941 0 15.252 C 0 15.562 0.252 15.814 0.563 15.814 L 15.563 15.814 C 15.873 15.814 16.125 15.562 16.125 15.252 C 16.125 14.941 15.873 14.689 15.563 14.689 L 0.563 14.689 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 6,
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
          color: "var(--gray-900)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "팝오버 메뉴"}</span>
      </div>
      {props.showSuffixes && (
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <PopoverListSuffixes type={"icon"} />}</div>
      )}
    </div>
  );
}
export default PopoverListItemDefault;
