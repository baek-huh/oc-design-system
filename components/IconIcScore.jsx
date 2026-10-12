// figma node: 10240:9372 icon/ic-score (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "score=" + __venc(p.score);

export function IconIcScore(_p = {}) {
  const props = { ..._p, score: _p.score ?? "correct" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 11 18.7 C 15.253 18.7 18.7 15.253 18.7 11 C 18.7 6.747 15.253 3.3 11 3.3 C 6.747 3.3 3.3 6.747 3.3 11 C 3.3 15.253 6.747 18.7 11 18.7 Z M 11 22 C 17.075 22 22 17.075 22 11 C 22 4.925 17.075 0 11 0 C 4.925 0 0 4.925 0 11 C 0 17.075 4.925 22 11 22 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(255,205,75)",
      ...props.style,
    }}>
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 21.791 13.147 L 18.553 12.506 C 18.649 12.022 18.7 11.518 18.7 11 C 18.7 10.482 18.649 9.978 18.553 9.494 L 21.791 8.853 C 21.928 9.548 22 10.265 22 11 C 22 11.735 21.928 12.452 21.791 13.147 Z M 20.147 4.888 L 17.405 6.724 C 16.842 5.883 16.117 5.158 15.276 4.595 L 17.112 1.853 C 18.311 2.656 19.344 3.689 20.147 4.888 Z M 13.147 0.209 L 12.506 3.447 C 12.022 3.351 11.518 3.3 11 3.3 C 10.482 3.3 9.978 3.351 9.494 3.447 L 8.853 0.209 C 9.548 0.072 10.265 0 11 0 C 11.735 0 12.452 0.072 13.147 0.209 Z M 4.888 1.853 L 6.724 4.595 C 5.883 5.158 5.158 5.883 4.595 6.724 L 1.853 4.888 C 2.656 3.689 3.689 2.656 4.888 1.853 Z M 0.209 8.853 C 0.072 9.548 0 10.265 0 11 C 0 11.735 0.072 12.452 0.209 13.147 L 3.447 12.506 C 3.351 12.022 3.3 11.518 3.3 11 C 3.3 10.482 3.351 9.978 3.447 9.494 L 0.209 8.853 Z M 1.853 17.112 L 4.595 15.276 C 5.158 16.117 5.883 16.842 6.724 17.405 L 4.888 20.147 C 3.689 19.344 2.656 18.311 1.853 17.112 Z M 8.853 21.791 L 9.494 18.553 C 9.978 18.649 10.482 18.7 11 18.7 C 11.518 18.7 12.022 18.649 12.506 18.553 L 13.147 21.791 C 12.452 21.928 11.735 22 11 22 C 10.265 22 9.548 21.928 8.853 21.791 Z M 17.112 20.147 L 15.276 17.405 C 16.117 16.842 16.842 16.117 17.405 15.276 L 20.147 17.112 C 19.344 18.311 18.311 19.344 17.112 20.147 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={20} height={3} viewBox="0 0 20 3" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 10.5,
        width: 20,
        height: 3,
      }}>
        <path d={"M 20 3 L 0 3 L 0 0 L 20 0 L 20 3 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
      <svg width={20.122} height={20.121} viewBox="0 0 20.122 20.121" fill="none" style={{
        position: "absolute",
        left: 1.939,
        top: 1.939,
        width: 20.122,
        height: 20.121,
      }}>
        <path d={"M 7.939 10.061 L 0 18 L 2.121 20.121 L 10.061 12.182 L 18 20.121 L 20.122 18 L 12.182 10.061 L 20.121 2.121 L 18 0 L 10.061 7.939 L 2.122 0 L 0 2.121 L 7.939 10.061 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __impls = {
    // figma: score=correct
    "score=correct": __body0,
    // figma: score=wait
    "score=wait": __body1,
    // figma: score=no-gauge
    "score=no-gauge": __body2,
    // figma: score=wrong
    "score=wrong": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default IconIcScore;
