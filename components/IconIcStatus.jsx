// figma node: 10240:9371 icon/ic-status (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "status=" + __venc(p.status);

export function IconIcStatus(_p = {}) {
  const props = { ..._p, status: _p.status ?? "correct" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--green-500)",
      ...props.style,
    }}>
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 11 22 C 17.075 22 22 17.075 22 11 C 22 4.925 17.075 0 11 0 C 4.925 0 0 4.925 0 11 C 0 17.075 4.925 22 11 22 Z M 16.03 9.03 C 16.323 8.737 16.323 8.263 16.03 7.97 C 15.737 7.677 15.263 7.677 14.97 7.97 L 10 12.939 L 7.03 9.97 C 6.737 9.677 6.263 9.677 5.97 9.97 C 5.677 10.263 5.677 10.737 5.97 11.03 L 9.47 14.53 C 9.763 14.823 10.237 14.823 10.53 14.53 L 16.03 9.03 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--red-500)",
      ...props.style,
    }}>
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 11 22 C 17.075 22 22 17.075 22 11 C 22 4.925 17.075 0 11 0 C 4.925 0 0 4.925 0 11 C 0 17.075 4.925 22 11 22 Z M 6.97 15.03 C 6.677 14.737 6.677 14.263 6.97 13.97 L 9.939 11 L 6.97 8.03 C 6.677 7.737 6.677 7.263 6.97 6.97 C 7.263 6.677 7.737 6.677 8.03 6.97 L 11 9.939 L 13.97 6.97 C 14.263 6.677 14.737 6.677 15.03 6.97 C 15.323 7.263 15.323 7.737 15.03 8.03 L 12.061 11 L 15.03 13.97 C 15.323 14.263 15.323 14.737 15.03 15.03 C 14.737 15.323 14.263 15.323 13.97 15.03 L 11 12.061 L 8.03 15.03 C 7.737 15.323 7.263 15.323 6.97 15.03 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--yellow-500)",
      ...props.style,
    }}>
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 11 22 C 17.075 22 22 17.075 22 11 C 22 4.925 17.075 0 11 0 C 4.925 0 0 4.925 0 11 C 0 17.075 4.925 22 11 22 Z M 6.5 10.25 C 6.086 10.25 5.75 10.586 5.75 11 C 5.75 11.414 6.086 11.75 6.5 11.75 L 15.5 11.75 C 15.914 11.75 16.25 11.414 16.25 11 C 16.25 10.586 15.914 10.25 15.5 10.25 L 6.5 10.25 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: status=correct
    "status=correct": __body0,
    // figma: status=wrong
    "status=wrong": __body1,
    // figma: status=incomplete
    "status=incomplete": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default IconIcStatus;
