// figma node: 10227:5533 icon/ic-question-circle (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcQuestionCircle(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.500} height={21.500} viewBox="0 0 21.500 21.500" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 1.25,
        width: 21.5,
        height: 21.5,
      }}>
        <path d={"M 10.896 6.5 C 9.982 6.5 9.209 7.114 8.972 7.954 C 8.859 8.353 8.444 8.584 8.046 8.472 C 7.647 8.359 7.416 7.944 7.528 7.546 C 7.944 6.077 9.293 5 10.896 5 C 12.829 5 14.396 6.567 14.396 8.5 C 14.396 10.215 13.075 11.583 11.5 11.92 L 11.5 12.75 C 11.5 13.164 11.164 13.5 10.75 13.5 C 10.336 13.5 10 13.164 10 12.75 L 10 11.25 C 10 10.836 10.336 10.5 10.75 10.5 C 11.906 10.5 12.896 9.555 12.896 8.5 C 12.896 7.395 12.001 6.5 10.896 6.5 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 10.7 16.25 C 11.114 16.25 11.45 15.914 11.45 15.5 C 11.45 15.086 11.114 14.75 10.7 14.75 C 10.286 14.75 9.95 15.086 9.95 15.5 C 9.95 15.914 10.286 16.25 10.7 16.25 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 0 10.75 C 0 4.813 4.813 0 10.75 0 C 16.687 0 21.5 4.813 21.5 10.75 C 21.5 16.687 16.687 21.5 10.75 21.5 C 4.813 21.5 0 16.687 0 10.75 Z M 10.75 1.5 C 5.641 1.5 1.5 5.641 1.5 10.75 C 1.5 15.859 5.641 20 10.75 20 C 15.859 20 20 15.859 20 10.75 C 20 5.641 15.859 1.5 10.75 1.5 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 22 11 C 22 17.075 17.075 22 11 22 C 4.925 22 0 17.075 0 11 C 0 4.925 4.925 0 11 0 C 17.075 0 22 4.925 22 11 Z M 11.146 6.75 C 10.232 6.75 9.459 7.364 9.222 8.204 C 9.109 8.603 8.694 8.834 8.296 8.722 C 7.897 8.609 7.666 8.194 7.778 7.796 C 8.194 6.327 9.543 5.25 11.146 5.25 C 13.079 5.25 14.646 6.817 14.646 8.75 C 14.646 10.465 13.325 11.833 11.75 12.17 L 11.75 13 C 11.75 13.414 11.414 13.75 11 13.75 C 10.586 13.75 10.25 13.414 10.25 13 L 10.25 11.5 C 10.25 11.086 10.586 10.75 11 10.75 C 12.156 10.75 13.146 9.805 13.146 8.75 C 13.146 7.645 12.251 6.75 11.146 6.75 Z M 10.99 16.58 C 11.426 16.58 11.78 16.226 11.78 15.79 C 11.78 15.354 11.426 15 10.99 15 C 10.554 15 10.2 15.354 10.2 15.79 C 10.2 16.226 10.554 16.58 10.99 16.58 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: fill=false
    "fill=false": __body0,
    // figma: fill=true
    "fill=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default IconIcQuestionCircle;
