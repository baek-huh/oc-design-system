// figma node: 10227:327 icon/ic-sound-mute (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "fill=" + __venc(p.fill);

export function IconIcSoundMute(_p = {}) {
  const props = { ..._p, fill: _p.fill ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      color: "var(--gray-900)",
      ...props.style,
    }}>
      <svg width={21.500} height={17.752} viewBox="0 0 21.500 17.752" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 2.971,
        width: 21.5,
        height: 17.752,
      }}>
        <path d={"M 10.882 0.233 C 12.048 -0.433 13.5 0.409 13.5 1.753 L 13.5 15.999 C 13.5 17.45 11.834 18.271 10.683 17.386 L 6.062 13.831 C 6.019 13.798 5.965 13.779 5.91 13.779 L 1.75 13.779 C 0.784 13.779 0 12.996 0 12.029 L 0 5.029 C 0 4.063 0.784 3.279 1.75 3.279 L 5.484 3.279 C 5.528 3.279 5.571 3.268 5.608 3.246 L 10.882 0.233 Z M 12 1.753 C 12 1.561 11.793 1.44 11.626 1.536 L 6.353 4.549 C 6.088 4.7 5.789 4.779 5.484 4.779 L 1.75 4.779 C 1.612 4.779 1.5 4.891 1.5 5.029 L 1.5 12.029 C 1.5 12.167 1.612 12.279 1.75 12.279 L 5.91 12.279 C 6.296 12.279 6.671 12.407 6.977 12.642 L 11.598 16.197 C 11.762 16.323 12 16.206 12 15.999 L 12 1.753 Z"} fill="currentColor" fillRule="evenodd" />
        <path d={"M 15.22 5.999 C 15.513 5.706 15.987 5.706 16.28 5.999 L 18.25 7.969 L 20.22 5.999 C 20.513 5.706 20.987 5.706 21.28 5.999 C 21.573 6.292 21.573 6.767 21.28 7.06 L 19.311 9.029 L 21.28 10.999 C 21.573 11.292 21.573 11.767 21.28 12.06 C 20.987 12.353 20.513 12.353 20.22 12.06 L 18.25 10.09 L 16.28 12.06 C 15.987 12.353 15.513 12.353 15.22 12.06 C 14.927 11.767 14.927 11.292 15.22 10.999 L 17.189 9.029 L 15.22 7.06 C 14.927 6.767 14.927 6.292 15.22 5.999 Z"} fill="currentColor" fillRule="nonzero" />
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
      <svg width={21.500} height={17.752} viewBox="0 0 21.500 17.752" fill="none" style={{
        position: "absolute",
        left: 1.25,
        top: 2.971,
        width: 21.5,
        height: 17.752,
      }}>
        <path d={"M 13.5 1.753 C 13.5 0.409 12.048 -0.433 10.882 0.233 L 5.608 3.246 C 5.571 3.268 5.528 3.279 5.484 3.279 L 1.75 3.279 C 0.784 3.279 0 4.063 0 5.029 L 0 12.029 C 0 12.996 0.784 13.779 1.75 13.779 L 5.91 13.779 C 5.965 13.779 6.019 13.798 6.062 13.831 L 10.683 17.386 C 11.834 18.271 13.5 17.45 13.5 15.999 L 13.5 1.753 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 15.22 5.999 C 15.513 5.706 15.987 5.706 16.28 5.999 L 18.25 7.969 L 20.22 5.999 C 20.513 5.706 20.987 5.706 21.28 5.999 C 21.573 6.292 21.573 6.767 21.28 7.06 L 19.311 9.029 L 21.28 10.999 C 21.573 11.292 21.573 11.767 21.28 12.06 C 20.987 12.353 20.513 12.353 20.22 12.06 L 18.25 10.09 L 16.28 12.06 C 15.987 12.353 15.513 12.353 15.22 12.06 C 14.927 11.767 14.927 11.292 15.22 10.999 L 17.189 9.029 L 15.22 7.06 C 14.927 6.767 14.927 6.292 15.22 5.999 Z"} fill="currentColor" fillRule="nonzero" />
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
export default IconIcSoundMute;
